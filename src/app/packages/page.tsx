'use client'

import { packages } from '@/app/data/packages'
import PackageCard from '@/app/components/PackageCard'
import Link from 'next/link'

export default function PackagesPage() {
  return (
    <div className="pt-28 bg-[#F4F7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-[#1E3D2F] mb-10 text-center">
          Our Tour Packages
        </h1>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <div
              key={pkg.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms`, animationFillMode: 'both' }}
            >
              <PackageCard pkg={pkg} />
            </div>
          ))}

          {/* Custom Package Card */}
          <Link
            href="/custom-package"
            className="bg-white rounded-xl border border-dashed border-[#3B5F4D] shadow-md hover:shadow-lg hover:scale-105 transition transform flex flex-col items-center justify-center p-6 text-center"
          >
            <div className="text-3xl mb-2">✨</div>
            <h3 className="text-xl font-semibold text-[#1E3D2F]">Custom Package</h3>
            <p className="text-black text-bold text-sm mt-1">Build your own personalized tour itinerary</p>
            <button className="mt-4 bg-[#3B5F4D] hover:bg-[#1E3D2F] text-white px-4 py-2 rounded-full transition">
              Start Now →
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
