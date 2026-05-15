import { NextResponse } from 'next/server'

// Proxy route to local Quant Dashboard
// Local service runs on port 5173

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const path = searchParams.get('path') || ''
  
  const QUANT_LOCAL = 'http://localhost:5173'
  
  try {
    const response = await fetch(`${QUANT_LOCAL}/${path}`, {
      headers: { 'User-Agent': 'Jaythakur.com Proxy' },
      signal: AbortSignal.timeout(5000),
    })
    
    if (response.ok) {
      const html = await response.text()
      return new NextResponse(html, {
        headers: { 'Content-Type': 'text/html' },
      })
    }
  } catch (error) {
    // Local not available
  }
  
  return new NextResponse(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Quant Dashboard - Offline</title>
      <style>
        body { font-family: system-ui; padding: 40px; text-align: center; background: #1a1a2e; color: #eee; }
        .container { max-width: 500px; margin: 0 auto; }
        h1 { color: #ff6b6b; }
        p { color: #aaa; }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>📊 Quant Dashboard</h1>
        <p>Local service not running</p>
        <a href="/apps" target="_blank">View Apps</a>
      </div>
    </body>
    </html>
  `, { headers: { 'Content-Type': 'text/html' } })
}