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
- `/salaries` — ISR (revalidate: 3600) — salary data changes daily, full static would go stale
- `/companies/[slug]` — ISR (revalidate: 86400) — company data rarely changes, pre-built via generateStaticParams from real DB at build time
- `/compare` — Client component — user-specific selections, cannot be prebuilt
- `/api/salaries` — Cache-Control: s-maxage=300, stale-while-revalidate=3600 — CDN caches for 5 min, serves stale for 1 hour while revalidating
- `/api/companies/:slug` — Cache-Control: s-maxage=3600, stale-while-revalidate=86400 — company data is stable, cache for 1 hour

### Why page-based pagination over cursor-based
Salary data is filtered and sorted by multiple dimensions (company, level, location, TC). Cursor-based pagination breaks when sort order changes mid-session. Page-based is simpler and correct for this use case where users jump between filter combinations.

### What I would build with another day
- Full-text search with Typesense for better autocomplete
- Interview experiences section
- Workplace Index composite scoring
- More salary records via scraping pipeline
- Sitemap generation for SEO

### What I cut and why
- Auth/login — not required per task spec, kept scope clean
- Community/forum — deprioritized, focused on core data quality first
- Tools calculators — salary table and company pages are higher evaluation weight
- Reviews section — requires moderation layer, cut for time

## API Endpoints

### POST /api/ingest-salary
Validates, normalizes, deduplicates and stores a salary record. Recomputes total_compensation server-side always.

### GET /api/salaries
Filterable by company, role, level, location, currency. Paginated (max 100 per page). Sorted by total_compensation desc by default.

### GET /api/companies/:slug
Returns company metadata, median TC (true statistical median), level distribution, and full salary list.

### GET /api/compare?s1={id}&s2={id}
Returns two salary records with delta object (base_delta, bonus_delta, stock_delta, tc_delta, experience_delta).