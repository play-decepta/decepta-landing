'use client'
import { motion } from 'framer-motion'
import { CheckCircle2, Circle } from 'lucide-react'

type PhaseStatus = 'done' | 'active' | 'soon' | 'future'

type Phase = {
  phase: string
  title: string
  desc: string
  status: PhaseStatus
  statusLabel: string
  items: string[]
  side: 'left' | 'right'
}

const phases: Phase[] = [
  {
    phase: 'Phase 1', title: 'Foundation',
    desc: 'The core platform is built. Duel mode, Cipher mode, wallet system, leaderboard, and Friday Event infrastructure are all complete.',
    status: 'done', statusLabel: 'Complete',
    items: ['Duel mode — full PvP system', 'Cipher AI opponent', 'Friday Event live system', 'Wallet & instant payouts', '300 riddles across 20 categories'],
    side: 'left',
  },
  {
    phase: 'Phase 2 — Now', title: 'Public Launch',
    desc: 'Decepta opens to the public. Onboarding systems go live, the community grows, and the first season of Friday Events kicks off.',
    status: 'active', statusLabel: 'In progress',
    items: ['Public beta launch', 'Landing page & signup flow', 'Season 1 Friday Events', 'Community channels live', 'First content expansion drop'],
    side: 'right',
  },
  {
    phase: 'Phase 3', title: 'Content Expansion',
    desc: 'Weekly riddle and category drops go live on a rolling schedule. New content keeps the arena fresh and competitive.',
    status: 'soon', statusLabel: 'Coming soon',
    items: ['Weekly new riddle sets', 'New categories added monthly', 'Seasonal riddle themes', 'Cipher lore media rollout'],
    side: 'left',
  },
  {
    phase: 'Phase 4', title: 'Advanced Rankings',
    desc: 'A full seasonal ranking system launches with tiered divisions, ranked rewards, and end-of-season prize pools.',
    status: 'future', statusLabel: 'Planned',
    items: ['Seasonal ranking divisions', 'Ranked match queues', 'End-of-season prize pools', 'Rank badges and prestige titles'],
    side: 'right',
  },
  {
    phase: 'Phase 5', title: 'Spectator & Lore',
    desc: 'Enhanced spectator systems, Cipher lore narrative releases, AI-generated media, and expanded Friday Event structures.',
    status: 'future', statusLabel: 'Planned',
    items: ['Enhanced live spectator system', 'Cipher cinematic lore drops', 'AI-generated narrative media', 'Multi-contestant Friday brackets'],
    side: 'left',
  },
]

const dotGlow: Record<PhaseStatus, React.CSSProperties> = {
  done:   { background: '#FF7A00', boxShadow: '0 0 12px rgba(255,122,0,0.55), 0 0 24px rgba(255,122,0,0.25)' },
  active: { background: '#FF7A00', boxShadow: '0 0 16px rgba(255,122,0,0.65), 0 0 32px rgba(255,122,0,0.30)', animation: 'pulse 2s ease-in-out infinite' },
  soon:   { background: '#2A2A2A', border: '2px solid #444444' },
  future: { background: '#1A1A1A', border: '2px solid #2A2A2A' },
}

const cardBg: Record<PhaseStatus, React.CSSProperties> = {
  done:   { background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,122,0,0.20)' },
  active: { background: 'rgba(255,122,0,0.05)',   border: '1px solid rgba(255,122,0,0.32)' },
  soon:   { background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)' },
  future: { background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.05)' },
}

const phaseColor: Record<PhaseStatus, string> = {
  done: '#FF7A00', active: '#FF7A00', soon: '#555555', future: '#444444',
}

