'use client'

import { useState, useEffect } from 'react'
import PageHeader from '@/components/PageHeader'
import Card, { CardHeader, CardContent, CardActions } from '@/components/Card'
import { App } from '@/types'
import { formatRelativeTime } from '@/lib/utils'

export default function AppsPage() {
  const [apps, setApps] = useState<App[]>([
    {
      id: 'aoc-dashboard',
      name: 'AOC Dashboard',
      description: 'Track Advent of Code progress, view solutions, and analyze performance metrics.',
      icon: '🎄',
      status: 'unknown',
      type: 'local',
      url: '/aoc-dashboard',
      port: 18800,
      category: 'dashboard'
    },
    {
      id: 'quant-dashboard', 
      name: 'Quant Dashboard',
      description: 'Real-time financial data visualization and quantitative analysis tools.',
      icon: '📈',
      status: 'unknown',
      type: 'local',
      url: 'https://dist-inky-omega-95.vercel.app',
      port: 5173,
      category: 'dashboard'
    },
    {
      id: 'openclaw-gateway',
      name: 'OpenClaw Gateway',
      description: 'AI assistant control panel and skill management interface.',
      icon: '🤖',
      status: 'unknown',
      type: 'local',
      url: '/api/openclaw',
      port: 3000,
      category: 'tool'
    },
    {
      id: 'mission-control',
      name: 'Mission Control',
      description: 'System monitoring and operational dashboard for all services.',
      icon: '🎯',
      status: 'online',
      type: 'deployed',
      url: '/mission-control',
      category: 'dashboard'
    },
    {
      id: 'memory-browser',
      name: 'Memory Browser',
      description: 'Explore memories, learnings, and insights over time.',
      icon: '🧠',
      status: 'online',
      type: 'deployed',
      url: '/memory',
      category: 'tool'
    },
    {
      id: 'project-showcase',
      name: 'Project Showcase',
      description: 'Portfolio of AI-powered projects and experiments.',
      icon: '🚀',
      status: 'online',
      type: 'deployed',
      url: '/projects',
      category: 'tool'
    }
  ])

  const [lastRefresh, setLastRefresh] = useState<Date>(new Date())

  const checkAppHealth = async (app: App) => {
    if (app.type === 'deployed') {
      // These are part of this Next.js app, always online
      return { status: 'online' as const }
    }

    try {
      const response = await fetch(`/api/health-check?url=${encodeURIComponent(`http://localhost:${app.port}`)}`, {
        method: 'GET',
        signal: AbortSignal.timeout(3000)
      })
      const result = await response.json()
      return { status: result.status === 'ok' ? 'online' as const : 'offline' as const }
    } catch (error) {
      return { status: 'offline' as const }
    }
  }

  const refreshApps = async () => {
    setLastRefresh(new Date())
    
    const updatedApps = await Promise.all(
      apps.map(async (app) => {
        const health = await checkAppHealth(app)
        return {
          ...app,
          status: health.status
        }
      })
    )
    
    setApps(updatedApps)
  }

  useEffect(() => {
    refreshApps()
    const interval = setInterval(refreshApps, 60000) // Check every minute
    return () => clearInterval(interval)
  }, [])

  const appsByCategory = apps.reduce((acc, app) => {
    if (!acc[app.category]) acc[app.category] = []
    acc[app.category].push(app)
    return acc
  }, {} as Record<string, App[]>)

  const categoryNames = {
    dashboard: '📊 Dashboards',
    tool: '🔧 Tools & Utilities',
    game: '🎮 Games & Fun',
    utility: '⚙️ System Utilities'
  }

  const onlineApps = apps.filter(app => app.status === 'online').length
  const totalApps = apps.length

  return (
    <>
      <PageHeader
        title="Apps"
        description="Collection of tools, dashboards, and applications. Local services and deployed apps all in one place."

      />

      {/* App Stats */}
      <div className="grid grid-3" style={{ marginBottom: '32px' }}>
        <Card>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#4a9eff', marginBottom: '4px' }}>
              {totalApps}
            </div>
            <div style={{ color: '#aaa', fontSize: '0.9rem' }}>
              Total Apps
            </div>
          </div>
        </Card>
        
        <Card>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#22c55e', marginBottom: '4px' }}>
              {onlineApps}
            </div>
            <div style={{ color: '#aaa', fontSize: '0.9rem' }}>
              Online Now
            </div>
          </div>
        </Card>
        
        <Card>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#f59e0b', marginBottom: '4px' }}>
              {Math.round((onlineApps / totalApps) * 100)}%
            </div>
            <div style={{ color: '#aaa', fontSize: '0.9rem' }}>
              Availability
            </div>
          </div>
        </Card>
      </div>

      {/* Refresh Controls */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '24px' 
      }}>
        <div style={{ color: '#aaa', fontSize: '0.9rem' }}>
          Last updated: {formatRelativeTime(lastRefresh)}
        </div>
        <button 
          onClick={refreshApps}
          className="btn btn-secondary"
          style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
        >
          🔄 Refresh Status
        </button>
      </div>

      {/* Apps by Category */}
      {Object.entries(appsByCategory).map(([category, categoryApps]) => (
        <div key={category} style={{ marginBottom: '48px' }}>
          <h2 style={{ 
            color: '#fff', 
            marginBottom: '24px',
            fontSize: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            {categoryNames[category as keyof typeof categoryNames] || category}
            <span style={{ 
              backgroundColor: '#374151', 
              color: '#d1d5db',
              padding: '2px 8px',
              borderRadius: '12px',
              fontSize: '0.75rem',
              fontWeight: '500'
            }}>
              {categoryApps.length}
            </span>
          </h2>
          
          <div className="grid grid-3">
            {categoryApps
              .sort((a, b) => {
                const statusOrder = { online: 0, building: 1, offline: 2, unknown: 3 }
                return statusOrder[a.status] - statusOrder[b.status]
              })
              .map((app) => (
              <Card key={app.id} hover>
                <CardHeader
                  title={
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '1.5rem' }}>{app.icon}</span>
                      {app.name}
                    </div>
                  }
                  subtitle={`${app.type} • port ${app.port || 'N/A'}`}
                  status={app.status}
                />
                <CardContent>
                  <p style={{ marginBottom: '16px', lineHeight: 1.6 }}>
                    {app.description}
                  </p>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: '#aaa' }}>Type</span>
                      <span style={{ color: '#fff', fontWeight: '500', textTransform: 'capitalize' }}>
                        {app.type}
                      </span>
                    </div>
                    {app.port && (
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ color: '#aaa' }}>Port</span>
                        <span style={{ color: '#fff', fontWeight: '500' }}>
                          {app.port}
                        </span>
                      </div>
                    )}
                  </div>
                </CardContent>
                
                <CardActions>
                  {app.status === 'online' ? (
                    <a href={app.url} target={app.type === 'external' ? '_blank' : undefined} className="btn">
                      🚀 Launch App
                    </a>
                  ) : (
                    <button className="btn" disabled style={{ opacity: 0.5, cursor: 'not-allowed' }}>
                      ⏸️ Offline
                    </button>
                  )}
                  
                  {app.type === 'local' && (
                    <button className="btn btn-secondary">
                      ⚙️ Settings
                    </button>
                  )}
                </CardActions>
              </Card>
            ))}
          </div>
        </div>
      ))}

      {/* Quick Launch */}
      <Card style={{ marginTop: '32px' }}>
        <CardHeader 
          title="Quick Launch" 
          subtitle="Frequently used applications and tools" 
        />
        <CardContent>
          <div className="grid grid-4">
            {apps
              .filter(app => app.status === 'online')
              .slice(0, 4)
              .map((app) => (
              <a 
                key={app.id}
                href={app.url}
                target={app.type === 'external' ? '_blank' : undefined}
                className="btn"
                style={{ 
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '16px',
                  textDecoration: 'none'
                }}
              >
                <span style={{ fontSize: '2rem' }}>{app.icon}</span>
                <span style={{ fontSize: '0.9rem' }}>{app.name}</span>
              </a>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* App Management */}
      <Card style={{ marginTop: '24px' }}>
        <CardHeader title="App Management" subtitle="Control and monitor all applications" />
        <CardContent>
          <div className="grid grid-3">
            <button className="btn">
              🚀 Start All Services
            </button>
            <button className="btn btn-secondary">
              ⏸️ Stop All Services  
            </button>
            <button className="btn btn-secondary">
              🔄 Restart Failed Services
            </button>
            <button className="btn btn-secondary">
              📊 View Logs
            </button>
            <button className="btn btn-secondary">
              ⚙️ Configuration
            </button>
            <button className="btn btn-secondary">
              ➕ Add New App
            </button>
          </div>
        </CardContent>
      </Card>
    </>
  )
}