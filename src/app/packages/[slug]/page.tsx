'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { packages } from '@/app/data/packages'
import { packageGalleries } from '../../data/gallery'
import BookingForm from '@/app/components/BookingForm'

const PackageDetails = () => {
  const pathname = usePathname()
  const slug = pathname?.split('/').pop()
  const pkg = packages.find((p) => p.slug === slug)

  if (!pkg) {
    return (
      <div className="text-center text-xl font-semibold py-20">
        Package not found.
      </div>
    )
  }

  const heroVideo = pkg.media.find((m) => m.type === 'video')
  const heroImage = pkg.media.find((m) => m.type === 'image')
  const gallery = packageGalleries[slug || ''] || []

  return (
    <div className="bg-page min-h-screen py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto page-stack">

        {/* Hero Section */}
        <div className="relative h-[420px] overflow-hidden rounded-[2rem] shadow-[0_26px_80px_rgba(15,34,52,0.18)] sm:h-[520px]">
          {heroVideo ? (
            <video
              src={heroVideo.src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          ) : heroImage ? (
            <Image
              src={heroImage.src}
              alt={pkg.title}
              width={1600}
              height={1000}
              quality={95}
              className="w-full h-full object-cover"
              sizes="100vw"
            />
          ) : null}

          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[linear-gradient(180deg,rgba(8,19,29,0.22),rgba(8,19,29,0.72))] px-4 text-center text-white">
            <p className="eyebrow mb-3 text-[var(--accent)]">Curated Route</p>
            <h1 className="mb-4 text-3xl font-black leading-tight sm:text-5xl">{pkg.title}</h1>
            <div className="rounded-full border border-white/10 bg-white/10 px-6 py-2 text-lg font-medium text-white shadow backdrop-blur-sm">
              {pkg.duration}
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <div className="card-shell grid gap-8 rounded-[1.6rem] p-6 md:grid-cols-[1.3fr_0.9fr]">
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">Trip Overview</h2>
            <p className="whitespace-pre-line text-[15px] leading-7 text-[var(--muted)]">{pkg.overview}</p>
          </div>
          <div className="rounded-[1.4rem] border border-[rgba(17,24,39,0.08)] bg-[linear-gradient(180deg,rgba(94,224,255,0.08),rgba(255,255,255,0.72))] p-5 text-sm text-[var(--muted)]">
            <div className="space-y-3">
              <div>📍 <strong>Pickup Location:</strong> {pkg.pickup}</div>
              <div>🕒 <strong>Duration:</strong> {pkg.duration}</div>
              <div>📅 <strong>Best Season:</strong> {pkg.bestSeason}</div>
              <div>👨‍👩‍👧‍👦 <strong>Suitable For:</strong> {pkg.suitableFor}</div>
              <div>✅ <strong>Includes:</strong> {pkg.includes.join(', ')}</div>
            </div>
          </div>
        </div>

        {/* Itinerary Section */}
        <div className="card-shell rounded-[1.6rem] p-6 space-y-6">
          <h2 className="text-2xl font-bold text-primary">Day-wise Itinerary</h2>
          <div className="grid gap-4">
          {pkg.itinerary.map((item, index) => (
            <div key={index} className="rounded-[1.1rem] border border-[rgba(17,24,39,0.08)] bg-white/88 p-4 shadow-[0_10px_24px_rgba(8,26,39,0.06)]">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent-deep)]">
                {item.day}
              </p>
              <h3 className="font-semibold text-lg text-primary">
                {item.day} – {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.description}</p>
            </div>
          ))}
          </div>
        </div>
        
        {/* Booking Form */}
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="space-y-4">
            <p className="eyebrow">Trip Enquiry</p>
            <h2 className="section-title text-3xl">Book This Trip</h2>
            <p className="max-w-xl text-sm leading-6 text-[var(--muted)] sm:text-base">
              Choose your preferred dates and stay style, then send the enquiry. We’ll get back with availability, transport flow, and the best-fit plan for your trip.
            </p>
          </div>
          <BookingForm packageTitle={pkg.title} packageDuration={pkg.duration} />
        </div>


        {/* Gallery Section */}
        {gallery.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {gallery.map((item, index) => (
                <div key={index} className="immersive-card">
                  {item.type === 'video' ? (
                    <video
                      src={item.src}
                      controls
                      className="h-full w-full rounded-xl object-cover"
                    />
                  ) : (
                    <Image
                      src={item.src}
                      alt={`${pkg.title} - Media ${index + 1}`}
                      width={1200}
                      height={800}
                      quality={95}
                      className="h-full w-full rounded-xl object-cover"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
          <Link href="/custom-package" className="btn-brand rounded-full px-6 py-3 text-lg font-semibold transition-transform duration-300 hover:scale-105">
            Customize This Trip
          </Link>
          <Link href="/contacts" className="btn-secondary rounded-full px-6 py-3 text-lg font-semibold transition">
            Talk To Us First
          </Link>
        </div>

      </div>
    </div>
  )
}

export default PackageDetails
