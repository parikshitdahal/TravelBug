"use client"

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { destinationData } from '@/app/data/destinations'
import Link from 'next/link'

function DestinationCard({
  name,
  media,
}: {
  name: string
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
    <div className="immersive-card group">
      <div className="relative h-[360px]">
        {activeMedia.type === 'video' ? (
          <video
            src={activeMedia.src}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <Image
            src={activeMedia.src}
            alt={name}
            width={800}
            height={1000}
            quality={95}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
        )}
        <div className="absolute inset-0 immersive-overlay" />

        <div className="absolute inset-x-0 bottom-0 p-5 text-white">
          <div>
            <h2 className="text-2xl font-semibold leading-tight">{name}</h2>
          </div>
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
      <div className="section-shell page-stack pt-28 pb-4">
        {/* Hero Media */}
        <div className="overflow-hidden rounded-[1.8rem] shadow-[0_24px_70px_rgba(15,34,52,0.18)]">
          {district.featuredMedia.type === 'video' ? (
            <video
              src={district.featuredMedia.src}
              autoPlay
              loop
              muted
              playsInline
              className="h-[380px] w-full object-cover sm:h-[430px]"
            />
          ) : (
            <Image
              src={district.featuredMedia.src}
              className="h-[380px] w-full object-cover sm:h-[430px]"
              alt={district.district}
              width={1600}
              height={800}
              quality={95}
              sizes="100vw"
            />
          )}
        </div>

        {/* District Intro */}
        <div className="card-shell rounded-[1.8rem] p-7 sm:p-8">
          <p className="eyebrow mb-3">regional guide</p>
          <h1 className="section-title mb-4 text-3xl sm:text-4xl">
            {district.name}
          </h1>
          <p className="max-w-3xl text-sm leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">{district.intro}</p>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setActiveTag(null)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              activeTag === null
                ? 'bg-brand-dark border-[var(--accent)] text-white shadow-[0_10px_24px_rgba(15,34,52,0.18)]'
                : 'bg-white/72 text-[var(--muted)] hover:bg-white'
            }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                activeTag === tag
                  ? 'bg-brand-dark border-[var(--accent)] text-white shadow-[0_10px_24px_rgba(15,34,52,0.18)]'
                  : 'bg-white/72 text-[var(--muted)] hover:bg-white'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Destination Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {district.destinations
            .filter(dest => !activeTag || dest.tags.includes(activeTag))
            .map((dest, index) => (
              <DestinationCard
                key={`${dest.name}-${index}`}
                name={dest.name}
                media={Array.isArray(dest.media) ? dest.media : [dest.media]}
              />
            ))}
        </div>

        {/* CTA Button */}
        <div className="card-shell rounded-[1.8rem] p-7 text-center sm:p-9">
          <p className="eyebrow mb-3">Shape Your Route</p>
          <h2 className="section-title text-2xl sm:text-3xl">Want this district as part of a bigger journey?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[var(--muted)] sm:text-base">
            We can combine this region with Gangtok, Pelling, Darjeeling, Kalimpong, or North Sikkim and build a smoother route around your travel dates.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/custom-package" className="btn-brand rounded-full px-6 py-3 text-sm font-semibold transition sm:text-base">
              Customize This Trip
            </Link>
            <Link href="/contacts" className="btn-secondary rounded-full px-6 py-3 text-sm font-semibold transition sm:text-base">
              Talk To Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
