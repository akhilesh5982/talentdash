import { PrismaClient, Level, Currency, Source } from '@prisma/client'

const prisma = new PrismaClient()

const companies = [
  { name: 'Google', slug: 'google', normalized_name: 'google', industry: 'Technology', headquarters: 'Bengaluru', founded_year: 1998, headcount_range: '100000+' },
  { name: 'Amazon', slug: 'amazon', normalized_name: 'amazon', industry: 'E-Commerce / Cloud', headquarters: 'Bengaluru', founded_year: 1994, headcount_range: '100000+' },
  { name: 'Microsoft', slug: 'microsoft', normalized_name: 'microsoft', industry: 'Technology', headquarters: 'Hyderabad', founded_year: 1975, headcount_range: '100000+' },
  { name: 'Meta', slug: 'meta', normalized_name: 'meta', industry: 'Social Media', headquarters: 'Bengaluru', founded_year: 2004, headcount_range: '50000+' },
  { name: 'Flipkart', slug: 'flipkart', normalized_name: 'flipkart', industry: 'E-Commerce', headquarters: 'Bengaluru', founded_year: 2007, headcount_range: '10000+' },
  { name: 'Meesho', slug: 'meesho', normalized_name: 'meesho', industry: 'E-Commerce', headquarters: 'Bengaluru', founded_year: 2015, headcount_range: '5000+' },
  { name: 'Razorpay', slug: 'razorpay', normalized_name: 'razorpay', industry: 'Fintech', headquarters: 'Bengaluru', founded_year: 2014, headcount_range: '2000+' },
  { name: 'TCS', slug: 'tcs', normalized_name: 'tcs', industry: 'IT Services', headquarters: 'Mumbai', founded_year: 1968, headcount_range: '500000+' },
  { name: 'Infosys', slug: 'infosys', normalized_name: 'infosys', industry: 'IT Services', headquarters: 'Bengaluru', founded_year: 1981, headcount_range: '300000+' },
  { name: 'Wipro', slug: 'wipro', normalized_name: 'wipro', industry: 'IT Services', headquarters: 'Bengaluru', founded_year: 1945, headcount_range: '200000+' },
  { name: 'NVIDIA', slug: 'nvidia', normalized_name: 'nvidia', industry: 'Semiconductors', headquarters: 'Pune', founded_year: 1993, headcount_range: '20000+' },
  { name: 'Zepto', slug: 'zepto', normalized_name: 'zepto', industry: 'Quick Commerce', headquarters: 'Mumbai', founded_year: 2021, headcount_range: '1000+' },
]

