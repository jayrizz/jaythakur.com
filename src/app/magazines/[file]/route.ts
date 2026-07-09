import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ file: string }> }
) {
  const { file } = await params;
  
  // For Vercel, we need to read from the deployed file system
  // The magazines are bundled with the deployment
  const basePath = process.env.VERCEL 
    ? '/var/task/public' 
    : path.join(process.cwd(), 'public');
    
  const filePath = path.join(basePath, 'magazines', file);
  
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8');
    return new NextResponse(content, {
      headers: {
        'Content-Type': 'text/html',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  }
  
  return new NextResponse(`File not found: ${filePath}`, { status: 404 });
}
