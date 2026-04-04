// Common types for the application

export interface Project {
  id: string
  name: string
  description: string
  status: 'active' | 'completed' | 'archived' | 'planned'
  technologies: string[]
  startDate: string
  endDate?: string
  githubUrl?: string
  liveUrl?: string
  category: 'ai-tools' | 'web-apps' | 'automation' | 'experiments'
}

export interface App {
  id: string
  name: string
  description: string
  icon?: string
  status: 'online' | 'offline' | 'building' | 'unknown'
  type: 'local' | 'deployed' | 'external'
  url: string
  port?: number
  category: 'dashboard' | 'tool' | 'game' | 'utility'
}

export interface Memory {
  id: string
  date: string
  title: string
  content: string
  tags: string[]
  type: 'learning' | 'project' | 'personal' | 'technical'
}

export interface ServiceStatus {
  name: string
  status: 'online' | 'offline' | 'unknown'
  url?: string
  port?: number
  lastChecked: string
  responseTime?: number
}