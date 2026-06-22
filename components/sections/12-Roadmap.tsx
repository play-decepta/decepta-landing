'use client'
import { motion } from 'framer-motion'
import { CheckCircle2, Circle } from 'lucide-react'

const phases = [
  {
    phase: 'Phase 1',
    title: 'Foundation',
    desc: 'The core platform is built. Duel mode, Cipher mode, wallet system, leaderboard, and Friday Event infrastructure are all complete.',
    status: 'done',
    statusLabel: 'Complete',
    items: ['Duel mode — full PvP system', 'Cipher AI opponent', 'Friday Event live system', 'Wallet & instant payouts', '300 riddles across 20 categories'],
    side: 'left',
  },
  {
    phase: 'Phase 2 — Now',
    title: 'Public Launch',
    desc: 'Decepta opens to the public. Onboarding systems go live, the community grows, and the first season of Friday Events kicks off.',
    status: 'active',
    statusLabel: 'In progress',
    items: ['Public beta launch', 'Landing page & signup flow', 'Season 1 Friday Events', 'Community channels live', 'First content expansion drop'],
    side: 'right',
  },
  {
    phase: 'Phase 3',
    title: 'Content Expansion',
    desc: 'Weekly riddle and category drops go live on a rolling schedule. New content keeps the arena fresh and competitive.',
    status: 'soon',
    statusLabel: 'Coming soon',
    items: ['Weekly new riddle sets', 'New categories added monthly', 'Seasonal riddle themes', 'Cipher lore media rollout'],
    side: 'left',
  },
  {
    phase: 'Phase 4',
    title: 'Advanced Rankings',
    desc: 'A full seasonal ranking system launches with tiered divisions, ranked rewards, and end-of-season prize pools.',
    status: 'future',
    statusLabel: 'Planned',
    items: ['Seasonal ranking divisions', 'Ranked match queues', 'End-of-season prize pools', 'Rank badges and prestige titles'],
    side: 'right',
  },
  {
    phase: 'Phase 5',
    title: 'Spectator & Lore',
    desc: 'Enhanced spectator systems, Cipher lore narrative releases, AI-generated media, and expanded Friday Event structures.',
    status: 'future',
    statusLabel: 'Planned',
    items: ['Enhanced live spectator system', 'Cipher cinematic lore drops', 'AI-generated narrative media', 'Multi-contestant Friday brackets'],
    side: 'left',
  },
]

const dotStyles = {
  done: 'bg-[#F97316] shadow-[0_0_12px_rgba(249,115,22,0.5)]',
  active: 'bg-[#F97316] shadow-[0_0_16px_rgba(249,115,22,0.6)] animate-pulse',
  soon: 'bg-[#2A2A2A] border-2 border-[#444]',
  future: 'bg-[#1A1A1A] border-2 border-[#2A2A2A]',
}

const cardStyles = {
  done: 'border-[rgba(249,115,22,0.2)]',
  active: 'border-[rgba(249,115,22,0.35)] bg-[rgba(249,115,22,0.04)]',
  soon: 'border-[#1E1E1E]',
  future: 'border-[#1E1E1E]',
}

const phaseColors = {
  done: 'text-[#F97316]',
  active: 'text-[#F97316]',
  soon: 'text-[#555]',
  future: 'text-[#444]',
}

const statusStyles = {
  done: 'bg-[rgba(0,200,100,0.08)] border border-[rgba(0,200,100,0.2)] text-[#00C864]',
  active: 'bg-[rgba(249,115,22,0.1)] border border-[rgba(249,115,22,0.25)] text-[#F97316]',
  soon: 'bg-[rgba(255,255,255,0.04)] border border-[#2A2A2A] text-[#555]',
  future: 'bg-[rgba(255,255,255,0.02)] border border-[#1E1E1E] text-[#444]',
}

const liDotStyles = {
  done: 'bg-[#F97316]',
  active: 'bg-[#F97316]',
  soon: 'bg-[#444]',
  future: 'bg-[#333]',
}

