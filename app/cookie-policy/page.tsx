import Navbar from '@/components/sections/02-Navbar'
import Footer from '@/components/sections/18-Footer'

const glassCard: React.CSSProperties = {
  background: 'rgba(255,255,255,0.02)',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  border: '1px solid rgba(255,255,255,0.06)',
  borderRadius: '14px',
  padding: '20px 22px',
  position: 'relative',
  overflow: 'hidden',
}

const rim: React.CSSProperties = {
  position: 'absolute',
  top: 0, left: '12%', right: '12%', height: '1px',
  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.10), transparent)',
  pointerEvents: 'none', borderRadius: '999px',
}

const sections = [
  {
    num: '1', title: 'Current use of cookies',
    content: 'Decepta does not currently use tracking, advertising, or analytics cookies on this website. We do not collect browsing behavior, do not run advertising pixels, and do not share visitor data with third parties for marketing purposes.',
  },
  {
    num: '2', title: 'Essential technical data',
    content: 'Like most websites, your browser may store small amounts of technical data required for the site to function correctly (for example, remembering your screen size for display purposes). This data is not used to identify or track you personally and is not shared with anyone.',
  },
  {
    num: '3', title: 'If this changes',
    content: 'If Decepta introduces analytics, performance monitoring, or advertising cookies in the future, this page will be updated before those changes take effect, and where required, we will request your consent before any such cookies are set.',
  },
]

export default function CookiePolicyPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden" style={{ backgroundColor: '#090909', color: '#FFFFFF' }}>

      {/* Ambient orbs */}
      <div className="orb orb-orange" style={{ width: '500px', height: '500px', top: '-100px', left: '-100px', opacity: 0.4 }} />
      <div className="orb orb-dim" style={{ width: '500px', height: '500px', bottom: '10vh', right: '-150px' }} />

      <div className="relative z-10">
        <Navbar />

        <section className="w-full px-5 py-24 flex flex-col items-center">
          <div className="w-full max-w-[720px]">

            {/* Header */}
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#FF7A00', marginBottom: '16px' }}>Legal</p>
            <h1 style={{ fontSize: 'clamp(28px, 5vw, 42px)', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1.1, letterSpacing: '-0.02em', color: '#FFFFFF', marginBottom: '12px' }}>
              Cookie Policy
            </h1>
            <p style={{ fontSize: '12px', color: '#444444', marginBottom: '56px' }}>Last updated: 21st June 2026</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '14px', color: '#888888', lineHeight: 1.8 }}>

              {sections.map(s => (
                <div key={s.num} style={glassCard}>
                  <div style={rim} />
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 800, color: '#FF7A00', letterSpacing: '0.06em', marginTop: '3px', flexShrink: 0, minWidth: '18px' }}>{s.num}.</span>
                    <div>
                      <h2 style={{ fontSize: '13px', fontWeight: 800, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>{s.title}</h2>
                      <p>{s.content}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Section 4 — Contact (orange tint) */}
              <div style={{ ...glassCard, background: 'rgba(255,122,0,0.04)', border: '1px solid rgba(255,122,0,0.15)' }}>
                <div style={{ ...rim, background: 'linear-gradient(90deg, transparent, rgba(255,122,0,0.25), transparent)' }} />
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: '#FF7A00', letterSpacing: '0.06em', marginTop: '3px', flexShrink: 0 }}>4.</span>
                  <div>
                    <h2 style={{ fontSize: '13px', fontWeight: 800, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>Contact</h2>
                    <p>
                      Questions about this Cookie Policy can be directed to{' '}
                      <a href="mailto:playdecepta@gmail.com" style={{ color: '#FF7A00', textDecoration: 'none', fontWeight: 700 }}>playdecepta@gmail.com</a>.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  )
}