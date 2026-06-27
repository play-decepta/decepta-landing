'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Category = 'all' | 'gameplay' | 'money' | 'account'

const faqs = [
  {
    cat: 'gameplay' as Category,
    q: 'How does staking work?',
    a: 'Before a Duel match begins, both players agree on a stake amount. Both players must enter the same amount for the match to start. The winner takes the combined pot minus a 1% platform fee. For Cipher mode, you stake against the platform treasury which matches your amount up to a maximum of $15.',
  },
  {
    cat: 'gameplay' as Category,
    q: 'What happens if my opponent disconnects mid-match?',
    a: "If your opponent disconnects during a live match, the system detects it automatically within 10 seconds. Your stake is returned to your wallet immediately and the match is voided. You will not lose money due to someone else's connection issues.",
  },
  {
    cat: 'gameplay' as Category,
    q: 'How does the card reveal and timer work?',
    a: 'Each round begins with a face-down Decepta card showing only the category. The timer does not start until you tap the card to reveal the riddle. Once revealed, you have 15 seconds to submit your answer. You can submit multiple guesses within that window. After each round, the roles of guesser and presenter switch.',
  },
  {
    cat: 'gameplay' as Category,
    q: 'What is Cipher and how is it different from Duel?',
    a: "Cipher is Decepta's AI opponent — an adaptive intelligence entity that selects riddles from hidden categories. Unlike Duel, there is no human opponent. You always play as the guesser across all 3 rounds with no role switching. Cipher mirrors your stake amount from the platform treasury. You can also try Cipher with limited free entries to test your skill before staking real money.",
  },
  {
    cat: 'money' as Category,
    q: 'How do I withdraw my earnings?',
    a: 'Withdrawals are processed instantly from your Decepta wallet. Go to Wallet → Withdraw, enter the amount, and confirm. There is no minimum withdrawal amount and no hold period. Funds arrive in your connected payment method within seconds to minutes depending on your provider.',
  },
  {
    cat: 'money' as Category,
    q: 'What fees does Decepta charge?',
    a: 'Decepta charges a 1% platform fee on the total pot of each match. This is the only fee. There are no deposit fees, no withdrawal fees, and no hidden charges. For example: if both players stake $10, the total pot is $20, the platform takes $0.20, and the winner receives $19.80.',
  },
  {
    cat: 'money' as Category,
    q: 'How does the Friday Event prediction pool work?',
    a: 'Every Friday, community-selected contestants compete live. Before Thursday ends, you stake on which contestant you believe will win. Once your prediction is locked it cannot be changed. After the live match concludes, all correct predictions share the total prediction pool proportionally. The platform takes a 1% fee and contestants also receive an allocation.',
  },
  {
    cat: 'account' as Category,
    q: 'Is Decepta available in my country?',
    a: 'Decepta is available in most countries globally. However, due to local regulations around skill-based wagering, some regions may have restricted access to staking features. You can still sign up and play Cipher in free mode regardless of location. A full list of supported regions will be available at launch.',
  },
  {
    cat: 'account' as Category,
    q: 'How is my rank and leaderboard position calculated?',
    a: 'Your rank is calculated based on a combination of win rate, total matches played, and earnings. The leaderboard updates in real time after every match. Winning streaks boost your rank faster. Inactivity over extended periods may gradually affect your position.',
  },
  {
    cat: 'account' as Category,
    q: 'Can I set limits on how much I stake?',
    a: 'Yes. Decepta provides responsible gaming tools including daily and weekly stake limits, session time reminders, and self-exclusion options. These can be configured in your account Settings under the Responsible Gaming section.',
  },
]

const tabs: { label: string; value: Category }[] = [
  { label: 'All',      value: 'all'      },
  { label: 'Gameplay', value: 'gameplay' },
  { label: 'Money',    value: 'money'    },
  { label: 'Account',  value: 'account'  },
]

