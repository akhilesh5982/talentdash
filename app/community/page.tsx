"use client";

import Link from "next/link";

export default function CommunityPage() {
  const horizontalDiscussions = [
    { title: "Amazon appraisal discussion 2026", badge: "Trending", badgeBg: "bg-amber-50 text-amber-600 border-amber-100", replies: "312 replies", time: "2h ago", initials: ["A", "K", "S"], count: "+309" },
    { title: "Google hiring freeze impact on offers?", badge: "Hot", badgeBg: "bg-rose-50 text-rose-600 border-rose-100", replies: "245 replies", time: "3h ago", initials: ["R", "P", "M"], count: "+242" },
    { title: "Best companies for GenAI engineers", badge: "Hot", badgeBg: "bg-rose-50 text-rose-600 border-rose-100", replies: "189 replies", time: "4h ago", initials: ["V", "A", "D"], count: "+186" },
    { title: "Remote work vs office in 2026", badge: "Trending", badgeBg: "bg-amber-50 text-amber-600 border-amber-100", replies: "156 replies", time: "6h ago", initials: ["S", "K", "R"], count: "+153" },
  ];

  const trendingThreads = [
    { id: "01", title: "Amazon SDE-2 salary hike 2026 — What are you expecting?", meta: "180 replies • 1h ago • Amazon", status: "Hot", color: "text-rose-600 bg-rose-50 border-rose-100" },
    { id: "02", title: "Google L4 hiring bar — Is it really that high in 2026?", meta: "156 replies • 2h ago • Google", status: "Hot", color: "text-rose-600 bg-rose-50 border-rose-100" },
    { id: "03", title: "Microsoft return to office mandate — How's it going?", meta: "132 replies • 3h ago • Microsoft", status: "Trending", color: "text-amber-600 bg-amber-50 border-amber-100" },
    { id: "04", title: "Meta E5 performance review experiences", meta: "98 replies • 4h ago • Meta", status: "Trending", color: "text-amber-600 bg-amber-50 border-amber-100" },
    { id: "05", title: "Apple PM salary band leaked — Real numbers?", meta: "87 replies • 5h ago • Apple", status: "Hot", color: "text-rose-600 bg-rose-50 border-rose-100" },
  ];

  const popularCommunities = [
    { name: "Software Engineering", members: "128K members" },
    { name: "Product Management", members: "93K members" },
    { name: "Data Science", members: "76K members" },
    { name: "MBA / Business", members: "54K members" },
    { name: "Startups", members: "42K members" },
  ];

  const contributors = [
    { rank: "01", name: "Arjun R.", badge: "Top 1%", replies: "2.4K replies" },
    { rank: "02", name: "Priya S.", badge: "Top 1%", replies: "1.8K replies" },
    { rank: "03", name: "Karthik M.", badge: "Top 1%", replies: "1.2K replies" },
    { rank: "04", name: "Neha T.", badge: "Top 1%", replies: "980 replies" },
    { rank: "05", name: "Rohit P.", badge: "Top 1%", replies: "875 replies" },
  ];

  return (
    <div className="space-y-8 pb-16">
      
      {/* Top Welcome Action Banner Panel */}
      <div className="bg-white rounded-2xl border border-slate-100 p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow-2xs">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-xl shrink-0 border border-indigo-100">
            👥
          </div>
          <div>
            <span className="text-[10px] font-extrabold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md tracking-wider uppercase">
              Community Hub
            </span>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight mt-1">
              What professionals are discussing
            </h1>
            <p className="text-slate-500 text-xs mt-0.5">
              Real conversations. Real insights. From verified professionals.
            </p>
          </div>
        </div>
        <button className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-all">
          View all discussions →
        </button>
      </div>

      {/* Horizontal Carousel List row mapping view */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {horizontalDiscussions.map((disc, idx) => (
          <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-4 shadow-2xs flex flex-col justify-between hover:shadow-xs transition-shadow">
            <div>
              <span className={`text-[9px] font-extrabold px-2 py-0.5 rounded border uppercase tracking-wider ${disc.badgeBg}`}>
                {disc.badge}
              </span>
              <h3 className="text-xs font-bold text-slate-800 mt-3 line-clamp-2 leading-relaxed h-9">
                {disc.title}
              </h3>
            </div>
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-50 text-[10px] text-slate-400 font-medium">
              <span>{disc.replies} • {disc.time}</span>
              <div className="flex items-center gap-1">
                <div className="flex -space-x-1.5">
                  {disc.initials.map((char, i) => (
                    <div key={i} className="w-4 h-4 rounded-full bg-slate-100 border border-white text-[8px] font-bold text-slate-600 flex items-center justify-center">
                      {char}
                    </div>
                  ))}
                </div>
                <span className="text-[9px] font-bold text-slate-500">{disc.count}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Structured Split Matrix Columns Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Grid Section: Trending Now Threads */}
        <div className="lg:col-span-5 bg-white border border-slate-100 rounded-2xl p-5 shadow-2xs">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-1">
              ⚡ Trending now
            </h2>
          </div>
          <div className="divide-y divide-slate-50">
            {trendingThreads.map((item) => (
              <div key={item.id} className="flex gap-4 py-3.5 first:pt-0 last:pb-0 items-start">
                <span className="text-xs font-bold text-slate-300 pt-0.5">{item.id}</span>
                <div className="space-y-1 flex-grow">
                  <div className="text-xs font-bold text-slate-800 leading-snug hover:text-[#00a86b] cursor-pointer">
                    {item.title}
                  </div>
                  <div className="text-[10px] text-slate-400 font-medium">{item.meta}</div>
                </div>
                <span className={`text-[8px] font-extrabold px-1.5 py-0.5 rounded border uppercase tracking-wide ${item.color}`}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>
          <button className="w-full text-center text-[11px] font-bold text-slate-500 hover:text-slate-900 mt-5 pt-3 border-t border-slate-50">
            View all trending discussions →
          </button>
        </div>

        {/* Center Grid Section: Popular Hub Rooms */}
        <div className="lg:col-span-4 bg-white border border-slate-100 rounded-2xl p-5 shadow-2xs">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-1">
              ⭐ Popular communities
            </h2>
          </div>
          <div className="divide-y divide-slate-50">
            {popularCommunities.map((group, idx) => (
              <div key={idx} className="flex items-center justify-between py-3.5 first:pt-0 last:pb-0">
                <div>
                  <div className="text-xs font-bold text-slate-800">{group.name}</div>
                  <div className="text-[10px] text-slate-400 font-medium mt-0.5">{group.members}</div>
                </div>
                <button className="text-[10px] font-bold bg-slate-50 hover:bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-lg text-slate-700 transition-colors">
                  Join
                </button>
              </div>
            ))}
          </div>
          <button className="w-full text-center text-[11px] font-bold text-[#00a86b] hover:underline mt-5 pt-3 border-t border-slate-50">
            Explore all communities →
          </button>
        </div>

        {/* Right Grid Section: Elite Contributors */}
        <div className="lg:col-span-3 bg-white border border-slate-100 rounded-2xl p-5 shadow-2xs">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-1">
              🏆 Top contributors
            </h2>
          </div>
          <div className="divide-y divide-slate-50">
            {contributors.map((user) => (
              <div key={user.rank} className="flex items-center justify-between py-3.5 first:pt-0 last:pb-0">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-bold text-slate-300 w-4">{user.rank}</span>
                  <div className="w-7 h-7 rounded-full bg-slate-100 text-xs font-bold text-slate-600 flex items-center justify-center border border-slate-200">
                    {user.name[0]}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-800 flex items-center gap-1">
                      {user.name}
                      <span className="text-[8px] font-black text-indigo-600 bg-indigo-50 px-1 rounded-sm uppercase">
                        {user.badge}
                      </span>
                    </div>
                    <div className="text-[10px] text-slate-400 font-medium mt-0.5">{user.replies}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full text-center text-[11px] font-bold text-[#00a86b] hover:underline mt-5 pt-3 border-t border-slate-50">
            See all contributors →
          </button>
        </div>

      </div>

      {/* Bottom Floating Post CTA Bar Banner */}
      <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3 text-center sm:text-left">
          <span className="text-lg">📢</span>
          <p className="text-xs text-slate-600 font-medium">
            Share your experience. Help millions make better career decisions.
          </p>
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs py-2.5 px-5 rounded-xl shadow-md shadow-indigo-600/10 shrink-0 transition-all">
          📝 Start a discussion
        </button>
      </div>

    </div>
  );
}