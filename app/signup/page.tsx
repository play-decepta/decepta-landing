'use client'
import Navbar from '@/components/sections/02-Navbar'
import Footer from '@/components/sections/18-Footer'
import Link from 'next/link'

export default function SignupPage() {
  return (
    <main className="relative min-h-screen flex flex-col overflow-hidden" style={{ backgroundColor: '#090909', color: '#FFFFFF' }}>

      {/* Ambient orbs */}
      <div className="orb orb-orange" style={{ width: '600px', height: '600px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.7 }} />
      <div className="orb orb-dim" style={{ width: '400px', height: '400px', top: '-100px', right: '-100px' }} />
      <div className="orb orb-gold" style={{ width: '300px', height: '300px', bottom: '-80px', left: '-80px', opacity: 0.4 }} />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <section className="flex-1 w-full px-5 flex flex-col items-center justify-center text-center py-24">
          <div className="relative w-full max-w-[600px] flex flex-col items-center">

            {/* Badge */}
            <span
              className="glass-rim inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8"
              style={{
                background: 'rgba(255,122,0,0.10)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,122,0,0.28)',
                boxShadow: 'inset 0 1px 0 rgba(255,122,0,0.18), 0 0 20px rgba(255,122,0,0.08)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <span className="w-[6px] h-[6px] rounded-full" style={{ backgroundColor: '#FF7A00', animation: 'pulse 2s ease-in-out infinite' }} />
              <span style={{ fontSize: '11px', fontWeight: 700, color: '#FF7A00', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                Building in progress
              </span>
            </span>

            {/* Headline */}
            <h1 style={{ fontSize: 'clamp(40px, 8vw, 72px)', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1.0, letterSpacing: '-0.02em', marginBottom: '20px' }}>
              <span style={{ color: '#FFFFFF' }}>Coming</span><br />
              <span style={{ color: '#FF7A00', textShadow: '0 0 40px rgba(255,122,0,0.35)' }}>soon.</span>
            </h1>

            <p style={{ fontSize: '15px', color: '#555555', maxWidth: '420px', lineHeight: 1.7, marginBottom: '40px' }}>
              The arena isn&apos;t open yet, but it&apos;s close. Follow along and you&apos;ll be the first to know the moment it goes live.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '12px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '40px' }}>
              <a
                href="https://t.me/playdecepta"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-rim"
                style={{
                  display: 'inline-flex', alignItems: 'center',
                  padding: '14px 28px',
                  background: 'rgba(255,122,0,0.92)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,122,0,0.50)',
                  borderRadius: '10px',
                  color: '#090909',
                  fontSize: '14px',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  textDecoration: 'none',
                  boxShadow: '0 0 28px rgba(255,122,0,0.30), inset 0 1px 0 rgba(255,255,255,0.25)',
                  transition: 'all 0.2s ease',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-2px)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                Join the Telegram
              </a>

              <a
                href="https://x.com/Play_Decepta"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-rim"
                style={{
                  display: 'inline-flex', alignItems: 'center',
                  padding: '14px 28px',
                  background: 'rgba(255,255,255,0.04)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255,255,255,0.10)',
                  borderRadius: '10px',
                  color: '#CCCCCC',
                  fontSize: '14px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  textDecoration: 'none',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)',
                  transition: 'all 0.2s ease',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)'; e.currentTarget.style.color = '#FFFFFF' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)'; e.currentTarget.style.color = '#CCCCCC' }}
              >
                Follow on X
              </a>
            </div>

            <Link
              href="/"
              style={{ fontSize: '12px', color: '#444444', textDecoration: 'none', transition: 'color 0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#888888')}
              onMouseLeave={e => (e.currentTarget.style.color = '#444444')}
            >
              ← Back to home
            </Link>

          </div>
        </section>

        <Footer />
      </div>
    </main>
  )
}