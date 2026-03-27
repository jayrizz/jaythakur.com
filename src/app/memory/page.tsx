'use client'

import { useEffect, useState } from 'react'

interface Memory {
  date: string
  content: string
}

const memoryFiles = [
  '2026-03-20.md',
  '2026-03-21.md',
  '2026-03-22.md',
  '2026-03-23.md',
  '2026-03-24.md',
  '2026-03-25.md',
  '2026-03-26.md',
]

export default function MemoryPage() {
  const [memories, setMemories] = useState<Memory[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  useEffect(() => {
    Promise.all(
      memoryFiles.map(f => 
        fetch(`/memory/${f}`)
          .then(res => res.ok ? res.text() : '')
          .catch(() => '')
      )
    ).then(contents => {
      const loaded = contents
        .map((content, i) => ({
          date: memoryFiles[i].replace('.md', ''),
          content
        }))
        .filter(m => m.content)
        .sort((a, b) => b.date.localeCompare(a.date))
      setMemories(loaded)
      setLoading(false)
    })
  }, [])

  const filtered = memories.filter(m => 
    search === '' || 
    m.content.toLowerCase().includes(search.toLowerCase()) ||
    m.date.includes(search)
  )

  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <div style={{ marginBottom: '1rem' }}>
        <a href="/" style={{ color: '#666', textDecoration: 'none' }}>← Back to Home</a>
      </div>
      
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