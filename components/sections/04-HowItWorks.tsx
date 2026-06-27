'use client'
import { motion } from 'framer-motion'
import { UserPlus, Swords, Coins, Layers, Trophy } from 'lucide-react'

const steps = [
  { number: '1', icon: UserPlus, title: 'Create Account',  desc: 'Sign up with email or Google. Your account is your identity in the arena.' },
  { number: '2', icon: Swords,   title: 'Pick a Mode',     desc: 'Choose DUEL, CIPHER, or FRIDAY EVENT based on how you want to compete.' },
  { number: '3', icon: Coins,    title: 'Set Your Stake',  desc: "Decide how much you're putting in. Your opponent matches the same amount." },
  { number: '4', icon: Layers,   title: 'Compete',         desc: 'Cards flip. Timers run. Riddles appear. Think fast, guess smart, outplay.' },
  { number: '5', icon: Trophy,   title: 'Earn',            desc: 'Win and take the pot. Your wallet updates instantly after every match.' },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative w-full px-5 py-28 flex flex-col items-center overflow-hidden" style={{ backgroundColor: '#090909' }}>

      {/* Orbs — give the glass circles something to blur */}
      <div style={{ position: 'absolute', width: '600px', height: '300px', top: '40%', left: '50%', transform: 'translate(-50%,-50%)', background: 'radial-gradient(ellipse at center, rgba(255,122,0,0.10) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', width: '300px', height: '300px', top: '20%', left: '10%', background: 'radial-gradient(circle, rgba(255,122,0,0.07) 0%, transparent 70%)', filter: 'blur(50px)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', width: '300px', height: '300px', top: '20%', right: '10%', background: 'radial-gradient(circle, rgba(255,122,0,0.07) 0%, transparent 70%)', filter: 'blur(50px)', pointerEvents: 'none', zIndex: 0 }} />

      <p className="relative z-10 text-[11px] font-bold tracking-[0.18em] uppercase mb-4" style={{ color: '#FF7A00' }}>How it works</p>

      <h2 className="relative z-10 text-[clamp(32px,5vw,52px)] font-black uppercase leading-[1.05] tracking-tight text-center mb-4">
        <span className="text-white">Five steps to </span>
        <span style={{ color: '#FF7A00' }}>the arena.</span>
      </h2>

      <p className="relative z-10 text-[15px] text-center max-w-[440px] leading-relaxed mb-20" style={{ color: '#555555' }}>
        From signup to earnings, here&apos;s exactly what happens when you play Decepta.
      </p>

      {/* Desktop */}
      <div className="hidden md:flex relative z-10 w-full max-w-[1280px] items-start justify-between">
        {steps.map((step, i) => {
          const Icon = step.icon
          return (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center px-2 flex-1 relative"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="absolute top-7 h-px" style={{ left: 'calc(50% + 28px)', right: 'calc(-50% + 28px)', background: 'linear-gradient(90deg, #FF7A00, rgba(255,122,0,0.10))' }} />
              )}

              {/* Glass step circle */}
              <div className="relative overflow-hidden w-14 h-14 rounded-full flex items-center justify-center text-[18px] font-extrabold mb-5 relative z-10"
                style={{
                  background: 'rgba(255,122,0,0.10)',
                  backdropFilter: 'blur(20px) saturate(1.8) brightness(1.10)',
                  WebkitBackdropFilter: 'blur(20px) saturate(1.8) brightness(1.10)',
                  border: '1px solid rgba(255,122,0,0.35)',
                  boxShadow: 'inset 0 1px 0 rgba(255,122,0,0.25), 0 0 20px rgba(255,122,0,0.12)',
                  color: '#FF7A00',
                }}
              >
                {/* Specular rim */}
                <div style={{ position: 'absolute', top: 0, left: '20%', right: '20%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.30), transparent)', pointerEvents: 'none' }} />
                {step.number}
              </div>

              <Icon size={22} color="#FF7A00" strokeWidth={1.5} className="mb-3" />
              <p className="text-[13px] font-bold text-white uppercase tracking-wide mb-2">{step.title}</p>
              <p className="text-[12px] leading-relaxed" style={{ color: '#555555' }}>{step.desc}</p>
            </motion.div>
          )
        })}
      </div>

      {/* Mobile */}
      <div className="flex md:hidden relative z-10 flex-col w-full max-w-[340px]">
        {steps.map((step, i) => {
          const Icon = step.icon
          return (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-5 items-start"
            >
              <div className="flex flex-col items-center flex-shrink-0">
                {/* Glass circle mobile */}
                <div className="relative overflow-hidden w-11 h-11 rounded-full flex items-center justify-center text-[15px] font-extrabold"
                  style={{
                    background: 'rgba(255,122,0,0.10)',
                    backdropFilter: 'blur(20px) saturate(1.8) brightness(1.10)',
                    WebkitBackdropFilter: 'blur(20px) saturate(1.8) brightness(1.10)',
                    border: '1px solid rgba(255,122,0,0.35)',
                    boxShadow: 'inset 0 1px 0 rgba(255,122,0,0.25), 0 0 16px rgba(255,122,0,0.12)',
                    color: '#FF7A00',
                  }}
                >
                  <div style={{ position: 'absolute', top: 0, left: '20%', right: '20%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)', pointerEvents: 'none' }} />
                  {step.number}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 min-h-[48px] my-1.5" style={{ background: 'linear-gradient(180deg, #FF7A00 0%, rgba(255,122,0,0.05) 100%)' }} />
                )}
              </div>

              <div className="pt-2 pb-8">
                <Icon size={20} color="#FF7A00" strokeWidth={1.5} className="mb-2" />
                <p className="text-[13px] font-bold text-white uppercase tracking-wide mb-1">{step.title}</p>
                <p className="text-[12px] leading-relaxed" style={{ color: '#555555' }}>{step.desc}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}