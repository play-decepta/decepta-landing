'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '92vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '96px 20px 80px',
        overflow: 'hidden',
      }}
    >
      {/* Section-level orb — supplements the global ones */}
      <div style={{
        position: 'absolute',
        width: '800px', height: '500px',
        top: '30%', left: '50%',
        transform: 'translate(-50%, -50%)',
        background: 'radial-gradient(ellipse at center, rgba(255,122,0,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0,
        filter: 'blur(40px)',
      }} />

      {/* Live badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'relative', zIndex: 10,
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          // Glass badge
          background: 'rgba(255,122,0,0.10)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(255,122,0,0.28)',
          borderRadius: '999px',
          padding: '6px 16px',
          marginBottom: '32px',
          boxShadow: 'inset 0 1px 0 rgba(255,122,0,0.18), 0 0 24px rgba(255,122,0,0.08)',
        }}
      >
        {/* Specular rim */}
        <div style={{
          position: 'absolute', top: 0, left: '15%', right: '15%', height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(255,122,0,0.35), transparent)',
          borderRadius: '999px', pointerEvents: 'none',
        }} />
        <span style={{
          width: '6px', height: '6px', borderRadius: '50%',
          backgroundColor: '#FF7A00', flexShrink: 0,
          animation: 'pulse 2s ease-in-out infinite',
          boxShadow: '0 0 8px rgba(255,122,0,0.6)',
        }} />
        <span style={{ fontSize: '11px', fontWeight: 700, color: '#FF7A00', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
          <span className="hidden-mobile">Live — Friday Event Open</span>
          <span className="show-mobile">Live Event</span>
        </span>
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        style={{
          position: 'relative', zIndex: 10,
          fontSize: 'clamp(52px, 10vw, 96px)',
          fontWeight: 900,
          lineHeight: 1.0,
          letterSpacing: '-0.02em',
          textTransform: 'uppercase',
          marginBottom: '28px',
        }}
      >
        <span style={{ display: 'block', color: '#FFFFFF' }}>Predict.</span>
        <span style={{
          display: 'block',
          color: '#FF7A00',
          textShadow: '0 0 60px rgba(255,122,0,0.35)',
        }}>Outplay.</span>
        <span style={{ display: 'block', color: '#FFFFFF' }}>Earn.</span>
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        style={{
          position: 'relative', zIndex: 10,
          color: '#666666', fontSize: '15px', lineHeight: 1.7,
          maxWidth: '420px', marginBottom: '40px',
        }}
      >
        <span className="hidden-mobile">A competitive intelligence platform where pressure reveals skill. Stake real money. Beat real opponents.</span>
        <span className="show-mobile">Competitive intelligence. Real stakes. Real opponents.</span>
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        style={{
          position: 'relative', zIndex: 10,
          display: 'flex', flexDirection: 'row',
          alignItems: 'center', gap: '12px',
          flexWrap: 'wrap', justifyContent: 'center',
        }}
      >
        <Link
          href="/signup"
          style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '14px', fontWeight: 800,
            color: '#090909',
            background: 'rgba(255,122,0,0.92)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,122,0,0.50)',
            borderRadius: '10px',
            padding: '14px 28px',
            textDecoration: 'none',
            boxShadow: '0 0 32px rgba(255,122,0,0.30), inset 0 1px 0 rgba(255,255,255,0.28)',
            transition: 'all 0.2s ease',
            position: 'relative', overflow: 'hidden',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 0 48px rgba(255,122,0,0.45), inset 0 1px 0 rgba(255,255,255,0.28)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 32px rgba(255,122,0,0.30), inset 0 1px 0 rgba(255,255,255,0.28)' }}
        >
          {/* Button specular */}
          <span style={{
            position: 'absolute', top: 0, left: '10%', right: '10%', height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.45), transparent)',
            pointerEvents: 'none',
          }} />
          Enter the Arena
        </Link>

        <a
          href="#how-it-works"
          style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '14px', fontWeight: 600,
            color: '#CCCCCC',
            background: 'rgba(255,255,255,0.04)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.10)',
            borderRadius: '10px',
            padding: '14px 28px',
            textDecoration: 'none',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)'; e.currentTarget.style.color = '#FFFFFF'; e.currentTarget.style.transform = 'translateY(-1px)' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)'; e.currentTarget.style.color = '#CCCCCC'; e.currentTarget.style.transform = 'translateY(0)' }}
        >
          See how it works
        </a>
      </motion.div>

      <style>{`
        .hidden-mobile { display: inline; }
        .show-mobile { display: none; }
        @media (max-width: 640px) {
          .hidden-mobile { display: none; }
          .show-mobile { display: inline; }
        }
      `}</style>
    </section>
  )
}