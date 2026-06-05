"use client";

import { useState } from "react";

export default function HomeSearchDashboard() {
  const [activeTab, setActiveTab] = useState("Salaries");

  const navigationTabs = [
    { name: "Salaries", icon: "💰" },
    { name: "Reviews", icon: "⭐" },
    { name: "Interviews", icon: "💬" },
    { name: "Forum", icon: "👥" }
  ];

  const trendingTags = [
    "Software Engineer",
    "Data Scientist",
    "Product Manager",
    "Marketing Manager",
    "Remote Jobs"
  ];

  const trustMetrics = [
    { label: "Verified & Trusted", desc: "Real data. Real people.", icon: "🛡️" },
    { label: "10M+ Users", desc: "Across the globe", icon: "👥" },
    { label: "500K+ Companies", desc: "Researched & reviewed", icon: "🏢" },
    { label: "100% Free", desc: "No hidden charges", icon: "🔒" }
  ];

  return (
    <div className="w-full bg-gradient-to-b from-slate-50/60 to-white py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[540px]">
      <div className="max-w-4xl w-full space-y-8 text-center">
        
        {/* Core Hero Typo Matrix Elements */}
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Explore. Compare. <span className="text-emerald-600">Grow.</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-medium max-w-xl mx-auto leading-relaxed">
            Explore salaries, read real reviews, prepare for interviews, and find the right opportunities — all in one place.
          </p>
        </div>

        {/* MASTER SEARCH WRAPPER: Exact Representation of image_99fae8.jpg Design Container */}
        <div className="bg-white border border-slate-100 shadow-xl rounded-3xl p-5 sm:p-6 space-y-5 text-left max-w-3xl mx-auto">
          
          {/* Top Segment: Tab Switcher Grid Link Elements */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 border-b border-slate-100 pb-3">
            {navigationTabs.map((tab) => {
              const isSelected = activeTab === tab.name;
              return (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    isSelected
                      ? "text-emerald-700 bg-emerald-50 border border-emerald-100/60 shadow-2xs"
                      : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  <span className="text-sm opacity-90">{tab.icon}</span>
                  <span>{tab.name}</span>
                </button>
              );
            })}
          </div>

          {/* Center Segment: Multi-Column Segmented Search Inputs Grid */}
          <div className="bg-slate-50/50 border border-slate-100/80 rounded-2xl p-1.5 grid grid-cols-1 md:grid-cols-12 gap-1 items-center">
            
            {/* Input Element: Job Title Queries Scope */}
            <div className="md:col-span-5 flex items-center gap-2.5 px-3 py-2">
              <span className="text-slate-400 text-sm select-none">🔍</span>
              <div className="w-full space-y-0.5">
                <label className="text-[9px] font-bold text-slate-400 block uppercase tracking-wider leading-none">
                  Search by job title, skill or company
                </label>
                <input
                  type="text"
                  placeholder="e.g. Software Engineer, Data Analyst"
                  className="w-full bg-transparent text-xs text-slate-800 font-semibold placeholder-slate-400 focus:outline-hidden"
                />
              </div>
            </div>

            {/* Layout Border Break Divider Line */}
            <div className="hidden md:block h-7 w-[1px] bg-slate-200/80 self-center justify-self-center" />

            {/* Input Element: Location Coordinates Filters */}
            <div className="md:col-span-3 flex items-center gap-2.5 px-3 py-2">
              <span className="text-slate-400 text-sm select-none">📍</span>
              <div className="w-full space-y-0.5">
                <label className="text-[9px] font-bold text-slate-400 block uppercase tracking-wider leading-none">
                  Location
                </label>
                <input
                  type="text"
                  placeholder="e.g. New York, Remote"
                  className="w-full bg-transparent text-xs text-slate-800 font-semibold placeholder-slate-400 focus:outline-hidden"
                />
              </div>
            </div>

            {/* Layout Border Break Divider Line */}
            <div className="hidden md:block h-7 w-[1px] bg-slate-200/80 self-center justify-self-center" />

            {/* Input Element: Experience Scale Slider Filters */}
            <div className="md:col-span-2 flex items-center gap-2.5 px-3 py-2">
              <span className="text-slate-400 text-sm select-none">🏢</span>
              <div className="w-full space-y-0.5">
                <label className="text-[9px] font-bold text-slate-400 block uppercase tracking-wider leading-none">
                  Experience
                </label>
                <input
                  type="text"
                  placeholder="e.g. 0-2 years"
                  className="w-full bg-transparent text-xs text-slate-800 font-semibold placeholder-slate-400 focus:outline-hidden"
                />
              </div>
            </div>

            {/* Master CTA Search Core Button Grid Trigger */}
            <div className="md:col-span-2 p-0.5">
              <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black py-3 px-4 rounded-xl shadow-xs transition-colors tracking-wide">
                Search
              </button>
            </div>

          </div>

          {/* Bottom Segment: Dynamic Inline Tags Array List */}
          <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] font-bold text-slate-500">
            <span className="text-slate-400 font-semibold">Trending searches:</span>
            {trendingTags.map((tag) => (
              <span
                key={tag}
                className="bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-100 px-2.5 py-1 rounded-lg cursor-pointer transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

        </div>

        {/* SECTION 3: Footer Horizonal Trust Badges Pipeline Grid Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 max-w-3xl mx-auto border-t border-slate-100 text-left">
          {trustMetrics.map((metric, idx) => (
            <div key={idx} className="flex items-start gap-2.5">
              <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center text-sm shadow-2xs border border-slate-50 select-none shrink-0">
                {metric.icon}
              </div>
              <div className="space-y-0.5">
                <h4 className="text-[10px] font-black text-slate-800 leading-tight">{metric.label}</h4>
                <p className="text-[9px] text-slate-400 font-medium leading-none">{metric.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}