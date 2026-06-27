'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import useCountdown from '@/hooks/useCountdown'

const GOLD = '#F5C451'

function getNextFriday() {
  const now = new Date()
  const next = new Date()
  next.setDate(now.getDate() + ((5 - now.getDay() + 7) % 7 || 7))
  next.setHours(20, 0, 0, 0)
  return next
}

const steps = [
  { num: 'Step 01', title: 'Vote for Contestants', desc: 'Community selects who competes each week through voting.' },
  { num: 'Step 02', title: 'Place Your Prediction', desc: 'Stake on who you think will win. Predictions lock at end of Thursday.' },
  { num: 'Step 03', title: 'Watch & Earn', desc: 'Watch live Friday. Correct predictions share the full prediction pool.' },
]

export default function FridaySpotlight() {
  const [target] = useState(() => getNextFriday())
  const time = useCountdown(target)

  const units = [
    { value: time.d, label: 'Days' },
    { value: time.h, label: 'Hrs'  },
    { value: time.m, label: 'Min'  },
    { value: time.s, label: 'Sec'  },
  ]

  return (
    <section id="friday" className="relative w-full px-5 py-28 flex flex-col items-center overflow-hidden" style={{ backgroundColor: '#090909' }}>

      {/* Gold orbs — give the glass surfaces rich colour to blur */}
      <div style={{ position: 'absolute', width: '700px', height: '500px', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: 'radial-gradient(ellipse at center, rgba(245,196,81,0.14) 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', width: '400px', height: '400px', top: '10%', left: '-80px', background: 'radial-gradient(circle, rgba(245,196,81,0.08) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', width: '400px', height: '400px', bottom: '10%', right: '-80px', background: 'radial-gradient(circle, rgba(245,196,81,0.08) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0 }} />

      <p className="relative z-10 text-[11px] font-bold tracking-[0.18em] uppercase mb-4" style={{ color: GOLD }}>Friday Event</p>

      <h2 className="relative z-10 text-[clamp(32px,5vw,52px)] font-black uppercase leading-[1.05] tracking-tight text-center mb-4">
        <span className="text-white">The arena goes </span>
        <span style={{ color: GOLD, textShadow: '0 0 40px rgba(245,196,81,0.30)' }}>live every Friday.</span>
      </h2>

      <p className="relative z-10 text-[15px] text-center max-w-[440px] leading-relaxed mb-16" style={{ color: '#555555' }}>
        Community-selected contestants battle live. You predict the winner. The pot pays out. Predictions close Thursday.
      </p>

      {/* Main event card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-[860px] overflow-hidden rounded-2xl"
        style={{
          background: 'rgba(245,196,81,0.05)',
          backdropFilter: 'blur(32px) saturate(1.8) brightness(1.06)',
          WebkitBackdropFilter: 'blur(32px) saturate(1.8) brightness(1.06)',
          border: '1px solid rgba(245,196,81,0.22)',
          boxShadow: 'inset 0 1px 0 rgba(245,196,81,0.16), inset 0 -1px 0 rgba(0,0,0,0.25), 0 0 60px rgba(245,196,81,0.08), 0 24px 64px rgba(0,0,0,0.50)',
        }}
      >
        {/* Top specular rim */}
        <div style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(245,196,81,0.45), transparent)', pointerEvents: 'none', zIndex: 10 }} />

        {/* Header bar */}
        <div className="flex items-center justify-between flex-wrap gap-2 px-8 py-4"
          style={{ background: 'rgba(245,196,81,0.07)', borderBottom: '1px solid rgba(245,196,81,0.12)' }}>
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5"
            style={{ background: 'rgba(245,196,81,0.12)', border: '1px solid rgba(245,196,81,0.28)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
            <span className="w-[6px] h-[6px] rounded-full" style={{ backgroundColor: GOLD, animation: 'pulse 2s ease-in-out infinite', boxShadow: '0 0 8px rgba(245,196,81,0.6)' }} />
            <span className="text-[11px] font-bold tracking-[0.12em] uppercase" style={{ color: GOLD }}>This Week&apos;s Match</span>
          </div>
          <span className="text-[12px] font-semibold tracking-wide uppercase" style={{ color: '#555555' }}>Closes Thursday · Prize pool: $400</span>
        </div>

        {/* VS section — desktop */}
        <div className="hidden sm:grid grid-cols-[1fr_auto_1fr] gap-8 px-8 py-10 items-center">
          {[{ initial: 'K', name: 'Kxng_Zero', rank: '#142' }, { initial: 'S', name: 'ShadowPlayer99', rank: '#88' }].map((player, i) => (
            i === 0 ? (
              <div key={player.name} className="flex flex-col items-center gap-3 text-center">
                <div className="relative overflow-hidden w-[72px] h-[72px] rounded-full flex items-center justify-center text-[26px] font-black"
                  style={{ background: 'rgba(245,196,81,0.12)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: `2px solid ${GOLD}`, color: GOLD, boxShadow: `0 0 30px rgba(245,196,81,0.35)` }}>
                  <div style={{ position: 'absolute', top: 0, left: '20%', right: '20%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.30), transparent)' }} />
                  {player.initial}
                </div>
                <p className="text-[16px] font-extrabold text-white uppercase tracking-wide">{player.name}</p>
                <p className="text-[11px] font-semibold tracking-widest uppercase" style={{ color: '#555555' }}>Rank {player.rank}</p>
              </div>
            ) : (
              <div key={player.name} className="flex flex-col items-center gap-3 text-center" style={{ gridColumn: 3 }}>
                <div className="relative overflow-hidden w-[72px] h-[72px] rounded-full flex items-center justify-center text-[26px] font-black"
                  style={{ background: 'rgba(245,196,81,0.12)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: `2px solid ${GOLD}`, color: GOLD, boxShadow: `0 0 30px rgba(245,196,81,0.35)` }}>
                  <div style={{ position: 'absolute', top: 0, left: '20%', right: '20%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.30), transparent)' }} />
                  {player.initial}
                </div>
                <p className="text-[16px] font-extrabold text-white uppercase tracking-wide">{player.name}</p>
                <p className="text-[11px] font-semibold tracking-widest uppercase" style={{ color: '#555555' }}>Rank {player.rank}</p>
              </div>
            )
          ))}
          {/* VS divider */}
          <div className="flex flex-col items-center gap-2" style={{ gridColumn: 2 }}>
            <div className="w-px h-10" style={{ background: 'linear-gradient(180deg, transparent, rgba(245,196,81,0.20), transparent)' }} />
            <p className="text-[28px] font-black tracking-widest" style={{ color: 'rgba(245,196,81,0.25)' }}>VS</p>
            <div className="w-px h-10" style={{ background: 'linear-gradient(180deg, transparent, rgba(245,196,81,0.20), transparent)' }} />
          </div>
        </div>

        {/* VS section — mobile */}
        <div className="flex sm:hidden items-center justify-center gap-6 px-5 py-8">
          {[{ initial: 'K', name: 'Kxng_Zero' }, { initial: 'S', name: 'ShadowPlayer99' }].map((player, i) => (
            i === 0 ? (
              <div key={player.name} className="flex flex-col items-center gap-2 text-center">
                <div className="relative overflow-hidden w-14 h-14 rounded-full flex items-center justify-center text-[20px] font-black"
                  style={{ background: 'rgba(245,196,81,0.12)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: `2px solid ${GOLD}`, color: GOLD, boxShadow: '0 0 24px rgba(245,196,81,0.35)' }}>
                  <div style={{ position: 'absolute', top: 0, left: '20%', right: '20%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)' }} />
                  {player.initial}
                </div>
                <p className="text-[13px] font-extrabold text-white uppercase">{player.name}</p>
              </div>
            ) : (
              <div key={player.name} className="flex flex-col items-center gap-2 text-center">
                <div className="relative overflow-hidden w-14 h-14 rounded-full flex items-center justify-center text-[20px] font-black"
                  style={{ background: 'rgba(245,196,81,0.12)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: `2px solid ${GOLD}`, color: GOLD, boxShadow: '0 0 24px rgba(245,196,81,0.35)' }}>
                  <div style={{ position: 'absolute', top: 0, left: '20%', right: '20%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)' }} />
                  {player.initial}
                </div>
                <p className="text-[13px] font-extrabold text-white uppercase">{player.name}</p>
              </div>
            )
          ))}
          <p className="text-[22px] font-black" style={{ color: 'rgba(245,196,81,0.25)' }}>VS</p>
        </div>

        {/* Countdown */}
        <div className="px-8 py-6 flex flex-col items-center gap-3" style={{ borderTop: '1px solid rgba(245,196,81,0.10)' }}>
          <p className="text-[11px] font-semibold tracking-[0.12em] uppercase" style={{ color: '#555555' }}>Predictions close in</p>
          <div className="flex items-center gap-3">
            {units.map((u, i) => (
              <div key={u.label} className="flex items-center gap-3">
                <div className="flex flex-col items-center gap-1.5">
                  <div className="relative overflow-hidden rounded-xl px-4 py-2.5 min-w-[56px] text-center"
                    style={{ background: 'rgba(245,196,81,0.08)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(245,196,81,0.18)', boxShadow: 'inset 0 1px 0 rgba(245,196,81,0.12)' }}>
                    <div style={{ position: 'absolute', top: 0, left: '20%', right: '20%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(245,196,81,0.35), transparent)' }} />
                    <span className="text-[26px] sm:text-[28px] font-extrabold text-white tabular-nums" suppressHydrationWarning>{u.value}</span>
                  </div>
                  <p className="text-[10px] font-semibold tracking-[0.1em] uppercase" style={{ color: '#444444' }}>{u.label}</p>
                </div>
                {i < units.length - 1 && <span className="text-[22px] font-extrabold mb-4" style={{ color: 'rgba(245,196,81,0.25)' }}>:</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Footer — pool + CTA */}
        <div className="px-8 py-5 flex items-center justify-between flex-wrap gap-4" style={{ borderTop: '1px solid rgba(245,196,81,0.10)' }}>
          <div>
            <p className="text-[11px] font-semibold tracking-[0.1em] uppercase mb-1" style={{ color: '#555555' }}>Current pool</p>
            <p className="text-[22px] font-black" style={{ color: GOLD, textShadow: '0 0 20px rgba(245,196,81,0.30)' }}>$400</p>
          </div>
          <Link href="/signup"
            className="relative overflow-hidden px-8 py-3 rounded-xl text-[14px] font-bold uppercase tracking-wide transition-all hover:-translate-y-px"
            style={{ background: 'rgba(245,196,81,0.92)', color: '#090909', boxShadow: '0 0 28px rgba(245,196,81,0.30), inset 0 1px 0 rgba(255,255,255,0.30)' }}>
            <span style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.45), transparent)' }} />
            Predict Now
          </Link>
        </div>
      </motion.div>

      {/* Step cards */}
      <div className="relative z-10 w-full max-w-[860px] mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3">
        {steps.map((step, i) => (
          <motion.div key={step.num} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
            className="relative overflow-hidden rounded-xl px-6 py-5"
            style={{ background: 'rgba(245,196,81,0.04)', backdropFilter: 'blur(20px) saturate(1.8) brightness(1.05)', WebkitBackdropFilter: 'blur(20px) saturate(1.8) brightness(1.05)', border: '1px solid rgba(245,196,81,0.14)', boxShadow: 'inset 0 1px 0 rgba(245,196,81,0.10)' }}>
            <div style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(245,196,81,0.25), transparent)', pointerEvents: 'none' }} />
            <p className="text-[11px] font-bold tracking-[0.1em] uppercase mb-1" style={{ color: GOLD }}>{step.num}</p>
            <p className="text-[13px] font-bold text-white uppercase tracking-wide mb-1.5">{step.title}</p>
            <p className="text-[12px] leading-relaxed" style={{ color: '#555555' }}>{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}