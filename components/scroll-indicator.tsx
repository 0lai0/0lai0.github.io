"use client"

import { useEffect, useRef } from "react"
import { ChevronDown } from "lucide-react"
import { gsap } from "gsap"

interface ScrollIndicatorProps {
  targetId?: string
  className?: string
}

export default function ScrollIndicator({ targetId, className = "" }: ScrollIndicatorProps) {
  const arrowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (arrowRef.current) {
      gsap.to(arrowRef.current, {
        y: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })
    }
  }, [])

  const handleClick = () => {
    if (targetId) {
      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
    }
  }

  return (
    <div
      ref={arrowRef}
      onClick={handleClick}
      className={`cursor-pointer flex flex-col items-center gap-2 text-[#335495] dark:text-[#FEFEFE] hover:text-[#668BC4] dark:hover:text-[#A5BECF] transition-colors duration-300 ${className}`}
    >
      <span className="text-sm font-medium">Scroll Down</span>
      <ChevronDown className="h-6 w-6 animate-bounce" />
    </div>
  )
}
