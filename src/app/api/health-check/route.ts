import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const url = searchParams.get('url')
  
  if (!url) {
    return NextResponse.json(
      { error: 'URL parameter is required' },
      { status: 400 }
    )
  }

  try {
    const start = Date.now()
    
    // Use HEAD request for health check to minimize data transfer
    const response = await fetch(url, {
      method: 'HEAD',
      signal: AbortSignal.timeout(5000),
      headers: {
        'User-Agent': 'Jaythakur.com Health Check'
      }
    })
    
    const responseTime = Date.now() - start
    
    return NextResponse.json({
      status: response.ok ? 'ok' : 'error',
      statusCode: response.status,
      responseTime,
      url: url,
      timestamp: new Date().toISOString()
    })
    
  } catch (error) {
    // Handle network errors, timeouts, etc.
    const responseTime = Date.now() - Date.now()
    
    return NextResponse.json({
      status: 'error',
      error: error instanceof Error ? error.message : 'Unknown error',
      responseTime: null,
      url: url,
      timestamp: new Date().toISOString()
    })
  }
}