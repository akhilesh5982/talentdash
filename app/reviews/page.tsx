"use client";

import { useState } from "react";
import Link from "next/link";

export default function ReviewsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const sideFilters = [
    { id: "all", label: "All Reviews", count: "12,450" },
    { id: "culture", label: "Culture & Values", count: "4,210" },
    { id: "wlb", label: "Work-Life Balance", count: "3,890" },
    { id: "comp", label: "Compensation & Benefits", count: "2,350" },
    { id: "mgmt", label: "Senior Management", count: "2,000" },
  ];

  const reviewFeed = [
    {
      company: "Google",
      role: "Senior Software Engineer (L5)",
      location: "Bengaluru, India",
      date: "2 days ago",
      rating: 4.5,
      title: "Incredible smart peers, but bureaucracy is slowly rising",
      wlb: "Excellent",
      culture: "Highly collaborative environment with massive scale, though speed of delivery has impacted promotions.",
      pros: "Free world-class catering, unmatched health benefits, highly flexible hybrid setups.",
      cons: "Middle management layer can complicate alignment during OKR planning phases.",
    },
    {
      company: "Amazon",
      role: "Product Manager-2",
      location: "Hyderabad, India",
      date: "1 week ago",
      rating: 3.8,
      title: "Extreme ownership, fast pacing, highly data-driven",
      wlb: "Strenuous",
      culture: "Customer obsession drives everything. Execution loop is lightning fast if you adapt quickly.",
      pros: "Fast career trajectory, massive business scale ownership, great stock performance benefits.",
      cons: "On-call rotations and baseline targets can lead to burnout depending heavily on org leadership.",
    },
    {
      company: "Meta",
      role: "Data Scientist",
      location: "Remote, US",
      date: "2 weeks ago",
      rating: 4.3,
      title: "Top-tier autonomy and best-in-class tech stacks",
      wlb: "Good",
      culture: "Engineers move fast with very little red tape. Absolute high meritocracy bar.",
      pros: "Incredible sign-on bonuses, massive data visibility, brilliant tooling ecosystem.",
      cons: "Bi-annual performance calibrations bring heavy calibration pressure.",
    }
  ];

  return (
    <div className="space-y-8 pb-16">
      
      {/* 1. Header Banner Panel */}
      <div className="bg-white rounded-2xl border border-slate-100 p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow-2xs">
        <div>
          <span className="text-[10px] font-extrabold text-[#00a86b] bg-emerald-50 px-2 py-0.5 rounded-md tracking-wider uppercase">
            Workplace Intelligence
          </span>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight mt-2">
            Verified Company <span className="text-[#00a86b]">Reviews</span>
          </h1>
          <p className="text-slate-500 text-xs mt-0.5">
            Unfiltered sentiment analyses and real data points from employees inside tech organizations.
          </p>
        </div>
        <button className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-all shadow-xs">
          Anonymous Review Write ✍️
        </button>
      </div>

      {/* 2. Main Double-Column Layout Grid (Matches image_998702.jpg structure) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* LEFT COLUMN: Metric Analytics Sidebar (4 Cols) */}
        <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
          
          {/* Section A: Active Categories Filters */}
          <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-2xs">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider mb-3 px-1">Filter Categories</h3>
            <div className="space-y-1">
              {sideFilters.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveFilter(item.id)}
                  className={`w-full flex items-center justify-between p-2.5 rounded-xl text-xs font-bold transition-all ${
                    activeFilter === item.id
                      ? "bg-emerald-50 text-[#00a86b]"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span>{item.label}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-md ${
                    activeFilter === item.id ? "bg-emerald-100/60" : "bg-slate-100 text-slate-400"
                  }`}>{item.count}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Section B: Global Ratings Scorecard Grid */}
          <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-2xs space-y-4">
            <div>
              <h3 className="text-xs font-black text-slate-900 uppercase tracking-wider">Platform Benchmark</h3>
              <p className="text-[10px] text-slate-400 font-medium">Weighted summary rating matrix</p>
            </div>
            
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-black text-slate-900 tracking-tight">4.2</span>
              <span className="text-xs font-bold text-slate-400">/ 5.0 Global Rating</span>
            </div>

            {/* Simulated Progressive Rating Bars */}
            <div className="space-y-2 pt-2">
              {[
                { stars: "5★", progress: "w-4/5 bg-[#00a86b]" },
                { stars: "4★", progress: "w-3/5 bg-emerald-400" },
                { stars: "3★", progress: "w-1/4 bg-slate-200" },
                { stars: "2★", progress: "w-12 bg-slate-200" },
                { stars: "1★", progress: "w-4 bg-slate-200" },
              ].map((row, idx) => (
                <div key={idx} className="flex items-center gap-3 text-[11px] font-bold text-slate-500">
                  <span className="w-6 text-left">{row.stars}</span>
                  <div className="flex-grow h-2 bg-slate-50 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${row.progress}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Detailed Feed Streams (8 Cols) */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Feed Header Sorting Context Utility bar */}
          <div className="bg-white border border-slate-100 rounded-xl px-4 py-3 flex items-center justify-between shadow-2xs text-xs font-bold text-slate-500">
            <span>Showing verified employee reviews</span>
            <div className="flex gap-4 text-slate-400">
              <span className="text-[#00a86b] cursor-pointer">Most Recent</span>
              <span className="hover:text-slate-800 cursor-pointer">Highest Rated</span>
            </div>
          </div>

          {/* Core Feed List Stream */}
          <div className="space-y-5">
            {reviewFeed.map((rev, idx) => (
              <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-2xs space-y-4 hover:border-slate-200/80 transition-colors">
                
                {/* Row 1: Header profile indicator meta */}
                <div className="flex items-start justify-between border-b border-slate-50 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-slate-900 text-white font-black text-sm flex items-center justify-center shadow-xs">
                      {rev.company[0]}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="text-sm font-black text-slate-900">{rev.company}</h2>
                        <span className="text-[10px] bg-emerald-50 text-[#00a86b] border border-emerald-100 font-extrabold px-1.5 py-0.5 rounded-md">
                          ★ {rev.rating}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 font-semibold mt-0.5">
                        {rev.role} • <span className="text-slate-500">{rev.location}</span>
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400">{rev.date}</span>
                </div>

                {/* Row 2: Title and Summary Quote context */}
                <div className="space-y-1">
                  <h3 className="text-xs font-black text-slate-800 leading-snug">
                    "{rev.title}"
                  </h3>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-0.5">Culture Overview:</span>
                    {rev.culture}
                  </p>
                </div>

                {/* Row 3: Pros and Cons Split Boxes (Matches target view styling exactly) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="bg-emerald-50/20 border border-emerald-100/50 p-3 rounded-xl space-y-1">
                    <span className="text-[10px] font-black text-emerald-700 uppercase tracking-wide flex items-center gap-1">
                      ▲ Pros
                    </span>
                    <p className="text-[11px] text-slate-600 font-medium leading-relaxed">{rev.pros}</p>
                  </div>
                  <div className="bg-rose-50/20 border border-rose-100/50 p-3 rounded-xl space-y-1">
                    <span className="text-[10px] font-black text-rose-700 uppercase tracking-wide flex items-center gap-1">
                      ▼ Cons
                    </span>
                    <p className="text-[11px] text-slate-600 font-medium leading-relaxed">{rev.cons}</p>
                  </div>
                </div>

                {/* Row 4: Review Footer Metadata Tags indicators bar */}
                <div className="pt-3 border-t border-slate-50 flex items-center justify-between text-[10px] text-slate-400 font-semibold">
                  <span>Work-Life Balance: <span className="text-slate-800 font-bold">{rev.wlb}</span></span>
                  <div className="flex gap-3 text-slate-300">
                    <button className="hover:text-slate-500 flex items-center gap-1">👍 Helpful</button>
                    <span>|</span>
                    <button className="hover:text-slate-500 flex items-center gap-1">🏳️ Report</button>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}