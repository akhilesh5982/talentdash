import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { Level, Currency, Source } from '@prisma/client'

const VALID_LEVELS = Object.values(Level)
const VALID_CURRENCIES = Object.values(Currency)

function normalizeCompany(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/\s+(pvt|ltd|inc|llc|limited|private|technologies|services|solutions|india|bpo|web services)\.?/g, '')
    .replace(/\.com$/, '')
    .replace(/[^a-z0-9]/g, '')
    .trim()
}

const ALIASES: Record<string, string> = {
  'tataconsulatancyservices': 'tcs',
  'tataconsultancy': 'tcs',
  'amazonwebservices': 'aws',
  'infosysbpo': 'infosys',
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    // Validate required fields
    const requiredFields = ['company', 'role', 'level', 'location', 'currency', 'experience_years', 'base_salary', 'source', 'confidence_score']
    for (const field of requiredFields) {
      if (body[field] === undefined || body[field] === null || body[field] === '') {
        return NextResponse.json(
          { error: true, field, message: `${field} is required` },
          { status: 400 }
        )
      }
    }

    // Validate level
    if (!VALID_LEVELS.includes(body.level)) {
      return NextResponse.json(
        { error: true, field: 'level', message: `Level must be one of: ${VALID_LEVELS.join(', ')}` },
        { status: 400 }
      )
    }

    // Validate currency
    if (!VALID_CURRENCIES.includes(body.currency)) {
      return NextResponse.json(
        { error: true, field: 'currency', message: `Currency must be one of: ${VALID_CURRENCIES.join(', ')}` },
        { status: 400 }
      )
    }

    // Validate experience_years
    if (body.experience_years <= 0 || body.experience_years >= 51) {
      return NextResponse.json(
        { error: true, field: 'experience_years', message: 'experience_years must be between 1 and 50' },
        { status: 400 }
      )
    }

    // Validate base_salary
    if (body.base_salary <= 0) {
      return NextResponse.json(
        { error: true, field: 'base_salary', message: 'base_salary must be greater than 0' },
        { status: 400 }
      )
    }

    // Validate confidence_score
    if (body.confidence_score < 0.0 || body.confidence_score > 1.0) {
      return NextResponse.json(
        { error: true, field: 'confidence_score', message: 'confidence_score must be between 0.0 and 1.0' },
        { status: 400 }
      )
    }

    // Normalize company name
    const normalized = normalizeCompany(body.company)
    const slug = ALIASES[normalized] ?? normalized

    // Find or create company
    let company = await prisma.company.findFirst({
      where: { normalized_name: slug }
    })

    if (!company) {
      company = await prisma.company.create({
        data: {
          name: body.company.trim(),
          slug,
          normalized_name: slug,
          industry: body.industry ?? 'Unknown',
          headquarters: body.location,
        }
      })
    }

    // Recompute total_compensation server-side always
    const base = BigInt(body.base_salary)
    const bonus = BigInt(body.bonus ?? 0)
    const stock = BigInt(body.stock ?? 0)
    const total = base + bonus + stock

    // Duplicate check — same company+role+level+location within 48 hours within 10%
    const fortyEightHoursAgo = new Date(Date.now() - 48 * 60 * 60 * 1000)
    const existing = await prisma.salary.findFirst({
      where: {
        company_id: company.id,
        role: body.role,
        level: body.level,
        location: body.location,
        submitted_at: { gte: fortyEightHoursAgo }
      }
    })

    if (existing) {
      const existingBase = Number(existing.base_salary)
      const newBase = Number(base)
      const diff = Math.abs(existingBase - newBase) / existingBase
      if (diff <= 0.1) {
        return NextResponse.json(
          { error: true, message: 'Duplicate record submitted within 48 hours with similar salary' },
          { status: 409 }
        )
      }
    }

    // Store record
    const salary = await prisma.salary.create({
      data: {
        company_id: company.id,
        role: body.role,
        level: body.level,
        location: body.location,
        currency: body.currency,
        experience_years: body.experience_years,
        base_salary: base,
        bonus,
        stock,
        total_compensation: total,
        source: body.source ?? Source.CONTRIBUTOR,
        confidence_score: body.confidence_score,
        is_verified: false,
      },
      include: { company: true }
    })

    return NextResponse.json(salary, { status: 201 })

  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: true, message: 'Internal server error' }, { status: 500 })
  }
}