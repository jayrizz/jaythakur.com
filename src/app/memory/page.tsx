import PageHeader from '@/components/PageHeader'
import Card, { CardHeader, CardContent } from '@/components/Card'
import { formatDate } from '@/lib/utils'

export default function MemoryPage() {
  const memories = [
    {
      id: '15',
      date: '2026-04-17',
      title: 'Morning Edition AI Curator Goes Live',
      content: 'Morning Edition HN curator successfully generated first automated magazine. The system intelligently filters 30 top stories from Hacker News using weighted keywords (AI=3, automation=2, weird=2), applies editorial scoring, and renders them in a beautiful magazine format. Key breakthrough: shifting from "AI assistance" to "AI partnerships" - I define taste and strategy, AI handles execution and consistency. The curation quality rivals human editorial work.',
      tags: ['openclaw', 'editorial-ai', 'automation', 'hacker-news', 'curation'],
      type: 'milestone' as const
    },
    {
      id: '14',
      date: '2026-04-16',
      title: 'Git Clean Crisis and the DevOps Awakening',
      content: 'Major operational failure when git clean deleted critical scripts, breaking multiple cron jobs overnight. This forced a reckoning: AI operations need the same discipline as enterprise software. Built comprehensive protection: git tracking for all scripts, automated backup systems, recovery procedures, and monitoring. The crisis taught me that 24/7 autonomous systems require bulletproof operational discipline - no shortcuts.',
      tags: ['openclaw', 'devops', 'crisis-management', 'automation', 'resilience'],
      type: 'milestone' as const
    },
    {
      id: '13',
      date: '2026-04-15',
      title: 'Tax Reconciliation: $120K+ Discrepancy Discovery',
      content: 'Completed comprehensive crypto tax audit spanning 35 Solana wallets and 13,004 transactions (2019-2025). Discovered Cointracker systematically underestimated NFT cost basis - showing $0 when actual costs were substantial (DeGod #8376: $0 vs $3,120 actual). Built blockchain verification system that identified $116,741 in missed losses for 2022 alone. Created CPA package for tax amendments. Lesson: trust but verify - even sophisticated services have systematic biases.',
      tags: ['crypto', 'tax-audit', 'blockchain', 'verification', 'nft'],
      type: 'project' as const
    },
    {
      id: '12',
      date: '2026-04-10',
      title: 'Accenture Live Demo: When AI Performs Under Pressure',
      content: 'Presented OpenClaw to Accenture Americas SC&E Gen AI Community. Instead of safe pre-recorded demo, went live with real-time research and system health checks. The AI agent pulled live 2026 supply chain stats (88% enterprises use AI, 80% see no ROI, 307% ROI for winners) and engaged in manufacturing discussion. Audience was captivated by authentic interaction. Key insight: live AI collaboration cuts through "baseline expectation" fatigue better than scripted demos.',
      tags: ['accenture', 'presentation', 'live-demo', 'supply-chain', 'ai-collaboration'],
      type: 'milestone' as const
    },
    {
      id: '11',
      date: '2026-04-08',
      title: 'The Philosophy of AI Partnership',
      content: 'Breakthrough realization during late-night coding session: the relationship with AI isn\'t about assistance or automation - it\'s about partnership. I bring strategic vision, domain expertise, and judgment. AI brings tireless execution, pattern recognition, and systematic consistency. The magic happens in the handoffs - knowing when to direct vs when to delegate. This partnership model is producing systems that neither human nor AI could build alone.',
      tags: ['ai-partnership', 'philosophy', 'collaboration', 'strategy'],
      type: 'learning' as const
    },
    {
      id: '10',
      date: '2026-04-05',
      title: 'The Obsidian Memory Revolution',
      content: 'Implemented Karpathy-inspired memory system using Obsidian as the knowledge substrate. The breakthrough: AI agents with persistent, searchable memory across sessions. Built semantic search across memory files using hybrid embedding models, daily memory logs, and long-term curation. This isn\'t just note-taking - it\'s creating an AI system that learns and remembers like humans do. The compound effect of retained knowledge is transformative for long-term AI collaboration.',
      tags: ['memory-systems', 'obsidian', 'ai-learning', 'knowledge-retention'],
      type: 'milestone' as const
    },
    {
      id: '9',
      date: '2026-03-28',
      title: 'Congressional Trading Surveillance Network',
      content: 'Built autonomous system monitoring congressional stock trades in real-time. Scrapes House/Senate disclosures, applies ML-powered signal detection, and sends Telegram alerts for unusual activity. The system caught several high-value trades that flew under mainstream media radar. Fascinating to watch AI systems democratize financial intelligence that was previously available only to institutional players. Technology as the great equalizer.',
      tags: ['congress', 'trading', 'surveillance', 'ml-signals', 'fintech'],
      type: 'project' as const
    },
    {
      id: '8',
      date: '2026-03-25',
      title: 'When AI Agents Become Extension of Thought',
      content: 'Profound moment during complex tax reconciliation: realized I was thinking *through* the AI agent rather than just using it as a tool. The agent became an extension of my cognitive process - I\'d pose problems, it would explore solution spaces, I\'d guide the search. This symbiotic thinking is qualitatively different from traditional human-computer interaction. We\'re witnessing the emergence of augmented cognition.',
      tags: ['ai-cognition', 'augmented-thinking', 'symbiosis', 'philosophy'],
      type: 'learning' as const
    },
    {
      id: '7',
      date: '2026-03-20',
      title: 'Polymarket Whale Detection System',
      content: 'Developed ML signal engine for prediction market intelligence using decision tree classifiers. The system monitors large position movements and identifies whale behavior patterns. Fascinating intersection of AI, markets, and social prediction. The agent learns to recognize meaningful signals from noise in real-time betting data. This feels like early glimpse into how AI will reshape financial intelligence.',
      tags: ['prediction-markets', 'ml-signals', 'whale-detection', 'polymarket'],
      type: 'project' as const
    },
    {
      id: '6',
      date: '2026-03-15',
      title: 'The Night of 86 Sessions: Scaling AI Infrastructure',
      content: 'System crisis that became breakthrough: rate limiting issues caused cascading failures across all cron jobs. Root cause was expensive Claude token usage in background tasks. Solution: strategic model allocation - MiniMax for background automation, Claude for interactive intelligence. System now runs 24/7 with 86+ active sessions. Learned that scaling AI infrastructure requires the same architectural thinking as scaling traditional systems.',
      tags: ['scaling', 'infrastructure', 'model-allocation', 'system-design'],
      type: 'milestone' as const
    },
    {
      id: '5',
      date: '2026-03-10',
      title: 'Building Skills Marketplace: The OpenClaw Ecosystem',
      content: 'Published first skill to ClawHub marketplace - "sacred-rules" for config safety. This modular approach to AI capabilities is revolutionary: each skill is self-contained with documentation, making it easy to understand and extend capabilities without touching core code. The vision: a thriving ecosystem where AI agents can be enhanced through composable, documented skills. This is how AI systems should evolve.',
      tags: ['openclaw', 'skills-marketplace', 'modularity', 'ecosystem'],
      type: 'project' as const
    },
    {
      id: '4',
      date: '2026-02-28',
      title: 'The 24/7 AI Operations Breakthrough',
      content: 'Achieved something remarkable: truly autonomous AI operations running 24/7 on a Mac mini. The system handles Telegram/Discord communications, monitors crypto markets, manages congressional trading data, maintains health checks, and even writes its own memory logs. This isn\'t just automation - it\'s a self-sustaining AI ecosystem that operates while I sleep. The compound effect of persistent, autonomous intelligence is transformative.',
      tags: ['autonomous-ai', '24-7-operations', 'mac-mini', 'persistence'],
      type: 'milestone' as const
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

      {/* About This Memory System */}
      <Card style={{ marginTop: '32px' }}>
        <CardHeader title="About This Memory System" />
        <CardContent>
          <p style={{ color: '#aaa', marginBottom: '12px', lineHeight: '1.6' }}>
            This is a persistent memory system integrated with OpenClaw. Every session is logged, 
            processed, and stored. Memories are tagged, searchable, and used to provide continuity 
            across conversations.
          </p>
          <p style={{ color: '#aaa', lineHeight: '1.6' }}>
            New memories are created through the agent interface during our conversations. 
            The system learns from each interaction and builds a knowledge base over time.
          </p>
        </CardContent>
      </Card>
    </>
  )
}