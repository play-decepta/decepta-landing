'use client'
import Link from 'next/link'

type Props = {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  className?: string
}

export default function GhostButton({ children, href, onClick, className = '' }: Props) {
  const style: React.CSSProperties = {
    display: 'inline-block',
    textAlign: 'center',
    padding: '14px 28px',
    background: 'rgba(255,255,255,0.04)',
    backdropFilter: 'blur(16px) saturate(1.8)',
    WebkitBackdropFilter: 'blur(16px) saturate(1.8)',
    border: '1px solid rgba(255,255,255,0.10)',
    borderRadius: '10px',
    color: '#888888',
    fontSize: '14px',
    fontWeight: 600,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.06em',
    textDecoration: 'none',
    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)',
    transition: 'all 0.2s ease',
  }

  const handleEnter = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)'
    e.currentTarget.style.color = '#CCCCCC'
    e.currentTarget.style.transform = 'translateY(-1px)'
  }
  const handleLeave = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)'
    e.currentTarget.style.color = '#888888'
    e.currentTarget.style.transform = 'translateY(0)'
  }

  if (href) {
    return (
      <Link href={href} style={style} className={className}
        onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
        {children}
      </Link>
    )
  }
  return (
    <button onClick={onClick} style={style} className={className}
      onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      {children}
    </button>
  )
}
