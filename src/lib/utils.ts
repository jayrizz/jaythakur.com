// Utility functions

export function formatDate(date: string | Date): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export function formatRelativeTime(date: string | Date): string {
  const d = typeof date === 'string' ? new Date(date) : date
  const now = new Date()
  const diff = now.getTime() - d.getTime()
  
  const minutes = Math.floor(diff / (1000 * 60))
  const hours = Math.floor(diff / (1000 * 60 * 60))
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  
  if (minutes < 1) return 'just now'
  if (minutes < 60) return `${minutes}m ago`
  if (hours < 24) return `${hours}h ago`
  if (days < 7) return `${days}d ago`
  
  return formatDate(d)
}

export function classNames(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

export async function checkServiceHealth(url: string): Promise<{ status: 'online' | 'offline'; responseTime?: number }> {
  try {
    const start = Date.now()
    const response = await fetch(url, { 
      method: 'HEAD',
      signal: AbortSignal.timeout(5000)
    })
    const responseTime = Date.now() - start
    
    return {
      status: response.ok ? 'online' : 'offline',
      responseTime
    }
  } catch (error) {
    return { status: 'offline' }
  }
}

export function getStatusColor(status: string): string {
  switch (status) {
    case 'online':
    case 'active':
    case 'completed':
      return '#22c55e'
    case 'offline':
    case 'archived':
      return '#ef4444'
    case 'building':
    case 'planned':
      return '#fbbf24'
    default:
      return '#6b7280'
  }
}