export default function FAQ() {
  const [activeTab, setActiveTab] = useState<Category>('all')
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const filtered = faqs.filter(f => activeTab === 'all' || f.cat === activeTab)
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section id="faq" className="relative w-full px-5 py-28 flex flex-col items-center overflow-hidden" style={{ backgroundColor: '#090909' }}>

      {/* Orbs */}
      <div style={{ position: 'absolute', width: '600px', height: '400px', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: 'radial-gradient(ellipse at center, rgba(255,122,0,0.09) 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none', zIndex: 0 }} />

      <p className="relative z-10 text-[11px] font-bold tracking-[0.18em] uppercase mb-4" style={{ color: '#FF7A00' }}>FAQ</p>

      <h2 className="relative z-10 text-[clamp(32px,5vw,52px)] font-black uppercase leading-[1.05] tracking-tight text-center mb-4">
        <span className="text-white">Every question. </span>
        <span style={{ color: '#FF7A00', textShadow: '0 0 40px rgba(255,122,0,0.25)' }}>Answered.</span>
      </h2>

      <p className="relative z-10 text-[15px] text-center max-w-[440px] leading-relaxed mb-10" style={{ color: '#555555' }}>
        Everything you need to know before entering the arena. No fluff, no runaround.
      </p>

      {/* Tabs — glass pills */}
      <div className="relative z-10 flex gap-2 flex-wrap justify-center mb-10">
        {tabs.map(tab => (
          <button
            key={tab.value}
            onClick={() => { setActiveTab(tab.value); setOpenIndex(null) }}
            className="relative overflow-hidden px-[18px] py-1.5 rounded-full text-[12px] font-semibold tracking-wide transition-all"
            style={{
              background: activeTab === tab.value ? 'rgba(255,122,0,0.10)' : 'rgba(255,255,255,0.03)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: activeTab === tab.value ? '1px solid rgba(255,122,0,0.32)' : '1px solid rgba(255,255,255,0.08)',
              color: activeTab === tab.value ? '#FF7A00' : '#666666',
              boxShadow: activeTab === tab.value ? 'inset 0 1px 0 rgba(255,122,0,0.15), 0 0 12px rgba(255,122,0,0.08)' : 'inset 0 1px 0 rgba(255,255,255,0.06)',
            }}
          >
            <span style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: '1px', background: activeTab === tab.value ? 'linear-gradient(90deg, transparent, rgba(255,122,0,0.30), transparent)' : 'linear-gradient(90deg, transparent, rgba(255,255,255,0.10), transparent)', pointerEvents: 'none' }} />
            {tab.label}
          </button>
        ))}
      </div>

      {/* FAQ accordion — glass container */}
      <div
        className="relative z-10 w-full max-w-[720px] overflow-hidden rounded-2xl"
        style={{
          background: 'rgba(255,255,255,0.03)',
          backdropFilter: 'blur(24px) saturate(1.6) brightness(1.04)',
          WebkitBackdropFilter: 'blur(24px) saturate(1.6) brightness(1.04)',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08), 0 16px 48px rgba(0,0,0,0.40)',
        }}
      >
        {/* Specular rim */}
        <div style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)', pointerEvents: 'none', zIndex: 10 }} />

        {filtered.map((faq, i) => (
          <div key={faq.q} style={{ borderBottom: i < filtered.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
            <button
              onClick={() => toggle(i)}
              className="w-full flex items-center justify-between gap-4 px-8 py-6 text-left transition-colors"
              style={{ background: openIndex === i ? 'rgba(255,122,0,0.04)' : 'transparent' }}
            >
              <span className="text-[14px] font-bold leading-snug transition-colors" style={{ color: openIndex === i ? '#FF7A00' : '#FFFFFF' }}>
                {faq.q}
              </span>
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-[18px] font-light transition-all duration-300 relative overflow-hidden"
                style={{
                  background: openIndex === i ? 'rgba(255,122,0,0.10)' : 'rgba(255,255,255,0.04)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  border: openIndex === i ? '1px solid rgba(255,122,0,0.30)' : '1px solid rgba(255,255,255,0.10)',
                  color: openIndex === i ? '#FF7A00' : '#555555',
                  transform: openIndex === i ? 'rotate(45deg)' : 'rotate(0deg)',
                }}
              >
                +
              </div>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === i && (
                <motion.div
                  key="body"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-6" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    <p className="text-[13px] leading-[1.8] pt-5" style={{ color: '#888888' }}>{faq.a}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Contact CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-[720px] mt-3.5 overflow-hidden rounded-2xl px-8 py-6 flex items-center justify-between gap-6 flex-wrap"
        style={{
          background: 'rgba(255,122,0,0.05)',
          backdropFilter: 'blur(24px) saturate(1.8) brightness(1.05)',
          WebkitBackdropFilter: 'blur(24px) saturate(1.8) brightness(1.05)',
          border: '1px solid rgba(255,122,0,0.18)',
          boxShadow: 'inset 0 1px 0 rgba(255,122,0,0.12)',
        }}
      >
        <div style={{ position: 'absolute', top: 0, left: '12%', right: '12%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,122,0,0.28), transparent)', pointerEvents: 'none' }} />
        <div>
          <p className="text-[14px] font-extrabold text-white uppercase tracking-wide mb-1">Still have a question?</p>
          <p className="text-[12px]" style={{ color: '#555555' }}>Our support team is available 24/7 to help you out.</p>
        </div>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=playdecepta@gmail.com"
          className="relative overflow-hidden px-6 py-2.5 rounded-xl text-[12px] font-bold uppercase tracking-wide whitespace-nowrap transition-all hover:-translate-y-px"
          style={{ background: 'rgba(255,122,0,0.92)', color: '#090909', boxShadow: '0 0 20px rgba(255,122,0,0.25), inset 0 1px 0 rgba(255,255,255,0.28)' }}
        >
          <span style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.40), transparent)' }} />
          Contact support
        </a>
      </motion.div>
    </section>
  )
}