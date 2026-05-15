'use client'

import { useState, useEffect } from 'react'
import PageHeader from '@/components/PageHeader'
import Card, { CardHeader, CardContent, CardActions } from '@/components/Card'
import { ServiceStatus } from '@/types'
import { formatRelativeTime } from '@/lib/utils'

export default function MissionControlPage() {
  const [activeTab, setActiveTab] = useState<string>('overview')
  const [services, setServices] = useState<ServiceStatus[]>([
    { name: 'AOC Dashboard', status: 'unknown', url: '/aoc-dashboard',
    port: 18800, lastChecked: new Date().toISOString() },
    { name: 'Quant Dashboard', status: 'unknown', url: '/api/quant',
    port: 5173, lastChecked: new Date().toISOString() },
    { name: 'OpenClaw Gateway', status: 'unknown', url: '/mission-control',
    port: 3000, lastChecked: new Date().toISOString() },
    { name: 'Next.js Dev Server', status: 'unknown', url: '/mission-control',
    port: 3001, lastChecked: new Date().toISOString() }
  ])

  const [lastRefresh, setLastRefresh] = useState<Date>(new Date())

  const tabs = [
    { id: 'overview', label: '📊 Overview', icon: '📊' },
    { id: 'services', label: '🔧 Services', icon: '🔧' },
    { id: 'projects', label: '💼 Projects', icon: '💼' },
    { id: 'skills', label: '🛠️ Skills', icon: '🛠️' },
    { id: 'tasks', label: '✅ Tasks', icon: '✅' },
    { id: 'logs', label: '📄 Logs', icon: '📄' },
    { id: 'settings', label: '⚙️ Settings', icon: '⚙️' }
  ]

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
      />

      {/* Tabs */}
      <div style={{ 
        display: 'flex', 
        borderBottom: '1px solid #333', 
        marginBottom: '32px',
        gap: '4px'
      }}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              background: activeTab === tab.id ? '#4a9eff' : 'transparent',
              color: activeTab === tab.id ? 'white' : '#aaa',
              border: 'none',
              padding: '12px 20px',
              cursor: 'pointer',
              borderRadius: '8px 8px 0 0',
              transition: 'all 0.2s ease',
              fontSize: '0.95rem',
              fontWeight: activeTab === tab.id ? '600' : '400',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'overview' && (
        <>
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
      )}

      {activeTab === 'services' && (
        <div>
          <h2 style={{ color: '#fff', marginBottom: '24px' }}>Service Management</h2>
          
          <div className="grid grid-2">
            {services.map((service, index) => (
              <Card key={index}>
                <CardHeader
                  title={service.name}
                  subtitle={service.url}
                  status={service.status}
                />
                <CardContent>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: '#aaa' }}>Port:</span>
                      <span style={{ color: '#fff' }}>{service.port || 'N/A'}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: '#aaa' }}>Status:</span>
                      <span style={{ 
                        color: service.status === 'online' ? '#22c55e' : '#ef4444' 
                      }}>
                        {service.status}
                      </span>
                    </div>
                  </div>
                </CardContent>
                <CardActions>
                  <button className="btn btn-secondary">🔄 Restart</button>
                  <button className="btn btn-secondary">📊 Logs</button>
                  {service.url && (
                    <a href={service.url} target="_blank" className="btn">🚀 Open</a>
                  )}
                </CardActions>
              </Card>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'projects' && (
        <div>
          <h2 style={{ color: '#fff', marginBottom: '24px' }}>Project Portfolio</h2>
          <p style={{ color: '#666', marginBottom: '20px' }}>Under development - Coming soon</p>
        </div>
      )}

      {activeTab === 'skills' && (
        <div>
          <h2 style={{ color: '#fff', marginBottom: '24px' }}>Available Skills</h2>
          <p style={{ color: '#666', marginBottom: '20px' }}>Under development - Coming soon</p>
        </div>
      )}

      {activeTab === 'tasks' && (
        <div>
          <h2 style={{ color: '#fff', marginBottom: '24px' }}>Task Management</h2>
          <p style={{ color: '#666', marginBottom: '20px' }}>Under development - Coming soon</p>
        </div>
      )}

      {activeTab === 'logs' && (
        <div>
          <h2 style={{ color: '#fff', marginBottom: '24px' }}>System Logs</h2>
          
          <Card>
            <CardHeader title="Recent Activity" />
            <CardContent>
              <div style={{ 
                background: '#0f0f23', 
                padding: '16px', 
                borderRadius: '8px', 
                fontFamily: 'monospace',
                fontSize: '0.9rem',
                maxHeight: '400px',
                overflowY: 'auto'
              }}>
                <div style={{ color: '#22c55e', marginBottom: '8px' }}>
                  [2024-04-03 22:40:15] ✓ Mission Control initialized
                </div>
                <div style={{ color: '#4a9eff', marginBottom: '8px' }}>
                  [2024-04-03 22:40:14] → Checking service health...
                </div>
                <div style={{ color: '#22c55e', marginBottom: '8px' }}>
                  [2024-04-03 22:40:13] ✓ Next.js Dev Server: Online (12ms)
                </div>
                <div style={{ color: '#22c55e', marginBottom: '8px' }}>
                  [2024-04-03 22:40:13] ✓ AOC Dashboard: Online (19ms)
                </div>
                <div style={{ color: '#ef4444', marginBottom: '8px' }}>
                  [2024-04-03 22:40:13] ✗ OpenClaw Gateway: Offline (timeout)
                </div>
                <div style={{ color: '#ef4444', marginBottom: '8px' }}>
                  [2024-04-03 22:40:13] ✗ Quant Dashboard: Offline (connection refused)
                </div>
                <div style={{ color: '#4a9eff', marginBottom: '8px' }}>
                  [2024-04-03 22:40:10] → Starting health check cycle
                </div>
                <div style={{ color: '#fbbf24', marginBottom: '8px' }}>
                  [2024-04-03 22:39:45] ⚠ Configuration updated: refresh interval set to 30s
                </div>
              </div>
            </CardContent>
            <CardActions>
              <button className="btn btn-secondary">🔄 Refresh</button>
              <button className="btn btn-secondary">📥 Download Logs</button>
              <button className="btn btn-secondary">🗑️ Clear Logs</button>
            </CardActions>
          </Card>
        </div>
      )}

      {activeTab === 'settings' && (
        <div>
          <h2 style={{ color: '#fff', marginBottom: '24px' }}>System Settings</h2>
          
          <div className="grid grid-2">
            <Card>
              <CardHeader title="Monitoring" />
              <CardContent>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', color: '#aaa', marginBottom: '8px' }}>
                      Refresh Interval (seconds)
                    </label>
                    <input 
                      type="number" 
                      defaultValue="30"
                      style={{
                        background: '#1a1a2e',
                        border: '1px solid #333',
                        color: '#fff',
                        padding: '8px 12px',
                        borderRadius: '6px',
                        width: '100%'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', color: '#aaa', marginBottom: '8px' }}>
                      Health Check Timeout (ms)
                    </label>
                    <input 
                      type="number" 
                      defaultValue="5000"
                      style={{
                        background: '#1a1a2e',
                        border: '1px solid #333',
                        color: '#fff',
                        padding: '8px 12px',
                        borderRadius: '6px',
                        width: '100%'
                      }}
                    />
                  </div>
                </div>
              </CardContent>
              <CardActions>
                <button className="btn">💾 Save Changes</button>
                <button className="btn btn-secondary">🔄 Reset to Default</button>
              </CardActions>
            </Card>

            <Card>
              <CardHeader title="Notifications" />
              <CardContent>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#fff' }}>
                    <input type="checkbox" defaultChecked />
                    Service status notifications
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#fff' }}>
                    <input type="checkbox" defaultChecked />
                    Email alerts for downtime
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#fff' }}>
                    <input type="checkbox" />
                    Slack integration
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#fff' }}>
                    <input type="checkbox" />
                    Discord webhooks
                  </label>
                </div>
              </CardContent>
              <CardActions>
                <button className="btn">💾 Update Preferences</button>
              </CardActions>
            </Card>
          </div>
        </div>
      )}
    </>
  )
}