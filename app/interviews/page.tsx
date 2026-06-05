export default function InterviewsPage() {
  const interviewQuestions = [
    { company: "Google", role: "Software Engineer", q: "Given a binary tree, serialize and deserialize it. How would you optimize the serialization bandwidth?", diff: "Hard", color: "text-red-600 bg-red-50" },
    { company: "Microsoft", role: "Product Manager", q: "How would you improve customer retention for Microsoft 365 Business Suites? Walk me through your metrics framework.", diff: "Medium", color: "text-amber-600 bg-amber-50" },
    { company: "Amazon", role: "System Architect", q: "Design a decentralized rate limiter. How would you handle state synchronization across distributed instances?", diff: "Hard", color: "text-red-600 bg-red-50" },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-black tracking-tight text-gray-900">Real interview questions from real candidates</h1>
        <p className="text-sm text-gray-500">Recent interview experiences shared by verified professionals in your domain.</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {interviewQuestions.map((iq, index) => (
          <div key={index} className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-bold text-gray-900 mr-2">{iq.company}</span>
                <span className="text-xs text-gray-400 font-medium">— {iq.role}</span>
              </div>
              <span className={`text-xs px-2.5 py-1 rounded-md font-bold ${iq.color}`}>
                {iq.diff}
              </span>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed font-mono bg-gray-50 p-4 rounded-lg border border-gray-100">
              "{iq.q}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
