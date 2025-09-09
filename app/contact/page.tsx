"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, MessageCircle, Instagram } from "lucide-react"
import { useGsapAnimations } from "@/hooks/use-gsap-animations"
import UnifiedForm from "@/components/unified-form"

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    userType: ""
  })

  const { elementRef: formRef, slideInFromLeft } = useGsapAnimations()
  const { elementRef: infoRef, slideInFromRight } = useGsapAnimations()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", form)
    alert("Thank you for your message! We'll get back to you soon.")
    setForm({ name: "", email: "", phone: "", company: "", message: "", userType: "" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your influencer marketing journey? Let's connect and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div ref={formRef}>
            <Card className="shadow-2xl border-0 bg-background/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <UnifiedForm submitLabel="Send Message" />
              </CardContent>
            </Card>
          </div>

          <div ref={infoRef} className="space-y-8">
            <Card className="shadow-2xl border-0 bg-background/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
                <CardDescription>
                  Reach out to us through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-primary/10 rounded-lg">
                  <Mail className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">Contact@influnzo.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-primary/10 rounded-lg">
                  <Phone className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Phone & WhatsApp</h3>
                    <p className="text-muted-foreground">+91 9767765725</p>
                    <p className="text-sm text-muted-foreground">Available on WhatsApp for quick responses</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-primary/10 rounded-lg">
                  <Instagram className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Instagram</h3>
                    <p className="text-muted-foreground">@influnzo</p>
                    <p className="text-sm text-muted-foreground">Follow us for updates and inspiration</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-2xl border-0 bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Why Choose Influnzo?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">55,000+ Influencers</h4>
                    <p className="text-sm text-muted-foreground">Access to a vast network of verified influencers</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">100+ Successful Brands</h4>
                    <p className="text-sm text-muted-foreground">Trusted by leading companies across industries</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">24/7 Support</h4>
                    <p className="text-sm text-muted-foreground">Round-the-clock assistance for your campaigns</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Multi-Platform Expertise</h4>
                    <p className="text-sm text-muted-foreground">Instagram, YouTube, LinkedIn, Telegram & WhatsApp</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-lg border-0 bg-background/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>How quickly can you start a campaign?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We can typically start campaigns within 1-2 weeks of project approval, depending on the scope and influencer availability.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-background/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>What's your minimum budget requirement?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our campaigns start from ₹50,000, but we recommend discussing your specific goals for a tailored budget recommendation.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-background/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Do you work with international brands?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes! We work with brands from around the world, focusing on the Indian market and Indian influencers.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-background/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>How do you measure campaign success?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We provide comprehensive analytics including reach, engagement, conversions, and ROI tracking for all campaigns.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
