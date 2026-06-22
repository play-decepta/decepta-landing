// app/page.tsx
import LiveBanner from '@/components/sections/01-LiveBanner'
import Navbar from '@/components/sections/02-Navbar'
import Hero from '@/components/sections/03-Hero'
import PoweredBy from '@/components/sections/03b-PoweredBy'
import HowItWorks from '@/components/sections/04-HowItWorks'
import AboutUs from '@/components/sections/03c-AboutUs'
import ModesExpanded from '@/components/sections/05-ModesExpanded'
import Cipher from '@/components/sections/15-Cipher'
import FridaySpotlight from '@/components/sections/06-FridaySpotlight'
import CardRevealPreview from '@/components/sections/07-CardRevealPreview'
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
    <main className="bg-[#0A0A0A] min-h-screen text-white">
      <LiveBanner />
      <Navbar />
      <Hero />
      <PoweredBy />
      <HowItWorks />
      <AboutUs />
      <ModesExpanded />
      <Cipher />
      <FridaySpotlight />
      <CardRevealPreview />
      <LeaderboardPreview />
      <EarningsBreakdown />
      <TrustSafety />
      <FAQ />
      <Community />
      <Roadmap />
      <CTABanner />
      <Footer />
    </main>
  )
}
