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
    <nav className="fixed top-0 z-50 w-full border-b border-[var(--border)] bg-[rgba(247,251,254,0.82)] shadow-[0_14px_40px_rgba(15,34,52,0.08)] backdrop-blur-md transition-all duration-300 ease-in-out">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo & Brand */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/logo.svg"
            alt="TravelBug Sikkim Logo"
            width={44}
            height={44}
            className="rounded-full object-cover shadow-[0_10px_22px_rgba(15,34,52,0.12)]"
            style={{height:'auto'}}
          />
          <div className="leading-none">
            <p className="text-base font-extrabold tracking-tight text-[var(--primary)] sm:text-xl">
              TravelBug
            </p>
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[var(--accent-deep)] sm:text-xs">
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
              className="font-medium text-[var(--muted)] hover:text-[var(--primary)] transition duration-200 relative group"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[var(--accent)] group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
          <Link href="/custom-package" className="btn-brand rounded-full px-4 py-2 text-sm font-semibold transition">
            Plan My Trip
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="rounded-full border border-[var(--border)] bg-white/80 p-2 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} color="#0e1a27" /> : <Menu size={24} color="#0e1a27" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden border-t border-[var(--border)] bg-[rgba(247,251,254,0.96)] shadow-md transition-all duration-300 ease-in-out overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col space-y-2 px-6 pb-5 pt-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="rounded-xl px-3 py-2 font-medium text-[var(--muted)] transition-colors duration-200 hover:bg-white hover:text-[var(--primary)]"
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
