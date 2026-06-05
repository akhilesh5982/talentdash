import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TalentDash — Explore. Compare. Grow.",
  description: "Discover real salary insights, read reviews, prepare for interviews, and find the right opportunities — all in one place.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen bg-[#f8fafc]`}>
        {/* Render fixed premium split sub-navigation header */}
        <Navbar />
        
        {/* Responsive Content Core Shell Wrapper */}
        <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {children}
        </main>
        
        {/* Unified Application Footnote Navigation */}
        <Footer />
      </body>
    </html>
  );
}

function Footer() {
  const navigationSections = [
    {
      title: "Explore",
      links: [
        { label: "Salaries", href: "/salaries" },
        { label: "Reviews", href: "/reviews" },
        { label: "Interviews", href: "/interviews" },
        { label: "Jobs", href: "/jobs" },
        { label: "Offers", href: "/offers" },
        { label: "Community", href: "/community" },
      ],
    },
    {
      title: "Companies",
      links: [
        { label: "Browse All", href: "/companies" },
        { label: "Top Companies", href: "/companies/top" },
        { label: "By Industry", href: "/companies/industry" },
        { label: "Compare", href: "/companies/compare" },
      ],
    },
    {
      title: "Tools",
      links: [
        { label: "Salary Calculator", href: "/tools/salary-calculator" },
        { label: "Hike Calculator", href: "/tools/hike-calculator" },
        { label: "Equity Calculator", href: "/tools/equity-calculator" },
        { label: "Resume Analyzer", href: "/tools/resume-analyzer" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
      ],
    },
  ];

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-10">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-sm">D</span>
              </div>
              <span className="text-white font-black tracking-tight text-lg">TalentDash</span>
            </div>
            <p className="text-xs leading-relaxed mb-4 max-w-sm text-slate-400">
              Career intelligence platform. Structured, comparable, decision-ready salary data for professionals worldwide.
            </p>
            <div className="flex gap-2">
              {["IN", "US", "UK"].map((region) => (
                <Link
                  key={region}
                  href={`/${region.toLowerCase()}`}
                  className="text-[10px] font-bold bg-slate-800 hover:bg-slate-700 text-slate-300 px-2.5 py-1 rounded transition-colors"
                >
                  {region}
                </Link>
              ))}
            </div>
          </div>

          {navigationSections.map((section) => (
            <div key={section.title}>
              <div className="text-white text-xs font-bold uppercase tracking-wider mb-4">{section.title}</div>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-xs hover:text-white transition-colors text-slate-400">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>© {new Date().getFullYear()} TalentDash. All rights reserved.</div>
          <div className="flex gap-4">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((legalItem) => (
              <Link key={legalItem} href="#" className="hover:text-slate-300 transition-colors">
                {legalItem}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}