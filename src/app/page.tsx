'use client'
// v3 - orange theme restored June 2026
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const timelineData = [
  {
    date: 'February 2026',
    title: 'System Bootstrap',
    description: 'Built AI infrastructure on Mac mini. OpenClaw gateway, Telegram + Discord integration, memory systems.',
    tech: ['OpenClaw', 'Node.js', 'Telegram API', 'Discord API']
  },
  {
    date: 'February 2026',
    title: 'Mission Control Dashboard',
    description: 'Real-time system monitoring with AOC integration. WebSocket streaming, process management, health checks.',
    tech: ['Python', 'WebSocket', 'React', 'FastAPI']
  },
  {
    date: 'March 2026',
    title: 'AOC API',
    description: 'Production REST API for Agent Ops Center. SQLAlchemy ORM, async endpoints, Swagger documentation.',
    tech: ['FastAPI', 'SQLAlchemy', 'PostgreSQL', 'Docker']
  },
  {
    date: 'March 2026',
    title: 'Political Money Tracker',
    description: 'Live congressional trade alerts via Telegram. Scrapes House/Senate disclosures, notifies on trades.',
    tech: ['Python', 'BeautifulSoup', 'Telegram Bot', 'Cron']
  },
  {
    date: 'March 2026',
    title: 'Whale Intelligence',
    description: 'ML signal system for Polymarket. Decision tree classifiers, whale detection, portfolio tracking.',
    tech: ['Python', 'scikit-learn', 'pandas', 'Polymarket API']
  },
  {
    date: 'March 2026',
    title: 'OpenCLAW Skill Published',
    description: 'Released "sacred-rules" skill on ClawHub. 13 config safety rules, validation scripts, backup procedures.',
    tech: ['Agent Skills', 'JSON Schema', 'Documentation']
  }
]

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <main>
      <header>
        <div className="container">
          <nav>
            <a href="/" className="logo">jay<span>thakur</span>.com</a>
            <ul className="nav-links">
              <li><a href="#work">Work</a></li>
              <li><a href="#lab">Lab</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="https://www.linkedin.com/in/jaydthakur" target="_blank" rel="noopener noreferrer me" aria-label="LinkedIn">Li</a></li>
              <li><a href="https://github.com/jayrizz" target="_blank" rel="noopener noreferrer me" aria-label="GitHub">Gh</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <p className="tagline">Human + AI Partnership</p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Strategic AI Consultant<br />
            <span>for the Biggest Brands on the Planet</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            25+ years in enterprise systems. AI/ML partner at Accenture. I direct, AI executes — production systems ship in days, not quarters.
          </motion.p>
        </div>
      </section>

      <section id="work" className="work">
        <div className="container">
          <p className="eyebrow">Enterprise Work</p>
          <h2 className="section-title">Fortune 500 Engagements</h2>
          <p className="section-subtitle">25+ years delivering AI/ML at Accenture for clients across industries. Anonymized highlights below — full references on request.</p>
          <div className="case-studies">
            <article className="case-study">
              <p className="case-meta">Global Consumer Goods</p>
              <h3 className="case-title">Supply-chain agent pilot, 6-week scope shipped in 9 days</h3>
              <p className="case-description">Built a multi-agent orchestration layer for retail forecasting. Replaced a 6-week vendor estimate with a 9-day shipped pilot that integrated with the client's existing SAP and Snowflake stack.</p>
              <p className="case-metric">9 days · production-ready · SAP + Snowflake integrated</p>
            </article>
            <article className="case-study">
              <p className="case-meta">Major US Bank</p>
              <h3 className="case-title">LLM evaluation framework for compliance-grade outputs</h3>
              <p className="case-description">Designed and shipped a risk-tiered LLM evaluation harness for an internal generative AI tool. Reduced false-positive compliance flags by 60% in the first 30 days post-launch.</p>
              <p className="case-metric">60% reduction in false-positive flags · 30 days</p>
            </article>
            <article className="case-study">
              <p className="case-meta">Healthcare Payer</p>
              <h3 className="case-title">Claims adjudication agent with human-in-the-loop review</h3>
              <p className="case-description">Production agent that triaged 40% of claims auto-adjudication without human review. Two-week scope, shipped with audit trail and rollback paths the client asked us to add.</p>
              <p className="case-metric">40% auto-adjudication · HIPAA-compliant · 2 weeks</p>
            </article>
          </div>
          <p className="case-note">References and full case details available under NDA — <a href="mailto:jaythakur1@gmail.com">request via email</a>.</p>
        </div>
      </section>

      <section id="lab" className="lab">
        <div className="container">
          <p className="eyebrow">Live Lab</p>
          <h2 className="section-title">What I'm Building Right Now</h2>
          <p className="section-subtitle">Recent AI builds from my own infrastructure. Not client work — these are how I stay sharp on the tools I ship to Fortune 500 teams.</p>
          <div className="timeline-items">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, x: -20 }}
                animate={mounted ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <p className="timeline-date">{item.date}</p>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-description">{item.description}</p>
                <div className="tech-tags">
                  {item.tech.map((t, i) => (
                    <span key={i} className="tech-tag">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <h2>About</h2>
          <div className="about-content">
            <p>
              25+ years in enterprise software, 18 of those delivering AI/ML engagements at Accenture for Fortune 500 clients. The best tool is the one that gets the job done.
              As an <strong>AI Consultant</strong>, I bring partner-track delivery experience to help your team ship production AI systems — not slideware.
            </p>
            <p>
              This site isn't built with "AI assistance" — it's built with AI as a partner. I direct,
              AI executes. I validate, AI iterates. The result: production systems that would have taken
              quarters now ship in days.
            </p>
            <p>
              The timeline below isn't just projects — it's proof that the future of software development
              isn't about choosing between human and machine. It's about knowing when to lead and when to delegate.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2>Let's Build Something</h2>
          <p>Need someone who knows how to direct AI to ship real systems?</p>
          <a href="/book" className="contact-button">
            Book a 20-min intro
          </a>
          <p className="contact-alt">
            or <a href="mailto:jaythakur1@gmail.com">email jaythakur1@gmail.com</a>
          </p>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-content">
            <p>© 2026 Jay Thakur. Built with AI partners.</p>
            <ul className="footer-links">
              <li><a href="mailto:jaythakur1@gmail.com">jaythakur1@gmail.com</a></li>
              <li><a href="https://www.linkedin.com/in/jaydthakur" target="_blank" rel="noopener noreferrer me" aria-label="LinkedIn">LinkedIn</a></li>
              <li><a href="https://github.com/jayrizz" target="_blank" rel="noopener noreferrer me" aria-label="GitHub">GitHub</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  )
}