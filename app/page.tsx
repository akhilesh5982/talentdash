import Link from 'next/link'

export default function Home() {
  const stats = [
    { label: 'Salary Records', value: '500+' },
    { label: 'Companies Tracked', value: '50+' },
    { label: 'Median TC', value: '₹42L' },
    { label: 'Cities Covered', value: '12+' },
  ]

  const features = [
    {
      icon: '📊',
      title: 'Salary Explorer',
      desc: 'Filter by company, role, level, and location. Sort by base, stock, or total comp. Every record is structured and level-tagged.',
      href: '/salaries',
      cta: 'Browse Salaries',
    },
    {
      icon: '⚖️',
      title: 'Side-by-Side Compare',
      desc: 'Pick any two salary records and instantly see the delta across every comp component — base, bonus, stock, total.',
      href: '/compare',
      cta: 'Compare Records',
    },
    {
      icon: '🏢',
      title: 'Company Profiles',
      desc: 'Median TC, level distribution, and full salary breakdown for every company. Know what Google L5 actually pays in Bengaluru.',
      href: '/salaries',
      cta: 'View Companies',
    },
  ]

  const companies = ['Google', 'Amazon', 'Microsoft', 'Meta', 'Flipkart', 'Razorpay', 'Zepto', 'NVIDIA']

  return (
    <main className="min-h-screen bg-[#F7F7F7]">

      {/* Hero */}
      <div className="bg-white border-b border-[#EBEBEB]">
        <div className="max-w-5xl mx-auto px-4 py-20 text-center">
          <span className="inline-flex items-center gap-1.5 bg-[#FF5A5F]/10 text-[#FF5A5F] text-xs font-semibold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wide">
            ● Live — Verified Salary Data for India
          </span>
          <h1 className="text-[40px] font-bold text-[#222222] mb-4 leading-[1.1] tracking-tight">
            Know exactly what you're worth.<br />
            <span className="text-[#FF5A5F]">Real salaries.</span> Real levels. Real companies.
          </h1>
          <p className="text-lg text-[#717171] mb-10 max-w-2xl mx-auto leading-relaxed">
            TalentDash is India's compensation intelligence platform — structured, level-tagged salary data from software engineers, PMs, and analysts at top companies.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/salaries"
              className="bg-[#FF5A5F] text-white px-7 py-3 rounded-lg font-semibold hover:bg-[#e04f54] transition-colors text-sm">
              Browse Salaries
            </Link>
            <Link href="/compare"
              className="bg-white border border-[#EBEBEB] text-[#222222] px-7 py-3 rounded-lg font-semibold hover:bg-[#F2F2F2] transition-colors text-sm">
              Compare Offers
            </Link>
          </div>

          {/* Company pills */}
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            <span className="text-xs text-[#717171] self-center mr-1">Data from:</span>
            {companies.map(c => (
              <span key={c} className="bg-[#F7F7F7] border border-[#EBEBEB] text-[#484848] text-xs font-medium px-3 py-1 rounded-full">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-white border-b border-[#EBEBEB]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-4 divide-x divide-[#EBEBEB]">
            {stats.map(stat => (
              <div key={stat.label} className="py-6 text-center">
                <p className="text-2xl font-bold text-[#222222]">{stat.value}</p>
                <p className="text-xs text-[#717171] mt-0.5 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How it works */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="mb-10">
          <p className="text-xs font-semibold text-[#FF5A5F] uppercase tracking-widest mb-2">What TalentDash does</p>
          <h2 className="text-[28px] font-bold text-[#222222]">Compensation intelligence, not salary guesses.</h2>
          <p className="text-[#717171] mt-2 max-w-xl">Every record is structured, level-tagged, and normalised. No broad ranges. No opinion columns. Just data you can act on.</p>
        </div>

        <div className="grid grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div key={f.title} className="bg-white rounded-xl border border-[#EBEBEB] p-6 flex flex-col gap-4 hover:border-[#FF5A5F]/30 hover:shadow-sm transition-all">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{f.icon}</span>
                <span className="text-xs font-bold text-[#717171] uppercase tracking-widest">0{i + 1}</span>
              </div>
              <div>
                <h3 className="font-semibold text-[#222222] text-base mb-1">{f.title}</h3>
                <p className="text-sm text-[#717171] leading-relaxed">{f.desc}</p>
              </div>
              <Link href={f.href}
                className="mt-auto inline-flex items-center gap-1 text-[#FF5A5F] text-sm font-semibold hover:gap-2 transition-all">
                {f.cta} →
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Banner */}
      <div className="max-w-5xl mx-auto px-4 pb-20">
        <div className="bg-[#222222] rounded-2xl p-10 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Got an offer? See if it's fair.</h2>
          <p className="text-[#717171] mb-6 text-sm">Compare your offer against real data from people who work there.</p>
          <Link href="/salaries"
            className="inline-block bg-[#FF5A5F] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#e04f54] transition-colors text-sm">
            Check My Offer
          </Link>
        </div>
      </div>

    </main>
  )
}