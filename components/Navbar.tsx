import Link from "next/link";

export function Navbar() {
  return (
    <nav className="border-b border-gray-100 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          {/* Logo Brand Frame */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <span className="bg-gray-900 text-white text-xs font-black tracking-wider px-2.5 py-1 rounded-md uppercase">
                TalentDash
              </span>
              <span className="text-[10px] bg-rose-50 text-rose-600 font-bold px-1.5 py-0.2 rounded border border-rose-100">
                IN
              </span>
            </Link>

            {/* Core Route Links */}
            <div className="hidden md:flex items-center gap-6 text-xs font-bold text-gray-500">
              <Link href="/salaries" className="hover:text-gray-900 transition-colors">
                Salaries
              </Link>
              <Link href="/interviews" className="hover:text-gray-900 transition-colors">
                Interviews
              </Link>
              <Link href="/reviews" className="hover:text-gray-900 transition-colors">
                Reviews
              </Link>
              <Link href="/tools" className="hover:text-gray-900 transition-colors">
                Tools
              </Link>
            </div>
          </div>

          {/* Action CTA Alignment */}
          <div className="flex items-center gap-4">
            <Link 
              href="/contribute" 
              className="text-xs bg-gray-900 hover:bg-gray-800 text-white font-bold px-4 py-2 rounded-lg transition-colors shadow-sm"
            >
              Contribute Salary
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
