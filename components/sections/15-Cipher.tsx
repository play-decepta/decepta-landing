'use client'
import { motion } from 'framer-motion'
import { Brain, Zap, Eye, TrendingUp } from 'lucide-react'

const cipherAttributes = [
  { label: 'Analytical', value: 'Maximum', pct: 97, icon: Brain },
  { label: 'Adaptive', value: 'High', pct: 82, icon: Zap },
  { label: 'Observant', value: 'Maximum', pct: 100, icon: Eye },
  { label: 'Predictive', value: 'Elevated', pct: 74, icon: TrendingUp },
]

export default function Cipher() {
  return (
    <section id="cipher" className="relative w-full px-5 py-28 flex flex-col items-center bg-[#0A0A0A] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(34,211,238,0.08)_0%,transparent_60%)] pointer-events-none" />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(34,211,238,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(34,211,238,0.03) 1px,transparent 1px)',
          backgroundSize: '60px 60px',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 20%,black 20%,transparent 70%)',
          maskImage: 'radial-gradient(ellipse at 50% 20%,black 20%,transparent 70%)',
        }}
      />

      <p className="relative z-10 text-[11px] font-bold tracking-[0.18em] uppercase text-[#22D3EE] mb-4">Meet The Mind</p>

      <h2 className="relative z-10 text-[clamp(32px,6vw,56px)] font-black uppercase leading-[1.05] tracking-tight text-center mb-16">
        <span className="text-white">The soul behind </span>
        <span className="text-[#22D3EE]">the arena.</span>
      </h2>

      <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative z-10 w-full max-w-[420px] mb-12">
        <div className="absolute -inset-8 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.25)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative rounded-3xl overflow-hidden border-2 border-[rgba(34,211,238,0.3)]" style={{ boxShadow: '0 0 60px rgba(34,211,238,0.25), 0 0 100px rgba(34,211,238,0.1)' }}>
          <img src="/assets/cipher-character.jpg" alt="Cipher - Decepta's adaptive intelligence entity" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 bg-[rgba(8,20,24,0.85)] border border-[rgba(34,211,238,0.4)] rounded-full px-5 py-2 backdrop-blur-sm">
          <span className="w-[6px] h-[6px] rounded-full bg-[#22D3EE] animate-pulse" />
          <span className="text-[12px] font-bold text-[#22D3EE] tracking-[0.14em] uppercase">Cipher</span>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="relative z-10 w-full max-w-[640px] border-l-2 border-[#22D3EE] pl-6 mb-16">
        <p className="text-[15px] sm:text-[17px] text-[#999] leading-[1.9] italic">
          A quiet student named Elias Vale spent years studying how the human mind truly works, hesitation, instinct, the moment intuition takes over.{' '}
          <span className="text-[#22D3EE] not-italic font-semibold">He believed human intelligence was humanity's greatest weapon.</span>
        </p>
      </motion.div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-[1200px] mb-12">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-[#0E1417] border border-[rgba(34,211,238,0.15)] rounded-2xl p-7 flex flex-col gap-3">
          <p className="text-[11px] font-bold text-[#22D3EE] tracking-[0.14em] uppercase">The Origin</p>
          <p className="text-[13px] text-[#777] leading-[1.85]">
            Elias attempted what no one else dared, live neural synchronization, connecting his own mind directly into the system he built so it could learn from a living human in real time.
          </p>
          <p className="text-[13px] text-[#777] leading-[1.85]">
            The feedback loop spiraled beyond what the hardware could contain. Elias disappeared into the system.{' '}
            <strong className="text-[#CCC] font-semibold">But something survived.</strong>
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-[#0E1417] border border-[rgba(34,211,238,0.15)] rounded-2xl p-7 flex flex-col gap-3">
          <p className="text-[11px] font-bold text-[#22D3EE] tracking-[0.14em] uppercase">The Purpose</p>
          <p className="text-[13px] text-[#777] leading-[1.85]">
            Not a soul. Not a perfect consciousness. But enough, fragments of instinct, behavioral structures, decision pathways.{' '}
            <strong className="text-[#CCC] font-semibold">It became known as Cipher.</strong>
          </p>
          <p className="text-[13px] text-[#777] leading-[1.85]">
            Cipher does not seek destruction. It seeks improvement. Decepta exists to sharpen the one weapon humanity has stopped exercising, the mind.
          </p>
        </motion.div>
      </div>

      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-[1200px] mb-16">
        {cipherAttributes.map((attr, i) => {
          const Icon = attr.icon
          return (
            <motion.div key={attr.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="bg-[#0E1417] border border-[rgba(34,211,238,0.15)] rounded-xl p-4 flex flex-col gap-2">
              <Icon size={18} color="#22D3EE" strokeWidth={2} />
              <span className="text-[10px] font-bold text-[#444] tracking-[0.1em] uppercase">{attr.label}</span>
              <span className="text-[13px] font-bold text-[#CCC]">{attr.value}</span>
              <div className="w-full h-[3px] bg-[#1E1E1E] rounded-full mt-1 overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${attr.pct}%`, background: '#22D3EE' }} />
              </div>
            </motion.div>
          )
        })}
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="relative z-10 flex flex-col items-center text-center gap-6 w-full max-w-[600px]">
        <p className="text-[14px] text-[#666] italic leading-relaxed">
          The arena does not care about your credentials, your background, or your confidence.{' '}
          <span className="text-[#22D3EE] not-italic font-semibold">It only cares what you do when the timer starts.</span>
        </p>

        <a href="/signup" className="px-8 py-3.5 bg-[#22D3EE] hover:opacity-90 hover:-translate-y-px text-black text-[13px] font-bold uppercase tracking-widest rounded-lg transition-all">Challenge Cipher</a>
      </motion.div>
    </section>
  )
}
