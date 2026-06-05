"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { label: "Companies", href: "/companies", hasArrow: true },
    { label: "Salaries", href: "/salaries" }, 
    { label: "Compare", href: "/compare" }, // 🚀 Added Compare right alongside Salaries
    { label: "Reviews", href: "/reviews" },
    { label: "Interviews", href: "/interviews" },
    { label: "Jobs", href: "/jobs" }, 
    { label: "Offers", href: "/offers" },
    { label: "Workplace Index", href: "/workplace-index" }, 
    { label: "Community", href: "/community" },
    { label: "Tools", href: "/tools", hasArrow: true },
  ];

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      {/* Top Brand Stripe */}
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center text-white font-black text-lg">
            D
          </div>
          <span className="text-xl font-black text-slate-900 tracking-tight">TalentDash</span>
        </Link>

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
      <div className="w-full bg-slate-50/50 border-t border-gray-100 overflow-x-auto scrollbar-none">
        <div className="max-w-7xl mx-auto px-6 h-11 flex items-center gap-6 text-xs font-medium text-slate-600 whitespace-nowrap">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`h-11 flex items-center gap-0.5 transition-all relative ${
                  isActive
                    ? "text-brand font-bold border-b-2 border-brand"
                    : "hover:text-slate-900 text-slate-500 font-medium"
                }`}
              >
                {link.label}
                {link.hasArrow && <span className="text-[10px] opacity-50">▼</span>}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}