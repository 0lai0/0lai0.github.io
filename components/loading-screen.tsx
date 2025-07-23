"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"

interface Particle {
  left: number
  top: number
  delay: number
}

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<HTMLDivElement>(null)
  const [particles, setParticles] = useState<Particle[]>([])
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    // 生成粒子位置
    const newParticles = Array.from({ length: 20 }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 2
    }))
    setParticles(newParticles)
  }, [])

  useEffect(() => {
    if (particles.length === 0) return

    const tl = gsap.timeline({
      onComplete: () => {
        // 開始退出動畫
        setIsExiting(true)
        const exitTl = gsap.timeline({
          onComplete: () => {
            setTimeout(onComplete, 100)
          }
        })

        // 退出動畫序列
        exitTl
          .to(particlesRef.current, {
            opacity: 0,
            duration: 0.5,
            ease: "power2.inOut"
          })
          .to(
            [logoRef.current, progressRef.current?.parentElement],
            {
              opacity: 0,
              y: -20,
              duration: 0.5,
              ease: "power2.inOut",
              stagger: 0.1
            },
            "-=0.3"
          )
          .to(
            containerRef.current,
            {
              opacity: 0,
              duration: 0.5,
              ease: "power2.inOut"
            },
            "-=0.2"
          )
      }
    })

    // 初始動畫序列
    gsap.set(".particle", { opacity: 0, scale: 0 })
    gsap.to(".particle", {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      stagger: 0.1,
      ease: "back.out(1.7)",
    })

    // Logo animation
    tl.from(logoRef.current, {
      scale: 0,
      rotation: -180,
      duration: 1,
      ease: "back.out(1.7)",
    })

    // Progress bar animation
    tl.from(
      progressRef.current,
      {
        width: 0,
        duration: 2,
        ease: "power2.inOut",
      },
      "-=0.5",
    )

    return () => {
      tl.kill()
    }
  }, [onComplete, particles])

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-[#040A1B] via-[#335495] to-[#668BC4] dark:from-[#040A1B] dark:via-[#335495] dark:to-[#668BC4] transition-opacity duration-500 ${
        isExiting ? "pointer-events-none" : ""
      }`}
    >
      {/* Animated Particles */}
      <div ref={particlesRef} className="absolute inset-0 overflow-hidden">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="particle absolute w-2 h-2 bg-[#A5BECF] rounded-full opacity-60"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="text-center z-10">
        {/* Logo */}
        <div ref={logoRef} className="mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-[#A5BECF] to-[#668BC4] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-2xl">
            <span className="text-[#040A1B] font-bold text-2xl">YC</span>
          </div>
          <h1 className="text-2xl font-bold text-[#FEFEFE] mb-2">Loading Experience</h1>
          <p className="text-[#A5BECF]">Preparing something amazing...</p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-[#335495] rounded-full overflow-hidden mx-auto">
          <div ref={progressRef} className="h-full bg-gradient-to-r from-[#A5BECF] to-[#668BC4] rounded-full" />
        </div>
      </div>
    </div>
  )
}
