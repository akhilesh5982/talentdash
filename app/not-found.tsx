import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#F7F7F7] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#222222] mb-4">404</h1>
        <p className="text-[#484848] mb-6">This page could not be found.</p>
        <Link href="/salaries"
          className="bg-[#FF5A5F] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#e04e53]">
          Browse Salaries
        </Link>
      </div>
    </main>
  )
}