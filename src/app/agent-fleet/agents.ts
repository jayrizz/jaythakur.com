// Agent Registry - Generated from Control Room definitions
// Edit: ~/.openclaw/workspace/hermes-agent-control-room/agents/*/agent.yaml

export interface AgentDefinition {
  name: string
  description: string
  role: string
  owner: string
  status: 'online' | 'offline' | 'unknown'
  gateway_url?: string
  data_dir?: string
  skills: string[]
  allowed_work: string[]
  forbidden_work: string[]
  architecture_level: number
  runbooks?: string[]
  model_preference?: string
  last_seen?: string
}

export const agents: AgentDefinition[] = [
  {
    name: 'hermes',
    description: "Your persistent AI agent - personal assistant, memory, task execution",
    role: 'Personal Assistant',
    owner: 'Jay',
    status: 'online',
    gateway_url: 'http://127.0.0.1:18789',
    data_dir: '/Users/admin/.openclaw',
    skills: ['memory', 'terminal', 'file', 'web', 'session_search', 'delegate_task', 'cronjob', 'send_message'],
    allowed_work: ['task execution', 'research', 'coding', 'file management'],
    forbidden_work: ['destructive commands without approval', 'posting to social media without approval'],
    architecture_level: 2,
    runbooks: ['daily-check', 'memory-backup'],
    model_preference: 'minimax-portal/MiniMax-M2.1',
    last_seen: '2026-05-16T21:00:00Z'
  },
{
    name: 'hermes-jobsearch',
    description: "Job search ops, resume screening, application tracking, LinkedIn research",
    role: 'Job Search Specialist',
    owner: 'Jay',
    status: 'online',
    gateway_url: 'http://127.0.0.1:18789',
    data_dir: '/Users/admin/.openclaw',
    skills: ['web', 'search_files', 'terminal'],
    allowed_work: ['job research', 'application tracking', 'resume optimization'],
    forbidden_work: ['submitting applications without approval'],
    architecture_level: 2,
    runbooks: ['job-screening', 'application-tracking'],
    model_preference: 'minimax-portal/MiniMax-M2.1',
    last_seen: '2026-05-16T18:00:00Z'
  },
  {
    name: 'hermes-crypto',
    description: "Crypto portfolio monitoring, DeFi research, balance tracking across multichain",
    role: 'Crypto Analyst',
    owner: 'Jay',
    status: 'online',
    gateway_url: 'http://127.0.0.1:18789',
    data_dir: '/Users/admin/.openclaw',
    skills: ['web', 'terminal', 'delegate_task'],
    allowed_work: ['portfolio checks', 'DeFi research', 'price alerts'],
    forbidden_work: ['trades without approval'],
    architecture_level: 2,
    runbooks: ['portfolio-check', 'gas-alerts'],
    model_preference: 'anthropic/claude-sonnet-4',
    last_seen: '2026-05-16T20:00:00Z'
  },
  {
    name: 'hermes-dev',
    description: "Site development, debugging, code review, PR management for jaythakur-site",
    role: 'Development Specialist',
    owner: 'Jay',
    status: 'online',
    gateway_url: 'http://127.0.0.1:18789',
    data_dir: '/Users/admin/.openclaw/workspace',
    skills: ['terminal', 'git', 'code', 'delegate_task'],
    allowed_work: ['code changes', 'debugging', 'PR reviews', 'deployments'],
    forbidden_work: ['production deploys without approval'],
    architecture_level: 2,
    runbooks: ['site-deploy', 'debug-workflow'],
    model_preference: 'anthropic/claude-sonnet-4',
    last_seen: '2026-05-16T21:00:00Z'
  }
]

export const roleIcons: Record<string, string> = {
  'Personal Assistant': '👤',
  'Agent Orchestrator': '🎛️',
  'Development Specialist': '💻',
  'Job Search Specialist': '🎯',
  'Crypto Analyst': '₿',
  'SEO': '🔍',
  'Marketing': '📣',
  'Operations': '⚙️',
  'Default': '🤖'
}

export const statusColors: Record<string, string> = {
  'online': '#22c55e',
  'offline': '#ef4444',
  'unknown': '#fbbf24'
}