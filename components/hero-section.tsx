"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useGsapAnimations } from "@/hooks/use-gsap-animations"
import { gsap } from "gsap"

export function HeroSection() {
  const { elementRef: textRef, slideInFromLeft, scaleIn, float } = useGsapAnimations()
  // Use slideInFromLeft for buttons
  const { elementRef: buttonRef, slideInFromLeft: slideInButtons } = useGsapAnimations()
  const { elementRef: imageRef, float: floatImage } = useGsapAnimations()

  useEffect(() => {
    // Initial page load animations
    gsap.set(".hero-content", { opacity: 0, y: 50 })
    gsap.set(".hero-buttons", { opacity: 0, x: -100 })
    gsap.set(".hero-image", { opacity: 0, x: 100, rotation: 15 })

    // Staggered entrance animation
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

    // Start floating animations after entrance
    setTimeout(() => {
      floatImage(0)
    }, 2000)

  }, [])

  useEffect(() => {
    // Scroll-triggered animations
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
              <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl p-8 backdrop-blur-sm border border-primary/20 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-primary/30 rounded-full flex items-center justify-center mx-auto">
                      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div className="space-y-2">
                      <div className="w-32 h-3 bg-primary/30 rounded-full mx-auto"></div>
                      <div className="w-24 h-3 bg-secondary/30 rounded-full mx-auto"></div>
                      <div className="w-28 h-3 bg-accent/30 rounded-full mx-auto"></div>
                    </div>
                  </div>
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
  const [form, setForm] = useState({ name: "", email: "", contact: "", brand: "", budget: "" })
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Store user type and navigate to contact
    localStorage.setItem('userType', 'brand')
    localStorage.setItem('brandFormData', JSON.stringify(form))
    
    // Navigate to contact section
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
  
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
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="brand-name">Name</Label>
            <Input id="brand-name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="Your Name" required />
          </div>
          <div>
            <Label htmlFor="brand-email">Email</Label>
            <Input id="brand-email" type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder="Email" required />
          </div>
          <div>
            <Label htmlFor="brand-contact">Contact</Label>
            <Input id="brand-contact" value={form.contact} onChange={e => setForm(f => ({ ...f, contact: e.target.value }))} placeholder="Contact Number" required />
          </div>
          <div>
            <Label htmlFor="brand-brand">Brand Name</Label>
            <Input id="brand-brand" value={form.brand} onChange={e => setForm(f => ({ ...f, brand: e.target.value }))} placeholder="Brand Name" required />
          </div>
          <div>
            <Label htmlFor="brand-budget">Budget</Label>
            <Input id="brand-budget" value={form.budget} onChange={e => setForm(f => ({ ...f, budget: e.target.value }))} placeholder="Budget" required />
          </div>
          <DialogFooter>
            <Button type="submit" className="animate-pulse">Submit</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

function InfluencerDialog() {
  const [form, setForm] = useState({ name: "", email: "", contact: "", handle: "", niche: "", followers: "" })
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Store user type and navigate to contact
    localStorage.setItem('userType', 'influencer')
    localStorage.setItem('influencerFormData', JSON.stringify(form))
    
    // Navigate to contact section
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
  
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
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="influencer-name">Name</Label>
            <Input id="influencer-name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="Your Name" required />
          </div>
          <div>
            <Label htmlFor="influencer-email">Email</Label>
            <Input id="influencer-email" type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder="Email" required />
          </div>
          <div>
            <Label htmlFor="influencer-contact">Contact</Label>
            <Input id="influencer-contact" value={form.contact} onChange={e => setForm(f => ({ ...f, contact: e.target.value }))} placeholder="Contact Number" required />
          </div>
          <div>
            <Label htmlFor="influencer-handle">Social Media Handle</Label>
            <Input id="influencer-handle" value={form.handle} onChange={e => setForm(f => ({ ...f, handle: e.target.value }))} placeholder="@handle" required />
          </div>
          <div>
            <Label htmlFor="influencer-niche">Niche</Label>
            <Input id="influencer-niche" value={form.niche} onChange={e => setForm(f => ({ ...f, niche: e.target.value }))} placeholder="Niche" required />
          </div>
          <div>
            <Label htmlFor="influencer-followers">Followers</Label>
            <Input id="influencer-followers" value={form.followers} onChange={e => setForm(f => ({ ...f, followers: e.target.value }))} placeholder="Followers" required />
          </div>
          <DialogFooter>
            <Button type="submit" className="animate-pulse">Submit</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}