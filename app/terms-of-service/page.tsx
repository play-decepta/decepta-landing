import Navbar from '@/components/sections/02-Navbar'
import Footer from '@/components/sections/18-Footer'

export default function TermsOfServicePage() {
  return (
    <main className="bg-[#0A0A0A] min-h-screen text-white">
      <Navbar />

      <section className="w-full px-5 py-20 flex flex-col items-center">
        <div className="w-full max-w-[720px]">

          <div className="bg-[rgba(249,115,22,0.06)] border border-[rgba(249,115,22,0.2)] rounded-xl px-5 py-4 mb-10">
            <p className="text-[12px] text-[#F97316] font-semibold leading-relaxed">
              This document is currently under legal review and is not yet final. It is published here for transparency while review is in progress.
            </p>
          </div>

          <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#F97316] mb-4">Legal</p>
          <h1 className="text-[clamp(28px,5vw,42px)] font-black uppercase leading-[1.1] tracking-tight text-white mb-3">
            Terms of Service
          </h1>
          <p className="text-[12px] text-[#555] mb-12">Last updated: [21st June 2026]</p>

          <div className="flex flex-col gap-8 text-[14px] text-[#999] leading-[1.8]">

            <div>
              <h2 className="text-[15px] font-bold text-white uppercase tracking-wide mb-3">1. Acceptance of terms</h2>
              <p>By accessing or using Decepta ("the Service," "the Platform," "we," "us"), you agree to be bound by these Terms of Service. If you do not agree, do not use the Service.</p>
            </div>

            <div>
              <h2 className="text-[15px] font-bold text-white uppercase tracking-wide mb-3">2. Eligibility</h2>
              <p>You must be at least 18 years old to create an account or use the Service. The Service involves real-money staking and onchain financial transactions and is not directed at, or intended for use by, minors. You further represent that your use of Decepta is lawful in your jurisdiction of residence.</p>
            </div>

            <div>
              <h2 className="text-[15px] font-bold text-white uppercase tracking-wide mb-3">3. Account registration</h2>
              <p>You must create an account to use most features of the Service. You are responsible for maintaining the security of your account and wallet credentials, and agree to notify us promptly of any unauthorized use.</p>
            </div>

            <div>
              <h2 className="text-[15px] font-bold text-white uppercase tracking-wide mb-3">4. Nature of the Service — skill-based competition</h2>
              <p>Decepta is a skill-based competitive platform. Outcomes in Duel, Cipher, and Friday Event modes are determined by player performance, observation, deduction, and response time, not by chance. Nothing in these Terms should be construed as Decepta operating as a game of chance, lottery, or casino-style gambling product.</p>
            </div>

            <div>
              <h2 className="text-[15px] font-bold text-white uppercase tracking-wide mb-3">5. Staking, wallets, and funds</h2>
              <p className="mb-3"><strong className="text-[#ccc]">Staking:</strong> certain modes require staking funds as a condition of participation. Stakes are held in escrow via smart contract until the match resolves.</p>
              <p className="mb-3"><strong className="text-[#ccc]">Wallets:</strong> you may use an internal embedded wallet or connect an external wallet. You are solely responsible for the security of any externally connected wallet, including private key management.</p>
              <p className="mb-3"><strong className="text-[#ccc]">Onchain transactions:</strong> transactions settled onchain are generally irreversible. You accept the inherent risks of blockchain-based transactions.</p>
              <p><strong className="text-[#ccc]">Fees:</strong> the Platform charges fees on certain transactions and settlements. Current fee structures will be made available within the Service and are subject to change with notice.</p>
            </div>

            <div>
              <h2 className="text-[15px] font-bold text-white uppercase tracking-wide mb-3">6. User conduct</h2>
              <p className="mb-3">You agree not to use bots or automated tools, collude with other users, create multiple accounts to circumvent platform rules, interfere with server-authoritative systems, use the Service for unlawful financial activity, harass other users, or attempt to circumvent the invite-link-only matchmaking system.</p>
              <p>Violation of this section may result in account suspension, forfeiture of funds tied to fraudulent activity, and/or reporting to relevant authorities where applicable.</p>
            </div>

            <div>
              <h2 className="text-[15px] font-bold text-white uppercase tracking-wide mb-3">7. Intellectual property</h2>
              <p>All content, branding, riddles, software, and design elements of Decepta are owned by us or our licensors. You may not copy, modify, distribute, or create derivative works from the Service without express permission.</p>
            </div>

            <div>
              <h2 className="text-[15px] font-bold text-white uppercase tracking-wide mb-3">8. Disclaimers</h2>
              <p>The Service is provided "as is" and "as available," without warranties of any kind. We do not guarantee blockchain network performance, transaction confirmation times, or token/asset value. Participation in onchain activity carries inherent financial risk, including potential total loss of staked funds.</p>
            </div>

            <div>
              <h2 className="text-[15px] font-bold text-white uppercase tracking-wide mb-3">9. Limitation of liability</h2>
              <p>To the maximum extent permitted by law, Decepta and its operators shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of funds, data, or goodwill, arising from your use of the Service.</p>
            </div>

            <div>
              <h2 className="text-[15px] font-bold text-white uppercase tracking-wide mb-3">10. Dispute resolution</h2>
              <p>Governing law and venue for dispute resolution will be specified here once finalized.</p>
            </div>

            <div>
              <h2 className="text-[15px] font-bold text-white uppercase tracking-wide mb-3">11. Account suspension and termination</h2>
              <p>We reserve the right to suspend or terminate accounts that violate these Terms, engage in fraudulent activity, or pose a risk to the integrity of the Platform. Where funds are implicated in fraudulent activity, we reserve the right to freeze withdrawals pending investigation.</p>
            </div>

            <div>
              <h2 className="text-[15px] font-bold text-white uppercase tracking-wide mb-3">12. Changes to the Service and Terms</h2>
              <p>We may modify the Service or these Terms at any time. Material changes will be communicated through the Service prior to taking effect. Continued use after changes take effect constitutes acceptance.</p>
            </div>

            <div>
              <h2 className="text-[15px] font-bold text-white uppercase tracking-wide mb-3">13. Contact</h2>
              <p>Questions about these Terms can be directed to <a href="mailto:playdecepta@gmail.com" className="text-[#F97316] hover:underline">playdecepta@gmail.com</a>.</p>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}
