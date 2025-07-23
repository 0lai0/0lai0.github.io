"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const particles = containerRef.current?.querySelectorAll(".floating-particle")

    if (particles) {
      particles.forEach((particle, index) => {
        gsap.to(particle, {
          y: "random(-100, 100)",
          x: "random(-50, 50)",
          rotation: "random(-180, 180)",
          duration: "random(3, 6)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.1,
        })
      })
    }
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={i}
          className="floating-particle absolute w-1 h-1 bg-[#A5BECF] dark:bg-[#668BC4] rounded-full opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-[#335495] dark:border-[#A5BECF] opacity-20 rotate-45" />
      <div className="absolute bottom-32 right-16 w-16 h-16 border border-[#668BC4] dark:border-[#335495] opacity-20 rounded-full" />
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-gradient-to-r from-[#335495] to-[#668BC4] opacity-10 rotate-12" />
    </div>
  )
}
