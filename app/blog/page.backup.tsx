"use client"

import { useEffect, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, Search, Tag, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function BlogPage() {
  const headerRef = useRef<HTMLDivElement>(null)
  const searchRef = useRef<HTMLDivElement>(null)
  const featuredRef = useRef<HTMLDivElement>(null)
  const recentRef = useRef<HTMLDivElement>(null)
  const sidebarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Header animation
    if (headerRef.current?.children) {
      gsap.fromTo(
        Array.from(headerRef.current.children),
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        },
      )
    }

    // Search section animation
    if (searchRef.current?.children) {
      gsap.fromTo(
        Array.from(searchRef.current.children),
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.5,
        },
      )
    }

    // Featured posts animation
    gsap.fromTo(
      ".featured-post",
      { y: 80, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: featuredRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    )

    // Recent posts animation
    gsap.fromTo(
      ".recent-post",
      { y: 60, opacity: 0, rotationX: 45 },
      {
        y: 0,
        opacity: 1,
        rotationX: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: recentRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    )

    // Sidebar animation
    gsap.fromTo(
      ".sidebar-card",
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sidebarRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    )
  }, [])

  const categories = [
    { name: "All", count: 45 },
    { name: "React", count: 12 },
    { name: "Node.js", count: 8 },
    { name: "Architecture", count: 6 },
    { name: "Best Practices", count: 10 },
    { name: "Learning", count: 9 },
  ]

  const featuredPosts = [
    {
      title: "React 18 Concurrent Rendering Deep Dive",
      excerpt:
        "Deep exploration of React 18's concurrent features, including practical applications of Suspense, useTransition, and other new APIs...",
      date: "January 15, 2024",
      readTime: "12 min read",
      category: "React",
      image: "React 18 concurrent rendering diagram",
      featured: true,
    },
    {
      title: "Microservices Architecture Patterns & Practices",
      excerpt:
        "Evolution from monolith to microservices, sharing architectural design experience and lessons learned from real projects...",
      date: "January 10, 2024",
      readTime: "15 min read",
      category: "Architecture",
      image: "microservices architecture pattern",
      featured: true,
    },
  ]

  const recentPosts = [
    {
      title: "TypeScript Advanced Type System Complete Guide",
      excerpt:
        "Master TypeScript's advanced type features including conditional types, mapped types, template literal types, and more...",
      date: "January 8, 2024",
      readTime: "10 min read",
      category: "TypeScript",
      image: "TypeScript advanced types code example",
    },
    {
      title: "Node.js Performance Optimization Practical Tips",
      excerpt:
        "Sharing practical techniques for Node.js application performance tuning, including memory management, event loop optimization...",
      date: "January 5, 2024",
      readTime: "8 min read",
      category: "Node.js",
      image: "Node.js performance optimization metrics",
    },
    {
      title: "Modern Frontend Development Toolchain Setup Guide",
      excerpt:
        "Setting up modern frontend development environment from scratch, including optimal configurations for Webpack, Vite, ESLint...",
      date: "January 3, 2024",
      readTime: "12 min read",
      category: "Tooling",
      image: "modern frontend toolchain setup",
    },
    {
      title: "GraphQL vs REST API Selection Guide",
      excerpt:
        "In-depth comparison of GraphQL and REST API pros and cons, helping you make the right technical choice for your projects...",
      date: "December 28, 2023",
      readTime: "9 min read",
      category: "API Design",
      image: "GraphQL vs REST API comparison",
    },
    {
      title: "Docker Containerization Best Practices",
      excerpt:
        "Sharing Docker application experience in real projects, including multi-stage builds, security configurations, and practical tips...",
      date: "December 25, 2023",
      readTime: "11 min read",
      category: "DevOps",
      image: "Docker containerization best practices",
    },
    {
      title: "JavaScript Memory Management & Performance Optimization",
      excerpt:
        "Deep understanding of JavaScript memory management mechanisms, learning how to avoid memory leaks and optimize application performance...",
      date: "December 22, 2023",
      readTime: "13 min read",
      category: "JavaScript",
      image: "JavaScript memory management visualization",
    },
  ]

  const popularTags = [
    "React",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "Architecture",
    "Best Practices",
    "Performance",
    "Docker",
    "AWS",
    "GraphQL",
  ]

  return (
    <div className="min-h-screen py-12 px-4 bg-[#FEFEFE] dark:bg-[#040A1B] transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#040A1B] dark:text-[#FEFEFE] mb-4">Technical Blog</h1>
          <p className="text-xl text-[#335495] dark:text-[#FEFEFE] max-w-3xl mx-auto">
            Sharing software development experience, technical insights, and learning experiences to grow together with
            the developer community
          </p>
        </div>

        {/* Search and Filter */}
        <div id="search-section" ref={searchRef} className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <Input placeholder="Search articles..." className="pl-10" />
            </div>
            <Button variant="outline">
              <Tag className="w-4 h-4 mr-2" />
              Filter Tags
            </Button>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category.name}
                variant={category.name === "All" ? "default" : "outline"}
                className="cursor-pointer hover:bg-blue-50 dark:hover:bg-[#335495]/20"
              >
                {category.name} ({category.count})
              </Badge>
            ))}
          </div>
        </div>

        {/* Featured Posts */}
        <section id="featured-section" ref={featuredRef} className="mb-16">
          <h2 className="text-2xl font-bold text-[#040A1B] dark:text-[#FEFEFE] mb-8">Featured Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <Card key={index} className="featured-post overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-blue-50 to-slate-100">
                  <Image
                    src={`/placeholder.svg?height=250&width=400&query=${post.image}`}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                        Featured
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold text-[#040A1B] dark:text-[#FEFEFE] hover:text-blue-600 cursor-pointer">
                      {post.title}
                    </h3>
                    <p className="text-[#335495] dark:text-[#FEFEFE] line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-[#335495]/70 dark:text-[#FEFEFE]/70">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Recent Posts */}
        <section id="recent-section" ref={recentRef} className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-[#040A1B] dark:text-[#FEFEFE]">Latest Articles</h2>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post, index) => (
              <Card key={index} className="recent-post hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-slate-50 to-blue-50">
                  <Image
                    src={`/placeholder.svg?height=200&width=350&query=${post.image}`}
                    alt={post.title}
                    width={350}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <Badge variant="outline" className="text-xs">
                      {post.category}
                    </Badge>
                    <h3 className="font-semibold text-[#040A1B] dark:text-[#FEFEFE] hover:text-blue-600 cursor-pointer line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-[#335495] dark:text-[#FEFEFE] line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-[#335495]/70 dark:text-[#FEFEFE]/70">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Sidebar Content */}
        <div id="sidebar-section" ref={sidebarRef} className="grid lg:grid-cols-3 gap-8">
          {/* Popular Tags */}
          <Card className="sidebar-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[#040A1B] dark:text-[#FEFEFE]">
                <Tag className="h-5 w-5" />
                Popular Tags
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="cursor-pointer hover:bg-blue-50 dark:hover:bg-[#335495]/20"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Newsletter Signup */}
          <Card className="sidebar-card">
            <CardHeader>
              <CardTitle className="text-[#040A1B] dark:text-[#FEFEFE]">Subscribe to Newsletter</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-[#335495] dark:text-[#FEFEFE]">
                Subscribe to my newsletter to receive the latest technical articles and insights first
              </p>
              <div className="space-y-2">
                <Input placeholder="Your email address" />
                <Button className="w-full">Subscribe Now</Button>
              </div>
            </CardContent>
          </Card>

          {/* About Author */}
          <Card className="sidebar-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[#040A1B] dark:text-[#FEFEFE]">
                <User className="h-5 w-5" />
                About the Author
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Author avatar"
                  width={80}
                  height={80}
                  className="rounded-full mx-auto mb-3"
                />
                <p className="text-sm text-[#335495] dark:text-[#FEFEFE]">
                  Senior software engineer specializing in full-stack development and system architecture design,
                  passionate about sharing technical knowledge and development experience.
                </p>
              </div>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href="/about">Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 