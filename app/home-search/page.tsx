"use client";

import { useState } from "react";

export default function HomeSearchDashboard() {
  const [activeTab, setActiveTab] = useState("Salaries");

  // Dynamic state management for inputs
  const [searchQuery, setSearchQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [extraQuery, setExtraQuery] = useState("");

  const navigationTabs = [
    { 
      name: "Salaries", 
      icon: "💰", 
      label: "Search by job title, skill or company", 
      placeholder: "e.g. Software Engineer, Data Analyst", 
      extraLabel: "Experience", 
      extraPlaceholder: "e.g. 0-2 years" 
    },
    { 
      name: "Reviews", 
      icon: "⭐", 
      label: "Search company reviews", 
      placeholder: "e.g. Google, Microsoft, Meta", 
      extraLabel: "Industry", 
      extraPlaceholder: "e.g. Tech, Finance" 
    },
    { 
      name: "Interviews", 
      icon: "💬", 
      label: "Search interview questions by role", 
      placeholder: "e.g. System Design, Frontend Engineer", 
      extraLabel: "Difficulty", 
      extraPlaceholder: "e.g. Hard, Medium" 
    },
    { 
      name: "Forum", 
      icon: "👥", 
      label: "Search active forum threads", 
      placeholder: "e.g. Appraisal 2026, Layoffs megathread", 
      extraLabel: "Category", 
      extraPlaceholder: "e.g. Career Growth, Tech" 
    }
  ];

  const currentTabConfig = navigationTabs.find(tab => tab.name === activeTab) || navigationTabs[0];

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

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Searching ${activeTab} for:\nQuery: ${searchQuery}\nLocation: ${locationQuery}\nFilter: ${extraQuery}`);
  };

  return (
    <div className="w-full bg-gradient-to-b from-slate-50/60 to-white py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[540px]">
      <div className="max-w-4xl w-full space-y-8 text-center">
        
        {/* Hero Section */}
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Explore. Compare. <span className="text-emerald-600">Grow.</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-medium max-w-xl mx-auto leading-relaxed">
            Explore salaries, read real reviews, prepare for interviews, and find the right opportunities — all in one place.
          </p>
        </div>

        {/* SEARCH WIDGET FORM CONTAINER */}
        <form onSubmit={handleSearchSubmit} className="bg-white border border-slate-100 shadow-xl rounded-3xl p-5 sm:p-6 space-y-5 text-left max-w-3xl mx-auto">
          
          {/* Tabs Switcher Grid */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 border-b border-slate-100 pb-3">
            {navigationTabs.map((tab) => {
              const isSelected = activeTab === tab.name;
              return (
                <button
                  key={tab.name}
                  type="button"
                  onClick={() => {
                    setActiveTab(tab.name);
                    setSearchQuery("");
                    setExtraQuery("");
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
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

          {/* Segmented Inputs Grid */}
          <div className="bg-slate-50/50 border border-slate-100/80 rounded-2xl p-1.5 grid grid-cols-1 md:grid-cols-12 gap-1 items-center">
            
            {/* Main Query Input */}
            <div className="md:col-span-5 flex items-center gap-2.5 px-3 py-2">
              <span className="text-slate-400 text-sm select-none">🔍</span>
              <div className="w-full space-y-0.5">
                <label className="text-[9px] font-bold text-slate-400 block uppercase tracking-wider leading-none">
                  {currentTabConfig.label}
                </label>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={currentTabConfig.placeholder}
                  className="w-full bg-transparent text-xs text-slate-800 font-semibold placeholder-slate-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block h-7 w-[1px] bg-slate-200/80 self-center justify-self-center" />

            {/* Location Input */}
            <div className="md:col-span-3 flex items-center gap-2.5 px-3 py-2">
              <span className="text-slate-400 text-sm select-none">📍</span>
              <div className="w-full space-y-0.5">
                <label className="text-[9px] font-bold text-slate-400 block uppercase tracking-wider leading-none">
                  Location
                </label>
                <input
                  type="text"
                  value={locationQuery}
                  onChange={(e) => setLocationQuery(e.target.value)}
                  placeholder="e.g. New York, Remote"
                  className="w-full bg-transparent text-xs text-slate-800 font-semibold placeholder-slate-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block h-7 w-[1px] bg-slate-200/80 self-center justify-self-center" />

            {/* Extra Dynamic Input based on Active Tab */}
            <div className="md:col-span-2 flex items-center gap-2.5 px-3 py-2">
              <span className="text-slate-400 text-sm select-none">⚙️</span>
              <div className="w-full space-y-0.5">
                <label className="text-[9px] font-bold text-slate-400 block uppercase tracking-wider leading-none">
                  {currentTabConfig.extraLabel}
                </label>
                <input
                  type="text"
                  value={extraQuery}
                  onChange={(e) => setExtraQuery(e.target.value)}
                  placeholder={currentTabConfig.extraPlaceholder}
                  className="w-full bg-transparent text-xs text-slate-800 font-semibold placeholder-slate-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 p-0.5">
              <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black py-3 px-4 rounded-xl shadow-xs transition-colors tracking-wide cursor-pointer text-center">
                Search
              </button>
            </div>

          </div>

          {/* Trending Searches Row */}
          <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] font-bold text-slate-500">
            <span className="text-slate-400 font-semibold">Trending searches:</span>
            {trendingTags.map((tag) => (
              <span
                key={tag}
                onClick={() => setSearchQuery(tag)}
                className="bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-100 px-2.5 py-1 rounded-lg cursor-pointer transition-colors select-none"
              >
                {tag}
              </span>
            ))}
          </div>

        </form>

        {/* Trust Badges Footer Grid Row */}
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