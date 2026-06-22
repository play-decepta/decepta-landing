import Navbar from '@/components/sections/02-Navbar'
import Footer from '@/components/sections/18-Footer'

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-[12px] text-[#555] mb-12">Last updated: [21st June 2026]</p>

          <div className="flex flex-col gap-8 text-[14px] text-[#999] leading-[1.8]">

            <div>
              <h2 className="text-[15px] font-bold text-white uppercase tracking-wide mb-3">1. Introduction</h2>
              <p>
                This Privacy Policy explains how Decepta ("we," "us," "our," "the Platform") collects, uses, stores, and protects information when you use our website, mobile applications, and related services (collectively, the "Service"). By using Decepta, you agree to the collection and use of information in accordance with this policy. If you do not agree, please do not use the Service.
              </p>
            </div>

            <div>
              <h2 className="text-[15px] font-bold text-white uppercase tracking-wide mb-3">2. Information we collect</h2>
              <p className="mb-3"><strong className="text-[#ccc]">Information you provide directly:</strong> account information (username, email, avatar), authentication data via third-party providers (Google OAuth, wallet connection providers), wallet addresses, and communications with us.</p>
              <p className="mb-3"><strong className="text-[#ccc]">Information collected automatically:</strong> device and usage data, gameplay data (match history, round outcomes, riddle responses, timestamps), and transaction data.</p>
              <p><strong className="text-[#ccc]">Financial and wallet data:</strong> because Decepta involves staking and onchain settlement, we collect wallet balances and transaction history within the Platform, onchain transaction identifiers (publicly visible on the relevant blockchain), and deposit/withdrawal records. We do not store private keys for externally connected wallets.</p>
            </div>

            <div>
              <h2 className="text-[15px] font-bold text-white uppercase tracking-wide mb-3">3. How we use information</h2>
              <p>We use collected information to operate, maintain, and improve the Service; process stakes, settlements, deposits, and withdrawals; verify account eligibility including age verification; detect and prevent fraud and abuse; communicate with you; and comply with legal obligations.</p>
            </div>

            <div>
              <h2 className="text-[15px] font-bold text-white uppercase tracking-wide mb-3">4. How we share information</h2>
              <p>We do not sell personal information. We may share information with service providers who help us operate the Service, where required by law, in connection with a business transfer, or with your consent. Certain transaction data is inherently public by virtue of being recorded onchain.</p>
            </div>

            <div>
              <h2 className="text-[15px] font-bold text-white uppercase tracking-wide mb-3">5. Data retention</h2>
              <p>We retain personal data for as long as necessary to provide the Service, comply with legal obligations, resolve disputes, and enforce our agreements.</p>
            </div>

            <div>
              <h2 className="text-[15px] font-bold text-white uppercase tracking-wide mb-3">6. Your rights</h2>
              <p>Depending on your jurisdiction, you may have rights to access, correct, delete, or port your personal data, or to object to or restrict certain processing. To exercise these rights, contact us at <a href="mailto:playdecepta@gmail.com" className="text-[#F97316] hover:underline">playdecepta@gmail.com</a>.</p>
            </div>

            <div>
              <h2 className="text-[15px] font-bold text-white uppercase tracking-wide mb-3">7. Age restrictions</h2>
              <p>Decepta is intended for users 18 years of age or older. The Service involves real-money staking and onchain financial transactions and is not intended for use by minors. We do not knowingly collect personal information from anyone under 18.</p>
            </div>

            <div>
              <h2 className="text-[15px] font-bold text-white uppercase tracking-wide mb-3">8. Security</h2>
              <p>We implement technical and organizational measures designed to protect your information, including server-authoritative architecture for gameplay and financial logic. No system is completely secure, and we cannot guarantee absolute security of information transmitted to or from the Service.</p>
            </div>

            <div>
              <h2 className="text-[15px] font-bold text-white uppercase tracking-wide mb-3">9. International data transfers</h2>
              <p>Decepta operates internationally. By using the Service, you understand your information may be transferred to and processed in countries other than your own, which may have different data protection laws.</p>
            </div>

            <div>
              <h2 className="text-[15px] font-bold text-white uppercase tracking-wide mb-3">10. Changes to this policy</h2>
              <p>We may update this Privacy Policy from time to time. Material changes will be communicated through the Service or via email prior to taking effect.</p>
            </div>

            <div>
              <h2 className="text-[15px] font-bold text-white uppercase tracking-wide mb-3">11. Contact</h2>
              <p>Questions about this Privacy Policy can be directed to <a href="mailto:playdecepta@gmail.com" className="text-[#F97316] hover:underline">playdecepta@gmail.com</a>.</p>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}
