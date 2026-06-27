'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Swords, Puzzle, Calendar, Trophy, RotateCcw } from 'lucide-react'

const modes = [
  {
    tagIcon: Swords,
    tag: 'Duel',
    icon: Puzzle,
    iconImage: null,
    title: 'Player vs Player',
    desc: 'The core Decepta experience. Go head-to-head against a real opponent in a timed intelligence battle. Every round counts.',
    details: [
      'Match using shared codes, only enter if you dare',
      'Both players stake equal amounts before the match starts',
      'Solve riddles under a countdown, roles switch each round',
      'Winner takes the full pot instantly',
    ],
    pills: ['PvP', 'Real stakes'],
    cta: 'Enter a Duel',
    featured: false,
    accentColor: '#FF7A00',
  },
  {
    tagIcon: null,
    tag: 'Cipher',
    icon: null,
    iconImage: '/assets/cipher-icon.jpg',
    title: 'Challenge the AI',
    desc: "No opponent needed. Face Cipher, Decepta's adaptive AI, in a solo intelligence battle. Cipher doesn't bluff. It observes.",
    details: [
      'Cipher selects the riddles, categories stay hidden until reveal',
      'Stake against the platform treasury, max $15 per match',
      '3 rounds, no role switching, you are always the guesser',
      'Limited free entries available for new players',
    ],
    pills: ['Solo', 'AI opponent', 'Free trial'],
    cta: 'Challenge Cipher',
    featured: false,
    accentColor: '#00D9FF',
  },
  {
    tagIcon: Calendar,
    tag: 'Friday Event',
    icon: Trophy,
    iconImage: null,
    title: 'Live Weekly Event',
    desc: 'Every Friday, selected contestants battle live in front of the entire Decepta community. Predict the winner. Earn from the pot.',
    details: [
      'Contestants selected by community vote each week',
      'Stake on who you think will win before Thursday closes',
      'Watch live, scoreboard, rounds, and tension in real time',
      'Correct predictions share the prediction pool payout',
    ],
    pills: ['Live', 'Spectator', 'Prediction pool'],
    cta: 'Predict this Friday',
    featured: true,
    accentColor: '#F5C451',
  },
]

interface FlipCardProps {
  mode: typeof modes[0]
  delay: number
}