function StatusIcon({ status }) {
  if (status === 'done') return <CheckCircle2 size={11} strokeWidth={2.5} />
  if (status === 'active') return <Circle size={9} strokeWidth={0} fill="currentColor" />
  return null
}

function PhaseCard({ p, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`bg-[#111] border rounded-2xl p-6 flex flex-col gap-3 hover:border-[rgba(249,115,22,0.3)] transition-colors ${cardStyles[p.status]}`}
    >
      <div>
        <p className={`text-[10px] font-bold tracking-[0.14em] uppercase mb-0.5 ${phaseColors[p.status]}`}>{p.phase}</p>
        <p className="text-[15px] font-extrabold text-white uppercase tracking-wide">{p.title}</p>
      </div>
      <p className="text-[12px] text-[#666] leading-[1.7]">{p.desc}</p>
      <div className="flex flex-col gap-1.5">
        {p.items.map((item) => (
          <div key={item} className="flex items-start gap-2">
            <div className={`w-1 h-1 rounded-full flex-shrink-0 mt-[6px] ${liDotStyles[p.status]}`} />
            <span className="text-[11px] text-[#888] leading-relaxed">{item}</span>
          </div>
        ))}
      </div>
      <span className={`inline-flex items-center gap-1 text-[10px] font-bold tracking-[0.1em] uppercase px-2.5 py-1 rounded-full w-fit mt-1 ${statusStyles[p.status]}`}>
        <StatusIcon status={p.status} />
        {p.statusLabel}
      </span>
    </motion.div>
  )
}

export default function Roadmap() {
  return (
    <section id="roadmap" className="relative w-full px-5 py-28 flex flex-col items-center bg-[#0A0A0A] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.05)_0%,transparent_70%)] pointer-events-none" />

      <p className="relative z-10 text-[11px] font-bold tracking-[0.18em] uppercase text-[#F97316] mb-4">Roadmap</p>
      <h2 className="relative z-10 text-[clamp(32px,5vw,52px)] font-black uppercase leading-[1.05] tracking-tight text-center mb-4">
        <span className="text-white">Where we're </span>
        <span className="text-[#F97316]">going.</span>
      </h2>
      <p className="relative z-10 text-[15px] text-[#666] text-center max-w-[440px] leading-relaxed mb-20">
        Decepta is built in public. Here's the full picture, what's live, what's next, and what's coming.
      </p>

      <div className="hidden md:block relative w-full max-w-[860px] z-10">
        <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2" style={{ background: 'linear-gradient(180deg,#F97316 0%,#2A2A2A 60%,transparent 100%)' }} />

        {phases.map((p, i) => (
          <div key={p.title} className="grid grid-cols-[1fr_60px_1fr] mb-14 last:mb-0 items-start">
            {p.side === 'left' ? <div className="pr-8"><PhaseCard p={p} delay={i * 0.1} /></div> : <div />}
            <div className="flex justify-center pt-5">
              <div className={`w-3.5 h-3.5 rounded-full flex-shrink-0 relative z-10 ${dotStyles[p.status]}`} />
            </div>
            {p.side === 'right' ? <div className="pl-8"><PhaseCard p={p} delay={i * 0.1} /></div> : <div />}
          </div>
        ))}
      </div>

      <div className="flex md:hidden flex-col w-full max-w-[480px] relative z-10">
        <div className="absolute left-[19px] top-0 bottom-0 w-px" style={{ background: 'linear-gradient(180deg,#F97316 0%,#2A2A2A 60%,transparent 100%)' }} />
        {phases.map((p, i) => (
          <div key={p.title} className="flex gap-5 items-start mb-6 last:mb-0">
            <div className="flex-shrink-0 w-10 flex justify-center pt-5">
              <div className={`w-3.5 h-3.5 rounded-full relative z-10 ${dotStyles[p.status]}`} />
            </div>
            <div className="flex-1"><PhaseCard p={p} delay={i * 0.08} /></div>
          </div>
        ))}
      </div>
    </section>
  )
}
