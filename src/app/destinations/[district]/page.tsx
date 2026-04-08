"use client"

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { destinationData } from '@/app/data/destinations'
import Link from 'next/link'

function DestinationCard({
  name,
  description,
  tags,
  media,
}: {
  name: string
  description: string
  tags: string[]
  media: Array<{ type: 'image' | 'video'; src: string }>
}) {
  const [mediaIndex, setMediaIndex] = useState(0)

  useEffect(() => {
    if (media.length <= 1) return

    const interval = setInterval(() => {
      setMediaIndex(prev => (prev + 1) % media.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [media.length])

  const activeMedia = media[mediaIndex]

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden">
      <div className="h-52">
        {activeMedia.type === 'video' ? (
          <video
            src={activeMedia.src}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
          />
        ) : (
          <Image
            src={activeMedia.src}
            alt={name}
            width={800}
            height={400}
            quality={95}
            className="w-full h-full object-cover"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
        )}
      </div>
      <div className="p-4 space-y-2">
        <h2 className="text-xl font-semibold text-primary">{name}</h2>
        <p className="text-gray-600">{description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-accent text-sm px-2 py-1 rounded-full text-white"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function DistrictPage() {
  const slug = usePathname()?.split('/').pop()
  const district = destinationData.find(d => d.district === slug)

  const [activeTag, setActiveTag] = useState<string | null>(null)

  if (!district) {
    return <div className="text-center text-xl mt-10">District not found</div>
  }

  const allTags = Array.from(new Set(district.destinations.flatMap(dest => dest.tags)))

  return (
    <div className="bg-page min-h-screen pb-16">
      <div className="container mx-auto p-6 space-y-12">
        {/* Hero Media */}
        <div className="overflow-hidden rounded-[1.8rem] shadow-[0_24px_70px_rgba(15,34,52,0.18)]">
          {district.featuredMedia.type === 'video' ? (
            <video
              src={district.featuredMedia.src}
              autoPlay
              loop
              muted
              className="w-full h-[400px] object-cover"
            />
          ) : (
            <Image
              src={district.featuredMedia.src}
              className="w-full h-[400px] object-cover"
              alt={district.district}
              width={1600}
              height={800}
              quality={95}
              sizes="100vw"
            />
          )}
        </div>

        {/* District Intro */}
        <div className="card-shell rounded-[1.6rem] p-6">
          <p className="eyebrow mb-3">{district.district} district</p>
          <h1 className="text-3xl font-bold capitalize text-primary mb-4">
            {district.district} Sikkim
          </h1>
          <p className="text-lg text-gray-700">{district.intro}</p>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setActiveTag(null)}
            className={`px-4 py-1 rounded-full text-sm font-medium border transition ${
              activeTag === null
                ? 'bg-brand-dark border-[var(--accent)] text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-1 rounded-full text-sm font-medium border transition ${
                activeTag === tag
                  ? 'bg-brand-dark border-[var(--accent)] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Destination Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {district.destinations
            .filter(dest => !activeTag || dest.tags.includes(activeTag))
            .map((dest, index) => (
              <DestinationCard
                key={`${dest.name}-${index}`}
                name={dest.name}
                description={dest.description}
                tags={dest.tags}
                media={Array.isArray(dest.media) ? dest.media : [dest.media]}
              />
            ))}
        </div>
        {/* CTA Button */}
        <div className="text-center">
          <Link href="/custom-package">
            <button className="btn-brand rounded-xl px-6 py-3 text-lg font-semibold transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              Start Booking / Customize This Trip
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
