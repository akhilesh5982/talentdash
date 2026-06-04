import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F7F7]">
      {/* Hero */}
      <div className="max-w-5xl mx-auto px-4 py-20 text-center">
        <span className="inline-block bg-[#FF5A5F]/10 text-[#FF5A5F] text-sm font-medium px-3 py-1 rounded-full mb-6">
          Verified Salary Data for India
        </span>
        <h1 className="text-5xl font-bold text-[#222222] mb-4 leading-tight">
          Know Your Worth.<br />Browse Real Salaries.
        </h1>
        <p className="text-xl text-[#717171] mb-10 max-w-2xl mx-auto">
          TalentDash aggregates verified compensation data from software engineers, PMs, and analysts across top Indian and global companies.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/salaries"
            className="bg-[#FF5A5F] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#e04f54] transition-colors">
            Browse Salaries
          </Link>
          <Link href="/compare"
            className="bg-white border border-[#EBEBEB] text-[#222222] px-8 py-3 rounded-xl font-semibold hover:bg-[#F2F2F2] transition-colors">
            Compare Records
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-5xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-3 gap-6">
          {[
            { label: 'Salary Records', value: '500+' },
            { label: 'Companies', value: '50+' },
            { label: 'Avg. TC Tracked', value: '₹42L' },
          ].map(stat => (
            <div key={stat.label} className="bg-white rounded-xl border border-[#EBEBEB] p-6 text-center">
              <p className="text-3xl font-bold text-[#0369A1]">{stat.value}</p>
              <p className="text-sm text-[#717171] mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="max-w-5xl mx-auto px-4 pb-24">
        <h2 className="text-2xl font-bold text-[#222222] mb-8 text-center">Everything you need to negotiate better</h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            {
              title: 'Salary Explorer',
              desc: 'Filter by company, role, level, and location. Sort by base, stock, or total comp.',
              href: '/salaries',
              cta: 'Explore →',
            },
            {
              title: 'Side-by-Side Compare',
              desc: 'Pick any two salary records and instantly see the delta across every comp component.',
              href: '/compare',
              cta: 'Compare →',
            },
            {
              title: 'Company Profiles',
              desc: 'Deep-dive into compensation trends at specific companies across roles and levels.',
              href: '/salaries',
              cta: 'Browse →',
            },
          ].map(f => (
            <div key={f.title} className="bg-white rounded-xl border border-[#EBEBEB] p-6 flex flex-col gap-3">
              <h3 className="font-semibold text-[#222222] text-lg">{f.title}</h3>
              <p className="text-sm text-[#717171] flex-1">{f.desc}</p>
              <Link href={f.href} className="text-[#FF5A5F] text-sm font-medium hover:underline">
                {f.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}