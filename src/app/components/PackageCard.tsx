import Image from 'next/image'
import Link from 'next/link'
import { Package } from '@/app/data/packages'

export default function PackageCard({ pkg }: { pkg: Package }) {
  const heroVideo = pkg.media.find(item => item.type === 'video')
  const heroImage = pkg.media.find(item => item.type === 'image')

  return (
    <Link
      href={`/packages/${pkg.slug}`}
      className="immersive-card group block h-full"
      aria-label={`View ${pkg.title}`}
    >
      <div className="relative h-[430px]">
        {heroVideo ? (
          <video
            src={heroVideo.src}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : heroImage ? (
          <Image
            src={heroImage.src}
            alt={pkg.title}
            width={1000}
            height={1200}
            quality={95}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
        ) : null}

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,14,24,0.1),rgba(6,14,24,0.82))]" />

        <div className="absolute inset-x-0 bottom-0 p-5 text-white">
          <h3 className="text-2xl font-semibold leading-tight">{pkg.title}</h3>
          <span className="mt-5 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-[var(--text-dark)] transition md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-visible:translate-y-0 md:group-focus-visible:opacity-100">
            View details <span className="ml-2" aria-hidden="true">→</span>
          </span>
        </div>
      </div>
    </Link>
  )
}
