"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Instagram, Youtube, MessageCircle, Linkedin, TrendingUp, Camera, Megaphone, BarChart3 } from "lucide-react"
import { useState, useEffect, useRef } from "react"

export function ServicesSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleMouseMove = (e: React.MouseEvent, cardIndex: number) => {
    const card = e.currentTarget as HTMLElement
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = (y - centerY) / 25
    const rotateY = (centerX - x) / 25

    setMousePosition({ x: rotateY, y: rotateX })
    setHoveredCard(cardIndex)
  }

  const handleMouseLeave = () => {
    setHoveredCard(null)
    setMousePosition({ x: 0, y: 0 })
  }

  const services = [
    {
      title: "YouTube Marketing",
      description: "Long-form tutorials, reviews & storytelling",
      icon: Youtube,
      stats: "150M+ Views | 7M+ Engagements",
      color: "bg-red-50 border-red-200",
      iconColor: "text-red-500",
      platforms: [
        { name: "Long-form Content", icon: Youtube, color: "text-red-500" },
        { name: "Tutorials", icon: Camera, color: "text-purple-500" },
        { name: "Reviews", icon: TrendingUp, color: "text-blue-500" },
        { name: "Storytelling", icon: Megaphone, color: "text-orange-500" },
      ],
    },
    {
      title: "Instagram Marketing",
      description: "Stories, Reels & shoppable posts",
      icon: Instagram,
      stats: "1000M+ Views | 60M+ Engagements",
      color: "bg-pink-50 border-pink-200",
      iconColor: "text-pink-500",
      platforms: [
        { name: "Stories", icon: Instagram, color: "text-pink-500" },
        { name: "Reels", icon: Camera, color: "text-purple-500" },
        { name: "Shoppable Posts", icon: TrendingUp, color: "text-blue-500" },
        { name: "Feed Content", icon: Megaphone, color: "text-orange-500" },
      ],
    },
    {
      title: "LinkedIn Marketing",
      description: "Professional influence for B2B credibility",
      icon: Linkedin,
      stats: "200M+ Impressions | 4.5M+ Engagements",
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-500",
      platforms: [
        { name: "Professional Content", icon: Linkedin, color: "text-blue-500" },
        { name: "B2B Credibility", icon: BarChart3, color: "text-green-500" },
        { name: "Thought Leadership", icon: Megaphone, color: "text-orange-500" },
        { name: "Industry Networking", icon: TrendingUp, color: "text-purple-500" },
      ],
    },
    {
      title: "Telegram Marketing",
      description: "Direct engagement & community building",
      icon: MessageCircle,
      stats: "100M+ Views | 5M+ Leads",
      color: "bg-teal-50 border-teal-200",
      iconColor: "text-teal-500",
      platforms: [
        { name: "Direct Engagement", icon: MessageCircle, color: "text-teal-500" },
        { name: "Community Building", icon: Megaphone, color: "text-orange-500" },
        { name: "Channel Management", icon: TrendingUp, color: "text-blue-500" },
        { name: "Lead Generation", icon: BarChart3, color: "text-green-500" },
      ],
    },
    {
      title: "WhatsApp Marketing",
      description: "Personalized broadcast & group engagement",
      icon: MessageCircle,
      stats: "350M+ Members | 8M+ Leads",
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-500",
      platforms: [
        { name: "Personalized Broadcast", icon: MessageCircle, color: "text-green-500" },
        { name: "Group Engagement", icon: Megaphone, color: "text-orange-500" },
        { name: "Direct Messaging", icon: TrendingUp, color: "text-blue-500" },
        { name: "Lead Generation", icon: BarChart3, color: "text-green-500" },
      ],
    },
  ]

  return (
    <section ref={sectionRef} id="services" className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-primary font-semibold mb-4">
            <TrendingUp className="w-5 h-5" />
            <span>Our Influencer Marketing Services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Platform-Specific Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We specialize in influencer marketing across YouTube, Instagram, LinkedIn, Telegram and WhatsApp, providing end-to-end
            influencer marketing solutions, including campaign strategy, influencer selections, content creation, and
            performance tracking.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={`group cursor-pointer border-2 transition-all duration-500 ease-out transform-gpu ${
                service.color
              } ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } hover:shadow-xl hover:scale-[1.02]`}
              style={{
                animationDelay: `${index * 0.15}s`,
                transform:
                  hoveredCard === index
                    ? `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg) translateZ(10px)`
                    : "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)",
                transformStyle: "preserve-3d",
                transition:
                  hoveredCard === index ? "transform 0.2s ease-out, box-shadow 0.3s ease-out" : "all 0.5s ease-out",
              }}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={handleMouseLeave}
            >
              <CardHeader className="pb-4" style={{ transform: "translateZ(15px)" }}>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center ${service.color} group-hover:scale-110 transition-all duration-300`}
                  >
                    <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-foreground">{service.stats}</div>
                    
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-foreground mb-3">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent style={{ transform: "translateZ(10px)" }}>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {service.platforms.map((platform, platformIndex) => (
                    <div
                      key={platform.name}
                      className={`flex items-center gap-3 p-3 rounded-xl bg-white/80 hover:bg-white transition-all duration-300 group/platform transform ${
                        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                      }`}
                      style={{
                        animationDelay: `${index * 0.15 + platformIndex * 0.05}s`,
                        transform: hoveredCard === index ? "translateZ(5px)" : "translateZ(0px)",
                      }}
                    >
                      <platform.icon
                        className={`w-5 h-5 ${platform.color} group-hover/platform:scale-110 transition-all duration-300`}
                      />
                      <span className="text-sm font-medium text-foreground">{platform.name}</span>
                    </div>
                  ))}
                </div>
                {/* Button removed per request */}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Services Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Other Services</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions beyond platform-specific marketing
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="group cursor-pointer border-2 transition-all duration-300 hover:shadow-lg hover:scale-105 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-3 group-hover:scale-110 transition-all duration-300">
                  <Camera className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg font-semibold text-foreground">Content Creation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                  Authentic videos, posts & campaigns showcasing real stories.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer border-2 transition-all duration-300 hover:shadow-lg hover:scale-105 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-3 group-hover:scale-110 transition-all duration-300">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-lg font-semibold text-foreground">CPL (Cost Per Lead)</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                  Pay for qualified leads.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer border-2 transition-all duration-300 hover:shadow-lg hover:scale-105 bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-3 group-hover:scale-110 transition-all duration-300">
                  <BarChart3 className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg font-semibold text-foreground">CPI (Cost Per Install)</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                  Pay per app install.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer border-2 transition-all duration-300 hover:shadow-lg hover:scale-105 bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-3 group-hover:scale-110 transition-all duration-300">
                  <TrendingUp className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-lg font-semibold text-foreground">CPA (Cost Per Action)</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                  Pay for sign-ups/purchases/clicks.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer border-2 transition-all duration-300 hover:shadow-lg hover:scale-105 bg-gradient-to-br from-red-50 to-rose-50 border-red-200">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-3 group-hover:scale-110 transition-all duration-300">
                  <BarChart3 className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle className="text-lg font-semibold text-foreground">CPS (Cost Per Sale)</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                  Pay only for actual sales.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer border-2 transition-all duration-300 hover:shadow-lg hover:scale-105 bg-gradient-to-br from-teal-50 to-cyan-50 border-teal-200">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center mb-3 group-hover:scale-110 transition-all duration-300">
                  <Megaphone className="w-6 h-6 text-teal-600" />
                </div>
                <CardTitle className="text-lg font-semibold text-foreground">Social Media Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                  Content creation, scheduling & analytics.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
