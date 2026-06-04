# TalentDash

Career intelligence platform for Indian professionals. Structured, comparable, decision-ready salary data.

## Live URL
https://your-vercel-url.vercel.app

## Tech Stack
- Next.js 15 (App Router)
- Tailwind CSS
- Prisma + PostgreSQL (Neon)
- Deployed on Vercel

## Setup

### 1. Clone and install
git clone https://github.com/akhilesh5982/talentdash.git
cd talentdash
npm install

### 2. Environment variables
Create a `.env` file:
DATABASE_URL="postgresql://..."

### 3. Database setup
npx prisma migrate dev --name init
npx prisma db seed

### 4. Run locally
npm run dev

Open http://localhost:3000

## Architecture Decisions

### Static vs ISR vs Dynamic
- `/salaries` — ISR (revalidate: 3600) — changes daily with new records
- `/companies/[slug]` — Static with generateStaticParams — rarely changes, pre-built at deploy
- `/compare` — Client component — user-specific, cannot be prebuilt
- `/api/*` — Dynamic — real-time data with Cache-Control headers

### Pagination
Page-based over cursor-based because salary data is non-sequential and users need to jump to specific pages by filter context.

### What I would build with more time
- Full-text search with Typesense
- Interview experiences section
- Workplace Index scoring
- More salary records via scraping pipeline

### What I cut and why
- Auth/login — not required per task spec
- Community/forum — deprioritized for core salary data quality
- Tools calculators — focused on data integrity first