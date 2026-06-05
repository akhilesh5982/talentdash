"use client";

import { useState } from "react";

export default function OffersPage() {
  const [activeMetric, setActiveMetric] = useState("Base Salary");

  const highlightStats = [
    { label: "Offers analyzed", value: "280K+", desc: "Real offers from professionals", icon: "👥" },
    { label: "Companies covered", value: "35K+", desc: "Updated compensation data", icon: "📊" },
    { label: "Higher offers achieved", value: "18%", desc: "With our insights and tools", icon: "📈" },
    { label: "Private & secure", value: "100%", desc: "Your data is safe with us", icon: "🛡️" }
  ];

  const breakdownMetrics = [
    { name: "Base Salary", evaluation: "Above market", color: "text-emerald-600 bg-emerald-50 border-emerald-100", score: "$165,000/yr" },
    { name: "Bonus", evaluation: "Average", color: "text-amber-600 bg-amber-50 border-amber-100", score: "$25,000/yr" },
    { name: "Equity", evaluation: "Above market", color: "text-emerald-600 bg-emerald-50 border-emerald-100", score: "$80,000/yr" },
    { name: "Benefits", evaluation: "Excellent", color: "text-purple-600 bg-purple-50 border-purple-100", score: "Top 5% tier" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Main Split Container Layout Grid (Matches image_997e8b.png Layout) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* LEFT CARD PANEL: Pitch Header & Metric Highlights (7 Columns) */}
        <div className="lg:col-span-7 bg-white border border-slate-100 rounded-3xl p-8 shadow-xs flex flex-col justify-between space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center text-lg font-bold shadow-2xs">
                🎁
              </div>
              <span className="text-[10px] font-extrabold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md tracking-wider uppercase">
                OFFERS
              </span>
            </div>
            
            <h1 className="text-3xl font-black text-slate-900 tracking-tight leading-tight">
              Decode your offer. <br />
              <span className="text-slate-800">Know your worth.</span>
            </h1>
            <p className="text-slate-500 text-xs font-medium leading-relaxed max-w-md">
              AI-powered insights to evaluate your total compensation breakdown and make confident career decisions.
            </p>
          </div>

          {/* Core Feature Stats Indicators Row Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-100">
            {highlightStats.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm">{item.icon}</span>
                  <div className="text-lg font-black text-slate-900 tracking-tight">{item.value}</div>
                </div>
                <div className="text-[10px] font-bold text-slate-700 leading-tight">{item.label}</div>
                <p className="text-[9px] text-slate-400 font-medium leading-tight">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT CARD PANEL: Premium Evaluation Form & Score Interactive Widget (5 Columns) */}
        <div className="lg:col-span-5 bg-slate-50/50 border border-slate-100 rounded-3xl p-6 shadow-xs flex flex-col md:flex-row lg:flex-col items-center justify-between gap-6">
          
          {/* Action Call text panel */}
          <div className="space-y-4 flex-1 w-full text-center md:text-left">
            <div className="space-y-2">
              <h3 className="text-sm font-black text-slate-900 tracking-tight">Evaluate your offer in 2 minutes</h3>
              <p className="text-[11px] text-slate-400 font-medium leading-relaxed max-w-xs mx-auto md:mx-0">
                Upload your offer details and get a complete breakdown of your CTC, benefits, equity and more.
              </p>
            </div>
            
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold py-3 px-5 rounded-xl transition-colors shadow-xs">
              Evaluate my offer →
            </button>

            {/* Profile contributors stack list indicators */}
            <div className="flex items-center justify-center md:justify-start gap-1.5 text-[10px] font-bold text-slate-400">
              <div className="flex -space-x-1">
                {["👨‍💻", "👩‍💼", "🧑‍💻", "👩‍🔬"].map((emoji, idx) => (
                  <span key={idx} className="w-4 h-4 bg-white border border-slate-200 rounded-full flex items-center justify-center text-[8px] select-none">
                    {emoji}
                  </span>
                ))}
              </div>
              <span>Join 85K+ professionals making smarter decisions</span>
            </div>
          </div>

          {/* SCORE CARD COMPONENT: Exact Representation of Visual Metric Scoreboard */}
          <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-2xs w-full max-w-[250px] shrink-0 space-y-4">
            <div className="text-center space-y-1">
              <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block">Your Offer Score</span>
              
              {/* Radial gauge SVG chart circle block */}
              <div className="relative w-20 h-20 mx-auto flex items-center justify-center mt-2">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <path className="text-slate-100" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <path className="text-emerald-500" strokeDasharray="82, 100" strokeWidth="3" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                </svg>
                <div className="absolute text-center">
                  <div className="text-xl font-black text-slate-900 tracking-tight">82</div>
                  <div className="text-[8px] text-slate-400 font-bold">/100</div>
                </div>
              </div>
              <div className="text-[10px] font-black text-emerald-600 pt-1">Above Market</div>
            </div>

            {/* List block item row segments map links */}
            <div className="space-y-1.5 pt-2 border-t border-slate-50">
              {breakdownMetrics.map((metric, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setActiveMetric(metric.name)}
                  className={`flex items-center justify-between p-2 rounded-lg text-[9px] font-bold transition-all cursor-pointer border ${
                    activeMetric === metric.name 
                      ? "bg-indigo-50/50 border-indigo-100 text-indigo-900" 
                      : "border-transparent hover:bg-slate-50 text-slate-600"
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                    {metric.name}
                  </span>
                  <span className={`px-1.5 py-0.5 rounded-sm font-extrabold ${
                    activeMetric === metric.name ? "bg-indigo-100 text-indigo-700" : metric.color
                  }`}>
                    {metric.evaluation}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Auxiliary Benchmarks Display for UI Complete State */}
      <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-xs space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-xs font-black text-slate-900 uppercase tracking-wider">Benchmark Insights: {activeMetric}</h3>
            <p className="text-[11px] text-slate-400 font-medium">Real-time industry distributions verified this month.</p>
          </div>
          <span className="text-[11px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-2 py-0.5 rounded-md">
            {breakdownMetrics.find(m => m.name === activeMetric)?.score || "$165,000/yr"}
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-bold text-slate-600">
          <div className="p-3 bg-slate-50/50 border border-slate-100 rounded-xl">
            <span className="text-[9px] text-slate-400 block font-bold mb-0.5">Top 10% Percentile</span>
            <span className="text-slate-800 font-black">Highly Competitive</span>
          </div>
          <div className="p-3 bg-slate-50/50 border border-slate-100 rounded-xl">
            <span className="text-[9px] text-slate-400 block font-bold mb-0.5">Market Average</span>
            <span className="text-slate-800 font-black">Standard Package Range</span>
          </div>
          <div className="p-3 bg-slate-50/50 border border-slate-100 rounded-xl">
            <span className="text-[9px] text-slate-400 block font-bold mb-0.5">Data Confidence</span>
            <span className="text-emerald-600 font-black">99.4% Match Accuracy</span>
          </div>
        </div>
      </div>

    </div>
  );
}