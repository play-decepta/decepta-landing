'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronUp, ChevronDown, Minus, Flame } from 'lucide-react'

const players = [
  { rank: 1, move: 'up', initial: 'K', name: 'Kxng_Zero', games: 67, winRate: 72, earnings: '$1,284', weeklyChange: '+$57 this week', streak: 8, hot: true, avatarClass: 'bg-[rgba(249,115,22,0.15)] text-[#F97316] border-[rgba(249,115,22,0.3)]' },
  { rank: 2, move: 'same', initial: 'N', name: 'Neural_88', games: 54, winRate: 68, earnings: '$1,120', weeklyChange: '+$40 this week', streak: 5, hot: false, avatarClass: 'bg-[rgba(255,255,255,0.06)] text-[#CCC] border-[#2A2A2A]' },
  { rank: 3, move: 'up', initial: 'G', name: 'GhostRiddle', games: 49, winRate: 65, earnings: '$980', weeklyChange: '+$22 this week', streak: 3, hot: false, avatarClass: 'bg-[rgba(100,180,255,0.1)] text-[#64B4FF] border-[rgba(100,180,255,0.2)]' },
  { rank: 4, move: 'down', initial: 'P', name: 'PhantomX', games: 61, winRate: 61, earnings: '$840', weeklyChange: '-$8 this week', streak: 0, hot: false, avatarClass: 'bg-[rgba(180,100,255,0.1)] text-[#B464FF] border-[rgba(180,100,255,0.2)]' },
  { rank: 5, move: 'up', initial: 'L', name: 'LogicFrost', games: 38, winRate: 59, earnings: '$720', weeklyChange: '+$15 this week', streak: 2, hot: false, avatarClass: 'bg-[rgba(0,200,100,0.1)] text-[#00C864] border-[rgba(0,200,100,0.2)]' },
] as const

function MoveIcon({ move}: { move: 'up' | 'down' | 'same'}) {
  if (move === 'up') return <ChevronUp size={13} color="#00C864" strokeWidth={2.5} />
  if (move === 'down') return <ChevronDown size={13} color="#EF4444" strokeWidth={2.5} />
  return <Minus size={13} color="#444" strokeWidth={2.5} />
}

