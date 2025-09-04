import { AboutPage } from "@/components/about-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Influnzo’s mission helping tech brands grow with influencer marketing and data-driven campaigns.",
  alternates: { canonical: "/about" },
}

export default function About() {
  return <AboutPage />
}
