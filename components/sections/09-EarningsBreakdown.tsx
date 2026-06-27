'use client'
import { motion } from 'framer-motion'
import { Swords, Bot, LucideProps } from 'lucide-react'

const recentPayouts = [
  { initial: 'K', name: 'Kxng_Zero',  mode: 'Duel',         amount: '+$19.80', win: true,  time: '2 min ago',  avatarColor: 'rgba(255,122,0,0.15)',   textColor: '#FF7A00' },
  { initial: 'G', name: 'GhostRiddle',mode: 'Cipher',        amount: '+$9.90',  win: true,  time: '5 min ago',  avatarColor: 'rgba(100,180,255,0.10)', textColor: '#64B4FF' },
  { initial: 'P', name: 'PhantomX',   mode: 'Duel',         amount: '−$10.00', win: false, time: '8 min ago',  avatarColor: 'rgba(180,100,255,0.10)', textColor: '#B464FF' },
  { initial: 'L', name: 'LogicFrost', mode: 'Friday Event', amount: '+$41.58', win: true,  time: '12 min ago', avatarColor: 'rgba(0,200,100,0.10)',   textColor: '#00C864' },
]

const platformStats = [
  { value: '1%',     label: 'Platform fee',  color: '#FF7A00' },
  { value: 'Instant',label: 'Payout speed',  color: '#FFFFFF' },
]

type FlowRow = {
  label: string
  value: string
  valueColor: string
  op: string | null
  highlight?: boolean
}

const duelFlow: FlowRow[] = [
  { label: 'Your stake',        value: '$10.00',       valueColor: '#FF7A00', op: null },
  { label: 'Opponent stake',    value: '$10.00',       valueColor: '#FFFFFF', op: '+'  },
  { label: 'Total pot',         value: '$20.00',       valueColor: '#FFFFFF', op: '↓'  },
  { label: 'Platform fee (1%)', value: '−$0.20',       valueColor: '#EF4444', op: '−'  },
  { label: 'You win',           value: '$19.80',       valueColor: '#48C774', op: '↓', highlight: true },
]

