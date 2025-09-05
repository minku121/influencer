import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GoogleAnalytics } from "@/components/google-analytics"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: typeof process !== "undefined" && process.env?.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : undefined,
  title: {
    default: "Influnzo – Influencer Marketing for Coding & Tech Industry",
    template: "%s | Influnzo",
  },
  description:
    "Influnzo specializes in influencer marketing for the coding and tech niche. Partner with 55,000+ creators to grow brand awareness and conversions.",
  keywords: [
    "influencer marketing",
    "tech influencers",
    "coding influencers",
    "developer marketing",
    "brand campaigns",
    "creator partnerships",
    "influencer marketing agency",
    "influencer marketing for tech",
    "influencer marketing for coding",
    "influencer marketing for developer",
    "influencer marketing for brand",
    "influencer marketing for creator",
    "influencer marketing for partnership",
    "influencer marketing for growth",
    "influencer marketing for engagement",
    "influencer marketing for sales",
    "influencer marketing for lead generation",
    "influencer marketing for customer acquisition",
    "influencer marketing for customer retention",
    "influencer marketing for customer loyalty",
    "influencer marketing for customer satisfaction",
    "influenecer link building",
    "influenecer link building for website",
    "influenecer link building for blog",
    "influenecer link building for website",
    "social media management",
   
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Influnzo" }],
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Influnzo",
    title: "Influnzo – Influencer Marketing for Coding & Tech Industry",
    description:
      "Influencer marketing agency for the coding and tech niche. Access 55,000+ creators for measurable results.",
    images: [
      {
        url: "/professional-influencer-portrait.png",
        width: 1200,
        height: 630,
        alt: "Influnzo – Influencer Marketing for Tech Brands",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Influnzo – Influencer Marketing for Coding & Tech Industry",
    description:
      "Influencer marketing agency for the coding and tech niche. Access 55,000+ creators for measurable results.",
    images: [
      {
        url: "/professional-influencer-portrait.png",
        alt: "Influnzo – Influencer Marketing for Tech Brands",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "marketing",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} antialiased`} suppressHydrationWarning>
      <body>
        <GoogleAnalytics />
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
