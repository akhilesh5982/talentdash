"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      {/* Top Brand Stripe */}
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Brand Logo Symbol */}
          <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center text-white font-black text-lg">
            D
          </div>
          <span className="text-xl font-black text-slate-900 tracking-tight">TalentDash</span>
        </div>

        {/* System Utility Links */}
        <div className="flex items-center gap-4 text-xs font-semibold text-slate-600">
          <Link href="/login" className="hover:text-slate-900">Log in</Link>
          <Link href="/signup" className="bg-brand text-white px-4 py-2 rounded-lg hover:bg-brand-hover transition-colors">Sign up</Link>
          <span className="text-gray-200">|</span>
          <Link href="/contribute" className="flex items-center gap-1 text-accent-indigo hover:opacity-90">
            <span>❤️</span> Contribute
          </Link>
          <Link href="/employer" className="hover:text-slate-900 flex items-center gap-1">
            <span>💼</span> Employer
          </Link>
        </div>
      </div>

      {/* Lower Sub-Navigation Menu Grid */}
      <div className="w-full bg-slate-50/50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-11 flex items-center gap-8 text-xs font-medium text-slate-600">
          <Link href="/companies" className="hover:text-slate-900 flex items-center gap-0.5">Companies <span className="text-[10px] opacity-50">▼</span></Link>
          <Link href="/salaries" className="text-brand font-bold border-b-2 border-brand h-11 flex items-center">Salaries</Link>
          <Link href="/reviews" className="hover:text-slate-900">Reviews</Link>
          <Link href="/interviews" className="hover:text-slate-900">Interviews</Link>
          <Link href="/jobs" className="hover:text-slate-900">Jobs</Link>
          <Link href="/forum" className="hover:text-slate-900">Forum</Link>
          <Link href="/offers" className="hover:text-slate-900">Offers</Link>
          <Link href="/tools" className="hover:text-slate-900 flex items-center gap-0.5">Tools <span className="text-[10px] opacity-50">▼</span></Link>
        </div>
      </div>
    </header>
  );
}