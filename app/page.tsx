// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  const telemetryMetrics = [
    { value: "12M+", label: "Salaries Data Points" },
    { value: "4.8M+", label: "Honest Reviews" },
    { value: "950K+", label: "Interview Experiences" },
    { value: "210K+", label: "Offers Decoded" },
    { value: "120K+", label: "Active Threads" },
  ];

  const mainFeatures = [
    { title: "Compensation Intelligence", desc: "Explore real salary insights and compensation trends across roles and cities.", link: "/salaries" },
    { title: "Company Reviews & Culture", desc: "Read honest reviews detailing workplace environment, work-life balance, and management.", link: "/reviews" },
    { title: "Interview Experiences", desc: "Practice with historical questions shared directly by verified candidates.", link: "/interviews" },
    { title: "Offers & Negotiations", desc: "Evaluate total target compensation packages using accurate real-world data points.", link: "/offers" },
  ];

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Module */}
      <section className="bg-gradient-to-b from-emerald-50/40 via-white to-white py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl font-black text-gray-900 tracking-tight">
            Explore. Compare. <span className="text-emerald-600">Grow.</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover real salary insights, read reviews, prepare for interviews, and find the right opportunities — all in one place.
          </p>

          {/* Search Aggregator Form */}
          <div className="bg-white p-4 rounded-xl shadow-xl shadow-gray-200/50 border border-gray-100 max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8">
            <input type="text" placeholder="Job title, skill, or company..." className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-emerald-500" />
            <input type="text" placeholder="Location (e.g. Remote, San Francisco)..." className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-emerald-500" />
            <button className="w-full bg-emerald-600 text-white font-semibold py-3 rounded-lg text-sm hover:bg-emerald-700 transition-colors">
              Search Platform
            </button>
          </div>
        </div>
      </section>

      {/* Telemetry Counter Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 bg-gray-50 p-8 rounded-2xl border border-gray-100 text-center">
          {telemetryMetrics.map((m) => (
            <div key={m.label} className="space-y-1">
              <div className="text-3xl font-black text-gray-900">{m.value}</div>
              <div className="text-xs text-gray-500 font-medium">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Platform Modules Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-extrabold text-gray-900">Explore by what matters to you</h2>
          <p className="text-sm text-gray-500">Real data from verified professionals worldwide to help make smart career moves.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mainFeatures.map((f) => (
            <div key={f.title} className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <h3 className="font-bold text-gray-900 text-lg">{f.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
              <Link href={f.link} className="text-xs text-emerald-600 font-bold hover:underline inline-flex items-center gap-1">
                Explore Module →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}