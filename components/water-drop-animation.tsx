"use client"

import { useEffect, useRef } from "react"

export function WaterDropAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = 400
      canvas.height = 400
    }
    resizeCanvas()

    let animationId: number
    let time = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      time += 0.02

      // Create water drop shape with morphing effect
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const baseRadius = 80

      // Create gradient
      const gradient = ctx.createRadialGradient(centerX, centerY - 20, 0, centerX, centerY, baseRadius * 2)
      gradient.addColorStop(0, "rgba(220, 38, 38, 0.8)")
      gradient.addColorStop(0.5, "rgba(245, 158, 11, 0.6)")
      gradient.addColorStop(1, "rgba(220, 38, 38, 0.2)")

      ctx.fillStyle = gradient

      // Draw morphing water drop
      ctx.beginPath()

      // Create organic, flowing shape
      for (let angle = 0; angle < Math.PI * 2; angle += 0.1) {
        const radius = baseRadius + Math.sin(angle * 3 + time) * 15 + Math.cos(angle * 2 + time * 1.5) * 10
        const x = centerX + Math.cos(angle) * radius
        const y = centerY + Math.sin(angle) * radius * (1 + Math.sin(time) * 0.1)

        if (angle === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }

      ctx.closePath()
      ctx.fill()

      // Add inner glow
      const innerGradient = ctx.createRadialGradient(centerX, centerY - 30, 0, centerX, centerY, baseRadius)
      innerGradient.addColorStop(0, "rgba(255, 255, 255, 0.8)")
      innerGradient.addColorStop(0.3, "rgba(245, 158, 11, 0.4)")
      innerGradient.addColorStop(1, "rgba(220, 38, 38, 0.1)")

      ctx.fillStyle = innerGradient
      ctx.beginPath()
      ctx.arc(centerX, centerY - 10, baseRadius * 0.6, 0, Math.PI * 2)
      ctx.fill()

      // Add floating particles
      for (let i = 0; i < 8; i++) {
        const particleAngle = (i / 8) * Math.PI * 2 + time
        const particleRadius = baseRadius * 1.5 + Math.sin(time + i) * 20
        const particleX = centerX + Math.cos(particleAngle) * particleRadius
        const particleY = centerY + Math.sin(particleAngle) * particleRadius
        const particleSize = 3 + Math.sin(time * 2 + i) * 2

        ctx.fillStyle = `rgba(245, 158, 11, ${0.6 + Math.sin(time + i) * 0.3})`
        ctx.beginPath()
        ctx.arc(particleX, particleY, particleSize, 0, Math.PI * 2)
        ctx.fill()
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  return (
    <div className="relative">
      <canvas
        ref={canvasRef}
        className="animate-float"
        style={{ filter: "drop-shadow(0 20px 40px rgba(220, 38, 38, 0.3))" }}
      />
      {/* Profile image overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-2xl">
          <img src="/professional-influencer-portrait.png" alt="Influencer Profile" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  )
}
