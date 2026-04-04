import PageHeader from '@/components/PageHeader'
import Card, { CardHeader, CardContent, CardActions } from '@/components/Card'
import { Project } from '@/types'
import { formatDate, getStatusColor } from '@/lib/utils'
import Link from 'next/link'

export default function ProjectsPage() {
  const projects: Project[] = [
    {
      id: 'openclaw',
      name: 'OpenClaw Agent System',
      description: 'Comprehensive AI assistant with modular skills, tool access, and human-AI collaboration patterns. Built for production use with proper error handling, security, and extensibility.',
      status: 'active',
      technologies: ['TypeScript', 'Node.js', 'AI/ML', 'Skills Architecture'],
      startDate: '2024-01-15',
      githubUrl: 'https://github.com/openclaw-ai/openclaw',
      liveUrl: 'http://localhost:3000',
      category: 'ai-tools'
    },
    {
      id: 'quant-dashboard',
      name: 'Quantitative Finance Dashboard',
      description: 'Real-time financial data visualization and analysis platform. Aggregates multiple data sources with intelligent rate limiting and priority-based processing.',
      status: 'active', 
      technologies: ['React', 'WebSockets', 'Financial APIs', 'Real-time Data'],
      startDate: '2024-02-01',
      githubUrl: 'https://github.com/jayrizz/quant-dashboard',
      liveUrl: 'http://localhost:5173',
      category: 'web-apps'
    },
    {
      id: 'aoc-dashboard',
      name: 'Advent of Code Progress Tracker',
      description: 'Interactive dashboard for tracking Advent of Code progress, solutions, and performance metrics. Features code visualization and automated testing.',
      status: 'active',
      technologies: ['Next.js', 'TypeScript', 'Code Analysis', 'Visualization'],
      startDate: '2023-12-01',
      endDate: '2024-01-15',
      githubUrl: 'https://github.com/jayrizz/aoc-dashboard',
      liveUrl: 'http://localhost:18800',
      category: 'web-apps'
    },
    {
      id: 'jaythakur-com',
      name: 'Personal Portfolio Site',
      description: 'This site! Built with Next.js App Router, featuring scalable architecture for continuous expansion, API proxy routing, and comprehensive system monitoring.',
      status: 'active',
      technologies: ['Next.js', 'TypeScript', 'Component Architecture', 'Proxy Routing'],
      startDate: '2024-03-26',
      githubUrl: 'https://github.com/jayrizz/jaythakur.com',
      liveUrl: 'https://jaythakur.com',
      category: 'web-apps'
    },
    {
      id: 'ai-workflow-automation',
      name: 'AI Workflow Automation Suite',
      description: 'Collection of AI-powered automation tools for common development and operational tasks. Includes code review automation, deployment pipelines, and monitoring.',
      status: 'planned',
      technologies: ['Python', 'AI/ML', 'DevOps', 'Automation'],
      startDate: '2024-05-01',
      category: 'automation'
    },
    {
      id: 'neural-architecture-search',
      name: 'Neural Architecture Search Experiments',
      description: 'Research project exploring automated neural network design using evolutionary algorithms and reinforcement learning approaches.',
      status: 'archived',
      technologies: ['Python', 'PyTorch', 'Research', 'Neural Networks'],
      startDate: '2023-06-01',
      endDate: '2023-11-30',
      githubUrl: 'https://github.com/jayrizz/nas-experiments',
      category: 'experiments'
    }
  ]

  const projectsByCategory = projects.reduce((acc, project) => {
    if (!acc[project.category]) acc[project.category] = []
    acc[project.category].push(project)
    return acc
  }, {} as Record<string, Project[]>)

  const categoryNames = {
    'ai-tools': 'AI Tools & Assistants',
    'web-apps': 'Web Applications', 
    'automation': 'Automation & DevOps',
    'experiments': 'Research & Experiments'
  }

  const statusStats = {
    active: projects.filter(p => p.status === 'active').length,
    completed: projects.filter(p => p.status === 'completed').length,
    planned: projects.filter(p => p.status === 'planned').length,
    archived: projects.filter(p => p.status === 'archived').length
  }

  return (
    <>
      <PageHeader
        title="Projects"
        description="A collection of AI-powered tools, web applications, and experiments. Building the future with intelligent systems."

      />

      {/* Project Stats */}
      <div className="grid grid-4" style={{ marginBottom: '32px' }}>
        <Card>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#22c55e', marginBottom: '4px' }}>
              {statusStats.active}
            </div>
            <div style={{ color: '#aaa', fontSize: '0.9rem' }}>
              Active Projects
            </div>
          </div>
        </Card>
        
        <Card>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#4a9eff', marginBottom: '4px' }}>
              {statusStats.completed}
            </div>
            <div style={{ color: '#aaa', fontSize: '0.9rem' }}>
              Completed
            </div>
          </div>
        </Card>
        
        <Card>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fbbf24', marginBottom: '4px' }}>
              {statusStats.planned}
            </div>
            <div style={{ color: '#aaa', fontSize: '0.9rem' }}>
              Planned
            </div>
          </div>
        </Card>
        
        <Card>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#6b7280', marginBottom: '4px' }}>
              {statusStats.archived}
            </div>
            <div style={{ color: '#aaa', fontSize: '0.9rem' }}>
              Archived
            </div>
          </div>
        </Card>
      </div>

      {/* Projects by Category */}
      {Object.entries(projectsByCategory)
        .sort(([a], [b]) => {
          const order = ['ai-tools', 'web-apps', 'automation', 'experiments']
          return order.indexOf(a) - order.indexOf(b)
        })
        .map(([category, categoryProjects]) => (
        <div key={category} style={{ marginBottom: '48px' }}>
          <h2 style={{ 
            color: '#fff', 
            marginBottom: '24px',
            fontSize: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            {categoryNames[category as keyof typeof categoryNames]}
            <span style={{ 
              backgroundColor: '#374151', 
              color: '#d1d5db',
              padding: '2px 8px',
              borderRadius: '12px',
              fontSize: '0.75rem',
              fontWeight: '500'
            }}>
              {categoryProjects.length}
            </span>
          </h2>
          
          <div className="grid grid-2">
            {categoryProjects
              .sort((a, b) => {
                const statusOrder = { active: 0, completed: 1, planned: 2, archived: 3 }
                return statusOrder[a.status] - statusOrder[b.status]
              })
              .map((project) => (
              <Card key={project.id} hover>
                <CardHeader
                  title={project.name}
                  subtitle={`${formatDate(project.startDate)}${project.endDate ? ` - ${formatDate(project.endDate)}` : ''}`}
                  status={project.status}
                />
                <CardContent>
                  <p style={{ marginBottom: '16px', lineHeight: 1.6 }}>
                    {project.description}
                  </p>
                  
                  <div style={{ marginBottom: '16px' }}>
                    <div style={{ color: '#aaa', fontSize: '0.85rem', marginBottom: '8px' }}>
                      Technologies:
                    </div>
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          style={{
                            padding: '4px 8px',
                            borderRadius: '12px',
                            fontSize: '0.75rem',
                            backgroundColor: '#374151',
                            color: '#d1d5db'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
                
                <CardActions>
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
                  <Link href={`/projects/${project.id}`} className="btn btn-secondary">
                    📖 Details
                  </Link>
                </CardActions>
              </Card>
            ))}
          </div>
        </div>
      ))}

      {/* Future Projects */}
      <Card style={{ marginTop: '32px' }}>
        <CardHeader title="Future Vision" subtitle="Ideas and concepts for upcoming projects" />
        <CardContent>
          <div className="grid grid-2">
            <div>
              <h3 style={{ color: '#4a9eff', marginBottom: '8px' }}>AI-Native Development</h3>
              <p style={{ color: '#aaa', marginBottom: '16px' }}>
                Building development environments where AI is a first-class citizen, 
                not just a tool. Think pair programming, but the AI understands context, 
                constraints, and can make autonomous decisions.
              </p>
            </div>
            
            <div>
              <h3 style={{ color: '#4a9eff', marginBottom: '8px' }}>Distributed Intelligence</h3>
              <p style={{ color: '#aaa', marginBottom: '16px' }}>
                Networks of specialized AI agents that can collaborate, delegate, 
                and coordinate complex tasks across multiple systems and domains.
              </p>
            </div>
            
            <div>
              <h3 style={{ color: '#4a9eff', marginBottom: '8px' }}>Human-AI Interfaces</h3>
              <p style={{ color: '#aaa', marginBottom: '16px' }}>
                Exploring new interaction paradigms beyond chat. Think ambient AI 
                that understands context, intent, and can proactively assist without 
                constant prompting.
              </p>
            </div>
            
            <div>
              <h3 style={{ color: '#4a9eff', marginBottom: '8px' }}>Autonomous Systems</h3>
              <p style={{ color: '#aaa', marginBottom: '16px' }}>
                Systems that can maintain, improve, and evolve themselves. 
                Self-healing infrastructure, auto-optimizing algorithms, 
                and continuously learning platforms.
              </p>
            </div>
          </div>
          
          <div style={{ marginTop: '24px', textAlign: 'center' }}>
            <Link href="/memory" className="btn">
              💭 Explore These Ideas in Memory
            </Link>
          </div>
        </CardContent>
      </Card>
    </>
  )
}