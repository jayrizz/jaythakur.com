'use client'
// Booking form for jaythakur.com — Phase 1 hotfixes
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function BookPage() {
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
              <li><a href="/#work">Work</a></li>
              <li><a href="/#lab">Lab</a></li>
              <li><a href="/#about">About</a></li>
              <li><a href="/#contact">Contact</a></li>
              <li><a href="https://www.linkedin.com/in/jaydthakur" target="_blank" rel="noopener noreferrer me" aria-label="LinkedIn">Li</a></li>
              <li><a href="https://github.com/jayrizz" target="_blank" rel="noopener noreferrer me" aria-label="GitHub">Gh</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="book">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="book-header"
          >
            <p className="eyebrow">Book a Call</p>
            <h1>Book a 20-min intro</h1>
            <p className="book-subhead">
              Tell me about your project. I read every submission and respond within 24 hours.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="book-form"
            action="https://formspree.io/f/xayzknqd"
            method="POST"
          >
            <input type="hidden" name="_subject" value="New jaythakur.com booking inquiry" />
            <input type="text" name="_gotcha" style={{ display: 'none' }} />

            <div className="form-row">
              <label className="form-label" htmlFor="name">Name *</label>
              <input className="form-input" id="name" name="name" type="text" required placeholder="Your name" />
            </div>

            <div className="form-row">
              <label className="form-label" htmlFor="email">Email *</label>
              <input className="form-input" id="email" name="email" type="email" required placeholder="you@company.com" />
            </div>

            <div className="form-row">
              <label className="form-label" htmlFor="company">Company</label>
              <input className="form-input" id="company" name="company" type="text" placeholder="Optional" />
            </div>

            <div className="form-row">
              <label className="form-label" htmlFor="project_type">Project type</label>
              <select className="form-input form-select" id="project_type" name="project_type" defaultValue="">
                <option value="" disabled>Select a project type…</option>
                <option value="AI Readiness Sprint">AI Readiness Sprint</option>
                <option value="Production Pilot">Production Pilot</option>
                <option value="Fractional AI Leadership">Fractional AI Leadership</option>
                <option value="Not sure yet">Not sure yet</option>
              </select>
            </div>

            <div className="form-row">
              <label className="form-label" htmlFor="description">Project description</label>
              <textarea
                className="form-input form-textarea"
                id="description"
                name="description"
                rows={5}
                placeholder="What's the problem you're trying to solve? Any constraints, timelines, or context that helps me prep."
              />
            </div>

            <button type="submit" className="contact-button">
              Send to Jay
            </button>

            <p className="form-alt">
              or <a href="mailto:jaythakur1@gmail.com">email jaythakur1@gmail.com</a>
            </p>
          </motion.form>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-content">
            <p>© 2026 Jay Thakur. Built with AI partners.</p>
            <ul className="footer-links">
              <li><a href="/">← Back to home</a></li>
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
