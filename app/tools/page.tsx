"use client";

import React, { useState } from 'react';
import { Calculator, Sparkles, TrendingUp, ShieldCheck } from 'lucide-react';

export default function ToolsPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // 1. Hike Calculator State
  const [currentCTC, setCurrentCTC] = useState<number>(1500000);
  const [hikePercentage, setHikePercentage] = useState<number>(30);

  // Hike calculations
  const hikeAmount = Math.round(currentCTC * (hikePercentage / 100));
  const newCTC = currentCTC + hikeAmount;
  const estimatedMonthlyTakeHome = Math.round((newCTC / 12) * 0.76); // rough estimate of 24% tax/PF deductions

  // 2. Vesting Calculator State
  const [grantValue, setGrantValue] = useState<number>(4000000);
  const [vestingYears, setVestingYears] = useState<number>(4);
  const [growthRate, setGrowthRate] = useState<number>(10);
  const [scheduleType, setScheduleType] = useState<'even' | 'amazon'>('even');

  // Vesting calculations helper
  const calculateVestingSchedule = () => {
    const years = Array.from({ length: vestingYears }, (_, i) => i + 1);
    
    // Get vesting distribution percentages
    let distribution: number[] = [];
    if (scheduleType === 'even') {
      distribution = Array(vestingYears).fill(100 / vestingYears);
    } else {
      // Amazon backloaded split: 5%, 15%, 40%, 40%
      if (vestingYears === 4) {
        distribution = [5, 15, 40, 40];
      } else {
        distribution = [10, 20, 30, 40];
      }
    }

    let accumulatedProjected = 0;
    const rows = years.map((yr, idx) => {
      const pct = distribution[idx] || 0;
      const baseValue = Math.round(grantValue * (pct / 100));
      const projectedValue = Math.round(baseValue * Math.pow(1 + growthRate / 100, yr));
      accumulatedProjected += projectedValue;

      return {
        year: yr,
        percentage: pct,
        baseValue,
        projectedValue
      };
    });

    return { rows, accumulatedProjected };
  };

  const { rows: vestingRows, accumulatedProjected: totalProjected } = calculateVestingSchedule();

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
      action: "Active Below ↓"
    },
    {
      title: "Equity Calculator",
      desc: "Calculate RSU/ESOP current value, vesting charts & future projected worth.",
      icon: "📊",
      metric: "80K+ used",
      color: "text-purple-600 bg-purple-50",
      action: "Active Below ↓"
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* PREMIUM MASTER HEADER FRAMEWORK */}
      <div className="bg-white border border-slate-150 rounded-3xl p-8 shadow-xs relative overflow-hidden space-y-6">
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
            <p className="text-slate-500 text-xs font-semibold max-w-xl leading-relaxed">
              Accurate calculators and analyzers to help you plan, grow and negotiate better compensation terms with verified real-time datasets.
            </p>
          </div>
          
          <button className="text-xs font-black text-blue-600 hover:text-blue-700 bg-blue-50/50 hover:bg-blue-50 px-4 py-2.5 rounded-xl border border-blue-100/50 transition-all whitespace-nowrap">
            View all tools →
          </button>
        </div>

        {/* RESPONSIVE CARD HUB HUB GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 pt-4">
          {toolsList.map((tool, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`bg-white border rounded-2xl p-4 flex flex-col justify-between space-y-4 transition-all cursor-pointer ${
                hoveredIndex === idx
                  ? "border-blue-300 shadow-xs translate-y-[-2px]"
                  : "border-slate-200/80 hover:border-slate-300"
              }`}
            >
              <div className="space-y-3">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-lg shadow-3xs ${tool.color}`}>
                  {tool.icon}
                </div>
                
                <div className="space-y-1">
                  <h3 className="text-xs font-black text-slate-800 tracking-tight">
                    {tool.title}
                  </h3>
                  <p className="text-[10px] text-slate-400 font-medium leading-normal line-clamp-3">
                    {tool.desc}
                  </p>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-100">
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

        {/* COMPLIANCE FOOTER INDICATOR */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-5 border-t border-slate-100 text-[10px] font-bold text-slate-400">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
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

      {/* INTERACTIVE WORKSPACE MODULES SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* INTERACTIVE COMPONENT 1: SALARY HIKE CALCULATOR */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-3xs space-y-6">
          <div className="flex items-center space-x-2.5 border-b border-slate-100 pb-3">
            <Calculator className="w-5 h-5 text-blue-600" />
            <h2 className="text-sm font-black text-slate-800 uppercase tracking-wider">Salary Hike Calculator</h2>
          </div>

          <div className="space-y-5">
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-black text-slate-500">
                <label htmlFor="ctc-input">CURRENT CTC (INR)</label>
                <span className="font-mono text-slate-800">₹{currentCTC.toLocaleString()}</span>
              </div>
              <input
                id="ctc-input"
                type="range"
                min="300000"
                max="10000000"
                step="50000"
                value={currentCTC}
                onChange={(e) => setCurrentCTC(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-bold">
                <span>₹3L</span>
                <span>₹50L</span>
                <span>₹1Cr</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-black text-slate-500">
                <label htmlFor="hike-input">EXPECTED HIKE (%)</label>
                <span className="font-mono text-slate-800">{hikePercentage}%</span>
              </div>
              <input
                id="hike-input"
                type="range"
                min="0"
                max="150"
                step="1"
                value={hikePercentage}
                onChange={(e) => setHikePercentage(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-bold">
                <span>0%</span>
                <span>75%</span>
                <span>150%</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block">Absolute Hike</span>
                <span className="text-sm font-black text-slate-700 font-mono">₹{hikeAmount.toLocaleString()}</span>
              </div>
              <div>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block">New CTC</span>
                <span className="text-sm font-black text-blue-600 font-mono">₹{newCTC.toLocaleString()}</span>
              </div>
            </div>

            <div className="border-t border-slate-200/60 pt-4">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block">
                Estimated Monthly Take-Home
              </span>
              <span className="text-xl font-black text-slate-900 font-mono">
                ₹{estimatedMonthlyTakeHome.toLocaleString()}
              </span>
              <span className="text-[9px] text-slate-400 font-bold block pt-1">
                *Estimated post-tax and provident fund deductions at standard slabs.
              </span>
            </div>
          </div>
        </div>

        {/* INTERACTIVE COMPONENT 2: EQUITY VESTING CALCULATOR */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-3xs flex flex-col justify-between space-y-6">
          <div>
            <div className="flex items-center space-x-2.5 border-b border-slate-100 pb-3">
              <TrendingUp className="w-5 h-5 text-purple-600" />
              <h2 className="text-sm font-black text-slate-800 uppercase tracking-wider">Equity Vesting Calculator</h2>
            </div>

            <div className="space-y-4 mt-5">
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-black text-slate-500">
                  <label htmlFor="grant-input">TOTAL STOCK GRANT VALUE</label>
                  <span className="font-mono text-slate-800">₹{grantValue.toLocaleString()}</span>
                </div>
                <input
                  id="grant-input"
                  type="range"
                  min="500000"
                  max="50000000"
                  step="100000"
                  value={grantValue}
                  onChange={(e) => setGrantValue(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-purple-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="growth-input" className="text-xs font-black text-slate-500 block">ANNUAL STOCK GROWTH (%)</label>
                  <input
                    id="growth-input"
                    type="number"
                    min="-50"
                    max="100"
                    value={growthRate}
                    onChange={(e) => setGrowthRate(Number(e.target.value))}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-xs font-bold text-slate-800 focus:outline-none focus:border-purple-500"
                  />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-black text-slate-500 block">VESTING PATTERN</span>
                  <div className="grid grid-cols-2 border border-slate-200 rounded-xl p-0.5 bg-slate-50">
                    <button
                      onClick={() => setScheduleType('even')}
                      className={`py-1.5 text-[9px] font-black uppercase rounded-lg transition-all cursor-pointer ${
                        scheduleType === 'even' ? 'bg-purple-600 text-white shadow-3xs' : 'text-slate-500 hover:text-slate-700'
                      }`}
                    >
                      Even Split
                    </button>
                    <button
                      onClick={() => setScheduleType('amazon')}
                      className={`py-1.5 text-[9px] font-black uppercase rounded-lg transition-all cursor-pointer ${
                        scheduleType === 'amazon' ? 'bg-purple-600 text-white shadow-3xs' : 'text-slate-500 hover:text-slate-700'
                      }`}
                    >
                      Amazon (5/15/40/40)
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* VESTING DATA TABULAR CHART */}
            <div className="mt-6 border border-slate-150 rounded-xl overflow-hidden">
              <table className="w-full text-left border-collapse text-xs font-bold">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-150 text-[9px] font-black text-slate-400 uppercase tracking-wider">
                    <th className="py-2.5 px-3">Year</th>
                    <th className="py-2.5 px-3 text-right">Vesting %</th>
                    <th className="py-2.5 px-3 text-right">Base Value</th>
                    <th className="py-2.5 px-3 text-right">Projected Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600 font-medium">
                  {vestingRows.map((row) => (
                    <tr key={row.year} className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-2.5 px-3 font-bold text-slate-800">Year {row.year}</td>
                      <td className="py-2.5 px-3 text-right font-mono font-bold text-slate-700">{row.percentage}%</td>
                      <td className="py-2.5 px-3 text-right font-mono">₹{row.baseValue.toLocaleString()}</td>
                      <td className="py-2.5 px-3 text-right font-bold text-purple-600 font-mono">₹{row.projectedValue.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-150 rounded-xl p-4 flex items-center justify-between text-xs font-bold mt-4">
            <span className="text-slate-500">Total Projected Stock Value:</span>
            <span className="text-base font-black text-slate-900 font-mono">₹{totalProjected.toLocaleString()}</span>
          </div>
        </div>

      </div>
    </div>
  );
}