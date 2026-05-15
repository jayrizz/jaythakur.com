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
    liveUrl: '/mission-control',
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
    description: 'Real-time financial data visualization and analysis platform.',
    status: 'active',
    technologies: ['React', 'WebSockets', 'Financial APIs'],
    startDate: '2024-02-01',
    githubUrl: 'https://github.com/jayrizz/quant-dashboard',
    liveUrl: 'https://jaythakur.com/api/quant',
    category: 'web-apps',
    longDescription: `Financial data platform with real-time market data.`,
    features: ['Real-time data', 'Interactive charts', 'Portfolio tracking'],
    techStack: { 'Frontend': ['React'], 'Data': ['Node.js', 'Python'] }
  },
  'aoc-dashboard': {
    id: 'aoc-dashboard',
    name: 'Advent of Code Progress Tracker',
    description: 'Interactive dashboard for tracking Advent of Code progress.',
    status: 'active',
    technologies: ['Next.js', 'TypeScript'],
    startDate: '2023-12-01',
    endDate: '2024-01-15',
    githubUrl: 'https://github.com/jayrizz/aoc-dashboard',
    liveUrl: '/aoc-dashboard',
    category: 'web-apps',
    longDescription: `Dashboard for tracking Advent of Code daily challenges.`,
    features: ['Progress tracking', 'Solution visualization'],
    techStack: { 'Frontend': ['Next.js', 'TypeScript'] }
  },
  'jaythakur-com': {
    id: 'jaythakur-com',
    name: 'Personal Portfolio Site',
    description: 'This site! Next.js portfolio with timeline-first design.',
    status: 'active',
    technologies: ['Next.js', 'TypeScript'],
    startDate: '2024-03-26',
    githubUrl: 'https://github.com/jayrizz/jaythakur.com',
    liveUrl: 'https://jaythakur.com',
    category: 'web-apps',
    longDescription: `Personal portfolio website showcasing AI collaboration projects.`,
    features: ['Timeline', 'Project tracking', 'Mission control'],
    techStack: { 'Frontend': ['Next.js', 'TypeScript'] }
  },
  'ai-workflow-automation': {
    id: 'ai-workflow-automation',
    name: 'AI Workflow Automation Suite',
    description: 'Collection of AI-powered automation tools.',
    status: 'planned',
    technologies: ['Python', 'AI/ML', 'DevOps'],
    startDate: '2024-05-01',
    githubUrl: 'https://github.com/jayrizz',
    liveUrl: '/mission-control',
    category: 'ai-tools',
    longDescription: `AI-powered automation for development and operations.`,
    features: ['Code review automation', 'Deployment pipelines'],
    techStack: { 'Backend': ['Python'], 'AI': ['OpenAI', 'Claude'] }
  },
  'neural-architecture-search': {
    id: 'neural-architecture-search',
    name: 'Neural Architecture Search',
    description: 'ML-powered neural network architecture optimization.',
    status: 'planned',
    technologies: ['Python', 'TensorFlow', 'ML'],
    startDate: '2024-06-01',
    githubUrl: 'https://github.com/jayrizz',
    liveUrl: '/mission-control',
    category: 'ai-tools',
    longDescription: `Automated ML model architecture search and optimization.`,
    features: ['Architecture search', 'Hyperparameter tuning'],
    techStack: { 'ML': ['TensorFlow', 'PyTorch'] }
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