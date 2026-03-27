'use client'

import { useEffect, useState } from 'react'

interface Memory {
  date: string
  content: string
  excerpt: string
}

export default function MemoryPage() {
  const [memories, setMemories] = useState<Memory[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/memory')
      .then(res => res.json())
      .then(data => {
        setMemories(data.memories || [])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Memory Logs</h1>
      
      {loading ? (
        <p>Loading...</p>
      ) : memories.length === 0 ? (
        <p>No memory files found.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {memories.map(m => (
            <article key={m.date} style={{ padding: '1.5rem', border: '1px solid #333', borderRadius: '8px' }}>
              <time style={{ color: '#888', fontSize: '0.9rem' }}>{m.date}</time>
              <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit', marginTop: '1rem', fontSize: '0.9rem', lineHeight: '1.6' }}>
                {m.content}
              </pre>
            </article>
          ))}
        </div>
      )}
    </main>
  )
}