"use client";

import { useState } from "react";

export default function CompaniesDirectory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("All Industries");
  const [currency, setCurrency] = useState("INR"); // INR or USD state toggle

  // Multipliers for structural mock simulation conversion
  const exchangeRate = 85; 

  const industryFilters = [
    "All Industries",
    "Technology",
    "E-commerce",
    "IT Services",
    "Fintech",
    "Hardware & AI",
    "Quick Commerce"
  ];

  const companiesData = [
    { name: "Google", industry: "Technology", est: "1998", size: "100,000+ size", loc: "Mountain View, CA", inrSalary: 19225152, datapoints: 60, logo: "🤖" },
    { name: "Amazon", industry: "E-commerce", est: "1994", size: "1,000,000+ size", loc: "Seattle, WA", inrSalary: 15582573, datapoints: 42, logo: "📦" },
    { name: "Microsoft", industry: "Technology", est: "1975", size: "100,000+ size", loc: "Redmond, WA", inrSalary: 16657436, datapoints: 31, logo: "🪟" },
    { name: "Meta", industry: "Technology", est: "2004", size: "60,000+ size", loc: "Menlo Park, CA", inrSalary: 18450000, datapoints: 25, logo: "♾️" },
    { name: "TCS", industry: "IT Services", est: "1968", size: "500,000+ size", loc: "Mumbai, India", inrSalary: 685000, datapoints: 120, logo: "💻" },
    { name: "Apple", industry: "Technology", est: "1976", size: "100,000+ size", loc: "Cupertino, CA", inrSalary: 17240000, datapoints: 18, logo: "🍏" },
    { name: "Flipkart", industry: "E-commerce", est: "2007", size: "10,000-49,999 size", loc: "Bengaluru, India", inrSalary: 3450000, datapoints: 9, logo: "🛒" },
    { name: "Infosys", industry: "IT Services", est: "1981", size: "100,000+ size", loc: "Bengaluru, India", inrSalary: 625000, datapoints: 6, logo: "🔷" },
    { name: "Meesho", industry: "E-commerce", est: "2015", size: "1,000-4,999 size", loc: "Bengaluru, India", inrSalary: 2325000, datapoints: 6, logo: "🛍️" },
    { name: "NVIDIA", industry: "Hardware & AI", est: "1993", size: "20,000-49,999 size", loc: "Santa Clara, CA", inrSalary: 33615000, datapoints: 6, logo: "🟢" },
    { name: "Razorpays", industry: "Fintech", est: "2014", size: "1,000-4,999 size", loc: "Bengaluru, India", inrSalary: 4125000, datapoints: 6, logo: "💳" },
    { name: "Wipro", industry: "IT Services", est: "1945", size: "100,000+ size", loc: "Bengaluru, India", inrSalary: 652500, datapoints: 6, logo: "🌐" },
    { name: "Zepto", industry: "Quick Commerce", est: "2021", size: "1,000-4,999 size", loc: "Mumbai, India", inrSalary: 3300000, datapoints: 3, logo: "⚡" },
    { name: "Arista", industry: "Technology", est: "2004", size: "4,000+ size", loc: "California, USA", inrSalary: 10956415, datapoints: 1, logo: "☁️" },
    { name: "Njk", industry: "Technology", est: "2010", size: "500+ size", loc: "Noida, India", inrSalary: 5275065, datapoints: 1, logo: "🧱" }
  ];

  // Formatting currency layout standard
  const formatSalary = (val: number) => {
    if (currency === "USD") {
      const usdAmount = Math.round(val / exchangeRate);
      return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(usdAmount);
    }
    return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(val);
  };

  // Logic pipeline processing arrays filtering runtime
  const filteredCompanies = companiesData.filter((comp) => {
    const matchesSearch = comp.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry = selectedIndustry === "All Industries" || comp.industry === selectedIndustry;
    return matchesSearch && matchesIndustry;
  });

  return (
    <div className="w-full bg-[#f8f9fa] min-h-screen py-10 px-4 sm:px-6 lg:px-8 font-sans antialiased text-slate-800">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* HEADER SECTION PANEL */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-b border-slate-200/60 pb-6">
          <div className="space-y-1.5">
            <span className="text-xs font-black text-rose-500 uppercase tracking-widest block">
              🚀 Company Directory
            </span>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">
              Explore Tech Companies
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 font-medium max-w-xl">
              Compare compensation bands, employee reviews, and leveling across top firms.
            </p>
          </div>

          {/* Currency Toggle Buttons Row */}
          <div className="flex items-center bg-white p-1 border border-slate-200 rounded-xl shadow-3xs shrink-0 self-start sm:self-center">
            <button
              onClick={() => setCurrency("INR")}
              className={`px-3 py-1.5 text-[11px] font-black rounded-lg transition-all cursor-pointer ${
                currency === "INR" ? "bg-rose-500 text-white shadow-xs" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              INR (₹)
            </button>
            <button
              onClick={() => setCurrency("USD")}
              className={`px-3 py-1.5 text-[11px] font-black rounded-lg transition-all cursor-pointer ${
                currency === "USD" ? "bg-rose-500 text-white shadow-xs" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              USD ($)
            </button>
          </div>
        </div>

        {/* INPUT AND FILTER SEARCH MATRIX FRAME MODULE */}
        <div className="bg-white border border-slate-150 rounded-2xl p-4 shadow-3xs flex flex-col md:flex-row items-center gap-4 justify-between">
          <div className="w-full md:max-w-md flex items-center gap-2.5 bg-slate-50 border border-slate-100 rounded-xl px-3 py-2.5">
            <span className="text-slate-400 text-sm">🔍</span>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search companies by name..."
              className="w-full bg-transparent text-xs font-bold text-slate-800 placeholder-slate-400 focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider whitespace-nowrap">
              Filter Industry:
            </span>
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="bg-white border border-slate-200 text-xs font-bold text-slate-700 px-3 py-2.5 rounded-xl shadow-3xs focus:outline-none focus:border-rose-400 cursor-pointer min-w-[160px]"
            >
              {industryFilters.map((ind) => (
                <option key={ind} value={ind}>{ind}</option>
              ))}
            </select>
          </div>
        </div>

        {/* GRID LAYOUT LIST DISPLAY CONTAINER */}
        {filteredCompanies.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCompanies.map((comp, idx) => (
              <div 
                key={idx} 
                className={`bg-white border rounded-2xl p-5 shadow-3xs flex flex-col justify-between space-y-5 transition-all hover:shadow-xs group relative ${
                  comp.name === "Amazon" || comp.name === "Razorpays" 
                    ? "border-rose-400/80 ring-1 ring-rose-400/10" 
                    : "border-slate-150 hover:border-slate-300"
                }`}
              >
                {/* Upper Metrics Stack */}
                <div className="space-y-3.5">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-lg shadow-3xs select-none">
                        {comp.logo}
                      </div>
                      <div className="space-y-0.5">
                        <h3 className="text-sm font-black text-slate-900 group-hover:text-rose-500 transition-colors">
                          {comp.name}
                        </h3>
                        <span className="bg-slate-100 text-slate-600 text-[9px] font-black px-2 py-0.5 rounded-md border border-slate-200/50">
                          {comp.industry}
                        </span>
                      </div>
                    </div>
                    
                    {/* Upper corner anchor point icon */}
                    <span className="text-slate-300 group-hover:text-rose-400 transition-colors text-xs font-mono select-none">
                      ↗
                    </span>
                  </div>

                  {/* Company meta rows elements wrapper stack */}
                  <div className="grid grid-cols-2 gap-y-2 gap-x-4 border-t border-b border-slate-50 py-3 text-[11px] font-bold text-slate-500">
                    <div className="flex items-center gap-1.5">
                      <span className="opacity-60 text-xs">📅</span>
                      <span>Est. {comp.est}</span>
                    </div>
                    <div className="flex items-center gap-1.5 justify-end">
                      <span className="opacity-60 text-xs">👥</span>
                      <span className="truncate max-w-[110px]">{comp.size}</span>
                    </div>
                    <div className="flex items-center gap-1.5 col-span-2">
                      <span className="opacity-60 text-xs">📍</span>
                      <span className="truncate">{comp.loc}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Core Salary Bands Layer rows */}
                <div className="bg-slate-50/60 border border-slate-100 rounded-xl p-3 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[9px] uppercase font-black text-slate-400 tracking-wider block">
                      Median Total Comp
                    </span>
                    <span className="text-xs font-black text-rose-500 tracking-tight">
                      {formatSalary(comp.inrSalary)}
                    </span>
                  </div>
                  <div className="text-right space-y-0.5">
                    <span className="text-[9px] uppercase font-black text-slate-400 tracking-wider block">
                      Data Points
                    </span>
                    <span className="text-xs font-black text-slate-800">
                      {comp.datapoints} {comp.datapoints === 1 ? "salary" : "salaries"}
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white border border-slate-150 rounded-2xl p-12 text-center max-w-md mx-auto space-y-2">
            <div className="text-2xl">🔍</div>
            <h4 className="text-xs font-black text-slate-800">No matching companies found</h4>
            <p className="text-[11px] text-slate-400 font-medium">Try broadening your parameters or select another active industry filter tab.</p>
          </div>
        )}

      </div>
    </div>
  );
}