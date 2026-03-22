'use client'

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
              <li><a href="#timeline">Timeline</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
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
            I don't just use AI.<br />
            <span>I partner with it.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Building production systems with AI. Every project here was architected, coded, and shipped with AI collaborators.
          </motion.p>
        </div>
      </section>

      <section id="timeline" className="timeline">
        <div className="container">
          <h2 className="section-title">Build Timeline</h2>
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
              18 years in software consulting taught me one thing: the best tool is the one that gets the job done. 
              In 2026, that tool is AI.
            </p>
            <p>
              This site isn't built with "AI assistance" — it's built with AI as a partner. I direct, 
              AI executes. I validate, AI iterates. The result: production systems that would have taken 
              weeks now ship in hours.
            </p>
            <p>
              The timeline above isn't just projects — it's proof that the future of software development 
              isn't about choosing between human and machine. It's about knowing when to lead and when to delegate.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2>Let's Build Something</h2>
          <p>Need someone who knows how to direct AI to ship real systems?</p>
          <a href="mailto:jaythakur1@gmail.com" className="contact-button">
            Get In Touch
          </a>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>© 2026 Jay Thakur. Built with AI partners.</p>
        </div>
      </footer>
    </main>
  )
}
