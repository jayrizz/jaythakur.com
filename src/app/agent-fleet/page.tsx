'use client'

import { useState, useEffect } from 'react'
import PageHeader from '@/components/PageHeader'
import Card, { CardHeader, CardContent, CardActions } from '@/components/Card'
import Link from 'next/link'

import { agents, roleIcons, statusColors, type AgentDefinition } from './agents'

// Legacy fallback agents (used if Control Room not available)
const defaultAgents = [
  {
    id: 'hermes-life',
    name: 'hermes-life',
    description: 'Personal assistant for day-to-day tasks, scheduling, and reminders',
    status: 'online',
    role: 'Personal' as const,
    port: 18789,
    lastActive: new Date().toISOString(),
    skills: ['calendar', 'email', 'reminders', 'memory']
  },
  {
    id: 'hermes-dev',
    name: 'hermes-dev',
    description: 'Development specialist for coding, debugging, and site work',
    status: 'online',
    role: 'Development' as const,
    port: 18789,
    lastActive: new Date().toISOString(),
    skills: ['code', 'debug', 'terminal', 'git']
  },
  {
    id: 'hermes-seo',
    name: 'hermes-seo',
    description: 'SEO specialist for content, keywords, and search optimization',
    status: 'offline' as const,
    role: 'SEO' as const,
    lastActive: '2026-05-15T10:00:00Z',
    skills: ['research', 'content', 'analytics']
  }
]

// Convert Control Room agents to display format
const controlRoomAgents = agents.map(a => ({
  id: a.name,
  name: a.name,
  description: a.description,
  status: a.status,
  role: a.role,
  port: a.gateway_url ? parseInt(a.gateway_url.split(':').pop() || '18789') : 18789,
  lastActive: a.last_seen || new Date().toISOString(),
  skills: a.skills,
  architecture: a.architecture_level
}))

// Use control room agents if available, otherwise fallbacks
const displayAgents = agents.length > 0 ? controlRoomAgents : defaultAgents

