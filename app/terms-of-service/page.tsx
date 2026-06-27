import Navbar from '@/components/sections/02-Navbar'
import Footer from '@/components/sections/18-Footer'

export default function TermsOfServicePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden" style={{ backgroundColor: '#090909', color: '#FFFFFF' }}>

      {/* Ambient orbs */}
      <div className="orb orb-orange" style={{ width: '500px', height: '500px', top: '-100px', left: '-100px', opacity: 0.5 }} />
      <div className="orb orb-dim" style={{ width: '600px', height: '600px', top: '50vh', right: '-200px' }} />

      <div className="relative z-10">
        <Navbar />

        <section className="w-full px-5 py-24 flex flex-col items-center">
          <div className="w-full max-w-[720px]">

            {/* Legal review notice */}
            <div
              className="glass-rim mb-10 rounded-xl px-5 py-4"
              style={{
                background: 'rgba(255,122,0,0.06)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,122,0,0.20)',
                boxShadow: 'inset 0 1px 0 rgba(255,122,0,0.12)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <p style={{ fontSize: '12px', color: '#FF7A00', fontWeight: 600, lineHeight: 1.7 }}>
                This document is currently under legal review and is not yet final. It is published here for transparency while review is in progress.
              </p>
            </div>

            {/* Header */}
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#FF7A00', marginBottom: '16px' }}>
              Legal
            </p>
            <h1 style={{ fontSize: 'clamp(28px, 5vw, 42px)', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1.1, letterSpacing: '-0.02em', color: '#FFFFFF', marginBottom: '12px' }}>
              Terms of Service
            </h1>
            <p style={{ fontSize: '12px', color: '#444444', marginBottom: '56px' }}>
              Last updated: 21st June 2026
            </p>

            {/* Content */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', fontSize: '14px', color: '#888888', lineHeight: 1.8 }}>

              {[
                {
                  num: '1', title: 'Acceptance of terms',
                  content: 'By accessing or using Decepta ("the Service," "the Platform," "we," "us"), you agree to be bound by these Terms of Service. If you do not agree, do not use the Service.',
                },
                {
                  num: '2', title: 'Eligibility',
                  content: 'You must be at least 18 years old to create an account or use the Service. The Service involves real-money staking and onchain financial transactions and is not directed at, or intended for use by, minors. You further represent that your use of Decepta is lawful in your jurisdiction of residence.',
                },
                {
                  num: '3', title: 'Account registration',
                  content: 'You must create an account to use most features of the Service. You are responsible for maintaining the security of your account and wallet credentials, and agree to notify us promptly of any unauthorized use.',
                },
                {
                  num: '4', title: 'Nature of the Service — skill-based competition',
                  content: 'Decepta is a skill-based competitive platform. Outcomes in Duel, Cipher, and Friday Event modes are determined by player performance, observation, deduction, and response time, not by chance. Nothing in these Terms should be construed as Decepta operating as a game of chance, lottery, or casino-style gambling product.',
                },
                {
                  num: '6', title: 'User conduct',
                  content: 'You agree not to use bots or automated tools, collude with other users, create multiple accounts to circumvent platform rules, interfere with server-authoritative systems, use the Service for unlawful financial activity, harass other users, or attempt to circumvent the invite-link-only matchmaking system. Violation of this section may result in account suspension, forfeiture of funds tied to fraudulent activity, and/or reporting to relevant authorities where applicable.',
                },
                {
                  num: '7', title: 'Intellectual property',
                  content: 'All content, branding, riddles, software, and design elements of Decepta are owned by us or our licensors. You may not copy, modify, distribute, or create derivative works from the Service without express permission.',
                },
                {
                  num: '8', title: 'Disclaimers',
                  content: 'The Service is provided "as is" and "as available," without warranties of any kind. We do not guarantee blockchain network performance, transaction confirmation times, or token/asset value. Participation in onchain activity carries inherent financial risk, including potential total loss of staked funds.',
                },
                {
                  num: '9', title: 'Limitation of liability',
                  content: 'To the maximum extent permitted by law, Decepta and its operators shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of funds, data, or goodwill, arising from your use of the Service.',
                },
                {
                  num: '10', title: 'Dispute resolution',
                  content: 'Governing law and venue for dispute resolution will be specified here once finalized.',
                },
                {
                  num: '11', title: 'Account suspension and termination',
                  content: 'We reserve the right to suspend or terminate accounts that violate these Terms, engage in fraudulent activity, or pose a risk to the integrity of the Platform. Where funds are implicated in fraudulent activity, we reserve the right to freeze withdrawals pending investigation.',
                },
                {
                  num: '12', title: 'Changes to the Service and Terms',
                  content: 'We may modify the Service or these Terms at any time. Material changes will be communicated through the Service prior to taking effect. Continued use after changes take effect constitutes acceptance.',
                },
              ].map((section) => (
                <div
                  key={section.num}
                  className="glass-rim"
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: '14px',
                    padding: '20px 22px',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 800, color: '#FF7A00', letterSpacing: '0.06em', marginTop: '3px', flexShrink: 0, minWidth: '18px' }}>
                      {section.num}.
                    </span>
                    <div>
                      <h2 style={{ fontSize: '13px', fontWeight: 800, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                        {section.title}
                      </h2>
                      <p>{section.content}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Section 5 — staking (multi-part) */}
              <div
                className="glass-rim"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '14px',
                  padding: '20px 22px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: '#FF7A00', letterSpacing: '0.06em', marginTop: '3px', flexShrink: 0, minWidth: '18px' }}>5.</span>
                  <div>
                    <h2 style={{ fontSize: '13px', fontWeight: 800, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                      Staking, wallets, and funds
                    </h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {[
                        { label: 'Staking', text: 'Certain modes require staking funds as a condition of participation. Stakes are held in escrow via smart contract until the match resolves.' },
                        { label: 'Wallets', text: 'You may use an internal embedded wallet or connect an external wallet. You are solely responsible for the security of any externally connected wallet, including private key management.' },
                        { label: 'Onchain transactions', text: 'Transactions settled onchain are generally irreversible. You accept the inherent risks of blockchain-based transactions.' },
                        { label: 'Fees', text: 'The Platform charges fees on certain transactions and settlements. Current fee structures will be made available within the Service and are subject to change with notice.' },
                      ].map((item) => (
                        <p key={item.label}>
                          <span style={{ color: '#CCCCCC', fontWeight: 700 }}>{item.label}: </span>
                          {item.text}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 13 — Contact */}
              <div
                className="glass-rim"
                style={{
                  background: 'rgba(255,122,0,0.04)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,122,0,0.15)',
                  borderRadius: '14px',
                  padding: '20px 22px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: '#FF7A00', letterSpacing: '0.06em', marginTop: '3px', flexShrink: 0 }}>13.</span>
                  <div>
                    <h2 style={{ fontSize: '13px', fontWeight: 800, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                      Contact
                    </h2>
                    <p>
                      Questions about these Terms can be directed to{' '}
                      <a
                        href="mailto:playdecepta@gmail.com"
                        style={{ color: '#FF7A00', textDecoration: 'none', fontWeight: 700 }}
                      >
                        playdecepta@gmail.com
                      </a>.
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