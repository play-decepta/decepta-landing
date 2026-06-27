'use client'
import Link from 'next/link'

type Props = {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  className?: string
}

export default function OrangeButton({ children, href, onClick, className = '' }: Props) {
  const style: React.CSSProperties = {
    display: 'inline-block',
    textAlign: 'center',
    padding: '14px 28px',
    background: 'rgba(255,122,0,0.92)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    border: '1px solid rgba(255,122,0,0.50)',
    borderRadius: '10px',
    color: '#090909',
    fontSize: '14px',
    fontWeight: 800,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.06em',
    textDecoration: 'none',
    boxShadow: '0 0 28px rgba(255,122,0,0.28), inset 0 1px 0 rgba(255,255,255,0.28)',
    transition: 'all 0.2s ease',
    position: 'relative' as const,
    overflow: 'hidden',
  }

  const rim = (
    <span style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.45), transparent)', pointerEvents: 'none' }} />
  )

  const handleEnter = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.transform = 'translateY(-2px)'
    e.currentTarget.style.boxShadow = '0 0 44px rgba(255,122,0,0.45), inset 0 1px 0 rgba(255,255,255,0.28)'
  }
  const handleLeave = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.transform = 'translateY(0)'
    e.currentTarget.style.boxShadow = '0 0 28px rgba(255,122,0,0.28), inset 0 1px 0 rgba(255,255,255,0.28)'
  }

  if (href) {
    return (
      <Link href={href} style={style} className={className}
        onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
        {rim}{children}
      </Link>
    )
  }
  return (
    <button onClick={onClick} style={style} className={className}
      onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      {rim}{children}
    </button>
  )
}
