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
    <div className="bg-[#E6ECE1] min-h-screen py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-2xl shadow-2xl h-[400px] sm:h-[500px]">
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
              className="w-full h-full object-cover"
              sizes="100vw"
            />
          ) : null}

          <div className="absolute inset-0 bg-blue bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-4">
            <h1 className="text-3xl sm:text-5xl font-bold mb-4">{pkg.title}</h1>
            <div className="bg-white text-black px-6 py-2 rounded-lg font-medium text-lg shadow">
              {pkg.price} – {pkg.duration}
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <div className="grid md:grid-cols-2 gap-8 bg-white p-6 rounded-xl shadow-md">
          <div>
            <h2 className="text-2xl font-bold text-[#1E3D2F] mb-4">Trip Overview</h2>
            <p className="text-gray-800 leading-relaxed whitespace-pre-line">{pkg.overview}</p>
          </div>
          <div className="space-y-2 text-gray-700 text-sm">
            <div>📍 <strong>Pickup Location:</strong> {pkg.pickup}</div>
            <div>🕒 <strong>Duration:</strong> {pkg.duration}</div>
            <div>📅 <strong>Best Season:</strong> {pkg.bestSeason}</div>
            <div>👨‍👩‍👧‍👦 <strong>Suitable For:</strong> {pkg.suitableFor}</div>
            <div>✅ <strong>Includes:</strong> {pkg.includes.join(', ')}</div>
          </div>
        </div>

        {/* Itinerary Section */}
        <div className="bg-white rounded-xl shadow-md p-6 space-y-6">
          <h2 className="text-2xl font-bold text-[#1E3D2F]">Day-wise Itinerary</h2>
          {pkg.itinerary.map((item, index) => (
            <div key={index} className="border-l-4 border-[#3B5F4D] pl-4">
              <h3 className="font-semibold text-lg text-[#1E3D2F]">
                {item.day} – {item.title}
              </h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
        
        {/* Booking Form */}
<div className="mt-8 max-w-2xl mx-auto">
  <h2 className="text-2xl font-bold text-[#1E3D2F] mb-4">Book This Trip</h2>
  <BookingForm packageTitle={pkg.title} packageDuration={pkg.duration} />
</div>


        {/* Gallery Section */}
        {gallery.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#1E3D2F]">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {gallery.map((item, index) => (
                <div key={index} className="relative group overflow-hidden rounded-xl shadow-lg">
                  {item.type === 'video' ? (
                    <video
                      src={item.src}
                      controls
                      className="w-full rounded-xl object-cover"
                    />
                  ) : (
                    <Image
                      src={item.src}
                      alt={`${pkg.title} - Media ${index + 1}`}
                      width={1200}
                      height={800}
                      className="w-full rounded-xl object-cover"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="text-center space-y-6">
          <Link href="/custom-package">
            <button className="bg-[#1E3D2F] text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105">
              Start Booking / Customize This Trip
            </button>
          </Link>

          
        </div>

      </div>
    </div>
  )
}

export default PackageDetails
