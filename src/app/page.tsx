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
    <div className="bg-[#E6ECE1]">
      {/* Hero Section */}
      <section
        className="h-screen bg-cover bg-center flex items-center justify-center text-white transition-all duration-1000"
        style={{ backgroundImage: `url(${backgroundImages[currentImage]})` }}
      >
        <div className="bg-[rgba(30,61,47,0.4)] backdrop-blur-sm p-10 rounded-xl text-center max-w-xl">
          <h1 className="text-5xl font-bold mb-4">Explore Sikkim Like Never Before</h1>
          <p className="text-lg">Discover curated/customiz tour experiences across the Himalayas</p>
          <Link
            href="/destinations"
            className="mt-6 inline-block bg-[#3B5F4D] hover:bg-[#1E3D2F] text-white px-6 py-3 rounded-full font-semibold transition"
          >
            Explore Destinations
          </Link>
        </div>
      </section>

      {/* Popular Destinations Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#1E3D2F] text-center mb-10">Popular Destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topDestinations.map((dest, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden transition"
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
                  className="h-48 w-full object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              )}
              <div className="p-4">
                <h3 className="text-xl font-semibold text-primary">{dest.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{dest.description}</p>
                <p className="text-sm text-gray-400 mt-1 capitalize">📍 {dest.district} Sikkim</p>
                <Link
                  href={`/destinations/${dest.district}`}
                  className="mt-4 inline-block text-[#3B5F4D] hover:text-[#1E3D2F] font-medium"
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
