// components/ui/GhostButton.tsx
import Link from 'next/link'

type Props = {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  className?: string
}

export default function GhostButton({ children, href, onClick, className = '' }: Props) {
  const classes = `inline-block text-center px-7 py-3.5 bg-transparent border border-[#2A2A2A] hover:border-[#666] hover:text-[#CCC] text-[#888] text-[14px] font-medium uppercase tracking-wide rounded-lg transition-all ${className}`

  if (href) {
    return <Link href={href} className={classes}>{children}</Link>
  }
  return <button onClick={onClick} className={classes}>{children}</button>
}