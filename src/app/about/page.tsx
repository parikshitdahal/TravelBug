'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';
import { HeartHandshake, Leaf, Mountain } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-[#F6FAF4] min-h-screen pt-24 pb-16">
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
        <div className="absolute inset-0 bg-[rgba(30,61,47,0.5)] backdrop-blur-sm" />
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center text-white px-6 max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Our Story, Values & Identity
          </h1>
          <p className="text-lg leading-relaxed">
            At <span className="font-semibold">Bagaicha Retreat</span>, we design journeys that are immersive, meaningful, and leave a positive impact on the people and places we touch.
          </p>
        </motion.div>
      </section>

      {/* BRAND STORY */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 mb-20">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <Image
            src="/hero2.jpeg"
            alt="Brand story image"
            width={600}
            height={400}
            className="rounded-xl shadow-2xl object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-2xl font-bold text-[#1E3D2F] mb-4">Our Brand Story</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Born in the heart of Sikkim, Bagaicha Retreat began as a passion project by explorers who believed that travel should go beyond sightseeing. We envisioned journeys that celebrate culture, preserve the environment, and build meaningful connections.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Over the years, we’ve grown into a community-driven travel brand that curates authentic experiences for discerning travelers. Every itinerary we create is guided by our love for nature, respect for local traditions, and a desire to craft memories that last a lifetime.
          </p>
        </motion.div>
      </section>

      {/* VALUES */}
      <section className="bg-white py-16 mb-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h2 className="text-2xl font-bold text-center text-[#1E3D2F] mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                Icon: HeartHandshake,
                title: 'Community First',
                text: 'We collaborate with local communities at every step, ensuring they benefit directly from tourism while keeping their heritage alive.'
              },
              {
                Icon: Leaf,
                title: 'Sustainable Travel',
                text: 'We champion eco-friendly practices to protect Sikkim’s pristine landscapes, minimizing our footprint while maximizing positive impact.'
              },
              {
                Icon: Mountain,
                title: 'Authentic Experiences',
                text: 'Every journey is designed to immerse you in Sikkim’s culture, cuisine, and traditions, going beyond typical tourist trails.'
              }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="bg-[#F6FAF4] rounded-lg shadow-lg p-6 text-center hover:scale-105 transition-transform duration-300"
              >
                <value.Icon className="mx-auto mb-4 h-[60px] w-[60px] text-[#1E3D2F]" />
                <h3 className="text-lg font-semibold text-[#1E3D2F] mb-2">{value.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{value.text}</p>
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
          <h2 className="text-2xl font-bold text-[#1E3D2F] mb-6">Our Brand Identity</h2>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
            Our visual identity is inspired by the lush valleys and majestic mountains of Sikkim. 
            Earthy greens and natural tones symbolize growth and harmony with nature, while our logo embodies a spirit of exploration and balance. 
            Every detail reflects our mission to offer premium, trustworthy, and transparent travel experiences.
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
      <section className="bg-[#1E3D2F] py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
          Ready to Experience the Journey of a Lifetime?
        </h2>
        <a
          href="/custom-package"
          className="bg-white text-[#1E3D2F] px-6 py-3 rounded-full font-semibold hover:bg-[#F6FAF4] transition"
        >
          Build Your Custom Trip
        </a>
      </section>
    </div>
  );
}
