// components/sections/12-FAQ.tsx
'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Category = 'all' | 'gameplay' | 'money' | 'account'

const faqs = [
  {
    cat: 'gameplay' as Category,
    q: 'How does staking work?',
    a: 'Before a Duel match begins, both players agree on a stake amount. Both players must enter the same amount for the match to start. The winner takes the combined pot minus a 10% platform fee. For Cipher mode, you stake against the platform treasury which matches your amount up to a maximum of $15.',
  },
  {
    cat: 'gameplay' as Category,
    q: 'What happens if my opponent disconnects mid-match?',
    a: 'If your opponent disconnects during a live match, the system detects it automatically within 10 seconds. Your stake is returned to your wallet immediately and the match is voided. You will not lose money due to someone else\'s connection issues.',
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
    a: 'Decepta charges a 10% platform fee on the total pot of each match. This is the only fee. There are no deposit fees, no withdrawal fees, and no hidden charges. For example: if both players stake $10, the total pot is $20, the platform takes $2, and the winner receives $18.',
  },
  {
    cat: 'money' as Category,
    q: 'How does the Friday Event prediction pool work?',
    a: 'Every Friday, community-selected contestants compete live. Before Thursday ends, you stake on which contestant you believe will win. Once your prediction is locked it cannot be changed. After the live match concludes, all correct predictions share the total prediction pool proportionally. The platform takes a percentage fee and contestants also receive an allocation.',
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
  { label: 'All',      value: 'all' },
  { label: 'Gameplay', value: 'gameplay' },
  { label: 'Money',    value: 'money' },
  { label: 'Account',  value: 'account' },
]

export default function FAQ() {
  const [activeTab, setActiveTab] = useState<Category>('all')
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const filtered = faqs.filter(f => activeTab === 'all' || f.cat === activeTab)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section
      id="faq"
      className="relative w-full px-5 py-28 flex flex-col items-center bg-[#0A0A0A] overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.05)_0%,transparent_70%)] pointer-events-none" />

      {/* Eyebrow */}
      <p className="relative z-10 text-[11px] font-bold tracking-[0.18em] uppercase text-[#F97316] mb-4">
        FAQ
      </p>

      {/* Heading */}
      <h2 className="relative z-10 text-[clamp(32px,5vw,52px)] font-black uppercase leading-[1.05] tracking-tight text-center mb-4">
        <span className="text-white">Every question. </span>
        <span className="text-[#F97316]">Answered.</span>
      </h2>

      <p className="relative z-10 text-[15px] text-[#666] text-center max-w-[440px] leading-relaxed mb-10">
        Everything you need to know before entering the arena. No fluff, no runaround.
      </p>

      {/* Tabs */}
      <div className="relative z-10 flex gap-2 flex-wrap justify-center mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => { setActiveTab(tab.value); setOpenIndex(null) }}
            className={`px-[18px] py-1.5 rounded-full text-[12px] font-semibold border transition-all tracking-wide ${
              activeTab === tab.value
                ? 'bg-[rgba(249,115,22,0.1)] border-[rgba(249,115,22,0.3)] text-[#F97316]'
                : 'bg-[#111] border-[#1E1E1E] text-[#666] hover:border-[#555] hover:text-[#CCC]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* FAQ list */}
      <div className="relative z-10 w-full max-w-[720px] border border-[#1E1E1E] rounded-2xl overflow-hidden bg-[#111]">
        {filtered.map((faq, i) => (
          <div key={faq.q} className="border-b border-[#1A1A1A] last:border-b-0">

            {/* Trigger */}
            <button
              onClick={() => toggle(i)}
              className={`w-full flex items-center justify-between gap-4 px-8 py-6 text-left transition-colors ${
                openIndex === i ? 'bg-[rgba(249,115,22,0.04)]' : 'hover:bg-[rgba(249,115,22,0.04)]'
              }`}
            >
              <span className={`text-[14px] font-bold leading-snug transition-colors ${
                openIndex === i ? 'text-[#F97316]' : 'text-white'
              }`}>
                {faq.q}
              </span>
              <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-[18px] font-light transition-all duration-300 ${
                openIndex === i
                  ? 'bg-[rgba(249,115,22,0.1)] border border-[rgba(249,115,22,0.3)] text-[#F97316] rotate-45'
                  : 'bg-[#1A1A1A] border border-[#2A2A2A] text-[#666]'
              }`}>
                +
              </div>
            </button>

            {/* Body */}
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
                  <div className="px-8 pb-6 border-t border-[#1A1A1A]">
                    <p className="text-[13px] text-[#888] leading-[1.8] pt-5">
                      {faq.a}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Still have questions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-[720px] mt-3.5 bg-[rgba(249,115,22,0.04)] border border-[rgba(249,115,22,0.15)] rounded-2xl px-8 py-6 flex items-center justify-between gap-6 flex-wrap"
      >
        <div>
          <p className="text-[14px] font-extrabold text-white uppercase tracking-wide mb-1">
            Still have a question?
          </p>
          <p className="text-[12px] text-[#666]">
            Our support team is available 24/7 to help you out.
          </p>
        </div>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=playdecepta@gmail.com" className="px-6 py-2.5 bg-[#F97316] hover:opacity-90 text-black text-[12px] font-bold uppercase tracking-wide rounded-lg transition-opacity whitespace-nowrap">
          Contact support
        </a>
      </motion.div>
    </section>
  )
}