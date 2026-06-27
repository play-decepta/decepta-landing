'use client'
import Image from 'next/image'

const footerColumns = [
  {
    title: 'Platform',
    links: [
      { label: 'Duel Mode',         href: '/#modes'      },
      { label: 'Cipher Mode',       href: '/#cipher'     },
      { label: 'Friday Event',      href: '/#friday'     },
      { label: 'Leaderboard',       href: '/#leaderboard'},
      { label: 'How Earnings Work', href: '/#earnings'   },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Decepta', href: '/#about'    },
      { label: 'Roadmap',       href: '/#roadmap'  },
      { label: 'Contact',       href: 'https://mail.google.com/mail/?view=cm&fs=1&to=playdecepta@gmail.com' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'FAQ',                href: '/#faq'   },
      { label: 'Help Centre',        href: 'https://mail.google.com/mail/?view=cm&fs=1&to=playdecepta@gmail.com' },
      { label: 'Trust & Safety',     href: '/#trust' },
      { label: 'Responsible Gaming', href: '/#trust' },
      { label: 'Report an Issue',    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=playdecepta@gmail.com' },
    ],
  },
]

const legalLinks = [
  { label: 'Privacy Policy',   href: '/privacy-policy'   },
  { label: 'Terms of Service', href: '/terms-of-service' },
  { label: 'Cookie Policy',    href: '/cookie-policy'    },
]

const socials = [
  { name: 'Discord',    href: 'https://discord.gg/Ba9FnPq8Z3',  size: 15, path: 'M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.003.024.015.046.03.06a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z' },
  { name: 'Twitter/X', href: 'https://x.com/Play_Decepta',      size: 14, path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.738l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
  { name: 'Telegram',  href: 'https://t.me/playdecepta',         size: 15, path: 'M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z' },
]

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden" style={{ backgroundColor: '#090909' }}>

      {/* Top orb */}
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '600px', height: '200px', background: 'radial-gradient(ellipse at center top, rgba(255,122,0,0.08) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />

      {/* Glass top border */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,122,0,0.25), rgba(255,255,255,0.10), rgba(255,122,0,0.25), transparent)', pointerEvents: 'none', zIndex: 10 }} />

      {/* Main grid */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr] gap-8 md:gap-12 px-10 pt-16 pb-12">

        {/* Brand col */}
        <div className="col-span-2 md:col-span-1 flex flex-col gap-5">
          <div className="flex items-center gap-2.5">
            <Image src="/assets/logo-icon.svg" alt="Decepta" width={26} height={26} style={{ width: '26px', height: '26px' }} />
            <span style={{ color: '#FFFFFF', fontWeight: 800, letterSpacing: '0.18em', fontSize: '16px', textTransform: 'uppercase' }}>Decepta</span>
          </div>

          <p style={{ fontSize: '11px', fontWeight: 700, color: '#FF7A00', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
            Predict • Outplay • Earn
          </p>

          <p style={{ fontSize: '12px', color: '#444444', lineHeight: 1.75, maxWidth: '260px' }}>
            A competitive intelligence platform where pressure reveals skill. Stake real money. Beat real opponents. Earn what you are worth.
          </p>

          {/* Social icons — glass */}
          <div className="flex gap-2">
            {socials.map(social => (
              <a
                key={social.name}
                href={social.href}
                title={social.name}
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden w-[34px] h-[34px] rounded-lg flex items-center justify-center transition-all"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,122,0,0.35)'; e.currentTarget.style.background = 'rgba(255,122,0,0.08)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)' }}
              >
                <div style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.10), transparent)' }} />
                <svg width={social.size} height={social.size} viewBox="0 0 24 24" fill="#555555">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {footerColumns.map(col => (
          <div key={col.title} className="flex flex-col gap-3">
            <p style={{ fontSize: '11px', fontWeight: 700, color: '#FFFFFF', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '4px' }}>{col.title}</p>
            {col.links.map(link => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                style={{ fontSize: '12px', color: '#444444', textDecoration: 'none', transition: 'color 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#FF7A00')}
                onMouseLeave={e => (e.currentTarget.style.color = '#444444')}
              >
                {link.label}
              </a>
            ))}
          </div>
        ))}
      </div>

      {/* Divider — glass line */}
      <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)', margin: '0 40px' }} />

      {/* Bottom bar */}
      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 px-10 py-6">
        <p style={{ fontSize: '11px', color: '#333333', letterSpacing: '0.04em' }}>
          © {new Date().getFullYear()} <span style={{ color: '#FF7A00' }}>Decepta</span>. All rights reserved.
        </p>
        <p style={{ fontSize: '10px', fontWeight: 700, color: '#2A2A2A', letterSpacing: '0.20em', textTransform: 'uppercase' }} className="order-first md:order-none">
          Predict • Outplay • Earn
        </p>
        <div className="flex gap-6">
          {legalLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              style={{ fontSize: '11px', color: '#333333', textDecoration: 'none', transition: 'color 0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#888888')}
              onMouseLeave={e => (e.currentTarget.style.color = '#333333')}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}