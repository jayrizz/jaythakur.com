import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  // Try public folder first, then local .openclaw/workspace
  const possiblePaths = [
    path.join(process.cwd(), 'public/mission-control.html'),
    path.join(process.cwd(), 'mission-control.html'),
    path.join(process.env.HOME || '', '.openclaw/workspace/mission-control.html'),
  ]
  
  for (const filePath of possiblePaths) {
    try {
      if (fs.existsSync(filePath)) {
        const html = fs.readFileSync(filePath, 'utf-8')
        return new NextResponse(html, {
          headers: {
            'Content-Type': 'text/html',
          },
        })
      }
    } catch {
      continue
    }
  }
  
  return NextResponse.json({ error: 'Mission Control not found' }, { status: 404 })
}
