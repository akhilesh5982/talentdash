"use client";
import { useState } from "react";

export default function SalaryCalculatorPage() {
  const [basePay, setBasePay] = useState<number>(120000);
  const [bonus, setBonus] = useState<number>(15000);
  const [equity, setEquity] = useState<number>(25000);

  const totalCompensation = basePay + bonus + equity;

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 space-y-8">
      <div>
        <h1 className="text-2xl font-black text-gray-900">Total Compensation Calculator</h1>
        <p className="text-xs text-gray-500">Breakdown your annual liquid earnings vs milestone equity options packages.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-50 border border-gray-100 p-8 rounded-2xl">
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">Base Salary ($)</label>
            <input type="number" value={basePay} onChange={(e) => setBasePay(Number(e.target.value))} className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none" />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">Annual Variable Bonus ($)</label>
            <input type="number" value={bonus} onChange={(e) => setBonus(Number(e.target.value))} className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none" />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">Yearly Vesting Equity ($)</label>
            <input type="number" value={equity} onChange={(e) => setEquity(Number(e.target.value))} className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none" />
          </div>
        </div>

        <div className="bg-gray-900 text-white p-6 rounded-xl flex flex-col justify-between">
          <div>
            <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Calculated Annual TC</div>
            <div className="text-4xl font-black text-emerald-400 mt-2">${totalCompensation.toLocaleString()}</div>
          </div>
          <div className="border-t border-gray-800 pt-4 space-y-1.5 text-xs text-gray-300">
            <div className="flex justify-between"><span>Liquid Cash component:</span><span className="font-mono text-white">${(basePay + bonus).toLocaleString()}</span></div>
            <div className="flex justify-between"><span>Paper Equity ratio:</span><span className="font-mono text-white">{((equity / totalCompensation) * 100 || 0).toFixed(1)}%</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
