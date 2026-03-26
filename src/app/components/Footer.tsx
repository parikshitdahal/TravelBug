import Link from 'next/link'
import { Facebook, Instagram, Mail, Phone } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#1E3D2F] text-[#E6ECE1] pt-12 pb-6 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">

        {/* Logo & Intro */}
        <div className="flex flex-col items-start">
          <div className="flex items-center space-x-2 mb-3">
            <Image src="/logo.svg" alt="Misty Miles Logo" width={40} height={40} className="rounded-full" />
            <span className="text-2xl font-bold text-white">Misty Miles</span>
          </div>
          <p className="text-sm text-gray-200">
            Your trusted partner in discovering the magical land of Sikkim. Book guided tours and unique experiences with us.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/packages" className="hover:text-[#FBD46D] transition">Packages</Link></li>
            <li><Link href="/destinations" className="hover:text-[#FBD46D] transition">Destinations</Link></li>
            <li><Link href="/about" className="hover:text-[#FBD46D] transition">About Us</Link></li>
            <li><Link href="/contacts" className="hover:text-[#FBD46D] transition">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-white">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-200">
            <li className="flex items-start gap-2">
              <Phone size={16} className="mt-1" /> <span>+91 9832122812</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail size={16} className="mt-1" /> <span>bagaichafarmsandventures.com</span>
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
              <Facebook className="hover:text-[#FBD46D] transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <Instagram className="hover:text-[#FBD46D] transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-400 mt-10">
        © {new Date().getFullYear()} Misty Miles. All rights reserved.
      </div>
    </footer>
  )
}
