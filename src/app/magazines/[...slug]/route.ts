import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

// This route serves magazines from the public/magazines folder
// URL format: /magazines/2026-07-11 or /magazines/2026-07-11.html

export async function GET(
  request: Request,
  { params }: { params: { slug: string[] } }
) {
  const slug = params.slug
  
  // Build filename from slug
  let filename = slug.join('/')
  
  // Try .html extension if not present
  if (!filename.endsWith('.html')) {
    filename = filename + '.html'
  }
  
  const filePath = path.join(process.cwd(), 'public', 'magazines', filename)
  
  if (fs.existsSync(filePath)) {
    const html = fs.readFileSync(filePath, 'utf-8')
    return new NextResponse(html, {
      headers: {
        'Content-Type': 'text/html',
      },
    })
  }
  
  return NextResponse.json({ error: 'Magazine not found', filename }, { status: 404 })
}
