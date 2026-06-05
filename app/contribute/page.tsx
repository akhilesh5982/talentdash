"use client";

import { submitSalaryAction } from "@/app/actions/salary";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContributePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData(e.currentTarget);
      await submitSalaryAction(formData);
      router.push("/salaries");
    } catch (err) {
      alert("Submission error tracking pipeline connection failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm space-y-6">
        <div>
          <h1 className="text-2xl font-black text-gray-900 tracking-tight">Contribute Anonymous Compensation</h1>
          <p className="text-xs text-gray-500 mt-1">Help democratize local marketplace leverage. Submissions are strictly un-linked.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs font-semibold text-gray-700">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1">Company Name</label>
              <input name="companyName" required placeholder="e.g. Google" className="w-full border border-gray-200 px-3 py-2 rounded-lg font-medium focus:outline-none" />
            </div>
            <div>
              <label className="block mb-1">Role Title</label>
              <input name="role" required placeholder="e.g. Software Engineer" className="w-full border border-gray-200 px-3 py-2 rounded-lg font-medium focus:outline-none" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block mb-1">Level Grade</label>
              <select name="level" className="w-full border border-gray-200 px-3 py-2 rounded-lg font-medium focus:outline-none">
                <option value="SDE_I">SDE I</option>
                <option value="SDE_II">SDE II</option>
                <option value="SDE_III">SDE III</option>
                <option value="STAFF">Staff IC</option>
                <option value="L3">L3</option>
                <option value="L4">L4</option>
                <option value="L5">L5</option>
              </select>
            </div>
            <div>
              <label className="block mb-1">Location</label>
              <input name="location" required placeholder="e.g. Bengaluru" className="w-full border border-gray-200 px-3 py-2 rounded-lg font-medium focus:outline-none" />
            </div>
            <div>
              <label className="block mb-1">Experience (Years)</label>
              <input name="experienceYears" type="number" required placeholder="3" className="w-full border border-gray-200 px-3 py-2 rounded-lg font-medium focus:outline-none" />
            </div>
          </div>

          <div className="border-t border-gray-50 pt-4 space-y-3">
            <h3 className="text-gray-900 font-bold">Annual Compensation Metrics (INR Gross Scale)</h3>
            
            <div>
              <label className="block mb-1">Base Salary (Absolute Value)</label>
              <input name="baseSalary" type="number" required placeholder="e.g. 2400000" className="w-full border border-gray-200 px-3 py-2 rounded-lg font-medium font-mono focus:outline-none" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-1">Variable Bonus (Annual)</label>
                <input name="bonus" type="number" placeholder="e.g. 300000" className="w-full border border-gray-200 px-3 py-2 rounded-lg font-medium font-mono focus:outline-none" />
              </div>
              <div>
                <label className="block mb-1">Stock Vesting (Per Year ratio)</label>
                <input name="stock" type="number" placeholder="e.g. 600000" className="w-full border border-gray-200 px-3 py-2 rounded-lg font-medium font-mono focus:outline-none" />
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 rounded-xl transition-colors disabled:opacity-50"
          >
            {loading ? "Streaming payload..." : "Broadcast Anonymous Submission"}
          </button>
        </form>
      </div>
    </div>
  );
}
