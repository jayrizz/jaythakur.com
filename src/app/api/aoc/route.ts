import { NextResponse } from 'next/server'

// Proxy route to local AOC Dashboard via Tailscale
// Uses fetch with redirect follow

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const path = searchParams.get('path') || ''
  
  const AOC_TAILSCALE = 'https://uncles-mac-mini-1.taila93175.ts.net'
  
  try {
    const response = await fetch(`${AOC_TAILSCALE}/${path}`, {
      headers: {
        'User-Agent': 'Jaythakur.com Proxy',
      },
      redirect: 'follow',
      signal: AbortSignal.timeout(10000),
    })
    
    if (response.ok) {
      const html = await response.text()
      // Rewrite URLs in the HTML to maintain proxy
      const rewritten = html.replace(
        /http:\/\/localhost:18790\/api\/v1/g, 
        'https://jaythakur.com/api/aoc-data'
      ).replace(
        /http:\/\/localhost:18790/g,
        'https://jaythakur.com/api/aoc-data'
      )
      
      return new NextResponse(rewritten, {
        headers: { 'Content-Type': 'text/html' },
      })
    }
  } catch (error) {
    console.error('Proxy error:', error)
  }
  
  return new NextResponse(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>AOC Dashboard</title>
      <style>
        body { font-family: system-ui; padding: 40px; text-align: center; background: #0f1419; color: #e7e9ea; }
        .container { max-width: 800px; margin: 0 auto; }
        h1 { color: #6366f1; }
        .loading { color: #9ca3af; margin-top: 20px; }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🤖 Agent Operations Center</h1>
        <p class="loading">Loading dashboard...</p>
      </div>
    </body>
    </html>
  `, { headers: { 'Content-Type': 'text/html' } })
}