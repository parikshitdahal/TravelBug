'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Packages', href: '/packages' },
  { name: 'Destinations', href: '/destinations' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contacts' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-[rgba(201,162,79,0.12)] bg-[rgba(255,250,242,0.86)] shadow-[0_18px_42px_rgba(8,26,39,0.08)] backdrop-blur-xl transition-all duration-300 ease-in-out">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo & Brand */}
        <Link href="/" className="group flex items-center space-x-3">
          <Image
            src="/logo.svg"
            alt="TravelBug Sikkim Logo"
            width={44}
            height={44}
            className="rounded-full object-cover shadow-[0_14px_28px_rgba(201,162,79,0.14)] transition duration-300 group-hover:scale-105"
            style={{height:'auto'}}
          />
          <div className="leading-none">
            <p className="text-base font-extrabold tracking-tight text-[var(--text-dark)] sm:text-xl">
              TravelBug
            </p>
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[var(--accent)] sm:text-xs">
              Sikkim
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group relative font-medium text-[var(--muted)] transition duration-200 hover:text-[var(--text-dark)]"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[var(--gold)] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <Link href="/custom-package" className="btn-brand rounded-full px-5 py-2.5 text-sm font-semibold transition">
            Plan My Trip
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="rounded-full border border-[rgba(201,162,79,0.16)] bg-white/92 p-2 text-[var(--text-dark)] backdrop-blur-sm md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} color="#111827" /> : <Menu size={24} color="#111827" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-[rgba(201,162,79,0.12)] bg-[rgba(255,252,247,0.96)] shadow-md transition-all duration-300 ease-in-out md:hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col space-y-2 px-6 pb-5 pt-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="rounded-xl px-3 py-2 font-medium text-[var(--muted)] transition-colors duration-200 hover:bg-[var(--accent-soft)] hover:text-[var(--text-dark)]"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/custom-package"
            className="btn-brand mt-2 rounded-xl px-4 py-3 text-center font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            Plan My Trip
          </Link>
        </div>
      </div>
    </nav>
  )
}
