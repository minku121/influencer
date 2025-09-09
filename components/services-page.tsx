"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { 
  Youtube, 
  Instagram, 
  Linkedin, 
  MessageCircle, 
  Camera, 
  TrendingUp, 
  BarChart3, 
  Megaphone,
  Users,
  Target,
  Zap,
  CheckCircle,
  ArrowRight
} from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"
import UnifiedForm from "./unified-form"

const services = [
  {
    title: "YouTube Marketing",
    icon: Youtube,
    iconColor: "text-red-500",
    bgColor: "from-red-50 to-pink-50",
    borderColor: "border-red-200",
    description: "Turn viewers into loyal subscribers & customers with authentic video storytelling.",
    stats: "150M+ Views | 7M+ Engagements",
    features: ["Long-form tutorials", "Product reviews", "Brand storytelling", "Live streaming"],
    caseStudy: "YouTube Campaign for Coding Ninjas generated 10M+ views & 50k+ student sign-ups in 3 months."
  },
  {
    title: "Instagram Marketing",
    icon: Instagram,
    iconColor: "text-pink-500",
    bgColor: "from-pink-50 to-rose-50",
    borderColor: "border-pink-200",
    description: "Transform your brand presence with engaging Stories, Reels & shoppable content.",
    stats: "1B+ Content Views | 60M+ Engagements",
    features: ["Stories & Highlights", "Reels creation", "Shoppable posts", "IGTV content"],
    caseStudy: "Instagram Reels for an EdTech startup drove 3x engagement vs traditional ads."
  },
  {
    title: "LinkedIn Marketing",
    icon: Linkedin,
    iconColor: "text-blue-500",
    bgColor: "from-blue-50 to-indigo-50",
    borderColor: "border-blue-200",
    description: "Build B2B credibility and generate qualified leads through professional influence.",
    stats: "200M+ Impressions | 4.5M+ Engagements",
    features: ["Professional content", "Thought leadership", "Industry insights", "B2B networking"],
    caseStudy: "LinkedIn campaign for a SaaS company achieved 5x higher lead quality than paid ads."
  },
  {
    title: "Telegram Marketing",
    icon: MessageCircle,
    iconColor: "text-teal-500",
    bgColor: "from-teal-50 to-cyan-50",
    borderColor: "border-teal-200",
    description: "Build engaged communities and drive direct conversions through personalized messaging.",
    stats: "100M+ Views | 5M+ Leads",
    features: ["Direct engagement", "Community building", "Channel management", "Lead generation"],
    caseStudy: "Telegram community for a finance app grew to 50k+ active members in 6 months."
  },
  {
    title: "WhatsApp Marketing",
    icon: MessageCircle,
    iconColor: "text-green-500",
    bgColor: "from-green-50 to-emerald-50",
    borderColor: "border-green-200",
    description: "Drive personalized engagement and high-converting conversations at scale.",
    stats: "350M+ Members | 8M+ Leads",
    features: ["Personalized broadcast", "Group engagement", "Direct messaging", "Lead generation"],
    caseStudy: "WhatsApp campaign for a lifestyle brand achieved 85% open rate and 40% conversion."
  }
]

const otherServices = [
  {
    title: "Content Creation",
    icon: Camera,
    description: "Authentic videos, posts & campaigns showcasing real stories.",
    color: "from-blue-50 to-indigo-50"
  },
  {
    title: "CPL (Cost Per Lead)",
    icon: TrendingUp,
    description: "Pay only for qualified leads that convert.",
    color: "from-green-50 to-emerald-50"
  },
  {
    title: "CPI (Cost Per Install)",
    icon: BarChart3,
    description: "Pay per app install with guaranteed results.",
    color: "from-purple-50 to-violet-50"
  },
  {
    title: "CPA (Cost Per Action)",
    icon: Target,
    description: "Pay for sign-ups, purchases, or clicks.",
    color: "from-orange-50 to-amber-50"
  },
  {
    title: "CPS (Cost Per Sale)",
    icon: CheckCircle,
    description: "Pay only for actual sales generated.",
    color: "from-red-50 to-rose-50"
  },
  {
    title: "Social Media Management",
    icon: Megaphone,
    description: "Content creation, scheduling & analytics.",
    color: "from-teal-50 to-cyan-50"
  }
]

const differentiators = [
  {
    icon: BarChart3,
    title: "Data-Driven Campaigns",
    description: "We optimize every campaign for maximum ROI.",
    color: "text-blue-600"
  },
  {
    icon: Users,
    title: "Wide Network",
    description: "Access to 55,000+ influencers across niches.",
    color: "text-green-600"
  },
  {
    icon: Target,
    title: "Targeted Reach",
    description: "Connect only with your ideal audience.",
    color: "text-purple-600"
  },
  {
    icon: Zap,
    title: "End-to-End Management",
    description: "From strategy to execution to tracking.",
    color: "text-orange-600"
  }
]

