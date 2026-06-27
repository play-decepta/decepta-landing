import LiveBanner from '@/components/sections/01-LiveBanner'
import Navbar from '@/components/sections/02-Navbar'
import Hero from '@/components/sections/03-Hero'
import PoweredBy from '@/components/sections/03b-PoweredBy'
import HowItWorks from '@/components/sections/04-HowItWorks'
import AboutUs from '@/components/sections/03c-AboutUs'
import ModesExpanded from '@/components/sections/05-ModesExpanded'
import CardRevealPreview from '@/components/sections/07-CardRevealPreview'
import Cipher from '@/components/sections/15-Cipher'
import FridaySpotlight from '@/components/sections/06-FridaySpotlight'
import LeaderboardPreview from '@/components/sections/08-LeaderboardPreview'
import EarningsBreakdown from '@/components/sections/09-EarningsBreakdown'
import TrustSafety from '@/components/sections/10-TrustSafety'
import FAQ from '@/components/sections/11-FAQ'
import Community from '@/components/sections/13-Community'
import Roadmap from '@/components/sections/12-Roadmap'
import CTABanner from '@/components/sections/17-CTABanner'
import Footer from '@/components/sections/18-Footer'

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden" style={{ backgroundColor: '#090909', color: '#FFFFFF' }}>

      {/* Global ambient orbs — fixed, bleed through all sections */}
      {/* Centre-weighted orbs — balanced, no edge bias */}
      <div style={{ position: 'fixed', width: '900px', height: '900px', top: '-100px', left: '50%', transform: 'translateX(-50%)', background: 'radial-gradient(circle, rgba(255,122,0,0.22) 0%, transparent 65%)', filter: 'blur(120px)', borderRadius: '50%', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'fixed', width: '700px', height: '700px', top: '50vh', left: '50%', transform: 'translateX(-50%)', background: 'radial-gradient(circle, rgba(255,122,0,0.14) 0%, transparent 65%)', filter: 'blur(120px)', borderRadius: '50%', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'fixed', width: '600px', height: '600px', bottom: '0vh', left: '50%', transform: 'translateX(-50%)', background: 'radial-gradient(circle, rgba(245,196,81,0.09) 0%, transparent 65%)', filter: 'blur(80px)', borderRadius: '50%', pointerEvents: 'none', zIndex: 0 }} />

      {/* Sections — z-index 1 so orbs bleed through glass surfaces */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <LiveBanner />
        <Navbar />
        <Hero />
        <PoweredBy />
        <HowItWorks />
        <AboutUs />
        <ModesExpanded />
        <CardRevealPreview />
        <Cipher />
        <FridaySpotlight />
        <LeaderboardPreview />
        <EarningsBreakdown />
        <TrustSafety />
        <FAQ />
        <Community />
        <Roadmap />
        <CTABanner />
        <Footer />
      </div>
    </main>
  )
}
