'use client'
import { motion } from 'framer-motion'
import { Swords, Bot, LucideProps } from 'lucide-react'

const recentPayouts = [
  { initial: 'K', name: 'Kxng_Zero', mode: 'Duel', amount: '+$18.00', win: true, time: '2 min ago', avatarClass: 'bg-[rgba(249,115,22,0.15)] text-[#F97316]' },
  { initial: 'G', name: 'GhostRiddle', mode: 'Cipher', amount: '+$13.50', win: true, time: '5 min ago', avatarClass: 'bg-[rgba(100,180,255,0.1)] text-[#64B4FF]' },
  { initial: 'P', name: 'PhantomX', mode: 'Duel', amount: '−$5.00', win: false, time: '8 min ago', avatarClass: 'bg-[rgba(180,100,255,0.1)] text-[#B464FF]' },
  { initial: 'L', name: 'LogicFrost', mode: 'Friday Event', amount: '+$42.00', win: true, time: '12 min ago', avatarClass: 'bg-[rgba(0,200,100,0.1)] text-[#00C864]' },
]

const platformStats = [
  { value: '10%', label: 'Platform fee', color: 'text-[#F97316]' },
  { value: 'Instant', label: 'Payout speed', color: 'text-white' },
]

type FlowRow = {
  label: string
  value: string
  style: string
  op: string | null
  highlight?: boolean
}

const duelFlow: FlowRow[] = [
  { label: 'Your stake', value: '$10.00', style: 'text-[#F97316]', op: null },
  { label: 'Opponent stake', value: '$10.00', style: 'text-white', op: '+' },
  { label: 'Total pot', value: '$20.00', style: 'text-white', op: '↓' },
  { label: 'Platform fee', value: '−$2.00 (10%)', style: 'text-[#EF4444]', op: '−' },
  { label: 'You win', value: '$18.00', style: 'text-[#00C864]', op: '↓', highlight: true },
]

const cipherFlow: FlowRow[] = [
  { label: 'Your stake', value: '$10.00', style: 'text-[#F97316]', op: null },
  { label: 'Cipher matches (treasury)', value: '$10.00', style: 'text-white', op: '+' },
  { label: 'Total pot', value: '$20.00', style: 'text-white', op: '↓' },
  { label: 'Platform fee', value: '−$2.00 (10%)', style: 'text-[#EF4444]', op: '−' },
  { label: 'You win', value: '$18.00', style: 'text-[#00C864]', op: '↓', highlight: true },
]

interface FlowCardProps {
  tagIcon: React.ComponentType<LucideProps>
  tag: string
  flow: FlowRow[]
  badgeTitle: string
  badgeSub: string
  badgeAmount: string
  delay: number
}

