'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { label: 'How it works', href: '/#how-it-works' },
    { label: 'Modes', href: '/#modes' },
    { label: 'Cipher', href: '/#cipher' },
    { label: 'Leaderboard', href: '/#leaderboard' },
    { label: 'Friday Event', href: '/#friday' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#1E1E1E] bg-[#0A0A0A]">
      <nav className="hidden md:flex items-center justify-between px-10 h-16 relative">
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
          <Image src="/assets/logo-icon.svg" alt="Decepta" width={28} height={28} style={{ height: 'auto' }} />
          <span className="text-white font-extrabold tracking-[0.18em] text-[15px] uppercase">Decepta</span>
        </Link>
        <div className="flex items-center gap-7 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-[#888] hover:text-white text-[13px] font-medium tracking-wide transition-colors">
              {link.label}
            </a>
          ))}
        </div>
        <Link href="/signup" className="flex-shrink-0 text-[13px] font-bold text-black bg-[#F97316] hover:opacity-90 rounded-md px-5 py-2.5 transition-opacity">
          Get started
        </Link>
      </nav>

      <nav className="flex md:hidden items-center justify-between px-5 h-14">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/assets/logo-icon.svg" alt="Decepta" width={24} height={24} style={{ height: 'auto' }} />
          <span className="text-white font-extrabold tracking-[0.18em] text-[13px] uppercase">Decepta</span>
        </Link>
        <div className="flex items-center gap-2.5">
          <Link href="/signup" className="text-[12px] font-bold text-black bg-[#F97316] hover:opacity-90 rounded-md px-3.5 py-1.5 transition-opacity">
            Get started
          </Link>
          <button onClick={() => setMenuOpen(!menuOpen)} className="flex flex-col gap-[5px] p-1" aria-label="Toggle menu">
            <span className="block w-[22px] h-[2px] bg-white rounded" />
            <span className="block w-[22px] h-[2px] bg-white rounded" />
            <span className="block w-[22px] h-[2px] bg-white rounded" />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-[#111111] border-b border-[#1E1E1E] px-5 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)} className="text-[#888] hover:text-white text-sm font-medium transition-colors">
              {link.label}
            </a>
          ))}
          <Link href="/signup" className="w-full text-center text-sm font-bold text-black bg-[#F97316] hover:opacity-90 rounded-lg py-3 mt-1 transition-opacity">
            Get started
          </Link>
        </div>
      )}
    </header>
  )
}
