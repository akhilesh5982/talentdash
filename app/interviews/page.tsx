"use client";

export default function InterviewsDashboard() {
  return (
    <div className="w-full bg-[#f8f9fa] min-h-screen py-8 px-4 sm:px-6 lg:px-8 font-sans antialiased text-slate-800">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* HERO BANNER BLOCK */}
        <div className="w-full bg-gradient-to-r from-purple-900 to-indigo-800 rounded-2xl p-6 sm:p-10 text-white relative overflow-hidden shadow-xs">
          <div className="relative z-10 space-y-4 max-w-2xl">
            <span className="bg-white/10 text-white border border-white/10 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md">
              📝 Interviews
            </span>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
              Real interview questions from<br />real candidates.
            </h1>
            <p className="text-xs sm:text-sm text-purple-100 font-medium">
              Recent interview experiences shared by verified professionals. Get complete coding loop, system design, and behavioral questions.
            </p>
            <button className="bg-white text-purple-900 hover:bg-slate-50 active:scale-98 transition-all px-5 py-2.5 rounded-xl font-black text-xs tracking-wider cursor-pointer shadow-3xs">
              EXPLORE ALL INTERVIEWS ›
            </button>
          </div>
          <div className="absolute top-0 right-0 w-64 h-full bg-white/5 rounded-full blur-3xl -mr-20 -mt-10 pointer-events-none select-none" />
        </div>

        {/* RECENT QUESTIONS ASKED ROW */}
        <div className="space-y-4">
          <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider">Recent Questions Asked</h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { company: "Google", role: "Software Engineer • 2h ago", text: `"Given a binary tree, serialize and deserialize it. How would you design the serialization method?"`, tags: ["Algorithms", "Binary Tree", "Design"], diff: "Easy", dColor: "text-emerald-600 bg-emerald-50 border-emerald-100", ans: "128 answers" },
              { company: "Microsoft", role: "Product Manager • 3h ago", text: `"How would you improve customer retention for Microsoft 365? Walk me through your..."`, tags: ["Product Sense", "Metrics", "Strategy"], diff: "Medium", dColor: "text-amber-600 bg-amber-50 border-amber-100", ans: "96 answers" },
              { company: "Amazon", role: "SDE II • 5h ago", text: `"Design a rate limiter. How would you handle distributed systems and ensure scalability?"`, tags: ["System Design", "Scalability", "API"], diff: "Hard", dColor: "text-rose-600 bg-rose-50 border-rose-100", ans: "64 answers" },
              { company: "Apple", role: "Data Analyst • 6h ago", text: `"How would you analyze App Store performance and suggest data-driven improvements?"`, tags: ["SQL", "Analytics", "Data Visualization"], diff: "Medium", dColor: "text-amber-600 bg-amber-50 border-amber-100", ans: "52 answers" },
              { company: "Meta", role: "Product Designer • 7h ago", text: `"Redesign the Facebook Events creation flow to improve user engagement. What would you..."`, tags: ["Product Design", "UX", "User Research"], diff: "Medium", dColor: "text-amber-600 bg-amber-50 border-amber-100", ans: "41 answers" },
            ].map((card, i) => (
              <div key={i} className="bg-white border border-slate-150 rounded-xl p-4 shadow-3xs flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black text-slate-900 block">{card.company}</span>
                  </div>
                  <span className="text-[9px] text-slate-400 font-bold block">{card.role}</span>
                  <p className="text-[11px] font-bold text-slate-700 leading-relaxed italic">{card.text}</p>
                </div>
                <div className="space-y-2 pt-2 border-t border-slate-50">
                  <div className="flex flex-wrap gap-1">
                    {card.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="bg-slate-50 border border-slate-100 text-[9px] text-slate-500 font-bold px-1.5 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-[10px] pt-1">
                    <span className={`px-1.5 py-0.5 rounded border text-[9px] font-black uppercase ${card.dColor}`}>{card.diff}</span>
                    <span className="text-slate-400 font-bold font-mono">{card.ans}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TWO-COLUMN LAYOUT FOR BROWSE BY ROLE & TRENDING TOPICS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Browse Questions By Role Section */}
          <div className="bg-white border border-slate-150 rounded-2xl p-5 shadow-3xs space-y-4 lg:col-span-2">
            <div className="flex justify-between items-center pb-2 border-b border-slate-50">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider">Browse Questions By Role</h3>
              <span className="text-[11px] font-black text-rose-500 hover:underline cursor-pointer">View all roles ›</span>
            </div>
            <div className="divide-y divide-slate-100">
              {[
                { title: "Software Engineer", count: "12.4K questions", latest: `"Implement LRU Cache in O(1) time complexity"`, growth: "18%" },
                { title: "Product Manager", count: "8.7K questions", latest: `"How would you launch a new payments feature?"`, growth: "14%" },
                { title: "Data Analyst", count: "6.3K questions", latest: `"Analyze sales performance and identify trends"`, growth: "22%" },
                { title: "Product Designer", count: "4.1K questions", latest: `"Improve the checkout flow for better conversion"`, growth: "16%" }
              ].map((role, idx) => (
                <div key={idx} className="flex items-center justify-between py-4 first:pt-1 last:pb-1 group hover:bg-slate-50/30 px-1 rounded-xl transition-colors">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-xs font-black text-slate-800">{role.title}</h4>
                      <span className="text-[10px] text-slate-400 font-medium">({role.count})</span>
                    </div>
                    <p className="text-[11px] text-slate-400 font-medium italic">Latest: {role.latest}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="bg-emerald-50 text-emerald-600 border border-emerald-100 text-[10px] font-black px-2 py-0.5 rounded-md">
                      ↑ {role.growth}
                    </span>
                    <span className="text-slate-300 group-hover:text-slate-500 transition-colors text-xs font-bold">›</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trending Interview Topics Section */}
          <div className="bg-white border border-slate-150 rounded-2xl p-5 shadow-3xs space-y-4">
            <div className="pb-2 border-b border-slate-50">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider">Trending Interview Topics</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { title: "System Design", count: "2.4K questions" },
                { title: "Algorithms", count: "1.8K questions" },
                { title: "SQL", count: "1.6K questions" },
                { title: "Behavioral", count: "870 questions" },
                { title: "Product Sense", count: "765 questions" },
                { title: "Data Structures", count: "987 questions" },
                { title: "API Design", count: "876 questions" },
                { title: "Case Studies", count: "765 questions" },
                { title: "Machine Learning", count: "654 questions" }
              ].map((topic, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-100 p-3 rounded-xl hover:border-indigo-200 transition-colors cursor-pointer space-y-0.5">
                  <h4 className="text-[11px] font-black text-slate-800">{topic.title}</h4>
                  <span className="text-[9px] text-slate-400 font-bold block font-mono">{topic.count}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* BOTTOM CALL TO ACTION INTERACTIVE STRIP */}
        <div className="w-full bg-gradient-to-r from-purple-800 to-indigo-950 rounded-2xl p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-3xs">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-base font-black tracking-tight">Share your interview experience</h3>
            <p className="text-xs text-purple-200 font-medium">Help other professionals by sharing the interview loop questions you faced.</p>
          </div>
          <button className="bg-white text-purple-900 hover:bg-slate-50 active:scale-98 transition-all px-5 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider shrink-0 cursor-pointer shadow-3xs">
            SUBMIT INTERVIEW QUESTIONS
          </button>
        </div>

      </div>
    </div>
  );
}