function FlipCard({ mode, delay }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false)
  const c = mode.accentColor
  const TagIcon = mode.tagIcon
  const ModeIcon = mode.icon

  const cardBase: React.CSSProperties = {
    position: 'absolute', inset: 0,
    borderRadius: '20px',
    padding: '32px',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    backfaceVisibility: 'hidden',
    WebkitBackfaceVisibility: 'hidden',
    // Glass
    backdropFilter: 'blur(24px) saturate(1.8) brightness(1.06)',
    WebkitBackdropFilter: 'blur(24px) saturate(1.8) brightness(1.06)',
    border: `1px solid ${c}33`,
    boxShadow: `inset 0 1px 0 ${c}22, inset 0 -1px 0 rgba(0,0,0,0.25), 0 0 40px ${c}0A, 0 16px 48px rgba(0,0,0,0.40)`,
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      style={{ perspective: '1200px', height: '480px', position: 'relative', cursor: 'pointer' }}
      onClick={() => setFlipped(f => !f)}
    >
      {/* Orb behind this card */}
      <div style={{ position: 'absolute', width: '300px', height: '300px', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: `radial-gradient(circle, ${c}20 0%, transparent 70%)`, filter: 'blur(40px)', borderRadius: '50%', pointerEvents: 'none', zIndex: 0 }} />

      <div style={{ position: 'relative', width: '100%', height: '100%', transformStyle: 'preserve-3d', transition: 'transform 0.6s cubic-bezier(0.4,0,0.2,1)', transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}>

        {/* FRONT */}
        <div style={{ ...cardBase, background: `linear-gradient(160deg, ${c}10 0%, rgba(9,9,9,0.85) 60%)` }}>
          {/* Specular rim */}
          <div style={{ position: 'absolute', top: 0, left: '12%', right: '12%', height: '1px', background: `linear-gradient(90deg, transparent, ${c}40, transparent)`, pointerEvents: 'none' }} />

          {mode.featured && (
            <span className="absolute top-4 right-4 text-[9px] font-bold tracking-[0.12em] rounded px-2 py-0.5 uppercase"
              style={{ color: c, background: `${c}1A`, border: `1px solid ${c}33` }}>Weekly</span>
          )}

          <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-bold tracking-[0.14em] uppercase w-fit mb-6"
            style={{ color: c, background: `${c}18`, border: `1px solid ${c}40` }}>
            {TagIcon && <TagIcon size={12} strokeWidth={2.5} />}
            {mode.tag}
          </span>

          {mode.iconImage ? (
            <div className="w-12 h-12 rounded-xl overflow-hidden border mb-5" style={{ borderColor: `${c}4D` }}>
              <img src={mode.iconImage} alt={mode.tag} className="w-full h-full object-cover" />
            </div>
          ) : (
            ModeIcon && <ModeIcon size={32} color={c} strokeWidth={1.5} className="mb-5" />
          )}

          <p className="text-[18px] font-extrabold text-white uppercase tracking-wide mb-3">{mode.title}</p>
          <p className="text-[13px] leading-relaxed mb-6" style={{ color: '#666666' }}>{mode.desc}</p>

          <div className="flex gap-2 flex-wrap mt-auto mb-4">
            {mode.pills.map(pill => (
              <span key={pill} className="rounded-md px-2.5 py-1 text-[11px] font-medium"
                style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.10)', color: '#888888' }}>
                {pill}
              </span>
            ))}
          </div>

          {/* Flip hint */}
          <div className="flex items-center gap-1.5 mt-auto" style={{ color: `${c}80`, fontSize: '11px', fontWeight: 600 }}>
            <RotateCcw size={11} />
            Tap to see details
          </div>
        </div>

        {/* BACK */}
        <div style={{ ...cardBase, background: `linear-gradient(160deg, ${c}14 0%, rgba(9,9,9,0.90) 60%)`, transform: 'rotateY(180deg)' }}>
          <div style={{ position: 'absolute', top: 0, left: '12%', right: '12%', height: '1px', background: `linear-gradient(90deg, transparent, ${c}50, transparent)`, pointerEvents: 'none' }} />

          <p className="text-[11px] font-bold tracking-[0.14em] uppercase mb-6" style={{ color: c }}>How it works</p>

          <div className="flex flex-col gap-4 flex-1">
            {mode.details.map(detail => (
              <div key={detail} className="flex items-start gap-3">
                <span className="w-[6px] h-[6px] rounded-full flex-shrink-0 mt-[5px]" style={{ background: c, boxShadow: `0 0 6px ${c}` }} />
                <p className="text-[13px] leading-relaxed" style={{ color: '#CCCCCC' }}>{detail}</p>
              </div>
            ))}
          </div>

          <Link
            href="/signup"
            onClick={e => e.stopPropagation()}
            className="mt-6 w-full py-3.5 rounded-xl text-[12px] font-bold uppercase tracking-widest text-center block transition-all relative overflow-hidden"
            style={{ background: `${c}E8`, color: '#090909', boxShadow: `0 0 24px ${c}40, inset 0 1px 0 rgba(255,255,255,0.30)` }}
          >
            <span style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.45), transparent)', pointerEvents: 'none' }} />
            {mode.cta}
          </Link>

          <div className="flex items-center gap-1.5 mt-3" style={{ color: `${c}60`, fontSize: '11px', fontWeight: 600 }}>
            <RotateCcw size={11} />
            Tap to flip back
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function ModesExpanded() {
  return (
    <section id="modes" className="relative w-full px-5 py-28 flex flex-col items-center overflow-hidden" style={{ backgroundColor: '#090909' }}>

      {/* Section orbs */}
      <div style={{ position: 'absolute', width: '500px', height: '500px', top: '30%', left: '-100px', background: 'radial-gradient(circle, rgba(255,122,0,0.10) 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', width: '400px', height: '400px', top: '30%', right: '-100px', background: 'radial-gradient(circle, rgba(0,217,255,0.08) 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', width: '400px', height: '400px', bottom: '10%', left: '50%', transform: 'translateX(-50%)', background: 'radial-gradient(circle, rgba(245,196,81,0.08) 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none', zIndex: 0 }} />

      <p className="relative z-10 text-[11px] font-bold tracking-[0.18em] uppercase mb-4" style={{ color: '#FF7A00' }}>Three modes</p>

      <h2 className="relative z-10 text-[clamp(32px,5vw,52px)] font-black uppercase leading-[1.05] tracking-tight text-center mb-4">
        <span className="text-white">One arena. </span>
        <span style={{ color: '#FF7A00' }}>Three ways to win.</span>
      </h2>

      <p className="relative z-10 text-[15px] text-center max-w-[440px] leading-relaxed mb-6" style={{ color: '#555555' }}>
        Every mode is built around the same principle, pressure reveals intelligence. Pick your battlefield.
      </p>

      <p className="relative z-10 text-[12px] mb-16" style={{ color: '#444444' }}>Tap any card to flip it</p>

      {/* Desktop — flip cards */}
      <div className="hidden md:grid relative z-10 grid-cols-3 gap-5 w-full max-w-[1280px]">
        {modes.map((mode, i) => (
          <FlipCard key={mode.tag} mode={mode} delay={i * 0.1} />
        ))}
      </div>

      {/* Mobile — static glass cards */}
      <div className="flex md:hidden relative z-10 flex-col gap-4 w-full max-w-[400px]">
        {modes.map((mode, i) => {
          const TagIcon = mode.tagIcon
          const ModeIcon = mode.icon
          const c = mode.accentColor
          return (
            <motion.div key={mode.tag} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative overflow-hidden rounded-2xl p-6"
              style={{ background: `linear-gradient(160deg, ${c}10 0%, rgba(9,9,9,0.85) 60%)`, backdropFilter: 'blur(20px) saturate(1.8)', WebkitBackdropFilter: 'blur(20px) saturate(1.8)', border: `1px solid ${c}30`, boxShadow: `inset 0 1px 0 ${c}20, 0 8px 32px rgba(0,0,0,0.30)` }}>
              <div style={{ position: 'absolute', top: 0, left: '12%', right: '12%', height: '1px', background: `linear-gradient(90deg, transparent, ${c}40, transparent)`, pointerEvents: 'none' }} />

              <div className="flex items-center gap-3 mb-4">
                {mode.iconImage ? (
                  <div className="w-10 h-10 rounded-lg overflow-hidden border flex-shrink-0" style={{ borderColor: `${c}4D` }}>
                    <img src={mode.iconImage} alt={mode.tag} className="w-full h-full object-cover" />
                  </div>
                ) : (
                  ModeIcon && <ModeIcon size={28} color={c} strokeWidth={1.5} />
                )}
                <div>
                  <p className="text-[10px] font-bold tracking-[0.1em] uppercase flex items-center gap-1.5" style={{ color: c }}>
                    {TagIcon && <TagIcon size={11} strokeWidth={2.5} />}
                    {mode.tag}
                  </p>
                  <p className="text-[16px] font-extrabold text-white uppercase tracking-wide">{mode.title}</p>
                </div>
              </div>

              <p className="text-[13px] leading-relaxed mb-5" style={{ color: '#666666' }}>{mode.desc}</p>

              <div className="flex flex-col gap-2.5 mb-5">
                {mode.details.map(detail => (
                  <div key={detail} className="flex items-start gap-2">
                    <span className="w-[5px] h-[5px] rounded-full flex-shrink-0 mt-[6px]" style={{ background: c }} />
                    <p className="text-[12px] leading-relaxed" style={{ color: '#888888' }}>{detail}</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-2 flex-wrap mb-5">
                {mode.pills.map(pill => (
                  <span key={pill} className="rounded-md px-2.5 py-1 text-[11px] font-medium"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.10)', color: '#888888' }}>
                    {pill}
                  </span>
                ))}
              </div>

              <Link href="/signup" className="w-full py-3 rounded-xl text-[12px] font-bold uppercase tracking-widest text-center block"
                style={{ background: `${c}E8`, color: '#090909', boxShadow: `0 0 20px ${c}30` }}>
                {mode.cta}
              </Link>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}