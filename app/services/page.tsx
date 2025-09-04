import { ServicesPage } from "@/components/services-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Influencer marketing services for tech: strategy, creator sourcing, campaign management, and analytics.",
  alternates: { canonical: "/services" },
}

export default function Services() {
  return <ServicesPage />
}
