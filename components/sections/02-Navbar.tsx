'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const navLinks = [
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'Modes',        href: '/#modes' },
  { label: 'Cipher',       href: '/#cipher' },
  { label: 'Leaderboard',  href: '/#leaderboard' },
  { label: 'Friday Event', href: '/#friday' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        width: '100%',
        // Liquid glass navbar
        background: 'rgba(9,9,9,0.72)',
        backdropFilter: 'blur(24px) saturate(1.8)',
        WebkitBackdropFilter: 'blur(24px) saturate(1.8)',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        boxShadow: '0 1px 0 rgba(255,255,255,0.04), 0 4px 24px rgba(0,0,0,0.40)',
      }}
    >
      {/* Specular rim */}
      <div style={{
        position: 'absolute', top: 0, left: '10%', right: '10%', height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.10), transparent)',
        pointerEvents: 'none',
      }} />

      {/* ── DESKTOP ── */}
      <nav style={{
        display: 'none',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 32px',
        height: '64px',
        position: 'relative',
      }}
        className="md-nav"
      >
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0, textDecoration: 'none' }}>
          <Image src="/assets/logo-icon.svg" alt="Decepta" width={28} height={28} style={{ width: '28px', height: 'auto' }} />
          <span style={{ color: '#FFFFFF', fontWeight: 800, letterSpacing: '0.18em', fontSize: '15px', textTransform: 'uppercase' }}>Decepta</span>
        </Link>

        {/* Centered nav links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '28px', position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              style={{ color: '#666666', fontSize: '13px', fontWeight: 500, letterSpacing: '0.02em', textDecoration: 'none', transition: 'color 0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#FFFFFF')}
              onMouseLeave={e => (e.currentTarget.style.color = '#666666')}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="/signup"
          style={{
            flexShrink: 0,
            fontSize: '13px', fontWeight: 800,
            color: '#090909',
            background: 'rgba(255,122,0,0.92)',
            borderRadius: '8px',
            padding: '10px 20px',
            textDecoration: 'none',
            border: '1px solid rgba(255,122,0,0.50)',
            boxShadow: '0 0 20px rgba(255,122,0,0.20), inset 0 1px 0 rgba(255,255,255,0.25)',
            transition: 'all 0.15s',
            position: 'relative',
            overflow: 'hidden',
          }}
          onMouseEnter={e => { e.currentTarget.style.opacity = '0.9'; e.currentTarget.style.transform = 'translateY(-1px)' }}
          onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}
        >
          Get started
        </Link>
      </nav>

      {/* ── MOBILE ── */}
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', height: '56px' }} className="mobile-nav">
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
          <Image src="/assets/logo-icon.svg" alt="Decepta" width={24} height={24} style={{ width: '24px', height: 'auto' }} />
          <span style={{ color: '#FFFFFF', fontWeight: 800, letterSpacing: '0.18em', fontSize: '13px', textTransform: 'uppercase' }}>Decepta</span>
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Link
            href="/signup"
            style={{
              fontSize: '12px', fontWeight: 800, color: '#090909',
              background: 'rgba(255,122,0,0.92)',
              borderRadius: '7px', padding: '8px 14px',
              textDecoration: 'none',
              boxShadow: '0 0 14px rgba(255,122,0,0.20), inset 0 1px 0 rgba(255,255,255,0.20)',
              border: '1px solid rgba(255,122,0,0.40)',
            }}
          >
            Get started
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', display: 'flex', flexDirection: 'column', gap: '5px' }}
          >
            {[0,1,2].map(i => (
              <span key={i} style={{
                display: 'block', width: '22px', height: '2px', borderRadius: '2px',
                background: '#FFFFFF',
                transition: 'all 0.2s',
                transform: menuOpen && i === 0 ? 'rotate(45deg) translateY(7px)' : menuOpen && i === 2 ? 'rotate(-45deg) translateY(-7px)' : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile menu drawer */}
      <div style={{
        overflow: 'hidden',
        maxHeight: menuOpen ? '320px' : '0px',
        opacity: menuOpen ? 1 : 0,
        transition: 'max-height 0.3s ease-out, opacity 0.25s ease-out',
        background: 'rgba(9,9,9,0.90)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}>
        <div style={{ padding: '16px 20px 20px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ color: '#666666', fontSize: '14px', fontWeight: 500, textDecoration: 'none', transition: 'color 0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#FFFFFF')}
              onMouseLeave={e => (e.currentTarget.style.color = '#666666')}
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/signup"
            onClick={() => setMenuOpen(false)}
            style={{
              display: 'block', textAlign: 'center',
              fontSize: '14px', fontWeight: 800, color: '#090909',
              background: 'rgba(255,122,0,0.92)',
              borderRadius: '10px', padding: '14px',
              textDecoration: 'none', marginTop: '4px',
              boxShadow: '0 0 20px rgba(255,122,0,0.20), inset 0 1px 0 rgba(255,255,255,0.20)',
              border: '1px solid rgba(255,122,0,0.40)',
            }}
          >
            Get started
          </Link>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .md-nav { display: flex !important; }
          .mobile-nav { display: none !important; }
        }
        @media (max-width: 767px) {
          .md-nav { display: none !important; }
          .mobile-nav { display: flex !important; }
        }
      `}</style>
    </header>
  )
}