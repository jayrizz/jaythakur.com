import PageHeader from '@/components/PageHeader'
import Card, { CardHeader, CardContent } from '@/components/Card'
import { formatDate } from '@/lib/utils'

export default function MorningEditionPage() {
  // Generate last 7 days
  const generateRecentDays = () => {
    const days = []
    const today = new Date('2026-04-17') // Current date context
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() - i)
      const dateStr = date.toISOString().split('T')[0] // YYYY-MM-DD format
      
      days.push({
        date: dateStr,
        displayDate: date.toLocaleDateString('en-US', { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        }),
        shortDate: date.toLocaleDateString('en-US', { 
          month: 'short', 
          day: 'numeric' 
        }),
        url: `https://jayrizz.github.io/jaythakur.com/magazines/${dateStr}.html`,
        isToday: i === 0,
        isAvailable: ['2026-04-17', '2026-04-16', '2026-04-15'].includes(dateStr)
      })
    }
    
    return days
  }

  const recentDays = generateRecentDays()

  return (
    <>
      <PageHeader
        title="Morning Edition"
        description="Daily curated intelligence from Hacker News. AI-powered editorial selection and beautiful magazine format."
      />

      {/* About Morning Edition */}
      <section style={{ marginBottom: '48px' }}>
        <div style={{ 
          background: 'linear-gradient(135deg, #ff6b35 0%, #ff8f65 100%)', 
          padding: '32px', 
          borderRadius: '12px',
          marginBottom: '32px'
        }}>
          <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '16px', color: '#fff' }}>
            🌅 Your Daily Tech Intelligence
          </h2>
          <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#fff', opacity: '0.95' }}>
            Every morning at 7 AM, an AI curator analyzes Hacker News top stories and applies intelligent filtering based on personal taste: 
            AI/LLM content (weight: 3), developer tools (2), enterprise software (2), science and weird discoveries (2). 
            The result: 30 hand-picked stories in beautiful magazine format, delivered fresh daily.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '32px' }}>
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ff6b35' }}>30</div>
            <div style={{ color: '#888', fontSize: '14px' }}>Stories Daily</div>
          </div>
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ff6b35' }}>7AM</div>
            <div style={{ color: '#888', fontSize: '14px' }}>Daily Delivery</div>
          </div>
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ff6b35' }}>AI</div>
            <div style={{ color: '#888', fontSize: '14px' }}>Curated</div>
          </div>
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ff6b35' }}>∞</div>
            <div style={{ color: '#888', fontSize: '14px' }}>Archive</div>
          </div>
        </div>
      </section>

      {/* Recent Editions */}
      <section>
        <h2 style={{ fontSize: '28px', fontWeight: '600', marginBottom: '24px', color: '#fff' }}>
          Recent Editions
        </h2>
        
        <div style={{ display: 'grid', gap: '16px' }}>
          {recentDays.map((day, index) => (
            <Card key={day.date} style={{ 
              background: day.isToday ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)' : undefined,
              border: day.isToday ? '2px solid #ff6b35' : undefined
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <div style={{ 
                    minWidth: '80px', 
                    textAlign: 'center',
                    padding: '12px',
                    background: day.isToday ? '#ff6b35' : '#12121a',
                    borderRadius: '8px',
                    border: '1px solid #1a1a2e'
                  }}>
                    <div style={{ 
                      fontSize: '18px', 
                      fontWeight: 'bold', 
                      color: day.isToday ? '#fff' : '#ff6b35' 
                    }}>
                      {day.shortDate}
                    </div>
                    <div style={{ 
                      fontSize: '12px', 
                      color: day.isToday ? '#fff' : '#888', 
                      opacity: '0.8' 
                    }}>
                      {day.isToday ? 'TODAY' : `${index} days ago`}
                    </div>
                  </div>
                  
                  <div>
                    <h3 style={{ 
                      fontSize: '20px', 
                      fontWeight: '600', 
                      marginBottom: '4px',
                      color: '#fff'
                    }}>
                      {day.displayDate}
                      {day.isToday && <span style={{ color: '#ff6b35', marginLeft: '12px' }}>🔥 Latest</span>}
                    </h3>
                    <p style={{ 
                      color: '#888', 
                      fontSize: '14px',
                      margin: '0'
                    }}>
                      {day.isAvailable ? 
                        '30 curated stories • AI-filtered • Editorial design' : 
                        'Coming soon • Generated daily at 7 AM CT'
                      }
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  {day.isAvailable ? (
                    <>
                      <a 
                        href={day.url} 
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '8px',
                          padding: '12px 20px',
                          background: '#ff6b35',
                          color: '#fff',
                          textDecoration: 'none',
                          borderRadius: '6px',
                          fontWeight: '600',
                          fontSize: '14px',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.background = '#e55a2b'
                          e.currentTarget.style.transform = 'translateY(-1px)'
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.background = '#ff6b35'
                          e.currentTarget.style.transform = 'translateY(0)'
                        }}
                      >
                        📖 Read Edition
                      </a>
                    </>
                  ) : (
                    <div style={{
                      padding: '12px 20px',
                      background: '#12121a',
                      color: '#666',
                      borderRadius: '6px',
                      fontSize: '14px',
                      border: '1px solid #1a1a2e'
                    }}>
                      Not Available
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section style={{ marginTop: '64px', padding: '40px 0', borderTop: '1px solid #1a1a2e' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '24px', color: '#fff' }}>
          How Morning Edition Works
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <div style={{ fontSize: '32px', marginBottom: '12px' }}>🤖</div>
            <h4 style={{ color: '#ff6b35', marginBottom: '8px' }}>AI Curation</h4>
            <p style={{ color: '#888', fontSize: '14px', lineHeight: '1.5' }}>
              Advanced filtering algorithms analyze Hacker News content using weighted keywords and intelligent scoring
            </p>
          </div>
          
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <div style={{ fontSize: '32px', marginBottom: '12px' }}>🎨</div>
            <h4 style={{ color: '#ff6b35', marginBottom: '8px' }}>Editorial Design</h4>
            <p style={{ color: '#888', fontSize: '14px', lineHeight: '1.5' }}>
              Each edition is rendered as a beautiful magazine with typography, layout, and visual design
            </p>
          </div>
          
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <div style={{ fontSize: '32px', marginBottom: '12px' }}>⚡</div>
            <h4 style={{ color: '#ff6b35', marginBottom: '8px' }}>Automated Delivery</h4>
            <p style={{ color: '#888', fontSize: '14px', lineHeight: '1.5' }}>
              Generated and deployed automatically every morning at 7 AM Central Time
            </p>
          </div>
        </div>
      </section>
    </>
  )
}<!-- Force rebuild Fri Apr 17 09:38:29 CDT 2026 -->
