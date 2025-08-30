"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send, MessageCircle, Instagram } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  })

  const [selectedService, setSelectedService] = useState("")
  const [campaignIntent, setCampaignIntent] = useState("")

  // Load selected service and campaign intent from localStorage
  useEffect(() => {
    const service = localStorage.getItem('selectedService')
    const intent = localStorage.getItem('campaignIntent')
    if (service) setSelectedService(service)
    if (intent) setCampaignIntent(intent)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Prepare form data with additional context
    const submissionData = {
      ...formData,
      selectedService,
      campaignIntent,
      timestamp: new Date().toISOString()
    }
    
    // Handle form submission
    console.log("Form submitted:", submissionData)
    
    // You can add API call here to send data to your backend
    // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(submissionData) })
    
    // Show success message (you can implement a toast notification here)
    alert("Thank you for your message! We'll get back to you within 24 hours.")
    
    // Clear form and localStorage
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

  // Pre-fill message based on selected service and campaign intent
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
              <p className="text-primary font-medium">
                Selected Service: <span className="font-bold">{selectedService}</span>
              </p>
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
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

          {/* Contact Form */}
          <Card className="border-0 bg-background/80 backdrop-blur-sm shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-medium">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="border-border focus:border-primary focus:ring-primary/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="border-border focus:border-primary focus:ring-primary/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact" className="text-foreground font-medium">
                    Contact Number *
                  </Label>
                  <Input
                    id="contact"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    placeholder="Your contact number"
                    required
                    className="border-border focus:border-primary focus:ring-primary/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground font-medium">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project and goals..."
                    rows={5}
                    required
                    className="border-border focus:border-primary focus:ring-primary/20 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                >
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
