"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Handshake, Users, TrendingUp } from "lucide-react"

export function JoinUsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Join Us on Our Journey
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Let's create meaningful partnerships that drive lasting growth together.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center border-0 bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Handshake className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Strategic Partnerships</h3>
              <p className="text-muted-foreground text-sm">
                Build long-term relationships that benefit both parties
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Community Growth</h3>
              <p className="text-muted-foreground text-sm">
                Join our network of successful brands and influencers
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 bg-gradient-to-br from-purple-50 to-violet-50 hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Sustainable Success</h3>
              <p className="text-muted-foreground text-sm">
                Achieve measurable results that last beyond campaigns
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-xl font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start Collaboration
          </Button>
        </div>
      </div>
    </section>
  )
}
