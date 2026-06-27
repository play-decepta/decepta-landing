'use client'
import { motion } from 'framer-motion'
import { Lock, Scale, Zap, Shield, ShieldCheck, AlertTriangle, LucideProps } from 'lucide-react'

type TrustCardData = {
  icon: React.ComponentType<LucideProps>
  title: string
  desc: string
  checks: string[]
}

const cards: TrustCardData[] = [
  {
    icon: Lock,
    title: 'Secure Funds',
    desc: 'Your balance is held securely and never mixed with platform operating funds. Deposits and withdrawals are processed immediately.',
    checks: ['Funds held in segregated accounts', 'Instant withdrawal processing', 'No hidden fees on withdrawals'],
  },
  {
    icon: Scale,
    title: 'Fair Play',
    desc: 'Every match runs on verified game logic. Riddles are drawn from a locked pool. No manipulation, no advantage, just skill.',
    checks: ['Verified riddle pool, no repeats per session', 'Tamper-proof match logic', 'Anti-cheat detection on all matches'],
  },
  {
    icon: Zap,
    title: 'Instant Payouts',
    desc: 'Win a match and your wallet updates immediately. No waiting periods, no manual reviews, earnings are yours the second the result is confirmed.',
    checks: ['Wallet credited within seconds of match end', 'Full transaction history available', 'Withdraw anytime, no minimum hold'],
  },
  {
    icon: Shield,
    title: 'Disconnect Protection',
    desc: 'If your opponent disconnects mid-match, the system detects it automatically. You are protected from unfair losses caused by connection issues.',
    checks: ['Auto-detection of disconnects within 10 seconds', 'Stake returned automatically on opponent drop'],
  },
  {
    icon: ShieldCheck,
    title: 'Account Security',
    desc: 'Your account and wallet are protected with industry-standard security. We never store sensitive payment details on our servers.',
    checks: ['Encrypted authentication on all sessions', 'No payment data stored on Decepta servers'],
  },
]

const responsiblePills = ['Stake limits', 'Session reminders', 'Self-exclusion', '24/7 support']

interface TrustCardProps {
  card: TrustCardData
  delay: number
}

