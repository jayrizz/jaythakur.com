import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ file: string }> }
) {
  const { file } = await params;
  const filePath = path.join(process.cwd(), 'public', 'magazines', file);
  
  console.log('Looking for file at:', filePath);
  console.log('File exists:', fs.existsSync(filePath));
  
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8');
    return new NextResponse(content, {
      headers: {
        'Content-Type': 'text/html',
      },
    });
  }
  
  return new NextResponse('Not Found: ' + filePath, { status: 404 });
}
