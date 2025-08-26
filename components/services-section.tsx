"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
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
      description:
        "Build your brand through tutorials, reviews, and storytelling that builds lasting impact with your audience.",
      icon: Youtube,
      stats: "150M+ Views",
      color: "bg-red-50 border-red-200",
      iconColor: "text-red-500",
      platforms: [
        { name: "Long-form Content", icon: Youtube, color: "text-red-500" },
        { name: "Shorts & Reels", icon: Camera, color: "text-purple-500" },
        { name: "Live Streaming", icon: TrendingUp, color: "text-blue-500" },
        { name: "Community Building", icon: Megaphone, color: "text-orange-500" },
      ],
    },
    {
      title: "Instagram Marketing",
      description:
        "Create authentic brand connections and showcase posts for authentic brand connections and engagement.",
      icon: Instagram,
      stats: "7M+ Followers",
      color: "bg-pink-50 border-pink-200",
      iconColor: "text-pink-500",
      platforms: [
        { name: "Feed Posts", icon: Instagram, color: "text-pink-500" },
        { name: "Stories & Highlights", icon: Camera, color: "text-purple-500" },
        { name: "Reels Creation", icon: TrendingUp, color: "text-blue-500" },
        { name: "IGTV Content", icon: Youtube, color: "text-red-500" },
      ],
    },
    {
      title: "LinkedIn Marketing",
      description:
        "Leverage industry influencers for enhanced credibility and B2B growth through professional networking.",
      icon: Linkedin,
      stats: "200M+ Reach",
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-500",
      platforms: [
        { name: "Professional Content", icon: Linkedin, color: "text-blue-500" },
        { name: "Industry Insights", icon: BarChart3, color: "text-green-500" },
        { name: "Thought Leadership", icon: Megaphone, color: "text-orange-500" },
        { name: "B2B Networking", icon: TrendingUp, color: "text-purple-500" },
      ],
    },
    {
      title: "TikTok Marketing",
      description:
        "Viral short-form content creation with trending challenges and authentic brand storytelling for maximum reach.",
      icon: TrendingUp,
      stats: "40M+ Views",
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-500",
      platforms: [
        { name: "Viral Challenges", icon: TrendingUp, color: "text-purple-500" },
        { name: "Brand Storytelling", icon: Camera, color: "text-pink-500" },
        { name: "Trend Analysis", icon: BarChart3, color: "text-green-500" },
        { name: "Community Engagement", icon: MessageCircle, color: "text-blue-500" },
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
            We specialize in influencer marketing across Instagram, YouTube, LinkedIn and WhatsApp, providing end-to-end
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
                    <div className="text-sm text-muted-foreground">Total Reach</div>
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
                <Button
                  className={`w-full ${service.iconColor.replace("text-", "bg-").replace("-500", "-500")} text-black hover:opacity-90 transition-all duration-300 group-hover:scale-105 hover:text-amber-50`}
                  style={{ transform: hoveredCard === index ? "translateZ(15px)" : "translateZ(0px)" }}
                >
                  Explore {service.title.split(" ")[0]} Solutions
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
