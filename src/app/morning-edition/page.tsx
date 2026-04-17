export default function MorningEditionPage() {
  // Generate last 7 days and check which magazines exist
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
        exists: ['2026-04-15', '2026-04-16', '2026-04-17'].includes(dateStr),
        description: i === 0 ? "Today's curation" : 
                    i === 1 ? "Yesterday's picks" : 
                    `${i} days ago`
      })
    }
    return days
  }

  const recentDays = generateRecentDays()

  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <h1 style={{ 
          fontSize: '48px', 
          fontWeight: '700', 
          marginBottom: '16px',
          background: 'linear-gradient(135deg, #ff6b35 0%, #ff8f65 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          ☀️ Morning Edition
        </h1>
        <p style={{ color: '#aaa', fontSize: '20px', maxWidth: '600px', margin: '0 auto 24px' }}>
          Your daily Hacker News curator - AI-powered editorial delivered fresh every morning at 7 AM CT.
        </p>
        <div style={{ 
          display: 'inline-flex', 
          gap: '12px', 
          padding: '8px 16px', 
          background: '#1a1a2e', 
          borderRadius: '20px',
          fontSize: '14px',
          color: '#888'
        }}>
          <span>⚡ Automated</span>
          <span>•</span>
          <span>🎯 Curated</span>
          <span>•</span>
          <span>📰 Editorial</span>
        </div>
      </div>

      {/* Magazine Archive */}
      <div style={{ marginBottom: '48px' }}>
        <h2 style={{ 
          fontSize: '24px', 
          color: '#fff', 
          marginBottom: '24px',
          textAlign: 'center'
        }}>
          Recent Issues
        </h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '20px' 
        }}>
          {recentDays.map((day, index) => (
            <div 
              key={day.date}
              style={{ 
                background: day.exists ? '#1a1a2e' : '#12121a',
                border: day.exists ? '2px solid #ff6b35' : '1px solid #333',
                borderRadius: '12px',
                padding: '24px',
                position: 'relative',
                opacity: day.exists ? 1 : 0.6
              }}
            >
              {index === 0 && day.exists && (
                <div style={{ 
                  position: 'absolute',
                  top: '-10px',
                  right: '16px',
                  background: '#ff6b35',
                  color: '#fff',
                  padding: '4px 12px',
                  borderRadius: '12px',
                  fontSize: '12px',
                  fontWeight: '600'
                }}>
                  LATEST
                </div>
              )}
              
              <div style={{ marginBottom: '16px' }}>
                <h3 style={{ 
                  color: day.exists ? '#fff' : '#666',
                  fontSize: '18px',
                  fontWeight: '600',
                  marginBottom: '4px'
                }}>
                  {day.displayDate}
                </h3>
                <p style={{ 
                  color: day.exists ? '#aaa' : '#555',
                  fontSize: '14px'
                }}>
                  {day.description}
                </p>
              </div>

              {day.exists ? (
                <div>
                  <p style={{ 
                    color: '#888', 
                    fontSize: '14px', 
                    marginBottom: '16px',
                    lineHeight: '1.5'
                  }}>
                    AI-curated selection of top Hacker News stories, filtered and ranked for relevance, 
                    readability, and Jay's interests.
                  </p>
                  <a 
                    href={`/magazines/${day.date}.html`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ 
                      display: 'inline-block',
                      padding: '12px 24px',
                      background: '#ff6b35',
                      color: '#fff',
                      textDecoration: 'none',
                      borderRadius: '8px',
                      fontWeight: '600',
                      fontSize: '14px',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = '#ff8f65'
                      e.currentTarget.style.transform = 'translateY(-1px)'
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = '#ff6b35'
                      e.currentTarget.style.transform = 'translateY(0)'
                    }}
                  >
                    Read Issue →
                  </a>
                </div>
              ) : (
                <div>
                  <p style={{ 
                    color: '#555', 
                    fontSize: '14px', 
                    fontStyle: 'italic',
                    marginBottom: '16px'
                  }}>
                    No issue published for this date.
                  </p>
                  <div style={{ 
                    padding: '12px 24px',
                    background: '#333',
                    color: '#666',
                    borderRadius: '8px',
                    fontSize: '14px',
                    textAlign: 'center'
                  }}>
                    Coming Soon
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div style={{ 
        background: '#1a1a2e', 
        borderRadius: '16px', 
        padding: '32px', 
        marginBottom: '32px',
        border: '1px solid #333'
      }}>
        <h3 style={{ 
          color: '#ff6b35', 
          fontSize: '20px', 
          fontWeight: '600',
          marginBottom: '16px',
          textAlign: 'center'
        }}>
          How Morning Edition Works
        </h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '24px',
          marginTop: '24px'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '32px', marginBottom: '12px' }}>🤖</div>
            <h4 style={{ color: '#fff', marginBottom: '8px' }}>AI Curation</h4>
            <p style={{ color: '#888', fontSize: '14px', lineHeight: '1.5' }}>
              Fetches top 500 HN stories, scores them based on Jay's interests, and filters for quality
            </p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '32px', marginBottom: '12px' }}>✍️</div>
            <h4 style={{ color: '#fff', marginBottom: '8px' }}>Editorial Format</h4>
            <p style={{ color: '#888', fontSize: '14px', lineHeight: '1.5' }}>
              Renders as a beautiful magazine-style layout with typography and visual hierarchy
            </p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '32px', marginBottom: '12px' }}>⚡</div>
            <h4 style={{ color: '#ff6b35', marginBottom: '8px' }}>Automated Delivery</h4>
            <p style={{ color: '#888', fontSize: '14px', lineHeight: '1.5' }}>
              Generated and deployed automatically every morning at 7 AM Central Time
            </p>
          </div>
        </div>
      </div>

      {/* Back to Timeline */}
      <div style={{ textAlign: 'center' }}>
        <a 
          href="/" 
          style={{ 
            display: 'inline-block', 
            padding: '12px 24px', 
            background: 'transparent',
            border: '1px solid #666',
            color: '#aaa', 
            textDecoration: 'none', 
            borderRadius: '8px',
            fontWeight: '600',
            transition: 'all 0.2s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.borderColor = '#ff6b35'
            e.currentTarget.style.color = '#fff'
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.borderColor = '#666'
            e.currentTarget.style.color = '#aaa'
          }}
        >
          ← Back to Timeline
        </a>
      </div>
    </div>
  )
}