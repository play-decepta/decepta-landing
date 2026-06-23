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
      className="relative bg-[#111] border border-[#1E1E1E] rounded-[18px] p-7 flex flex-col gap-4 overflow-hidden group hover:border-[rgba(249,115,22,0.25)] hover:-translate-y-0.5 transition-all duration-300 after:content-[''] after:absolute after:top-0 after:left-0 after:right-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-[rgba(249,115,22,0.25)] after:to-transparent after:opacity-0 group-hover:after:opacity-100 after:transition-opacity"
    >
      <div className="w-11 h-11 rounded-xl bg-[rgba(249,115,22,0.08)] border border-[rgba(249,115,22,0.15)] flex items-center justify-center">
        <Icon size={20} color="#F97316" strokeWidth={1.5} />
      </div>

      <p className="text-[14px] font-extrabold text-white uppercase tracking-wide">{card.title}</p>

      <p className="text-[12px] text-[#666] leading-relaxed">{card.desc}</p>

      <div className="flex flex-col gap-2.5 mt-1">
        {card.checks.map((check) => (
          <div key={check} className="flex items-start gap-2">
            <div className="w-4 h-4 rounded-full bg-[rgba(0,200,100,0.1)] border border-[rgba(0,200,100,0.25)] flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-[9px] text-[#00C864] font-bold">✓</span>
            </div>
            <span className="text-[12px] text-[#888] leading-relaxed">{check}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default function TrustSafety() {
  return (
    <section id="trust" className="relative w-full px-5 py-28 flex flex-col items-center bg-[#0A0A0A] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.05)_0%,transparent_70%)] pointer-events-none" />

      <p className="relative z-10 text-[11px] font-bold tracking-[0.18em] uppercase text-[#F97316] mb-4">Trust & Safety</p>

      <h2 className="relative z-10 text-[clamp(32px,5vw,52px)] font-black uppercase leading-[1.05] tracking-tight text-center mb-4">
        <span className="text-white">Built to be </span>
        <span className="text-[#F97316]">trusted.</span>
      </h2>

      <p className="relative z-10 text-[15px] text-[#666] text-center max-w-[440px] leading-relaxed mb-16">
        Real money deserves real transparency. Here's exactly how Decepta protects your funds, your matches, and your experience.
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative z-10 w-full max-w-[1200px] mt-3.5 bg-[rgba(249,115,22,0.04)] border border-[rgba(249,115,22,0.15)] rounded-[18px] p-7 flex items-center gap-8 flex-wrap"
      >
        <div className="flex-1 min-w-[200px] flex items-start gap-3">
          <AlertTriangle size={20} color="#F97316" strokeWidth={1.5} className="flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-[14px] font-extrabold text-white uppercase tracking-wide mb-1.5">Responsible Gaming</p>
            <p className="text-[12px] text-[#666] leading-relaxed">
              Decepta is a skill-based competitive platform. Only stake what you can afford to lose. We provide tools to help you stay in control of your play.
            </p>
          </div>
        </div>
        <div className="flex gap-2 flex-wrap">
          {responsiblePills.map((pill) => (
            <span key={pill} className="bg-[rgba(249,115,22,0.08)] border border-[rgba(249,115,22,0.15)] rounded-lg px-3.5 py-1.5 text-[11px] font-bold text-[#F97316] tracking-wide uppercase whitespace-nowrap">{pill}</span>
          ))}
        </div>
      </motion.div>

      <p className="relative z-10 w-full max-w-[1200px] text-center text-[11px] text-[#555] mt-4">Decepta runs on smart contracts that have not yet completed a third-party security audit. Stake only what you understand the risk of.</p>
    </section>
  )
}
