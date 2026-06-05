"use client";

import { useState } from "react";

export default function ToolsPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const toolsList = [
    {
      title: "Salary Calculator",
      desc: "Calculate your in-hand salary & deductions accurately based on recent tax slabs.",
      icon: "🧮",
      metric: "120K+ used",
      color: "text-emerald-600 bg-emerald-50",
      action: "Calculate now →"
    },
    {
      title: "Salary Hike Calculator",
      desc: "Plan your next hike with confidence and map future increments structurally.",
      icon: "📈",
      metric: "95K+ used",
      color: "text-blue-600 bg-blue-50",
      action: "Calculate now →"
    },
    {
      title: "Equity Calculator",
      desc: "Calculate RSU/ESOP current value, vesting charts & future projected worth.",
      icon: "📊",
      metric: "80K+ used",
      color: "text-purple-600 bg-purple-50",
      action: "Calculate now →"
    },
    {
      title: "Offer Comparator",
      desc: "Compare multiple offers side-by-side on total compensation matrix packages.",
      icon: "⚖️",
      metric: "65K+ used",
      color: "text-amber-600 bg-amber-50",
      action: "Compare now →"
    },
    {
      title: "Resume Analyzer",
      desc: "Get instant AI feedback to improve your resume against target tech roles.",
      icon: "📄",
      metric: "110K+ used",
      color: "text-indigo-600 bg-indigo-50",
      action: "Analyze now →"
    },
    {
      title: "Tax Calculator",
      desc: "Estimate your yearly taxes, take-home metrics and investments options.",
      icon: "💸",
      metric: "90K+ used",
      color: "text-rose-600 bg-rose-50",
      action: "Calculate now →"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      
      {/* Premium Master Header Framework Wrapper Box */}
      <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-xs relative overflow-hidden space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-blue-600 text-white rounded-xl flex items-center justify-center text-base font-bold shadow-2xs">
                🛠️
              </div>
              <span className="text-[10px] font-extrabold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md tracking-wider uppercase">
                Tools
              </span>
            </div>
            
            <h1 className="text-3xl font-black text-slate-900 tracking-tight leading-none pt-1">
              Powerful tools. <span className="text-slate-800">Smarter career moves.</span>
            </h1>
            <p className="text-slate-400 text-xs font-semibold max-w-xl leading-relaxed">
              Accurate calculators and analyzers to help you plan, grow and negotiate better compensation terms with verified real-time datasets.
            </p>
          </div>
          
          <button className="text-xs font-black text-blue-600 hover:text-blue-700 bg-blue-50/50 hover:bg-blue-50 px-4 py-2.5 rounded-xl border border-blue-100/50 transition-all whitespace-nowrap">
            View all tools →
          </button>
        </div>

        {/* SECTION 2: Responsive Features Grid Layout (Matches image_99745c.jpg structure) */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 pt-4">
          {toolsList.map((tool, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`bg-white border rounded-2xl p-5 flex flex-col justify-between space-y-5 transition-all cursor-pointer ${
                hoveredIndex === idx
                  ? "border-blue-200 shadow-xs translate-y-[-2px]"
                  : "border-slate-100/80 hover:border-slate-200"
              }`}
            >
              <div className="space-y-3">
                {/* Visual Icon Badge Element */}
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-lg shadow-2xs ${tool.color}`}>
                  {tool.icon}
                </div>
                
                {/* Meta Text Stack */}
                <div className="space-y-1">
                  <h3 className="text-xs font-black text-slate-800 tracking-tight group-hover:text-blue-600 transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-[10px] text-slate-400 font-medium leading-relaxed line-clamp-4">
                    {tool.desc}
                  </p>
                </div>
              </div>

              {/* Card Footer Metric and Action Anchors */}
              <div className="space-y-3 pt-2 border-t border-slate-50">
                <span className="inline-block text-[9px] font-bold text-slate-400 bg-slate-50 px-2 py-0.5 rounded-md">
                  {tool.metric}
                </span>
                <div className={`text-[10px] font-black transition-colors ${
                  hoveredIndex === idx ? "text-blue-600" : "text-slate-500"
                }`}>
                  {tool.action}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Verification Pipeline Trust Indicator Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-5 border-t border-slate-100 text-[10px] font-bold text-slate-400">
          <div className="flex items-center gap-1.5">
            <span className="text-emerald-500 text-xs">🛡️</span>
            <span>All tools are 100% free, secure and based on verified professional data.</span>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="flex -space-x-1.5">
              {["👨‍💻", "👩‍💼", "🧑‍🔬"].map((emoji, i) => (
                <span key={i} className="w-4 h-4 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center text-[8px] select-none">
                  {emoji}
                </span>
              ))}
            </div>
            <span className="text-slate-500">Trusted by 85K+ professionals worldwide</span>
          </div>
        </div>

      </div>

    </div>
  );
}