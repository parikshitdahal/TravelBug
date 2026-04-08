'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { destinationData } from '@/app/data/destinations'

const backgroundImages = [
  '/hero.jpeg',
  '/hero2.jpeg',
  '/hero3.jpg',
  '/hero5.jpg',
]

export default function HomePage() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Extract top destination from each district (or first 3 total if needed)
  const topDestinations = destinationData.flatMap(d =>
    d.destinations.length
      ? [{ ...d.destinations[0], district: d.district }]
      : []
  ).slice(0, 3)

  return (
    <div className="bg-page">
      {/* Hero Section */}
      <section
        className="h-screen bg-cover bg-center flex items-center justify-center text-white transition-all duration-1000"
        style={{ backgroundImage: `url(${backgroundImages[currentImage]})` }}
      >
        <div className="max-w-3xl px-6 text-center">
          <div className="mb-4 inline-flex rounded-full border border-[rgba(71,215,255,0.22)] bg-[rgba(8,19,29,0.52)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--accent)] backdrop-blur-md">
            Curated journeys in Sikkim
          </div>
          <div className="rounded-[2rem] border border-[rgba(71,215,255,0.18)] bg-[rgba(8,19,29,0.52)] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-md sm:p-10">
            <h1 className="mb-4 text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
              Explore Sikkim with a calmer, smarter way to travel
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
              Discover immersive mountain routes, curated stays, and flexible trip planning built around what you actually want to experience.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/destinations"
                className="btn-brand inline-block rounded-full px-6 py-3 font-semibold transition"
              >
                Explore Destinations
              </Link>
              <Link
                href="/custom-package"
                className="btn-secondary inline-block rounded-full px-6 py-3 font-semibold transition"
              >
                Build a Custom Trip
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="mb-10 text-center">
          <p className="eyebrow mb-3">Most Loved Places</p>
          <h2 className="section-title text-3xl">Popular Destinations</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topDestinations.map((dest, index) => (
            <div
              key={index}
              className="card-shell overflow-hidden rounded-[1.4rem] transition hover:-translate-y-1"
            >
              {dest.media.type === 'video' ? (
                <video
                  src={dest.media.src}
                  className="h-48 w-full object-cover"
                  autoPlay
                  loop
                  muted
                />
              ) : (
                <Image
                  src={dest.media.src}
                  alt={dest.name}
                  width={800}
                  height={400}
                  quality={95}
                  className="h-48 w-full object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              )}
              <div className="p-4">
                <h3 className="text-xl font-semibold text-primary">{dest.name}</h3>
                <p className="mt-1 text-sm text-gray-600">{dest.description}</p>
                <p className="mt-2 text-sm font-medium text-[var(--muted)] capitalize">📍 {dest.district} Sikkim</p>
                <Link
                  href={`/destinations/${dest.district}`}
                  className="link-brand mt-4 inline-block font-medium"
                >
                  View More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
