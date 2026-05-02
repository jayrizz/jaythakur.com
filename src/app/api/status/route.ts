import { NextResponse } from 'next/server'

export const dynamic = 'force-static'

export async function GET() {
  const statusData = {
    lastUpdated: "2026-05-02T12:33:00Z",
    focus: [
      { name: "Claude CLI Auth", status: "active", desc: "Switch to Pro subscription" },
      { name: "Tax Filing", status: "active", desc: "$127K crypto amendment" },
      { name: "Water Heater", status: "in_progress", desc: "Rinnai quotes $2,500-2,900" },
      { name: "System Health", status: "in_progress", desc: "GCal + Discord broken" }
    ],
    goals: [
      { name: "Quit Vaping", status: "active" },
      { name: "Start Exercising", status: "in_progress" },
      { name: "Meditate", status: "in_progress" },
      { name: "Exec Presence", status: "exploring" }
    ],
    projects: [
      { name: "Job Search Ops", status: "active" },
      { name: "LLM Wiki", status: "active" },
      { name: "Morning Edition", status: "active" },
      { name: "Crypto Audit", status: "complete" },
      { name: "Voice Assistant", status: "paused" }
    ],
    cars: [
      { car: "VW ID.4 '22", price: 21837, miles: 13000, type: "SUV", permo: 383 },
      { car: "Jaguar E-Pace '20", price: 22998, miles: 53000, type: "SUV", permo: 380 },
      { car: "Kia K4 '25", price: 23998, miles: 3000, type: "Sedan", permo: 397 }
    ]
  }
  
  return NextResponse.json(statusData, {
    headers: {
      'Cache-Control': 'public, max-age=3600',
    }
  })
}