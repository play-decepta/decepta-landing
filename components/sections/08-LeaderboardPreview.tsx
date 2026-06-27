'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronUp, ChevronDown, Minus, Flame } from 'lucide-react'

const players = [
  { rank: 1, move: 'up',   initial: 'K', name: 'Kxng_Zero',   games: 67, winRate: 72, earnings: '$1,284', weeklyChange: '+$57 this week', streak: 8, hot: true  },
  { rank: 2, move: 'same', initial: 'N', name: 'Neural_88',    games: 54, winRate: 68, earnings: '$1,120', weeklyChange: '+$40 this week', streak: 5, hot: false },
  { rank: 3, move: 'up',   initial: 'G', name: 'GhostRiddle',  games: 49, winRate: 65, earnings: '$980',   weeklyChange: '+$22 this week', streak: 3, hot: false },
  { rank: 4, move: 'down', initial: 'P', name: 'PhantomX',     games: 61, winRate: 61, earnings: '$840',   weeklyChange: '-$8 this week',  streak: 0, hot: false },
  { rank: 5, move: 'up',   initial: 'L', name: 'LogicFrost',   games: 38, winRate: 59, earnings: '$720',   weeklyChange: '+$15 this week', streak: 2, hot: false },
] as const

const avatarStyles: Record<number, React.CSSProperties> = {
  1: { background: 'rgba(255,122,0,0.15)',  color: '#FF7A00', border: '1px solid rgba(255,122,0,0.35)',  boxShadow: '0 0 12px rgba(255,122,0,0.20)' },
  2: { background: 'rgba(255,255,255,0.06)', color: '#CCCCCC', border: '1px solid rgba(255,255,255,0.12)' },
  3: { background: 'rgba(100,180,255,0.10)', color: '#64B4FF', border: '1px solid rgba(100,180,255,0.25)' },
  4: { background: 'rgba(180,100,255,0.10)', color: '#B464FF', border: '1px solid rgba(180,100,255,0.25)' },
  5: { background: 'rgba(0,200,100,0.10)',   color: '#00C864', border: '1px solid rgba(0,200,100,0.25)'  },
}

function MoveIcon({ move }: { move: 'up' | 'down' | 'same' }) {
  if (move === 'up')   return <ChevronUp   size={13} color="#00C864" strokeWidth={2.5} />
  if (move === 'down') return <ChevronDown size={13} color="#EF4444" strokeWidth={2.5} />
  return <Minus size={13} color="#444" strokeWidth={2.5} />
}

