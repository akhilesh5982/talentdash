"use client";

import { useState } from "react";

export default function RealSalariesDashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("All Roles");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");

  // Mock Production database matching schema from image_988afe.png & image_988ac5.png
  const salaryDatabase = [
    { company: "Google", role: "Hardware Engineer", level: "L5", exp: "4 yrs exp", loc: "Bengaluru", base: 16296139, stock: 12222104, bonus: 3259228, total: 31777471, logo: "🤖" },
    { company: "Google", role: "Product Manager", level: "L5", exp: "4 yrs exp", loc: "Pune", base: 14513025, stock: 10884769, bonus: 2902605, total: 28300399, logo: "🤖" },
    { company: "Google", role: "Data Analyst", level: "L5", exp: "4 yrs exp", loc: "Mumbai", base: 14473295, stock: 10854971, bonus: 2894659, total: 28222925, logo: "🤖" },
    { company: "Google", role: "Hardware Engineer", level: "L5", exp: "4 yrs exp", loc: "Hyderabad", base: 14387827, stock: 10790870, bonus: 2877565, total: 28056262, logo: "🤖" },
    { company: "Meta", role: "Solutions Architect", level: "L4", exp: "5 yrs exp", loc: "Hyderabad", base: 16158579, stock: 9505047, bonus: 2376262, total: 28039888, logo: "♾️" },
    { company: "Meta", role: "Hardware Engineer", level: "L4", exp: "5 yrs exp", loc: "Pune", base: 15859650, stock: 9329206, bonus: 2332301, total: 27521157, logo: "♾️" },
    { company: "Google", role: "Solutions Architect", level: "L4", exp: "5 yrs exp", loc: "Bengaluru", base: 15082964, stock: 7541482, bonus: 2356713, total: 24981159, logo: "🤖" },
    { company: "Amazon", role: "Data Analyst", level: "SDE_II", exp: "5 yrs exp", loc: "Bengaluru", base: 14650259, stock: 7782950, bonus: 2289103, total: 24722312, logo: "📦" },
    { company: "Google", role: "Solutions Architect", level: "L4", exp: "5 yrs exp", loc: "Mumbai", base: 14710711, stock: 7355356, bonus: 2298549, total: 24364616, logo: "🤖" },
    { company: "Amazon", role: "Hardware Engineer", level: "SDE_II", exp: "5 yrs exp", loc: "Hyderabad", base: 14413039, stock: 7656927, bonus: 2252037, total: 24322003, logo: "📦" }
  ];

  const formatLakhs = (val: number) => {
    return `₹${(val / 100000).toFixed(1)}L`;
  };

  const formatFullCurrency = (val: number) => {
    return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(val);
  };

  const filteredData = salaryDatabase.filter((row) => {
    const matchesSearch = row.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = selectedRole === "All Roles" || row.role === selectedRole;
    const matchesLevel = selectedLevel === "All Levels" || row.level === selectedLevel;
    return matchesSearch && matchesRole && matchesLevel;
  });

  return (
    <div className="w-full bg-[#f8f9fa] min-h-screen py-8 px-4 sm:px-6 lg:px-8 font-sans antialiased text-slate-800">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* HERO BANNER SECTION PANEL */}
        <div className="w-full bg-gradient-to-r from-purple-900 to-indigo-800 rounded-2xl p-6 sm:p-10 text-white relative overflow-hidden shadow-sm">
          <div className="relative z-10 space-y-4 max-w-2xl">
            <span className="bg-white/10 text-white border border-white/10 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md">
              ✨ Salaries
            </span>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
              Real salary insights.<br />Real career growth.
            </h1>
            <p className="text-xs sm:text-sm text-purple-100 font-medium">
              Explore verified compensation data from professionals around the world. Make data-driven decisions for your next career move.
            </p>
            <button className="bg-rose-500 hover:bg-rose-600 active:scale-98 transition-all px-5 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider shadow-xs cursor-pointer">
              Explore All Salaries ›
            </button>
          </div>
          <div className="absolute top-0 right-0 w-64 h-full bg-white/5 rounded-full blur-3xl -mr-20 -mt-10 select-none pointer-events-none" />
        </div>

        {/* METRICS STRIPE SUMMARY ROW */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { label: "Salary Data Points", val: "12.5M+", sub: "Updated daily" },
            { label: "Companies", val: "35K+", sub: "Across 140+ countries" },
            { label: "Job Titles", val: "900+", sub: "From entry to executive" },
            { label: "YoY Salary Growth", val: "18%", sub: "For tech roles globally" },
            { label: "Verified Professionals Only", val: "100%", sub: "Verified by email/offer" }
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-slate-150 rounded-xl p-4 shadow-3xs space-y-1">
              <span className="text-[9px] uppercase font-black text-slate-400 tracking-wider block">{item.label}</span>
              <span className="text-xl font-black text-slate-900 tracking-tight block">{item.val}</span>
              <span className="text-[10px] text-slate-400 font-medium block">{item.sub}</span>
            </div>
          ))}
        </div>

        {/* TWO-COLUMN MATRIX HEATMAP GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Top Paying Companies Module */}
          <div className="bg-white border border-slate-150 rounded-2xl p-5 shadow-3xs space-y-4">
            <div className="flex justify-between items-center pb-2 border-b border-slate-50">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider">Top Paying Companies</h3>
              <span className="text-[11px] font-black text-rose-500 hover:underline cursor-pointer">View all companies ›</span>
            </div>
            <div className="divide-y divide-slate-100">
              {[
                { name: "Meta", amt: "₹24485K median", logo: "♾️" },
                { name: "Google", amt: "₹20605K median", logo: "🤖" },
                { name: "Microsoft", amt: "₹16657K median", logo: "🪟" },
                { name: "Amazon", amt: "₹15770K median", logo: "📦" },
                { name: "Apple", amt: "₹15770K median", logo: "🍏" }
              ].map((comp, i) => (
                <div key={i} className="flex items-center justify-between py-3.5 first:pt-1 last:pb-1">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center text-sm shadow-3xs">{comp.logo}</div>
                    <div>
                      <h4 className="text-xs font-black text-slate-900">{comp.name}</h4>
                      <span className="text-[11px] text-rose-500 font-mono font-bold">{comp.amt}</span>
                    </div>
                  </div>
                  <span className="bg-green-50 text-green-600 text-[10px] font-black px-2 py-0.5 rounded-md border border-green-100">+1.5% YoY</span>
                </div>
              ))}
            </div>
          </div>

          {/* Heatmap Metrics Table Module */}
          <div className="bg-white border border-slate-150 rounded-2xl p-5 shadow-3xs space-y-4 lg:col-span-2 overflow-x-auto">
            <div className="pb-2 border-b border-slate-50">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider">Salary Heatmap by Role & Location</h3>
            </div>
            <table className="w-full text-left border-collapse text-[11px] font-bold whitespace-nowrap">
              <thead>
                <tr className="text-[10px] uppercase font-black text-slate-400 tracking-wider bg-slate-50 border-b border-slate-100">
                  <th className="p-2.5">Role</th>
                  <th className="p-2.5 text-center">San Francisco</th>
                  <th className="p-2.5 text-center">London</th>
                  <th className="p-2.5 text-center">Berlin</th>
                  <th className="p-2.5 text-center">Singapore</th>
                  <th className="p-2.5 text-center">Sydney</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { role: "Software Engineer", sf: "₹1453L", lon: "", ber: "₹789L", sin: "", syd: "₹913L" },
                  { role: "Product Manager", sf: "₹1477L", lon: "", ber: "₹813L", sin: "", syd: "₹930L" },
                  { role: "Data Scientist", sf: "₹1394L", lon: "₹955L", ber: "₹764L", sin: "", syd: "₹872L" },
                  { role: "Data Analyst", sf: "₹813L", lon: "", ber: "₹730L", sin: "₹598L", syd: "₹747L" },
                  { role: "UX Designer", sf: "₹913L", lon: "", ber: "₹830L", sin: "₹664L", syd: "₹872L" }
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50">
                    <td className="p-2.5 font-black text-slate-700">{row.role}</td>
                    <td className="p-2.5 text-center"><span className="bg-emerald-500 text-white px-2 py-1 rounded-md font-mono">{row.sf}</span></td>
                    <td className="p-2.5 text-center">{row.lon && <span className="bg-emerald-400 text-white px-2 py-1 rounded-md font-mono">{row.lon}</span>}</td>
                    <td className="p-2.5 text-center"><span className="bg-amber-400 text-slate-900 px-2 py-1 rounded-md font-mono">{row.ber}</span></td>
                    <td className="p-2.5 text-center">{row.sin && <span className="bg-rose-300 text-slate-900 px-2 py-1 rounded-md font-mono">{row.sin}</span>}</td>
                    <td className="p-2.5 text-center"><span className="bg-emerald-400 text-white px-2 py-1 rounded-md font-mono">{row.syd}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            {/* Legend guide bar indicator strip */}
            <div className="flex items-center gap-4 justify-end text-[10px] font-black text-slate-400 uppercase pt-2">
              <span>Heatmap Level:</span>
              <div className="flex items-center gap-1.5"><span className="w-3 h-3 bg-rose-300 rounded" /> Lower</div>
              <div className="flex items-center gap-1.5"><span className="w-3 h-3 bg-amber-400 rounded" /> Medium</div>
              <div className="flex items-center gap-1.5"><span className="w-3 h-3 bg-emerald-400 rounded" /> Good</div>
              <div className="flex items-center gap-1.5"><span className="w-3 h-3 bg-emerald-500 rounded" /> Highest</div>
            </div>
          </div>
        </div>

        {/* MIDWAY HORIZONTAL SEGMENTS TRACK */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Box 1 */}
          <div className="bg-white border border-slate-150 rounded-2xl p-5 shadow-3xs space-y-3.5">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider">Top Roles by Median Total Compensation</h3>
            <div className="space-y-3 font-bold text-xs text-slate-600">
              {[
                { role: "Software Engineer", sal: "₹32.4L", grow: "+12% YoY" },
                { role: "Product Manager", sal: "₹34.8L", grow: "+8% YoY" },
                { role: "Data Scientist", sal: "₹28.5L", grow: "+15% YoY" }
              ].map((r, i) => (
                <div key={i} className="flex justify-between items-center border-b border-slate-50 pb-2 last:border-0 last:pb-0">
                  <div>
                    <span className="font-black text-slate-800 block">{r.role}</span>
                    <span className="text-green-500 text-[10px]">{r.grow}</span>
                  </div>
                  <span className="font-mono font-black text-slate-900 text-sm">{r.sal}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Box 2 */}
          <div className="bg-white border border-slate-150 rounded-2xl p-5 shadow-3xs space-y-3.5">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider">Salary by Experience</h3>
            <div className="space-y-3 text-[11px] font-black text-slate-600">
              {[
                { label: "0-1 year", val: "₹18.5L", w: "w-1/3" },
                { label: "1-3 years", val: "₹28.0L", w: "w-1/2" },
                { label: "3-5 years", val: "₹38.5L", w: "w-2/3" },
                { label: "5-8 years", val: "₹48.0L", w: "w-4/5" },
                { label: "8+ years", val: "₹60.5L", w: "w-full" }
              ].map((xp, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex justify-between font-bold">
                    <span className="text-slate-700">{xp.label}</span>
                    <span className="font-mono text-slate-900">{xp.val}</span>
                  </div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div className={`h-full bg-indigo-500 rounded-full ${xp.w}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Box 3 */}
          <div className="bg-white border border-slate-150 rounded-2xl p-5 shadow-3xs space-y-3">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider">Explore Salaries By</h3>
            <div className="grid grid-cols-2 gap-3 text-xs font-black">
              {["Role", "Company", "Location", "Experience", "Industry", "Compare"].map((lbl, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-150 p-3 rounded-xl hover:bg-rose-50/40 hover:border-rose-200 transition-colors cursor-pointer text-slate-700 flex items-center gap-2">
                  <span className="text-rose-500 text-xs">🔹</span> {lbl}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* INPUT AND CONTROL MATRIX SEARCH LABELS */}
        <div className="bg-white border border-slate-150 rounded-2xl p-4 shadow-3xs flex flex-col md:flex-row items-center gap-4 justify-between">
          <div className="w-full md:max-w-md flex items-center gap-2.5 bg-slate-50 border border-slate-100 rounded-xl px-3 py-2.5">
            <span className="text-slate-400 text-sm">🔍</span>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Filter database by company name..."
              className="w-full bg-transparent text-xs font-bold text-slate-800 placeholder-slate-400 focus:outline-none"
            />
          </div>

          <div className="flex flex-wrap items-center gap-4 w-full md:w-auto justify-end">
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="bg-white border border-slate-200 text-xs font-bold text-slate-700 px-3 py-2 rounded-xl focus:outline-none focus:border-rose-400 cursor-pointer"
            >
              <option value="All Roles">All Roles</option>
              <option value="Hardware Engineer">Hardware Engineer</option>
              <option value="Product Manager">Product Manager</option>
              <option value="Data Analyst">Data Analyst</option>
              <option value="Solutions Architect">Solutions Architect</option>
            </select>

            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="bg-white border border-slate-200 text-xs font-bold text-slate-700 px-3 py-2 rounded-xl focus:outline-none focus:border-rose-400 cursor-pointer"
            >
              <option value="All Levels">All Levels</option>
              <option value="L5">L5</option>
              <option value="L4">L4</option>
              <option value="SDE_II">SDE_II</option>
            </select>
          </div>
        </div>

        {/* COMPREHENSIVE COMP DATA TABLES PANEL */}
        <div className="bg-white border border-slate-150 rounded-2xl overflow-hidden shadow-3xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs whitespace-nowrap">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-150 text-[10px] uppercase font-black text-slate-400 tracking-wider">
                  <th className="p-4">Company / Role</th>
                  <th className="p-4 text-center">Level</th>
                  <th className="p-4">Location</th>
                  <th className="p-4">Base Salary</th>
                  <th className="p-4">Stock / Yr</th>
                  <th className="p-4">Bonus</th>
                  <th className="p-4 text-right">Total Comp ⇅</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-600">
                {filteredData.length > 0 ? (
                  filteredData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-7 h-7 bg-slate-50 rounded-md border border-slate-100 flex items-center justify-center text-xs">{row.logo}</div>
                          <div>
                            <span className="font-black text-slate-900 block">{row.company}</span>
                            <span className="text-[10px] text-slate-400 font-bold block">{row.role}</span>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        <span className="bg-blue-50 text-blue-600 border border-blue-100 text-[10px] font-black px-2 py-0.5 rounded-full inline-block">
                          {row.level}
                        </span>
                        <span className="text-[10px] text-slate-400 block mt-0.5">{row.exp}</span>
                      </td>
                      <td className="p-4 text-slate-700 font-bold">📍 {row.loc}</td>
                      <td className="p-4 font-mono text-slate-700">{formatFullCurrency(row.base)}</td>
                      <td className="p-4 font-mono text-slate-500">{formatFullCurrency(row.stock)}</td>
                      <td className="p-4 font-mono text-slate-500">{formatFullCurrency(row.bonus)}</td>
                      <td className="p-4 text-right font-black text-blue-600 font-mono text-sm">{formatFullCurrency(row.total)}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="p-10 text-center text-slate-400 font-bold">No active dynamic logs matching search rows parameters found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          
          {/* Pagination Counter Bottom Label Bar */}
          <div className="bg-slate-50 p-4 border-t border-slate-150 flex items-center justify-between text-xs font-bold text-slate-400">
            <span>Showing 1-{filteredData.length} of {filteredData.length} records</span>
            <div className="flex gap-2">
              <button className="px-2.5 py-1 bg-white border border-slate-200 rounded-lg opacity-50 cursor-not-allowed">‹</button>
              <button className="px-2.5 py-1 bg-white border border-slate-200 rounded-lg opacity-50 cursor-not-allowed">›</button>
            </div>
          </div>
        </div>

        {/* BOTTOM CALL TO ACTION INTERACTIVE LOCK STRIP */}
        <div className="w-full bg-gradient-to-r from-purple-800 to-indigo-900 rounded-2xl p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-3xs">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-base font-black tracking-tight">Add your salary & unlock all insights</h3>
            <p className="text-xs text-purple-200 font-medium">Join 100K+ tech professionals anonymously sharing data to get complete leveling visibility.</p>
          </div>
          <button className="bg-white text-purple-900 hover:bg-slate-50 active:scale-98 transition-all px-5 py-2 rounded-xl font-black text-xs uppercase tracking-wider shrink-0 cursor-pointer shadow-3xs">
            Add Your Salary
          </button>
        </div>

        {/* FOOTER STRIPE COPYRIGHT NOTE */}
        <div className="text-center text-[10px] text-slate-400 font-bold space-y-1 pt-4 border-t border-slate-200/50">
          <p>© 2026 TalentDash. Real Leveling. Structured Data.</p>
          <p className="font-medium opacity-60">All rights reserved. TalentDash is a career intelligence platform designed to serve structured, action-ready data at internet scale.</p>
        </div>

      </div>
    </div>
  );
}