const statusStyle: Record<PhaseStatus, React.CSSProperties> = {
  done:   { background: 'rgba(72,199,116,0.08)',  border: '1px solid rgba(72,199,116,0.22)', color: '#48C774', backdropFilter: 'blur(8px)' },
  active: { background: 'rgba(255,122,0,0.10)',   border: '1px solid rgba(255,122,0,0.28)',  color: '#FF7A00', backdropFilter: 'blur(8px)' },
  soon:   { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)', color: '#555555', backdropFilter: 'blur(8px)' },
  future: { background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', color: '#444444', backdropFilter: 'blur(8px)' },
}

const liDotColor: Record<PhaseStatus, string> = {
  done: '#FF7A00', active: '#FF7A00', soon: '#444444', future: '#333333',
}

function StatusIcon({ status }: { status: PhaseStatus }) {
  if (status === 'done')   return <CheckCircle2 size={11} strokeWidth={2.5} />
  if (status === 'active') return <Circle size={9} strokeWidth={0} fill="currentColor" />
  return null
}

function PhaseCard({ p, delay }: { p: Phase; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative overflow-hidden rounded-2xl p-6 flex flex-col gap-3"
      style={{
        ...cardBg[p.status],
        backdropFilter: 'blur(20px) saturate(1.6) brightness(1.04)',
        WebkitBackdropFilter: 'blur(20px) saturate(1.6) brightness(1.04)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.07), 0 8px 32px rgba(0,0,0,0.30)',
        transition: 'border-color 0.2s',
      }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(255,122,0,0.30)')}
      onMouseLeave={e => (e.currentTarget.style.borderColor = cardBg[p.status].border as string)}
    >
      {/* Specular rim */}
      <div style={{ position: 'absolute', top: 0, left: '12%', right: '12%', height: '1px', background: p.status === 'active' ? 'linear-gradient(90deg, transparent, rgba(255,122,0,0.28), transparent)' : 'linear-gradient(90deg, transparent, rgba(255,255,255,0.10), transparent)', pointerEvents: 'none' }} />

      <div>
        <p className="text-[10px] font-bold tracking-[0.14em] uppercase mb-0.5" style={{ color: phaseColor[p.status] }}>{p.phase}</p>
        <p className="text-[15px] font-extrabold text-white uppercase tracking-wide">{p.title}</p>
      </div>

      <p className="text-[12px] leading-[1.7]" style={{ color: '#666666' }}>{p.desc}</p>

      <div className="flex flex-col gap-1.5">
        {p.items.map(item => (
          <div key={item} className="flex items-start gap-2">
            <div className="w-1 h-1 rounded-full flex-shrink-0 mt-[6px]" style={{ background: liDotColor[p.status] }} />
            <span className="text-[11px] leading-relaxed" style={{ color: '#888888' }}>{item}</span>
          </div>
        ))}
      </div>

      <span className="inline-flex items-center gap-1 text-[10px] font-bold tracking-[0.1em] uppercase px-2.5 py-1 rounded-full w-fit mt-1 relative overflow-hidden"
        style={statusStyle[p.status]}>
        <StatusIcon status={p.status} />
        {p.statusLabel}
      </span>
    </motion.div>
  )
}

export default function Roadmap() {
  return (
    <section id="roadmap" className="relative w-full px-5 py-28 flex flex-col items-center overflow-hidden" style={{ backgroundColor: '#090909' }}>

      {/* Orbs */}
      <div style={{ position: 'absolute', width: '700px', height: '500px', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: 'radial-gradient(ellipse at center, rgba(255,122,0,0.09) 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none', zIndex: 0 }} />

      <p className="relative z-10 text-[11px] font-bold tracking-[0.18em] uppercase mb-4" style={{ color: '#FF7A00' }}>Roadmap</p>

      <h2 className="relative z-10 text-[clamp(32px,5vw,52px)] font-black uppercase leading-[1.05] tracking-tight text-center mb-4">
        <span className="text-white">Where we&apos;re </span>
        <span style={{ color: '#FF7A00', textShadow: '0 0 40px rgba(255,122,0,0.25)' }}>going.</span>
      </h2>

      <p className="relative z-10 text-[15px] text-center max-w-[440px] leading-relaxed mb-20" style={{ color: '#555555' }}>
        Decepta is built in public. Here&apos;s the full picture, what&apos;s live, what&apos;s next, and what&apos;s coming.
      </p>

      {/* Desktop timeline */}
      <div className="hidden md:block relative w-full max-w-[860px] z-10">
        <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
          style={{ background: 'linear-gradient(180deg, #FF7A00 0%, rgba(255,122,0,0.20) 60%, transparent 100%)' }} />
        {phases.map((p, i) => (
          <div key={p.title} className="grid grid-cols-[1fr_60px_1fr] mb-14 last:mb-0 items-start">
            {p.side === 'left'  ? <div className="pr-8"><PhaseCard p={p} delay={i * 0.1} /></div> : <div />}
            <div className="flex justify-center pt-5">
              <div className="w-3.5 h-3.5 rounded-full flex-shrink-0 relative z-10" style={dotGlow[p.status]} />
            </div>
            {p.side === 'right' ? <div className="pl-8"><PhaseCard p={p} delay={i * 0.1} /></div> : <div />}
          </div>
        ))}
      </div>

      {/* Mobile timeline */}
      <div className="flex md:hidden flex-col w-full max-w-[480px] relative z-10">
        <div className="absolute left-[19px] top-0 bottom-0 w-px"
          style={{ background: 'linear-gradient(180deg, #FF7A00 0%, rgba(255,122,0,0.15) 60%, transparent 100%)' }} />
        {phases.map((p, i) => (
          <div key={p.title} className="flex gap-5 items-start mb-6 last:mb-0">
            <div className="flex-shrink-0 w-10 flex justify-center pt-5">
              <div className="w-3.5 h-3.5 rounded-full relative z-10" style={dotGlow[p.status]} />
            </div>
            <div className="flex-1"><PhaseCard p={p} delay={i * 0.08} /></div>
          </div>
        ))}
      </div>
    </section>
  )
}