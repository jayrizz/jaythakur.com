import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jay Thakur | Building with AI',
  description: 'Timeline of human-AI collaboration - production systems built with AI partners',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav style={{ padding: '12px 24px', background: '#0f0f23', display: 'flex', gap: '24px', borderBottom: '1px solid #333' }}>
          <a href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</a>
          <a href="/memory" style={{ color: '#fff', textDecoration: 'none' }}>Memory</a>
          <a href="/mission-control.html" style={{ color: '#fff', textDecoration: 'none' }}>Mission Control</a>
          <div style={{ position: 'relative' }} className="apps-dropdown">
            <span style={{ color: '#fff', cursor: 'pointer' }}>Apps ▾</span>
            <div className="dropdown-menu" style={{ 
              display: 'none', 
              position: 'absolute', 
              top: '100%', 
              left: 0, 
              background: '#1a1a2e', 
              padding: '12px',
              borderRadius: '8px',
              minWidth: '180px'
            }}>
              <a href="/api/aoc" style={{ display: 'block', color: '#4a9eff', padding: '8px 0', textDecoration: 'none' }}>AOC Dashboard</a>
              <a href="/api/quant" style={{ display: 'block', color: '#4a9eff', padding: '8px 0', textDecoration: 'none' }}>Quant Dashboard</a>
              <a href="/api/openclaw" style={{ display: 'block', color: '#4a9eff', padding: '8px 0', textDecoration: 'none' }}>OpenClaw</a>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}