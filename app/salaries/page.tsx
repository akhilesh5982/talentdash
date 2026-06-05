// app/salaries/page.tsx
export default function SalariesPage() {
  const topCompanies = [
    { name: "Google", median: "$186K", growth: "+14% vs last year" },
    { name: "Microsoft", median: "$167K", growth: "+11% vs last year" },
    { name: "Meta", median: "$165K", growth: "+16% vs last year" },
    { name: "Apple", median: "$164K", growth: "+9% vs last year" },
    { name: "Amazon", median: "$146K", growth: "+12% vs last year" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="space-y-2">
        <h1 className="text-3xl font-black tracking-tight text-gray-900">Real salary insights. Real career growth.</h1>
        <p className="text-sm text-gray-500">Explore verified compensation structures from software engineers and operators globally.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Top Paying Companies Table component */}
        <div className="lg:col-span-1 bg-white border border-gray-100 rounded-xl p-6 shadow-sm space-y-4">
          <h2 className="font-bold text-gray-900 text-md">Top paying companies</h2>
          <div className="divide-y divide-gray-100">
            {topCompanies.map((c, i) => (
              <div key={c.name} className="py-3 flex items-center justify-between text-sm">
                <div className="flex items-center gap-3">
                  <span className="text-xs text-gray-400 font-bold w-4">#{i + 1}</span>
                  <span className="font-semibold text-gray-900">{c.name}</span>
                </div>
                <div className="text-right">
                  <div className="font-bold text-gray-900">{c.median}</div>
                  <div className="text-[10px] text-emerald-600 font-medium">{c.growth}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Heatmap Grid Simulator component */}
        <div className="lg:col-span-2 bg-white border border-gray-100 rounded-xl p-6 shadow-sm space-y-4">
          <h2 className="font-bold text-gray-900 text-md">Salary heatmap by role & location</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-gray-100 text-gray-400 text-xs">
                  <th className="pb-3 font-semibold">Role</th>
                  <th className="pb-3 font-semibold">New York</th>
                  <th className="pb-3 font-semibold">San Francisco</th>
                  <th className="pb-3 font-semibold">London</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 font-medium">
                <tr>
                  <td className="py-4 text-gray-900 font-bold">Software Engineer</td>
                  <td className="py-4 text-emerald-700"><span className="bg-emerald-50 px-2 py-1 rounded">$168K</span></td>
                  <td className="py-4 text-emerald-700"><span className="bg-emerald-100 px-2 py-1 rounded font-bold">$175K</span></td>
                  <td className="py-4 text-emerald-600"><span className="bg-emerald-50/50 px-2 py-1 rounded">$132K</span></td>
                </tr>
                <tr>
                  <td className="py-4 text-gray-900 font-bold">Product Manager</td>
                  <td className="py-4 text-emerald-700"><span className="bg-emerald-50 px-2 py-1 rounded">$155K</span></td>
                  <td className="py-4 text-emerald-700"><span className="bg-emerald-100 px-2 py-1 rounded font-bold">$162K</span></td>
                  <td className="py-4 text-emerald-600"><span className="bg-emerald-50/50 px-2 py-1 rounded">$125K</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}