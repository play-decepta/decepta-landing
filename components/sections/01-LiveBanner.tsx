'use client'
import { useState, useEffect, useRef } from 'react'

export default function LiveBanner() {
  const [visible, setVisible] = useState<boolean>(false)
  const touchStartY = useRef<number>(0)
  const lastScrollY = useRef<number>(0)

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY
    }
    const handleTouchMove = (e: TouchEvent) => {
      const atTop = window.scrollY <= 0
      const draggedDownEnough = e.touches[0].clientY - touchStartY.current > 60
      if (atTop && draggedDownEnough) setVisible(true)
    }
    const handleWheel = (e: WheelEvent) => {
      const atTop = window.scrollY <= 0
      if (atTop && e.deltaY < -15) setVisible(true)
    }
    const handleScroll = () => {
      const currentY = window.scrollY
      if (currentY > lastScrollY.current || currentY > 0) setVisible(false)
      lastScrollY.current = currentY
    }

    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: true })
    window.addEventListener('wheel', handleWheel, { passive: true })
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      role="banner"
      aria-label="Live event notification"
      style={{
        width: '100%',
        maxHeight: visible ? '56px' : '0px',
        opacity: visible ? 1 : 0,
        overflow: 'hidden',
        transition: 'max-height 0.3s ease-out, opacity 0.3s ease-out',
        // Liquid glass — gold tint
        background: 'rgba(245,196,81,0.12)',
        backdropFilter: 'blur(20px) saturate(1.8)',
        WebkitBackdropFilter: 'blur(20px) saturate(1.8)',
        borderBottom: '1px solid rgba(245,196,81,0.25)',
        boxShadow: 'inset 0 -1px 0 rgba(0,0,0,0.15), 0 0 24px rgba(245,196,81,0.08)',
        position: 'relative',
        zIndex: 50,
      }}
    >
      {/* Specular rim at bottom edge */}
      <div style={{
        position: 'absolute',
        bottom: 0, left: '20%', right: '20%', height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(245,196,81,0.30), transparent)',
        pointerEvents: 'none',
      }} />

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        padding: '10px 16px',
        flexWrap: 'wrap',
      }}>
        {/* Live pulse dot */}
        <span style={{
          width: '7px', height: '7px', borderRadius: '50%',
          backgroundColor: '#F5C451',
          flexShrink: 0,
          animation: 'pulse 2s ease-in-out infinite',
          boxShadow: '0 0 8px rgba(245,196,81,0.6)',
        }} />

        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', color: '#F5C451', textTransform: 'uppercase', margin: 0 }}>
          <span style={{ marginRight: '16px' }}>Live</span>
          <span>Friday Event Open</span>
        </p>

        <a
          href="#friday"
          style={{
            fontSize: '11px', fontWeight: 800, letterSpacing: '0.10em',
            color: '#FFFFFF', textTransform: 'uppercase',
            textDecoration: 'underline', textUnderlineOffset: '3px',
            opacity: 0.8, transition: 'opacity 0.15s',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '0.8')}
        >
          Predict now →
        </a>

        <span style={{ opacity: 0.35, fontSize: '11px', fontWeight: 700, color: '#F5C451' }}>·</span>

        <p style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.08em', color: '#F5C451', textTransform: 'uppercase', opacity: 0.6, margin: 0 }}>
          Coming Soon
        </p>

        <button
          onClick={() => setVisible(false)}
          aria-label="Dismiss"
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            fontSize: '13px', fontWeight: 700, color: '#F5C451',
            opacity: 0.5, marginLeft: '6px', padding: '0 2px',
            transition: 'opacity 0.15s', lineHeight: 1,
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '0.5')}
        >
          ✕
        </button>
      </div>
    </div>
  )
}