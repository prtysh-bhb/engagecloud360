# EngageCloud360

**Integrate, Engage, Achieve**

An all-in-one customer engagement and marketing automation platform built with Next.js 14 and TypeScript.

## Overview

EngageCloud360 is a comprehensive SaaS platform that combines messaging, media management, cross-platform advertising, and analytics into a unified solution. It helps businesses streamline operations, improve customer engagement, and make data-driven decisions.

## Features

### Core Modules

- **Unified Inbox** - Manage all customer messages from WhatsApp, Email, Instagram, Messenger, etc. in one place
- **Library Management** - Advanced document organization with folder structure, version control, and access management
- **Media Management** - Central repository for all media files with tagging, search, and metadata
- **Message Templates** - Create and manage reusable message templates with dynamic fields
- **Cross-Platform Ads** - Manage ad campaigns across Facebook, Google, and other platforms with A/B testing and budget tracking
- **Social Media Posts** - Schedule and post content across Instagram, Facebook, LinkedIn, and X with content calendar
- **Cloud Phone** - VoIP-based calling with call recording, transcriptions, and CRM integration
- **Visitor Intelligence** - Website tracking and analytics with real-time visitor insights and lead scoring
- **AI Assistant** - Automate tasks, get recommendations, and improve customer engagement with AI
- **Analytics Suite** - Comprehensive dashboards and reports covering all key business metrics

### Additional Features

- Responsive design (mobile, tablet, desktop)
- Modern UI with Tailwind CSS
- Dashboard with key metrics and recent activity
- Settings and profile management
- Pricing page with multiple tiers
- Authentication pages (Login/Signup)

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd engagecloud360
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
engagecloud360/
├── app/
│   ├── (dashboard)/          # Protected dashboard routes
│   │   ├── dashboard/        # Main dashboard
│   │   ├── inbox/            # Message inbox
│   │   ├── library/          # Document library
│   │   ├── media/            # Media management
│   │   ├── templates/        # Message templates
│   │   ├── ads/              # Ad campaigns
│   │   ├── posts/            # Social media posts
│   │   ├── phone/            # Cloud phone
│   │   ├── visitors/         # Visitor intelligence
│   │   ├── ai-assistant/     # AI assistant
│   │   ├── analytics/        # Analytics suite
│   │   └── settings/         # Settings
│   ├── login/                # Login page
│   ├── signup/               # Signup page
│   ├── pricing/              # Pricing page
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Landing page
│   └── globals.css           # Global styles
├── components/               # Reusable components
│   ├── Sidebar.tsx           # Navigation sidebar
│   ├── Header.tsx            # Top header
│   └── StatCard.tsx          # Statistics card
├── public/                   # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## Available Pages

### Public Pages
- `/` - Landing page
- `/login` - User login
- `/signup` - User registration
- `/pricing` - Pricing plans

### Dashboard Pages
- `/dashboard` - Main dashboard with overview
- `/inbox` - Unified message inbox
- `/library` - Document library
- `/media` - Media management
- `/templates` - Message templates
- `/ads` - Ad campaign management
- `/posts` - Social media scheduling
- `/phone` - Cloud phone system
- `/visitors` - Visitor intelligence
- `/ai-assistant` - AI assistant
- `/analytics` - Analytics suite
- `/settings` - Account settings

## Development

### Build for Production

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Target Audience

- Small to medium-sized businesses
- Marketing teams
- Customer service departments
- Sales organizations
- Businesses managing multiple communication channels

## Key Benefits

- 60% faster response time
- Centralized communication across all channels
- Data-driven decision making
- Streamlined operations
- Scalable for teams of all sizes

## License

Private - All rights reserved

## Support

For support, please contact support@engagecloud360.com
