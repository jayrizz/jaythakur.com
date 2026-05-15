'use client'

import { useState, useEffect } from 'react'
import PageHeader from '@/components/PageHeader'
import Card, { CardHeader, CardContent } from '@/components/Card'

export default function AOCDashboardPage() {
  const [isOnline, setIsOnline] = useState<boolean | null>(null)
  const [loading, setLoading] = useState(true)

  const checkAOCService = async () => {
    try {
      const response = await fetch('/api/health-check?url=/api/aoc', {
        signal: AbortSignal.timeout(5000)
      })
      const result = await response.json()
      setIsOnline(result.status === 'ok')
    } catch (error) {
      setIsOnline(false)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    checkAOCService()
  }, [])

  if (loading) {
    return (
      <>
        <PageHeader
          title="AOC Dashboard"
          description="Advent of Code progress tracking and solution analysis."
        />
        <Card>
          <CardContent>
            <div style={{ textAlign: 'center', padding: '40px' }}>
              <div style={{ fontSize: '2rem', marginBottom: '16px' }}>⏳</div>
              <div style={{ color: '#aaa' }}>Checking AOC service status...</div>
            </div>
          </CardContent>
        </Card>
      </>
    )
  }

  if (!isOnline) {
    return (
      <>
        <PageHeader
          title="AOC Dashboard"
          description="Advent of Code progress tracking and solution analysis."
        />
        <Card>
          <CardContent>
            <div style={{ textAlign: 'center', padding: '40px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🔌</div>
              <h3 style={{ color: '#ef4444', marginBottom: '16px' }}>Service Offline</h3>
              <p style={{ color: '#aaa', marginBottom: '24px' }}>
                The AOC Dashboard service is not running on port 18800.
              </p>
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                <button 
                  onClick={checkAOCService}
                  className="btn"
                >
                  🔄 Try Again
                </button>
                <a 
                  href="/api/aoc" 
                  target="_blank"
                  className="btn btn-secondary"
                >
                  📂 Open Direct Link
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </>
    )
  }

  return (
    <>
      <PageHeader
        title="AOC Dashboard"
        description="Advent of Code progress tracking and solution analysis."
      />
      
      <Card>
        <CardHeader title="AOC Dashboard Access" />
        <CardContent>
          <div style={{ 
            textAlign: 'center',
            padding: '60px 20px',
            background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 100%)',
            borderRadius: '12px',
            border: '2px solid #333'
          }}>
            <div style={{ fontSize: '4rem', marginBottom: '24px' }}>🎄</div>
            <h3 style={{ color: '#fff', marginBottom: '16px', fontSize: '1.5rem' }}>
              AOC Dashboard Ready
            </h3>
            <p style={{ color: '#aaa', marginBottom: '32px', maxWidth: '400px', margin: '0 auto 32px' }}>
              The AOC Dashboard is running and ready to view. Due to browser security restrictions, 
              the dashboard opens in a new tab for the best experience.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
              <a 
                href="/api/aoc" 
                target="_blank"
                className="btn"
                style={{ 
                  fontSize: '1.1rem',
                  padding: '12px 24px',
                  background: 'linear-gradient(135deg, #4a9eff 0%, #3b82f6 100%)'
                }}
              >
                🚀 Open AOC Dashboard
              </a>
              <button 
                onClick={checkAOCService}
                className="btn btn-secondary"
                style={{ fontSize: '1.1rem', padding: '12px 24px' }}
              >
                🔄 Check Status
              </button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-2" style={{ marginTop: '32px' }}>
        <Card>
          <CardHeader title="Service Information" />
          <CardContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#aaa' }}>Status:</span>
                <span style={{ color: '#22c55e' }}>✅ Online</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#aaa' }}>URL:</span>
                <span style={{ color: '#4a9eff', fontFamily: 'monospace', fontSize: '0.9rem' }}>
                  localhost:18800
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#aaa' }}>Type:</span>
                <span style={{ color: '#fff' }}>Local Service</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#aaa' }}>Protocol:</span>
                <span style={{ color: '#fff' }}>HTTP</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader title="About AOC Dashboard" />
          <CardContent>
            <p style={{ color: '#aaa', lineHeight: 1.6, marginBottom: '16px' }}>
              Track your Advent of Code progress, view solution analytics, 
              and monitor performance across all years and challenges.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem' }}>
              <div>📈 Progress tracking</div>
              <div>⚡ Performance metrics</div>
              <div>🏆 Leaderboard stats</div>
              <div>💡 Solution analysis</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}