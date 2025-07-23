"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#A5BECF]/20 bg-[#FEFEFE]/95 dark:bg-[#040A1B]/95 backdrop-blur supports-[backdrop-filter]:bg-[#FEFEFE]/60 dark:supports-[backdrop-filter]:bg-[#040A1B]/60">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-[#335495] to-[#668BC4] rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-[#FEFEFE] font-bold text-sm">YC</span>
            </div>
            <span className="font-bold text-[#040A1B] dark:text-[#FEFEFE]">YCLai</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[#335495] dark:text-[#A5BECF] hover:text-[#668BC4] dark:hover:text-[#668BC4] transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
            <ThemeToggle />
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-[#FEFEFE] dark:bg-[#040A1B]">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex items-center justify-between mb-8">
                  <Link href="/" className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#335495] to-[#668BC4] rounded-lg flex items-center justify-center">
                      <span className="text-[#FEFEFE] font-bold text-sm">YC</span>
                    </div>
                    <span className="font-bold text-[#040A1B] dark:text-[#FEFEFE]">YCLai</span>
                  </Link>
                  <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <nav className="flex flex-col space-y-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-[#335495] dark:text-[#A5BECF] hover:text-[#668BC4] dark:hover:text-[#668BC4] transition-colors font-medium py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
