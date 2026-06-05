"use client";

export default function TechJobBoard() {
  // Mock listing matching image_9812e0.png & image_9812bf.png datasets
  const activeJobs = [
    {
      title: "Senior Software Engineer - Backend (Go/Java)",
      company: "Google",
      location: "Bengaluru, India",
      type: "Full-time",
      range: "₹40L - ₹65L",
      posted: "Posted 2 days ago",
      isHighlighted: true
    },
    {
      title: "Software Engineer II - React / TypeScript",
      company: "Razorpay",
      location: "Bengaluru, India",
      type: "Full-time",
      range: "₹24L - ₹38L",
      posted: "Posted 3 days ago",
      isHighlighted: false
    },
    {
      title: "Staff Machine Learning Specialist",
      company: "Meta",
      location: "Menlo Park, CA",
      type: "Full-time",
      range: "$220k - $310k",
      posted: "Posted 4 days ago",
      isHighlighted: false
    },
    {
      title: "Cloud Solutions SRE",
      company: "Amazon",
      location: "Hyderabad, India",
      type: "Full-time",
      range: "₹22L - ₹36L",
      posted: "Posted 1 week ago",
      isHighlighted: false
    },
    {
      title: "Full-Stack Web Architect",
      company: "Zepto",
      location: "Mumbai, India",
      type: "Full-time",
      range: "₹30L - ₹48L",
      posted: "Posted 1 week ago",
      isHighlighted: false
    }
  ];

  return (
    <div className="w-full bg-[#f8f9fa] min-h-screen py-10 px-4 sm:px-6 lg:px-8 font-sans antialiased text-slate-800">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* HEADER SECTION PANEL */}
        <div className="space-y-1.5">
          <span className="text-rose-500 text-[10px] font-black uppercase tracking-wider flex items-center gap-1">
            💼 Job Postings
          </span>
          <h1 className="text-3xl font-black tracking-tight text-slate-900">
            Tech Job Board
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Find verified engineering, product, and tech positions at leading companies. Align your skills with real salary bands.
          </p>
        </div>

        {/* TWO COLUMN CONTENT MATRIX */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          
          {/* LEFT SIDE: JOBS LIST CONTAINER */}
          <div className="lg:col-span-2 space-y-4">
            
            {/* COUNTER HEADER STRIP */}
            <div className="bg-white border border-slate-150 rounded-xl px-5 py-3 shadow-3xs">
              <h2 className="text-xs font-black text-slate-400 uppercase tracking-wider">
                Open Positions (5)
              </h2>
            </div>

            {/* INTERACTIVE CARDS RENDER LOOP */}
            {activeJobs.map((job, idx) => (
              <div 
                key={idx} 
                className={`bg-white border rounded-xl p-5 shadow-3xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all hover:border-slate-300 ${
                  job.isHighlighted ? "border-rose-400 ring-1 ring-rose-400/10" : "border-slate-150"
                }`}
              >
                <div className="space-y-1.5">
                  <h3 className="text-sm font-black text-slate-900 hover:text-rose-500 cursor-pointer transition-colors">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-slate-500">
                    <span className="text-slate-800">{job.company}</span>
                    <span className="text-slate-300">•</span>
                    <span className="flex items-center gap-1">📍 {job.location}</span>
                    <span className="text-slate-300">•</span>
                    <span>{job.type}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end shrink-0">
                  <div className="text-left sm:text-right">
                    <span className="text-[10px] text-slate-400 uppercase font-black tracking-wider block">Est. Range</span>
                    <span className="text-sm font-black text-rose-500 font-mono tracking-tight block">
                      {job.range}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium font-mono block">
                      {job.posted}
                    </span>
                  </div>
                  <button className="bg-rose-500 hover:bg-rose-600 text-white font-bold text-xs px-4 py-2 rounded-lg transition-all active:scale-98 shadow-3xs cursor-pointer">
                    Apply
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE: SIDEBAR CAREER ADVICE PANEL */}
          <div className="bg-white border border-slate-150 rounded-2xl p-5 shadow-3xs space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-50">
              <span className="text-slate-400 text-sm">🧳</span>
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider">
                Career Advice
              </h3>
            </div>
            
            <div className="space-y-4 text-xs font-bold text-slate-600 leading-relaxed">
              <div className="flex items-start gap-2.5">
                <span className="text-rose-500 text-xs shrink-0 mt-0.5">📌</span>
                <p>Always negotiate stock grants based on recent levels.fyi data points.</p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-rose-500 text-xs shrink-0 mt-0.5">📌</span>
                <p>India remote work stipends are standard at ₹30k - ₹50k for office setup.</p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-rose-500 text-xs shrink-0 mt-0.5">📌</span>
                <p>Leverage multiple offers to push for sign-on cash bonuses.</p>
              </div>
            </div>
          </div>

        </div>

        {/* SYSTEM REUSE COPYRIGHT SUBSECTION STRIPE */}
        <div className="text-center text-[10px] text-slate-400 font-bold space-y-1 pt-10 border-t border-slate-200/50">
          <p>© 2026 TalentDash. Real Leveling. Structured Data.</p>
          <p className="font-medium opacity-60">All rights reserved. TalentDash is a career intelligence platform designed to serve structured, action-ready data at internet scale.</p>
        </div>

      </div>
    </div>
  );
}