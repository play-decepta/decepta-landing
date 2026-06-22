// components/sections/16-Press.tsx
'use client'
import { motion } from 'framer-motion'

const outlets = [
  'TechCrunch',
  'CoinDesk',
  'Decrypt',
  'The Block',
  'Wired',
]

const pressQuotes = [
  {
    outlet: 'TechCrunch',
    quote: 'Decepta is doing something genuinely new — turning cognitive pressure into a competitive sport with real financial stakes. It\'s the intersection of esports and intelligence that nobody saw coming.',
    highlight: 'turning cognitive pressure into a competitive sport',
    href: '#',
  },
  {
    outlet: 'CoinDesk',
    quote: 'In a market flooded with P2E gimmicks, Decepta stands out by making skill the only variable that matters. The staking mechanic is elegantly simple. The execution is sharp.',
    highlight: 'skill the only variable that matters',
    href: '#',
  },
  {
    outlet: 'Decrypt',
    quote: 'The Friday Event alone makes Decepta worth watching. Live competitive intelligence with a prediction market built in — it\'s the kind of product that creates habits.',
    highlight: 'Live competitive intelligence with a prediction market',
    href: '#',
  },
]

function highlightText(text: string, highlight: string) {
  const parts = text.split(highlight)
  if (parts.length < 2) return <>{text}</>
  return (
    <>
      {parts[0]}
      <span className="text-[#CCC] not-italic font-semibold">{highlight}</span>
      {parts[1]}
    </>
  )
}

export default function Press() {
  return (
    <section
      id="press"
      className="relative w-full px-5 py-28 flex flex-col items-center bg-[#0A0A0A] overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.04)_0%,transparent_70%)] pointer-events-none" />

      <p className="relative z-10 text-[11px] font-bold tracking-[0.18em] uppercase text-[#F97316] mb-4">
        Press
      </p>

      <h2 className="relative z-10 text-[clamp(28px,4vw,44px)] font-black uppercase leading-[1.05] tracking-tight text-center mb-4">
        <span className="text-white">As seen </span>
        <span className="text-[#F97316]">in the wild.</span>
      </h2>

      <p className="relative z-10 text-[15px] text-[#666] text-center max-w-[420px] leading-relaxed mb-16">
        Decepta is making noise. Here's what the media and the Web3 gaming
        world are saying about the arena.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-[860px] flex flex-wrap border border-[#1E1E1E] rounded-2xl bg-[#111] overflow-hidden mb-3.5"
      >
        {outlets.map((outlet) => (
          <div
            key={outlet}
            className="flex-1 min-w-[33%] flex items-center justify-center px-6 py-7 border-r border-[#1E1E1E] last:border-r-0 hover:bg-[rgba(249,115,22,0.04)] transition-colors group"
          >
            <span className="text-[15px] font-black text-[#333] uppercase tracking-wide group-hover:text-[#555] transition-colors select-none">
              {outlet}
            </span>
          </div>
        ))}
      </motion.div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-3.5 w-full max-w-[860px]">
        {pressQuotes.map((p, i) => (
          <motion.div
            key={p.outlet}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative bg-[#111] border border-[#1E1E1E] rounded-[18px] p-7
              flex flex-col gap-5 overflow-hidden group
              hover:border-[rgba(249,115,22,0.25)] hover:-translate-y-0.5 transition-all duration-300
              after:content-[''] after:absolute after:top-0 after:left-0 after:right-0
              after:h-px after:bg-gradient-to-r after:from-transparent
              after:via-[rgba(249,115,22,0.25)] after:to-transparent
              after:opacity-0 group-hover:after:opacity-100 after:transition-opacity"
          >
            <p className="text-[10px] font-extrabold text-[#F97316] tracking-[0.16em] uppercase">
              {p.outlet}
            </p>

            <p className="text-[13px] text-[#888] leading-[1.75] italic flex-1">
              &ldquo;{highlightText(p.quote, p.highlight)}&rdquo;
            </p>

            <a
              href={p.href}
              className="text-[11px] font-bold text-[#555] hover:text-[#F97316] uppercase tracking-wide transition-colors mt-auto"
            >
              Read article →
            </a>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative z-10 w-full max-w-[860px] mt-3.5 bg-[rgba(249,115,22,0.03)] border border-[rgba(249,115,22,0.1)] rounded-2xl px-8 py-6 flex items-center justify-between gap-6 flex-wrap"
      >
        <div>
          <p className="text-[13px] font-extrabold text-white uppercase tracking-wide mb-1">Press & media enquiries</p>
          <p className="text-[12px] text-[#555]">Reach out directly for coverage, interviews, or assets.</p>
        </div>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=playdecepta@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2.5 border border-[rgba(249,115,22,0.25)] hover:border-[rgba(249,115,22,0.5)] text-[#F97316] text-[12px] font-bold uppercase tracking-wide rounded-lg transition-all whitespace-nowrap"
        >
          Contact press team →
        </a>
      </motion.div>
    </section>
  )
}
