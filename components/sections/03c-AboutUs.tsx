'use client'
import { motion } from 'framer-motion'
import { Swords, Brain, Bot, Link2 } from 'lucide-react'

const pillars = [
  { icon: Swords, title: 'Competitive gameplay', desc: 'Real opponents, real stakes, real pressure.' },
  { icon: Brain,  title: 'Skill-based prediction', desc: 'Earned through observation, not chance.' },
  { icon: Bot,    title: 'AI competition', desc: 'Always available, always sharp.' },
  { icon: Link2,  title: 'Onchain settlement', desc: 'Every stake, transparently handled.' },
]

const timelineSteps = [
  { tag: 'The Night',    text: "A one-year workspace anniversary. A simple game came out: Charades. Built entirely around observation and clues." },
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
      <path d="M18 12h40c20 0 34 14 34 38v0c0 24-14 38-34 38H18V12z" stroke="#FF7A00" strokeWidth="4" />
      <path d="M32 12l18 38-18 38" stroke="#FF7A00" strokeWidth="4" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

export default function AboutUs() {
  return (
    <section id="about" className="relative w-full px-5 py-28 flex flex-col items-center overflow-hidden" style={{ backgroundColor: '#090909' }}>

      {/* Background orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(255,122,0,0.08) 0%, transparent 70%)' }} />

      <p className="relative z-10 text-[11px] font-bold tracking-[0.18em] uppercase mb-4" style={{ color: '#FF7A00' }}>
        About Decepta
      </p>

      <h2 className="relative z-10 text-[clamp(32px,5vw,52px)] font-black uppercase leading-[1.05] tracking-tight text-center mb-14">
        <span className="text-white">It started at </span>
        <span style={{ color: '#FF7A00' }}>a game night.</span>
      </h2>

      {/* Animation card — original logic, brand colors only */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={{ hidden: {}, visible: {} }}
        className="relative z-10 w-full max-w-[560px] mb-16 rounded-3xl overflow-hidden flex items-center justify-center"
        style={{ aspectRatio: '16/9', border: '1px solid rgba(255,122,0,0.20)', backgroundColor: '#0D0D0D' }}
      >
        <div className="absolute inset-0"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(255,122,0,0.08) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

        <div className="relative z-10 flex items-start gap-12 sm:gap-16">

          {/* Gesturing figure */}
          <div className="flex flex-col items-center">
            <div className="relative w-[46px]">
              <motion.div
                variants={{ hidden: { opacity: 0, scale: 0.5 }, visible: { opacity: [0, 1, 0.4, 1], scale: 1, transition: { duration: 0.8, delay: 0.5 } } }}
                className="absolute -top-[20px] left-1/2 -translate-x-1/2 w-[50px] h-[50px] rounded-full z-[1]"
                style={{ background: 'radial-gradient(circle, rgba(255,122,0,0.35) 0%, transparent 70%)' }}
              />
              <motion.div
                variants={{ hidden: { opacity: 0, x: -16 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.1 } } }}
                className="w-[46px] h-[46px] rounded-full relative z-[2]"
                style={{ border: '2px solid #FF7A00', background: 'rgba(255,122,0,0.08)' }}
              />
              <motion.div
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, rotate: [0, -10, 10, -5, 0], transition: { opacity: { duration: 0.3, delay: 0.1 }, rotate: { duration: 1, delay: 0.6, ease: 'easeInOut' } } } }}
                className="absolute top-[44px] left-1/2 -translate-x-1/2 w-[34px] h-[50px] rounded-t-2xl"
                style={{ border: '2px solid #FF7A00', borderBottom: 'none', background: 'rgba(255,122,0,0.06)' }}
              />
            </div>
            <p className="text-[10px] font-bold tracking-[0.12em] uppercase whitespace-nowrap"
              style={{ marginTop: '110px', color: '#666666' }}>Gesturing</p>
          </div>

          {/* Question mark */}
          <div className="flex flex-col items-center pt-2">
            <motion.div
              variants={{ hidden: { opacity: 0, scale: 0.5 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.4, delay: 0.9, type: 'spring' } } }}
              className="w-[60px] h-[60px] rounded-full flex items-center justify-center"
              style={{ border: '1.5px dashed rgba(255,122,0,0.4)' }}
            >
              <motion.span
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, scale: [1, 1.3, 1], transition: { opacity: { duration: 0.3, delay: 0.9 }, scale: { duration: 0.5, delay: 1.3 } } } }}
                className="text-[24px] font-black inline-block"
                style={{ color: '#FF7A00' }}
              >
                ?
              </motion.span>
            </motion.div>
          </div>

          {/* Guessing figure */}
          <div className="flex flex-col items-center">
            <div className="relative w-[46px]">
              <motion.div
                variants={{ hidden: { opacity: 0, x: 16 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.3 } } }}
                className="w-[46px] h-[46px] rounded-full relative z-[2]"
                style={{ border: '2px solid #FF7A00', background: 'rgba(255,122,0,0.08)' }}
              />
              <motion.div
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, rotate: [0, 8, -8, 4, 0], transition: { opacity: { duration: 0.3, delay: 0.3 }, rotate: { duration: 1, delay: 1.6, ease: 'easeInOut' } } } }}
                className="absolute top-[44px] left-1/2 -translate-x-1/2 w-[34px] h-[50px] rounded-t-2xl"
                style={{ border: '2px solid #FF7A00', borderBottom: 'none', background: 'rgba(255,122,0,0.06)' }}
              />
            </div>
            <p className="text-[10px] font-bold tracking-[0.12em] uppercase whitespace-nowrap"
              style={{ marginTop: '110px', color: '#666666' }}>Guessing</p>
          </div>

        </div>
      </motion.div>

      {/* Timeline */}
      <div className="relative z-10 w-full max-w-[860px] mb-16">
        <div className="hidden md:grid grid-cols-3 gap-4 relative">
          <div className="absolute top-[22px] left-[8%] right-[8%] h-px"
            style={{ background: 'linear-gradient(90deg, #FF7A00, rgba(255,122,0,0.15), #FF7A00)' }} />
          {timelineSteps.map((step, i) => (
            <motion.div key={step.tag} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }}
              className="flex flex-col items-center text-center relative">
              <div className="w-[14px] h-[14px] rounded-full mb-6 relative z-10"
                style={{ backgroundColor: '#FF7A00', border: '3px solid #090909', boxShadow: '0 0 0 1px rgba(255,122,0,0.40), 0 0 12px rgba(255,122,0,0.30)' }} />
              <div className="relative overflow-hidden rounded-2xl p-6"
                style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(20px) saturate(1.8) brightness(1.05)', WebkitBackdropFilter: 'blur(20px) saturate(1.8) brightness(1.05)', border: '1px solid rgba(255,255,255,0.09)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.10), 0 8px 32px rgba(0,0,0,0.30)' }}>
                <div className="absolute top-0 left-[15%] right-[15%] h-px"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)' }} />
                <p className="text-[10px] font-bold tracking-[0.12em] uppercase mb-2.5" style={{ color: '#FF7A00' }}>{step.tag}</p>
                <p className="text-[12.5px] leading-relaxed" style={{ color: '#888888' }}>{step.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex md:hidden flex-col gap-5">
          {timelineSteps.map((step, i) => (
            <motion.div key={step.tag} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative overflow-hidden rounded-2xl p-6"
              style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(20px) saturate(1.8)', WebkitBackdropFilter: 'blur(20px) saturate(1.8)', border: '1px solid rgba(255,255,255,0.09)' }}>
              <div className="absolute top-0 left-[12%] right-[12%] h-px"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)' }} />
              <p className="text-[10px] font-bold tracking-[0.12em] uppercase mb-2.5" style={{ color: '#FF7A00' }}>{step.tag}</p>
              <p className="text-[12.5px] leading-relaxed" style={{ color: '#888888' }}>{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* The Name quote — glass */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-[780px] mb-16 text-center px-10 py-12 rounded-3xl overflow-hidden"
        style={{ background: 'rgba(255,122,0,0.06)', backdropFilter: 'blur(24px) saturate(1.8) brightness(1.06)', WebkitBackdropFilter: 'blur(24px) saturate(1.8) brightness(1.06)', border: '1px solid rgba(255,122,0,0.18)', boxShadow: 'inset 0 1px 0 rgba(255,122,0,0.14), 0 0 40px rgba(255,122,0,0.06)' }}
      >
        <div className="absolute top-0 left-[12%] right-[12%] h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(255,122,0,0.35), transparent)' }} />
        <DLogoMark className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] opacity-[0.04] pointer-events-none" />
        <p className="relative z-10 text-[11px] font-bold tracking-[0.16em] uppercase mb-6" style={{ color: '#FF7A00' }}>The Name</p>
        <p className="relative z-10 text-[clamp(20px,3vw,28px)] font-bold leading-[1.5] italic" style={{ color: '#CCCCCC' }}>
          Not deception through lying, deception through perception. The answer is almost always right in front of you.{' '}
          <span className="not-italic" style={{ color: '#FFFFFF' }}>But your own assumptions convince you to look somewhere else.</span>
        </p>
        <p className="relative z-10 text-[13px] mt-6" style={{ color: '#444444' }}>
          That feeling, earned, not given, is the core of everything on the platform.
        </p>
      </motion.div>

      {/* Pillars — glass cards */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-[900px] mb-14">
        {pillars.map((p, i) => {
          const Icon = p.icon
          return (
            <motion.div key={p.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative overflow-hidden rounded-xl p-5 flex flex-col gap-2.5"
              style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(20px) saturate(1.8) brightness(1.05)', WebkitBackdropFilter: 'blur(20px) saturate(1.8) brightness(1.05)', border: '1px solid rgba(255,255,255,0.09)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.10), 0 8px 32px rgba(0,0,0,0.30)' }}
            >
              <div className="absolute top-0 left-[15%] right-[15%] h-px"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)' }} />
              <Icon size={20} color="#FF7A00" strokeWidth={1.5} />
              <p className="text-[12px] font-bold uppercase tracking-wide leading-tight" style={{ color: '#FFFFFF' }}>{p.title}</p>
              <p className="text-[11px] leading-relaxed" style={{ color: '#555555' }}>{p.desc}</p>
            </motion.div>
          )
        })}
      </div>

      {/* Closing */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
        className="relative z-10 flex flex-col items-center text-center gap-6 w-full max-w-[600px]">
        <p className="text-[14px] italic leading-relaxed" style={{ color: '#555555' }}>
          Every duel fought, every riddle cracked, they&apos;re all the same idea, restated.{' '}
          <span className="not-italic font-semibold" style={{ color: '#FF7A00' }}>The answer was right in front of you. You just had to see it.</span>
        </p>
        <a href="https://github.com/play-decepta" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-[12px] font-bold uppercase tracking-widest relative overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.10)', color: '#888888', textDecoration: 'none' }}
        >
          <div className="absolute top-0 left-[15%] right-[15%] h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)' }} />
          <GithubIcon /> View on GitHub
        </a>
      </motion.div>
    </section>
  )
}