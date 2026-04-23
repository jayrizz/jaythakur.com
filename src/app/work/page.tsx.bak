'use client'

import { useState } from 'react'
import PageHeader from '@/components/PageHeader'
import Card, { CardHeader, CardContent } from '@/components/Card'
import Link from 'next/link'

interface WorkItem {
  id: string
  name: string
  description: string
  status: 'building' | 'research' | 'planning' | 'idea'
  priority: 'high' | 'medium' | 'low'
  nextStep?: string
  category?: string
  technologies?: string[]
  details?: string
}

interface Task {
  id: string
  title: string
  description: string
  priority: 'high' | 'medium' | 'low'
  status: 'todo' | 'in-progress' | 'blocked' | 'done'
  dueDate?: string
}

const projects: WorkItem[] = [
  {
    id: 'political-money-tracker',
    name: 'Political Money Tracker',
    description: 'Track political money flows for B2B lead generation',
    status: 'building',
    priority: 'high',
    nextStep: 'Build MVP scraper for politician stock trades',
    category: 'Web App',
    technologies: ['Python', 'Web Scraping', 'Data Analysis'],
    details: 'Real-time tracking of political financial flows and stock trading patterns. Designed for institutional and business intelligence use.'
  },
  {
    id: 'agentic-travel-booking',
    name: 'Agentic Travel Booking',
    description: 'Agent-first travel booking platform',
    status: 'research',
    priority: 'medium',
    nextStep: 'Research travel APIs (Amadeus, Duffel)',
    category: 'AI Product',
    technologies: ['OpenClaw', 'Travel APIs', 'Agent Architecture'],
    details: 'Autonomous AI agents handling entire travel booking workflow. Research phase exploring API integrations and agent orchestration.'
  },
  {
    id: 'smart-call-screener',
    name: 'Smart Call Screener',
    description: 'AI-powered spam call blocking with intelligent filtering',
    status: 'research',
    priority: 'medium',
    nextStep: 'Evaluate Nomorobo, Hiya, Truecaller APIs',
    category: 'Mobile App',
    technologies: ['AI/ML', 'Telecom APIs', 'Real-time Processing'],
    details: 'Smart filtering of incoming calls using AI to identify spam, scams, and unwanted callers. Research phase evaluating provider APIs.'
  },
  {
    id: 'media-consolidation',
    name: 'Media Consolidation',
    description: 'Consolidate photos/videos from multiple cloud sources',
    status: 'planning',
    priority: 'medium',
    nextStep: 'Pending security review',
    category: 'Tool',
    technologies: ['Cloud APIs', 'File Management', 'Security'],
    details: 'Unified platform to aggregate and manage media across Google Photos, iCloud, OneDrive, and other sources. Privacy-first approach.'
  }
]

const backlog: WorkItem[] = [
  {
    id: 'servicepro-ai',
    name: 'ServicePro AI',
    description: 'AI agent for local service businesses',
    status: 'idea',
    priority: 'low',
    category: 'SaaS',
    details: 'Platform helping local service businesses (plumbing, HVAC, cleaning) automate customer communication, scheduling, and dispatch using AI agents.'
  },
  {
    id: 'gofundclaw',
    name: 'GoFundClaw',
    description: 'Crowdfunding platform for AI agents',
    status: 'idea',
    priority: 'low',
    category: 'Platform',
    details: 'Marketplace for buying, selling, and funding AI agent development. Explores tokenomics and incentive models for agent creators.'
  },
  {
    id: 'social-media-bot-detector',
    name: 'Social Media Bot Detector',
    description: 'Cross-platform bot detection and analysis tool',
    status: 'idea',
    priority: 'low',
    category: 'Tool',
    details: 'Real-time detection and analysis of bot accounts across social platforms. Identifies behavioral patterns and coordinated inauthentic behavior.'
  },
  {
    id: 'womens-voting-access',
    name: "Women's Voting Access Tool",
    description: 'Civic tech for SAVE Act documentation assistance',
    status: 'idea',
    priority: 'medium',
    category: 'Civic Tech',
    details: 'Help married women facing SAVE Act documentation challenges. State-by-state requirements, deadline tracking, form assistance. Open source & privacy-first.'
  },
  {
    id: 'ai-consulting-firm',
    name: 'AI Agent Consulting Company',
    description: '$2-3M revenue goal in 18-24 months',
    status: 'idea',
    priority: 'high',
    category: 'Business',
    details: 'AI agent consulting focused on supply chain/logistics (leveraging Accenture background). Revenue: $50-150K build fees, $3-10K/mo retainers, 8-12 clients.'
  }
]

