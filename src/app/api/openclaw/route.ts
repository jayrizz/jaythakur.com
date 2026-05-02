import { NextResponse } from 'next/server'

export const dynamic = 'force-static'

// Proxy route to local OpenClaw Gateway
// Default gateway runs on port 3000

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const path = searchParams.get('path') || ''
  
  const OPENCLAW_LOCAL = 'http://localhost:3000'
  
  try {
    const response = await fetch(`${OPENCLAW_LOCAL}/${path}`, {
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
      <title>OpenClaw Gateway - Offline</title>
      <style>
        body { 
          font-family: system-ui; 
          padding: 40px; 
          text-align: center; 
          background: #1a1a2e; 
          color: #eee; 
        }
        .container { 
          max-width: 600px; 
          margin: 0 auto; 
        }
        h1 { 
          color: #4a9eff; 
          margin-bottom: 24px;
        }
        p { 
          color: #aaa; 
          margin-bottom: 16px; 
          line-height: 1.6;
        }
        .btn { 
          display: inline-block; 
          background: #4a9eff; 
          color: white; 
          padding: 12px 24px; 
          border-radius: 8px; 
          text-decoration: none; 
          margin: 8px; 
          transition: background-color 0.2s;
        }
        .btn:hover {
          background: #3b82f6;
        }
        .btn-secondary {
          background: #374151;
        }
        .btn-secondary:hover {
          background: #4b5563;
        }
        .code {
          background: #0f0f23;
          padding: 12px;
          border-radius: 8px;
          font-family: monospace;
          margin: 16px 0;
          border: 1px solid #333;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🤖 OpenClaw Gateway</h1>
        <p>The OpenClaw Gateway service is not running locally.</p>
        
        <div class="code">
          <div>Start the gateway:</div>
          <div style="color: #4a9eff; margin-top: 8px;">
            openclaw gateway start
          </div>
        </div>
        
        <p>
          OpenClaw is an AI assistant system with modular skills and tool access. 
          The gateway provides a web interface for managing skills, viewing logs, 
          and configuring the agent behavior.
        </p>
        
        <div>
          <a href="http://localhost:3000" target="_blank" class="btn">
            🔗 Open Locally (port 3000)
          </a>
          <a href="/mission-control" class="btn btn-secondary">
            📊 Check System Status
          </a>
          <a href="/apps" class="btn btn-secondary">
            🚀 Back to Apps
          </a>
        </div>
        
        <p style="margin-top: 32px; font-size: 0.9rem;">
          Need help? Check the 
          <a href="https://github.com/openclaw-ai/openclaw" target="_blank" style="color: #4a9eff;">
            OpenClaw documentation
          </a>
        </p>
      </div>
    </body>
    </html>
  `, { headers: { 'Content-Type': 'text/html' } })
}