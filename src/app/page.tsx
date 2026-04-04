import PageHeader from '@/components/PageHeader'
import Card, { CardHeader, CardContent, CardActions } from '@/components/Card'
import Link from 'next/link'

export default function HomePage() {
  const recentProjects = [
    {
      name: 'OpenClaw Agent System',
      description: 'AI assistant with skills and tool access',
      status: 'active' as const,
      url: '/projects#openclaw' as const
    },
    {
      name: 'Quant Dashboard', 
      description: 'Financial data visualization and analysis',
      status: 'active' as const,
      url: '/api/quant' as const
    },
    {
      name: 'AOC Dashboard',
      description: 'Advent of Code progress tracking',
      status: 'active' as const, 
      url: '/api/aoc' as const
    }
  ]

  const quickStats = [
    { label: 'Active Projects', value: '12' },
    { label: 'Apps Deployed', value: '8' },
    { label: 'AI Tools Built', value: '25' },
    { label: 'Memory Entries', value: '1,247' }
  ]

  return (
    <>
      <PageHeader
        title="Jay Thakur"
        description="Building production systems with AI partners. Exploring the intersection of human creativity and artificial intelligence."
      />

      {/* Quick Stats */}
      <div className="grid grid-4" style={{ marginBottom: '32px' }}>
        {quickStats.map((stat, index) => (
          <Card key={index}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#4a9eff', marginBottom: '4px' }}>
                {stat.value}
              </div>
              <div style={{ color: '#aaa', fontSize: '0.9rem' }}>
                {stat.label}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Recent Work */}
      <div className="grid grid-2">
        <div>
          <h2 style={{ marginBottom: '16px', color: '#fff' }}>Recent Projects</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {recentProjects.map((project, index) => (
              <Card key={index} hover>
                <CardHeader 
                  title={project.name}
                  subtitle={project.description}
                  status={project.status}
                />
                <CardActions>
                  <Link href={project.url} className="btn">
                    View Project
                  </Link>
                </CardActions>
              </Card>
            ))}
          </div>
          <div style={{ marginTop: '16px' }}>
            <Link href="/projects" className="btn btn-secondary">
              View All Projects →
            </Link>
          </div>
        </div>

        <div>
          <h2 style={{ marginBottom: '16px', color: '#fff' }}>Latest Memories</h2>
          <Card>
            <CardContent>
              <h3>Building with Claude Sonnet 3.5</h3>
              <p style={{ color: '#aaa', fontSize: '0.9rem', marginBottom: '8px' }}>
                Today, 2:30 PM
              </p>
              <p>
                Discovered that Claude excels at understanding complex system architectures 
                when provided with clear context. The key is breaking down problems into 
                manageable components while maintaining the bigger picture...
              </p>
            </CardContent>
            <CardActions>
              <Link href="/memory" className="btn btn-secondary">
                Read More
              </Link>
            </CardActions>
          </Card>

          <Card style={{ marginTop: '16px' }}>
            <CardContent>
              <h3>System Health Dashboard</h3>
              <p style={{ color: '#aaa', fontSize: '0.9rem', marginBottom: '8px' }}>
                Yesterday, 9:15 AM
              </p>
              <p>
                Implemented real-time monitoring for all local services. The proxy routing 
                architecture is working well - services can be down without breaking the main site...
              </p>
            </CardContent>
            <CardActions>
              <Link href="/memory" className="btn btn-secondary">
                Read More  
              </Link>
            </CardActions>
          </Card>

          <div style={{ marginTop: '16px' }}>
            <Link href="/memory" className="btn btn-secondary">
              View All Memories →
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <Card style={{ marginTop: '32px' }}>
        <CardHeader title="Quick Actions" />
        <CardContent>
          <div className="grid grid-3">
            <Link href="/mission-control" className="btn">
              🎯 Mission Control
            </Link>
            <Link href="/apps" className="btn">
              🚀 Launch Apps
            </Link>
            <Link href="/memory" className="btn">
              🧠 Browse Memories
            </Link>
          </div>
        </CardContent>
      </Card>
    </>
  )
}