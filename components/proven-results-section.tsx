"use client"

import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Rocket } from "lucide-react"

const stats = [
  {
    icon: "📈",
    title: "100+ Brands Onboarded",
    description: "Across EdTech, SaaS, Finance & Lifestyle",
    color: "from-blue-50 to-indigo-50",
    borderColor: "border-blue-200",
    iconColor: "text-blue-600"
  },
  {
    icon: "🤝",
    title: "55,000+ Influencers Collaborated",
    description: "From micro-influencers to top creators worldwide",
    color: "from-green-50 to-emerald-50",
    borderColor: "border-green-200",
    iconColor: "text-green-600"
  },
  {
    icon: "🚀",
    title: "25M+ Leads Generated",
    description: "Helping brands achieve scalable growth & ROI",
    color: "from-purple-50 to-violet-50",
    borderColor: "border-purple-200",
    iconColor: "text-purple-600"
  }
]

export function ProvenResultsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Driving Measurable Impact for Our Partners
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className={`group cursor-pointer border-2 transition-all duration-500 hover:shadow-xl hover:scale-105 bg-gradient-to-br ${stat.color} ${stat.borderColor}`}
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {stat.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
