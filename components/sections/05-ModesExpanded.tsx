'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Swords, Puzzle, Calendar, Trophy } from 'lucide-react'

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
    accentColor: '#F97316',
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
    accentColor: '#22D3EE',
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
    accentColor: '#EAB308',
  },
]

export default function ModesExpanded() {
  return (
    <section id="modes" className="w-full px-5 py-28 flex flex-col items-center bg-[#0A0A0A]">
      <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#F97316] mb-4">Three modes</p>

      <h2 className="text-[clamp(32px,5vw,52px)] font-black uppercase leading-[1.05] tracking-tight text-center mb-4">
        <span className="text-white">One arena. </span>
        <span className="text-[#F97316]">Three ways to win.</span>
      </h2>

      <p className="text-[15px] text-[#666] text-center max-w-[440px] leading-relaxed mb-16">
        Every mode is built around the same principle, pressure reveals intelligence. Pick your battlefield.
      </p>

      <div className="hidden md:grid grid-cols-3 gap-4 w-full max-w-[1280px]">
        {modes.map((mode, i) => {
          const TagIcon = mode.tagIcon
          const ModeIcon = mode.icon
          const c = mode.accentColor
          return (
            <motion.div
              key={mode.tag}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex flex-col p-8 rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-1 group"
              style={{ borderColor: mode.featured ? `${c}4D` : '#1E1E1E', background: mode.featured ? `linear-gradient(180deg, #141414 0%, #111111 100%)` : '#111111' }}
              onMouseEnter={(e) => { if (!mode.featured) e.currentTarget.style.borderColor = c }}
              onMouseLeave={(e) => { if (!mode.featured) e.currentTarget.style.borderColor = '#1E1E1E' }}
            >
              {mode.featured && (
                <span className="absolute top-4 right-4 text-[9px] font-bold tracking-[0.12em] rounded px-2 py-0.5 uppercase" style={{ color: c, background: `${c}1A`, border: `1px solid ${c}33` }}>Weekly</span>
              )}

              <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-bold tracking-[0.14em] uppercase w-fit mb-6" style={{ color: c, background: `${c}1A`, border: `1px solid ${c}40` }}>
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

              <p className="text-[18px] font-extrabold text-white uppercase tracking-wide mb-2">{mode.title}</p>
              <p className="text-[13px] text-[#666] leading-relaxed mb-7">{mode.desc}</p>

              <div className="w-full h-px bg-[#1E1E1E] mb-6" />

              <div className="flex flex-col gap-2.5 mb-7">
                {mode.details.map((detail) => (
                  <div key={detail} className="flex items-start gap-2">
                    <span className="w-[5px] h-[5px] rounded-full flex-shrink-0 mt-[6px]" style={{ background: c }} />
                    <p className="text-[12px] text-[#888] leading-relaxed">{detail}</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-2 flex-wrap mt-auto">
                {mode.pills.map((pill) => (
                  <span key={pill} className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-md px-2.5 py-1 text-[11px] font-medium text-[#888]">{pill}</span>
                ))}
              </div>

              <Link href="/signup" className="mt-6 w-full py-3 bg-transparent border border-[#2A2A2A] rounded-lg text-[12px] font-bold text-[#CCC] uppercase tracking-widest transition-all text-center block" onMouseEnter={(e) => { e.currentTarget.style.background = c; e.currentTarget.style.borderColor = c; e.currentTarget.style.color = '#000' }} onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = '#2A2A2A'; e.currentTarget.style.color = '#CCC' }}>
                {mode.cta}
              </Link>
            </motion.div>
          )
        })}
      </div>

      <div className="flex md:hidden flex-col gap-3.5 w-full max-w-[400px]">
        {modes.map((mode, i) => {
          const TagIcon = mode.tagIcon
          const ModeIcon = mode.icon
          const c = mode.accentColor
          return (
            <motion.div key={mode.tag} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="rounded-2xl border p-6 bg-[#111111]" style={{ borderColor: mode.featured ? `${c}4D` : '#1E1E1E' }}>
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

              <p className="text-[13px] text-[#666] leading-relaxed mb-4">{mode.desc}</p>

              <div className="flex gap-2 flex-wrap mb-5">
                {mode.pills.map((pill) => (
                  <span key={pill} className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-md px-2.5 py-1 text-[11px] font-medium text-[#888]">{pill}</span>
                ))}
              </div>

              <Link href="/signup" className="w-full py-2.5 bg-transparent border border-[#2A2A2A] rounded-lg text-[12px] font-bold text-[#CCC] uppercase tracking-widest transition-all text-center block">{mode.cta}</Link>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
