export default function Loading() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '400px',
      gap: '24px'
    }}>
      {/* Loading Spinner */}
      <div 
        className="loading-spinner"
        style={{
          width: '48px',
          height: '48px',
          border: '4px solid #374151',
          borderTop: '4px solid #4a9eff',
          borderRadius: '50%'
        }} 
      />
      
      {/* Loading Text */}
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ 
          color: '#fff', 
          margin: '0 0 8px 0',
          fontSize: '1.25rem' 
        }}>
          Loading...
        </h2>
        <p style={{ 
          color: '#aaa', 
          margin: 0,
          fontSize: '0.9rem' 
        }}>
          Preparing the experience
        </p>
      </div>
    </div>
  )
}