'use client'

import { useState, useMemo, useCallback, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { LEVEL_COLORS, PAGE_SIZE } from '@/lib/constants'
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

type SortKey = 'total_compensation' | 'base_salary' | 'experience_years'
type SortDir = 'asc' | 'desc'

function SalaryTableInner({ initialData }: { initialData: Salary[] }) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [company, setCompany] = useState(searchParams.get('company') ?? '')
  const [role, setRole] = useState(searchParams.get('role') ?? '')
  const [level, setLevel] = useState(searchParams.get('level') ?? '')
  const [location, setLocation] = useState(searchParams.get('location') ?? '')
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR')
  const [sortKey, setSortKey] = useState<SortKey>('total_compensation')
  const [sortDir, setSortDir] = useState<SortDir>('desc')
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState(searchParams.get('company') ?? '')

  const handleSearch = useCallback((val: string) => {
    setSearch(val)
    setCompany(val)
    setPage(1)
    const params = new URLSearchParams(searchParams.toString())
    if (val) params.set('company', val)
    else params.delete('company')
    router.replace(`/salaries?${params.toString()}`, { scroll: false })
  }, [searchParams, router])

  const roles = useMemo(() => [...new Set(initialData.map(s => s.role))], [initialData])
  const levels = useMemo(() => [...new Set(initialData.map(s => s.level))], [initialData])
  const locations = useMemo(() => [...new Set(initialData.map(s => s.location))], [initialData])

  const filtered = useMemo(() => {
    return initialData.filter(s => {
      if (company && !s.company.name.toLowerCase().includes(company.toLowerCase())) return false
      if (role && s.role !== role) return false
      if (level && s.level !== level) return false
      if (location && s.location !== location) return false
      return true
    })
  }, [initialData, company, role, level, location])

  const sorted = useMemo(() => {
    return [...filtered].sort((a, b) => {
      const aVal = sortKey === 'experience_years' ? a[sortKey] : Number(a[sortKey])
      const bVal = sortKey === 'experience_years' ? b[sortKey] : Number(b[sortKey])
      return sortDir === 'desc' ? Number(bVal) - Number(aVal) : Number(aVal) - Number(bVal)
    })
  }, [filtered, sortKey, sortDir])

  const totalPages = Math.ceil(sorted.length / PAGE_SIZE)
  const paginated = sorted.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  function handleSort(key: SortKey) {
    if (sortKey === key) setSortDir(d => d === 'desc' ? 'asc' : 'desc')
    else { setSortKey(key); setSortDir('desc') }
  }

  function clearFilters() {
    setCompany(''); setRole(''); setLevel(''); setLocation(''); setSearch(''); setPage(1)
    router.replace('/salaries', { scroll: false })
  }

  const SortIcon = ({ col }: { col: SortKey }) =>
    sortKey === col ? (sortDir === 'desc' ? ' ↓' : ' ↑') : ' ↕'

  return (
    <div>
      <div className="bg-white rounded-xl border border-[#EBEBEB] p-4 mb-4 flex flex-wrap gap-3">
        <input
          type="text"
          placeholder="Search company..."
          value={search}
          onChange={e => handleSearch(e.target.value)}
          className="border border-[#EBEBEB] rounded-lg px-3 py-2 text-sm w-48 focus:outline-none focus:border-[#FF5A5F]"
        />
        <select value={role} onChange={e => { setRole(e.target.value); setPage(1) }}
          className="border border-[#EBEBEB] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#FF5A5F]">
          <option value="">All Roles</option>
          {roles.map(r => <option key={r} value={r}>{r}</option>)}
        </select>
        <select value={level} onChange={e => { setLevel(e.target.value); setPage(1) }}
          className="border border-[#EBEBEB] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#FF5A5F]">
          <option value="">All Levels</option>
          {levels.map(l => <option key={l} value={l}>{l}</option>)}
        </select>
        <select value={location} onChange={e => { setLocation(e.target.value); setPage(1) }}
          className="border border-[#EBEBEB] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#FF5A5F]">
          <option value="">All Locations</option>
          {locations.map(l => <option key={l} value={l}>{l}</option>)}
        </select>
        <div className="flex border border-[#EBEBEB] rounded-lg overflow-hidden">
          {(['INR', 'USD'] as const).map(c => (
            <button key={c} onClick={() => setCurrency(c)}
              className={`px-3 py-2 text-sm font-medium ${currency === c ? 'bg-[#FF5A5F] text-white' : 'bg-white text-[#484848]'}`}>
              {c}
            </button>
          ))}
        </div>
        <button onClick={clearFilters} className="text-sm text-[#FF5A5F] hover:underline">Clear all</button>
      </div>

      <p className="text-sm text-[#717171] mb-2">
        Showing {(page - 1) * PAGE_SIZE + 1}–{Math.min(page * PAGE_SIZE, sorted.length)} of {sorted.length} records
      </p>

      {paginated.length === 0 ? (
        <div className="bg-white rounded-xl border border-[#EBEBEB] p-12 text-center">
          <p className="text-[#484848] mb-2">No records found for these filters.</p>
          <button onClick={clearFilters} className="text-[#FF5A5F] hover:underline text-sm">Try removing a filter</button>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-[#EBEBEB] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#EBEBEB] bg-[#F7F7F7]">
                  {['Company', 'Role', 'Level', 'Location', 'Exp'].map(h => (
                    <th key={h} className="px-4 py-3 text-left text-xs font-500 text-[#717171] uppercase tracking-wide">{h}</th>
                  ))}
                  <th onClick={() => handleSort('base_salary')}
                    className="px-4 py-3 text-left text-xs font-500 text-[#717171] uppercase tracking-wide cursor-pointer hover:text-[#222222]">
                    Base<SortIcon col="base_salary" />
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-500 text-[#717171] uppercase tracking-wide">Stock</th>
                  <th onClick={() => handleSort('total_compensation')}
                    className="px-4 py-3 text-left text-xs font-500 text-[#717171] uppercase tracking-wide cursor-pointer hover:text-[#222222]">
                    Total Comp<SortIcon col="total_compensation" />
                  </th>
                </tr>
              </thead>
              <tbody>
                {paginated.map((s, i) => (
                  <tr key={s.id} className={`border-b border-[#EBEBEB] hover:bg-[#F2F2F2] transition-colors ${i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'}`}>
                    <td className="px-4 py-3 font-medium text-[#222222]">{s.company.name}</td>
                    <td className="px-4 py-3 text-[#484848]">{s.role}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${LEVEL_COLORS[s.level] ?? 'bg-gray-100 text-gray-700'}`}>
                        {s.level}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-[#484848]">{s.location}</td>
                    <td className="px-4 py-3 text-[#484848]">{s.experience_years}y</td>
                    <td className="px-4 py-3 text-[#484848]">{formatSalary(Number(s.base_salary), s.currency, currency)}</td>
                    <td className="px-4 py-3 text-[#484848]">
                      {Number(s.stock) === 0 ? '—' : formatSalary(Number(s.stock), s.currency, currency)}
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-lg font-bold text-[#0369A1]">
                        {formatSalary(Number(s.total_compensation), s.currency, currency)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-between px-4 py-3 border-t border-[#EBEBEB]">
            <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}
              className="px-4 py-2 text-sm border border-[#EBEBEB] rounded-lg disabled:opacity-40 hover:bg-[#F2F2F2]">
              Previous
            </button>
            <span className="text-sm text-[#717171]">Page {page} of {totalPages}</span>
            <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}
              className="px-4 py-2 text-sm border border-[#EBEBEB] rounded-lg disabled:opacity-40 hover:bg-[#F2F2F2]">
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default function SalaryTable({ initialData }: { initialData: Salary[] }) {
  return (
    <Suspense fallback={<div className="text-center py-12 text-[#717171]">Loading salaries...</div>}>
      <SalaryTableInner initialData={initialData} />
    </Suspense>
  )
}