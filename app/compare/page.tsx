'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { formatSalary } from '@/lib/format'

type Salary = {
  id: string
  role: string
  level: string
  location: string
  currency: string
  experience_years: number
  base_salary: string
  bonus: string
  stock: string
  total_compensation: string
  company: { name: string; slug: string }
}

type CompareResult = {
  record1: Salary
  record2: Salary
  delta: {
    base_delta: number
    bonus_delta: number
    stock_delta: number
    tc_delta: number
    experience_delta: number
  }
}

export default function ComparePage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [salaries, setSalaries] = useState<Salary[]>([])
  const [s1, setS1] = useState(searchParams.get('s1') ?? '')
  const [s2, setS2] = useState(searchParams.get('s2') ?? '')
  const [result, setResult] = useState<CompareResult | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetch('/api/salaries?limit=100')
      .then(r => r.json())
      .then(d => setSalaries(d.data))
  }, [])

  useEffect(() => {
    if (s1 && s2 && s1 !== s2) {
      setLoading(true)
      fetch(`/api/compare?s1=${s1}&s2=${s2}`)
        .then(r => r.json())
        .then(d => { setResult(d); setLoading(false) })
        .catch(() => setLoading(false))
      const params = new URLSearchParams()
      params.set('s1', s1)
      params.set('s2', s2)
      router.replace(`/compare?${params.toString()}`, { scroll: false })
    }
  }, [s1, s2, router])

  function Delta({ value }: { value: number }) {
    if (value === 0) return <span className="text-[#717171]">—</span>
    const formatted = formatSalary(Math.abs(value), 'INR', 'INR')
    return value > 0
      ? <span className="text-[#008A05] font-medium">+{formatted}</span>
      : <span className="text-[#D93025] font-medium">-{formatted}</span>
  }

  const rows = [
    { label: 'Company', key: 'company', render: (s: Salary) => s.company.name },
    { label: 'Role', key: 'role', render: (s: Salary) => s.role },
    { label: 'Level', key: 'level', render: (s: Salary) => s.level },
    { label: 'Location', key: 'location', render: (s: Salary) => s.location },
    { label: 'Experience', key: 'exp', render: (s: Salary) => `${s.experience_years}y` },
    { label: 'Base Salary', key: 'base', render: (s: Salary) => formatSalary(Number(s.base_salary), s.currency, 'INR') },
    { label: 'Bonus', key: 'bonus', render: (s: Salary) => Number(s.bonus) === 0 ? '—' : formatSalary(Number(s.bonus), s.currency, 'INR') },
    { label: 'Stock', key: 'stock', render: (s: Salary) => Number(s.stock) === 0 ? '—' : formatSalary(Number(s.stock), s.currency, 'INR') },
    { label: 'Total Comp', key: 'tc', render: (s: Salary) => formatSalary(Number(s.total_compensation), s.currency, 'INR') },
  ]

  return (
    <main className="min-h-screen bg-[#F7F7F7]">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-[#222222] mb-2">Compare Salaries</h1>
        <p className="text-[#717171] mb-6">Select two salary records to compare side by side</p>

        {/* Selectors */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {[{ val: s1, set: setS1, label: 'Record A' }, { val: s2, set: setS2, label: 'Record B' }].map(({ val, set, label }) => (
            <div key={label} className="bg-white rounded-xl border border-[#EBEBEB] p-4">
              <p className="text-xs text-[#717171] uppercase tracking-wide mb-2">{label}</p>
              <select value={val} onChange={e => set(e.target.value)}
                className="w-full border border-[#EBEBEB] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#FF5A5F]">
                <option value="">Select a record...</option>
                {salaries.map(s => (
                  <option key={s.id} value={s.id}>
                    {s.company.name} — {s.role} ({s.level}) — {formatSalary(Number(s.total_compensation), s.currency, 'INR')}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        {loading && <p className="text-center text-[#717171] py-8">Loading comparison...</p>}

        {result && !loading && (
          <div className="bg-white rounded-xl border border-[#EBEBEB] overflow-hidden">
            {/* Winner badge */}
            <div className="grid grid-cols-3 border-b border-[#EBEBEB] bg-[#F7F7F7]">
              <div className="px-6 py-3 text-xs font-medium text-[#717171] uppercase">Field</div>
              <div className="px-6 py-3 text-xs font-medium text-[#717171] uppercase flex items-center gap-2">
                Record A
                {result.delta.tc_delta > 0 && (
                  <span className="bg-[#0369A1] text-white text-xs px-2 py-0.5 rounded-full">Higher TC</span>
                )}
              </div>
              <div className="px-6 py-3 text-xs font-medium text-[#717171] uppercase flex items-center gap-2">
                Record B
                {result.delta.tc_delta < 0 && (
                  <span className="bg-[#0369A1] text-white text-xs px-2 py-0.5 rounded-full">Higher TC</span>
                )}
              </div>
            </div>

            {rows.map((row, i) => (
              <div key={row.key} className={`grid grid-cols-3 border-b border-[#EBEBEB] ${i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'}`}>
                <div className="px-6 py-3 text-sm text-[#717171] font-medium">{row.label}</div>
                <div className={`px-6 py-3 text-sm ${row.key === 'tc' ? 'font-bold text-[#0369A1] text-base' : 'text-[#222222]'}`}>
                  {row.render(result.record1)}
                </div>
                <div className={`px-6 py-3 text-sm ${row.key === 'tc' ? 'font-bold text-[#0369A1] text-base' : 'text-[#222222]'}`}>
                  {row.render(result.record2)}
                </div>
              </div>
            ))}

            {/* Delta row */}
            <div className="grid grid-cols-3 bg-[#F7F7F7] border-t-2 border-[#EBEBEB]">
              <div className="px-6 py-4 text-sm font-bold text-[#222222]">TC Difference</div>
              <div className="px-6 py-4 col-span-2 text-sm">
                <Delta value={result.delta.tc_delta} />
              </div>
            </div>
          </div>
        )}

        {!result && !loading && s1 && s2 && s1 === s2 && (
          <p className="text-center text-[#D93025] py-8">Please select two different records.</p>
        )}
      </div>
    </main>
  )
}