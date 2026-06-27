'use client'

const partners = [
  { name: 'Base', logo: '/assets/partners/base-logo.svg', href: 'https://x.com/base', needsInvert: false },
  { name: 'Bankr', logo: '/assets/partners/bankr-logo.svg', href: 'https://x.com/bankrbot', needsInvert: false },
  { name: 'Gaming on Base', logo: '/assets/partners/gaming-on-base-logo.svg', href: 'https://x.com/GamingOnBase', needsInvert: true },
  { name: 'Everybody Needs Base', logo: '/assets/partners/enb-logo.svg', href: 'https://x.com/EverybNeedsBase', needsInvert: false },
  { name: 'Onchain Media', logo: '/assets/partners/onchain-media-logo.svg', href: 'https://x.com/Onchainmedia', needsInvert: true },
]

const ITEM_WIDTH = 260

export default function PoweredBy() {
  const loopPartners = [...partners, ...partners]
  const trackWidth = ITEM_WIDTH * partners.length

  return (
    <section className="relative w-full bg-[#0A0A0A] border-y border-[#1E1E1E] py-16 overflow-hidden">
      <style>{`
        @keyframes decepta-marquee { from { transform: translateX(0px); } to { transform: translateX(-${trackWidth}px); } }
        .decepta-marquee-track { animation: decepta-marquee 30s linear infinite; will-change: transform; }
        .decepta-marquee-wrap:hover .decepta-marquee-track { animation-play-state: paused; }
      `}</style>

      <p className="text-center text-[13px] font-bold tracking-[0.2em] uppercase text-[#777] mb-10">Powered by</p>

      <div className="relative w-full overflow-hidden decepta-marquee-wrap">
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

        <div className="flex items-center decepta-marquee-track" style={{ width: `${trackWidth * 2}px` }}>
          {loopPartners.map((partner, i) => {
            const itemKey = partner.name + '-' + i
            const imgClass = partner.needsInvert ? 'h-14 w-auto object-contain max-w-[180px] brightness-0 invert opacity-90' : 'h-14 w-auto object-contain max-w-[180px]'
            return (
              <a key={itemKey} href={partner.href} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-4 flex-shrink-0 hover:opacity-100 opacity-85 transition-opacity duration-300" style={{ width: `${ITEM_WIDTH}px` }} title={partner.name}>
                <img src={partner.logo} alt={partner.name} className={imgClass} />
                <span className="text-[14px] font-semibold text-[#aaa] whitespace-nowrap">{partner.name}</span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
