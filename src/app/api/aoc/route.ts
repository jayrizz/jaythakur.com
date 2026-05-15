import { NextResponse } from 'next/server'

// Proxy route to local AOC Dashboard
// Local service runs on port 18800
// Uses Tailscale serve for remote access

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const path = searchParams.get('path') || ''
  
  // Local Tailscale URL for AOC (if serving)
  const AOC_LOCAL = 'http://localhost:18800'
  
  try {
    // Try to fetch from local AOC
    const response = await fetch(`${AOC_LOCAL}/${path}`, {
      headers: {
        'User-Agent': 'Jaythakur.com Proxy',
      },
      // Add timeout
      signal: AbortSignal.timeout(5000),
    })
    
    if (response.ok) {
      const html = await response.text()
      return new NextResponse(html, {
        headers: {
          'Content-Type': 'text/html',
        },
      })
    }
  } catch (error) {
    // Local not available, return message
  }
  
  // Fallback: Return message that local service is not running
  return new NextResponse(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>AOC Dashboard - Offline</title>
      <style>
        body { font-family: system-ui; padding: 40px; text-align: center; background: #1a1a2e; color: #eee; }
        .container { max-width: 500px; margin: 0 auto; }
        h1 { color: #ff6b6b; }
        p { color: #aaa; }
        .btn { display: inline-block; background: #4a9eff; color: white; padding: 12px 24px; 
               border-radius: 8px; text-decoration: none; margin-top: 20px; }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🖥️ AOC Dashboard</h1>
        <p>Local service not running</p>
        <p>To start: openclaw gateway start</p>
        <a href="/aoc-dashboard" class="btn" target="_blank">View Dashboard</a>
      </div>
    </body>
    </html>
  `, {
    headers: { 'Content-Type': 'text/html' },
  })
}