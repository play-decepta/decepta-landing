export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ position: 'relative', zIndex: 10, fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#FF7A00', marginBottom: '16px' }}>
      {children}
    </p>
  )
}
