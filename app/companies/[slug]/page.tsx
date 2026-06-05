export const revalidate = 86400

import { prisma } from '@/lib/db'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'
import { LEVEL_COLORS } from '@/lib/constants'
import { formatSalary } from '@/lib/format'

const BASE_URL = 'https://talentdash-bay.vercel.app'

export async function generateStaticParams() {
  const companies = await prisma.company.findMany({ select: { slug: true } })
  return companies.map(c => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const company = await prisma.company.findUnique({ where: { slug } })
  if (!company) return { title: 'Company Not Found | TalentDash' }
  return {
    title: `${company.name} Salaries in India — All Levels | TalentDash`,
    description: `Browse verified salary data, level distribution, and median compensation at ${company.name}. Real data from engineers and PMs.`,
    alternates: { canonical: `${BASE_URL}/companies/${slug}` },
    openGraph: {
      title: `${company.name} Salaries | TalentDash`,
      description: `Verified compensation data at ${company.name}.`,
      url: `${BASE_URL}/companies/${slug}`,
    },
  }
}

export default async function CompanyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const company = await prisma.company.findUnique({
    where: { slug },
    include: { salaries: { orderBy: { total_compensation: 'desc' } } }
  })

  if (!company) notFound()

  const tcValues = company.salaries.map(s => Number(s.total_compensation)).sort((a, b) => a - b)
  const mid = Math.floor(tcValues.length / 2)
  const median = tcValues.length % 2 !== 0 ? tcValues[mid] : (tcValues[mid - 1] + tcValues[mid]) / 2
  const minTC = tcValues[0] ?? 0
  const maxTC = tcValues[tcValues.length - 1] ?? 0

  const levelDist: Record<string, number> = {}
  for (const s of company.salaries) {
    levelDist[s.level] = (levelDist[s.level] ?? 0) + 1
  }
  const total = company.salaries.length

  const salaries = company.salaries.map(s => ({
    id: s.id,
    role: s.role,
    level: s.level,
    location: s.location,
    currency: s.currency,
    experience_years: s.experience_years,
    base_salary: s.base_salary.toString(),
    bonus: s.bonus.toString(),
    stock: s.stock.toString(),
    total_compensation: s.total_compensation.toString(),
  }))

  return (
    <main className="min-h-screen bg-[#F7F7F7]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: company.name,
            url: `${BASE_URL}/companies/${company.slug}`,
            description: `Salary data and compensation insights for ${company.name}`,
          })
        }}
      />

      {/* Page header */}
      <div className="bg-white border-b border-[#EBEBEB]">
        <div className="max-w-5xl mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-[#717171] mb-4">
            <Link href="/" className="hover:text-[#222222]">TalentDash</Link>
            <span>›</span>
            <Link href="/salaries" className="hover:text-[#222222]">Companies</Link>
            <span>›</span>
            <span className="text-[#222222] font-medium">{company.name}</span>
          </div>

          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              {/* Company initial avatar */}
              <div className="flex items-center gap-4 mb-3">
                <div className="w-14 h-14 rounded-xl bg-[#F7F7F7] border border-[#EBEBEB] flex items-center justify-center text-xl font-bold text-[#484848]">
                  {company.name.charAt(0)}
                </div>
                <div>
                  <h1 className="text-[28px] font-bold text-[#222222] leading-tight">{company.name}</h1>
                  <div className="flex flex-wrap items-center gap-2 mt-1">
                    {company.industry && (
                      <span className="text-xs bg-[#F7F7F7] border border-[#EBEBEB] px-2.5 py-1 rounded-full text-[#484848] font-medium">
                        {company.industry}
                      </span>
                    )}
                    {company.founded_year && (
                      <span className="text-xs text-[#717171]">Est. {company.founded_year}</span>
                    )}
                    {company.headcount_range && (
                      <span className="text-xs text-[#717171]">· {company.headcount_range} employees</span>
                    )}
                    {company.headquarters && (
                      <span className="text-xs text-[#717171]">· 📍 {company.headquarters}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <Link href={`/compare?c1=${slug}`}
              className="bg-[#FF5A5F] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#e04e53] transition-colors">
              Compare →
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col gap-5">

        {/* Stats row */}
        <div className="grid grid-cols-4 gap-4">
          {[
            { label: 'Median Total Comp', value: formatSalary(median, 'INR', 'INR'), highlight: true },
            { label: 'Min TC', value: formatSalary(minTC, 'INR', 'INR'), highlight: false },
            { label: 'Max TC', value: formatSalary(maxTC, 'INR', 'INR'), highlight: false },
            { label: 'Salary Records', value: String(total), highlight: false },
          ].map(s => (
            <div key={s.label} className="bg-white rounded-xl border border-[#EBEBEB] p-5">
              <p className="text-xs text-[#717171] uppercase tracking-wide font-medium mb-1.5">{s.label}</p>
              <p className={`text-xl font-bold ${s.highlight ? 'text-[#0369A1]' : 'text-[#222222]'}`}>
                {s.value}
              </p>
            </div>
          ))}
        </div>

        {/* Level Distribution */}
        <div className="bg-white rounded-xl border border-[#EBEBEB] p-6">
          <h2 className="text-base font-semibold text-[#222222] mb-4">Level Distribution</h2>
          {/* Stacked bar */}
          <div className="flex h-8 rounded-lg overflow-hidden gap-0.5 mb-4">
            {Object.entries(levelDist).map(([level, count]) => {
              const pct = (count / total) * 100
              return (
                <div
                  key={level}
                  style={{ width: `${pct}%` }}
                  className={`${LEVEL_COLORS[level] ?? 'bg-gray-200'} flex items-center justify-center text-xs font-semibold relative group cursor-default`}
                  title={`${level}: ${count} (${pct.toFixed(0)}%)`}
                >
                  {pct > 12 ? level : ''}
                </div>
              )
            })}
          </div>
          {/* Legend */}
          <div className="flex flex-wrap gap-2">
            {Object.entries(levelDist).map(([level, count]) => (
              <div key={level} className="flex items-center gap-1.5">
                <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${LEVEL_COLORS[level] ?? 'bg-gray-100 text-gray-700'}`}>
                  {level}
                </span>
                <span className="text-xs text-[#717171]">{count} record{count > 1 ? 's' : ''}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Salary Table */}
        <div className="bg-white rounded-xl border border-[#EBEBEB] overflow-hidden">
          <div className="px-6 py-4 border-b border-[#EBEBEB] flex items-center justify-between">
            <div>
              <h2 className="text-base font-semibold text-[#222222]">Salary Records</h2>
              <p className="text-xs text-[#717171] mt-0.5">{total} verified records at {company.name}</p>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#EBEBEB] bg-[#F7F7F7]">
                  {['Role', 'Level', 'Location', 'Exp', 'Base', 'Bonus', 'Stock', 'Total Comp'].map(h => (
                    <th key={h} className="px-4 py-3 text-left text-xs font-medium text-[#717171] uppercase tracking-wide whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {salaries.map((s, i) => (
                  <tr key={s.id} className={`border-b border-[#EBEBEB] hover:bg-[#F2F2F2] transition-colors ${i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'}`}>
                    <td className="px-4 py-3 text-[#484848] font-medium">{s.role}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${LEVEL_COLORS[s.level] ?? 'bg-gray-100 text-gray-700'}`}>
                        {s.level}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-[#484848]">{s.location}</td>
                    <td className="px-4 py-3 text-[#484848]">{s.experience_years}y</td>
                    <td className="px-4 py-3 text-[#484848]">{formatSalary(Number(s.base_salary), s.currency, 'INR')}</td>
                    <td className="px-4 py-3 text-[#484848]">{Number(s.bonus) === 0 ? '—' : formatSalary(Number(s.bonus), s.currency, 'INR')}</td>
                    <td className="px-4 py-3 text-[#484848]">{Number(s.stock) === 0 ? '—' : formatSalary(Number(s.stock), s.currency, 'INR')}</td>
                    <td className="px-4 py-3">
                      <span className="text-base font-bold text-[#0369A1]">
                        {formatSalary(Number(s.total_compensation), s.currency, 'INR')}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>
  )
}