export function ServicesPage() {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  const handleServiceClick = (serviceTitle: string) => {
    // Navigate to contact section or open contact form
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
    // You can also store the selected service in localStorage or state for the contact form
    localStorage.setItem('selectedService', serviceTitle)
  }

  const handleLearnMore = (serviceTitle: string) => {
    // Navigate to services page or open detailed service modal
    router.push('/services')
    // Store the service for detailed view
    localStorage.setItem('selectedService', serviceTitle)
  }

  const handleStartCampaign = () => {
    setOpen(true)
  }

  const handleScheduleCall = () => {
    const phone = "+919767765725"
    const text = encodeURIComponent("I want to schedule a call.")
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank")
  }

  const handleContactForm = () => {
    // Navigate to contact section
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Start Your Campaign</DialogTitle>
          </DialogHeader>
          <UnifiedForm defaultIntent="start" submitLabel="Submit" onSubmitted={() => setOpen(false)} />
        </DialogContent>
      </Dialog>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Our Influencer Marketing Services
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            At Influnzo, we provide 360° influencer marketing solutions designed to boost your brand visibility, generate qualified leads, and drive measurable results.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid lg:grid-cols-2 gap-8">
      {services.map((service, index) => (
        <Card
          key={service.title}
          className={`group cursor-pointer border-2 transition-all duration-500 hover:shadow-xl hover:scale-105 bg-gradient-to-br ${service.bgColor} ${service.borderColor}`}
        >
          <CardHeader className="pb-4">
            {/* Icon + Badge Row */}
            <div className="flex items-start justify-between mb-4 gap-4">
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-white/80 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shrink-0">
                <service.icon className={`w-8 h-8 ${service.iconColor}`} />
              </div>

              {/* Badge */}
              <Badge
                variant="secondary"
                className="text-sm font-medium whitespace-normal break-words px-3 py-1 max-w-[200px] text-center"
              >
                {service.stats}
              </Badge>
            </div>

            {/* Title */}
            <CardTitle className="text-2xl font-bold text-foreground mb-3">
              {service.title}
            </CardTitle>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed text-base mb-4">
              {service.description}
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              {service.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  {feature}
                </div>
              ))}
            </div>

            {/* Case Study */}
            <div className="bg-white/60 rounded-lg p-3 mb-4">
              <p className="text-sm text-muted-foreground italic">
                💡 {service.caseStudy}
              </p>
            </div>
          </CardHeader>

          {/* CTA Button */}
          <CardContent>
            <Button
              onClick={() => handleServiceClick(service.title)}
              className={`w-full font-semibold py-6 text-lg rounded-xl transition-all duration-300 group-hover:scale-105 hover:shadow-xl ${
                service.title === "YouTube Marketing"
                  ? "bg-red-500 hover:bg-red-600 text-white"
                  : service.title === "Instagram Marketing"
                  ? "bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white"
                  : service.title === "LinkedIn Marketing"
                  ? "bg-blue-500 hover:bg-blue-600 text-white"
                  : service.title === "Telegram Marketing"
                  ? "bg-teal-500 hover:bg-teal-600 text-white"
                  : "bg-green-500 hover:bg-green-600 text-white"
              }`}
            >
              Explore {service.title.split(" ")[0]} Solutions
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>


      {/* Other Services */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Additional Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions beyond platform-specific marketing
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherServices.map((service, index) => (
              <Card 
                key={service.title}
                className={`group cursor-pointer border-2 transition-all duration-300 hover:shadow-lg hover:scale-105 bg-gradient-to-br ${service.color}`}
              >
                <CardHeader className="pb-3">
                  <div className={`w-12 h-12 rounded-xl bg-white/80 flex items-center justify-center mb-3 group-hover:scale-110 transition-all duration-300`}>
                    <service.icon className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  {/* Learn More removed per request */}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Influnzo */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Why Choose Influnzo</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We stand out from the competition with our proven approach and results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentiators.map((item, index) => (
              <Card 
                key={item.title}
                className="text-center border-0 bg-gradient-to-br from-background to-muted/20 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className={`w-16 h-16 ${item.color.replace("text-", "bg-").replace("-600", "-100")} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <item.icon className={`w-8 h-8 ${item.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Scale Your Brand?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join 100+ brands that trust Influnzo to drive their influencer marketing success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleStartCampaign}
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-full"
            >
              Start Your Campaign
            </Button>
            <Button 
              onClick={handleScheduleCall}
              variant="outline" 
              size="lg" 
              className="border-2 border-primary text-purple-500 hover:bg-primary hover:text-purple px-8 py-6 text-lg font-semibold rounded-full"
            >
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
