import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'status.html')
  
  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }
  
  const content = fs.readFileSync(filePath, 'utf-8')
  
  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/html',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  })
}