'use client'
import { motion } from 'framer-motion'

const channels = [
  {
    id: 'discord',
    platform: 'Discord',
    title: 'Join the server',
    desc: 'Strategy discussions, match updates, and direct access to the Decepta team.',
    cta: 'Join Discord →',
    href: 'https://discord.gg/Ba9FnPq8Z3',
    color: 'rgb(88,101,242)',
    colorRgb: '88,101,242',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="rgb(88,101,242)">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.003.024.015.046.03.06a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
      </svg>
    ),
  },
  {
    id: 'twitter',
    platform: 'Twitter / X',
    title: 'Follow updates',
    desc: 'Event announcements, riddle drops, and platform news as they happen.',
    cta: 'Follow on X →',
    href: 'https://x.com/Play_Decepta',
    color: '#CCCCCC',
    colorRgb: '204,204,204',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.738l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    id: 'telegram',
    platform: 'Telegram',
    title: 'Get notified',
    desc: 'Friday Event alerts and announcements straight to your phone.',
    cta: 'Join Telegram →',
    href: 'https://t.me/playdecepta',
    color: 'rgb(39,174,239)',
    colorRgb: '39,174,239',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="rgb(39,174,239)">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  },
]

export default function Community() {
  return (
    <section id="community" className="relative w-full px-5 py-28 flex flex-col items-center overflow-hidden" style={{ backgroundColor: '#090909' }}>

      {/* Orbs */}
      <div style={{ position: 'absolute', width: '600px', height: '400px', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: 'radial-gradient(ellipse at center, rgba(255,122,0,0.09) 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', width: '300px', height: '300px', top: '20%', left: '5%', background: 'radial-gradient(circle, rgba(88,101,242,0.08) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', width: '300px', height: '300px', bottom: '20%', right: '5%', background: 'radial-gradient(circle, rgba(39,174,239,0.07) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0 }} />

      <p className="relative z-10 text-[11px] font-bold tracking-[0.18em] uppercase mb-4" style={{ color: '#FF7A00' }}>Community</p>

      <h2 className="relative z-10 text-[clamp(32px,5vw,52px)] font-black uppercase leading-[1.05] tracking-tight text-center mb-4">
        <span className="text-white">Join the </span>
        <span style={{ color: '#FF7A00', textShadow: '0 0 40px rgba(255,122,0,0.25)' }}>arena outside.</span>
      </h2>

      <p className="relative z-10 text-[15px] text-center max-w-[440px] leading-relaxed mb-16" style={{ color: '#555555' }}>
        Follow along, ask questions, and be first to know when the arena opens.
      </p>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-3.5 w-full max-w-[860px]">
        {channels.map((ch, i) => (
          <motion.a
            key={ch.id}
            href={ch.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative overflow-hidden rounded-2xl p-8 flex flex-col gap-5 group"
            style={{
              background: 'rgba(255,255,255,0.03)',
              backdropFilter: 'blur(24px) saturate(1.8) brightness(1.05)',
              WebkitBackdropFilter: 'blur(24px) saturate(1.8) brightness(1.05)',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08), 0 8px 32px rgba(0,0,0,0.30)',
              textDecoration: 'none',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = `rgba(${ch.colorRgb},0.35)`
              e.currentTarget.style.transform = 'translateY(-3px)'
              e.currentTarget.style.boxShadow = `inset 0 1px 0 rgba(255,255,255,0.10), 0 20px 56px rgba(0,0,0,0.45), 0 0 28px rgba(${ch.colorRgb},0.10)`
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.08), 0 8px 32px rgba(0,0,0,0.30)'
            }}
          >
            {/* Specular rim */}
            <div style={{ position: 'absolute', top: 0, left: '12%', right: '12%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)', pointerEvents: 'none' }} />

            {/* Hover top glow line */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: `linear-gradient(90deg, transparent, rgba(${ch.colorRgb},0.40), transparent)`, opacity: 0, transition: 'opacity 0.25s', pointerEvents: 'none' }} className="group-hover:opacity-100" />

            {/* Icon container — glass */}
            <div className="relative overflow-hidden w-[52px] h-[52px] rounded-[14px] flex items-center justify-center flex-shrink-0"
              style={{ background: `rgba(${ch.colorRgb},0.10)`, backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: `1px solid rgba(${ch.colorRgb},0.20)`, boxShadow: `inset 0 1px 0 rgba(${ch.colorRgb},0.15)` }}>
              <div style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: '1px', background: `linear-gradient(90deg, transparent, rgba(${ch.colorRgb},0.30), transparent)` }} />
              {ch.icon}
            </div>

            <div>
              <p className="text-[11px] font-bold tracking-[0.12em] uppercase mb-0.5" style={{ color: ch.color }}>{ch.platform}</p>
              <p className="text-[16px] font-extrabold text-white uppercase tracking-wide">{ch.title}</p>
            </div>

            <p className="text-[12px] leading-[1.7]" style={{ color: '#555555' }}>{ch.desc}</p>

            {/* CTA button — glass */}
            <div className="relative overflow-hidden mt-auto w-full py-2.5 rounded-xl text-center text-[12px] font-bold uppercase tracking-widest"
              style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.09)', color: '#888888' }}>
              <div style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.10), transparent)' }} />
              {ch.cta}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}