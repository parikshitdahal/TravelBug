import Image from 'next/image'
import Link from 'next/link'
import { Package } from '@/app/data/packages'

export default function PackageCard({ pkg }: { pkg: Package }) {
  const heroVideo = pkg.media.find(item => item.type === 'video')
  const heroImage = pkg.media.find(item => item.type === 'image')

  return (
    <div className="card-shell group relative overflow-hidden rounded-[1.6rem] transition-transform hover:scale-[1.02]">
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

        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5">
          <span className="rounded-full bg-white/88 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--text-dark)]">
            Curated Route
          </span>
          <span className="rounded-full border border-[rgba(201,162,79,0.24)] bg-[rgba(11,29,42,0.56)] px-3 py-1 text-sm font-medium text-white">
            {pkg.duration}
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-0 p-5 text-white">
          <h3 className="text-2xl font-semibold leading-tight">{pkg.title}</h3>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-200">{pkg.description}</p>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Link
              href={`/packages/${pkg.slug}`}
              className="rounded-full border border-[rgba(201,162,79,0.2)] bg-[rgba(255,248,231,0.12)] px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-[rgba(255,248,231,0.18)]"
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
    </div>
  )
}
