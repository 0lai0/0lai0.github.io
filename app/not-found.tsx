"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Home, ArrowLeft } from "lucide-react"
import { gsap } from "gsap"

interface Particle {
  left: number
  top: number
}

export default function NotFound() {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    // 生成粒子位置
    const newParticles = Array.from({ length: 30 }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
    }))
    setParticles(newParticles)
  }, [])

  useEffect(() => {
    if (particles.length === 0) return

    const tl = gsap.timeline()

    // Animate 404 text
    if (titleRef.current) {
      tl.from(titleRef.current, {
        scale: 0,
        rotation: -180,
        duration: 1,
        ease: "back.out(1.7)",
      })
    }

    if (subtitleRef.current) {
      tl.from(
        subtitleRef.current,
        {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5",
      )
    }

    if (buttonsRef.current?.children) {
      tl.from(
        Array.from(buttonsRef.current.children),
        {
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: "power3.out",
        },
        "-=0.3",
      )
    }

    // Floating animation for the 404 text
    if (titleRef.current) {
      gsap.to(titleRef.current, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })
    }

    // Particle animation
    const particleElements = containerRef.current?.querySelectorAll(".error-particle")
    if (particleElements) {
      const particleArray = Array.from(particleElements)
      gsap.to(particleArray, {
        y: "random(-100, 100)",
        x: "random(-100, 100)",
        rotation: "random(-360, 360)",
        duration: "random(3, 6)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.2,
      })
    }

    return () => {
      tl.kill()
    }
  }, [particles])

  return (
    <div
      ref={containerRef}
      className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#040A1B] via-[#335495] to-[#668BC4] relative overflow-hidden"
    >
      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="error-particle absolute w-2 h-2 bg-[#A5BECF] rounded-full opacity-60"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
          />
        ))}
      </div>

      {/* Geometric shapes */}
      <div className="absolute top-[10vh] left-[5vw] w-[20vh] h-[20vh] border-2 border-[#A5BECF] opacity-20 rotate-45" />
      <div className="absolute bottom-[20vh] right-[8vw] w-[15vh] h-[15vh] border-2 border-[#668BC4] opacity-20 rounded-full" />
      <div className="absolute top-1/2 right-[10vw] w-[10vh] h-[10vh] bg-gradient-to-r from-[#335495] to-[#668BC4] opacity-20 rotate-12" />

      <div className="text-center z-10 px-4 max-w-[90vw] mx-auto">
        <h1
          ref={titleRef}
          className="text-[15vmin] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#A5BECF] to-[#668BC4] mb-[5vh]"
        >
          404
        </h1>

        <div className="space-y-[3vh] mb-[8vh]">
          <h2 ref={subtitleRef} className="text-[4vmin] font-bold text-[#FEFEFE] mb-[2vh]">
            Oh no, you look lost.
          </h2>
          <p className="text-[2.5vmin] text-[#A5BECF] max-w-[60vw] mx-auto">
            The page you're looking for doesn't exist or has been moved to another dimension.
          </p>
        </div>

        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-[#A5BECF] to-[#668BC4] hover:from-[#668BC4] hover:to-[#A5BECF] text-[#040A1B] text-[2vmin] px-[4vw] py-[2vh] shadow-2xl transition-all duration-300"
          >
            <Link href="/">
              <Home className="mr-2 h-[2.5vmin] w-[2.5vmin]" />
              Back to Home
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="text-[2vmin] px-[4vw] py-[2vh] border-[#A5BECF] text-[#A5BECF] hover:bg-[#A5BECF] hover:text-[#040A1B] backdrop-blur-sm transition-all duration-300 bg-transparent"
          >
            <Link href="/portfolio">
              <ArrowLeft className="mr-2 h-[2.5vmin] w-[2.5vmin]" />
              View My Work
            </Link>
          </Button>
        </div>

        <div className="mt-[5vh]">
          <p className="text-[1.5vmin] text-[#A5BECF]/70">Error code: 404 | Page not found</p>
        </div>
      </div>
    </div>
  )
}
