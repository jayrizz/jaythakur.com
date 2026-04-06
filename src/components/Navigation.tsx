'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isAppsOpen, setIsAppsOpen] = useState(false)

  const mainLinks = [
    { href: '/#timeline', label: 'Timeline' },
    { href: '/memory', label: 'Memory' },
    { href: '/mission-control', label: 'Mission Control' },
    { href: '/#about', label: 'About' },
    { href: '/#contact', label: 'Contact' },
  ]

  const appLinks = [
    { href: '/apps', label: 'All Apps' },
    { href: '/aoc-dashboard', label: 'AOC Dashboard' },
    { href: '/api/quant', label: 'Quant Dashboard' },
    { href: '/api/openclaw', label: 'OpenClaw', external: true },
  ]

  return (
    <nav className="nav-container">
      <div className="nav-links">
        <Link href="/" style={{ fontWeight: 700, fontSize: '1.1rem' }}>jaythakur.com</Link>
        
        {mainLinks.map((link) => (
          <Link key={link.href} href={link.href}>{link.label}</Link>
        ))}
        
        <div 
          className="apps-dropdown"
          onMouseEnter={() => setIsAppsOpen(true)}
          onMouseLeave={() => setIsAppsOpen(false)}
        >
          <span style={{ color: '#fff', cursor: 'pointer' }}>Apps ▾</span>
          <div 
            className="dropdown-menu" 
            style={{ 
              display: isAppsOpen ? 'block' : 'none'
            }}
          >
            {appLinks.map((app) => (
              <Link 
                key={app.href} 
                href={app.href} 
                target={app.external ? '_blank' : undefined}
              >
                {app.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}