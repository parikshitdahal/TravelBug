"use client";
import Link from "next/link";
import Image from "next/image";
import { destinationData } from "@/app/data/destinations";

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

                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <div className="max-w-md">
                    <h2 className="text-3xl font-semibold leading-tight">{district.name}</h2>
                    <span className="mt-5 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-[var(--text-dark)] transition md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-visible:translate-y-0 md:group-focus-visible:opacity-100">View region <span className="ml-2" aria-hidden="true">→</span></span>
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