const cipherFlow: FlowRow[] = [
  { label: 'Your stake',             value: '$10.00', valueColor: '#FF7A00', op: null },
  { label: 'Cipher matches (treasury)', value: '$10.00', valueColor: '#FFFFFF', op: '+' },
  { label: 'Total pot',              value: '$20.00', valueColor: '#FFFFFF', op: '↓'  },
  { label: 'Platform fee (1%)',      value: '−$0.20', valueColor: '#EF4444', op: '−'  },
  { label: 'You win',                value: '$19.80', valueColor: '#48C774', op: '↓', highlight: true },
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
      className="relative overflow-hidden rounded-2xl p-8 flex flex-col gap-6"
      style={{
        background: 'rgba(255,255,255,0.04)',
        backdropFilter: 'blur(24px) saturate(1.8) brightness(1.05)',
        WebkitBackdropFilter: 'blur(24px) saturate(1.8) brightness(1.05)',
        border: '1px solid rgba(255,255,255,0.09)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.10), 0 16px 48px rgba(0,0,0,0.40)',
      }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(255,122,0,0.28)')}
      onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.09)')}
    >
      {/* Specular rim */}
      <div style={{ position: 'absolute', top: 0, left: '12%', right: '12%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.16), transparent)', pointerEvents: 'none' }} />

      <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-bold tracking-[0.12em] uppercase w-fit"
        style={{ background: 'rgba(255,122,0,0.08)', border: '1px solid rgba(255,122,0,0.22)', color: '#FF7A00', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}>
        <TagIcon size={12} strokeWidth={2.5} />
        {tag}
      </span>

      <div className="flex flex-col gap-2">
        {flow.map((row, i) => (
          <div key={i}>
            {row.op && (
              <div className="flex justify-center text-[14px] font-bold py-1" style={{ color: 'rgba(255,255,255,0.15)' }}>{row.op}</div>
            )}
            <div className="relative overflow-hidden flex items-center justify-between rounded-xl px-4 py-3"
              style={{
                background: row.highlight ? 'rgba(72,199,116,0.06)' : 'rgba(255,255,255,0.02)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: row.highlight ? '1px solid rgba(72,199,116,0.22)' : '1px solid rgba(255,255,255,0.06)',
              }}>
              {row.highlight && <div style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(72,199,116,0.30), transparent)' }} />}
              <span className="text-[12px] font-semibold tracking-wide" style={{ color: row.highlight ? '#48C774' : '#555555' }}>{row.label}</span>
              <span className="text-[14px] font-extrabold" style={{ color: row.valueColor }}>{row.value}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Win badge */}
      <div className="relative overflow-hidden flex items-center justify-between rounded-xl p-4"
        style={{ background: 'rgba(72,199,116,0.07)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(72,199,116,0.20)' }}>
        <div style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(72,199,116,0.30), transparent)' }} />
        <div className="flex flex-col gap-0.5">
          <span className="text-[12px] font-bold uppercase tracking-wide" style={{ color: '#48C774' }}>{badgeTitle}</span>
          <span className="text-[11px]" style={{ color: '#444444' }}>{badgeSub}</span>
        </div>
        <span className="text-[22px] font-black tracking-tight" style={{ color: '#48C774' }}>{badgeAmount}</span>
      </div>
    </motion.div>
  )
}

export default function EarningsBreakdown() {
  return (
    <section id="earnings" className="relative w-full px-5 py-28 flex flex-col items-center overflow-hidden" style={{ backgroundColor: '#090909' }}>

      {/* Orbs */}
      <div style={{ position: 'absolute', width: '700px', height: '400px', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: 'radial-gradient(ellipse at center, rgba(255,122,0,0.10) 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', width: '300px', height: '300px', top: '15%', left: '-60px', background: 'radial-gradient(circle, rgba(72,199,116,0.07) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', width: '300px', height: '300px', bottom: '10%', right: '-60px', background: 'radial-gradient(circle, rgba(72,199,116,0.07) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0 }} />

      <p className="relative z-10 text-[11px] font-bold tracking-[0.18em] uppercase mb-4" style={{ color: '#FF7A00' }}>Earnings</p>

      <h2 className="relative z-10 text-[clamp(32px,5vw,52px)] font-black uppercase leading-[1.05] tracking-tight text-center mb-4">
        <span className="text-white">Stake smart. </span>
        <span style={{ color: '#FF7A00', textShadow: '0 0 40px rgba(255,122,0,0.25)' }}>Earn real.</span>
      </h2>

      <p className="relative z-10 text-[15px] text-center max-w-[440px] leading-relaxed mb-16" style={{ color: '#555555' }}>
        No smoke and mirrors. Here&apos;s exactly how money flows in and out of Decepta, every match, every mode.
      </p>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-[860px]">
        <FlowCard tagIcon={Swords} tag="Duel — Example Payout" flow={duelFlow} badgeTitle="Net profit on a win" badgeSub="Credited to wallet instantly" badgeAmount="+$9.80" delay={0} />
        <FlowCard tagIcon={Bot}    tag="Cipher — Example Payout" flow={cipherFlow} badgeTitle="Max stake vs Cipher" badgeSub="Treasury sustainability cap" badgeAmount="$15" delay={0.1} />

        {/* Transparency panel */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
          className="relative overflow-hidden md:col-span-2 rounded-2xl p-8 flex flex-col gap-6"
          style={{
            background: 'rgba(255,255,255,0.03)',
            backdropFilter: 'blur(24px) saturate(1.8) brightness(1.04)',
            WebkitBackdropFilter: 'blur(24px) saturate(1.8) brightness(1.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08), 0 16px 48px rgba(0,0,0,0.40)',
          }}
        >
          <div style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)', pointerEvents: 'none' }} />

          <span className="text-[15px] font-extrabold text-white uppercase tracking-widest">Platform Transparency</span>

          <div className="grid grid-cols-2 gap-3 max-w-[400px]">
            {platformStats.map(s => (
              <div key={s.label} className="relative overflow-hidden rounded-xl px-5 py-4 flex flex-col gap-1"
                style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)' }} />
                <span className="text-[20px] font-black tracking-tight" style={{ color: s.color }}>{s.value}</span>
                <span className="text-[10px] font-semibold tracking-[0.1em] uppercase" style={{ color: '#444444' }}>{s.label}</span>
              </div>
            ))}
          </div>

          <div>
            <p className="text-[11px] font-bold tracking-[0.1em] uppercase mb-3" style={{ color: '#444444' }}>Example payouts</p>
            <div className="flex flex-col">
              {recentPayouts.map((p, i) => (
                <div key={i} className="flex items-center justify-between gap-4 py-3" style={{ borderBottom: i < recentPayouts.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                  <div className="flex items-center gap-2.5 min-w-0 flex-1">
                    <div className="relative overflow-hidden w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-extrabold flex-shrink-0"
                      style={{ background: p.avatarColor, color: p.textColor, backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', border: `1px solid ${p.textColor}33` }}>
                      <div style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.20), transparent)' }} />
                      {p.initial}
                    </div>
                    <div className="min-w-0">
                      <p className="text-[13px] font-semibold truncate" style={{ color: '#CCCCCC' }}>{p.name}</p>
                      <p className="text-[10px] font-semibold uppercase tracking-wide" style={{ color: '#555555' }}>{p.mode}</p>
                    </div>
                  </div>
                  <span className="text-[14px] font-extrabold whitespace-nowrap" style={{ color: p.win ? '#48C774' : '#EF4444' }}>{p.amount}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}