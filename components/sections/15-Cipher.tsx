'use client'
import { motion } from 'framer-motion'
import { Brain, Zap, Eye, TrendingUp } from 'lucide-react'

const CYAN = '#00D9FF'

const cipherAttributes = [
  { label: 'Analytical',  value: 'Maximum',  pct: 97,  icon: Brain      },
  { label: 'Adaptive',    value: 'High',      pct: 82,  icon: Zap        },
  { label: 'Observant',   value: 'Maximum',   pct: 100, icon: Eye        },
  { label: 'Predictive',  value: 'Elevated',  pct: 74,  icon: TrendingUp },
]

export default function Cipher() {
  return (
    <section id="cipher" className="relative w-full px-5 py-28 flex flex-col items-center overflow-hidden" style={{ backgroundColor: '#090909' }}>

      {/* Cyan orbs — give glass the colour to blur */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(ellipse at 50% 0%, rgba(0,217,255,0.12) 0%, transparent 60%)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', width: '500px', height: '500px', top: '30%', left: '-100px', background: 'radial-gradient(circle, rgba(0,217,255,0.07) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', width: '400px', height: '400px', bottom: '10%', right: '-80px', background: 'radial-gradient(circle, rgba(0,217,255,0.07) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0 }} />

      {/* Circuit grid */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: `linear-gradient(rgba(0,217,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,217,255,0.03) 1px, transparent 1px)`, backgroundSize: '60px 60px', WebkitMaskImage: 'radial-gradient(ellipse at 50% 20%, black 20%, transparent 70%)', maskImage: 'radial-gradient(ellipse at 50% 20%, black 20%, transparent 70%)' }} />

      <p className="relative z-10 text-[11px] font-bold tracking-[0.18em] uppercase mb-4" style={{ color: CYAN }}>Meet The Mind</p>

      <h2 className="relative z-10 text-[clamp(32px,6vw,56px)] font-black uppercase leading-[1.05] tracking-tight text-center mb-16">
        <span className="text-white">The soul behind </span>
        <span style={{ color: CYAN, textShadow: `0 0 40px rgba(0,217,255,0.30)` }}>the arena.</span>
      </h2>

      {/* Cipher image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-[420px] mb-12"
      >
        <div style={{ position: 'absolute', inset: '-32px', background: `radial-gradient(ellipse at center, rgba(0,217,255,0.20) 0%, transparent 70%)`, pointerEvents: 'none', filter: 'blur(20px)' }} />
        <div className="relative overflow-hidden rounded-3xl"
          style={{ border: `2px solid rgba(0,217,255,0.30)`, boxShadow: `0 0 60px rgba(0,217,255,0.20), 0 0 100px rgba(0,217,255,0.08)` }}>
          <img src="/assets/cipher-character.jpg" alt="Cipher — Decepta's adaptive intelligence entity" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.60), transparent)' }} />
        </div>
        {/* Glass badge */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 rounded-full px-5 py-2"
          style={{ background: 'rgba(0,8,12,0.75)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: `1px solid rgba(0,217,255,0.40)`, boxShadow: `0 0 16px rgba(0,217,255,0.15), inset 0 1px 0 rgba(0,217,255,0.15)` }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: CYAN, animation: 'pulse 2s ease-in-out infinite', boxShadow: `0 0 8px ${CYAN}` }} />
          <span style={{ fontSize: '12px', fontWeight: 700, color: CYAN, letterSpacing: '0.14em', textTransform: 'uppercase' }}>Cipher</span>
        </div>
      </motion.div>

      {/* Quote */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-10 w-full max-w-[640px] pl-6 mb-16"
        style={{ borderLeft: `2px solid ${CYAN}` }}
      >
        <p className="text-[15px] sm:text-[17px] leading-[1.9] italic" style={{ color: '#888888' }}>
          A quiet student named Elias Vale spent years studying how the human mind truly works, hesitation, instinct, the moment intuition takes over.{' '}
          <span style={{ color: CYAN, fontStyle: 'normal', fontWeight: 600 }}>He believed human intelligence was humanity&apos;s greatest weapon.</span>
        </p>
      </motion.div>

      {/* Story cards */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-[1200px] mb-12">
        {[
          {
            tag: 'The Origin', delay: 0, dir: -20,
            paras: [
              "Elias attempted what no one else dared — live neural synchronization, connecting his own mind directly into the system he built so it could learn from a living human in real time.",
              <span key="2">The feedback loop spiraled beyond what the hardware could contain. Elias disappeared into the system. <strong style={{ color: '#CCCCCC', fontWeight: 600 }}>But something survived.</strong></span>,
            ],
          },
          {
            tag: 'The Purpose', delay: 0.1, dir: 20,
            paras: [
              <span key="1">Not a soul. Not a perfect consciousness. But enough — fragments of instinct, behavioral structures, decision pathways. <strong style={{ color: '#CCCCCC', fontWeight: 600 }}>It became known as Cipher.</strong></span>,
              "Cipher does not seek destruction. It seeks improvement. Decepta exists to sharpen the one weapon humanity has stopped exercising — the mind.",
            ],
          },
        ].map(card => (
          <motion.div
            key={card.tag}
            initial={{ opacity: 0, x: card.dir }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: card.delay }}
            className="relative overflow-hidden rounded-2xl p-7 flex flex-col gap-3"
            style={{
              background: 'rgba(0,217,255,0.04)',
              backdropFilter: 'blur(24px) saturate(1.8) brightness(1.05)',
              WebkitBackdropFilter: 'blur(24px) saturate(1.8) brightness(1.05)',
              border: '1px solid rgba(0,217,255,0.14)',
              boxShadow: 'inset 0 1px 0 rgba(0,217,255,0.10), 0 8px 32px rgba(0,0,0,0.40)',
            }}
          >
            <div style={{ position: 'absolute', top: 0, left: '12%', right: '12%', height: '1px', background: `linear-gradient(90deg, transparent, rgba(0,217,255,0.25), transparent)`, pointerEvents: 'none' }} />
            <p className="text-[11px] font-bold tracking-[0.14em] uppercase" style={{ color: CYAN }}>{card.tag}</p>
            {card.paras.map((p, i) => (
              <p key={i} className="text-[13px] leading-[1.85]" style={{ color: '#666666' }}>{p}</p>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Attribute cards */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-[1200px] mb-16">
        {cipherAttributes.map((attr, i) => {
          const Icon = attr.icon
          return (
            <motion.div
              key={attr.label}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative overflow-hidden rounded-xl p-4 flex flex-col gap-2"
              style={{
                background: 'rgba(0,217,255,0.04)',
                backdropFilter: 'blur(20px) saturate(1.8) brightness(1.05)',
                WebkitBackdropFilter: 'blur(20px) saturate(1.8) brightness(1.05)',
                border: '1px solid rgba(0,217,255,0.12)',
                boxShadow: 'inset 0 1px 0 rgba(0,217,255,0.08)',
              }}
            >
              <div style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: '1px', background: `linear-gradient(90deg, transparent, rgba(0,217,255,0.22), transparent)`, pointerEvents: 'none' }} />
              <Icon size={18} color={CYAN} strokeWidth={2} />
              <span className="text-[10px] font-bold tracking-[0.1em] uppercase" style={{ color: '#444444' }}>{attr.label}</span>
              <span className="text-[13px] font-bold" style={{ color: '#CCCCCC' }}>{attr.value}</span>
              <div className="w-full h-[3px] rounded-full mt-1 overflow-hidden" style={{ background: 'rgba(0,217,255,0.10)' }}>
                <div className="h-full rounded-full" style={{ width: `${attr.pct}%`, background: CYAN, boxShadow: `0 0 6px rgba(0,217,255,0.50)` }} />
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Closing */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-10 flex flex-col items-center text-center gap-6 w-full max-w-[600px]"
      >
        <p className="text-[14px] italic leading-relaxed" style={{ color: '#555555' }}>
          The arena does not care about your credentials, your background, or your confidence.{' '}
          <span style={{ color: CYAN, fontStyle: 'normal', fontWeight: 600 }}>It only cares what you do when the timer starts.</span>
        </p>

        <a
          href="/signup"
          className="relative overflow-hidden px-8 py-3.5 rounded-xl text-[13px] font-bold uppercase tracking-widest transition-all hover:-translate-y-px"
          style={{ background: `rgba(0,217,255,0.90)`, color: '#090909', boxShadow: `0 0 28px rgba(0,217,255,0.25), inset 0 1px 0 rgba(255,255,255,0.30)` }}
        >
          <span style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.40), transparent)', pointerEvents: 'none' }} />
          Challenge Cipher
        </a>
      </motion.div>
    </section>
  )
}