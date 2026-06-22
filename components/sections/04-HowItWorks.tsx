'use client'
import { motion } from 'framer-motion'
import { UserPlus, Swords, Coins, Layers, Trophy } from 'lucide-react'

const steps = [
  { number: '1', icon: UserPlus, title: 'Create Account', desc: 'Sign up with email or Google. Your account is your identity in the arena.' },
  { number: '2', icon: Swords, title: 'Pick a Mode', desc: 'Choose DUEL, CIPHER, or FRIDAY EVENT based on how you want to compete.' },
  { number: '3', icon: Coins, title: 'Set Your Stake', desc: "Decide how much you're putting in. Your opponent matches the same amount." },
  { number: '4', icon: Layers, title: 'Compete', desc: 'Cards flip. Timers run. Riddles appear. Think fast, guess smart, outplay.' },
  { number: '5', icon: Trophy, title: 'Earn', desc: 'Win and take the pot. Your wallet updates instantly after every match.' },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full px-5 py-28 flex flex-col items-center bg-[#0A0A0A]">
      <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#F97316] mb-4">How it works</p>

      <h2 className="text-[clamp(32px,5vw,52px)] font-black uppercase leading-[1.05] tracking-tight text-center mb-4">
        <span className="text-white">Five steps to </span>
        <span className="text-[#F97316]">the arena.</span>
      </h2>

      <p className="text-[15px] text-[#666] text-center max-w-[440px] leading-relaxed mb-20">
        From signup to earnings, here's exactly what happens when you play Decepta.
      </p>

      <div className="hidden md:flex w-full max-w-[1280px] items-start justify-between">
        {steps.map((step, i) => {
          const Icon = step.icon
          return (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center px-2 flex-1 relative [&:not(:last-child)]:after:content-[''] [&:not(:last-child)]:after:absolute [&:not(:last-child)]:after:top-7 [&:not(:last-child)]:after:left-[calc(50%+28px)] [&:not(:last-child)]:after:right-[-calc(50%-28px)] [&:not(:last-child)]:after:h-px [&:not(:last-child)]:after:bg-gradient-to-r [&:not(:last-child)]:after:from-[#F97316] [&:not(:last-child)]:after:to-[#2A2A2A]"
            >
              <div className="w-14 h-14 rounded-full border border-[#F97316] bg-[rgba(249,115,22,0.08)] flex items-center justify-center text-[18px] font-extrabold text-[#F97316] mb-5 relative z-10">
                {step.number}
              </div>
              <Icon size={22} color="#F97316" strokeWidth={1.5} className="mb-3" />
              <p className="text-[13px] font-bold text-white uppercase tracking-wide mb-2">{step.title}</p>
              <p className="text-[12px] text-[#666] leading-relaxed">{step.desc}</p>
            </motion.div>
          )
        })}
      </div>

      <div className="flex md:hidden flex-col w-full max-w-[340px]">
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
                <div className="w-11 h-11 rounded-full border border-[#F97316] bg-[rgba(249,115,22,0.08)] flex items-center justify-center text-[15px] font-extrabold text-[#F97316]">
                  {step.number}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 min-h-[48px] my-1.5" style={{ background: 'linear-gradient(180deg, #F97316 0%, #1E1E1E 100%)' }} />
                )}
              </div>

              <div className="pt-2 pb-8">
                <Icon size={20} color="#F97316" strokeWidth={1.5} className="mb-2" />
                <p className="text-[13px] font-bold text-white uppercase tracking-wide mb-1">{step.title}</p>
                <p className="text-[12px] text-[#666] leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
