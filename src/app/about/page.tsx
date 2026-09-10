'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';
import { HeartHandshake, Leaf, Mountain } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-page min-h-screen pt-24 pb-16">
      {/* HERO WITH VIDEO BACKGROUND */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden mb-20">
        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/about/heroo.mp4" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-[rgba(8,19,29,0.58)] backdrop-blur-sm" />
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center text-white px-6 max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            The Story, Values, and Point of View Behind TravelBug Sikkim
          </h1>
          <p className="text-lg leading-relaxed">
            At <span className="font-semibold">TravelBug Sikkim</span>, we design journeys that feel immersive, well-paced, and respectful of the places and communities that make them memorable.
          </p>
        </motion.div>
      </section>

      {/* BRAND STORY */}
      <section className="mx-auto mb-20 grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:px-12">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="card-shell overflow-hidden rounded-[1.8rem] p-3">
            <Image
              src="/hero2.jpeg"
              alt="Brand story image"
              width={600}
              height={400}
              className="rounded-[1.2rem] shadow-2xl object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <p className="eyebrow mb-3">Why We Exist</p>
          <h2 className="text-2xl font-bold text-primary mb-4">Why We Built TravelBug Sikkim</h2>
          <p className="mb-4 leading-relaxed text-[var(--muted)]">
            TravelBug Sikkim began with a simple belief: the best journeys should go beyond checklist sightseeing. We wanted to create travel experiences that feel better paced, more regionally grounded, and more attentive to the details that shape a truly memorable trip.
          </p>
          <p className="leading-relaxed text-[var(--muted)]">
            Over time, that approach has grown into a travel brand shaped by local knowledge, respect for cultural context, and a commitment to journeys that feel both polished and personal. Every itinerary is designed to balance beauty, comfort, authenticity, and practicality.
          </p>
        </motion.div>
      </section>

      {/* VALUES */}
      <section className="mb-20 bg-[rgba(255,255,255,0.02)] py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <p className="eyebrow mb-3 text-center">What Guides Us</p>
          <h2 className="text-2xl font-bold text-center text-primary mb-12">
            The Principles That Guide Our Work
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                Icon: HeartHandshake,
                title: 'Community First',
                text: 'We work in ways that value local people, local knowledge, and the long-term health of the destinations we operate in.'
              },
              {
                Icon: Leaf,
                title: 'Sustainable Travel',
                text: 'We believe travel should be thoughtful and low-impact, with choices that respect landscapes, seasons, and carrying capacity.'
              },
              {
                Icon: Mountain,
                title: 'Authentic Experiences',
                text: 'We design journeys that feel rooted in place, blending major highlights with the atmosphere, culture, and rhythm that give a region its character.'
              }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="card-shell rounded-[1.4rem] p-6 text-center transition-transform duration-300 hover:scale-105"
              >
                <value.Icon className="mx-auto mb-4 h-[60px] w-[60px] text-[var(--accent-deep)]" />
                <h3 className="text-lg font-semibold text-primary mb-2">{value.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--muted)]">{value.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BRAND IDENTITY */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="eyebrow mb-3">Visual Language</p>
          <h2 className="text-2xl font-bold text-primary mb-6">The Visual Language Of The Brand</h2>
          <p className="mb-8 max-w-3xl mx-auto leading-relaxed text-[var(--muted)]">
            Our visual identity draws from mountain dusk, high-altitude light, and the quiet richness of Himalayan landscapes. Deep blue brings structure and calm, while restrained cyan, sage, and warm metallic tones add clarity, freshness, and a more premium finish.
          </p>
          <Image
            src="/logo.svg"
            alt="Brand identity"
            width={300}
            height={100}
            className="mx-auto"
          />
        </motion.div>
      </section>

      {/* CTA */}
      <section className="bg-brand-dark py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
          Ready to start planning a more considered Himalayan journey?
        </h2>
        <a
          href="/custom-package"
          className="btn-brand inline-block rounded-full px-6 py-3 font-semibold transition"
        >
          Plan A Custom Journey
        </a>
      </section>
    </div>
  );
}
