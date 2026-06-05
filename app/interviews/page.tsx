"use client";

import { useState } from "react";
import Link from "next/link";

export default function InterviewsPage() {
  const [activeTab, setActiveTab] = useState("Popular Roles");

  const recentQuestions = [
    {
      company: "Google",
      logo: "G",
      role: "Software Engineer",
      time: "2h ago",
      question: "Given a binary tree, serialize and deserialize it. How would you design the serialization method?",
      tags: ["Algorithms", "Binary Tree", "Design"],
      difficulty: "Easy",
      diffColor: "bg-emerald-50 text-emerald-700 border-emerald-100",
      answers: "128 answers"
    },
    {
      company: "Microsoft",
      logo: "M",
      role: "Product Manager",
      time: "3h ago",
      question: "How would you improve customer retention for Microsoft 365? Walk me through your approach.",
      tags: ["Product Sense", "Metrics", "Strategy"],
      difficulty: "Medium",
      diffColor: "bg-amber-50 text-amber-700 border-amber-100",
      answers: "96 answers"
    },
    {
      company: "Amazon",
      logo: "A",
      role: "SDE II",
      time: "5h ago",
      question: "Design a rate limiter. How would you handle distributed systems and ensure scalability?",
      tags: ["System Design", "Scalability", "API"],
      difficulty: "Hard",
      diffColor: "bg-rose-50 text-rose-700 border-rose-100",
      answers: "64 answers"
    }
  ];

  const roleList = [
    { name: "Software Engineer", count: "12.4K questions", growth: "18%", trend: "vs last month", icons: ["G", "A", "M"] },
    { name: "Product Manager", count: "8.7K questions", growth: "14%", trend: "vs last month", icons: ["A", "G", "M"] },
    { name: "Data Analyst", count: "6.3K questions", growth: "22%", trend: "vs last month", icons: ["A", "M", "G"] },
    { name: "Product Designer", count: "4.1K questions", growth: "16%", trend: "vs last month", icons: ["G", "M", "A"] }
  ];

  const topics = [
    { title: "System Design", total: "2.4K questions", bg: "bg-purple-50 text-purple-700" },
    { title: "Algorithms", total: "1.8K questions", bg: "bg-blue-50 text-blue-700" },
    { title: "SQL", total: "1.6K questions", bg: "bg-amber-50 text-amber-700" },
    { title: "Behavioral", total: "1.5K questions", bg: "bg-rose-50 text-rose-700" },
    { title: "Product Sense", total: "1.2K questions", bg: "bg-emerald-50 text-emerald-700" },
    { title: "Data Structures", total: "987 questions", bg: "bg-indigo-50 text-indigo-700" }
  ];

  return (
    <div className="space-y-10 pb-20">
      
      {/* Header Banner */}
      <div className="bg-white rounded-2xl border border-slate-100 p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-2xs">
        <div>
          <span className="text-[10px] font-black text-brand bg-emerald-50 px-2 py-0.5 rounded-md tracking-wider uppercase">
            Interviews
          </span>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight mt-1">
            Real interview questions from <span className="text-brand">real candidates</span>
          </h1>
          <p className="text-slate-400 text-xs mt-0.5">
            Recent interview experiences shared by verified professionals.
          </p>
        </div>
        <button className="bg-brand text-white text-xs font-bold py-2.5 px-4 rounded-xl hover:bg-brand-hover transition-colors whitespace-nowrap shadow-xs">
          Explore all interviews →
        </button>
      </div>

      {/* SECTION 1: Recent Questions Horizontal Row Carousel Slider */}
      <div className="space-y-4">
        <div className="flex items-center justify-between px-1">
          <h2 className="text-sm font-black text-slate-900 flex items-center gap-1.5 tracking-tight">
            ⚡ Recent questions asked
          </h2>
          <span className="text-xs font-bold text-brand hover:underline cursor-pointer">View all</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {recentQuestions.map((q, idx) => (
            <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-5 shadow-2xs hover:border-slate-200/80 transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                {/* Meta Top Row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 bg-slate-900 rounded-lg text-white font-black text-xs flex items-center justify-center shadow-2xs">
                      {q.logo}
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-slate-900 leading-tight">{q.company}</h4>
                      <p className="text-[10px] text-slate-400 font-medium">{q.role} • {q.time}</p>
                    </div>
                  </div>
                </div>

                {/* Question Body Text */}
                <p className="text-xs text-slate-700 font-medium leading-relaxed line-clamp-3">
                  "{q.question}"
                </p>
              </div>

              {/* Badges Footer Area */}
              <div className="space-y-3 pt-2 border-t border-slate-50">
                <div className="flex flex-wrap gap-1">
                  {q.tags.map((tag, i) => (
                    <span key={i} className="text-[9px] font-bold text-slate-400 bg-slate-50 px-2 py-0.5 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-[10px] font-bold">
                  <span className={`px-2 py-0.5 rounded-sm border ${q.diffColor}`}>
                    {q.difficulty}
                  </span>
                  <span className="text-slate-400 font-semibold">{q.answers}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 2: Bottom Double Column Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* LEFT COMPONENT: Browse Questions by Role (7 Columns) */}
        <div className="lg:col-span-7 bg-white border border-slate-100 rounded-2xl p-5 shadow-2xs space-y-4">
          <div className="border-b border-slate-100 pb-2">
            <h3 className="text-sm font-black text-slate-900 tracking-tight flex items-center gap-1.5">
              💼 Browse questions by role
            </h3>
            
            {/* Roles Sub Navigation Sub Header Tabs */}
            <div className="flex gap-4 text-xs font-bold text-slate-400 mt-4">
              {["Popular Roles", "Engineering", "Product", "Data"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-2 relative transition-colors ${
                    activeTab === tab ? "text-brand font-black border-b-2 border-brand" : "hover:text-slate-700"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Role rows loop */}
          <div className="divide-y divide-slate-50">
            {roleList.map((role, idx) => (
              <div key={idx} className="py-3.5 flex items-center justify-between group cursor-pointer first:pt-1 last:pb-1">
                <div className="space-y-0.5">
                  <h4 className="text-xs font-black text-slate-800 group-hover:text-brand transition-colors">
                    {role.name}
                  </h4>
                  <p className="text-[10px] text-slate-400 font-semibold flex items-center gap-1.5">
                    {role.count}
                    <span className="text-slate-200">|</span>
                    <span className="flex items-center gap-0.5 text-slate-300 font-bold">
                      {role.icons.map((ic, i) => (
                        <span key={i} className="w-3.5 h-3.5 bg-slate-100 rounded-xs inline-flex items-center justify-center text-[8px] font-black text-slate-500 border border-white -ml-1 first:ml-0">
                          {ic}
                        </span>
                      ))}
                      <span className="text-[9px] text-slate-400 pl-0.5">+3</span>
                    </span>
                  </p>
                </div>
                
                {/* Growth Metric analytics badges side column */}
                <div className="text-right space-y-0.5">
                  <div className="text-xs font-black text-emerald-600 flex items-center justify-end gap-0.5">
                    ↗ {role.growth}
                  </div>
                  <div className="text-[9px] text-slate-400 font-medium">{role.trend}</div>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full text-center text-xs font-bold text-brand hover:underline pt-2 block border-t border-slate-50">
            View all roles and questions →
          </button>
        </div>

        {/* RIGHT COMPONENT: Trending Topics & Share Banner Pane (5 Columns) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Trending Panel Area */}
          <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-2xs space-y-4">
            <div>
              <h3 className="text-sm font-black text-slate-900 tracking-tight flex items-center gap-1.5">
                🔥 Trending interview topics
              </h3>
              <p className="text-[10px] text-slate-400 font-medium mt-0.5">Most discussed interview subjects this month</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {topics.map((topic, idx) => (
                <div key={idx} className="p-3 rounded-xl border border-slate-50 bg-slate-50/40 hover:bg-white hover:border-slate-100 transition-all cursor-pointer space-y-1">
                  <h4 className="text-xs font-black text-slate-800 leading-tight">{topic.title}</h4>
                  <p className="text-[9px] text-slate-400 font-bold">{topic.total}</p>
                </div>
              ))}
            </div>
            
            <button className="w-full text-center text-xs font-bold text-slate-400 hover:text-slate-600 pt-1 block">
              View all topics
            </button>
          </div>

          {/* Share Box Promotion Element Block */}
          <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-xs space-y-4 relative overflow-hidden">
            <div className="space-y-1.5 relative z-10">
              <h4 className="text-xs font-black tracking-tight flex items-center gap-1">
                📥 Share your interview experience
              </h4>
              <p className="text-[11px] text-slate-400 font-medium leading-relaxed max-w-xs">
                Help other candidates by sharing the questions you were asked in your recent tech interview loops.
              </p>
            </div>
            <button className="w-full bg-brand hover:bg-brand-hover text-white text-xs font-bold py-2.5 rounded-xl transition-colors shadow-2xs relative z-10">
              Submit interview questions →
            </button>
            <div className="absolute -bottom-6 -right-6 text-slate-800/20 text-7xl font-black select-none z-0">
              💬
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}