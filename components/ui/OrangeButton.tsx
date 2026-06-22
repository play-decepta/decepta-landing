// components/ui/OrangeButton.tsx
import Link from 'next/link'

type Props = {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  className?: string
}

export default function OrangeButton({ children, href, onClick, className = '' }: Props) {
  const classes = `inline-block text-center px-7 py-3.5 bg-[#F97316] hover:opacity-90 hover:-translate-y-px text-black text-[14px] font-bold uppercase tracking-wide rounded-lg transition-all ${className}`

  if (href) {
    return <Link href={href} className={classes}>{children}</Link>
  }
  return <button onClick={onClick} className={classes}>{children}</button>
}