export default function LeaderboardPreview() {
  return (
    <section id="leaderboard" className="relative w-full px-5 py-28 flex flex-col items-center bg-[#0A0A0A] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.06)_0%,transparent_70%)] pointer-events-none" />

      <p className="relative z-10 text-[11px] font-bold tracking-[0.18em] uppercase text-[#F97316] mb-4">Leaderboard</p>

      <h2 className="relative z-10 text-[clamp(32px,5vw,52px)] font-black uppercase leading-[1.05] tracking-tight text-center mb-4">
        <span className="text-white">Real players. </span>
        <span className="text-[#F97316]">Real money.</span>
      </h2>

      <p className="relative z-10 text-[15px] text-[#666] text-center max-w-[440px] leading-relaxed mb-16">
        This is what the rankings will look like once the arena opens. Your name could be on this list.
      </p>

      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative z-10 w-full max-w-[760px] border border-[#1E1E1E] rounded-2xl overflow-hidden bg-[#111]">
        <div className="grid grid-cols-[40px_1fr_80px] sm:grid-cols-[56px_1fr_100px_110px_90px] px-6 py-3.5 border-b border-[#1E1E1E] bg-[#0E0E0E]">
          {['Rank', 'Player', 'Win Rate', 'Earnings', 'Streak'].map((h, i) => (
            <span key={h} className={`text-[10px] font-bold text-[#444] tracking-[0.1em] uppercase ${i === 0 ? '' : i === 1 ? 'text-left' : 'text-right'} ${i >= 2 ? 'hidden sm:block' : ''}`}>{h}</span>
          ))}
        </div>

        {players.map((p, i) => (
          <motion.div
            key={p.rank}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className={`relative grid grid-cols-[40px_1fr_80px] sm:grid-cols-[56px_1fr_100px_110px_90px] px-6 py-4 items-center border-b border-[#1A1A1A] last:border-b-0 hover:bg-[rgba(249,115,22,0.04)] transition-colors ${p.rank === 1 ? 'bg-[rgba(249,115,22,0.06)] border-b-[rgba(249,115,22,0.1)]' : ''}`}
          >
            {p.rank === 1 && <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#F97316]" />}

            <div className="flex items-center gap-1.5">
              <span className={`text-[14px] font-extrabold ${p.rank === 1 ? 'text-[#F97316]' : 'text-[#555]'}`}>#{p.rank}</span>
              <MoveIcon move={p.move} />
            </div>

            <div className="flex items-center gap-2.5">
              <div className={`w-9 h-9 rounded-full border flex items-center justify-center text-[13px] font-extrabold flex-shrink-0 ${p.avatarClass}`}>{p.initial}</div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[13px] font-bold text-white">{p.name}</span>
                  {p.hot && (
                    <span className="text-[9px] font-bold bg-[rgba(249,115,22,0.1)] border border-[rgba(249,115,22,0.2)] text-[#F97316] rounded px-1.5 py-0.5 tracking-wide uppercase flex items-center gap-0.5">
                      <Flame size={9} strokeWidth={2.5} />
                      Hot
                    </span>
                  )}
                </div>
                <span className="text-[10px] text-[#555]">{p.games} games played</span>
              </div>
            </div>

            <div className="hidden sm:flex flex-col items-end gap-1">
              <span className={`text-[13px] font-bold ${p.rank === 1 ? 'text-[#F97316]' : 'text-white'}`}>{p.winRate}%</span>
              <div className="w-14 h-[3px] bg-[#1E1E1E] rounded-full overflow-hidden">
                <div className="h-full bg-[#F97316] rounded-full" style={{ width: `${p.winRate}%` }} />
              </div>
            </div>

            <div className="hidden sm:block text-right">
              <span className="text-[13px] font-extrabold text-[#00C864]">{p.earnings}</span>
              <p className="text-[10px] text-[#444] mt-0.5">{p.weeklyChange}</p>
            </div>

            <div className="flex justify-end sm:hidden">
              <span className="text-[13px] font-extrabold text-[#00C864]">{p.earnings}</span>
            </div>
            <div className="hidden sm:flex justify-end">
              {p.streak > 0 ? (
                <span className="inline-flex items-center gap-1 bg-[rgba(249,115,22,0.08)] border border-[rgba(249,115,22,0.15)] rounded-md px-2 py-1 text-[11px] font-bold text-[#F97316]">
                  <Flame size={11} strokeWidth={2.5} />
                  {p.streak}
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 bg-[rgba(255,255,255,0.03)] border border-[#2A2A2A] rounded-md px-2 py-1 text-[11px] font-bold text-[#555]">
                  <Minus size={11} strokeWidth={2.5} />
                  0
                </span>
              )}
            </div>
          </motion.div>
        ))}

        <div className="flex items-center justify-center px-6 py-4 border-t border-[#1E1E1E] bg-[#0E0E0E]">
          <Link href="/signup" className="text-[12px] font-bold text-[#888] border border-[#2A2A2A] hover:border-[#F97316] hover:text-[#F97316] rounded-lg px-5 py-2 uppercase tracking-wide transition-all">View full leaderboard →</Link>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="relative z-10 w-full max-w-[760px] mt-4 bg-[rgba(249,115,22,0.06)] border border-[rgba(249,115,22,0.15)] rounded-2xl px-8 py-6 flex items-center justify-between flex-wrap gap-4">
        <div>
          <p className="text-[15px] font-extrabold text-white uppercase tracking-wide mb-1">Think you can top the board?</p>
          <p className="text-[13px] text-[#666]">Be one of the first to claim a spot when the arena opens.</p>
        </div>
        <Link href="/signup" className="px-7 py-3 bg-[#F97316] hover:opacity-90 text-black text-[13px] font-bold uppercase tracking-wide rounded-lg transition-opacity whitespace-nowrap">Enter the Arena</Link>
      </motion.div>
    </section>
  )
}
