"use server";

// FIX: Path ko '@/lib/prisma' se badal kar '../../lib/db' kiya hai 
// kyunki aapki file ka naam db.ts hai aur relative path Vercel par fail nahi hota.
import { prisma } from "../../lib/db";
import { Level, Currency, Source } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function submitSalaryAction(formData: FormData) {
  const companyName = formData.get("companyName") as string;
  const role = formData.get("role") as string;
  const level = formData.get("level") as Level;
  const location = formData.get("location") as string;
  const baseSalaryNum = Number(formData.get("baseSalary"));
  const bonusNum = Number(formData.get("bonus") || 0);
  const stockNum = Number(formData.get("stock") || 0);
  const experienceYears = Number(formData.get("experienceYears"));

  if (!companyName || !role || !level || !location) {
    throw new Error("Missing required database fields.");
  }

  // 1. Find or create the company record to maintain structural relationship integrity
  const slug = companyName.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  let company = await prisma.company.findUnique({
    where: { slug },
  });

  if (!company) {
    company = await prisma.company.create({
      data: {
        name: companyName,
        slug,
        normalized_name: companyName.toLowerCase(),
        industry: "Technology",
        headquarters: location,
      },
    });
  }

  const totalCompensationNum = baseSalaryNum + bonusNum + stockNum;

  // 2. Insert the record using native BigInt constructors
  await prisma.salary.create({
    data: {
      company_id: company.id,
      role,
      level,
      location,
      currency: Currency.INR,
      experience_years: experienceYears,
      base_salary: BigInt(baseSalaryNum),
      bonus: BigInt(bonusNum),
      stock: BigInt(stockNum),
      total_compensation: BigInt(totalCompensationNum),
      source: Source.CONTRIBUTOR,
      confidence_score: 1.0,
      is_verified: false,
    },
  });

  // 3. Clear cache tracking arrays to update data metrics instantly
  revalidatePath("/salaries");
}