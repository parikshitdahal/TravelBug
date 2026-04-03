import Image from 'next/image'
import Link from 'next/link'
import { Package } from '@/app/data/packages'

export default function PackageCard({ pkg }: { pkg: Package }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition transform hover:scale-105">
      {pkg.media[0]?.type === 'image' ? (
        <Image
          src={pkg.media[0].src}
          alt={pkg.title}
          width={800}
          height={400}
          className="h-48 w-full object-cover"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      ) : (
        <video
          src={pkg.media[0].src}
          autoPlay
          loop
          muted
          playsInline
          className="h-48 w-full object-cover"
        />
      )}

      <div className="p-4">
        <h3 className="text-xl font-semibold text-[#1E3D2F]">{pkg.title}</h3>
        <p className="text-sm text-gray-600 mt-1">{pkg.description}</p>

        <div className="mt-3 text-sm text-gray-500">
          📅 {pkg.duration}
        </div>

        <div className="mt-4 flex items-center gap-4">
          <Link
            href={`/packages/${pkg.slug}`}
            className="inline-block text-[#3B5F4D] hover:text-[#1E3D2F] font-medium"
          >
            View Details →
          </Link>
          <Link
            href="/contacts"
            className="inline-block rounded-full bg-[#1E3D2F] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#163026]"
          >
            Enquire Now
          </Link>
        </div>
      </div>
    </div>
  )
}
