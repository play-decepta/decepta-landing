'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

const steps = [
  { num: '1', title: 'Card is revealed',  desc: 'A face-down Decepta card appears. The category is visible. You choose when to flip.' },
  { num: '2', title: 'Read the clue',     desc: "A sketch and a riddle appear together. Every clue is fair, even when the answer isn't obvious." },
  { num: '3', title: 'Guess or lose',     desc: 'Submit your answer before time runs out. Multiple guesses allowed in a real match.' },
  { num: '4', title: 'Roles switch',      desc: 'After each round, presenter and guesser switch. Best mind wins the pot.' },
]

export default function CardRevealPreview() {
  const [revealed, setRevealed] = useState(false)

  return (
    <section id="preview" className="relative w-full px-5 py-28 flex flex-col items-center overflow-hidden" style={{ backgroundColor: '#090909' }}>

      {/* Orbs — behind the card so glass catches the glow */}
      <div style={{ position: 'absolute', width: '600px', height: '600px', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: 'radial-gradient(ellipse at center, rgba(255,122,0,0.12) 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', width: '300px', height: '300px', top: '30%', left: '15%', background: 'radial-gradient(circle, rgba(255,122,0,0.08) 0%, transparent 70%)', filter: 'blur(50px)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', width: '300px', height: '300px', bottom: '20%', right: '15%', background: 'radial-gradient(circle, rgba(255,122,0,0.08) 0%, transparent 70%)', filter: 'blur(50px)', pointerEvents: 'none', zIndex: 0 }} />

      <p className="relative z-10 text-[11px] font-bold tracking-[0.18em] uppercase mb-4" style={{ color: '#FF7A00' }}>Game Preview</p>

      <h2 className="relative z-10 text-[clamp(32px,5vw,52px)] font-black uppercase leading-[1.05] tracking-tight text-center mb-4">
        <span className="text-white">This is what </span>
        <span style={{ color: '#FF7A00', textShadow: '0 0 40px rgba(255,122,0,0.25)' }}>the card looks like.</span>
      </h2>

      <p className="relative z-10 text-[15px] text-center max-w-[420px] leading-relaxed mb-20" style={{ color: '#555555' }}>
        Every match starts with a face-down card. Tap to flip it and see the clue underneath.
      </p>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-20 w-full max-w-[900px]">

        {/* Card flip */}
        <div className="flex flex-col items-center gap-8">
          <div
            className="w-[260px] sm:w-[300px] cursor-pointer"
            style={{ perspective: '1200px' }}
            onClick={() => setRevealed(r => !r)}
          >
            <div
              className="relative w-full"
              style={{
                transformStyle: 'preserve-3d',
                transition: 'transform 0.65s cubic-bezier(0.4,0,0.2,1)',
                transform: revealed ? 'rotateY(180deg)' : 'rotateY(0deg)',
              }}
            >
              {/* Face down */}
              <img
                src="/assets/card-facedown.png"
                alt="Decepta riddle card, face down"
                className="w-full rounded-2xl"
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  boxShadow: revealed ? 'none' : '0 0 40px rgba(255,122,0,0.20), 0 24px 64px rgba(0,0,0,0.60)',
                }}
              />
              {/* Revealed */}
              <img
                src="/assets/card-revealed.png"
                alt="Decepta riddle card, revealed"
                className="absolute inset-0 w-full rounded-2xl"
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                  boxShadow: revealed ? '0 0 40px rgba(255,122,0,0.25), 0 24px 64px rgba(0,0,0,0.60)' : 'none',
                }}
              />
            </div>
          </div>

          {/* Flip button — glass */}
          <button
            onClick={() => setRevealed(r => !r)}
            className="relative overflow-hidden px-6 py-2.5 rounded-xl text-[11px] font-bold tracking-[0.10em] uppercase transition-all"
            style={{
              background: 'rgba(255,122,0,0.10)',
              backdropFilter: 'blur(16px) saturate(1.8)',
              WebkitBackdropFilter: 'blur(16px) saturate(1.8)',
              border: '1px solid rgba(255,122,0,0.30)',
              color: '#FF7A00',
              boxShadow: 'inset 0 1px 0 rgba(255,122,0,0.18), 0 0 16px rgba(255,122,0,0.08)',
            }}
          >
            <span style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,122,0,0.40), transparent)', pointerEvents: 'none' }} />
            {revealed ? 'Flip back' : 'Tap to reveal'}
          </button>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-6 max-w-[280px] w-full">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex gap-4 items-start"
            >
              {/* Glass step circle */}
              <div
                className="relative overflow-hidden w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-extrabold flex-shrink-0 mt-0.5"
                style={{
                  background: 'rgba(255,122,0,0.10)',
                  backdropFilter: 'blur(16px) saturate(1.8) brightness(1.10)',
                  WebkitBackdropFilter: 'blur(16px) saturate(1.8) brightness(1.10)',
                  border: '1px solid rgba(255,122,0,0.30)',
                  color: '#FF7A00',
                  boxShadow: 'inset 0 1px 0 rgba(255,122,0,0.20), 0 0 12px rgba(255,122,0,0.10)',
                }}
              >
                <span style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)', pointerEvents: 'none' }} />
                {step.num}
              </div>

              <div>
                <p className="text-[13px] font-bold text-white uppercase tracking-wide mb-1">{step.title}</p>
                <p className="text-[12px] leading-relaxed" style={{ color: '#555555' }}>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}