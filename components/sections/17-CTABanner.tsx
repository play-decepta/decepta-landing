'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const trustItems = ['Free to sign up', 'Instant payouts', 'No hidden fees', 'Free Cipher trial', 'Cancel anytime']

export default function CTABanner() {
  return (
    <section id="cta" className="relative w-full px-5 py-28 flex flex-col items-center overflow-hidden" style={{ backgroundColor: '#090909' }}>

      {/* Strong orbs behind the card */}
      <div style={{ position: 'absolute', width: '800px', height: '500px', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: 'radial-gradient(ellipse at center, rgba(255,122,0,0.20) 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', width: '400px', height: '400px', top: '10%', left: '-80px', background: 'radial-gradient(circle, rgba(255,122,0,0.10) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', width: '400px', height: '400px', bottom: '10%', right: '-80px', background: 'radial-gradient(circle, rgba(255,122,0,0.10) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0 }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.7 }}
        className="relative z-10 w-full max-w-[900px] overflow-hidden rounded-[28px]"
        style={{
          // This card has strong orbs behind it — glass will glow
          background: 'rgba(255,122,0,0.07)',
          backdropFilter: 'blur(40px) saturate(2.0) brightness(1.10)',
          WebkitBackdropFilter: 'blur(40px) saturate(2.0) brightness(1.10)',
          border: '1px solid rgba(255,122,0,0.28)',
          boxShadow: [
            'inset 0 1px 0 rgba(255,122,0,0.22)',
            'inset 0 -1px 0 rgba(0,0,0,0.25)',
            '0 0 80px rgba(255,122,0,0.12)',
            '0 32px 80px rgba(0,0,0,0.60)',
          ].join(', '),
        }}
      >
        {/* Top specular rim — brightest part of glass */}
        <div style={{ position: 'absolute', top: 0, left: '5%', right: '5%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,122,0,0.60), transparent)', pointerEvents: 'none', zIndex: 10 }} />

        {/* Inner orange bloom */}
        <div style={{ position: 'absolute', top: '-60px', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '300px', background: 'radial-gradient(ellipse at center, rgba(255,122,0,0.18) 0%, transparent 70%)', pointerEvents: 'none' }} />

        {/* Noise grain */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.025, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, mixBlendMode: 'overlay', pointerEvents: 'none' }} />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-8 sm:px-16 pt-20 pb-16">
          <p className="text-[11px] font-bold tracking-[0.18em] uppercase mb-6" style={{ color: '#FF7A00' }}>The arena is opening soon</p>

          <h2 className="text-[clamp(36px,6vw,68px)] font-black uppercase leading-[1.0] tracking-tight mb-5">
            <span className="text-white">Your first</span><br />
            <span style={{ color: '#FF7A00', textShadow: '0 0 60px rgba(255,122,0,0.45)' }}>move.</span>
          </h2>

          <p className="text-[15px] max-w-[440px] leading-relaxed mb-10" style={{ color: '#666666' }}>
            The riddles are ready. The stakes will be real. Sign up now and be first in line when the arena opens.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <Link
              href="/signup"
              className="relative overflow-hidden w-full sm:w-auto text-center px-9 py-4 rounded-xl text-[15px] font-extrabold uppercase tracking-wide transition-all hover:-translate-y-0.5"
              style={{ background: 'rgba(255,122,0,0.95)', color: '#090909', boxShadow: '0 0 40px rgba(255,122,0,0.40), inset 0 1px 0 rgba(255,255,255,0.30)' }}
            >
              <span style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.50), transparent)', pointerEvents: 'none' }} />
              Enter the Arena
            </Link>
            <a
              href="#how-it-works"
              className="relative overflow-hidden w-full sm:w-auto text-center px-9 py-4 rounded-xl text-[15px] font-semibold uppercase tracking-wide transition-all"
              style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.12)', color: '#888888', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; e.currentTarget.style.color = '#CCCCCC' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = '#888888' }}
            >
              <span style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)', pointerEvents: 'none' }} />
              See how it works
            </a>
          </div>
        </div>

        {/* Trust bar */}
        <div className="relative z-10 px-8 py-5 flex items-center justify-center gap-4 sm:gap-8 flex-wrap"
          style={{ borderTop: '1px solid rgba(255,122,0,0.12)', background: 'rgba(255,122,0,0.04)' }}>
          {trustItems.map(item => (
            <div key={item} className="flex items-center gap-1.5">
              <div className="relative overflow-hidden w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(72,199,116,0.10)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', border: '1px solid rgba(72,199,116,0.25)' }}>
                <span style={{ fontSize: '9px', color: '#48C774', fontWeight: 700 }}>✓</span>
              </div>
              <span className="text-[12px] font-semibold" style={{ color: '#555555' }}>{item}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}