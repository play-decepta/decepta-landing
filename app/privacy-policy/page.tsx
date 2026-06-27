import Navbar from '@/components/sections/02-Navbar'
import Footer from '@/components/sections/18-Footer'

const sections = [
  {
    num: '1', title: 'Introduction',
    content: 'This Privacy Policy explains how Decepta ("we," "us," "our," "the Platform") collects, uses, stores, and protects information when you use our website, mobile applications, and related services (collectively, the "Service"). By using Decepta, you agree to the collection and use of information in accordance with this policy. If you do not agree, please do not use the Service.',
  },
  {
    num: '3', title: 'How we use information',
    content: 'We use collected information to operate, maintain, and improve the Service; process stakes, settlements, deposits, and withdrawals; verify account eligibility including age verification; detect and prevent fraud and abuse; communicate with you; and comply with legal obligations.',
  },
  {
    num: '4', title: 'How we share information',
    content: 'We do not sell personal information. We may share information with service providers who help us operate the Service, where required by law, in connection with a business transfer, or with your consent. Certain transaction data is inherently public by virtue of being recorded onchain.',
  },
  {
    num: '5', title: 'Data retention',
    content: 'We retain personal data for as long as necessary to provide the Service, comply with legal obligations, resolve disputes, and enforce our agreements.',
  },
  {
    num: '7', title: 'Age restrictions',
    content: 'Decepta is intended for users 18 years of age or older. The Service involves real-money staking and onchain financial transactions and is not intended for use by minors. We do not knowingly collect personal information from anyone under 18.',
  },
  {
    num: '8', title: 'Security',
    content: 'We implement technical and organizational measures designed to protect your information, including server-authoritative architecture for gameplay and financial logic. No system is completely secure, and we cannot guarantee absolute security of information transmitted to or from the Service.',
  },
  {
    num: '9', title: 'International data transfers',
    content: 'Decepta operates internationally. By using the Service, you understand your information may be transferred to and processed in countries other than your own, which may have different data protection laws.',
  },
  {
    num: '10', title: 'Changes to this policy',
    content: 'We may update this Privacy Policy from time to time. Material changes will be communicated through the Service or via email prior to taking effect.',
  },
]

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

const rimBefore: React.CSSProperties = {
  content: '""',
  position: 'absolute',
  top: 0,
  left: '12%',
  right: '12%',
  height: '1px',
  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.10), transparent)',
  pointerEvents: 'none',
  borderRadius: '999px',
}

export default function PrivacyPolicyPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden" style={{ backgroundColor: '#090909', color: '#FFFFFF' }}>

      {/* Ambient orbs */}
      <div className="orb orb-orange" style={{ width: '500px', height: '500px', top: '-100px', left: '-100px', opacity: 0.5 }} />
      <div className="orb orb-dim" style={{ width: '600px', height: '600px', top: '50vh', right: '-200px' }} />
      <div className="orb orb-gold" style={{ width: '400px', height: '400px', bottom: '10vh', left: '30%', opacity: 0.3 }} />

      <div className="relative z-10">
        <Navbar />

        <section className="w-full px-5 py-24 flex flex-col items-center">
          <div className="w-full max-w-[720px]">

            {/* Legal review notice */}
            <div style={{ ...glassCard, background: 'rgba(255,122,0,0.06)', border: '1px solid rgba(255,122,0,0.20)', boxShadow: 'inset 0 1px 0 rgba(255,122,0,0.12)', marginBottom: '40px' }}>
              <div style={rimBefore} />
              <p style={{ fontSize: '12px', color: '#FF7A00', fontWeight: 600, lineHeight: 1.7 }}>
                This document is currently under legal review and is not yet final. It is published here for transparency while review is in progress.
              </p>
            </div>

            {/* Header */}
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#FF7A00', marginBottom: '16px' }}>Legal</p>
            <h1 style={{ fontSize: 'clamp(28px, 5vw, 42px)', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1.1, letterSpacing: '-0.02em', color: '#FFFFFF', marginBottom: '12px' }}>
              Privacy Policy
            </h1>
            <p style={{ fontSize: '12px', color: '#444444', marginBottom: '56px' }}>Last updated: 21st June 2026</p>

            {/* Sections */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '14px', color: '#888888', lineHeight: 1.8 }}>

              {/* Section 2 — multi-part */}
              <div style={glassCard}>
                <div style={rimBefore} />
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: '#FF7A00', letterSpacing: '0.06em', marginTop: '3px', flexShrink: 0, minWidth: '18px' }}>2.</span>
                  <div>
                    <h2 style={{ fontSize: '13px', fontWeight: 800, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
                      Information we collect
                    </h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {[
                        { label: 'Information you provide directly', text: 'Account information (username, email, avatar), authentication data via third-party providers (Google OAuth, wallet connection providers), wallet addresses, and communications with us.' },
                        { label: 'Information collected automatically', text: 'Device and usage data, gameplay data (match history, round outcomes, riddle responses, timestamps), and transaction data.' },
                        { label: 'Financial and wallet data', text: 'Because Decepta involves staking and onchain settlement, we collect wallet balances and transaction history within the Platform, onchain transaction identifiers (publicly visible on the relevant blockchain), and deposit/withdrawal records. We do not store private keys for externally connected wallets.' },
                      ].map(item => (
                        <p key={item.label}><span style={{ color: '#CCCCCC', fontWeight: 700 }}>{item.label}: </span>{item.text}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Standard sections */}
              {sections.map(s => (
                <div key={s.num} style={glassCard}>
                  <div style={rimBefore} />
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 800, color: '#FF7A00', letterSpacing: '0.06em', marginTop: '3px', flexShrink: 0, minWidth: '18px' }}>{s.num}.</span>
                    <div>
                      <h2 style={{ fontSize: '13px', fontWeight: 800, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>{s.title}</h2>
                      <p>{s.content}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Section 6 — your rights (has link) */}
              <div style={glassCard}>
                <div style={rimBefore} />
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: '#FF7A00', letterSpacing: '0.06em', marginTop: '3px', flexShrink: 0, minWidth: '18px' }}>6.</span>
                  <div>
                    <h2 style={{ fontSize: '13px', fontWeight: 800, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>Your rights</h2>
                    <p>
                      Depending on your jurisdiction, you may have rights to access, correct, delete, or port your personal data, or to object to or restrict certain processing. To exercise these rights, contact us at{' '}
                      <a href="mailto:playdecepta@gmail.com" style={{ color: '#FF7A00', textDecoration: 'none', fontWeight: 700 }}>playdecepta@gmail.com</a>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 11 — Contact (orange tint) */}
              <div style={{ ...glassCard, background: 'rgba(255,122,0,0.04)', border: '1px solid rgba(255,122,0,0.15)' }}>
                <div style={{ ...rimBefore, background: 'linear-gradient(90deg, transparent, rgba(255,122,0,0.25), transparent)' }} />
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: '#FF7A00', letterSpacing: '0.06em', marginTop: '3px', flexShrink: 0 }}>11.</span>
                  <div>
                    <h2 style={{ fontSize: '13px', fontWeight: 800, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>Contact</h2>
                    <p>
                      Questions about this Privacy Policy can be directed to{' '}
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