"use client"

import { Button } from "@/components/ui/button"
import { Instagram, MessageCircle, Play } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-primary/10 via-secondary/5 to-background flex items-center justify-center overflow-hidden"
    >
      {/* wrapper ensures no horizontal scroll */}
      <div className="w-full max-w-7xl mx-auto px-4 py-20 overflow-hidden">
        <div className="bg-card/95 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-border/20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side */}
            <div className="space-y-8 animate-fade-in-up">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Hey! I'm ...,
                <span className="block text-4xl lg:text-5xl font-black mt-2">A Beauty And</span>
                <span className="block text-4xl lg:text-5xl font-black">Social Media</span>
                <span className="block text-4xl lg:text-5xl font-black">Influencer</span>
              </h1>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
                >
                  Follow Me
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 bg-transparent"
                >
                  Contact Me
                </Button>
              </div>

              <div className="pt-8">
                <div className="grid grid-cols-3 gap-8 opacity-60">
                  <div className="text-2xl font-bold text-muted-foreground">HubSpot</div>
                  <div className="text-2xl font-bold text-muted-foreground">bubble</div>
                  <div className="text-2xl font-bold text-muted-foreground italic">Canva</div>
                  <div className="text-2xl font-bold text-muted-foreground">dokey.</div>
                  <div className="text-2xl font-bold text-muted-foreground italic">Voiceflow</div>
                  <div className="text-2xl font-bold text-muted-foreground">stripe</div>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="relative flex justify-center items-center ">
              <div className="relative">
                {/* Circular photo */}
                <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                  <div className="absolute inset-4 rounded-full overflow-hidden bg-white shadow-2xl">
                    <Image
                      src="/professional-influencer-portrait.png"
                      alt="Arwa - Beauty and Social Media Influencer"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 border-4 border-white rounded-full"></div>
                  <div className="absolute -inset-2 border-2 border-white/50 rounded-full"></div>
                </div>

                {/* Floating icons - clipped inside wrapper to avoid scroll */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center animate-social-float">
                  <Instagram className="w-8 h-8 text-pink-500" />
                </div>
                <div
                  className="absolute top-20 -right-8 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center animate-social-float"
                  style={{ animationDelay: "1s" }}
                >
                  <Play className="w-6 h-6 text-purple-600" />
                </div>
                <div
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center animate-social-float"
                  style={{ animationDelay: "2s" }}
                >
                  <MessageCircle className="w-8 h-8 text-black" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
