import { prisma } from '@/lib/db'
import SalaryTable from '@/components/features/SalaryTable'
import { Metadata } from 'next'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Software Engineer Salaries in India | TalentDash',
  description: 'Browse verified salary data for software engineers, product managers, and data analysts across top Indian and global companies.',
  openGraph: {
    title: 'Software Engineer Salaries in India | TalentDash',
    description: 'Browse verified salary data across top companies.',
    url: 'https://talentdash.in/salaries',
  },
}

async function getSalaries() {
  const salaries = await prisma.salary.findMany({
    include: { company: true },
    orderBy: { total_compensation: 'desc' },
  })
  return salaries.map(s => ({
    id: s.id,
    company_id: s.company_id,
    role: s.role,
    level: s.level,
    location: s.location,
    currency: s.currency,
    experience_years: s.experience_years,
    base_salary: s.base_salary.toString(),
    bonus: s.bonus.toString(),
    stock: s.stock.toString(),
    total_compensation: s.total_compensation.toString(),
    source: s.source,
    confidence_score: Number(s.confidence_score),
    is_verified: s.is_verified,
    submitted_at: s.submitted_at.toISOString(),
    company: {
      id: s.company.id,
      name: s.company.name,
      slug: s.company.slug,
      normalized_name: s.company.normalized_name,
      industry: s.company.industry,
      headquarters: s.company.headquarters,
      founded_year: s.company.founded_year,
      headcount_range: s.company.headcount_range,
      created_at: s.company.created_at.toISOString(),
      updated_at: s.company.updated_at.toISOString(),
    }
  }))
}

export default async function SalariesPage() {
  const salaries = await getSalaries()
  return (
    <main className="min-h-screen bg-[#F7F7F7]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Dataset',
            name: 'Software Engineer Salaries in India',
            description: 'Verified salary data for software engineers across top Indian and global companies',
            url: 'https://talentdash.in/salaries',
            creator: { '@type': 'Organization', name: 'TalentDash' },
          })
        }}
      />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-[#222222] mb-2">
          Salary Explorer
        </h1>
        <p className="text-[#717171] mb-6">
          {salaries.length} verified salary records across top companies
        </p>
        <SalaryTable initialData={salaries} />
      </div>
    </main>
  )
}