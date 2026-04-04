interface PageHeaderProps {
  title: string
  description?: string
  breadcrumb?: Array<{ label: string; href?: string }>
}

export default function PageHeader({ title, description, breadcrumb }: PageHeaderProps) {
  return (
    <div style={{ marginBottom: '32px' }}>
      {breadcrumb && (
        <nav style={{ marginBottom: '12px', color: '#666', fontSize: '0.9rem' }}>
          {breadcrumb.map((item, index) => (
            <span key={index}>
              {index > 0 && <span style={{ margin: '0 8px' }}>›</span>}
              {item.href ? (
                <a href={item.href} style={{ color: '#4a9eff' }}>{item.label}</a>
              ) : (
                <span>{item.label}</span>
              )}
            </span>
          ))}
        </nav>
      )}
      <h1 style={{ 
        fontSize: '2.5rem', 
        fontWeight: 700, 
        marginBottom: description ? '8px' : 0, 
        color: '#fff',
        lineHeight: 1.2
      }}>
        {title}
      </h1>
      {description && (
        <p style={{ 
          fontSize: '1.1rem', 
          color: '#aaa', 
          maxWidth: '600px',
          lineHeight: 1.5,
          margin: 0
        }}>
          {description}
        </p>
      )}
    </div>
  )
}