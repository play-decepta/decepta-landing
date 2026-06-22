'use client'
import { motion } from 'framer-motion'
import { Swords, Brain, Bot, Link2 } from 'lucide-react'

const pillars = [
  { icon: Swords, title: 'Competitive gameplay', desc: 'Real opponents, real stakes, real pressure.' },
  { icon: Brain, title: 'Skill-based prediction', desc: 'Earned through observation, not chance.' },
  { icon: Bot, title: 'AI competition', desc: 'Always available, always sharp.' },
  { icon: Link2, title: 'Onchain settlement', desc: 'Every stake, transparently handled.' },
]

const timelineSteps = [
  { tag: 'The Night', text: "A one-year workspace anniversary. A simple game came out: Charades. Built entirely around observation and clues." },
  { tag: 'The Question', text: 'What if people could challenge each other not with strength, not with status, but with how they think?' },
  { tag: 'The Platform', text: "That question wouldn't let go. It became Decepta, a competitive arena built on thought." },
]

function GithubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.11.81 2.25 0 1.635-.015 2.94-.015 3.345 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  )
}

function DLogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      <path d="M18 12h40c20 0 34 14 34 38v0c0 24-14 38-34 38H18V12z" stroke="#F97316" strokeWidth="4" />
      <path d="M32 12l18 38-18 38" stroke="#F97316" strokeWidth="4" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

