"use client";

import { useState } from "react";

export default function WorkplaceIndexPage() {
  const [activeCategory, setActiveCategory] = useState("Overall");

  // Top High-Level Metrics Stats Array
  const metrics = [
    { value: "500+", label: "Companies ranked", detail: "Across 50+ countries", icon: "📊", iconBg: "bg-indigo-50 text-indigo-600" },
    { value: "15M+", label: "Verified data points", detail: "From real professionals", icon: "🛡️", iconBg: "bg-emerald-50 text-emerald-600" },
    { value: "30+", label: "Ranking categories", detail: "Updated monthly", icon: "⭐", iconBg: "bg-amber-50 text-amber-600" },
    { value: "100%", label: "Transparent methodology", detail: "No paid placements", icon: "🔒", iconBg: "bg-sky-50 text-sky-600" }
  ];

  // Popular Ranking Lists Matrix Data Container
  const rankingLists = [
    {
      title: "Top 100 Companies",
      subtitle: "Overall",
      icon: "💼",
      badgeColor: "bg-teal-50 text-teal-700 border-teal-100",
      companies: [
        { rank: 1, name: "Google", logo: "🤖", color: "text-blue-500" },
        { rank: 2, name: "Microsoft", logo: "🪟", color: "text-sky-500" },
        { rank: 3, name: "Apple", logo: "🍏", color: "text-slate-800" }
      ]
    },
    {
      title: "Top 100 Companies",
      subtitle: "for Millennials",
      icon: "👥",
      badgeColor: "bg-rose-50 text-rose-700 border-rose-100",
      companies: [
        { rank: 1, name: "Google", logo: "🤖", color: "text-blue-500" },
        { rank: 2, name: "Microsoft", logo: "🪟", color: "text-sky-500" },
        { rank: 3, name: "Netflix", logo: "🍿", color: "text-red-600" }
      ]
    },
    {
      title: "Top 100 Companies",
      subtitle: "for Gen Z",
      icon: "🚀",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-100",
      companies: [
        { rank: 1, name: "NVIDIA", logo: "🟢", color: "text-emerald-600" },
        { rank: 2, name: "Google", logo: "🤖", color: "text-blue-500" },
        { rank: 3, name: "Spotify", logo: "🎵", color: "text-green-500" }
      ]
    },
    {
      title: "Top 100 Best Paying",
      subtitle: "Companies",
      icon: "💳",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-100",
      companies: [
        { rank: 1, name: "NVIDIA", logo: "🟢", color: "text-emerald-600" },
        { rank: 2, name: "Google", logo: "🤖", color: "text-blue-500" },
        { rank: 3, name: "Microsoft", logo: "🪟", color: "text-sky-500" }
      ]
    },
    {
      title: "Top 100 for",
      subtitle: "Work-Life Balance",
      icon: "⚖️",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-100",
      companies: [
        { rank: 1, name: "Salesforce", logo: "☁️", color: "text-cyan-500" },
        { rank: 2, name: "Microsoft", logo: "🪟", color: "text-sky-500" },
        { rank: 3, name: "SAP", logo: "🔷", color: "text-blue-700" }
      ]
    },
    {
      title: "Top 100 Most Loved",
      subtitle: "Workplaces",
      icon: "❤️",
      badgeColor: "bg-pink-50 text-pink-700 border-pink-100",
      companies: [
        { rank: 1, name: "Salesforce", logo: "☁️", color: "text-cyan-500" },
        { rank: 2, name: "HubSpot", logo: "🎯", color: "text-orange-500" },
        { rank: 3, name: "Intuit", logo: "🔵", color: "text-blue-600" }
      ]
    }
  ];

  // Explore By Industry Sub-system Data Setup
  const industries = [
    { name: "IT Services", desc: "Top companies", icons: ["🤖", "🪟", "💻"] },
    { name: "BFSI", desc: "Top companies", icons: ["🏦", "💳", "📈"] },
    { name: "FMCG", desc: "Top companies", icons: ["🥤", "🧼", "📦"] },
    { name: "Consumer Services", desc: "Top companies", icons: ["🍔", "🚗", "🏠"] },
    { name: "E-Commerce", desc: "Top companies", icons: ["🛒", "📦", "🚚"] },
    { name: "Healthcare", desc: "Top companies", icons: ["🏥", "🧪", "💊"] },
    { name: "Travel & Hospitality", desc: "Top companies", icons: ["✈️", "🏨", "🗺️"] },
    { name: "Manufacturing", desc: "Top companies", icons: ["🏭", "⚙️", "🔧"] }
  ];

  return (
    <div className="w-full bg-[#f8f9fa] min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans antialiased text-slate-800">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* HEADER BRANDING VIEW BLOCK */}
        <div className="bg-white border border-slate-150/80 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 shadow-2xs">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-indigo-600 rounded-xl flex items-center justify-center text-white text-2xl shadow-md shrink-0">
              🏆
            </div>
            <div className="space-y-1.5">
              <span className="bg-indigo-50 border border-indigo-100 text-indigo-700 text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md">
                Workplace Index
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                TalentDash Workplace Index
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 font-medium max-w-2xl leading-relaxed">
                Data-driven rankings of companies, industries and workplaces based on what global professionals value the most.
              </p>
            </div>
          </div>
          <button className="shrink-0 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 text-xs font-black px-5 py-3 rounded-xl shadow-2xs transition-all flex items-center justify-center gap-2 group cursor-pointer">
            <span>Explore all rankings</span>
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </button>
        </div>

        {/* HIGH REVENUE METRICS PIPELINE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((m, i) => (
            <div key={i} className="bg-white border border-slate-150/70 p-5 rounded-2xl shadow-2xs flex items-center gap-4 hover:border-slate-300 transition-colors">
              <div className={`w-11 h-11 ${m.iconBg} rounded-xl flex items-center justify-center text-lg shrink-0 font-medium`}>
                {m.icon}
              </div>
              <div className="space-y-0.5">
                <div className="text-xl font-black text-slate-900 tracking-tight">{m.value}</div>
                <div className="text-xs font-black text-slate-800 leading-tight">{m.label}</div>
                <div className="text-[10px] text-slate-400 font-medium">{m.detail}</div>
              </div>
            </div>
          ))}
        </div>

        {/* POPULAR RANKING SECTION BLOCK WITH CAROUSEL MATRIX SLIDER */}
        <div className="space-y-4">
          <div className="flex justify-between items-end border-b border-slate-200/60 pb-3">
            <h2 className="text-lg font-black text-slate-900 tracking-tight flex items-center gap-2">
              🌟 Popular ranking lists
            </h2>
            <button className="text-xs font-black text-indigo-600 hover:text-indigo-700 flex items-center gap-1 cursor-pointer">
              <span>View all rankings</span>
              <span>→</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 overflow-x-auto pb-2 scrollbar-none">
            {rankingLists.map((list, idx) => (
              <div key={idx} className="bg-white border border-slate-150/80 rounded-2xl p-4 shadow-3xs flex flex-col justify-between min-w-[200px] hover:shadow-xs transition-shadow">
                <div className="space-y-4">
                  {/* Card Title Header Component */}
                  <div className="flex flex-col items-center text-center space-y-1 pb-3 border-b border-slate-100">
                    <span className={`w-9 h-9 rounded-full ${list.badgeColor} border flex items-center justify-center text-sm mb-1`}>
                      {list.icon}
                    </span>
                    <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-wider leading-none">
                      {list.title}
                    </h3>
                    <p className="text-xs font-black text-slate-800 leading-tight">
                      {list.subtitle}
                    </p>
                  </div>

                  {/* Company Micro-rows array matrix element mapping */}
                  <div className="space-y-2.5">
                    {list.companies.map((comp) => (
                      <div key={comp.rank} className="flex items-center justify-between text-xs font-bold bg-slate-50/50 p-2 rounded-xl border border-slate-100">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] text-slate-400 font-mono w-3">{comp.rank}</span>
                          <span className={`text-xs ${comp.color}`}>{comp.logo}</span>
                          <span className="text-slate-800 font-black text-[11px] truncate max-w-[90px]">{comp.name}</span>
                        </div>
                        <span className="text-[10px] text-slate-300 font-black">›</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button className="w-6 h-6 bg-slate-50 hover:bg-indigo-50 border border-slate-150 text-slate-400 hover:text-indigo-600 rounded-lg flex items-center justify-center text-[10px] transition-colors cursor-pointer">
                    →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* EXPLORE BY INDUSTRY GRID ROW PLATFORM VIEW */}
        <div className="space-y-4">
          <div className="flex justify-between items-end border-b border-slate-200/60 pb-3">
            <h2 className="text-lg font-black text-slate-900 tracking-tight flex items-center gap-2">
              🏢 Explore by industry
            </h2>
            <button className="text-xs font-black text-indigo-600 hover:text-indigo-700 flex items-center gap-1 cursor-pointer">
              <span>View all industries</span>
              <span>→</span>
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3">
            {industries.map((ind, idx) => (
              <div key={idx} className="bg-white border border-slate-150/80 hover:border-indigo-200 rounded-xl p-3 text-center space-y-2.5 shadow-3xs transition-all cursor-pointer hover:shadow-2xs flex flex-col justify-between">
                <div className="space-y-1">
                  <div className="flex justify-center gap-0.5 text-xs opacity-70">
                    {ind.icons.map((ic, i) => <span key={i}>{ic}</span>)}
                  </div>
                  <h4 className="text-[11px] font-black text-slate-800 tracking-tight leading-tight pt-1">
                    {ind.name}
                  </h4>
                  <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">
                    {ind.desc}
                  </p>
                </div>
                <div className="flex justify-center pt-1">
                  <div className="w-5 h-5 bg-slate-50 border border-slate-100 rounded-md flex items-center justify-center text-[9px] text-slate-400">
                    →
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* METADATA CERTIFICATION TRUST BOTTOM PANEL CARD SECTION */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-bold">
            <div className="flex items-center gap-2 bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-700">
              <span className="text-indigo-400 text-sm">🏅</span>
              <span className="text-slate-200 font-black">Rankings you can trust</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-400 text-[11px]">
              <span className="text-emerald-500">✓</span> Verified data only
            </div>
            <div className="flex items-center gap-1.5 text-slate-400 text-[11px]">
              <span className="text-emerald-500">✓</span> No paid placements
            </div>
            <div className="flex items-center gap-1.5 text-slate-400 text-[11px]">
              <span className="text-emerald-500">✓</span> Updated monthly
            </div>
            <div className="flex items-center gap-1.5 text-slate-400 text-[11px]">
              <span className="text-emerald-500">✓</span> Transparent methodology
            </div>
          </div>
          
          <div className="flex items-center gap-3 shrink-0 border-t md:border-t-0 border-slate-800 pt-4 md:pt-0 w-full md:w-auto justify-between md:justify-end">
            <div className="flex -space-x-2 overflow-hidden">
              <div className="w-6 h-6 rounded-full bg-slate-700 border-2 border-slate-900 text-[9px] flex items-center justify-center">👨‍💻</div>
              <div className="w-6 h-6 rounded-full bg-slate-700 border-2 border-slate-900 text-[9px] flex items-center justify-center">👩‍💼</div>
              <div className="w-6 h-6 rounded-full bg-slate-700 border-2 border-slate-900 text-[9px] flex items-center justify-center">🧑‍🔬</div>
            </div>
            <span className="text-[10px] font-medium text-slate-400">
              Backed by <strong className="text-slate-100 font-black">15M+ verified professionals</strong> globally
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}