import Link from 'next/link'
import Card, { CardHeader, CardContent, CardActions } from '@/components/Card'

export default function NotFound() {
  const suggestions = [
    {
      title: 'Home',
      description: 'Start fresh from the homepage',
      href: '/' as const,
      icon: '🏠'
    },
    {
      title: 'Projects',
      description: 'Browse AI-powered projects and experiments', 
      href: '/projects' as const,
      icon: '🚀'
    },
    {
      title: 'Apps',
      description: 'Launch tools and dashboards',
      href: '/apps' as const, 
      icon: '⚡'
    },
    {
      title: 'Memory',
      description: 'Explore learnings and insights',
      href: '/memory' as const,
      icon: '🧠'
    }
  ]

  return (
    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', paddingTop: '64px' }}>
      {/* 404 Header */}
      <div style={{ marginBottom: '48px' }}>
        <h1 style={{ 
          fontSize: '8rem', 
          fontWeight: 'bold', 
          color: '#4a9eff',
          margin: 0,
          lineHeight: 0.8
        }}>
          404
        </h1>
        <h2 style={{ 
          fontSize: '2rem', 
          color: '#fff', 
          margin: '16px 0 8px 0' 
        }}>
          Page Not Found
        </h2>
        <p style={{ 
          fontSize: '1.1rem', 
          color: '#aaa', 
          margin: 0,
          maxWidth: '500px',
          marginLeft: 'auto',
          marginRight: 'auto',
          lineHeight: 1.6
        }}>
          The page you're looking for doesn't exist. It might have been moved, 
          deleted, or you entered the wrong URL.
        </p>
      </div>

      {/* Suggestions */}
      <div style={{ marginBottom: '48px' }}>
        <h3 style={{ 
          color: '#fff', 
          marginBottom: '24px',
          fontSize: '1.25rem'
        }}>
          Try these instead:
        </h3>
        
        <div className="grid grid-2">
          {suggestions.map((suggestion) => (
            <Card key={suggestion.href} hover>
              <CardContent>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px',
                  marginBottom: '8px'
                }}>
                  <span style={{ fontSize: '1.5rem' }}>{suggestion.icon}</span>
                  <h4 style={{ 
                    margin: 0, 
                    color: '#fff',
                    fontSize: '1.1rem' 
                  }}>
                    {suggestion.title}
                  </h4>
                </div>
                <p style={{ 
                  margin: 0, 
                  color: '#aaa',
                  fontSize: '0.9rem',
                  lineHeight: 1.5
                }}>
                  {suggestion.description}
                </p>
              </CardContent>
              <CardActions>
                <Link href={suggestion.href} className="btn">
                  Visit {suggestion.title}
                </Link>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>

      {/* Back Navigation */}
      <Card>
        <CardContent>
          <h3 style={{ 
            color: '#fff', 
            marginBottom: '16px',
            fontSize: '1.1rem' 
          }}>
            Need help finding something?
          </h3>
          <p style={{ 
            color: '#aaa', 
            marginBottom: '24px',
            lineHeight: 1.6
          }}>
            Check the navigation menu above, or use your browser's back button to return 
            to where you came from. All main sections are accessible from the top navigation.
          </p>
          
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
            <Link href="/" className="btn">
              🏠 Home
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Fun Element */}
      <div style={{ 
        marginTop: '48px', 
        padding: '24px',
        color: '#666',
        fontSize: '0.9rem',
        borderTop: '1px solid #333'
      }}>
        <p style={{ margin: 0 }}>
          🤖 <em>Even AI assistants get lost sometimes. But we always find our way back.</em>
        </p>
      </div>
    </div>
  )
}