export default function AgentFleetPage() {
  const [activeTab, setActiveTab] = useState<'grid' | 'list'>('grid')
  const [selectedAgent, setSelectedAgent] = useState<typeof displayAgents[0] | null>(null)
  const [tasks, setTasks] = useState<any[]>([])
  const [taskStats, setTaskStats] = useState<Record<string, number>>({})
  const [tasksLoading, setTasksLoading] = useState(true)

  useEffect(() => {
    fetch('/api/tasks')
      .then(res => res.json())
      .then(data => {
        setTasks(data.tasks || [])
        setTaskStats(data.stats || {})
      })
      .catch(() => {})
      .finally(() => setTasksLoading(false))
  }, [])

  const onlineCount = displayAgents.filter(a => a.status === 'online').length
  const totalCount = displayAgents.length
  const uniqueSkills = new Set(displayAgents.flatMap(a => a.skills)).size
  const maxArchitecture = displayAgents.reduce((max, a) => Math.max(max, (a as any).architecture || 1), 1)

  return (
    <>
      <PageHeader
        title="Agent Fleet"
        description="Manage and monitor your Hermes agent team"
      />

      {/* Stats Bar */}
      <div className="grid grid-4" style={{ marginBottom: '32px' }}>
        <Card>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#22c55e' }}>
              {onlineCount}/{totalCount}
            </div>
            <div style={{ color: '#aaa', fontSize: '0.9rem' }}>Online</div>
          </div>
        </Card>
        <Card>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#4a9eff' }}>
              {totalCount}
            </div>
            <div style={{ color: '#aaa', fontSize: '0.9rem' }}>Total Agents</div>
          </div>
        </Card>
        <Card>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#a78bfa' }}>
              {uniqueSkills}
            </div>
            <div style={{ color: '#aaa', fontSize: '0.9rem' }}>Unique Skills</div>
          </div>
        </Card>
        <Card>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#f59e0b' }}>
              Level {maxArchitecture}
            </div>
            <div style={{ color: '#aaa', fontSize: '0.9rem' }}>Architecture</div>
          </div>
        </Card>
      </div>

      {/* Controls */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '24px' 
      }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={() => setActiveTab('grid')}
            style={{
              background: activeTab === 'grid' ? '#4a9eff' : 'transparent',
              color: activeTab === 'grid' ? 'white' : '#aaa',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            Grid
          </button>
          <button
            onClick={() => setActiveTab('list')}
            style={{
              background: activeTab === 'list' ? '#4a9eff' : 'transparent',
              color: activeTab === 'list' ? 'white' : '#aaa',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            List
          </button>
        </div>
        <button className="btn">
          + Add Agent
        </button>
      </div>

      {/* Agent Grid */}
      {activeTab === 'grid' && (
        <div className="grid grid-3">
          {displayAgents.map((agent) => (
            <div 
              key={agent.id}
              style={{ cursor: 'pointer' }}
              onClick={() => setSelectedAgent(agent)}
            >
              <Card>
                <CardHeader
                  title={`${roleIcons[agent.role] || roleIcons['Default']} ${agent.name}`}
                  subtitle={agent.role}
                  status={agent.status as 'online' | 'offline' | 'building' | 'unknown' | 'active' | 'completed' | 'archived' | 'planned'}
                />
                <CardContent>
                  <p style={{ color: '#aaa', fontSize: '0.9rem', marginBottom: '16px' }}>
                    {agent.description}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {agent.skills.slice(0, 4).map(skill => (
                      <span 
                        key={skill}
                        style={{
                          background: '#1a1a2e',
                          color: '#4a9eff',
                          padding: '4px 8px',
                          borderRadius: '4px',
                          fontSize: '0.75rem'
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                    {agent.skills.length > 4 && (
                      <span style={{ color: '#666', fontSize: '0.75rem' }}>
                        +{agent.skills.length - 4}
                      </span>
                    )}
                  </div>
                </CardContent>
                <CardActions>
                  <a 
                    href="/api/openclaw" 
                    target="_blank"
                    className="btn"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Chat
                  </a>
                  <button className="btn btn-secondary">
                    Details
                  </button>
                </CardActions>
              </Card>
            </div>
          ))}
        </div>
      )}

      {/* Agent List */}
      {activeTab === 'list' && (
        <Card>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #333' }}>
                <th style={{ textAlign: 'left', padding: '12px', color: '#aaa' }}>Agent</th>
                <th style={{ textAlign: 'left', padding: '12px', color: '#aaa' }}>Role</th>
                <th style={{ textAlign: 'left', padding: '12px', color: '#aaa' }}>Skills</th>
                <th style={{ textAlign: 'center', padding: '12px', color: '#aaa' }}>Status</th>
                <th style={{ textAlign: 'right', padding: '12px', color: '#aaa' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {displayAgents.map((agent) => (
                <tr key={agent.id} style={{ borderBottom: '1px solid #222' }}>
                  <td style={{ padding: '12px' }}>
                    <div style={{ fontWeight: '600', color: '#fff' }}>{agent.name}</div>
                    <div style={{ color: '#666', fontSize: '0.8rem' }}>{agent.description}</div>
                  </td>
                  <td style={{ padding: '12px', color: '#aaa' }}>{agent.role}</td>
                  <td style={{ padding: '12px' }}>
                    <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                      {agent.skills.map(skill => (
                        <span 
                          key={skill}
                          style={{
                            background: '#1a1a2e',
                            color: '#4a9eff',
                            padding: '2px 6px',
                            borderRadius: '3px',
                            fontSize: '0.7rem'
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td style={{ padding: '12px', textAlign: 'center' }}>
                    <span style={{ 
                      color: statusColors[agent.status],
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}>
                      <span style={{ 
                        width: '8px', 
                        height: '8px', 
                        borderRadius: '50%', 
                        background: statusColors[agent.status] 
                      }} />
                      {agent.status}
                    </span>
                  </td>
                  <td style={{ padding: '12px', textAlign: 'right' }}>
                    <a 
                      href="/api/openclaw" 
                      target="_blank"
                      className="btn"
                      style={{ padding: '6px 12px', fontSize: '0.8rem' }}
                    >
                      Chat
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      )}

      {/* Task Bus Preview */}
      <div style={{ marginTop: '48px' }}>
        <h2 style={{ color: '#fff', marginBottom: '24px' }}>Task Bus</h2>
        <Card>
          <CardHeader 
            title="Recent Tasks" 
            subtitle={`${taskStats.succeeded || 0} succeeded, ${taskStats.failed || 0} failed`} 
          />
          <CardContent>
            {tasksLoading ? (
              <div style={{ color: '#666', textAlign: 'center', padding: '40px' }}>
                Loading tasks...
              </div>
            ) : tasks.length === 0 ? (
              <div style={{ color: '#666', textAlign: 'center', padding: '40px' }}>
                No tasks in queue. Build Level 3 to enable the orchestrator.
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {tasks.slice(0, 5).map((task: any) => (
                  <div 
                    key={task.id}
                    style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '12px',
                      background: '#1a1a2e',
                      borderRadius: '6px',
                      borderLeft: task.status === 'succeeded' ? '3px solid #22c55e' : 
                               task.status === 'failed' ? '3px solid #ef4444' : '3px solid #fbbf24'
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: '600', color: '#fff', fontSize: '0.9rem' }}>
                        {task.label || task.agent}
                      </div>
                      <div style={{ color: '#666', fontSize: '0.75rem' }}>
                        {task.task?.substring(0, 60)}...
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ 
                        color: task.status === 'succeeded' ? '#22c55e' : 
                               task.status === 'failed' ? '#ef4444' : '#fbbf24',
                        fontSize: '0.75rem'
                      }}>
                        {task.status}
                      </span>
                      <div style={{ color: '#666', fontSize: '0.7rem' }}>
                        {task.createdAt ? new Date(task.createdAt).toLocaleTimeString() : '—'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
          <CardActions>
            <a href="/api/tasks" target="_blank" className="btn btn-secondary">
              View All Tasks
            </a>
          </CardActions>
        </Card>
      </div>

      {/* Runbooks Preview */}
      <div style={{ marginTop: '48px' }}>
        <h2 style={{ color: '#fff', marginBottom: '24px' }}>Runbooks</h2>
        <div className="grid grid-2">
          <Card>
            <CardHeader title="Restart Agent" subtitle="How to restart any fleet agent" />
            <CardContent>
              <code style={{ color: '#a78bfa', fontSize: '0.8rem' }}>
                docker compose restart &lt;agent-name&gt;
              </code>
            </CardContent>
            <CardActions>
              <button className="btn btn-secondary">View</button>
            </CardActions>
          </Card>
          <Card>
            <CardHeader title="Add New Agent" subtitle="Register a new specialist" />
            <CardContent>
              <code style={{ color: '#a78bfa', fontSize: '0.8rem' }}>
                mkdir agents/&lt;name&gt; &amp;&amp; cp template/*
              </code>
            </CardContent>
            <CardActions>
              <button className="btn btn-secondary">View</button>
            </CardActions>
          </Card>
        </div>
      </div>

      {/* Quick Links */}
      <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid #222' }}>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
          <Link href="/mission-control" className="btn btn-secondary">
            ← Mission Control
          </Link>
          <a href="/api/openclaw" target="_blank" className="btn">
            OpenChat →
          </a>
        </div>
      </div>
    </>
  )
}