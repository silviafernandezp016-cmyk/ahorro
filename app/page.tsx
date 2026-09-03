import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { StoresStrip } from "@/components/stores-strip"
import { HowItWorks } from "@/components/how-it-works"
import { Categories } from "@/components/categories"
import { FeaturedDeals } from "@/components/featured-deals"
import { Testimonials } from "@/components/testimonials"
import { CtaSection } from "@/components/cta-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <StoresStrip />
      <HowItWorks />
      <Categories />
      <FeaturedDeals />
      <Testimonials />
      <CtaSection />
      <SiteFooter />
    </main>
  )
}
