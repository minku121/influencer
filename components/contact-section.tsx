"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send, MessageCircle, Instagram } from "lucide-react"
import UnifiedForm from "./unified-form"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  })

  const [selectedService, setSelectedService] = useState("")
  const [campaignIntent, setCampaignIntent] = useState("")

  
  useEffect(() => {
    const service = localStorage.getItem('selectedService')
    const intent = localStorage.getItem('campaignIntent')
    if (service) setSelectedService(service)
    if (intent) setCampaignIntent(intent)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
   
    const submissionData = {
      ...formData,
      selectedService,
      campaignIntent,
      timestamp: new Date().toISOString()
    }
    
   
    console.log("Form submitted:", submissionData)
    
    
    alert("Thank you for your message! We'll get back to you within 24 hours.")
    
   
    setFormData({ name: "", email: "", contact: "", message: "" })
    localStorage.removeItem('selectedService')
    localStorage.removeItem('campaignIntent')
    setSelectedService("")
    setCampaignIntent("")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  
  useEffect(() => {
    if (selectedService && campaignIntent) {
      let defaultMessage = `Hi, I'm interested in your ${selectedService} services. `
      if (campaignIntent === 'start') {
        defaultMessage += "I'd like to start a campaign and would love to discuss how we can work together."
      } else if (campaignIntent === 'call') {
        defaultMessage += "I'd like to schedule a call to discuss my requirements in detail."
      } else {
        defaultMessage += "Please provide more information about your services."
      }
      setFormData(prev => ({ ...prev, message: defaultMessage }))
    }
  }, [selectedService, campaignIntent])

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-primary font-semibold mb-4">
            <MessageCircle className="w-5 h-5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Get in Touch with Influnzo</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to elevate your brand? We'd love to hear about your project and discuss how we can help you achieve
            your digital marketing goals.
          </p>
          {selectedService && (
            <div className="mt-4 p-3 bg-primary/10 rounded-lg inline-block">
              
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
        
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Email</div>
                    <div className="text-muted-foreground">Contact@influnzo.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Phone</div>
                    <div className="text-muted-foreground">+91 9767765725</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">WhatsApp</div>
                    <div className="text-muted-foreground">Quick chat available</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Follow Us</h4>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full border-2 border-pink-200 text-pink-600 hover:bg-pink-50 hover:border-pink-300 transition-all duration-300"
                onClick={() => window.open('https://instagram.com/influnzo', '_blank')}
              >
                <Instagram className="w-5 h-5 mr-2" />
                Follow on Instagram
              </Button>
            </div>

            {/* Response Time */}
            <Card className="border-0 bg-gradient-bg">
              <CardContent className="p-6">
                <h4 className="font-bold text-foreground mb-2">Quick Response Guarantee</h4>
                <p className="text-muted-foreground">
                  We typically respond to all inquiries within 24 hours. For urgent matters, don't hesitate to call us
                  directly.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form (Unified) */}
          <Card className="border-0 bg-background/80 backdrop-blur-sm shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <UnifiedForm submitLabel="Send Message" />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