export default function AboutUs() {
  return (
    <section id="about" className="relative w-full px-5 py-28 flex flex-col items-center bg-[#0A0A0A] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.05)_0%,transparent_70%)] pointer-events-none" />

      <p className="relative z-10 text-[11px] font-bold tracking-[0.18em] uppercase text-[#F97316] mb-4">About Decepta</p>

      <h2 className="relative z-10 text-[clamp(32px,5vw,52px)] font-black uppercase leading-[1.05] tracking-tight text-center mb-14">
        <span className="text-white">It started at </span>
        <span className="text-[#F97316]">a game night.</span>
      </h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={{ hidden: {}, visible: {} }}
        className="relative z-10 w-full max-w-[560px] mb-16 rounded-3xl overflow-hidden border border-[rgba(249,115,22,0.2)] bg-[#0D0D0D] flex items-center justify-center"
        style={{ aspectRatio: '16/9' }}
      >
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(249,115,22,0.08) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

        <div className="relative z-10 flex items-start gap-12 sm:gap-16">

          <div className="flex flex-col items-center">
            <div className="relative w-[46px]">
              <motion.div
                variants={{ hidden: { opacity: 0, scale: 0.5 }, visible: { opacity: [0, 1, 0.4, 1], scale: 1, transition: { duration: 0.8, delay: 0.5 } } }}
                className="absolute -top-[20px] left-1/2 -translate-x-1/2 w-[50px] h-[50px] rounded-full z-[1]"
                style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.35) 0%, transparent 70%)' }}
              />
              <motion.div
                variants={{ hidden: { opacity: 0, x: -16 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.1 } } }}
                className="w-[46px] h-[46px] rounded-full border-2 border-[#F97316] bg-[rgba(249,115,22,0.08)] relative z-[2]"
              />
              <motion.div
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, rotate: [0, -10, 10, -5, 0], transition: { opacity: { duration: 0.3, delay: 0.1 }, rotate: { duration: 1, delay: 0.6, ease: 'easeInOut' } } } }}
                className="absolute top-[44px] left-1/2 -translate-x-1/2 w-[34px] h-[50px] rounded-t-2xl border-2 border-b-0 border-[#F97316] bg-[rgba(249,115,22,0.06)]"
              />
            </div>
            <p className="text-[10px] font-bold text-[#666] tracking-[0.12em] uppercase whitespace-nowrap" style={{ marginTop: '110px' }}>Gesturing</p>
          </div>

          <div className="flex flex-col items-center pt-2">
            <motion.div
              variants={{ hidden: { opacity: 0, scale: 0.5 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.4, delay: 0.9, type: 'spring' } } }}
              className="w-[60px] h-[60px] rounded-full border-[1.5px] border-dashed border-[rgba(249,115,22,0.4)] flex items-center justify-center"
            >
              <motion.span
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, scale: [1, 1.3, 1], transition: { opacity: { duration: 0.3, delay: 0.9 }, scale: { duration: 0.5, delay: 1.3 } } } }}
                className="text-[24px] font-black text-[#F97316] inline-block"
              >
                ?
              </motion.span>
            </motion.div>
          </div>

          <div className="flex flex-col items-center">
            <div className="relative w-[46px]">
              <motion.div
                variants={{ hidden: { opacity: 0, x: 16 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.3 } } }}
                className="w-[46px] h-[46px] rounded-full border-2 border-[#F97316] bg-[rgba(249,115,22,0.08)] relative z-[2]"
              />
              <motion.div
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, rotate: [0, 8, -8, 4, 0], transition: { opacity: { duration: 0.3, delay: 0.3 }, rotate: { duration: 1, delay: 1.6, ease: 'easeInOut' } } } }}
                className="absolute top-[44px] left-1/2 -translate-x-1/2 w-[34px] h-[50px] rounded-t-2xl border-2 border-b-0 border-[#F97316] bg-[rgba(249,115,22,0.06)]"
              />
            </div>
            <p className="text-[10px] font-bold text-[#666] tracking-[0.12em] uppercase whitespace-nowrap" style={{ marginTop: '110px' }}>Guessing</p>
          </div>

        </div>
      </motion.div>

      <div className="relative z-10 w-full max-w-[860px] mb-16">
        <div className="hidden md:grid grid-cols-3 gap-4 relative">
          <div className="absolute top-[22px] left-[8%] right-[8%] h-px" style={{ background: 'linear-gradient(90deg, #F97316, #2A2A2A, #F97316)' }} />
          {timelineSteps.map((step, i) => (
            <motion.div key={step.tag} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }} className="flex flex-col items-center text-center relative">
              <div className="w-[14px] h-[14px] rounded-full bg-[#F97316] border-[3px] border-[#0A0A0A] mb-6 relative z-10" style={{ boxShadow: '0 0 0 1px rgba(249,115,22,0.4)' }} />
              <div className="bg-[#111] border border-[#1E1E1E] rounded-2xl p-6 hover:border-[rgba(249,115,22,0.3)] transition-colors">
                <p className="text-[10px] font-bold text-[#F97316] tracking-[0.12em] uppercase mb-2.5">{step.tag}</p>
                <p className="text-[12.5px] text-[#888] leading-relaxed">{step.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex md:hidden flex-col gap-5">
          {timelineSteps.map((step, i) => (
            <motion.div key={step.tag} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="bg-[#111] border border-[#1E1E1E] rounded-2xl p-6">
              <p className="text-[10px] font-bold text-[#F97316] tracking-[0.12em] uppercase mb-2.5">{step.tag}</p>
              <p className="text-[12.5px] text-[#888] leading-relaxed">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-[780px] mb-16 text-center px-10 py-12 rounded-3xl overflow-hidden"
        style={{ background: 'linear-gradient(160deg, rgba(249,115,22,0.06), transparent)', border: '1px solid rgba(249,115,22,0.15)' }}
      >
        <DLogoMark className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] opacity-[0.04] pointer-events-none" />

        <p className="relative z-10 text-[11px] font-bold text-[#F97316] tracking-[0.16em] uppercase mb-6">The Name</p>
        <p className="relative z-10 text-[clamp(20px,3vw,28px)] font-bold text-[#ccc] leading-[1.5] italic">
          Not deception through lying, deception through perception. The answer is almost always right in front of you.{' '}
          <span className="text-white not-italic">But your own assumptions convince you to look somewhere else.</span>
        </p>
        <p className="relative z-10 text-[13px] text-[#555] mt-6">That feeling, earned, not given, is the core of everything on the platform.</p>
      </motion.div>

      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-[900px] mb-14">
        {pillars.map((p, i) => {
          const Icon = p.icon
          return (
            <motion.div key={p.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="bg-[#111] border border-[#1E1E1E] rounded-xl p-5 flex flex-col gap-2.5">
              <Icon size={20} color="#F97316" strokeWidth={1.5} />
              <p className="text-[12px] font-bold text-white uppercase tracking-wide leading-tight">{p.title}</p>
              <p className="text-[11px] text-[#666] leading-relaxed">{p.desc}</p>
            </motion.div>
          )
        })}
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="relative z-10 flex flex-col items-center text-center gap-6 w-full max-w-[600px]">
        <p className="text-[14px] text-[#666] italic leading-relaxed">
          Every duel fought, every riddle cracked, they're all the same idea, restated.{' '}
          <span className="text-[#F97316] not-italic font-semibold">The answer was right in front of you. You just had to see it.</span>
        </p>

        <a href="https://github.com/play-decepta" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-[#2A2A2A] hover:border-[#F97316] hover:text-[#F97316] text-[#888] text-[12px] font-bold uppercase tracking-widest rounded-lg transition-all">
          <GithubIcon />
          View on GitHub
        </a>
      </motion.div>
    </section>
  )
}
