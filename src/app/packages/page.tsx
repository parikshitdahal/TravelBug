'use client'

import { packages } from '@/app/data/packages'
import PackageCard from '@/app/components/PackageCard'
import Link from 'next/link'

export default function PackagesPage() {
  return (
    <div className="bg-page min-h-screen pt-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 text-center">
          <p className="eyebrow mb-3">Ready-Made Routes</p>
          <h1 className="section-title text-4xl">Our Tour Packages</h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[var(--muted)] sm:text-base">
            Start with a curated route, then enquire with your preferred dates and travel style so we can shape the trip around you.
          </p>
        </div>

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
            className="card-shell flex transform flex-col items-center justify-center rounded-[1.4rem] border-dashed border-[var(--accent-deep)] p-6 text-center transition hover:scale-105"
          >
            <div className="text-3xl mb-2">✨</div>
            <h3 className="text-xl font-semibold text-primary">Custom Package</h3>
            <p className="mt-1 text-sm text-[var(--muted)]">Build your own personalized tour itinerary</p>
            <button className="btn-brand mt-4 rounded-full px-4 py-2 transition">
              Start Now →
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
