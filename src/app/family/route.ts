import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  const filePath = path.join(process.cwd(), 'public/family/index.html')
  
  try {
    const html = fs.readFileSync(filePath, 'utf-8')
    return new NextResponse(html, {
      headers: {
        'Content-Type': 'text/html',
      },
    })
  } catch (error) {
    return NextResponse.json({ error: 'Family page not found' }, { status: 404 })
  }
}
