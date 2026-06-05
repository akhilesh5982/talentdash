"use client";

export default function CompanyReviewsDashboard() {
  // Mock dataset matching image_97adc6.png
  const topRatedCompanies = [
    {
      name: "Google",
      rating: "4.3",
      reviewsCount: "12.4K reviews",
      metrics: { workLife: "4.4", compBenefits: "4.2", culture: "4.5" },
      tag: "★ Best Work Culture 2026",
      tagStyles: "text-emerald-600 bg-emerald-50 border-emerald-100"
    },
    {
      name: "Microsoft",
      rating: "4.2",
      reviewsCount: "9.8K reviews",
      metrics: { workLife: "4", compBenefits: "4.1", culture: "4.3" },
      tag: "★ Top Companies 2026",
      tagStyles: "text-blue-600 bg-blue-50 border-blue-100"
    },
    {
      name: "Apple",
      rating: "4.1",
      reviewsCount: "8.2K reviews",
      metrics: { workLife: "3.8", compBenefits: "4.3", culture: "4" },
      tag: "★ Most Loved Workplace",
      tagStyles: "text-purple-600 bg-purple-50 border-purple-100"
    },
    {
      name: "Amazon",
      rating: "3.8",
      reviewsCount: "14.2K reviews",
      metrics: { workLife: "3", compBenefits: "4.2", culture: "3.7" },
      tag: "★ Trending Choice",
      tagStyles: "text-amber-600 bg-amber-50 border-amber-100"
    }
  ];

  // Tags list matching what professionals say container inside image_97adc6.png
  const professionalTags = [
    "Great work culture", "Learning & growth", "Good WLB",
    "Supportive management", "High compensation", "Innovative projects",
    "Career growth", "Flexible work", "Inclusive environment",
    "Strong brand value", "Job security", "Work pressure",
    "Long working hours", "Heavy bureaucracy", "Toxic culture"
  ];

  // Feed list matching data strings inside image_97ada1.png
  const latestReviews = [
    {
      company: "Google",
      rating: "4.5",
      role: "Software Engineer",
      location: "Bengaluru",
      time: "2h ago",
      headline: "Great learning culture, amazing colleagues, strong brand value.",
      pros: "Free food, solid health benefits, smart colleagues, and standard tooling make developer experience seamless.",
      cons: "Promotion cycles can be extremely slow and corporate politics are rising."
    },
    {
      company: "Microsoft",
      rating: "4.2",
      role: "Product Manager",
      location: "Hyderabad",
      time: "5h ago",
      headline: "Work-life balance, great benefits, supportive management.",
      pros: "Excellent work-life balance, great benefits, supportive management.",
      cons: "Bureaucracy and slow decision making processes."
    },
    {
      company: "Amazon",
      rating: "3.8",
      role: "SDE II",
      location: "Bengaluru",
      time: "1d ago",
      headline: "High compensation, career growth opportunities.",
      pros: "High compensation, career growth opportunities.",
      cons: "Work pressure, long hours, heavy bureaucracy."
    }
  ];

  return (
    <div className="w-full bg-[#f8f9fa] min-h-screen py-10 px-4 sm:px-6 lg:px-8 font-sans antialiased text-slate-800">
      <div className="max-w-7xl mx-auto space-y-10">

        {/* 1. HERO BANNER BOX (image_97ade8.jpg) */}
        <div className="w-full bg-gradient-to-br from-purple-800 via-purple-900 to-indigo-950 rounded-2xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xs">
          <div className="relative z-10 space-y-5 max-w-2xl">
            <span className="bg-white/10 text-white border border-white/10 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md">
              ☆ Company Reviews
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Real reviews from real professionals.
            </h1>
            <p className="text-xs sm:text-sm text-purple-100 font-medium leading-relaxed">
              Discover honest insights about companies, work culture, salaries, and more. Make informed decisions about where you work next.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button className="bg-white text-purple-900 hover:bg-slate-50 transition-all px-5 py-2.5 rounded-xl font-black text-xs tracking-wider cursor-pointer shadow-3xs">
                EXPLORE ALL COMPANIES ›
              </button>
              <button className="bg-white/10 hover:bg-white/15 text-white border border-white/10 transition-all px-5 py-2.5 rounded-xl font-black text-xs tracking-wider cursor-pointer flex items-center gap-1.5">
                📝 WRITE A REVIEW
              </button>
            </div>
          </div>
        </div>

        {/* 2. STATS GRID ROW (image_97ade8.jpg) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Reviews", value: "2.4M+", sub: "From verified professionals" },
            { label: "Companies", value: "14.7K+", sub: "Reviewed across industries" },
            { label: "Avg. Satisfaction", value: "4.1★", sub: "Across all companies" },
            { label: "Verified Reviews", value: "96%", sub: "From real professionals" }
          ].map((stat, i) => (
            <div key={i} className="bg-white border border-slate-150 rounded-xl p-4 shadow-3xs space-y-0.5">
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-wider block">{stat.label}</span>
              <span className="text-xl sm:text-2xl font-black text-slate-900 block tracking-tight">{stat.value}</span>
              <span className="text-[10px] text-slate-400 font-medium block">{stat.sub}</span>
            </div>
          ))}
        </div>

        {/* 3. TWO-COLUMN LAYOUT: TOP RATED & WHAT PROFESSIONALS SAY (image_97adc6.png) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          
          {/* Top Rated Left Block */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider">Top Rated Companies</h3>
              <span className="text-[11px] font-black text-rose-500 hover:underline cursor-pointer">View all ›</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {topRatedCompanies.map((comp, idx) => (
                <div key={idx} className="bg-white border border-slate-150 rounded-xl p-5 shadow-3xs flex flex-col justify-between space-y-4 hover:border-slate-300 transition-all group cursor-pointer relative">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-sm font-black text-slate-900">{comp.name}</h4>
                        <div className="flex items-center gap-1 text-xs font-bold text-slate-500 mt-0.5">
                          <span className="text-amber-500 font-black">{comp.rating} ★</span>
                          <span className="text-slate-300">({comp.reviewsCount})</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 border-t border-b border-slate-50 py-2.5 text-center">
                      <div>
                        <span className="text-[9px] text-slate-400 font-bold block">Work Life</span>
                        <span className="text-xs font-black text-slate-800">{comp.metrics.workLife}</span>
                      </div>
                      <div>
                        <span className="text-[9px] text-slate-400 font-bold block">Comp & Benefits</span>
                        <span className="text-xs font-black text-slate-800">{comp.metrics.compBenefits}</span>
                      </div>
                      <div>
                        <span className="text-[9px] text-slate-400 font-bold block">Culture</span>
                        <span className="text-xs font-black text-slate-800">{comp.metrics.culture}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[10px]">
                    <span className={`px-2 py-0.5 rounded-md border text-[9px] font-black uppercase ${comp.tagStyles}`}>
                      {comp.tag}
                    </span>
                    <span className="text-slate-300 group-hover:text-slate-500 transition-colors font-bold text-xs">›</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Keyword Pill Cloud Right Sidebar */}
          <div className="bg-white border border-slate-150 rounded-2xl p-5 shadow-3xs space-y-4">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider border-b border-slate-50 pb-2">
              What Professionals Say
            </h3>
            <div className="flex flex-wrap gap-2">
              {professionalTags.map((tag, i) => (
                <span 
                  key={i} 
                  className="bg-slate-50 hover:bg-slate-100 border border-slate-200/60 text-[10px] text-slate-600 font-bold px-2.5 py-1 rounded-lg cursor-pointer transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* 4. TWO-COLUMN LAYOUT: LATEST FEED & HIGHLIGHT METRICS (image_97ada1.png) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          
          {/* Review Feed Timeline (Left Side) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider">Latest Reviews</h3>
              <span className="text-[11px] font-black text-rose-500 hover:underline cursor-pointer">View all reviews ›</span>
            </div>

            <div className="space-y-4">
              {latestReviews.map((rev, i) => (
                <div key={i} className="bg-white border border-slate-150 rounded-xl p-5 shadow-3xs space-y-3.5">
                  <div className="flex justify-between items-start">
                    <div className="space-y-0.5">
                      <h4 className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                        {rev.company} 
                        <span className="text-amber-500 font-bold font-mono text-[11px]">{rev.rating} ★</span>
                      </h4>
                      <span className="text-[10px] text-slate-400 font-bold block">
                        {rev.role} • {rev.location}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 font-bold">{rev.time}</span>
                  </div>

                  <h5 className="text-xs sm:text-sm font-black text-slate-800 italic">
                    "{rev.headline}"
                  </h5>

                  <div className="space-y-2 text-xs font-medium leading-relaxed pt-1.5 border-t border-slate-50">
                    <div className="flex items-start gap-2 text-slate-700">
                      <span className="text-emerald-500 text-xs shrink-0">👍 Pros:</span>
                      <p>{rev.pros}</p>
                    </div>
                    <div className="flex items-start gap-2 text-slate-700">
                      <span className="text-rose-500 text-xs shrink-0">👎 Cons:</span>
                      <p>{rev.cons}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Average Insights Sidebar Card */}
          <div className="bg-white border border-slate-150 rounded-2xl p-6 shadow-3xs space-y-5 text-center">
            <div className="space-y-1.5">
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-wider text-left">Review Highlights</h3>
              <div className="pt-3">
                <span className="text-4xl font-black text-slate-900 font-mono tracking-tight">4.2<span className="text-sm text-slate-400 font-normal"> /5</span></span>
              </div>
              <div className="text-amber-400 text-sm font-black tracking-wide">★★★★☆</div>
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-wider block">Average Work Life Score</span>
              <span className="text-[10px] text-slate-400 font-medium block">Based on 128K reviews</span>
            </div>

            <div className="space-y-4 text-left border-t border-slate-50 pt-4 text-[11px]">
              <div>
                <span className="text-[9px] font-black text-emerald-600 uppercase tracking-wider block mb-2">Top Positives</span>
                <div className="space-y-2 font-bold text-slate-600">
                  <div className="flex justify-between items-center"><span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"/>Flexible work hours</span><span className="font-mono text-slate-500">28%</span></div>
                  <div className="flex justify-between items-center"><span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"/>Good work life balance</span><span className="font-mono text-slate-500">24%</span></div>
                  <div className="flex justify-between items-center"><span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"/>Supportive team</span><span className="font-mono text-slate-500">18%</span></div>
                </div>
              </div>

              <div className="pt-2">
                <span className="text-[9px] font-black text-rose-600 uppercase tracking-wider block mb-2">Top Concerns</span>
                <div className="space-y-2 font-bold text-slate-600">
                  <div className="flex justify-between items-center"><span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-rose-500"/>Long working hours</span><span className="font-mono text-slate-500">32%</span></div>
                  <div className="flex justify-between items-center"><span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-rose-500"/>High work pressure</span><span className="font-mono text-slate-500">26%</span></div>
                  <div className="flex justify-between items-center"><span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-rose-500"/>Weekend expectations</span><span className="font-mono text-slate-500">15%</span></div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 5. BOTTOM INTERACTIVE CALL-TO-ACTION SECTION (image_97ad82.png) */}
        <div className="w-full bg-gradient-to-r from-purple-800 to-indigo-950 rounded-2xl p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-3xs">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-base font-black tracking-tight">Share your workplace experience</h3>
            <p className="text-xs text-purple-200 font-medium">Write a review to help other tech professionals navigate their career search.</p>
          </div>
          <button className="bg-white text-purple-900 hover:bg-slate-50 active:scale-98 transition-all px-5 py-2.5 rounded-xl font-black text-xs tracking-wider shrink-0 cursor-pointer shadow-3xs flex items-center gap-1.5">
            📝 WRITE A REVIEW
          </button>
        </div>

        {/* SYSTEM REUSE COPYRIGHT BLOCK */}
        <div className="text-center text-[10px] text-slate-400 font-bold space-y-1 pt-6 border-t border-slate-200/50">
          <p>© 2026 TalentDash. Real Leveling. Structured Data.</p>
          <p className="font-medium opacity-60">All rights reserved. TalentDash is a career intelligence platform designed to serve structured, action-ready data at internet scale.</p>
        </div>

      </div>
    </div>
  );
}