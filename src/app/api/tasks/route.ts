import { NextResponse } from 'next/server'
import Database from 'better-sqlite3'

const db = new Database('/Users/admin/.openclaw/tasks/runs.sqlite')

export async function GET() {
  try {
    const tasks = db.prepare(`
      SELECT 
        task_id,
        agent_id,
        label,
        status,
        task,
        created_at,
        started_at,
        ended_at,
        error,
        terminal_outcome
      FROM task_runs 
      ORDER BY created_at DESC 
      LIMIT 20
    `).all() as { task_id: string; agent_id: string; label: string; status: string; task: string; created_at: string; started_at: string; ended_at: string; error: string; terminal_outcome: string }[]

    const stats = db.prepare(`
      SELECT 
        status,
        COUNT(*) as count
      FROM task_runs 
      GROUP BY status
    `).all() as { status: string; count: number }[]

    return NextResponse.json({
      tasks: tasks.map(t => ({
        id: t.task_id,
        agent: t.agent_id,
        label: t.label,
        status: t.status,
        task: t.task?.substring(0, 100) + (t.task?.length > 100 ? '...' : ''),
        createdAt: t.created_at,
        startedAt: t.started_at,
        endedAt: t.ended_at,
        error: t.error,
        outcome: t.terminal_outcome
      })),
      stats: stats.reduce((acc, s) => {
        acc[s.status] = s.count
        return acc
      }, {} as Record<string, number>)
    })
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}