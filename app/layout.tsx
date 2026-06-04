import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TalentDash — Career Intelligence for India',
  description: 'Structured, comparable, decision-ready salary data for Indian professionals.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-white border-b border-[#EBEBEB] sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-[#FF5A5F]">
              TalentDash
            </Link>
            <div className="flex gap-6">
              <Link href="/salaries" className="text-sm text-[#484848] hover:text-[#222222] font-medium">
                Salaries
              </Link>
              <Link href="/compare" className="text-sm text-[#484848] hover:text-[#222222] font-medium">
                Compare
              </Link>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}