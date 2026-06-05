"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ShieldCheck, 
  Users, 
  Building2, 
  Lock, 
  BarChart3, 
  MessageSquare, 
  ClipboardList, 
  Scale, 
  TrendingUp,
  Search,
  MapPin,
  Briefcase
} from 'lucide-react';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("salaries");

  const tabs = [
    { id: "salaries", label: "Salaries", icon: <BarChart3 className="w-4 h-4" /> },
    { id: "reviews", label: "Reviews", icon: <MessageSquare className="w-4 h-4" /> },
    { id: "interviews", label: "Interviews", icon: <ClipboardList className="w-4 h-4" /> },
    { id: "forum", label: "Forum", icon: <Users className="w-4 h-4" /> },
  ];

  const trendingSearches = [
    "Software Engineer",
    "Data Scientist",
    "Product Manager",
    "Marketing Manager",
    "Remote Jobs",
  ];

  // Global Value Badges list from mockup images
  const valueProps = [
    { text: "Verified & Trusted", sub: "Real data. Real people.", icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />, bg: "bg-emerald-50" },
    { text: "10M+ Users", sub: "Across the globe", icon: <Users className="w-5 h-5 text-emerald-600" />, bg: "bg-emerald-50" },
    { text: "500K+ Companies", sub: "Researched & reviewed", icon: <Building2 className="w-5 h-5 text-emerald-600" />, bg: "bg-emerald-50" },
    { text: "100% Free", sub: "No hidden charges", icon: <Lock className="w-5 h-5 text-emerald-600" />, bg: "bg-emerald-50" },
  ];

  // Core features dashboard categories matrix from mockups
  const featuresList = [
    {
      title: "Salary Data",
      desc: "Real verified comp data across roles & levels",
      icon: <BarChart3 className="w-5 h-5 text-emerald-600" />,
      bg: "bg-emerald-50"
    },
    {
      title: "Companies",
      desc: "Explore 500K+ companies with reviews & ratings",
      icon: <Building2 className="w-5 h-5 text-blue-600" />,
      bg: "bg-blue-50"
    },
    {
      title: "Reviews",
      desc: "Anonymous employee reviews from real insiders",
      icon: <MessageSquare className="w-5 h-5 text-purple-600" />,
      bg: "bg-purple-50"
    },
    {
      title: "Interview Prep",
      desc: "Questions & tips from people who got the job",
      icon: <ClipboardList className="w-5 h-5 text-amber-600" />,
      bg: "bg-amber-50"
    },
    {
      title: "Offer Comparator",
      desc: "Compare multiple offers side-by-side instantly",
      icon: <Scale className="w-5 h-5 text-rose-600" />,
      bg: "bg-rose-50"
    },
    {
      title: "Workplace Index",
      desc: "Data-driven company rankings, no sponsored spots",
      icon: <TrendingUp className="w-5 h-5 text-indigo-600" />,
      bg: "bg-indigo-50"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#f8fafc] -mt-10 pt-4 flex flex-col justify-between antialiased">
      <div>
        {/* PREMIUM HERO BACKDROP SECTION */}
        <section className="w-full text-center py-16 md:py-24 px-4 bg-gradient-to-b from-emerald-50/60 via-emerald-50/20 to-transparent relative overflow-hidden rounded-b-[2.5rem]">
          
          {/* Main Title Headers */}
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-4">
            Explore. Compare. <span className="text-[#005e3a]">Grow.</span>
          </h1>
          <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto mb-10 font-medium">
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
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 cursor-pointer ${
                    activeTab === tab.id
                      ? "bg-emerald-50 text-[#005e3a] shadow-2xs border border-emerald-100"
                      : "text-slate-500 hover:text-slate-900 bg-transparent border border-transparent"
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Core Input Pipeline Multi-Grid Field Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center bg-slate-50/50 p-2 rounded-2xl border border-slate-100">
              
              {/* Input 1: Role or Keyword */}
              <div className="md:col-span-4 flex items-center gap-3 px-4 py-3 bg-white rounded-xl border border-slate-100 shadow-2xs">
                <Search className="text-slate-400 w-4 h-4 shrink-0" />
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
                <MapPin className="text-slate-400 w-4 h-4 shrink-0" />
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
                <Briefcase className="text-slate-400 w-4 h-4 shrink-0" />
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
                <button className="w-full bg-[#005e3a] hover:bg-[#00462b] text-white font-bold py-4 px-4 rounded-xl transition-all shadow-md shadow-emerald-600/10 text-xs tracking-wide cursor-pointer">
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

          {/* Global Value Badges Strip */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 px-4">
            {valueProps.map((item, idx) => (
              <div key={idx} className="flex items-center text-left gap-4 bg-white border border-slate-100 rounded-2xl p-5 shadow-2xs hover:shadow-xs transition-shadow">
                <div className={`w-10 h-10 ${item.bg} rounded-xl flex items-center justify-center shrink-0 shadow-3xs`}>
                  {item.icon}
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-xs font-black text-slate-800 tracking-tight">{item.text}</h4>
                  <p className="text-[11px] text-slate-400 font-medium">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* MID-PLATFORM COUNTER STATS STRIP */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 mb-8">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 text-center max-w-5xl mx-auto border-y border-slate-100 py-8 bg-white/40 rounded-2xl backdrop-blur-2xs">
            {[
              { count: "12M+", desc: "Salaries Data Points" },
              { count: "4.8M+", desc: "Honest Reviews" },
              { count: "950K+", desc: "Interview Experiences" },
              { count: "210K+", desc: "Offers Decoded" },
              { count: "120K+", desc: "Active Threads" },
            ].map((stat, i) => (
              <div key={i} className="space-y-1">
                <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">{stat.count}</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{stat.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURE HUB GRAPHICS MATRIX (Everything you need to grow your career) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-12">
          <div className="space-y-10 text-center">
            <div className="space-y-3">
              <h2 className="text-3xl font-black text-slate-900 tracking-tight sm:text-4xl">
                Everything you need to grow your career
              </h2>
              <p className="text-slate-500 text-sm font-medium">
                From salary benchmarks to interview prep — all verified, all free.
              </p>
            </div>

            {/* 3x2 Dashboard Hub Grid Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto text-left pt-4">
              {featuresList.map((feat, idx) => (
                <div 
                  key={idx} 
                  className="border border-slate-100 rounded-3xl p-6 space-y-4 shadow-2xs bg-white hover:border-slate-200 transition-all cursor-pointer group hover:shadow-xs"
                >
                  <div className={`w-10 h-10 ${feat.bg} rounded-xl flex items-center justify-center shadow-3xs`}>
                    {feat.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-black text-slate-800 tracking-tight group-hover:text-slate-900">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* GREEN FOOTER BRAND CONTAINER BLOCK */}
      <div className="w-full mt-12">
        <div className="bg-[#005e3a] text-white py-16 px-4 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
            Join 10M+ professionals today
          </h2>
          <p className="text-emerald-100/80 text-xs sm:text-sm font-medium max-w-2xl mx-auto leading-relaxed">
            Share your salary anonymously and unlock full access to all salary insights, company reviews, and career tools.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button className="w-full sm:w-auto bg-white text-[#005e3a] text-xs font-black px-6 py-3 rounded-xl hover:bg-emerald-50 transition-colors shadow-sm cursor-pointer">
              Get started — it's free
            </button>
            <button className="w-full sm:w-auto bg-transparent text-white border border-emerald-500 text-xs font-black px-6 py-3 rounded-xl hover:bg-emerald-800/30 transition-colors cursor-pointer">
              Browse salaries
            </button>
          </div>
        </div>

        {/* BOTTOM COMPLIANCE AND META SUB-FOOTER */}
        <div className="bg-white border-t border-slate-100 py-6 text-center text-[11px] font-bold text-slate-400/90">
          <span>© 2026 TalentDash — Real Leveling. Structured Data.</span>
          <span className="mx-2">•</span>
          <Link href="#" className="hover:text-slate-600 transition-colors">Salaries</Link>
          <span className="mx-2">•</span>
          <Link href="#" className="hover:text-slate-600 transition-colors">Companies</Link>
          <span className="mx-2">•</span>
          <Link href="#" className="hover:text-slate-600 transition-colors">Reviews</Link>
        </div>
      </div>
    </div>
  );
}