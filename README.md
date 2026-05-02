# jaythakur.com

Personal portfolio site showcasing AI-powered projects and tools. Built with Next.js App Router and designed for continuous expansion.

## Features

- **Scalable Architecture**: Modular components and shared utilities
- **API Proxy Routing**: Seamless integration with local services
- **Real-time Monitoring**: System health and service status tracking
- **Dynamic Content**: Project portfolios and memory system
- **Responsive Design**: Works on all devices
- **TypeScript**: Full type safety and excellent DX

## Architecture

### Pages
- **Home** (`/`) - Portfolio overview and quick stats
- **Memory** (`/memory`) - Learning journal and insights
- **Mission Control** (`/mission-control`) - System monitoring dashboard
- **Projects** (`/projects`) - Project showcase with categories
- **Apps** (`/apps`) - Tool launcher and service status

### API Routes
- `/api/health-check` - Service health monitoring
- `/api/aoc` - Proxy to AOC Dashboard (port 18800)
- `/api/quant` - Proxy to Quant Dashboard (port 5173)  
- `/api/openclaw` - Proxy to OpenClaw Gateway (port 3000)

### Components
- `Navigation` - Shared header with dropdown menus
- `Card` - Reusable card component with headers/actions
- `PageHeader` - Consistent page titles and breadcrumbs

### Utilities
- Type definitions for projects, apps, memories
- Date formatting and service health checking
- Responsive grid layouts and status indicators

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3001
```

## Local Services

The site integrates with these local services:

- **OpenClaw Gateway** (port 3000) - AI assistant control panel
- **Quant Dashboard** (port 5173) - Financial data visualization  
- **AOC Dashboard** (port 18800) - Advent of Code progress

Each service has a proxy route that handles offline gracefully with informative fallback pages.

## Deployment

Built for flexible deployment options:

```bash
# Build for production
npm run build

# Start production server
npm start
```

The site uses Next.js standalone output for easy containerization and deployment.

## Adding New Features

### New Pages
1. Create page in `src/app/[page-name]/page.tsx`
2. Add navigation link in `Navigation.tsx`
3. Use shared `PageHeader` and `Card` components

### New API Routes
1. Create route in `src/app/api/[route]/route.ts`
2. Add health check support if needed
3. Include informative offline fallbacks

### New Apps/Tools
1. Add entry to apps list in `/apps/page.tsx`
2. Create proxy route if local service
3. Update Mission Control monitoring

### New Project Types
1. Extend `Project` type in `src/types/index.ts`
2. Add to projects data in `/projects/page.tsx`  
3. Create detail page in `/projects/[id]/page.tsx`

## Philosophy

This site embodies the vision of human-AI collaboration:

- **Transparency**: Open about AI involvement in creation
- **Reliability**: Graceful handling of service failures
- **Scalability**: Architecture supports continuous growth
- **Quality**: Production-ready code with proper error handling
- **Learning**: Memory system captures insights over time

Every component is designed to be extended. Every API route handles failures gracefully. Every page tells part of the story of building with AI partners.

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: CSS Modules with custom properties
- **Deployment**: Vercel / Docker / Static Export
- **Monitoring**: Custom health check system
- **Integration**: Proxy routes for local services

Built with ❤️ and 🤖 by Jay Thakur# Trigger redeploy
Sat May  2 07:40:42 CDT 2026