function TrustCard({ card, delay }: TrustCardProps) {
  const Icon = card.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative overflow-hidden rounded-[18px] p-7 flex flex-col gap-4"
      style={{
        background: 'rgba(255,255,255,0.03)',
        backdropFilter: 'blur(20px) saturate(1.6) brightness(1.04)',
        WebkitBackdropFilter: 'blur(20px) saturate(1.6) brightness(1.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08), 0 8px 32px rgba(0,0,0,0.30)',
        transition: 'border-color 0.2s, transform 0.2s',
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,122,0,0.25)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.transform = 'translateY(0)' }}
    >
      {/* Specular rim — appears on hover via CSS transition on parent */}
      <div style={{ position: 'absolute', top: 0, left: '12%', right: '12%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)', pointerEvents: 'none' }} />

      {/* Icon container — glass with orange tint */}
      <div className="relative overflow-hidden w-11 h-11 rounded-xl flex items-center justify-center"
        style={{ background: 'rgba(255,122,0,0.08)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(255,122,0,0.18)', boxShadow: 'inset 0 1px 0 rgba(255,122,0,0.12)' }}>
        <div style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,122,0,0.30), transparent)' }} />
        <Icon size={20} color="#FF7A00" strokeWidth={1.5} />
      </div>

      <p className="text-[14px] font-extrabold text-white uppercase tracking-wide">{card.title}</p>
      <p className="text-[12px] leading-relaxed" style={{ color: '#666666' }}>{card.desc}</p>

      <div className="flex flex-col gap-2.5 mt-1">
        {card.checks.map(check => (
          <div key={check} className="flex items-start gap-2">
            {/* Check circle — green glass */}
            <div className="relative overflow-hidden w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
              style={{ background: 'rgba(72,199,116,0.10)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', border: '1px solid rgba(72,199,116,0.25)' }}>
              <span style={{ fontSize: '9px', color: '#48C774', fontWeight: 700 }}>✓</span>
            </div>
            <span className="text-[12px] leading-relaxed" style={{ color: '#888888' }}>{check}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default function TrustSafety() {
  return (
    <section id="trust" className="relative w-full px-5 py-28 flex flex-col items-center overflow-hidden" style={{ backgroundColor: '#090909' }}>

      {/* Orbs — kept subtle so text stays readable */}
      <div style={{ position: 'absolute', width: '600px', height: '400px', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: 'radial-gradient(ellipse at center, rgba(255,122,0,0.08) 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', width: '300px', height: '300px', top: '10%', left: '5%', background: 'radial-gradient(circle, rgba(72,199,116,0.06) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', width: '300px', height: '300px', bottom: '10%', right: '5%', background: 'radial-gradient(circle, rgba(72,199,116,0.06) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0 }} />

      <p className="relative z-10 text-[11px] font-bold tracking-[0.18em] uppercase mb-4" style={{ color: '#FF7A00' }}>Trust & Safety</p>

      <h2 className="relative z-10 text-[clamp(32px,5vw,52px)] font-black uppercase leading-[1.05] tracking-tight text-center mb-4">
        <span className="text-white">Built to be </span>
        <span style={{ color: '#FF7A00', textShadow: '0 0 40px rgba(255,122,0,0.25)' }}>trusted.</span>
      </h2>

      <p className="relative z-10 text-[15px] text-center max-w-[440px] leading-relaxed mb-16" style={{ color: '#555555' }}>
        Real money deserves real transparency. Here&apos;s exactly how Decepta protects your funds, your matches, and your experience.
      </p>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-3.5 w-full max-w-[1200px] mb-3.5">
        {cards.slice(0, 3).map((card, i) => (
          <TrustCard key={card.title} card={card} delay={i * 0.1} />
        ))}
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-3.5 w-full max-w-[1200px]">
        {cards.slice(3).map((card, i) => (
          <TrustCard key={card.title} card={card} delay={i * 0.1} />
        ))}
      </div>

      {/* Responsible gaming banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
        className="relative z-10 w-full max-w-[1200px] mt-3.5 overflow-hidden rounded-[18px] p-7 flex items-center gap-8 flex-wrap"
        style={{
          background: 'rgba(255,122,0,0.05)',
          backdropFilter: 'blur(24px) saturate(1.8) brightness(1.05)',
          WebkitBackdropFilter: 'blur(24px) saturate(1.8) brightness(1.05)',
          border: '1px solid rgba(255,122,0,0.18)',
          boxShadow: 'inset 0 1px 0 rgba(255,122,0,0.12), 0 0 40px rgba(255,122,0,0.05)',
        }}
      >
        <div style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,122,0,0.30), transparent)', pointerEvents: 'none' }} />

        <div className="flex-1 min-w-[200px] flex items-start gap-3">
          <AlertTriangle size={20} color="#FF7A00" strokeWidth={1.5} className="flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-[14px] font-extrabold text-white uppercase tracking-wide mb-1.5">Responsible Gaming</p>
            <p className="text-[12px] leading-relaxed" style={{ color: '#666666' }}>
              Decepta is a skill-based competitive platform. Only stake what you can afford to lose. We provide tools to help you stay in control of your play.
            </p>
          </div>
        </div>

        <div className="flex gap-2 flex-wrap">
          {responsiblePills.map(pill => (
            <span key={pill} className="relative overflow-hidden rounded-lg px-3.5 py-1.5 text-[11px] font-bold tracking-wide uppercase whitespace-nowrap"
              style={{ background: 'rgba(255,122,0,0.08)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', border: '1px solid rgba(255,122,0,0.18)', color: '#FF7A00' }}>
              {pill}
            </span>
          ))}
        </div>
      </motion.div>

      <p className="relative z-10 w-full max-w-[1200px] text-center text-[11px] mt-4" style={{ color: '#444444' }}>
        Decepta runs on smart contracts that have not yet completed a third-party security audit. Stake only what you understand the risk of.
      </p>
    </section>
  )
}