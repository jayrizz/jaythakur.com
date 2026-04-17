import PageHeader from '@/components/PageHeader'
import Card, { CardHeader, CardContent, CardActions } from '@/components/Card'
import Link from 'next/link'

export default function HomePage() {
  const buildTimeline = [
    {
      date: 'February 2026',
      title: 'AI Infrastructure Bootstrap',
      description: 'Deployed autonomous AI agent infrastructure on Mac mini. Built OpenClaw gateway with Telegram/Discord integration, persistent memory systems, and 24/7 operational capability.',
      tags: ['OpenClaw', 'Node.js', 'Telegram API', 'Discord API', 'LLM Integration']
    },
    {
      date: 'February 2026',
      title: 'Mission Control Dashboard',
      description: 'Real-time AIOps monitoring with WebSocket streaming. Agent orchestration, process management, automated health checks, and live system telemetry.',
      tags: ['Python', 'WebSocket', 'React', 'FastAPI', 'AgentOps']
    },
    {
      date: 'March 2026',
      title: 'AOC Production API',
      description: 'Enterprise-grade REST API for Agent Operations Center. Async endpoints, SQLAlchemy ORM, PostgreSQL persistence, full Swagger documentation.',
      tags: ['FastAPI', 'SQLAlchemy', 'PostgreSQL', 'Docker', 'Swagger']
    },
    {
      date: 'March 2026',
      title: 'Political Money Intelligence',
      description: 'Autonomous surveillance system for congressional trading. Real-time House/Senate disclosure scraping, ML-powered trade signal detection, Telegram alerts.',
      tags: ['Python', 'BeautifulSoup', 'Telegram Bot', 'ML', 'Cron']
    },
    {
      date: 'March 2026',
      title: 'Polymarket Whale Detection',
      description: 'ML signal engine for prediction market intelligence. Decision tree classifiers, whale movement detection, automated portfolio tracking.',
      tags: ['Python', 'scikit-learn', 'pandas', 'Polymarket API', 'ML']
    },
    {
      date: 'March 2026',
      title: 'Agent Skills Marketplace',
      description: 'Published "sacred-rules" skill to ClawHub. 13 config safety rules, JSON Schema validation, automated backup procedures, security audit capabilities.',
      tags: ['Agent Skills', 'JSON Schema', 'Documentation', 'OpenClaw']
    },
    {
      date: 'March 2026',
      title: 'Quant Trading System',
      description: 'Building autonomous market making system. Python-based quant framework with real-time data ingestion, risk management, and order execution.',
      tags: ['Python', 'NumPy', 'Pandas', 'REST APIs', 'AWS']
    },
    {
      date: 'March 2026',
      title: 'jaythakur.com + Memory System',
      description: 'AI-powered personal website with vector-searchable memory. Built with Next.js, deployed on Vercel, integrated with OpenClaw for dynamic content.',
      tags: ['Next.js', 'Vercel', 'Vector Search', 'OpenClaw', 'Tailwind']
    },
    {
      date: 'April 2026',
      title: 'AI Operations Resilience',
      description: 'Built comprehensive system protection against operational failures. Git-based script protection, automated backup systems, cron job management, and recovery procedures. Multi-layer defense ensuring AI operations never break.',
      tags: ['Git Protection', 'OpenClaw', 'Automation', 'System Hardening', 'DevOps']
    },
    {
      date: 'April 2026',
      title: 'Morning Edition HN Curator',
      description: 'Autonomous daily magazine generator that curates Hacker News for personal taste. Intelligent filtering, editorial design, automated scheduling, and GitHub Pages deployment for daily reading.',
      tags: ['Python', 'HN API', 'Curation', 'GitHub Pages', 'Editorial AI']
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="hero" style={{ paddingBottom: '80px' }}>
        <p className="tagline" style={{ fontSize: '14px', color: '#ff6b35', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '16px' }}>
          AI Operations &amp; Autonomy
        </p>
        <h1 style={{ fontSize: '56px', fontWeight: '700', lineHeight: '1.1', marginBottom: '24px' }}>
          I don&apos;t just use AI.<br />
          <span style={{ background: 'linear-gradient(135deg, #ff6b35 0, #ff8f65 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>I partner with it.</span>
        </h1>
        <p style={{ fontSize: '20px', color: '#aaa', maxWidth: '600px', margin: '0 auto' }}>
          Building autonomous AI agents that ship production systems. Every project here was architected, coded, and operated with AI partners running 24/7.
        </p>
      </section>

      {/* Build Timeline */}
      <section id="timeline" style={{ paddingTop: '40px' }}>
        <h2 className="section-title" style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px', color: '#888', marginBottom: '48px' }}>
          Build Timeline
        </h2>
        
        <div style={{ position: 'relative', paddingLeft: '40px' }}>
          {/* Vertical line */}
          <div style={{ position: 'absolute', left: '7px', top: '0', bottom: '0', width: '2px', background: 'linear-gradient(to bottom, #ff6b35, #1a1a2e)' }} />
          
          {buildTimeline.map((item, index) => (
            <div key={index} style={{ position: 'relative', paddingBottom: '60px' }}>
              {/* Dot */}
              <div style={{ position: 'absolute', left: '-37px', top: '4px', width: '14px', height: '14px', background: '#0a0a0f', border: '3px solid #ff6b35', borderRadius: '50%' }} />
              
              <p style={{ fontSize: '13px', color: '#ff6b35', fontWeight: '500', marginBottom: '8px' }}>
                {item.date}
              </p>
              <h3 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '12px', color: '#fff' }}>
                {item.title}
              </h3>
              <p style={{ color: '#888', marginBottom: '16px' }}>
                {item.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {item.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} style={{ fontSize: '12px', padding: '4px 12px', background: '#12121a', border: '1px solid #1a1a2e', borderRadius: '20px', color: '#888' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ padding: '80px 0', borderTop: '1px solid #1a1a2e' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '24px', color: '#fff' }}>About</h2>
        <div style={{ display: 'grid', gap: '32px' }}>
          <p style={{ color: '#888', lineHeight: '1.8' }}>
            My journey began in 1999 with a double major in Computer Science and Philosophy — a combination that proved prophetic for the AI age. After adding an MBA focused on Entrepreneurship and Finance in 2007, I started my professional career as a software engineer in 2000 for a professional services company.
          </p>
          <p style={{ color: '#888', lineHeight: '1.8' }}>
            Today, with over 26 years of experience, I lead large global teams creating value for clients by reinventing their businesses with agentic technologies. Working for the most sophisticated business technology company on the planet has taught me that lasting partnerships are built on strategic vision, not just tactical execution.
          </p>
          <p style={{ color: '#888', lineHeight: '1.8' }}>
            This site isn&apos;t built with &quot;AI assistance&quot; — it&apos;s built with AI as a true partner. I bring domain expertise and strategic judgment. AI brings tireless execution and systematic consistency. The result: production systems that neither human nor machine could build alone, shipped in hours instead of weeks.
          </p>
          <p style={{ color: '#888', lineHeight: '1.8' }}>
            The projects above aren&apos;t just technical achievements — they&apos;re proof that the future of software development isn&apos;t about choosing between human and machine. It&apos;s about knowing when to lead and when to delegate, when to direct and when to trust the process.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: '80px 0', borderTop: '1px solid #1a1a2e', textAlign: 'center' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '16px', color: '#fff' }}>Let&apos;s Build Something</h2>
        <p style={{ color: '#888', marginBottom: '32px' }}>Need someone who knows how to direct AI to ship real systems?</p>
        <a href="mailto:jaythakur1@gmail.com" style={{ display: 'inline-block', padding: '16px 40px', background: '#ff6b35', color: '#fff', textDecoration: 'none', borderRadius: '8px', fontWeight: '600', boxShadow: '0 4px 20px rgba(255, 107, 53, 0.3)' }}>
          Get In Touch
        </a>
      </section>
    </>
  )
}
