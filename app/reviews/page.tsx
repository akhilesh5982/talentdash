export default function ReviewsPage() {
  const companyReviews = [
    {
      company: "Google",
      rating: 4.5,
      wlb: "Excellent",
      culture: "Highly collaborative but slow promotions.",
      pros: "Free food, incredible smart peers, stellar health benefits.",
      cons: "Bureaucracy has increased dramatically over the last few years.",
    },
    {
      company: "Amazon",
      rating: 3.8,
      wlb: "Strenuous",
      culture: "Data-driven, high ownership, fast execution.",
      pros: "Massive scale, fast career progression if you perform.",
      cons: "Pipelines are stressful, work-life balance depends heavily on your team.",
    },
    {
      company: "Meta",
      rating: 4.3,
      wlb: "Good",
      culture: "Move fast, heavy engineering autonomy.",
      pros: "Top tier compensation packages, great engineering culture.",
      cons: "Frequent re-orgs and high pressure during calibration halves.",
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div>
        <h1 className="text-3xl font-black text-gray-900 tracking-tight">Verified Company Reviews</h1>
        <p className="text-sm text-gray-500">Unfiltered sentiment analysis and data points from employees inside top tech organizations.</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {companyReviews.map((rev) => (
          <div key={rev.company} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-gray-50 pb-3">
              <div>
                <h2 className="text-lg font-bold text-gray-900 inline-block mr-3">{rev.company}</h2>
                <span className="text-xs bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded">
                  ★ {rev.rating} / 5.0
                </span>
              </div>
              <div className="text-xs text-gray-500">
                Work-Life Balance: <span className="font-bold text-gray-800">{rev.wlb}</span>
              </div>
            </div>

            <div className="space-y-2 text-sm">
              <p className="text-gray-600"><strong className="text-gray-900 text-xs block mb-0.5">Culture Overview:</strong> {rev.culture}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-emerald-50/30 p-3 rounded-lg border border-emerald-50">
                  <span className="text-xs font-bold text-emerald-800 block mb-1">▲ Pros</span>
                  <p className="text-xs text-gray-700 leading-relaxed">{rev.pros}</p>
                </div>
                <div className="bg-red-50/30 p-3 rounded-lg border border-red-50">
                  <span className="text-xs font-bold text-red-800 block mb-1">▼ Cons</span>
                  <p className="text-xs text-gray-700 leading-relaxed">{rev.cons}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
