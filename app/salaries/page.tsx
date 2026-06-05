import { prisma } from '@/lib/db'
import SalaryTable from '@/components/features/SalaryTable'
import { Metadata } from 'next'

export const revalidate = 3600

const BASE_URL = 'https://talentdash-bay.vercel.app'

export const metadata: Metadata = {
  title: 'Software Engineer Salaries in India | TalentDash',
  description: 'Browse verified salary data for software engineers, product managers, and data analysts across top Indian and global companies.',
  alternates: {
    canonical: `${BASE_URL}/salaries`,
  },
  openGraph: {
    title: 'Software Engineer Salaries in India | TalentDash',
    description: 'Browse verified salary data across top companies.',
    url: `${BASE_URL}/salaries`,
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

  const companies = new Set(salaries.map(s => s.company.name)).size
  const roles = new Set(salaries.map(s => s.role)).size
  const locations = new Set(salaries.map(s => s.location)).size

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
            url: `${BASE_URL}/salaries`,
            creator: { '@type': 'Organization', name: 'TalentDash' },
          })
        }}
      />

      {/* Page header */}
      <div className="bg-white border-b border-[#EBEBEB]">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <p className="text-xs font-semibold text-[#FF5A5F] uppercase tracking-widest mb-1">Compensation Data</p>
              <h1 className="text-[32px] font-bold text-[#222222] leading-tight">
                Salary Explorer
              </h1>
              <p className="text-[#717171] mt-1 text-sm">
                Structured, level-tagged compensation data from top Indian and global companies.
              </p>
            </div>

            {/* Quick stats */}
            <div className="flex gap-6">
              {[
                { label: 'Records', value: salaries.length },
                { label: 'Companies', value: companies },
                { label: 'Roles', value: roles },
                { label: 'Cities', value: locations },
              ].map(s => (
                <div key={s.label} className="text-center">
                  <p className="text-xl font-bold text-[#222222]">{s.value}</p>
                  <p className="text-xs text-[#717171] font-medium">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Breadcrumb */}
          <div className="mt-4 flex items-center gap-2 text-xs text-[#717171]">
            <span>TalentDash</span>
            <span>›</span>
            <span className="text-[#222222] font-medium">Salaries</span>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <SalaryTable initialData={salaries} />
      </div>
    </main>
  )
}