"use client";
import Link from "next/link";
import Image from "next/image";
import { destinationData } from "@/app/data/destinations";

const taglines: Record<string, string> = {
  north: "Snow-fed lakes, alpine valleys, and high-altitude grandeur",
  south: "Tea gardens, monasteries, and a gentler rhythm in the hills",
  east: "Gangtok energy, mountain lakes, and accessible cultural highlights",
  west: "Ancient stories, monastery routes, and wide Himalayan views",
  darjeeling: "Heritage hill-station character with tea, viewpoints, and slow promenades",
  kalimpong: "Ridgeline calm, monastery culture, and an unhurried mountain pace",
  dooars: "Forests, tea country, riverside roads, and wildlife-rich foothills",
}

export default function DestinationPage() {
  return (
    <div className="bg-page min-h-screen">
      <div className="section-shell page-stack pt-28 pb-14 sm:pt-32">
        <div className="card-shell mb-12 rounded-[1.8rem] p-8 text-center">
          <p className="eyebrow mb-3">Region Guide</p>
          <h1 className="section-title text-3xl sm:text-4xl">Explore The Eastern Himalayas By Region</h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[var(--muted)] sm:text-base">
            Browse Sikkim, Darjeeling, Kalimpong, and the Dooars by region to discover the landscapes, atmosphere, and travel style that suit your trip best.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {destinationData.map((district) => (
            <Link key={district.district} href={`/destinations/${district.district}`} className="group">
              <div className="immersive-card">
                <Image
                  src={district.featuredMedia.src}
                  alt={district.name}
                  width={1200}
                  height={900}
                  quality={95}
                  className="h-[360px] w-full object-cover transition duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
                />
                <div className="absolute inset-0 immersive-overlay" />

                <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                  <div className="flex items-start justify-between gap-3">
                    <span className="rounded-full bg-white/88 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--text-dark)]">
                      Regional Circuit
                    </span>
                    <span className="tag-chip">Explore stops</span>
                  </div>

                  <div className="max-w-md">
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.24em] text-[var(--accent)]">
                      TravelBug Sikkim
                    </p>
                    <h2 className="text-3xl font-semibold leading-tight">{district.name}</h2>
                    <p className="mt-3 text-sm leading-6 text-slate-200 sm:text-base">
                      {taglines[district.district] ?? district.intro}
                    </p>
                    <div className="mt-5 inline-flex items-center rounded-full bg-white/14 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm transition group-hover:bg-white/20">
                      View Region →
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="card-shell rounded-[1.8rem] p-7 text-center sm:p-9">
          <p className="eyebrow mb-3">Planning Across More Than One Region?</p>
          <h2 className="section-title text-2xl sm:text-3xl">Combine multiple regions into one well-paced itinerary.</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[var(--muted)] sm:text-base">
            If you already know you want Gangtok, North Sikkim, Pelling, Darjeeling, or a wider circuit, we can shape the route around your dates, pace, and comfort preferences.
          </p>
          <div className="mt-6">
            <Link
              href="/custom-package"
              className="btn-brand inline-flex rounded-full px-6 py-3 text-sm font-semibold transition sm:text-base"
            >
              Plan My Route
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