const tasks: Task[] = [
  {
    id: 'claude-cli-setup',
    title: 'Claude Pro as Primary Model',
    description: 'Configured OpenClaw to use Claude Pro (CLI) as primary, Anthropic API as fallback. Set up model usage monitor with Telegram alerts on switches.',
    priority: 'high',
    status: 'done',
    dueDate: '2026-04-21'
  },
  {
    id: 'water-heater-quotes',
    title: 'Get Water Heater Installation Quotes',
    description: 'Family of 5 needs tankless water heater. Decision: Budget Rinnai RUA11EN (~$1,200 equipment + $1,000-1,500 install). Get 3 quotes from plumbers in 63017.',
    priority: 'high',
    status: 'in-progress',
    dueDate: '2026-04-25'
  },
  {
    id: 'tax-package-send',
    title: 'Send Tax Amendment Package to CPA',
    description: '$127K in documented crypto refunds ready to send. Still gathering 2025 non-crypto docs (W-2, mortgage, deductions). Bundle and send to CPA.',
    priority: 'high',
    status: 'in-progress',
    dueDate: '2026-04-25'
  },
  {
    id: 'gcal-auth-fix',
    title: 'Fix Google Calendar Authentication',
    description: 'GCal auth expired. Needs re-authentication via gog CLI.',
    priority: 'medium',
    status: 'todo',
    dueDate: '2026-04-28'
  },
  {
    id: 'discord-integration',
    title: 'Fix Discord Integration',
    description: 'Discord integration marked as broken. Debug and restore functionality.',
    priority: 'medium',
    status: 'todo',
    dueDate: '2026-04-28'
  },
  {
    id: 'file-recovery',
    title: 'File Recovery Complete',
    description: 'Recovered 20 files from git stash and history. BACKLOG.md, BOOTSTRAP.md, CONFIG-RULES.md, SYSTEM-STATE.md, PRIVACY-RULES.md, business plans, and project docs restored to workspace.',
    priority: 'high',
    status: 'done',
    dueDate: '2026-04-21'
  },
  {
    id: 'website-update',
    title: 'Update Portfolio Website with Current Knowledge',
    description: 'Add Projects, Backlog, and Tasks sections to website with latest project data and active work items.',
    priority: 'medium',
    status: 'in-progress',
    dueDate: '2026-04-22'
  }
]

const statusColors = {
  building: '#4a9eff',
  research: '#fbbf24',
  planning: '#8b5cf6',
  idea: '#6b7280',
  todo: '#fbbf24',
  'in-progress': '#4a9eff',
  blocked: '#ef4444',
  done: '#22c55e'
}

const priorityLabels = {
  high: 'High Priority',
  medium: 'Medium Priority',
  low: 'Low Priority'
}

