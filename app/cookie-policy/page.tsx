import Navbar from '@/components/sections/02-Navbar'
import Footer from '@/components/sections/18-Footer'

export default function CookiePolicyPage() {
  return (
    <main className="bg-[#0A0A0A] min-h-screen text-white">
      <Navbar />


      <section className="w-full px-5 py-20 flex flex-col items-center">
        <div className="w-full max-w-[720px]">

          <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#F97316] mb-4">Legal</p>
          <h1 className="text-[clamp(28px,5vw,42px)] font-black uppercase leading-[1.1] tracking-tight text-white mb-3">
            Cookie Policy
          </h1>
          <p className="text-[12px] text-[#555] mb-12">Last updated: 21st June 2026</p>

          <div className="flex flex-col gap-8 text-[14px] text-[#999] leading-[1.8]">

            <div>
              <h2 className="text-[15px] font-bold text-white uppercase tracking-wide mb-3">1. Current use of cookies</h2>
              <p>
                Decepta does not currently use tracking, advertising, or analytics cookies on this website. We do not collect browsing behavior, do not run advertising pixels, and do not share visitor data with third parties for marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="text-[15px] font-bold text-white uppercase tracking-wide mb-3">2. Essential technical data</h2>
              <p>
                Like most websites, your browser may store small amounts of technical data required for the site to function correctly (for example, remembering your screen size for display purposes). This data is not used to identify or track you personally and is not shared with anyone.
              </p>
            </div>

            <div>
              <h2 className="text-[15px] font-bold text-white uppercase tracking-wide mb-3">3. If this changes</h2>
              <p>
                If Decepta introduces analytics, performance monitoring, or advertising cookies in the future, this page will be updated before those changes take effect, and where required, we will request your consent before any such cookies are set.
              </p>
            </div>

            <div>
              <h2 className="text-[15px] font-bold text-white uppercase tracking-wide mb-3">4. Contact</h2>
              <p>
                Questions about this Cookie Policy can be directed to{' '}
                <a href="mailto:playdecepta@gmail.com" className="text-[#F97316] hover:underline">playdecepta@gmail.com</a>.
              </p>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}
