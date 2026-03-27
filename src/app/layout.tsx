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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body style={{ margin: 0, fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', background: '#0f0f23', color: '#e7e9ea' }}>
        {/* Consistent Navigation Bar */}
        <nav className="navbar">
          {/* Logo / Home */}
          <a href="/" className="nav-logo">
            <span className="nav-logo-icon">J</span>
            <span className="nav-logo-text">Jay Thakur</span>
          </a>

          {/* Main Nav Links */}
          <div className="nav-links">
            <a href="/" className="nav-link">Home</a>
            <a href="/memory" className="nav-link">Memory</a>
            <a href="/mission-control.html" className="nav-link">Mission Control</a>
            
            {/* Apps Dropdown */}
            <div className="dropdown-container">
              <button className="dropdown-trigger">
                Apps
                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                  <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                </svg>
              </button>
              <div className="dropdown-menu">
                <a href="/api/aoc" className="dropdown-link">🤖 AOC Dashboard</a>
                <a href="/api/quant" className="dropdown-link">📊 Quant Dashboard</a>
                <a href="https://uncles-mac-mini-1.taila93175.ts.net" className="dropdown-link" target="_blank" rel="noopener">🔧 OpenClaw</a>
              </div>
            </div>
          </div>

          {/* Right side - status */}
          <div className="nav-status">
            <span className="status-indicator"></span>
            Online
          </div>
        </nav>

        {/* Styles */}
        <style dangerouslySetInnerHTML={{__html: `
          .navbar {
            position: sticky;
            top: 0;
            z-index: 100;
            padding: 16px 32px;
            background: linear-gradient(180deg, #161b2e 0%, #0f0f23 100%);
            border-bottom: 1px solid #2d3748;
            display: flex;
            align-items: center;
            justify-content: space-between;
            backdrop-filter: blur(10px);
          }
          .nav-logo {
            display: flex;
            align-items: center;
            gap: 8px;
            text-decoration: none;
            color: #fff;
            font-weight: 600;
            font-size: 18px;
          }
          .nav-logo-icon {
            width: 32px;
            height: 32px;
            background: linear-gradient(135deg, #6366f1, #8b5cf6);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
          }
          .nav-logo-text {
            display: none;
          }
          @media (min-width: 768px) {
            .nav-logo-text { display: inline; }
          }
          .nav-links {
            display: flex;
            gap: 4px;
            align-items: center;
          }
          .nav-link {
            padding: 8px 16px;
            border-radius: 6px;
            color: #9ca3af;
            text-decoration: none;
            font-size: 14px;
            font-weight: 500;
            transition: all 0.2s;
          }
          .nav-link:hover {
            background: #1f2937;
            color: #fff;
          }
          .dropdown-container {
            position: relative;
          }
          .dropdown-trigger {
            background: transparent;
            border: none;
            color: #9ca3af;
            padding: 8px 16px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 14px;
            font-weight: 500;
            display: flex;
            align-items: center;
            gap: 6px;
            transition: all 0.2s;
          }
          .dropdown-trigger:hover {
            background: #1f2937;
            color: #fff;
          }
          .dropdown-menu {
            display: none;
            position: absolute;
            top: 100%;
            right: 0;
            margin-top: 8px;
            background: #1a1f2e;
            border-radius: 12px;
            padding: 8px;
            min-width: 200px;
            border: 1px solid #374151;
            box-shadow: 0 10px 40px rgba(0,0,0,0.5);
          }
          .dropdown-container:hover .dropdown-menu {
            display: block;
          }
          .dropdown-link {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 14px;
            border-radius: 8px;
            color: #e7e9ea;
            text-decoration: none;
            font-size: 14px;
            transition: all 0.15s;
          }
          .dropdown-link:hover {
            background: #374151;
            color: #fff;
          }
          .nav-status {
            display: none;
            align-items: center;
            gap: 12px;
            font-size: 12px;
            color: #10b981;
          }
          @media (min-width: 640px) {
            .nav-status { display: flex; }
          }
          .status-indicator {
            width: 8px;
            height: 8px;
            background: #10b981;
            border-radius: 50%;
          }
        `}} />

        {children}
      </body>
    </html>
  )
}