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
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('/api/memory')
      .then(res => res.json())
      .then(data => {
        setMemories(data.memories || [])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const filtered = memories.filter(m => 
    search === '' || 
    m.content.toLowerCase().includes(search.toLowerCase()) ||
    m.date.includes(search)
  )

  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Memory Logs</h1>
      
      <input 
        type="text" 
        placeholder="Search memories..." 
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{
          width: '100%',
          padding: '0.75rem',
          fontSize: '1rem',
          marginBottom: '2rem',
          border: '1px solid #333',
          borderRadius: '8px',
          background: '#111',
          color: '#fff'
        }}
      />
      
      {loading ? (
        <p>Loading...</p>
      ) : filtered.length === 0 ? (
        <p>{search ? 'No matches found.' : 'No memory files found.'}</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {filtered.map(m => (
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