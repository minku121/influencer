import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import "./globals.css"

export const metadata: Metadata = {
  title: "Influnzo - Influencer Marketing for Coding & Tech Industry",
  description: "At Influnzo, we specialize in influencer marketing for the coding and tech niche. Connect with 55,000+ influencers to boost your brand visibility and drive measurable results.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} antialiased`} suppressHydrationWarning>
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
