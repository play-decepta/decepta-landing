export default function LivePill({ label }: { label: string }) {
  return (
    <div
      className="relative overflow-hidden inline-flex items-center gap-2 rounded-full px-4 py-1.5"
      style={{
        background: 'rgba(255,122,0,0.10)',
        backdropFilter: 'blur(16px) saturate(1.8)',
        WebkitBackdropFilter: 'blur(16px) saturate(1.8)',
        border: '1px solid rgba(255,122,0,0.28)',
        boxShadow: 'inset 0 1px 0 rgba(255,122,0,0.18), 0 0 20px rgba(255,122,0,0.08)',
      }}
    >
      {/* Specular rim */}
      <div style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,122,0,0.35), transparent)', pointerEvents: 'none' }} />
      <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#FF7A00', flexShrink: 0, animation: 'pulse 2s ease-in-out infinite', boxShadow: '0 0 8px rgba(255,122,0,0.60)' }} />
      <span style={{ fontSize: '11px', fontWeight: 700, color: '#FF7A00', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
        {label}
      </span>
    </div>
  )
}
