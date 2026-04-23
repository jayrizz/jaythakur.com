import fs from 'fs';
import path from 'path';

export async function generateStaticParams() {
  const magazinesDir = path.join(process.cwd(), 'public/magazines');
  if (!fs.existsSync(magazinesDir)) return [];
  
  const files = fs.readdirSync(magazinesDir).filter(f => f.endsWith('.html'));
  return files.map(f => ({ date: f.replace('.html', '') }));
}

export default async function MagazinePage({ params }: { params: { date: string } }) {
  const { date } = await params;
  const filePath = path.join(process.cwd(), 'public/magazines', `${date}.html`);
  
  let content = '';
  if (fs.existsSync(filePath)) {
    content = fs.readFileSync(filePath, 'utf-8');
  } else {
    return <div>Magazine not found: {date}</div>;
  }
  
  // Extract just the body content
  const bodyMatch = content.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  const bodyContent = bodyMatch ? bodyMatch[1] : content;
  
  return (
    <div dangerouslySetInnerHTML={{ __html: bodyContent }} />
  );
}