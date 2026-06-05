import Link from "next/link";

export default function ToolsDashboardPage() {
  const calculationsTools = [
    { title: "Salary Calculator", desc: "Calculate your exact take-home pay, local taxes, and deduction structures.", slug: "salary-calculator" },
    { title: "Salary Hike Calculator", desc: "Plan your next appraisal window or calculate compounding values on external offers.", slug: "hike-calculator" },
    { title: "Equity Calculator", desc: "Project future valuations for startup options, RSUs, and liquid vest schedules.", slug: "equity-calculator" },
    { title: "Resume Analyzer", desc: "Get structural feedback using AI tailored against verified job descriptions.", slug: "resume-analyzer" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-black text-gray-900 tracking-tight">Powerful tools. Smarter career moves.</h1>
        <p className="text-sm text-gray-500">Accurate trackers and metrics to help you analyze data and negotiate effectively.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {calculationsTools.map((t) => (
          <div key={t.title} className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-2">
              <h3 className="font-bold text-gray-900 text-sm">{t.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{t.desc}</p>
            </div>
            <Link href={`/tools/${t.slug}`} className="w-full text-center bg-gray-900 hover:bg-gray-800 text-white font-semibold py-2.5 rounded-lg text-xs transition-colors block">
              Calculate now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
