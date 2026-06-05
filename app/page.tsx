"use client";

import { useState } from "react";
import Link from "next/link";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("salaries");

  const tabs = [
    { id: "salaries", label: "Salaries", icon: "💰" },
    { id: "reviews", label: "Reviews", icon: "⭐" },
    { id: "interviews", label: "Interviews", icon: "💬" },
    { id: "forum", label: "Forum", icon: "👥" },
  ];

  const trendingSearches = [
    "Software Engineer",
    "Data Scientist",
    "Product Manager",
    "Marketing Manager",
    "Remote Jobs",
  ];

  const valueProps = [
    { text: "Verified & Trusted", sub: "Real data. Real people.", icon: "🛡️" },
    { text: "10M+ Users", sub: "Across the globe", icon: "👥" },
    { text: "500K+ Companies", sub: "Researched & reviewed", icon: "🏢" },
    { text: "100% Free", sub: "No hidden charges", icon: "🔒" },
  ];

  return (
    <div className="w-full min-h-screen bg-[#f8fafc] -mt-10 pt-4">
      {/* Premium Hero Soft Curve Backdrop Section */}
      <section className="w-full text-center py-16 md:py-24 px-4 bg-gradient-to-b from-emerald-50/60 via-emerald-50/20 to-transparent relative overflow-hidden rounded-b-[2.5rem]">
        
        {/* Main Title Headers */}
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-4">
          Explore. Compare. <span className="text-[#00a86b]">Grow.</span>
        </h1>
        <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto mb-10">
          Explore salaries, read real reviews, prepare for interviews, and find the right opportunities — all in one place.
        </p>

        {/* Tabbed Interactive Search Shell Container */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-100/80 p-6 md:p-8">
          
          {/* Active Navigation Pills Row */}
          <div className="flex flex-wrap items-center justify-start md:justify-center gap-2 mb-6 border-b border-slate-100 pb-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-emerald-50 text-[#00a86b] shadow-xs border border-emerald-100"
                    : "text-slate-500 hover:text-slate-900 bg-transparent border border-transparent"
                }`}
              >
                <span>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Core Input Pipeline Multi-Grid Field Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center bg-slate-50/50 p-2 rounded-2xl border border-slate-100">
            
            {/* Input 1: Role or Keyword */}
            <div className="md:col-span-4 flex items-center gap-3 px-4 py-3 bg-white rounded-xl border border-slate-100 shadow-2xs">
              <span className="text-slate-400 text-lg">🔍</span>
              <div className="flex flex-col text-left w-full">
                <span className="text-[9px] font-black uppercase tracking-wider text-slate-400">Search by</span>
                <input
                  type="text"
                  placeholder="Job title, skill, or company..."
                  className="text-xs text-slate-800 outline-none placeholder-slate-400 font-medium w-full bg-transparent mt-0.5"
                />
              </div>
            </div>

            {/* Input 2: Geo Location */}
            <div className="md:col-span-3 flex items-center gap-3 px-4 py-3 bg-white rounded-xl border border-slate-100 shadow-2xs">
              <span className="text-slate-400 text-lg">📍</span>
              <div className="flex flex-col text-left w-full">
                <span className="text-[9px] font-black uppercase tracking-wider text-slate-400">Location</span>
                <input
                  type="text"
                  placeholder="e.g. New York, Remote"
                  className="text-xs text-slate-800 outline-none placeholder-slate-400 font-medium w-full bg-transparent mt-0.5"
                />
              </div>
            </div>

            {/* Input 3: Professional Experience Years */}
            <div className="md:col-span-3 flex items-center gap-3 px-4 py-3 bg-white rounded-xl border border-slate-100 shadow-2xs">
              <span className="text-slate-400 text-lg">🏢</span>
              <div className="flex flex-col text-left w-full">
                <span className="text-[9px] font-black uppercase tracking-wider text-slate-400">Experience</span>
                <input
                  type="text"
                  placeholder="e.g. 0-2 years"
                  className="text-xs text-slate-800 outline-none placeholder-slate-400 font-medium w-full bg-transparent mt-0.5"
                />
              </div>
            </div>

            {/* Final Action Submission Trigger */}
            <div className="md:col-span-2 w-full">
              <button className="w-full bg-[#00a86b] hover:bg-[#008f5a] text-white font-bold py-4 px-4 rounded-xl transition-all shadow-md shadow-emerald-600/10 text-xs tracking-wide">
                Search
              </button>
            </div>
          </div>

          {/* Secondary Footer Meta: Trending Searches Tags */}
          <div className="flex flex-wrap items-center justify-start gap-2 mt-6 text-xs text-slate-400 px-1">
            <span className="font-semibold text-slate-500">Trending searches:</span>
            {trendingSearches.map((search, idx) => (
              <button
                key={idx}
                className="bg-white hover:bg-slate-50 text-slate-600 font-medium px-3 py-1.5 rounded-lg border border-slate-200 transition-colors cursor-pointer"
              >
                {search}
              </button>
            ))}
          </div>
        </div>

        {/* Global Value Badges Strip (Perfect match to image_9ad4fa bottom section) */}
        <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-16 px-4">
          {valueProps.map((item, idx) => (
            <div key={idx} className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-3 bg-white/50 p-4 rounded-xl backdrop-blur-xs border border-white/40">
              <div className="w-10 h-10 rounded-lg bg-white shadow-3xs flex items-center justify-center text-lg border border-slate-100 shrink-0">
                {item.icon}
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-800">{item.text}</h4>
                <p className="text-[11px] text-slate-400 font-medium mt-0.5">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Grid Platform Section (Stats counter row matching image_9a5882 bottom block) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 text-center">
          {[
            { count: "12M+", desc: "Salaries Data Points" },
            { count: "4.8M+", desc: "Honest Reviews" },
            { count: "950K+", desc: "Interview Experiences" },
            { count: "210K+", desc: "Offers Decoded" },
            { count: "120K+", desc: "Active Threads" },
          ].map((stat, i) => (
            <div key={i} className="p-4 rounded-xl">
              <div className="text-3xl font-black text-slate-900 tracking-tight">{stat.count}</div>
              <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mt-1">{stat.desc}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}