function FlowCard({ tagIcon, tag, flow, badgeTitle, badgeSub, badgeAmount, delay }: FlowCardProps) {
  const TagIcon = tagIcon
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative bg-[#111] border border-[#1E1E1E] rounded-2xl p-8 flex flex-col gap-6 hover:border-[rgba(249,115,22,0.3)] transition-colors group overflow-hidden after:content-[''] after:absolute after:top-0 after:left-0 after:right-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-[rgba(249,115,22,0.3)] after:to-transparent after:opacity-0 group-hover:after:opacity-100 after:transition-opacity"
    >
      <span className="inline-flex items-center gap-1.5 bg-[rgba(249,115,22,0.08)] border border-[rgba(249,115,22,0.2)] rounded-full px-3 py-1 text-[10px] font-bold text-[#F97316] tracking-[0.12em] uppercase w-fit">
        <TagIcon size={12} strokeWidth={2.5} />
        {tag}
      </span>

      <div className="flex flex-col gap-2">
        {flow.map((row, i) => (
          <div key={i}>
            {row.op && (
              <div className="flex justify-center text-[#2A2A2A] text-[14px] font-bold py-1">{row.op}</div>
            )}
            <div className={`flex items-center justify-between rounded-xl px-4 py-3 border ${row.highlight ? 'bg-[rgba(0,200,100,0.06)] border-[rgba(0,200,100,0.2)]' : 'bg-[#0E0E0E] border-[#1A1A1A]'}`}>
              <span className={`text-[12px] font-semibold tracking-wide ${row.highlight ? 'text-[#00C864]' : 'text-[#666]'}`}>{row.label}</span>
              <span className={`text-[14px] font-extrabold ${row.style}`}>{row.value}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between bg-[rgba(0,200,100,0.08)] border border-[rgba(0,200,100,0.2)] rounded-xl p-4">
        <div className="flex flex-col gap-0.5">
          <span className="text-[12px] font-bold text-[#00C864] uppercase tracking-wide">{badgeTitle}</span>
          <span className="text-[11px] text-[#444]">{badgeSub}</span>
        </div>
        <span className="text-[22px] font-black text-[#00C864] tracking-tight">{badgeAmount}</span>
      </div>
    </motion.div>
  )
}

export default function EarningsBreakdown() {
  return (
    <section id="earnings" className="relative w-full px-5 py-28 flex flex-col items-center bg-[#0A0A0A] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.06)_0%,transparent_70%)] pointer-events-none" />

      <p className="relative z-10 text-[11px] font-bold tracking-[0.18em] uppercase text-[#F97316] mb-4">Earnings</p>

      <h2 className="relative z-10 text-[clamp(32px,5vw,52px)] font-black uppercase leading-[1.05] tracking-tight text-center mb-4">
        <span className="text-white">Stake smart. </span>
        <span className="text-[#F97316]">Earn real.</span>
      </h2>

      <p className="relative z-10 text-[15px] text-[#666] text-center max-w-[440px] leading-relaxed mb-16">
        No smoke and mirrors. Here's exactly how money will flow in and out of Decepta, every match, every mode.
      </p>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-[860px]">
        <FlowCard tagIcon={Swords} tag="Duel — Example Payout" flow={duelFlow} badgeTitle="Net profit on a win" badgeSub="Credited to wallet instantly" badgeAmount="+$8" delay={0} />
        <FlowCard tagIcon={Bot} tag="Cipher — Example Payout" flow={cipherFlow} badgeTitle="Max stake vs Cipher" badgeSub="Treasury sustainability cap" badgeAmount="$15" delay={0.1} />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-2 bg-[#111] border border-[#1E1E1E] rounded-2xl p-8 flex flex-col gap-6"
        >
          <span className="text-[15px] font-extrabold text-white uppercase tracking-widest">Platform Transparency</span>

          <div className="grid grid-cols-2 gap-3 max-w-[400px]">
            {platformStats.map((s) => (
              <div key={s.label} className="bg-[#0E0E0E] border border-[#1A1A1A] rounded-xl px-5 py-4 flex flex-col gap-1">
                <span className={`text-[20px] font-black tracking-tight ${s.color}`}>{s.value}</span>
                <span className="text-[10px] font-semibold text-[#444] tracking-[0.1em] uppercase">{s.label}</span>
              </div>
            ))}
          </div>

          <div>
            <p className="text-[11px] font-bold text-[#444] tracking-[0.1em] uppercase mb-3">Example payouts</p>
            <div className="flex flex-col">
              {recentPayouts.map((p, i) => (
                <div key={i} className="flex items-center justify-between gap-4 py-3 border-b border-[#1A1A1A] last:border-b-0">
                  <div className="flex items-center gap-2.5 min-w-0 flex-1">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-extrabold flex-shrink-0 ${p.avatarClass}`}>{p.initial}</div>
                    <div className="min-w-0">
                      <p className="text-[13px] font-semibold text-[#CCC] truncate">{p.name}</p>
                      <p className="text-[10px] font-semibold text-[#555] uppercase tracking-wide">{p.mode}</p>
                    </div>
                  </div>
                  <span className={`text-[14px] font-extrabold whitespace-nowrap ${p.win ? 'text-[#00C864]' : 'text-[#EF4444]'}`}>{p.amount}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
