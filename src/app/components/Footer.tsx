import Link from 'next/link'
import { Facebook, Instagram, Mail, Phone } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-brand-dark mt-10 border-t border-[rgba(71,215,255,0.18)] pt-12 pb-6 text-[#dbe8f4]">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-4">

        {/* Logo & Intro */}
        <div className="flex flex-col items-start">
          <div className="flex items-center space-x-2 mb-3">
            <Image src="/logo.svg" alt="TravelBug Sikkim Logo" width={40} height={40} className="rounded-full" />
            <span className="text-2xl font-bold text-white">TravelBug Sikkim</span>
          </div>
          <p className="max-w-xs text-sm leading-6 text-slate-300">
            Your trusted partner in discovering the magical land of Sikkim. Book guided tours and unique experiences with us.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/packages" className="hover:text-[var(--accent)] transition">Packages</Link></li>
            <li><Link href="/destinations" className="hover:text-[var(--accent)] transition">Destinations</Link></li>
            <li><Link href="/about" className="hover:text-[var(--accent)] transition">About Us</Link></li>
            <li><Link href="/contacts" className="hover:text-[var(--accent)] transition">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-white">Contact</h4>
          <ul className="space-y-2 text-sm text-slate-300">
            <li className="flex items-start gap-2">
              <Phone size={16} className="mt-1" /> <span>+91 9832122812</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail size={16} className="mt-1" /> <span>TravelBug Sikkim</span>
            </li>
            <li>
              📍 Gangtok, Sikkim
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-white">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <Facebook className="transition hover:text-[var(--accent)]" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <Instagram className="transition hover:text-[var(--accent)]" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-[rgba(201,218,232,0.12)] px-6 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>Crafted for mountain journeys, local stories, and mindful travel.</p>
        © {new Date().getFullYear()} TravelBug Sikkim. All rights reserved.
      </div>
    </footer>
  )
}
