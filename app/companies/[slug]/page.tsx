import { prisma } from '@/lib/db'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'
import { LEVEL_COLORS } from '@/lib/constants'
import { formatSalary } from '@/lib/format'

export async function generateStaticParams() {
  const companies = await prisma.company.findMany({ select: { slug: true } })
  return companies.map(c => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const company = await prisma.company.findUnique({ where: { slug } })
  if (!company) return { title: 'Company Not Found | TalentDash' }
  return {
    title: `${company.name} Salaries & Reviews | TalentDash`,
    description: `Browse verified salary data, levels, and compensation at ${company.name}.`,
  }
}

export default async function CompanyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const company = await prisma.company.findUnique({
    where: { slug },
    include: { salaries: { orderBy: { total_compensation: 'desc' } } }
  })

  if (!company) notFound()

  // Compute median
  const tcValues = company.salaries.map(s => Number(s.total_compensation)).sort((a, b) => a - b)
  const mid = Math.floor(tcValues.length / 2)
  const median = tcValues.length % 2 !== 0 ? tcValues[mid] : (tcValues[mid - 1] + tcValues[mid]) / 2

  // Level distribution
  const levelDist: Record<string, number> = {}
  for (const s of company.salaries) {
    levelDist[s.level] = (levelDist[s.level] ?? 0) + 1
  }
  const total = company.salaries.length

  // Serialize
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
      <div className="max-w-5xl mx-auto px-4 py-8">

        {/* Header */}
        <div className="bg-white rounded-xl border border-[#EBEBEB] p-6 mb-6">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold text-[#222222]">{company.name}</h1>
              <div className="flex gap-3 mt-2">
                <span className="text-sm bg-[#F7F7F7] border border-[#EBEBEB] px-3 py-1 rounded-full text-[#484848]">
                  {company.industry}
                </span>
                {company.founded_year && (
                  <span className="text-sm text-[#717171]">Est. {company.founded_year}</span>
                )}
                {company.headcount_range && (
                  <span className="text-sm text-[#717171]">{company.headcount_range} employees</span>
                )}
              </div>
              <p className="text-sm text-[#717171] mt-1">📍 {company.headquarters}</p>
            </div>
            <Link href={`/compare?c1=${slug}`}
              className="bg-[#FF5A5F] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#e04e53] transition-colors">
              Compare
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-xl border border-[#EBEBEB] p-5">
            <p className="text-xs text-[#717171] uppercase tracking-wide mb-1">Median Total Comp</p>
            <p className="text-2xl font-bold text-[#0369A1]">
              {formatSalary(median, 'INR', 'INR')}
            </p>
          </div>
          <div className="bg-white rounded-xl border border-[#EBEBEB] p-5">
            <p className="text-xs text-[#717171] uppercase tracking-wide mb-1">Salary Records</p>
            <p className="text-2xl font-bold text-[#222222]">{total}</p>
          </div>
          <div className="bg-white rounded-xl border border-[#EBEBEB] p-5">
            <p className="text-xs text-[#717171] uppercase tracking-wide mb-1">Headquarters</p>
            <p className="text-2xl font-bold text-[#222222]">{company.headquarters}</p>
          </div>
        </div>

        {/* Level Distribution */}
        <div className="bg-white rounded-xl border border-[#EBEBEB] p-6 mb-6">
          <h2 className="text-lg font-semibold text-[#222222] mb-4">Level Distribution</h2>
          <div className="flex h-6 rounded-full overflow-hidden">
            {Object.entries(levelDist).map(([level, count]) => (
              <div key={level}
                style={{ width: `${(count / total) * 100}%` }}
                className={`${LEVEL_COLORS[level] ?? 'bg-gray-200'} flex items-center justify-center text-xs font-medium`}
                title={`${level}: ${count}`}>
                {(count / total) * 100 > 10 ? level : ''}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 mt-3">
            {Object.entries(levelDist).map(([level, count]) => (
              <span key={level} className={`px-2 py-1 rounded-full text-xs font-medium ${LEVEL_COLORS[level] ?? 'bg-gray-100'}`}>
                {level}: {count}
              </span>
            ))}
          </div>
        </div>

        {/* Salary Table */}
        <div className="bg-white rounded-xl border border-[#EBEBEB] overflow-hidden">
          <div className="px-6 py-4 border-b border-[#EBEBEB]">
            <h2 className="text-lg font-semibold text-[#222222]">Salary Records</h2>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#EBEBEB] bg-[#F7F7F7]">
                {['Role', 'Level', 'Location', 'Exp', 'Base', 'Stock', 'Total Comp'].map(h => (
                  <th key={h} className="px-4 py-3 text-left text-xs font-medium text-[#717171] uppercase tracking-wide">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {salaries.map(s => (
                <tr key={s.id} className="border-b border-[#EBEBEB] hover:bg-[#F2F2F2]">
                  <td className="px-4 py-3 text-[#484848]">{s.role}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${LEVEL_COLORS[s.level] ?? 'bg-gray-100'}`}>
                      {s.level}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-[#484848]">{s.location}</td>
                  <td className="px-4 py-3 text-[#484848]">{s.experience_years}y</td>
                  <td className="px-4 py-3 text-[#484848]">{formatSalary(Number(s.base_salary), s.currency, 'INR')}</td>
                  <td className="px-4 py-3 text-[#484848]">{Number(s.stock) === 0 ? '—' : formatSalary(Number(s.stock), s.currency, 'INR')}</td>
                  <td className="px-4 py-3 font-bold text-[#0369A1] text-base">
                    {formatSalary(Number(s.total_compensation), s.currency, 'INR')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </main>
  )
}