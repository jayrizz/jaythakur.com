import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  const memoryDir = path.join(process.env.HOME || '/Users/admin', '.openclaw/workspace/memory')
  
  try {
    const files = fs.readdirSync(memoryDir)
    const memories = files
      .filter(f => f.match(/^\d{4}-\d{2}-\d{2}\.md$/))
      .map(f => {
        const content = fs.readFileSync(path.join(memoryDir, f), 'utf-8')
        return {
          date: f.replace('.md', ''),
          content,
          excerpt: content.slice(0, 200).replace(/[#*]/g, '').trim()
        }
      })
      .sort((a, b) => b.date.localeCompare(a.date))

    return NextResponse.json({ memories })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to load memories' }, { status: 500 })
  }
}