const salaries = [
  { company: 'google', role: 'Software Engineer', level: Level.L3, location: 'Bengaluru', currency: Currency.INR, experience_years: 1, base_salary: 1800000n, bonus: 200000n, stock: 500000n },
  { company: 'google', role: 'Software Engineer', level: Level.L4, location: 'Bengaluru', currency: Currency.INR, experience_years: 3, base_salary: 2800000n, bonus: 400000n, stock: 1200000n },
  { company: 'google', role: 'Software Engineer', level: Level.L5, location: 'Bengaluru', currency: Currency.INR, experience_years: 6, base_salary: 4200000n, bonus: 700000n, stock: 2500000n },
  { company: 'google', role: 'Software Engineer', level: Level.L6, location: 'Bengaluru', currency: Currency.INR, experience_years: 10, base_salary: 6500000n, bonus: 1200000n, stock: 5000000n },
  { company: 'google', role: 'Product Manager', level: Level.L5, location: 'Bengaluru', currency: Currency.INR, experience_years: 7, base_salary: 5000000n, bonus: 900000n, stock: 3000000n },
  { company: 'google', role: 'Software Engineer', level: Level.L4, location: 'Mumbai', currency: Currency.INR, experience_years: 4, base_salary: 2600000n, bonus: 350000n, stock: 1000000n },
  { company: 'google', role: 'Data Analyst', level: Level.L3, location: 'Hyderabad', currency: Currency.INR, experience_years: 2, base_salary: 1600000n, bonus: 150000n, stock: 400000n },
  { company: 'google', role: 'Software Engineer', level: Level.PRINCIPAL, location: 'Bengaluru', currency: Currency.INR, experience_years: 15, base_salary: 9000000n, bonus: 2000000n, stock: 8000000n },
  { company: 'amazon', role: 'Software Engineer', level: Level.SDE_I, location: 'Bengaluru', currency: Currency.INR, experience_years: 1, base_salary: 1600000n, bonus: 300000n, stock: 600000n },
  { company: 'amazon', role: 'Software Engineer', level: Level.SDE_II, location: 'Bengaluru', currency: Currency.INR, experience_years: 4, base_salary: 2800000n, bonus: 500000n, stock: 1500000n },
  { company: 'amazon', role: 'Software Engineer', level: Level.SDE_III, location: 'Bengaluru', currency: Currency.INR, experience_years: 8, base_salary: 4500000n, bonus: 800000n, stock: 3000000n },
  { company: 'amazon', role: 'Data Analyst', level: Level.SDE_I, location: 'Hyderabad', currency: Currency.INR, experience_years: 2, base_salary: 1400000n, bonus: 200000n, stock: 400000n },
  { company: 'amazon', role: 'Product Manager', level: Level.SDE_II, location: 'Bengaluru', currency: Currency.INR, experience_years: 5, base_salary: 3200000n, bonus: 600000n, stock: 2000000n },
  { company: 'amazon', role: 'Software Engineer', level: Level.SDE_II, location: 'Mumbai', currency: Currency.INR, experience_years: 3, base_salary: 2600000n, bonus: 400000n, stock: 1200000n },
  { company: 'microsoft', role: 'Software Engineer', level: Level.L4, location: 'Hyderabad', currency: Currency.INR, experience_years: 3, base_salary: 2500000n, bonus: 350000n, stock: 1000000n },
  { company: 'microsoft', role: 'Software Engineer', level: Level.L5, location: 'Hyderabad', currency: Currency.INR, experience_years: 7, base_salary: 3800000n, bonus: 600000n, stock: 2000000n },
  { company: 'microsoft', role: 'Product Manager', level: Level.L4, location: 'Hyderabad', currency: Currency.INR, experience_years: 4, base_salary: 2800000n, bonus: 400000n, stock: 1200000n },
  { company: 'microsoft', role: 'Data Analyst', level: Level.L3, location: 'Bengaluru', currency: Currency.INR, experience_years: 2, base_salary: 1500000n, bonus: 180000n, stock: 350000n },
  { company: 'microsoft', role: 'Software Engineer', level: Level.STAFF, location: 'Hyderabad', currency: Currency.INR, experience_years: 12, base_salary: 5500000n, bonus: 1000000n, stock: 4000000n },
  { company: 'meta', role: 'Software Engineer', level: Level.L4, location: 'Bengaluru', currency: Currency.INR, experience_years: 3, base_salary: 3200000n, bonus: 500000n, stock: 2000000n },
  { company: 'meta', role: 'Software Engineer', level: Level.L5, location: 'Bengaluru', currency: Currency.INR, experience_years: 6, base_salary: 5000000n, bonus: 900000n, stock: 4000000n },
  { company: 'meta', role: 'Data Analyst', level: Level.L4, location: 'Bengaluru', currency: Currency.INR, experience_years: 4, base_salary: 2800000n, bonus: 400000n, stock: 1500000n },
  { company: 'flipkart', role: 'Software Engineer', level: Level.SDE_I, location: 'Bengaluru', currency: Currency.INR, experience_years: 1, base_salary: 1400000n, bonus: 150000n, stock: 300000n },
  { company: 'flipkart', role: 'Software Engineer', level: Level.SDE_II, location: 'Bengaluru', currency: Currency.INR, experience_years: 4, base_salary: 2400000n, bonus: 300000n, stock: 800000n },
  { company: 'flipkart', role: 'Product Manager', level: Level.SDE_II, location: 'Bengaluru', currency: Currency.INR, experience_years: 5, base_salary: 2800000n, bonus: 400000n, stock: 1000000n },
  { company: 'flipkart', role: 'Data Analyst', level: Level.SDE_I, location: 'Bengaluru', currency: Currency.INR, experience_years: 2, base_salary: 1200000n, bonus: 100000n, stock: 200000n },
  { company: 'meesho', role: 'Software Engineer', level: Level.SDE_I, location: 'Bengaluru', currency: Currency.INR, experience_years: 1, base_salary: 1200000n, bonus: 100000n, stock: 200000n },
  { company: 'meesho', role: 'Software Engineer', level: Level.SDE_II, location: 'Bengaluru', currency: Currency.INR, experience_years: 3, base_salary: 2000000n, bonus: 250000n, stock: 600000n },
  { company: 'meesho', role: 'Data Analyst', level: Level.SDE_I, location: 'Bengaluru', currency: Currency.INR, experience_years: 2, base_salary: 1000000n, bonus: 80000n, stock: 150000n },
  { company: 'razorpay', role: 'Software Engineer', level: Level.SDE_II, location: 'Bengaluru', currency: Currency.INR, experience_years: 3, base_salary: 2200000n, bonus: 300000n, stock: 800000n },
  { company: 'razorpay', role: 'Software Engineer', level: Level.SDE_III, location: 'Bengaluru', currency: Currency.INR, experience_years: 6, base_salary: 3500000n, bonus: 500000n, stock: 1500000n },
  { company: 'razorpay', role: 'Product Manager', level: Level.SDE_II, location: 'Bengaluru', currency: Currency.INR, experience_years: 4, base_salary: 2600000n, bonus: 350000n, stock: 900000n },
  { company: 'tcs', role: 'Software Engineer', level: Level.L3, location: 'Mumbai', currency: Currency.INR, experience_years: 1, base_salary: 700000n, bonus: 50000n, stock: 0n },
  { company: 'tcs', role: 'Software Engineer', level: Level.L4, location: 'Mumbai', currency: Currency.INR, experience_years: 4, base_salary: 1200000n, bonus: 100000n, stock: 0n },
  { company: 'tcs', role: 'Data Analyst', level: Level.L3, location: 'Chennai', currency: Currency.INR, experience_years: 2, base_salary: 800000n, bonus: 60000n, stock: 0n },
  { company: 'tcs', role: 'Software Engineer', level: Level.L4, location: 'Pune', currency: Currency.INR, experience_years: 5, base_salary: 1300000n, bonus: 120000n, stock: 0n },
  { company: 'infosys', role: 'Software Engineer', level: Level.L3, location: 'Bengaluru', currency: Currency.INR, experience_years: 1, base_salary: 650000n, bonus: 40000n, stock: 0n },
  { company: 'infosys', role: 'Software Engineer', level: Level.L4, location: 'Pune', currency: Currency.INR, experience_years: 4, base_salary: 1100000n, bonus: 90000n, stock: 0n },
  { company: 'infosys', role: 'Data Analyst', level: Level.L3, location: 'Hyderabad', currency: Currency.INR, experience_years: 2, base_salary: 750000n, bonus: 50000n, stock: 0n },
  { company: 'wipro', role: 'Software Engineer', level: Level.L3, location: 'Bengaluru', currency: Currency.INR, experience_years: 1, base_salary: 600000n, bonus: 0n, stock: 0n },
  { company: 'wipro', role: 'Software Engineer', level: Level.L4, location: 'Hyderabad', currency: Currency.INR, experience_years: 4, base_salary: 1000000n, bonus: 80000n, stock: 0n },
  { company: 'nvidia', role: 'Software Engineer', level: Level.L5, location: 'Pune', currency: Currency.INR, experience_years: 6, base_salary: 4800000n, bonus: 800000n, stock: 3500000n },
  { company: 'nvidia', role: 'Software Engineer', level: Level.L4, location: 'Pune', currency: Currency.INR, experience_years: 3, base_salary: 3000000n, bonus: 500000n, stock: 1800000n },
  { company: 'nvidia', role: 'Data Analyst', level: Level.L4, location: 'Pune', currency: Currency.INR, experience_years: 4, base_salary: 2500000n, bonus: 400000n, stock: 1200000n },
  { company: 'zepto', role: 'Software Engineer', level: Level.SDE_I, location: 'Mumbai', currency: Currency.INR, experience_years: 1, base_salary: 1100000n, bonus: 100000n, stock: 150000n },
  { company: 'zepto', role: 'Software Engineer', level: Level.SDE_II, location: 'Mumbai', currency: Currency.INR, experience_years: 3, base_salary: 1800000n, bonus: 200000n, stock: 400000n },
  { company: 'google', role: 'Software Engineer', level: Level.L5, location: 'San Francisco', currency: Currency.USD, experience_years: 7, base_salary: 22000000n, bonus: 4000000n, stock: 15000000n },
  { company: 'amazon', role: 'Software Engineer', level: Level.SDE_II, location: 'San Francisco', currency: Currency.USD, experience_years: 4, base_salary: 18000000n, bonus: 3000000n, stock: 10000000n },
  { company: 'meta', role: 'Software Engineer', level: Level.L5, location: 'San Francisco', currency: Currency.USD, experience_years: 6, base_salary: 25000000n, bonus: 5000000n, stock: 20000000n },
  { company: 'microsoft', role: 'Software Engineer', level: Level.L5, location: 'London', currency: Currency.GBP, experience_years: 6, base_salary: 12000000n, bonus: 2000000n, stock: 5000000n },
]

async function main() {
  console.log('Seeding database...')
  await prisma.salary.deleteMany()
  await prisma.company.deleteMany()

  const companyMap: Record<string, string> = {}
  for (const c of companies) {
    const company = await prisma.company.create({ data: c })
    companyMap[c.slug] = company.id
  }
  console.log(`✔ Created ${companies.length} companies`)

  let count = 0
  for (const s of salaries) {
    const total = s.base_salary + s.bonus + s.stock
    await prisma.salary.create({
      data: {
        company_id: companyMap[s.company],
        role: s.role,
        level: s.level,
        location: s.location,
        currency: s.currency,
        experience_years: s.experience_years,
        base_salary: s.base_salary,
        bonus: s.bonus,
        stock: s.stock,
        total_compensation: total,
        source: Source.CONTRIBUTOR,
        confidence_score: 0.9,
        is_verified: true,
      }
    })
    count++
  }
  console.log(`✔ Created ${count} salary records`)
  console.log('Seeding complete!')
}

main()
  .catch((e) => { console.error(e); process.exit(1) })
  .finally(async () => { await prisma.$disconnect() })