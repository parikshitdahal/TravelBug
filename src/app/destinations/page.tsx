"use client";
import Link from "next/link";
import Image from "next/image";

const districts = [
  {
    name: "North Sikkim",
    slug: "north",
    image: "/destinations/north.jpg",
    tagline: "Land of Snowy Lakes & Mountains",
  },
  {
    name: "South Sikkim",
    slug: "south",
    image: "/destinations/south.jpeg",
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
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center text-primary mb-10">Explore Sikkim by Region</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {districts.map((district) => (
          <Link key={district.slug} href={`/destinations/${district.slug}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer transition-transform hover:scale-105">
              <Image
                src={district.image}
                alt={district.name}
                width={600}
                height={400}
                className="object-cover w-full h-64 group-hover:brightness-75 transition duration-300"
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
            <button className="bg-[#1E3D2F] text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105">
              Start Booking / Customize This Trip
            </button>
          </Link>
        </div>
    </div>
  );
}
