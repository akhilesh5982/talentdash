import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const s1 = searchParams.get('s1')
    const s2 = searchParams.get('s2')

    if (!s1 || !s2) {
      return NextResponse.json(
        { error: true, message: 's1 and s2 query parameters are required' },
        { status: 400 }
      )
    }

    if (s1 === s2) {
      return NextResponse.json(
        { error: true, message: 's1 and s2 must be different records' },
        { status: 400 }
      )
    }

    const [record1, record2] = await Promise.all([
      prisma.salary.findUnique({ where: { id: s1 }, include: { company: true } }),
      prisma.salary.findUnique({ where: { id: s2 }, include: { company: true } }),
    ])

    if (!record1) {
      return NextResponse.json({ error: true, message: `Salary record ${s1} not found` }, { status: 404 })
    }

    if (!record2) {
      return NextResponse.json({ error: true, message: `Salary record ${s2} not found` }, { status: 404 })
    }

    const delta = {
      base_delta: Number(record1.base_salary) - Number(record2.base_salary),
      bonus_delta: Number(record1.bonus) - Number(record2.bonus),
      stock_delta: Number(record1.stock) - Number(record2.stock),
      tc_delta: Number(record1.total_compensation) - Number(record2.total_compensation),
      experience_delta: record1.experience_years - record2.experience_years,
    }

    const serialize = (r: typeof record1) => ({
      id: r.id,
      company_id: r.company_id,
      role: r.role,
      level: r.level,
      location: r.location,
      currency: r.currency,
      experience_years: r.experience_years,
      base_salary: r.base_salary.toString(),
      bonus: r.bonus.toString(),
      stock: r.stock.toString(),
      total_compensation: r.total_compensation.toString(),
      source: r.source,
      confidence_score: Number(r.confidence_score),
      is_verified: r.is_verified,
      submitted_at: r.submitted_at.toISOString(),
      company: {
        id: r.company.id,
        name: r.company.name,
        slug: r.company.slug,
        normalized_name: r.company.normalized_name,
        industry: r.company.industry,
        headquarters: r.company.headquarters,
        founded_year: r.company.founded_year,
        headcount_range: r.company.headcount_range,
        created_at: r.company.created_at.toISOString(),
        updated_at: r.company.updated_at.toISOString(),
      }
    })

    return NextResponse.json({
      record1: serialize(record1),
      record2: serialize(record2),
      delta
    })

  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: true, message: 'Internal server error' }, { status: 500 })
  }
}