export default function LeaderboardPreview() {
  return (
    <section id="leaderboard" className="relative w-full px-5 py-28 flex flex-col items-center overflow-hidden" style={{ backgroundColor: '#090909' }}>

      {/* Orbs */}
      <div style={{ position: 'absolute', width: '700px', height: '500px', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: 'radial-gradient(ellipse at center, rgba(255,122,0,0.10) 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', width: '350px', height: '350px', top: '20%', left: '-80px', background: 'radial-gradient(circle, rgba(255,122,0,0.07) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', width: '350px', height: '350px', bottom: '10%', right: '-80px', background: 'radial-gradient(circle, rgba(255,122,0,0.07) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0 }} />

      <p className="relative z-10 text-[11px] font-bold tracking-[0.18em] uppercase mb-4" style={{ color: '#FF7A00' }}>Leaderboard</p>

      <h2 className="relative z-10 text-[clamp(32px,5vw,52px)] font-black uppercase leading-[1.05] tracking-tight text-center mb-4">
        <span className="text-white">Real players. </span>
        <span style={{ color: '#FF7A00', textShadow: '0 0 40px rgba(255,122,0,0.25)' }}>Real money.</span>
      </h2>

      <p className="relative z-10 text-[15px] text-center max-w-[440px] leading-relaxed mb-16" style={{ color: '#555555' }}>
        This is what the rankings will look like once the arena opens. Your name could be on this list.
      </p>

      {/* Leaderboard table */}
      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-[760px] overflow-hidden rounded-2xl"
        style={{
          background: 'rgba(255,255,255,0.03)',
          backdropFilter: 'blur(28px) saturate(1.8) brightness(1.04)',
          WebkitBackdropFilter: 'blur(28px) saturate(1.8) brightness(1.04)',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08), 0 24px 64px rgba(0,0,0,0.50)',
        }}
      >
        {/* Specular rim */}
        <div style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.14), transparent)', pointerEvents: 'none', zIndex: 10 }} />

        {/* Header */}
        <div className="grid grid-cols-[40px_1fr_80px] sm:grid-cols-[56px_1fr_100px_110px_90px] px-6 py-3.5"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}>
          {['Rank', 'Player', 'Win Rate', 'Earnings', 'Streak'].map((h, i) => (
            <span key={h} className={`text-[10px] font-bold tracking-[0.1em] uppercase ${i === 0 ? '' : i === 1 ? 'text-left' : 'text-right'} ${i >= 2 ? 'hidden sm:block' : ''}`} style={{ color: '#444444' }}>{h}</span>
          ))}
        </div>

        {/* Rows */}
        {players.map((p, i) => (
          <motion.div
            key={p.rank}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="relative grid grid-cols-[40px_1fr_80px] sm:grid-cols-[56px_1fr_100px_110px_90px] px-6 py-4 items-center transition-colors"
            style={{
              borderBottom: p.rank < 5 ? '1px solid rgba(255,255,255,0.05)' : 'none',
              background: p.rank === 1 ? 'rgba(255,122,0,0.06)' : 'transparent',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = p.rank === 1 ? 'rgba(255,122,0,0.08)' : 'rgba(255,255,255,0.02)')}
            onMouseLeave={e => (e.currentTarget.style.background = p.rank === 1 ? 'rgba(255,122,0,0.06)' : 'transparent')}
          >
            {/* #1 left accent bar */}
            {p.rank === 1 && <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '2px', background: '#FF7A00', boxShadow: '0 0 8px rgba(255,122,0,0.50)' }} />}

            {/* Rank */}
            <div className="flex items-center gap-1">
              <span className="text-[14px] font-extrabold" style={{ color: p.rank === 1 ? '#FF7A00' : '#555555' }}>#{p.rank}</span>
              <MoveIcon move={p.move} />
            </div>

            {/* Player */}
            <div className="flex items-center gap-2.5">
              <div className="relative overflow-hidden w-9 h-9 rounded-full flex items-center justify-center text-[13px] font-extrabold flex-shrink-0"
                style={{ backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', ...avatarStyles[p.rank] }}>
                <div style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.20), transparent)' }} />
                {p.initial}
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[13px] font-bold text-white">{p.name}</span>
                  {p.hot && (
                    <span className="text-[9px] font-bold rounded px-1.5 py-0.5 tracking-wide uppercase flex items-center gap-0.5"
                      style={{ background: 'rgba(255,122,0,0.10)', border: '1px solid rgba(255,122,0,0.22)', color: '#FF7A00' }}>
                      <Flame size={9} strokeWidth={2.5} /> Hot
                    </span>
                  )}
                </div>
                <span className="text-[10px]" style={{ color: '#444444' }}>{p.games} games played</span>
              </div>
            </div>

            {/* Win rate */}
            <div className="hidden sm:flex flex-col items-end gap-1">
              <span className="text-[13px] font-bold" style={{ color: p.rank === 1 ? '#FF7A00' : '#FFFFFF' }}>{p.winRate}%</span>
              <div className="w-14 h-[3px] rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
                <div className="h-full rounded-full" style={{ width: `${p.winRate}%`, background: '#FF7A00', boxShadow: p.rank === 1 ? '0 0 6px rgba(255,122,0,0.50)' : 'none' }} />
              </div>
            </div>

            {/* Earnings */}
            <div className="hidden sm:block text-right">
              <span className="text-[13px] font-extrabold" style={{ color: '#48C774' }}>{p.earnings}</span>
              <p className="text-[10px] mt-0.5" style={{ color: p.weeklyChange.startsWith('+') ? '#48C774' : '#EF4444', opacity: 0.7 }}>{p.weeklyChange}</p>
            </div>
            <div className="flex justify-end sm:hidden">
              <span className="text-[13px] font-extrabold" style={{ color: '#48C774' }}>{p.earnings}</span>
            </div>

            {/* Streak */}
            <div className="hidden sm:flex justify-end">
              {p.streak > 0 ? (
                <span className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-[11px] font-bold"
                  style={{ background: 'rgba(255,122,0,0.08)', border: '1px solid rgba(255,122,0,0.18)', color: '#FF7A00', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}>
                  <Flame size={11} strokeWidth={2.5} /> {p.streak}
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-[11px] font-bold"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', color: '#444444' }}>
                  <Minus size={11} strokeWidth={2.5} /> 0
                </span>
              )}
            </div>
          </motion.div>
        ))}

        {/* Footer */}
        <div className="flex items-center justify-center px-6 py-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}>
          <Link href="/signup"
            className="relative overflow-hidden text-[12px] font-bold rounded-xl px-5 py-2 uppercase tracking-wide transition-all"
            style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.10)', color: '#888888' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,122,0,0.35)'; e.currentTarget.style.color = '#FF7A00' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)'; e.currentTarget.style.color = '#888888' }}
          >
            <span style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)' }} />
            View full leaderboard →
          </Link>
        </div>
      </motion.div>

      {/* CTA banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
        className="relative z-10 w-full max-w-[760px] mt-4 overflow-hidden rounded-2xl px-8 py-6 flex items-center justify-between flex-wrap gap-4"
        style={{
          background: 'rgba(255,122,0,0.07)',
          backdropFilter: 'blur(24px) saturate(1.8) brightness(1.06)',
          WebkitBackdropFilter: 'blur(24px) saturate(1.8) brightness(1.06)',
          border: '1px solid rgba(255,122,0,0.20)',
          boxShadow: 'inset 0 1px 0 rgba(255,122,0,0.14), 0 0 40px rgba(255,122,0,0.06)',
        }}
      >
        <div style={{ position: 'absolute', top: 0, left: '12%', right: '12%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,122,0,0.35), transparent)', pointerEvents: 'none' }} />
        <div>
          <p className="text-[15px] font-extrabold text-white uppercase tracking-wide mb-1">Think you can top the board?</p>
          <p className="text-[13px]" style={{ color: '#555555' }}>Be one of the first to claim a spot when the arena opens.</p>
        </div>
        <Link href="/signup"
          className="relative overflow-hidden px-7 py-3 rounded-xl text-[13px] font-bold uppercase tracking-wide transition-all whitespace-nowrap hover:-translate-y-px"
          style={{ background: 'rgba(255,122,0,0.92)', color: '#090909', boxShadow: '0 0 28px rgba(255,122,0,0.30), inset 0 1px 0 rgba(255,255,255,0.28)' }}>
          <span style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.45), transparent)' }} />
          Enter the Arena
        </Link>
      </motion.div>
    </section>
  )
}