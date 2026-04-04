interface PageHeaderProps {
  title: string
  description?: string
  breadcrumb?: Array<{ label: string; href?: string }>
}

export default function PageHeader({ title, description, breadcrumb }: PageHeaderProps) {
  return (
    <div style={{ marginBottom: '32px' }}>
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