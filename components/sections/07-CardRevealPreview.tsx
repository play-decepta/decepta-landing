'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

const steps = [
  { num: '1', title: 'Card is revealed', desc: 'A face-down Decepta card appears. The category is visible. You choose when to flip.' },
  { num: '2', title: 'Read the clue', desc: 'A sketch and a riddle appear together. Every clue is fair, even when the answer isn\'t obvious.' },
  { num: '3', title: 'Guess or lose', desc: 'Submit your answer before time runs out. Multiple guesses allowed in a real match.' },
  { num: '4', title: 'Roles switch', desc: 'After each round, presenter and guesser switch. Best mind wins the pot.' },
]

export default function CardRevealPreview() {
  const [revealed, setRevealed] = useState(false)

  return (
    <section id="preview" className="relative w-full px-5 py-28 flex flex-col items-center bg-[#0A0A0A] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.06)_0%,transparent_70%)] pointer-events-none" />

      <p className="relative z-10 text-[11px] font-bold tracking-[0.18em] uppercase text-[#F97316] mb-4">Game Preview</p>
      <h2 className="relative z-10 text-[clamp(32px,5vw,52px)] font-black uppercase leading-[1.05] tracking-tight text-center mb-4">
        <span className="text-white">This is what </span>
        <span className="text-[#F97316]">the card looks like.</span>
      </h2>
      <p className="relative z-10 text-[15px] text-[#666] text-center max-w-[420px] leading-relaxed mb-20">
        Every match starts with a face-down card. Tap to flip it and see the clue underneath.
      </p>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-20 w-full max-w-[900px]">

        <div className="flex flex-col items-center gap-8">
          <div
            className="w-[260px] sm:w-[300px] cursor-pointer"
            style={{ perspective: '1200px' }}
            onClick={() => setRevealed(!revealed)}
          >
            <div
              className="relative w-full transition-transform duration-700"
              style={{ transformStyle: 'preserve-3d', transform: revealed ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
            >
              <img
                src="/assets/card-facedown.png"
                alt="Decepta riddle card, face down"
                className="w-full rounded-2xl"
                style={{ backfaceVisibility: 'hidden' }}
              />
              <img
                src="/assets/card-revealed.png"
                alt="Decepta riddle card, revealed"
                className="absolute inset-0 w-full rounded-2xl"
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
              />
            </div>
          </div>

          <button
            onClick={() => setRevealed(!revealed)}
            className="px-5 py-2 rounded-md text-[11px] font-semibold border bg-[rgba(249,115,22,0.1)] border-[rgba(249,115,22,0.3)] text-[#F97316] tracking-wide uppercase hover:opacity-90 transition-opacity"
          >
            {revealed ? 'Flip back' : 'Tap to reveal'}
          </button>
        </div>

        <div className="flex flex-col gap-8 max-w-[280px] w-full">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex gap-4 items-start"
            >
              <div className="w-8 h-8 rounded-full border border-[rgba(249,115,22,0.3)] bg-[rgba(249,115,22,0.08)] flex items-center justify-center text-[12px] font-extrabold text-[#F97316] flex-shrink-0 mt-0.5">
                {step.num}
              </div>
              <div>
                <p className="text-[13px] font-bold text-white uppercase tracking-wide mb-1">{step.title}</p>
                <p className="text-[12px] text-[#666] leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
