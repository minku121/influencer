"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useGsapAnimations } from "@/hooks/use-gsap-animations"
import { gsap } from "gsap"
import Image from "next/image"
import UnifiedForm from "./unified-form"

export function HeroSection() {

  const { elementRef: textRef, slideInFromLeft, scaleIn, float } = useGsapAnimations()
  const { elementRef: buttonRef, slideInFromLeft: slideInButtons } = useGsapAnimations()
  const { elementRef: imageRef, float: floatImage } = useGsapAnimations()

  useEffect(() => {
  
    gsap.set(".hero-content", { opacity: 0, y: 50 })
    gsap.set(".hero-buttons", { opacity: 0, x: -100 })
    gsap.set(".hero-image", { opacity: 0, x: 100, rotation: 15 })
    gsap.set(".girl-photo", { opacity: 0, y: 60 })
    gsap.set(".brand-badge", { opacity: 0, scale: 0.8, y: 20 })

    
    const tl = gsap.timeline()
    
    tl.to(".hero-content", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out"
    })
    .to(".hero-buttons", {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.3")
    .to(".hero-image", {
      opacity: 1,
      x: 0,
      rotation: 0,
      duration: 1.2,
      ease: "power2.out"
    }, "-=0.5")
    .to(".girl-photo", {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: "power2.out"
    }, "-=0.6")
    .to(".brand-badge", {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.6,
      ease: "back.out(1.7)"
    }, "-=0.5")

    
    setTimeout(() => {
      floatImage(0)
    }, 2000)

  }, [])

  useEffect(() => {
   
    slideInFromLeft(0, 0.2)
    slideInButtons(0.5, 0.15)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-accent/10 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="hero-content space-y-8 text-center lg:text-left">
            <div ref={textRef} className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Connecting Brands with the Right Influencers
              </h1>
              <p className="text-lg lg:text-2xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
                At Influnzo, we create powerful influencer campaigns across Instagram, YouTube, LinkedIn, Telegram & WhatsApp.
              </p>
            </div>
            
            <div ref={buttonRef} className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* Brand Dialog */}
              <BrandDialog />
              {/* Influencer Dialog */}
              <InfluencerDialog />
            </div>
          </div>

          {/* Right Side - Hero Image */}
          <div ref={imageRef} className="hero-image flex justify-center lg:justify-end">
            <div className="relative">
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-2xl border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10">
                <Image 
                  src="/hero_img.png" 
                  alt="Influencer" 
                  fill 
                  className="object-cover girl-photo"
                  priority
                />
              </div>

              {/* Animated circle badge */}
              <div className="brand-badge absolute -top-15 -left-12 w-28 h-28 lg:w-32 lg:h-32 rounded-full bg-primary text-primary-foreground shadow-xl flex items-center justify-center border-4 border-white/60">
                <div className="text-center text-sm lg:text-base font-bold leading-tight">
                  200+<br/>brands
                </div>
              </div>

              {/* Additional circle badge - bottom right */}
              <div className="brand-badge absolute -bottom-12 -right-2 w-28 h-28 lg:w-32 lg:h-32 rounded-full bg-primary text-primary-foreground shadow-xl flex items-center justify-center border-4 border-white/60">
                <div className="text-center text-sm lg:text-base font-bold leading-tight">
                  11k+<br/>influencers
                </div>
              </div>

              {/* Floating elements around the main image */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-yellow-400/20 rounded-full blur-sm animate-bounce" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-pink-400/20 rounded-full blur-sm animate-bounce" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 -right-8 w-8 h-8 bg-blue-400/20 rounded-full blur-sm animate-bounce" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

function BrandDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-110 transform">
          I'm a Brand
        </Button>
      </DialogTrigger>
      <DialogContent className="animate-in zoom-in-95 duration-300">
        <DialogHeader>
          <DialogTitle>Brand Inquiry</DialogTitle>
        </DialogHeader>
        <UnifiedForm defaultUserType="brand" submitLabel="Submit" />
      </DialogContent>
    </Dialog>
  )
}

function InfluencerDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 bg-transparent transform hover:-rotate-1">
          I'm an Influencer
        </Button>
      </DialogTrigger>
      <DialogContent className="animate-in zoom-in-95 duration-300">
        <DialogHeader>
          <DialogTitle>Influencer Inquiry</DialogTitle>
        </DialogHeader>
        <UnifiedForm defaultUserType="influencer" submitLabel="Submit" />
      </DialogContent>
    </Dialog>
  )
}