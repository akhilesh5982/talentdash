import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)

    const company = searchParams.get('company') ?? ''
    const role = searchParams.get('role') ?? ''
    const level = searchParams.get('level') ?? ''
    const location = searchParams.get('location') ?? ''
    const currency = searchParams.get('currency') ?? ''
    const sort = searchParams.get('sort') ?? 'total_comp_desc'
    const page = Math.max(1, parseInt(searchParams.get('page') ?? '1'))
    const rawLimit = parseInt(searchParams.get('limit') ?? '25')
    const limit = Math.min(100, Math.max(1, rawLimit))
    const skip = (page - 1) * limit

    const where: Record<string, unknown> = {}
    if (company) where.company = { normalized_name: { contains: company.toLowerCase(), mode: 'insensitive' } }
    if (role) where.role = { contains: role, mode: 'insensitive' }
    if (level) {
      const levels = level.split(',').filter(Boolean)
      where.level = levels.length === 1 ? levels[0] : { in: levels }
    }
    if (location) where.location = { contains: location, mode: 'insensitive' }
    if (currency) where.currency = currency

    type SortOrder = 'asc' | 'desc'
    const orderBy: Record<string, SortOrder> =
      sort === 'total_comp_asc' ? { total_compensation: 'asc' }
      : sort === 'date_desc' ? { submitted_at: 'desc' }
      : { total_compensation: 'desc' }

    const [data, total] = await Promise.all([
      prisma.salary.findMany({
        where,
        orderBy,
        skip,
        take: limit,
        include: { company: true },
      }),
      prisma.salary.count({ where }),
    ])

    const serialized = data.map(s => ({
      ...s,
      base_salary: s.base_salary.toString(),
      bonus: s.bonus.toString(),
      stock: s.stock.toString(),
      total_compensation: s.total_compensation.toString(),
    }))

    return NextResponse.json(
      { data: serialized, meta: { total, page, limit, totalPages: Math.ceil(total / limit) } },
      { headers: { 'Cache-Control': 's-maxage=300, stale-while-revalidate=3600' } }
    )
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: true, message: 'Internal server error' }, { status: 500 })
  }
}