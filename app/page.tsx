import { HeroSection } from "@/components/hero-section"
import { BrandsSection } from "@/components/brands-section"
import { ServicesSection } from "@/components/services-section"
import { ProvenResultsSection } from "@/components/proven-results-section"
import { JoinUsSection } from "@/components/join-us-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <BrandsSection />
      <ServicesSection />
      <ProvenResultsSection />
      <JoinUsSection />
      <WhyChooseUsSection />
      <ContactSection />
    </div>
  )
}
