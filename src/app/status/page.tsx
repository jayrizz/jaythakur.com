export const dynamic = 'force-static';

export async function generateStaticParams() {
  return [];
}

export default function StatusPage() {
  return (
    <div className="dashboard">
      <style dangerouslySetInnerHTML={{__html: `
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: #111;
            min-height: 100vh;
            color: #e5e5e5;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 40px 20px;
        }
        
        header {
            text-align: center;
            padding: 60px 0;
            border-bottom: 4px solid #E11D48;
            margin-bottom: 40px;
        }
        
        header h1 {
            font-size: clamp(36px, 8vw, 72px);
            font-weight: 900;
            letter-spacing: -1px;
            margin-bottom: 16px;
            color: #fff;
        }
        
        header .subtitle {
            font-size: 18px;
            opacity: 0.6;
        }
        
        header .updated {
            font-size: 14px;
            opacity: 0.4;
            margin-top: 20px;
            font-style: italic;
        }
        
        .section {
            margin-bottom: 48px;
        }
        
        .section-title {
            font-size: 28px;
            font-weight: 700;
            margin-bottom: 24px;
            display: flex;
            align-items: center;
            gap: 12px;
        }
        
        .section-title::before {
            content: '';
            width: 4px;
            height: 28px;
            background: #E11D48;
            border-radius: 2px;
        }
        
        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
            gap: 20px;
        }
        
        .card {
            background: #1a1a1a;
            border: 1px solid #262626;
            border-radius: 12px;
            padding: 24px;
        }
        
        .card-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 12px;
        }
        
        .card h3 {
            font-size: 18px;
            font-weight: 600;
            color: #fff;
        }
        
        .badge {
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            padding: 4px 10px;
            border-radius: 20px;
        }
        
        .badge-active { background: rgba(59, 130, 246, 0.15); color: #3b82f6; border: 1px solid rgba(59, 130, 246, 0.3); }
        .badge-complete { background: rgba(34, 197, 94, 0.15); color: #22c55e; border: 1px solid rgba(34, 197, 94, 0.3); }
        .badge-progress { background: rgba(168, 85, 247, 0.15); color: #a855f7; border: 1px solid rgba(168, 85, 247, 0.3); }
        .badge-blocked { background: rgba(239, 68, 68, 0.15); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.3); }
        .badge-paused { background: rgba(234, 179, 8, 0.15); color: #eab308; border: 1px solid rgba(234, 179, 8, 0.3); }
        .badge-exploring { background: rgba(156, 163, 175, 0.15); color: #9ca3af; border: 1px solid rgba(156, 163, 175, 0.3); }
        
        .card p {
            font-size: 14px;
            line-height: 1.5;
            opacity: 0.7;
            margin-bottom: 12px;
        }
        
        .tags {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        
        .tag {
            font-size: 11px;
            padding: 4px 8px;
            background: #262626;
            border-radius: 4px;
            opacity: 0.8;
        }
        
        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 14px;
        }
        
        th { text-align: left; padding: 12px 16px; background: #1a1a1a; font-weight: 600; text-transform: uppercase; font-size: 11px; color: #737373; border-bottom: 1px solid #262626; }
        td { padding: 16px; border-bottom: 1px solid #262626; }
        
        .price { font-weight: 700; color: #22c55e; }
      `}} />
      
      <header>
        <h1>Status Dashboard</h1>
        <p className="subtitle">Projects, Goals & Current Focus</p>
        <p className="updated">Last updated: May 2, 2026 at 7:33 AM CDT</p>
      </header>

      <div className="container">
        {/* Current Focus */}
        <div className="section">
          <h2 className="section-title">Current Focus</h2>
          <div className="grid">
            <div className="card">
              <div className="card-header">
                <h3>Claude CLI Auth</h3>
                <span className="badge badge-active">Active</span>
              </div>
              <p>Switch OpenClaw from API token to Pro subscription. Scheduled for 7 PM today.</p>
              <div className="tags">
                <span className="tag">OpenClaw</span>
                <span className="tag">Priority</span>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h3>Tax Filing</h3>
                <span className="badge badge-active">Active</span>
              </div>
              <p>Send $127K crypto tax amendment package to CPA. Documents mostly gathered.</p>
              <div className="tags">
                <span className="tag">Finance</span>
                <span className="tag">$127K</span>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h3>Water Heater</h3>
                <span className="badge badge-progress">In Progress</span>
              </div>
              <p>Get quotes for Rinnai tankless installation. Target: $2,500-2,900 for 2-3 quotes.</p>
              <div className="tags">
                <span className="tag">Home</span>
                <span className="tag">HVAC</span>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h3>System Health</h3>
                <span className="badge badge-progress">In Progress</span>
              </div>
              <p>GCal auth expired, Discord integration broken. Both need remediation.</p>
              <div className="tags">
                <span className="tag">Infrastructure</span>
                <span className="tag">OpenClaw</span>
              </div>
            </div>
          </div>
        </div>

        {/* HIGH PRIORITY GOALS */}
        <div className="section">
          <h2 className="section-title">HIGH PRIORITY Goals (May 2026)</h2>
          <div className="grid">
            <div className="card">
              <div className="card-header">
                <h3>Quit Vaping</h3>
                <span className="badge badge-active">Active</span>
              </div>
              <p>Health-first priority. Currently working on this.</p>
              <div className="tags">
                <span className="tag">Health</span>
                <span className="tag">Priority #1</span>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h3>Start Exercising</h3>
                <span className="badge badge-progress">In Progress</span>
              </div>
              <p>Establish regular exercise routine. Currently inconsistent.</p>
              <div className="tags">
                <span className="tag">Health</span>
                <span className="tag">Fitness</span>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h3>Meditate Regularly</h3>
                <span className="badge badge-progress">In Progress</span>
              </div>
              <p>Build mental discipline through consistent meditation practice.</p>
              <div className="tags">
                <span className="tag">Mental</span>
                <span className="tag">Discipline</span>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h3>Executive Presence</h3>
                <span className="badge badge-exploring">Exploring</span>
              </div>
              <p>Work on public speaking and executive presence for career development.</p>
              <div className="tags">
                <span className="tag">Career</span>
                <span className="tag">Skills</span>
              </div>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="section">
          <h2 className="section-title">Projects</h2>
          <div className="grid">
            <div className="card">
              <div className="card-header">
                <h3>Job Search Ops</h3>
                <span className="badge badge-active">Active</span>
              </div>
              <p>Active job search operation. LinkedIn profile optimization in development.</p>
              <div className="tags"><span className="tag">Career</span></div>
            </div>
            <div className="card">
              <div className="card-header">
                <h3>LinkedIn Profile Optimizer</h3>
                <span className="badge badge-progress">In Progress</span>
              </div>
              <p>Tool to optimize LinkedIn profiles for job search. In development.</p>
              <div className="tags"><span className="tag">Career</span><span className="tag">AI</span></div>
            </div>
            <div className="card">
              <div className="card-header">
                <h3>LLM Wiki</h3>
                <span className="badge badge-active">Active</span>
              </div>
              <p>Knowledge base project for LLM research and notes.</p>
              <div className="tags"><span className="tag">Knowledge</span></div>
            </div>
            <div className="card">
              <div className="card-header">
                <h3>Crypto Tax Audit</h3>
                <span className="badge badge-complete">Complete</span>
              </div>
              <p>Massive crypto tax audit completed. Recovered $127K in documented refunds.</p>
              <div className="tags"><span className="tag">Finance</span><span className="tag">$127K</span></div>
            </div>
            <div className="card">
              <div className="card-header">
                <h3>Morning Edition</h3>
                <span className="badge badge-active">Active</span>
              </div>
              <p>HN curation system. Generating daily magazines automatically.</p>
              <div className="tags"><span className="tag">Automation</span></div>
            </div>
            <div className="card">
              <div className="card-header">
                <h3>Voice Assistant</h3>
                <span className="badge badge-paused">Paused</span>
              </div>
              <p>Personal AI voice assistant project. On hold.</p>
              <div className="tags"><span className="tag">AI</span></div>
            </div>
            <div className="card">
              <div className="card-header">
                <h3>Calendar Integration</h3>
                <span className="badge badge-blocked">Blocked</span>
              </div>
              <p>Calendar sync with OpenClaw. GCal auth expired.</p>
              <div className="tags"><span className="tag">Integration</span></div>
            </div>
            <div className="card">
              <div className="card-header">
                <h3>Unified Messaging</h3>
                <span className="badge badge-paused">Paused</span>
              </div>
              <p>Consolidate messaging platforms. Discord integration broken.</p>
              <div className="tags"><span className="tag">Messaging</span></div>
            </div>
          </div>
        </div>

        {/* Car Research */}
        <div className="section">
          <h2 className="section-title">Car Research (Complete)</h2>
          <table>
            <thead>
              <tr>
                <th>Car</th>
                <th>Price</th>
                <th>Miles</th>
                <th>Type</th>
                <th>$/mo</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>VW ID.4 (2022)</td><td className="price">$21,837</td><td>13K</td><td>SUV</td><td>$383</td><td>Local (Hazelwood, MO), best EV deal</td></tr>
              <tr><td>Jaguar E-Pace (2020)</td><td className="price">$22,998</td><td>53K</td><td>SUV</td><td>$380</td><td>AWD, used</td></tr>
              <tr><td>Kia K4 EX (2025)</td><td className="price">$23,998</td><td>3K</td><td>Sedan</td><td>$397</td><td>Newest, low miles, kids' first car</td></tr>
              <tr><td>Volvo S60 (2024)</td><td className="price">$23,998</td><td>59K</td><td>Sedan</td><td>$352</td><td>Cheapest monthly</td></tr>
              <tr><td>Volvo C40 EV (2023)</td><td className="price">$27,590</td><td>46K</td><td>SUV</td><td>$493</td><td>Premium EV</td></tr>
            </tbody>
          </table>
        </div>

        {/* Business Plans */}
        <div className="section">
          <h2 className="section-title">Business Ideas</h2>
          <div className="grid">
            <div className="card">
              <div className="card-header">
                <h3>Voting Tool MVP</h3>
                <span className="badge badge-exploring">Exploring</span>
              </div>
              <p>Minimum viable product for voting access and information.</p>
            </div>
            <div className="card">
              <div className="card-header">
                <h3>Supply Chain AI Agents</h3>
                <span className="badge badge-exploring">Exploring</span>
              </div>
              <p>AI agents for supply chain optimization.</p>
            </div>
            <div className="card">
              <div className="card-header">
                <h3>Political Stock Tracker</h3>
                <span className="badge badge-exploring">Exploring</span>
              </div>
              <p>Track political events' impact on stock prices.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}