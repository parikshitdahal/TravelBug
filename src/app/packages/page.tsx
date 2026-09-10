'use client'

import { packages } from '@/app/data/packages'
import PackageCard from '@/app/components/PackageCard'
import Link from 'next/link'

export default function PackagesPage() {
  return (
    <div className="bg-page min-h-screen pt-28">
      <div className="section-shell page-stack">
        <div className="card-shell mb-12 rounded-[1.8rem] p-8 text-center">
          <p className="eyebrow mb-3">Ready-Made Routes</p>
          <h1 className="section-title text-4xl">Curated Journeys</h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[var(--muted)] sm:text-base">
            Begin with a thoughtfully shaped itinerary, then enquire with your dates and travel preferences so we can guide you toward the best fit.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
            className="immersive-card group min-h-[430px]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,162,79,0.24),transparent_24%),radial-gradient(circle_at_80%_20%,rgba(111,156,134,0.18),transparent_22%),linear-gradient(180deg,#0a1625_0%,#173952_100%)] transition duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 immersive-overlay" />
            <div className="relative flex h-full flex-col justify-between p-6 text-white">
              <div className="flex items-start justify-between gap-4">
                <span className="rounded-full bg-white/88 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--text-dark)]">
                  Tailor-Made
                </span>
                <span className="rounded-full border border-[rgba(201,162,79,0.2)] bg-[rgba(255,248,231,0.12)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-100">
                  Your pace
                </span>
              </div>

              <div>
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.26em] text-[var(--accent)]">
                  TravelBug Planning Studio
                </p>
                <h3 className="max-w-xs text-3xl font-semibold leading-tight">Create a journey shaped around your pace, priorities, and travel style.</h3>
                <p className="mt-4 max-w-sm text-sm leading-6 text-slate-200">
                  Tell us the regions you have in mind, your ideal trip length, and your preferred stay style, and we&apos;ll shape a route that feels considered from the very first conversation.
                </p>
                <div className="mt-6 inline-flex items-center rounded-full border border-[rgba(201,162,79,0.2)] bg-[rgba(255,248,231,0.12)] px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm transition group-hover:bg-[rgba(255,248,231,0.18)]">
                  Begin Planning →
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
