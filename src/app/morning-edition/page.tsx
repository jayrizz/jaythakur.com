export default function MorningEditionPage() {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1 style={{ color: '#fff', fontSize: '48px', marginBottom: '24px' }}>
        ☀️ Morning Edition
      </h1>
      <p style={{ color: '#aaa', fontSize: '20px', maxWidth: '600px', margin: '0 auto' }}>
        Your daily Hacker News curator - delivered fresh every morning at 7 AM CT.
      </p>
      
      <div style={{ marginTop: '40px', padding: '32px', background: '#1a1a2e', borderRadius: '12px', maxWidth: '800px', margin: '40px auto 0' }}>
        <h2 style={{ color: '#ff6b35', marginBottom: '16px' }}>🚧 Under Construction</h2>
        <p style={{ color: '#888' }}>
          The Morning Edition archive system is being built. Soon you'll see the past 7 days of 
          curated Hacker News summaries here, automatically generated and deployed every morning.
        </p>
      </div>
      
      <div style={{ marginTop: '32px' }}>
        <a 
          href="/" 
          style={{ 
            display: 'inline-block', 
            padding: '12px 24px', 
            background: '#ff6b35', 
            color: '#fff', 
            textDecoration: 'none', 
            borderRadius: '8px',
            fontWeight: '600' 
          }}
        >
          ← Back to Timeline
        </a>
      </div>
    </div>
  )
}