export default function WorkPage() {
  const [selectedProject, setSelectedProject] = useState<WorkItem | null>(null)
  const [selectedTask, setSelectedTask] = useState<Task | null>(null)

  return (
    <>
      <PageHeader
        title="Work"
        description="Projects in development, backlog ideas, and current tasks. The full workflow from concept to production."
      />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '48px' }}>
        {/* Projects Section */}
        <div>
          <h2 style={{ color: '#fff', marginBottom: '24px', fontSize: '1.5rem' }}>
            🚀 Active Projects
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '16px',
            paddingBottom: '24px',
            overflowY: 'auto',
            maxHeight: '600px'
          }}>
            {projects.map((project) => (
              <Card
                key={project.id}
                style={{ cursor: 'pointer' }}
                onClick={() => setSelectedProject(project)}
              >
                <CardHeader
                  title={project.name}
                  subtitle={project.category}
                  status={project.status}
                />
                <CardContent>
                  <p style={{ marginBottom: '12px', color: '#ccc', fontSize: '0.9rem' }}>
                    {project.description}
                  </p>
                  <div style={{ marginBottom: '12px' }}>
                    <span style={{
                      display: 'inline-block',
                      padding: '4px 12px',
                      borderRadius: '12px',
                      fontSize: '0.8rem',
                      backgroundColor: '#374151',
                      color: '#d1d5db',
                      marginRight: '8px'
                    }}>
                      {priorityLabels[project.priority]}
                    </span>
                  </div>
                  {project.nextStep && (
                    <p style={{ color: '#aaa', fontSize: '0.85rem' }}>
                      <strong>Next:</strong> {project.nextStep}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Backlog Section */}
        <div>
          <h2 style={{ color: '#fff', marginBottom: '24px', fontSize: '1.5rem' }}>
            💡 Backlog Ideas
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '16px',
            paddingBottom: '24px',
            overflowY: 'auto',
            maxHeight: '600px'
          }}>
            {backlog.map((item) => (
              <Card
                key={item.id}
                style={{ cursor: 'pointer' }}
                onClick={() => setSelectedProject(item)}
              >
                <CardHeader
                  title={item.name}
                  subtitle={item.category}
                  status="idea"
                />
                <CardContent>
                  <p style={{ marginBottom: '12px', color: '#ccc', fontSize: '0.9rem' }}>
                    {item.description}
                  </p>
                  <span style={{
                    display: 'inline-block',
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '0.8rem',
                    backgroundColor: '#374151',
                    color: '#d1d5db'
                  }}>
                    {priorityLabels[item.priority]}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tasks Section */}
        <div>
          <h2 style={{ color: '#fff', marginBottom: '24px', fontSize: '1.5rem' }}>
            ✅ Current Tasks
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '16px',
            paddingBottom: '24px',
            overflowY: 'auto',
            maxHeight: '600px'
          }}>
            {tasks.map((task) => (
              <Card
                key={task.id}
                style={{ cursor: 'pointer' }}
                onClick={() => setSelectedTask(task)}
              >
                <CardHeader
                  title={task.title}
                  subtitle={task.dueDate ? `Due: ${task.dueDate}` : undefined}
                  status={task.status}
                />
                <CardContent>
                  <p style={{ marginBottom: '12px', color: '#ccc', fontSize: '0.9rem' }}>
                    {task.description}
                  </p>
                  <span style={{
                    display: 'inline-block',
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '0.8rem',
                    backgroundColor: '#374151',
                    color: '#d1d5db'
                  }}>
                    {priorityLabels[task.priority]}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }} onClick={() => setSelectedProject(null)}>
          <Card style={{
            maxWidth: '600px',
            width: '90%',
            maxHeight: '80vh',
            overflowY: 'auto'
          }} onClick={(e) => e.stopPropagation()}>
            <CardHeader
              title={selectedProject.name}
              subtitle={selectedProject.category}
              status={selectedProject.status}
            />
            <CardContent>
              <p style={{ marginBottom: '20px', lineHeight: 1.6 }}>
                {selectedProject.details || selectedProject.description}
              </p>

              {selectedProject.technologies && (
                <div style={{ marginBottom: '20px' }}>
                  <h3 style={{ color: '#4a9eff', marginBottom: '10px' }}>Technologies</h3>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {selectedProject.technologies.map((tech) => (
                      <span key={tech} style={{
                        padding: '6px 12px',
                        borderRadius: '12px',
                        fontSize: '0.85rem',
                        backgroundColor: '#374151',
                        color: '#d1d5db'
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {selectedProject.nextStep && (
                <div>
                  <h3 style={{ color: '#4a9eff', marginBottom: '10px' }}>Next Step</h3>
                  <p style={{ color: '#ccc' }}>{selectedProject.nextStep}</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}

      {selectedTask && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }} onClick={() => setSelectedTask(null)}>
          <Card style={{
            maxWidth: '600px',
            width: '90%',
            maxHeight: '80vh',
            overflowY: 'auto'
          }} onClick={(e) => e.stopPropagation()}>
            <CardHeader
              title={selectedTask.title}
              subtitle={selectedTask.dueDate ? `Due: ${selectedTask.dueDate}` : undefined}
              status={selectedTask.status}
            />
            <CardContent>
              <p style={{ marginBottom: '20px', lineHeight: 1.6 }}>
                {selectedTask.description}
              </p>
              <span style={{
                display: 'inline-block',
                padding: '6px 12px',
                borderRadius: '12px',
                fontSize: '0.85rem',
                backgroundColor: '#374151',
                color: '#d1d5db'
              }}>
                {priorityLabels[selectedTask.priority]}
              </span>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
