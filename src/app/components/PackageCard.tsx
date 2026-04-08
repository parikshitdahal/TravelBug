import Image from 'next/image'
import Link from 'next/link'
import { Package } from '@/app/data/packages'

export default function PackageCard({ pkg }: { pkg: Package }) {
  const heroVideo = pkg.media.find(item => item.type === 'video')
  const heroImage = pkg.media.find(item => item.type === 'image')

  return (
    <div className="card-shell overflow-hidden rounded-[1.4rem] transition transform hover:scale-[1.02]">
      {heroVideo ? (
        <video
          src={heroVideo.src}
          autoPlay
          loop
          muted
          playsInline
          className="h-48 w-full object-cover"
        />
      ) : heroImage ? (
        <Image
          src={heroImage.src}
          alt={pkg.title}
          width={800}
          height={400}
          quality={95}
          className="h-48 w-full object-cover"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      ) : null}

      <div className="p-5">
        <h3 className="text-xl font-semibold text-primary">{pkg.title}</h3>
        <p className="mt-1 text-sm leading-6 text-gray-600">{pkg.description}</p>

        <div className="mt-3 text-sm font-medium text-[var(--muted)]">
          📅 {pkg.duration}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <Link
            href={`/packages/${pkg.slug}`}
            className="link-brand inline-block font-medium"
          >
            View Details →
          </Link>
          <Link
            href="/contacts"
            className="btn-brand inline-block rounded-full px-4 py-2 text-sm font-semibold transition"
          >
            Enquire Now
          </Link>
        </div>
      </div>
    </div>
  )
}
