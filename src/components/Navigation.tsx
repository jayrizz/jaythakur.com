'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isAppsOpen, setIsAppsOpen] = useState(false)

  return (
    <nav className="nav-container">
      <div className="nav-links">
        <Link href="/" style={{ fontWeight: 700, fontSize: '1.1rem' }}>jaythakur.com</Link>
        <Link href="/">Home</Link>
        <Link href="/memory">Memory</Link>
        <Link href="/mission-control">Mission Control</Link>
        <Link href="/agent-fleet">Agent Fleet</Link>
        <Link href="/projects">Projects</Link>
        
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
            <Link href="/apps">All Apps</Link>
            <Link href="/aoc-dashboard">AOC Dashboard</Link>
            <Link href="/api/quant">Quant Dashboard</Link>
            <Link href="/api/openclaw" target="_blank">OpenClaw</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}