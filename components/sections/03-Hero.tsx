'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative w-full min-h-[92vh] flex flex-col items-center justify-center text-center px-5 pt-24 pb-20 overflow-hidden">
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.10)_0%,transparent_70%)] pointer-events-none" />

      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="relative z-10 inline-flex items-center gap-2 bg-[rgba(249,115,22,0.12)] border border-[rgba(249,115,22,0.3)] rounded-full px-4 py-1.5 mb-8">
        <span className="w-[6px] h-[6px] rounded-full bg-[#F97316] animate-pulse flex-shrink-0" />
        <span className="text-[11px] font-bold text-[#F97316] tracking-[0.14em] uppercase">
          <span className="hidden sm:inline">Live — Friday Event Open</span>
          <span className="sm:hidden">Live Event</span>
        </span>
      </motion.div>

      <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative z-10 text-[clamp(52px,10vw,96px)] font-black leading-[1.0] tracking-tight uppercase mb-7">
        <span className="block text-white">Predict.</span>
        <span className="block text-[#F97316]">Outplay.</span>
        <span className="block text-white">Earn.</span>
      </motion.h1>

      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative z-10 text-[#888] text-[15px] leading-relaxed max-w-[420px] mb-10">
        <span className="hidden sm:inline">A competitive intelligence platform where pressure reveals skill. Stake real money. Beat real opponents.</span>
        <span className="sm:hidden">Competitive intelligence. Real stakes. Real opponents.</span>
      </motion.p>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="relative z-10 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
        <Link href="/signup" className="w-full sm:w-auto text-center text-[14px] font-bold text-black bg-[#F97316] hover:opacity-90 rounded-lg px-7 py-3.5 transition-all hover:-translate-y-[1px]">
          Enter the Arena
        </Link>
        <a href="#how-it-works" className="w-full sm:w-auto text-center text-[14px] font-medium text-[#CCC] hover:text-white border border-[#2A2A2A] hover:border-[#666] rounded-lg px-7 py-3.5 transition-all">
          See how it works
        </a>
      </motion.div>
    </section>
  )
}
