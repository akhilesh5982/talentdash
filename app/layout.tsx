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
          <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <span className="bg-[#FF5A5F] text-white text-xs font-bold px-2 py-1 rounded">TD</span>
              <span className="text-[#222222] font-bold text-base tracking-tight">TalentDash</span>
            </Link>

            {/* Nav links */}
            <div className="flex items-center gap-1">
              <Link href="/salaries"
                className="text-sm text-[#484848] hover:text-[#222222] hover:bg-[#F7F7F7] font-medium px-3 py-2 rounded-lg transition-colors">
                Salaries
              </Link>
              <Link href="/compare"
                className="text-sm text-[#484848] hover:text-[#222222] hover:bg-[#F7F7F7] font-medium px-3 py-2 rounded-lg transition-colors">
                Compare
              </Link>
              <Link href="/salaries"
                className="ml-2 bg-[#FF5A5F] text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#e04f54] transition-colors">
                Browse Salaries
              </Link>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}