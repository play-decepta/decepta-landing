'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import useCountdown from '@/hooks/useCountdown'

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
    { value: time.h, label: 'Hrs' },
    { value: time.m, label: 'Min' },
    { value: time.s, label: 'Sec' },
  ]

  return (
    <section id="friday" className="relative w-full px-5 py-28 flex flex-col items-center bg-[#0A0A0A] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(234,179,8,0.07)_0%,transparent_70%)] pointer-events-none" />

      <p className="relative z-10 text-[11px] font-bold tracking-[0.18em] uppercase text-[#EAB308] mb-4">Friday Event</p>

      <h2 className="relative z-10 text-[clamp(32px,5vw,52px)] font-black uppercase leading-[1.05] tracking-tight text-center mb-4">
        <span className="text-white">The arena goes </span>
        <span className="text-[#EAB308]">live every Friday.</span>
      </h2>

      <p className="relative z-10 text-[15px] text-[#666] text-center max-w-[440px] leading-relaxed mb-16">
        Community-selected contestants battle live. You predict the winner. The pot pays out. Predictions close Thursday.
      </p>

      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative z-10 w-full max-w-[860px] bg-[#111] border border-[rgba(234,179,8,0.25)] rounded-2xl overflow-hidden">
        <div className="flex items-center justify-between flex-wrap gap-2 px-8 py-4 bg-[rgba(234,179,8,0.08)] border-b border-[rgba(234,179,8,0.15)]">
          <div className="inline-flex items-center gap-2 bg-[rgba(234,179,8,0.15)] border border-[rgba(234,179,8,0.3)] rounded-full px-4 py-1.5">
            <span className="w-[6px] h-[6px] rounded-full bg-[#EAB308] animate-pulse" />
            <span className="text-[11px] font-bold text-[#EAB308] tracking-[0.12em] uppercase">This Week's Match</span>
          </div>
          <span className="text-[12px] font-semibold text-[#666] tracking-wide uppercase">Closes Thursday · Prize pool: $400</span>
        </div>

        <div className="hidden sm:grid grid-cols-[1fr_auto_1fr] gap-8 px-8 py-10 items-center">
          <div className="flex flex-col items-center gap-3 text-center">
            <div
              className="w-[72px] h-[72px] rounded-full bg-[rgba(234,179,8,0.18)] border-2 border-[#EAB308] flex items-center justify-center text-[26px] font-black text-[#EAB308]"
              style={{ boxShadow: '0 0 30px rgba(234,179,8,0.4)' }}
            >
              K
            </div>
            <p className="text-[16px] font-extrabold text-white uppercase tracking-wide">Kxng_Zero</p>
            <p className="text-[11px] font-semibold text-[#555] uppercase tracking-widest">Rank #142</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="w-px h-10 bg-gradient-to-b from-transparent via-[#2A2A2A] to-transparent" />
            <p className="text-[28px] font-black text-[#2A2A2A] tracking-widest">VS</p>
            <div className="w-px h-10 bg-gradient-to-b from-transparent via-[#2A2A2A] to-transparent" />
          </div>

          <div className="flex flex-col items-center gap-3 text-center">
            <div
              className="w-[72px] h-[72px] rounded-full bg-[rgba(234,179,8,0.18)] border-2 border-[#EAB308] flex items-center justify-center text-[26px] font-black text-[#EAB308]"
              style={{ boxShadow: '0 0 30px rgba(234,179,8,0.4)' }}
            >
              S
            </div>
            <p className="text-[16px] font-extrabold text-white uppercase tracking-wide">ShadowPlayer99</p>
            <p className="text-[11px] font-semibold text-[#555] uppercase tracking-widest">Rank #88</p>
          </div>
        </div>

        <div className="flex sm:hidden items-center justify-center gap-6 px-5 py-8">
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="w-14 h-14 rounded-full bg-[rgba(234,179,8,0.18)] border-2 border-[#EAB308] flex items-center justify-center text-[20px] font-black text-[#EAB308]" style={{ boxShadow: '0 0 24px rgba(234,179,8,0.4)' }}>K</div>
            <p className="text-[13px] font-extrabold text-white uppercase">Kxng_Zero</p>
          </div>
          <p className="text-[22px] font-black text-[#333]">VS</p>
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="w-14 h-14 rounded-full bg-[rgba(234,179,8,0.18)] border-2 border-[#EAB308] flex items-center justify-center text-[20px] font-black text-[#EAB308]" style={{ boxShadow: '0 0 24px rgba(234,179,8,0.4)' }}>S</div>
            <p className="text-[13px] font-extrabold text-white uppercase">ShadowPlayer99</p>
          </div>
        </div>

        <div className="border-t border-[#1E1E1E] px-8 py-6 flex flex-col items-center gap-3">
          <p className="text-[11px] font-semibold text-[#555] tracking-[0.12em] uppercase">Predictions close in</p>
          <div className="flex items-center gap-3">
            {units.map((u, i) => (
              <div key={u.label} className="flex items-center gap-3">
                <div className="flex flex-col items-center gap-1.5">
                  <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg px-4 py-2.5 text-[26px] sm:text-[28px] font-extrabold text-white min-w-[56px] text-center tabular-nums">{u.value}</div>
                  <p className="text-[10px] font-semibold text-[#444] tracking-[0.1em] uppercase">{u.label}</p>
                </div>
                {i < units.length - 1 && <span className="text-[22px] font-extrabold text-[#2A2A2A] mb-4">:</span>}
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-[#1E1E1E] px-8 py-5 flex items-center justify-between flex-wrap gap-4">
          <div>
            <p className="text-[11px] font-semibold text-[#555] tracking-[0.1em] uppercase mb-1">Current pool</p>
            <p className="text-[22px] font-black text-[#EAB308]">$400</p>
          </div>
          <Link href="/signup" className="px-8 py-3 bg-[#EAB308] hover:opacity-90 text-black text-[14px] font-bold uppercase tracking-wide rounded-lg transition-all hover:-translate-y-px">Predict Now</Link>
        </div>
      </motion.div>

      <div className="relative z-10 w-full max-w-[860px] mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3">
        {steps.map((step, i) => (
          <motion.div key={step.num} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="bg-[#111] border border-[rgba(234,179,8,0.15)] rounded-xl px-6 py-5">
            <p className="text-[11px] font-bold text-[#EAB308] tracking-[0.1em] uppercase mb-1">{step.num}</p>
            <p className="text-[13px] font-bold text-white uppercase tracking-wide mb-1.5">{step.title}</p>
            <p className="text-[12px] text-[#666] leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
