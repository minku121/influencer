"use client"

import { Instagram, Youtube, Linkedin, MessageCircle, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/influnzo", label: "Instagram" },
  ]

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  const services = [
    "YouTube Marketing", 
    "Instagram Marketing", 
    "LinkedIn Marketing", 
    "Telegram Marketing", 
    "WhatsApp Marketing",
    "Content Creation",
    "Social Media Management"
  ]

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center">
              <Image 
                src="/logo.png" 
                alt="Influnzo Logo" 
                width={40} 
                height={40} 
                className="w-30 h-15 object-contain"
              />
             
            </div>
            <p className="text-background/80 leading-relaxed">
              Your trusted partner in influencer marketing for the coding and tech industry. We connect brands with 55,000+ influencers to drive measurable results.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300 hover:scale-110 group"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-5 h-5 text-background group-hover:text-primary-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a 
                    href="/services" 
                    className="text-background/80 hover:text-primary transition-colors duration-300 cursor-pointer hover:translate-x-1 inline-block"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-background/80">Contact@influnzo.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-background/80">+91 9767765725 (Also available on WhatsApp)</span>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-6 pt-6 border-t border-background/20">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-primary font-bold">100+</div>
                  <div className="text-background/60">Brands</div>
                </div>
                <div>
                  <div className="text-primary font-bold">55K+</div>
                  <div className="text-background/60">Influencers</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">© 2025 Influnzo. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-background/60 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-background/60 hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-background/60 hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
