'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const trustItems = ['Free to sign up', 'Instant payouts', 'No hidden fees', 'Free Cipher trial', 'Cancel anytime']

export default function CTABanner() {
  return (
    <section id="cta" className="relative w-full px-5 py-28 flex flex-col items-center bg-[#0A0A0A] overflow-hidden">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative w-full max-w-[900px] bg-[#0E0E0E] border border-[rgba(249,115,22,0.25)] rounded-[28px] overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#F97316] to-transparent" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.12)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center px-8 sm:px-16 pt-20 pb-16">
          <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#F97316] mb-6">The arena is opening soon</p>
          <h2 className="text-[clamp(36px,6vw,68px)] font-black uppercase leading-[1.0] tracking-tight mb-5">
            <span className="text-white">Your first</span><br />
            <span className="text-[#F97316]">move.</span>
          </h2>
          <p className="text-[15px] text-[#666] max-w-[440px] leading-relaxed mb-10">
            The riddles are ready. The stakes will be real. Sign up now and be first in line when the arena opens.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <Link href="/signup" className="w-full sm:w-auto text-center px-9 py-4 bg-[#F97316] hover:opacity-90 hover:-translate-y-0.5 text-black text-[15px] font-extrabold uppercase tracking-wide rounded-xl transition-all">
              Enter the Arena
            </Link>
            <a href="#how-it-works" className="w-full sm:w-auto text-center px-9 py-4 bg-transparent border border-[#2A2A2A] hover:border-[#666] hover:text-[#CCC] text-[#888] text-[15px] font-semibold uppercase tracking-wide rounded-xl transition-all">
              See how it works
            </a>
          </div>
        </div>

        <div className="relative z-10 border-t border-[rgba(249,115,22,0.1)] bg-[rgba(249,115,22,0.03)] px-8 py-5 flex items-center justify-center gap-4 sm:gap-8 flex-wrap">
          {trustItems.map((item) => (
            <div key={item} className="flex items-center gap-1.5">
              <div className="w-4 h-4 rounded-full bg-[rgba(0,200,100,0.1)] border border-[rgba(0,200,100,0.2)] flex items-center justify-center flex-shrink-0">
                <span className="text-[9px] text-[#00C864] font-bold">✓</span>
              </div>
              <span className="text-[12px] font-semibold text-[#555]">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
