// components/ui/SectionHeading.tsx
// Usage: <SectionHeading lines={['One arena.', 'Three ways to win.']} />
// First line(s) white, last line orange — matches the locked headline pattern

export default function SectionHeading({
  lines,
  className = '',
}: {
  lines: string[]
  className?: string
}) {
  return (
    <h2
      className={`relative z-10 text-[clamp(32px,5vw,52px)] font-black uppercase leading-[1.05] tracking-tight text-center mb-4 ${className}`}
    >
      {lines.map((line, i) => (
        <span
          key={i}
          style={i === lines.length - 1
            ? { color: '#FF7A00', textShadow: '0 0 40px rgba(255,122,0,0.28)' }
            : { color: '#FFFFFF' }
          }
        >
          {line}{i < lines.length - 1 ? ' ' : ''}
        </span>
      ))}
    </h2>
  )
}
