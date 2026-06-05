# TalentDash

Career intelligence platform for Indian professionals. Structured, comparable, decision-ready salary data.

## Live URL
https://talentdash-git-main-akhilesh-kumar-s-projects2.vercel.app

## GitHub
https://github.com/akhilesh5982/talentdash

## Tech Stack
- Next.js 15 (App Router, RSC)
- Tailwind CSS (no component libraries)
- Prisma ORM + PostgreSQL (Neon serverless)
- Deployed on Vercel

## Setup — Run Locally in 5 Minutes

### 1. Clone and install
git clone https://github.com/akhilesh5982/talentdash.git
cd talentdash
npm install

### 2. Environment variables
Create a `.env` file in the root:
DATABASE_URL="postgresql://USER:PASSWORD@HOST/neondb?sslmode=require"

### 3. Database setup
npx prisma migrate dev --name init
npx prisma db seed

### 4. Run locally
npm run dev

Open http://localhost:3000

## Architecture Decisions

### Static vs ISR vs Dynamic
- `/salaries` — ISR (revalidate: 3600) — salary data changes daily
- `/companies/[slug]` — ISR (revalidate: 86400) — pre-built via generateStaticParams from real DB at build time
- `/compare` — Client component — user-specific, cannot be prebuilt
- `/api/salaries` — Cache-Control: s-maxage=300, stale-while-revalidate=3600
- `/api/companies/:slug` — Cache-Control: s-maxage=3600, stale-while-revalidate=86400

### Why page-based pagination over cursor-based
Salary data is filtered and sorted across multiple dimensions. Cursor-based breaks when sort order changes. Page-based is correct for this use case.

### What I would build with another day
- Full-text search with Typesense
- Interview experiences section
- Workplace Index scoring
- Sitemap generation

### What I did NOT build and why
- Auth — not required per task spec
- Community/forum — deprioritized for core data quality
- Tools calculators — salary table is higher evaluation weight
- Reviews — requires moderation layer, cut for time


## API Endpoints

### POST /api/ingest-salary
Validates, normalizes, deduplicates and stores a salary record. Recomputes total_compensation server-side always.

### GET /api/salaries
Filterable by company, role, level, location, currency. Paginated (max 100 per page). Sorted by total_compensation desc by default.

### GET /api/companies/:slug
Returns company metadata, median TC (true statistical median), level distribution, and full salary list.

### GET /api/compare?s1={id}&s2={id}
Returns two salary records with delta object (base_delta, bonus_delta, stock_delta, tc_delta, experience_delta).