import PageHeader from '@/components/PageHeader'
import Card, { CardHeader, CardContent } from '@/components/Card'
import { formatDate } from '@/lib/utils'

export default function MemoryPage() {
  const memories = [
    {
      id: '11',
      date: '2026-04-16',
      title: 'AI Operations Resilience & System Hardening',
      content: 'Implemented comprehensive protection against operational failures after git clean accidentally deleted critical scripts. Built multi-layer defense: git tracking for all scripts, automated backup systems, cron job management, and recovery procedures. Created Morning Edition HN curator with automated daily deployment. Key insight: AI operations require the same discipline as traditional DevOps - protection, monitoring, and recovery procedures are essential for 24/7 autonomous systems.',
      tags: ['openclaw', 'devops', 'system-hardening', 'git', 'automation', 'resilience'],
      type: 'milestone' as const
    },
    {
      id: '10',
      date: '2026-04-10',
      title: 'Accenture SC&E Presentation - Live AI Demo Success',
      content: 'Presented OpenClaw capabilities to Accenture Americas SC&E Gen AI Community. Instead of pre-recorded terminal demo, demonstrated live chat interaction showing real-time research, system health checks, and conversational AI collaboration. Audience engaged with manufacturing challenges discussion - pulled live 2026 supply chain stats (88% enterprises use AI, 80% see no ROI, 307% ROI for winners). Key insight: live interaction cuts through the "baseline expectation" of overstimulated audiences better than scripted demos.',
      tags: ['openclaw', 'accenture', 'presentation', 'live-demo', 'supply-chain'],
      type: 'milestone' as const
    },
    {
      id: '9',
      date: '2026-04-10',
      title: 'Memory Management Module - Learning & Improving',
      content: 'OpenClaw memory system now tracks learning and improvements automatically. Key capabilities: semantic search across memory files using hybrid embedding model (hf:ggml-org/embeddinggemma-300m-qat-q8_0-GGUF), daily memory logs, long-term curation to MEMORY.md. Evolution tracked: session TTL fixed (1h→24h), cron jobs converted to MiniMax (avoiding rate limits), urgent keyword monitoring added.',
      tags: ['openclaw', 'memory', 'learning', 'ai'],
      type: 'learning' as const
    },
    {
      id: '8',
      date: '2026-04-06',
      title: 'LinkedIn Profile Optimizer Skill',
      content: 'Created 7-prompt framework for LinkedIn optimization: headline, about section, experience bullets, skills selection, summary, achievement quantification, keyword optimization. Enables users to transform their profiles to attract recruiters and pass ATS filters.',
      tags: ['openclaw', 'skill', 'linkedin', 'career'],
      type: 'learning' as const
    },
    {
      id: '7',
      date: '2026-04-05',
      title: 'AI Slides Generator Skill',
      content: 'Built python-pptx based skill for generating professional slides from outlines. Supports title, content, two-column layouts with speaker notes. Business presentation focused with templates for problem/solution, data/metrics, timeline formats.',
      tags: ['openclaw', 'skill', 'presentations', 'pptx'],
      type: 'learning' as const
    },
    {
      id: '6',
      date: '2026-04-03',
      title: 'System Stability - All Cron Jobs Converted to MiniMax',
      content: 'Fixed token consumption and rate limiting issues by converting all cron jobs from Claude to MiniMax model. Root cause: expensive token usage + rate limits causing system crashes during high load. Solution: use MiniMax for background tasks, preserve Claude for main interactive sessions. System now stable with 86 active sessions.',
      tags: ['openclaw', 'stability', 'mini-max', 'optimization'],
      type: 'learning' as const
    },
    {
      id: '5',
      date: '2026-03-31',
      title: 'Session Architecture Bug Fix',
      content: 'Major bug found: session isolation caused 13-hour delay in responding to security alerts during quiet hours. Root cause was main session TTL=1h combined with cron isolation. Fix: extended session TTL to 24h and added urgent keyword monitoring every 5 minutes. Lesson: focus on root cause analysis, not apologies.',
      tags: ['openclaw', 'architecture', 'bug-fix', 'lessons'],
      type: 'learning' as const
    },
    {
      id: '4',
      date: '2026-03-25',
      title: 'Capitol Trades Scraper Migration',
      content: 'Migrated from housestockwatcher.com (now dead) to InsiderFinance.io for congressional trading data. Implemented with date filters and configurable options for research flexibility.',
      tags: ['openclaw', 'scraper', 'capitol-trades', 'congress'],
      type: 'project' as const
    },
    {
      id: '3',
      date: '2024-04-03',
      title: 'Building with Claude Sonnet 3.5',
      content: 'Discovered that Claude excels at understanding complex system architectures when provided with clear context. The key is breaking down problems into manageable components while maintaining the bigger picture. Today I rebuilt the entire jaythakur.com site architecture - from a minimal setup to a scalable Next.js application with proper component structure, shared utilities, and dynamic routing capabilities.',
      tags: ['ai', 'claude', 'architecture', 'nextjs'],
      type: 'technical' as const
    },
    {
      id: '2', 
      date: '2024-04-02',
      title: 'System Health Dashboard Implementation',
      content: 'Implemented real-time monitoring for all local services. The proxy routing architecture is working well - services can be down without breaking the main site. Created fallback pages that show service status and provide alternative access methods. This approach allows for continuous deployment without downtime.',
      tags: ['monitoring', 'proxies', 'reliability'],
      type: 'technical' as const
    },
    {
      id: '3',
      date: '2024-04-01', 
      title: 'OpenClaw Agent Skills',
      content: 'The skill system is brilliant. Each skill is self-contained with its own SKILL.md documentation, making it easy to understand and extend capabilities. The modular approach means you can add new tools without touching core code. This is how AI assistants should evolve - through composable, documented skills.',
      tags: ['openclaw', 'skills', 'modularity'],
      type: 'learning' as const
    },
    {
      id: '4',
      date: '2024-03-31',
      title: 'Quant Dashboard Data Pipeline',
      content: 'Built a real-time financial data pipeline that aggregates multiple sources. The challenging part was handling rate limits and data synchronization. Solution: implement a priority queue system where critical updates get processed first, with intelligent backoff for non-essential data.',
      tags: ['quantitative', 'data', 'finance', 'real-time'],
      type: 'project' as const
    },
    {
      id: '5',
      date: '2024-03-30',
      title: 'AI-Human Collaboration Patterns',
      content: 'Noticed interesting patterns in how I work with AI tools. Best results come from treating the AI as a thinking partner rather than just a code generator. Providing context about goals, constraints, and trade-offs leads to much better solutions. The magic happens in the iterative refinement process.',
      tags: ['ai', 'collaboration', 'patterns'],
      type: 'learning' as const
    }
  ]

  const typeColors = {
    technical: '#4a9eff',
    learning: '#22c55e', 
    project: '#f59e0b',
    personal: '#8b5cf6',
    milestone: '#ef4444'
  }

  const groupedMemories = memories.reduce((acc, memory) => {
    const dateKey = formatDate(memory.date)
    if (!acc[dateKey]) acc[dateKey] = []
    acc[dateKey].push(memory)
    return acc
  }, {} as Record<string, typeof memories>)

  return (
    <>
      <PageHeader
        title="Memory"
        description="A record of learnings, insights, and progress. Building knowledge over time."

      />

      {/* Memory Stats */}
      <div className="grid grid-3" style={{ marginBottom: '32px' }}>
        <Card>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#4a9eff', marginBottom: '4px' }}>
              {memories.length}
            </div>
            <div style={{ color: '#aaa', fontSize: '0.9rem' }}>
              Total Memories
            </div>
          </div>
        </Card>
        
        <Card>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#22c55e', marginBottom: '4px' }}>
              {new Set(memories.flatMap(m => m.tags)).size}
            </div>
            <div style={{ color: '#aaa', fontSize: '0.9rem' }}>
              Unique Tags
            </div>
          </div>
        </Card>
        
        <Card>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#f59e0b', marginBottom: '4px' }}>
              {Object.keys(groupedMemories).length}
            </div>
            <div style={{ color: '#aaa', fontSize: '0.9rem' }}>
              Days Recorded
            </div>
          </div>
        </Card>
      </div>

      {/* Memory Timeline */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {Object.entries(groupedMemories)
          .sort(([a], [b]) => new Date(b).getTime() - new Date(a).getTime())
          .map(([date, dayMemories]) => (
          <div key={date}>
            <h2 style={{ 
              color: '#fff', 
              marginBottom: '16px',
              paddingLeft: '16px',
              borderLeft: '3px solid #4a9eff'
            }}>
              {date}
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {dayMemories.map((memory) => (
                <Card key={memory.id}>
                  <CardHeader 
                    title={memory.title}
                    subtitle={`${memory.type} • ${memory.tags.join(', ')}`}
                  />
                  <CardContent>
                    <p style={{ lineHeight: 1.6, marginBottom: '16px' }}>
                      {memory.content}
                    </p>
                    
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      <span 
                        style={{
                          display: 'inline-block',
                          padding: '4px 8px',
                          borderRadius: '12px',
                          fontSize: '0.75rem',
                          fontWeight: '500',
                          backgroundColor: `${typeColors[memory.type]}20`,
                          color: typeColors[memory.type],
                          border: `1px solid ${typeColors[memory.type]}40`
                        }}
                      >
                        {memory.type}
                      </span>
                      
                      {memory.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            display: 'inline-block',
                            padding: '4px 8px',
                            borderRadius: '12px',
                            fontSize: '0.75rem',
                            backgroundColor: '#374151',
                            color: '#d1d5db'
                          }}
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Add Memory Section */}
      <Card style={{ marginTop: '32px' }}>
        <CardHeader title="Add New Memory" subtitle="Record a new learning or insight" />
        <CardContent>
          <p style={{ color: '#aaa', marginBottom: '16px' }}>
            Memories are currently managed through the OpenClaw system. New entries can be added 
            through the agent interface or by directly updating the memory files.
          </p>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button className="btn btn-secondary">
              📝 Quick Note
            </button>
            <button className="btn btn-secondary">
              🏷️ Browse Tags
            </button>
            <button className="btn btn-secondary">
              📊 Memory Analytics
            </button>
          </div>
        </CardContent>
      </Card>
    </>
  )
}