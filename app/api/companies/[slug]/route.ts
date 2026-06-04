import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

function computeMedian(values: number[]): number {
  if (values.length === 0) return 0
  const sorted = [...values].sort((a, b) => a - b)
  const mid = Math.floor(sorted.length / 2)
  return sorted.length % 2 !== 0
    ? sorted[mid]
    : (sorted[mid - 1] + sorted[mid]) / 2
}

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params

    const company = await prisma.company.findUnique({
      where: { slug },
      include: {
        salaries: {
          orderBy: { total_compensation: 'desc' },
        },
      },
    })

    if (!company) {
      return NextResponse.json(
        { error: true, message: 'Company not found' },
        { status: 404 }
      )
    }

    // Compute median total compensation
    const tcValues = company.salaries.map((s) => Number(s.total_compensation))
    const median_total_compensation = computeMedian(tcValues)

    // Compute level distribution
    const level_distribution: Record<string, number> = {}
    for (const salary of company.salaries) {
      const lvl = salary.level
      level_distribution[lvl] = (level_distribution[lvl] ?? 0) + 1
    }

    return NextResponse.json(
      {
        ...company,
        median_total_compensation,
        level_distribution,
      },
      {
        headers: {
          'Cache-Control': 's-maxage=3600, stale-while-revalidate=86400',
        },
      }
    )
  } catch (err) {
    console.error(err)
    return NextResponse.json(
      { error: true, message: 'Internal server error' },
      { status: 500 }
    )
  }
}