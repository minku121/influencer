import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export const useGsapAnimations = () => {
    const elementRef = useRef<HTMLDivElement>(null)

  // Slide in from left with stagger
  const slideInFromLeft = (delay: number = 0, stagger: number = 0.1) => {
    if (elementRef.current) {
      gsap.fromTo(
        elementRef.current.children,
        {
          x: -100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          delay,
          stagger,
          ease: "power2.out",
          scrollTrigger: {
            trigger: elementRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }
  }

  // Slide in from right with stagger
  const slideInFromRight = (delay: number = 0, stagger: number = 0.1) => {
    if (elementRef.current) {
      gsap.fromTo(
        elementRef.current.children,
        {
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          delay,
          stagger,
          ease: "power2.out",
          scrollTrigger: {
            trigger: elementRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }
  }

  // Slide in from bottom with stagger
  const slideInFromBottom = (delay: number = 0, stagger: number = 0.1) => {
    if (elementRef.current) {
      gsap.fromTo(
        elementRef.current.children,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay,
          stagger,
          ease: "power2.out",
          scrollTrigger: {
            trigger: elementRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }
  }

  // Fade in with stagger
  const fadeIn = (delay: number = 0, stagger: number = 0.1) => {
    if (elementRef.current) {
      gsap.fromTo(
        elementRef.current.children,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay,
          stagger,
          ease: "power2.out",
          scrollTrigger: {
            trigger: elementRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }
  }

  // Scale in with bounce effect
  const scaleIn = (delay: number = 0, stagger: number = 0.1) => {
    if (elementRef.current) {
      gsap.fromTo(
        elementRef.current.children,
        {
          scale: 0,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          delay,
          stagger,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: elementRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }
  }

  // Spin in effect
  const spinIn = (delay: number = 0, stagger: number = 0.1) => {
    if (elementRef.current) {
      gsap.fromTo(
        elementRef.current.children,
        {
          rotation: -180,
          scale: 0,
          opacity: 0,
        },
        {
          rotation: 0,
          scale: 1,
          opacity: 1,
          duration: 1,
          delay,
          stagger,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: elementRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }
  }

  // Typing effect for text
  const typeWriter = (delay: number = 0) => {
    if (elementRef.current) {
      const text = elementRef.current.textContent || ""
      elementRef.current.textContent = ""
      
      gsap.to(elementRef.current, {
        duration: 0,
        delay,
        onComplete: () => {
          gsap.to(elementRef.current, {
            duration: 2,
            text: text,
            ease: "none",
            scrollTrigger: {
              trigger: elementRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          })
        }
      })
    }
  }

  // Floating animation
  const float = (delay: number = 0) => {
    if (elementRef.current) {
      gsap.to(elementRef.current, {
        y: -20,
        duration: 2,
        delay,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: elementRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      })
    }
  }

  // Pulse glow effect
  const pulseGlow = (delay: number = 0) => {
    if (elementRef.current) {
      gsap.to(elementRef.current, {
        boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)",
        duration: 1.5,
        delay,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: elementRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      })
    }
  }

  // Parallax effect
  const parallax = (speed: number = 0.5) => {
    if (elementRef.current) {
      gsap.to(elementRef.current, {
        yPercent: -50 * speed,
        ease: "none",
        scrollTrigger: {
          trigger: elementRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      })
    }
  }

  // Morphing cards effect
  const morphCards = (delay: number = 0) => {
    if (elementRef.current) {
      gsap.fromTo(
        elementRef.current.children,
        {
          borderRadius: "50%",
          scale: 0,
          rotation: 180,
          opacity: 0,
        },
        {
          borderRadius: "16px",
          scale: 1,
          rotation: 0,
          opacity: 1,
          duration: 1.2,
          delay,
          stagger: 0.1,
          ease: "elastic.out(1, 0.3)",
          scrollTrigger: {
            trigger: elementRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }
  }

  // Wave effect for multiple elements
  const wave = (delay: number = 0) => {
    if (elementRef.current) {
      gsap.fromTo(
        elementRef.current.children,
        {
          y: 0,
        },
        {
          y: -20,
          duration: 0.6,
          delay,
          stagger: 0.1,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: elementRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }
  }

  // Cleanup function
  const cleanup = () => {
    if (typeof window !== 'undefined') {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }

  useEffect(() => {
    return cleanup
  }, [])

  return {
    elementRef,
    slideInFromLeft,
    slideInFromRight,
    slideInFromBottom,
    fadeIn,
    scaleIn,
    spinIn,
    typeWriter,
    float,
    pulseGlow,
    parallax,
    morphCards,
    wave,
    cleanup
  }
}