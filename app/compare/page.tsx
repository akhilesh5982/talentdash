'use client'

import { useState, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { formatSalary } from '@/lib/format'
import { LEVEL_COLORS } from '@/lib/constants'

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

function Delta({ value }: { value: number }) {
  if (value === 0) return <span className="text-[#717171]">—</span>
  const formatted = formatSalary(Math.abs(value), 'INR', 'INR')
  return value > 0
    ? <span className="text-[#008A05] font-semibold">+{formatted}</span>
    : <span className="text-[#D93025] font-semibold">-{formatted}</span>
}

function CompareContent() {
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
      .then(d => {
        setSalaries(d.data)
        const c1 = searchParams.get('c1')
        if (c1 && d.data.length > 0 && !searchParams.get('s1')) {
          const first = d.data.find((s: Salary) => s.company.slug === c1)
          if (first) setS1(first.id)
        }
      })
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

  const rows: {
    label: string
    key: string
    render: (s: Salary) => React.ReactNode
    deltaKey?: keyof CompareResult['delta']
  }[] = [
    { label: 'Company', key: 'company', render: (s) => <span className="font-medium text-[#222222]">{s.company.name}</span> },
    { label: 'Role', key: 'role', render: (s) => s.role },
    {
      label: 'Level', key: 'level', render: (s) => (
        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${LEVEL_COLORS[s.level] ?? 'bg-gray-100 text-gray-700'}`}>
          {s.level}
        </span>
      )
    },
    { label: 'Location', key: 'location', render: (s) => s.location },
    { label: 'Experience', key: 'exp', render: (s) => `${s.experience_years} years`, deltaKey: 'experience_delta' },
    { label: 'Base Salary', key: 'base', render: (s) => formatSalary(Number(s.base_salary), s.currency, 'INR'), deltaKey: 'base_delta' },
    { label: 'Bonus', key: 'bonus', render: (s) => Number(s.bonus) === 0 ? '—' : formatSalary(Number(s.bonus), s.currency, 'INR'), deltaKey: 'bonus_delta' },
    { label: 'Stock / RSU', key: 'stock', render: (s) => Number(s.stock) === 0 ? '—' : formatSalary(Number(s.stock), s.currency, 'INR'), deltaKey: 'stock_delta' },
    { label: 'Total Comp', key: 'tc', render: (s) => formatSalary(Number(s.total_compensation), s.currency, 'INR'), deltaKey: 'tc_delta' },
  ]

  const winner = result
    ? result.delta.tc_delta > 0 ? 'A' : result.delta.tc_delta < 0 ? 'B' : null
    : null

  return (
    <main className="min-h-screen bg-[#F7F7F7]">

      {/* Header */}
      <div className="bg-white border-b border-[#EBEBEB]">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <p className="text-xs font-semibold text-[#FF5A5F] uppercase tracking-widest mb-1">Offer Comparison</p>
          <h1 className="text-[28px] font-bold text-[#222222]">Compare Salaries</h1>
          <p className="text-[#717171] mt-1 text-sm">Select two salary records to see a side-by-side breakdown with deltas.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-6">

        {/* Selectors */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {[
            { val: s1, set: setS1, label: 'Record A', isWinner: winner === 'A' },
            { val: s2, set: setS2, label: 'Record B', isWinner: winner === 'B' },
          ].map(({ val, set, label, isWinner }) => (
            <div key={label} className={`bg-white rounded-xl border p-4 transition-all ${isWinner ? 'border-[#0369A1] shadow-sm' : 'border-[#EBEBEB]'}`}>
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs font-semibold text-[#717171] uppercase tracking-wide">{label}</p>
                {isWinner && (
                  <span className="bg-[#0369A1] text-white text-xs px-2 py-0.5 rounded-full font-medium">Higher TC</span>
                )}
              </div>
              <select
                value={val}
                onChange={e => set(e.target.value)}
                className="w-full border border-[#EBEBEB] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#FF5A5F] bg-white"
              >
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

        {/* Loading */}
        {loading && (
          <div className="bg-white rounded-xl border border-[#EBEBEB] p-12 text-center text-[#717171] text-sm">
            Loading comparison...
          </div>
        )}

        {/* Same record error */}
        {!result && !loading && s1 && s2 && s1 === s2 && (
          <div className="bg-white rounded-xl border border-[#D93025]/30 p-6 text-center">
            <p className="text-[#D93025] text-sm font-medium">Please select two different records to compare.</p>
          </div>
        )}

        {/* Comparison table */}
        {result && !loading && (
          <div className="bg-white rounded-xl border border-[#EBEBEB] overflow-hidden">

            {/* Column headers */}
            <div className="grid grid-cols-[200px_1fr_1fr_140px] border-b border-[#EBEBEB] bg-[#F7F7F7]">
              <div className="px-5 py-3 text-xs font-semibold text-[#717171] uppercase tracking-wide">Field</div>
              <div className="px-5 py-3 text-xs font-semibold text-[#717171] uppercase tracking-wide flex items-center gap-2">
                Record A
                {winner === 'A' && <span className="bg-[#0369A1] text-white text-xs px-2 py-0.5 rounded-full">Winner</span>}
              </div>
              <div className="px-5 py-3 text-xs font-semibold text-[#717171] uppercase tracking-wide flex items-center gap-2">
                Record B
                {winner === 'B' && <span className="bg-[#0369A1] text-white text-xs px-2 py-0.5 rounded-full">Winner</span>}
              </div>
              <div className="px-5 py-3 text-xs font-semibold text-[#717171] uppercase tracking-wide">Delta</div>
            </div>

            {rows.map((row, i) => (
              <div
                key={row.key}
                className={`grid grid-cols-[200px_1fr_1fr_140px] border-b border-[#EBEBEB] ${i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'} ${row.key === 'tc' ? 'bg-[#EFF6FF]' : ''}`}
              >
                <div className="px-5 py-3.5 text-sm text-[#717171] font-medium">{row.label}</div>
                <div className={`px-5 py-3.5 text-sm ${row.key === 'tc' ? 'font-bold text-[#0369A1] text-base' : 'text-[#222222]'}`}>
                  {row.render(result.record1)}
                </div>
                <div className={`px-5 py-3.5 text-sm ${row.key === 'tc' ? 'font-bold text-[#0369A1] text-base' : 'text-[#222222]'}`}>
                  {row.render(result.record2)}
                </div>
                <div className="px-5 py-3.5 text-sm">
                  {row.deltaKey
                    ? <Delta value={result.delta[row.deltaKey]} />
                    : <span className="text-[#717171]">—</span>
                  }
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}

export default function ComparePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F7F7F7] flex items-center justify-center text-[#717171] text-sm">Loading...</div>}>
      <CompareContent />
    </Suspense>
  )
}