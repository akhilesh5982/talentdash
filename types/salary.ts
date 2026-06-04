export type SalaryRecord = {
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
  company: {
    id: string
    name: string
    slug: string
    industry: string
    headquarters: string
    founded_year: number | null
    headcount_range: string | null
  }
}