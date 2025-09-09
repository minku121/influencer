"use client"

import { useEffect, useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

type UserType = "brand" | "influencer"
type IntentType = "contact" | "start" | "call" | "whatsapp"

type UnifiedFormProps = {
  defaultUserType?: UserType
  defaultIntent?: IntentType
  defaultService?: string
  onSubmitted?: () => void
  submitLabel?: string
}

const servicesList = [
  "YouTube Marketing",
  "Instagram Marketing",
  "LinkedIn Marketing",
  "Telegram Marketing",
  "WhatsApp Marketing",
  "Content Creation",
  "CPL",
  "CPI",
  "CPA",
  "CPS",
  "Social Media Management",
  "Other"
]

export function UnifiedForm({
  defaultUserType,
  defaultIntent,
  defaultService,
  onSubmitted,
  submitLabel,
}: UnifiedFormProps) {
  const [userType, setUserType] = useState<UserType>(defaultUserType ?? "brand")
  const [intent, setIntent] = useState<IntentType>(defaultIntent ?? "contact")
  const [service, setService] = useState<string>(defaultService ?? "")

  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    companyOrHandle: "",
    budget: "",
    message: "",
  })

  useEffect(() => {
    // Use any previously selected context
    if (!defaultService) {
      const storedService = typeof window !== "undefined" ? localStorage.getItem("selectedService") : null
      if (storedService) setService(storedService)
    }
    if (!defaultIntent) {
      const storedIntent = typeof window !== "undefined" ? localStorage.getItem("campaignIntent") : null
      if (storedIntent === "start" || storedIntent === "call") setIntent(storedIntent)
    }
    const storedUserType = typeof window !== "undefined" ? localStorage.getItem("userType") : null
    if (!defaultUserType && (storedUserType === "brand" || storedUserType === "influencer")) setUserType(storedUserType)
  }, [defaultIntent, defaultService, defaultUserType])

  const messagePlaceholder = useMemo(() => {
    if (intent === "start") return "Tell us about your campaign goals, timeline, and budget..."
    if (intent === "call") return "Share a brief about your needs. We'll schedule a call..."
    if (intent === "whatsapp") return "Optional note before we continue to WhatsApp..."
    return "Tell us about your project and goals..."
  }, [intent])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      // Persist minimal context
      localStorage.setItem("userType", userType)
      if (service) localStorage.setItem("selectedService", service)
      localStorage.setItem("campaignIntent", intent)

      // WhatsApp fast-path
      if (intent === "whatsapp") {
        const phone = "+919767765725"
        const text = encodeURIComponent(
          `${form.name ? form.name + " - " : ""}${userType} interested in ${service || "services"}. ${form.message || "Hi! I'd like to chat on WhatsApp."}`
        )
        window.open(`https://wa.me/${phone}?text=${text}`, "_blank")
        onSubmitted?.()
        return
      }

      // Submit to Getform (same endpoint used elsewhere)
      const formData = new FormData()
      formData.append("name", form.name)
      formData.append("email", form.email)
      formData.append("contact", form.contact)
      formData.append("userType", userType)
      formData.append("intent", intent)
      formData.append("service", service)
      formData.append("companyOrHandle", form.companyOrHandle)
      formData.append("budget", form.budget)
      formData.append("message", form.message)

      const response = await fetch("https://getform.io/f/bxozvrea", {
        method: "POST",
        body: formData,
        mode: "no-cors",
      })
      // Response is opaque with no-cors; assume success UX
      console.log("UnifiedForm submission attempted", { type: (response as any)?.type })
      alert("Thanks! We received your details and will get back soon.")
      onSubmitted?.()
    } catch (error) {
      alert("There was a problem submitting the form. Please try again.")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="uf-name">Name</Label>
          <Input id="uf-name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
        </div>
        <div>
          <Label htmlFor="uf-email">Email</Label>
          <Input id="uf-email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
        </div>
        <div>
          <Label htmlFor="uf-contact">Contact Number</Label>
          <Input id="uf-contact" value={form.contact} onChange={(e) => setForm({ ...form, contact: e.target.value })} required />
        </div>
        <div>
          <Label htmlFor="uf-userType">I am a</Label>
          <select
            id="uf-userType"
            value={userType}
            onChange={(e) => setUserType(e.target.value as UserType)}
            className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="brand">Brand/Company</option>
            <option value="influencer">Influencer/Creator</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="uf-intent">I want to</Label>
          <select
            id="uf-intent"
            value={intent}
            onChange={(e) => setIntent(e.target.value as IntentType)}
            className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="contact">Contact</option>
            <option value="start">Start a campaign</option>
            <option value="call">Schedule a call</option>
            <option value="whatsapp">Chat on WhatsApp</option>
          </select>
        </div>
        <div>
          <Label htmlFor="uf-service">Service</Label>
          <select
            id="uf-service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Select a service</option>
            {servicesList.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="uf-coh">{userType === "brand" ? "Company/Brand" : "Social Handle"}</Label>
          <Input
            id="uf-coh"
            placeholder={userType === "brand" ? "Your company/brand" : "@handle"}
            value={form.companyOrHandle}
            onChange={(e) => setForm({ ...form, companyOrHandle: e.target.value })}
          />
        </div>
        <div>
          <Label htmlFor="uf-budget">Budget (optional)</Label>
          <Input id="uf-budget" value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} />
        </div>
      </div>

      <div>
        <Label htmlFor="uf-message">Message</Label>
        <Textarea
          id="uf-message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder={messagePlaceholder}
          rows={5}
        />
      </div>

      <Button type="submit" className="w-full">
        {submitLabel || (intent === "whatsapp" ? "Continue on WhatsApp" : "Submit")}
      </Button>
    </form>
  )
}

export default UnifiedForm


