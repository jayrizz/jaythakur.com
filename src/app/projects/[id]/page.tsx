import { notFound } from 'next/navigation'
import PageHeader from '@/components/PageHeader'
import Card, { CardHeader, CardContent, CardActions } from '@/components/Card'
import { formatDate } from '@/lib/utils'
import Link from 'next/link'

// This would normally come from a database or API
const projects = {
  'openclaw': {
    id: 'openclaw',
    name: 'OpenClaw Agent System',
    description: 'Comprehensive AI assistant with modular skills, tool access, and human-AI collaboration patterns. Built for production use with proper error handling, security, and extensibility.',
    status: 'active',
    technologies: ['TypeScript', 'Node.js', 'AI/ML', 'Skills Architecture'],
    startDate: '2024-01-15',
    githubUrl: 'https://github.com/openclaw-ai/openclaw',
    liveUrl: 'http://localhost:3000',
    category: 'ai-tools',
    longDescription: `
OpenClaw represents a new paradigm in AI assistant development. Rather than a monolithic chatbot, 
OpenClaw is built as a modular system where capabilities are added through "skills" - 
self-contained modules that extend the agent's abilities.

**Key Features:**
- **Modular Skills Architecture**: Each skill is documented and self-contained
- **Tool Access**: Real integration with system tools, APIs, and services  
- **Human-AI Collaboration**: Designed for partnership, not replacement
- **Production Ready**: Proper error handling, security, and logging
- **Extensible**: Easy to add new capabilities without touching core code

**Architecture Highlights:**
- Skills are loaded dynamically from SKILL.md files
- Each skill defines its own context and usage patterns
- Built-in safety mechanisms and permission systems
- Session management and memory persistence
- Integration with external tools and services

The system has been battle-tested in real-world scenarios, managing everything from 
code reviews to system administration tasks.
    `,
    features: [
      'Dynamic skill loading and management',
      'Integrated tool access (CLI, APIs, web)',
      'Session persistence and memory',
      'Security and permission controls',
      'Extensible plugin architecture',
      'Production logging and monitoring'
    ],
    techStack: {
      'Backend': ['Node.js', 'TypeScript', 'Express'],
      'AI Integration': ['Claude API', 'OpenAI API', 'Custom Models'],
      'Skills System': ['Dynamic Loading', 'Markdown Parsing', 'Tool Integration'],
      'Security': ['Permission Controls', 'Sandboxing', 'Audit Logging']
    }
  },
  'quant-dashboard': {
    id: 'quant-dashboard', 
    name: 'Quantitative Finance Dashboard',
    description: 'Real-time financial data visualization and analysis platform. Aggregates multiple data sources with intelligent rate limiting and priority-based processing.',
    status: 'active',
    technologies: ['React', 'WebSockets', 'Financial APIs', 'Real-time Data'],
    startDate: '2024-02-01',
    githubUrl: 'https://github.com/jayrizz/quant-dashboard',
    liveUrl: 'http://localhost:5173',
    category: 'web-apps',
    longDescription: `
A sophisticated financial data platform that aggregates multiple market data sources 
into a unified dashboard. Built to handle the complexities of real-time financial data 
including rate limits, data synchronization, and priority-based processing.

**Core Capabilities:**
- **Real-time Data Aggregation**: Multiple financial APIs unified
- **Intelligent Rate Limiting**: Smart backoff and priority queues
- **Advanced Visualization**: Interactive charts and analysis tools
- **Portfolio Analytics**: Performance tracking and risk analysis
- **Alert Systems**: Configurable notifications and triggers

**Data Sources:**
- Market data feeds (stocks, crypto, forex)
- Economic indicators and news
- Portfolio performance metrics
- Custom calculated indicators

The system is designed to scale from personal use to institutional-grade requirements.
    `,
    features: [
      'Real-time market data feeds',
      'Interactive charting and visualization',
      'Portfolio performance tracking', 
      'Custom indicator calculations',
      'Alert and notification systems',
      'Data export and API access'
    ],
    techStack: {
      'Frontend': ['React', 'TypeScript', 'Chart.js'],
      'Real-time': ['WebSockets', 'Server-Sent Events', 'Redis'],
      'Data Processing': ['Node.js', 'Python', 'Pandas'],
      'APIs': ['Alpha Vantage', 'Yahoo Finance', 'CoinGecko']
    }
  }
}

interface ProjectPageProps {
  params: {
    id: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects[params.id as keyof typeof projects]
  
  if (!project) {
    notFound()
  }

  return (
    <>
      <PageHeader
        title={project.name}
        description={project.description}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Projects', href: '/projects' },
          { label: project.name }
        ]}
      />

      {/* Project Header */}
      <Card style={{ marginBottom: '32px' }}>
        <CardHeader
          title="Project Overview"
          subtitle={`${project.category} • Started ${formatDate(project.startDate)}`}
          status={project.status as any}
          actions={
            <div style={{ display: 'flex', gap: '12px' }}>
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  📱 GitHub
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn">
                  🚀 View Live
                </a>
              )}
            </div>
          }
        />
        <CardContent>
          <div style={{ 
            whiteSpace: 'pre-line', 
            lineHeight: 1.6,
            marginBottom: '24px' 
          }}>
            {project.longDescription}
          </div>
          
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {project.technologies.map((tech) => (
              <span
                key={tech}
                style={{
                  padding: '6px 12px',
                  borderRadius: '16px',
                  fontSize: '0.85rem',
                  backgroundColor: '#374151',
                  color: '#d1d5db',
                  fontWeight: '500'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-2">
        {/* Features */}
        <Card>
          <CardHeader title="Key Features" />
          <CardContent>
            <ul style={{ 
              listStyle: 'none', 
              padding: 0, 
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              {project.features.map((feature, index) => (
                <li key={index} style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  gap: '12px',
                  paddingLeft: '8px'
                }}>
                  <span style={{ color: '#22c55e', fontSize: '1.2rem' }}>✓</span>
                  <span style={{ color: '#fff', lineHeight: 1.5 }}>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Tech Stack */}
        <Card>
          <CardHeader title="Technology Stack" />
          <CardContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {Object.entries(project.techStack).map(([category, technologies]) => (
                <div key={category}>
                  <h4 style={{ 
                    color: '#4a9eff', 
                    marginBottom: '8px',
                    fontSize: '0.95rem',
                    fontWeight: '600'
                  }}>
                    {category}
                  </h4>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    {technologies.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          padding: '4px 8px',
                          borderRadius: '12px',
                          fontSize: '0.75rem',
                          backgroundColor: '#1a1a2e',
                          color: '#aaa',
                          border: '1px solid #333'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Back to Projects */}
      <div style={{ 
        marginTop: '48px', 
        textAlign: 'center',
        paddingTop: '24px',
        borderTop: '1px solid #333'
      }}>
        <Link href="/projects" className="btn btn-secondary">
          ← Back to All Projects
        </Link>
      </div>
    </>
  )
}

// Generate static params for all known projects
export function generateStaticParams() {
  return Object.keys(projects).map((id) => ({
    id,
  }))
}