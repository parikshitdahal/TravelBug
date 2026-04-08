"use client";
import Link from "next/link";
import Image from "next/image";

const districts = [
  {
    name: "North Sikkim",
    slug: "north",
    image: "/destinations/gtk.jpg",
    tagline: "Land of Snowy Lakes & Mountains",
  },
  {
    name: "South Sikkim",
    slug: "south",
    image: "/destinations/temi.jpg",
    tagline: "Serenity in Monasteries & Gardens",
  },
  {
    name: "East Sikkim",
    slug: "east",
    image: "/destinations/east.jpg",
    tagline: "Urban Vibes and Cultural Corners",
  },
  {
    name: "West Sikkim",
    slug: "west",
    image: "/destinations/west.jpg",
    tagline: "Adventure Trails and Ancient Stories",
  },
];

export default function DestinationPage() {
  return (
    <div className="bg-page min-h-screen">
      <div className="container mx-auto px-4 pt-28 pb-10 sm:pt-32">
      <div className="mb-10 text-center">
        <p className="eyebrow mb-3">Region Guide</p>
        <h1 className="section-title text-3xl sm:text-4xl">Explore Sikkim by Region</h1>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[var(--muted)] sm:text-base">
          Browse the state district by district to see which mood suits your trip best, from alpine drives to tea gardens and monastery towns.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {districts.map((district) => (
          <Link key={district.slug} href={`/destinations/${district.slug}`}>
            <div className="card-shell group relative overflow-hidden rounded-[1.6rem] transition-transform hover:scale-[1.02]">
              <Image
                src={district.image}
                alt={district.name}
                width={1200}
                height={400}
                quality={95}
                className="object-cover w-full h-64 group-hover:brightness-75 transition duration-300"
                sizes="(min-width: 640px) 50vw, 100vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent px-4 py-6">
                <h2 className="text-white text-2xl font-bold">{district.name}</h2>
                <p className="text-white text-sm">{district.tagline}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {/* CTA Button */}
        <div className="text-center mt-12">
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
