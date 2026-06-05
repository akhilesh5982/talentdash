"use client";

import Link from "next/link";

export default function SalariesPage() {
  const topCompanies = [
    { rank: "#1", name: "Google", logo: "G", logoBg: "bg-blue-50 text-blue-600", salary: "₹28.6 LPA", change: "+14% vs last year" },
    { rank: "#2", name: "Microsoft", logo: "M", logoBg: "bg-amber-50 text-amber-600", salary: "₹25.8 LPA", change: "+11% vs last year" },
    { rank: "#3", name: "Meta", logo: "∞", logoBg: "bg-indigo-50 text-indigo-600", salary: "₹24.5 LPA", change: "+16% vs last year" },
    { rank: "#4", name: "Apple", logo: "", logoBg: "bg-slate-100 text-slate-800", salary: "₹23.9 LPA", change: "+9% vs last year" },
    { rank: "#5", name: "Amazon", logo: "A", logoBg: "bg-orange-50 text-orange-600", salary: "₹21.2 LPA", change: "+12% vs last year" },
  ];

  const matrixData = [
    { role: "Software Engineer", locations: { ny: "₹22.5L", sf: "₹28.4L", lon: "₹18.2L", ber: "₹14.5L", sg: "₹19.8L", syd: "₹16.4L" } },
    { role: "Product Manager", locations: { ny: "₹24.1L", sf: "₹29.6L", lon: "₹19.5L", ber: "₹15.2L", sg: "₹21.0L", syd: "₹17.1L" } },
    { role: "Data Scientist", locations: { ny: "₹21.8L", sf: "₹26.0L", lon: "₹17.4L", ber: "₹13.9L", sg: "₹18.5L", syd: "₹15.8L" } },
    { role: "Data Analyst", locations: { ny: "₹14.2L", sf: "₹16.8L", lon: "₹11.5L", ber: "₹9.8L",  sg: "₹12.2L", syd: "₹11.0L" } },
    { role: "UX Designer", locations: { ny: "₹16.5L", sf: "₹19.5L", lon: "₹13.0L", ber: "₹11.2L", sg: "₹14.1L", syd: "₹12.5L" } },
  ];

  return (
    <div className="space-y-8 pb-16">
      
      {/* 1. Header Hero Banner Strip (Matches image_99f363.png) */}
      <div className="bg-white rounded-2xl border border-slate-100 p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow-2xs">
        <div>
          <span className="text-[10px] font-extrabold text-[#00a86b] bg-emerald-50 px-2 py-0.5 rounded-md tracking-wider uppercase">
            Salaries Insights
          </span>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight mt-2">
            Real salary insights. <span className="text-[#00a86b]">Real career growth.</span>
          </h1>
          <p className="text-slate-500 text-xs mt-0.5">
            Explore verified compensation data from professionals around the world.
          </p>
        </div>
        <button className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-all">
          Explore all salaries →
        </button>
      </div>

      {/* 2. Platform Counter Metric Strips */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {[
          { label: "Salary Data Points", value: "12.8M+", sub: "Updated daily" },
          { label: "Companies Tracked", value: "35K+", sub: "Across 50+ countries" },
          { label: "Job Roles Profiled", value: "900+", sub: "Entry to executive" },
          { label: "YoY Salary Growth", value: "18%", sub: "For tech roles globally" },
          { label: "Verified & Anonymous", value: "100%", sub: "Real professionals only" }
        ].map((stat, idx) => (
          <div key={idx} className="bg-white border border-slate-100/80 p-4 rounded-2xl shadow-2xs">
            <div className="text-xl font-black text-slate-900 tracking-tight">{stat.value}</div>
            <div className="text-[10px] font-bold text-slate-700 mt-1">{stat.label}</div>
            <div className="text-[9px] text-slate-400 mt-0.5">{stat.sub}</div>
          </div>
        ))}
      </div>

      {/* 3. Main Data Core Blocks Split-Grid layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Side Section: Top Paying Companies List Container */}
        <div className="lg:col-span-4 bg-white border border-slate-100 rounded-2xl p-5 shadow-2xs">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-sm font-black text-slate-900 uppercase tracking-wider">Top paying companies</h2>
            <Link href="#" className="text-[11px] font-bold text-[#00a86b] hover:underline">View all</Link>
          </div>
          <div className="divide-y divide-slate-50">
            {topCompanies.map((comp) => (
              <div key={comp.rank} className="flex items-center justify-between py-3 first:pt-0 last:pb-0">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-slate-400 w-5">{comp.rank}</span>
                  <div className={`w-8 h-8 rounded-lg ${comp.logoBg} flex items-center justify-center font-bold text-sm`}>
                    {comp.name[0]}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">{comp.name}</div>
                    <div className="text-[10px] text-emerald-600 font-medium">{comp.change}</div>
                  </div>
                </div>
                <div className="text-xs font-black text-slate-900 tracking-tight">{comp.salary}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Section: Interactive Heatmap Matrix Grid Sheet */}
        <div className="lg:col-span-8 bg-white border border-slate-100 rounded-2xl p-5 shadow-2xs overflow-hidden">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-sm font-black text-slate-900 uppercase tracking-wider">Salary heatmap by role & location</h2>
              <p className="text-[10px] text-slate-400 font-medium mt-0.5">Average total compensation listed in LPA/Equivalent values</p>
            </div>
            <Link href="#" className="text-[11px] font-bold text-[#00a86b] hover:underline">Full heatmap →</Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 text-[10px] font-bold text-slate-400 tracking-wider">
                  <th className="pb-3 font-semibold">Role</th>
                  <th className="pb-3 font-semibold">New York</th>
                  <th className="pb-3 font-semibold">San Francisco</th>
                  <th className="pb-3 font-semibold">London</th>
                  <th className="pb-3 font-semibold">Berlin</th>
                  <th className="pb-3 font-semibold">Singapore</th>
                  <th className="pb-3 font-semibold">Sydney</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {matrixData.map((row, index) => (
                  <tr key={index} className="text-xs group hover:bg-slate-50/50">
                    <td className="py-3.5 font-bold text-slate-800">{row.role}</td>
                    <td className="py-3.5"><span className="bg-emerald-100/70 text-emerald-800 font-bold px-2.5 py-1 rounded-md text-[11px]">{row.locations.ny}</span></td>
                    <td className="py-3.5"><span className="bg-emerald-600 text-white font-bold px-2.5 py-1 rounded-md text-[11px]">{row.locations.sf}</span></td>
                    <td className="py-3.5"><span className="bg-emerald-100/40 text-emerald-700 font-bold px-2.5 py-1 rounded-md text-[11px]">{row.locations.lon}</span></td>
                    <td className="py-3.5"><span className="bg-amber-100/60 text-amber-800 font-bold px-2.5 py-1 rounded-md text-[11px]">{row.locations.ber}</span></td>
                    <td className="py-3.5"><span className="bg-emerald-100/50 text-emerald-800 font-bold px-2.5 py-1 rounded-md text-[11px]">{row.locations.sg}</span></td>
                    <td className="py-3.5"><span className="bg-amber-100/40 text-amber-700 font-bold px-2.5 py-1 rounded-md text-[11px]">{row.locations.syd}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Heatmap Legend indicator bar */}
          <div className="flex items-center justify-between mt-5 pt-3 border-t border-slate-100 text-[10px] font-medium text-slate-400">
            <span>Highest</span>
            <div className="flex gap-1 h-2 w-32 px-2">
              <div className="bg-emerald-600 flex-1 rounded-xs" />
              <div className="bg-emerald-400 flex-1 rounded-xs" />
              <div className="bg-emerald-100 flex-1 rounded-xs" />
              <div className="bg-amber-100 flex-1 rounded-xs" />
            </div>
            <span>Lowest</span>
          </div>
        </div>

      </div>

      {/* 4. Secondary Row: Roles Trends & Experience Mapping Lists */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Median Trend Lines Box */}
        <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-2xs">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xs font-black text-slate-900 uppercase tracking-wider">Top roles by median compensation</h3>
            <Link href="#" className="text-[10px] font-bold text-[#00a86b]">View all</Link>
          </div>
          <div className="space-y-3">
            {[
              { role: "Software Engineer", value: "₹24.0 LPA", growth: "▲ 18%" },
              { role: "Product Manager", value: "₹22.5 LPA", growth: "▲ 15%" },
              { role: "Data Scientist", value: "₹21.0 LPA", growth: "▲ 20%" },
              { role: "Marketing Manager", value: "₹16.2 LPA", growth: "▲ 11%" }
            ].map((r, i) => (
              <div key={i} className="flex justify-between items-center text-xs">
                <span className="font-semibold text-slate-700">{r.role}</span>
                <div className="text-right">
                  <span className="font-bold text-slate-900">{r.value}</span>
                  <span className="text-[10px] text-emerald-600 ml-2 font-medium">{r.growth}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Progression Metric Bars */}
        <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-2xs">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xs font-black text-slate-900 uppercase tracking-wider">Salary by experience (All roles)</h3>
            <Link href="#" className="text-[10px] font-bold text-[#00a86b]">View insights</Link>
          </div>
          <div className="space-y-3.5">
            {[
              { exp: "0-1 year", val: "₹7.5L", width: "w-1/4 bg-slate-200" },
              { exp: "1-3 years", val: "₹12.8L", width: "w-2/5 bg-slate-300" },
              { exp: "3-5 years", val: "₹19.2L", width: "w-3/5 bg-emerald-400" },
              { exp: "5-8 years", val: "₹28.4L", width: "w-4/5 bg-[#00a86b]" }
            ].map((bar, i) => (
              <div key={i} className="space-y-1">
                <div className="flex justify-between text-[11px] font-bold text-slate-600">
                  <span>{bar.exp}</span>
                  <span className="text-slate-900">{bar.val}</span>
                </div>
                <div className="w-full h-2 bg-slate-50 rounded-full overflow-hidden">
                  <div className={`h-full rounded-full ${bar.width}`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Explore Hub Dynamic Quick Filter Routing Tag Box */}
        <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-2xs">
          <h3 className="text-xs font-black text-slate-900 uppercase tracking-wider mb-4">Explore salaries by</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: "👤", title: "Role", sub: "900+ job titles" },
              { icon: "🏢", title: "Company", sub: "35K+ companies" },
              { icon: "📍", title: "Location", sub: "50+ cities" },
              { icon: "📈", title: "Experience", sub: "5 experience levels" },
            ].map((filter, i) => (
              <div key={i} className="p-3 bg-slate-50/70 hover:bg-slate-50 rounded-xl border border-slate-100/50 cursor-pointer transition-colors">
                <span className="text-sm">{filter.icon}</span>
                <div className="font-bold text-xs text-slate-800 mt-1">{filter.title}</div>
                <div className="text-[9px] text-slate-400 font-medium">{filter.sub}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}