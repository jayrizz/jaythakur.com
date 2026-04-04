import { ReactNode, CSSProperties } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  style?: CSSProperties
}

export default function Card({ children, className = '', hover = false, style }: CardProps) {
  return (
    <div className={`card ${hover ? 'hover-effect' : ''} ${className}`} style={style}>
      {children}
    </div>
  )
}

interface CardHeaderProps {
  title: string | ReactNode
  subtitle?: string
  status?: 'online' | 'offline' | 'building' | 'unknown' | 'active' | 'completed' | 'archived' | 'planned'
  actions?: ReactNode
}

export function CardHeader({ title, subtitle, status, actions }: CardHeaderProps) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
      <div>
        <h2 style={{ margin: 0, marginBottom: subtitle ? '4px' : 0 }}>{title}</h2>
        {subtitle && <p style={{ margin: 0, color: '#aaa', fontSize: '0.9rem' }}>{subtitle}</p>}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {status && (
          <span className={`status ${status}`}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'currentColor' }}></span>
            {status}
          </span>
        )}
        {actions}
      </div>
    </div>
  )
}

interface CardContentProps {
  children: ReactNode
}

export function CardContent({ children }: CardContentProps) {
  return <div>{children}</div>
}

interface CardActionsProps {
  children: ReactNode
}

export function CardActions({ children }: CardActionsProps) {
  return (
    <div style={{ display: 'flex', gap: '12px', marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #333' }}>
      {children}
    </div>
  )
}