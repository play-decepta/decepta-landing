import Navbar from '@/components/sections/02-Navbar'
import Footer from '@/components/sections/18-Footer'
import Link from 'next/link'

export default function SignupPage() {
  return (
    <main className="bg-[#0A0A0A] min-h-screen text-white flex flex-col">
      <Navbar />

      <section className="flex-1 w-full px-5 flex flex-col items-center justify-center text-center py-24">
        <div className="relative w-full max-w-[600px] flex flex-col items-center">

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.1)_0%,transparent_70%)] pointer-events-none" />

          <span className="inline-flex items-center gap-2 bg-[rgba(249,115,22,0.12)] border border-[rgba(249,115,22,0.3)] rounded-full px-4 py-1.5 mb-8 relative z-10">
            <span className="w-[6px] h-[6px] rounded-full bg-[#F97316] animate-pulse" />
            <span className="text-[11px] font-bold text-[#F97316] tracking-[0.14em] uppercase">Building in progress</span>
          </span>

          <h1 className="relative z-10 text-[clamp(40px,8vw,72px)] font-black uppercase leading-[1.0] tracking-tight mb-5">
            <span className="text-white">Coming</span><br />
            <span className="text-[#F97316]">soon.</span>
          </h1>

          <p className="relative z-10 text-[15px] text-[#666] max-w-[420px] leading-relaxed mb-10">
            The arena isn't open yet, but it's close. Follow along and you'll be the first to know the moment it goes live.
          </p>

          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3">
            <a href="https://t.me/playdecepta" target="_blank" rel="noopener noreferrer" className="px-7 py-3.5 bg-[#F97316] hover:opacity-90 text-black text-[14px] font-bold uppercase tracking-wide rounded-lg transition-all hover:-translate-y-px">
              Join the Telegram
            </a>
            <a href="https://x.com/Play_Decepta" target="_blank" rel="noopener noreferrer" className="px-7 py-3.5 bg-transparent border border-[#2A2A2A] hover:border-[#666] text-[#CCC] text-[14px] font-medium uppercase tracking-wide rounded-lg transition-all">
              Follow on X
            </a>
          </div>

          <Link href="/" className="relative z-10 text-[12px] text-[#555] hover:text-[#888] mt-10 transition-colors">
            ← Back to home
          </Link>

        </div>
      </section>

      <Footer />
    </main>
  )
}
