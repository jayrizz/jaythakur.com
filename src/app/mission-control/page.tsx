'use client'

import { useState, useEffect } from 'react'
import PageHeader from '@/components/PageHeader'
import Card, { CardHeader, CardContent, CardActions } from '@/components/Card'
import { ServiceStatus } from '@/types'
import { formatRelativeTime } from '@/lib/utils'

export default function MissionControlPage() {
  const [services, setServices] = useState<ServiceStatus[]>([
    { name: 'AOC Dashboard', status: 'unknown', url: 'http://localhost:18800', port: 18800, lastChecked: new Date().toISOString() },
    { name: 'Quant Dashboard', status: 'unknown', url: 'http://localhost:5173', port: 5173, lastChecked: new Date().toISOString() },
    { name: 'OpenClaw Gateway', status: 'unknown', url: 'http://localhost:3000', port: 3000, lastChecked: new Date().toISOString() },
    { name: 'Next.js Dev Server', status: 'unknown', url: 'http://localhost:3001', port: 3001, lastChecked: new Date().toISOString() }
  ])

  const [lastRefresh, setLastRefresh] = useState<Date>(new Date())

  const checkServiceHealth = async (url: string): Promise<{ status: 'online' | 'offline'; responseTime?: number }> => {
    try {
      const start = Date.now()
      const response = await fetch(`/api/health-check?url=${encodeURIComponent(url)}`, {
        method: 'GET',
        signal: AbortSignal.timeout(5000)
      })
      const responseTime = Date.now() - start
      
      const result = await response.json()
      return {
        status: result.status === 'ok' ? 'online' : 'offline',
        responseTime: result.responseTime || responseTime
      }
    } catch (error) {
      return { status: 'offline' }
    }
  }

  const refreshServices = async () => {
    setLastRefresh(new Date())
    
    const updatedServices = await Promise.all(
      services.map(async (service) => {
        if (!service.url) return service
        
        const health = await checkServiceHealth(service.url)
        return {
          ...service,
          status: health.status,
          responseTime: health.responseTime,
          lastChecked: new Date().toISOString()
        }
      })
    )
    
    setServices(updatedServices)
  }

  useEffect(() => {
    refreshServices()
    const interval = setInterval(refreshServices, 30000) // Check every 30 seconds
    return () => clearInterval(interval)
  }, [])

  const onlineServices = services.filter(s => s.status === 'online').length
  const offlineServices = services.filter(s => s.status === 'offline').length
  const totalServices = services.length

  const systemStats = [
    { 
      label: 'Services Online', 
      value: `${onlineServices}/${totalServices}`,
      color: onlineServices === totalServices ? '#22c55e' : offlineServices > 0 ? '#ef4444' : '#fbbf24'
    },
    { 
      label: 'System Health', 
      value: Math.round((onlineServices / totalServices) * 100) + '%',
      color: onlineServices === totalServices ? '#22c55e' : onlineServices > totalServices / 2 ? '#fbbf24' : '#ef4444'
    },
    { 
      label: 'Last Check', 
      value: formatRelativeTime(lastRefresh),
      color: '#4a9eff'
    },
    { 
      label: 'Auto Refresh', 
      value: '30s',
      color: '#6b7280'
    }
  ]

  return (
    <>
      <PageHeader
        title="Mission Control"
        description="System monitoring, service health, and operational dashboard for all applications and tools."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Mission Control' }
        ]}
      />

      {/* System Overview */}
      <div className="grid grid-4" style={{ marginBottom: '32px' }}>
        {systemStats.map((stat, index) => (
          <Card key={index}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold', 
                color: stat.color, 
                marginBottom: '4px' 
              }}>
                {stat.value}
              </div>
              <div style={{ color: '#aaa', fontSize: '0.9rem' }}>
                {stat.label}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Service Status */}
      <div style={{ marginBottom: '32px' }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: '16px' 
        }}>
          <h2 style={{ color: '#fff' }}>Service Status</h2>
          <button 
            onClick={refreshServices}
            className="btn btn-secondary"
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            🔄 Refresh
          </button>
        </div>

        <div className="grid grid-2">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader
                title={service.name}
                subtitle={service.url}
                status={service.status}
              />
              <CardContent>
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: '1fr 1fr', 
                  gap: '16px',
                  fontSize: '0.9rem'
                }}>
                  <div>
                    <div style={{ color: '#aaa' }}>Port</div>
                    <div style={{ color: '#fff', fontWeight: '500' }}>
                      {service.port || 'N/A'}
                    </div>
                  </div>
                  <div>
                    <div style={{ color: '#aaa' }}>Response Time</div>
                    <div style={{ color: '#fff', fontWeight: '500' }}>
                      {service.responseTime ? `${service.responseTime}ms` : 'N/A'}
                    </div>
                  </div>
                  <div>
                    <div style={{ color: '#aaa' }}>Last Checked</div>
                    <div style={{ color: '#fff', fontWeight: '500' }}>
                      {formatRelativeTime(service.lastChecked)}
                    </div>
                  </div>
                  <div>
                    <div style={{ color: '#aaa' }}>Actions</div>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      {service.url && (
                        <a 
                          href={service.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn"
                          style={{ 
                            padding: '4px 8px', 
                            fontSize: '0.75rem',
                            textDecoration: 'none'
                          }}
                        >
                          Open
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader title="Quick Actions" subtitle="Common operational tasks" />
        <CardContent>
          <div className="grid grid-3">
            <button className="btn">
              🚀 Deploy All
            </button>
            <button className="btn">
              🔧 Restart Services
            </button>
            <button className="btn">
              📊 View Logs
            </button>
            <button className="btn btn-secondary">
              🔍 System Diagnostics
            </button>
            <button className="btn btn-secondary">
              📈 Performance Metrics
            </button>
            <button className="btn btn-secondary">
              ⚙️ Configuration
            </button>
          </div>
        </CardContent>
      </Card>

      {/* System Information */}
      <div className="grid grid-2" style={{ marginTop: '32px' }}>
        <Card>
          <CardHeader title="Environment Info" />
          <CardContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#aaa' }}>Node.js</span>
                <span style={{ color: '#fff' }}>v25.5.0</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#aaa' }}>Next.js</span>
                <span style={{ color: '#fff' }}>^14.2.0</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#aaa' }}>Platform</span>
                <span style={{ color: '#fff' }}>Darwin arm64</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#aaa' }}>Runtime</span>
                <span style={{ color: '#fff' }}>OpenClaw</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader title="Recent Activity" />
          <CardContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
              <div style={{ borderLeft: '3px solid #22c55e', paddingLeft: '12px' }}>
                <div style={{ color: '#fff', fontWeight: '500' }}>Services Started</div>
                <div style={{ color: '#aaa' }}>2 minutes ago</div>
              </div>
              <div style={{ borderLeft: '3px solid #4a9eff', paddingLeft: '12px' }}>
                <div style={{ color: '#fff', fontWeight: '500' }}>Health Check Completed</div>
                <div style={{ color: '#aaa' }}>30 seconds ago</div>
              </div>
              <div style={{ borderLeft: '3px solid #fbbf24', paddingLeft: '12px' }}>
                <div style={{ color: '#fff', fontWeight: '500' }}>Configuration Updated</div>
                <div style={{ color: '#aaa' }}>5 minutes ago</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}