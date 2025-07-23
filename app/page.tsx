"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, BookOpen, Award, Users, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import LoadingScreen from "@/components/loading-screen"
import ParticleBackground from "@/components/particle-background"
import ScrollIndicator from "@/components/scroll-indicator"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)
  const [contentVisible, setContentVisible] = useState(false)
  const mainContentRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const highlightsRef = useRef<HTMLDivElement>(null)
  const socialRef = useRef<HTMLDivElement>(null)
  const workRef = useRef<HTMLDivElement>(null)
  const blogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isLoading) {
      // 添加一個短暫的延遲，確保 LoadingScreen 完全消失
      setTimeout(() => {
        setContentVisible(true)
        const tl = gsap.timeline()

        // 淡入整個內容
        if (mainContentRef.current) {
          gsap.set(mainContentRef.current, { opacity: 0, y: 20 })
          tl.to(mainContentRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          })
        }

        // Hero animations
        if (titleRef.current) {
          tl.from(titleRef.current, {
            y: 100,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
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
            "-=0.6",
          )
        }

        if (socialRef.current?.children) {
          tl.from(
            Array.from(socialRef.current.children),
            {
              x: -30,
              opacity: 0,
              duration: 0.6,
              stagger: 0.1,
              ease: "power3.out",
            },
            "-=0.4",
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
            "-=0.4",
          )
        }

        if (imageRef.current) {
          tl.from(
            imageRef.current,
            {
              scale: 0,
              rotation: 180,
              duration: 1.2,
              ease: "back.out(1.7)",
            },
            "-=1",
          )
        }

        // Scroll-triggered animations
        if (highlightsRef.current) {
          gsap.fromTo(
            ".highlight-card",
            { y: 100, opacity: 0, scale: 0.8 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.8,
              stagger: 0.15,
              ease: "power3.out",
              scrollTrigger: {
                trigger: highlightsRef.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
              },
            },
          )
        }

        // Work section animations
        if (workRef.current) {
          gsap.fromTo(
            ".work-card",
            { y: 80, opacity: 0, rotationY: 45 },
            {
              y: 0,
              opacity: 1,
              rotationY: 0,
              duration: 1,
              stagger: 0.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: workRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            },
          )
        }

        // Blog section animations
        if (blogRef.current) {
          gsap.fromTo(
            ".blog-card",
            { y: 60, opacity: 0, scale: 0.9 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.8,
              stagger: 0.15,
              ease: "power3.out",
              scrollTrigger: {
                trigger: blogRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            },
          )
        }

        // Floating animation for hero image
        if (imageRef.current) {
          gsap.to(imageRef.current, {
            y: -20,
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          })
        }

        // Continuous rotation for tech elements
        gsap.to(".tech-element", {
          rotation: 360,
          duration: 20,
          repeat: -1,
          ease: "none",
        })
      }, 200)
    }
  }, [isLoading])

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />
  }

  return (
    <div
      ref={mainContentRef}
      className={`min-h-screen w-full overflow-x-hidden bg-[#FEFEFE] dark:bg-[#040A1B] transition-colors duration-500 ${
        contentVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <ParticleBackground />

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen w-full flex items-center justify-center py-8 px-4 snap-start">
        {/* Tech Grid Background */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23335495' fillOpacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Animated Tech Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="tech-element absolute top-20 left-10 w-32 h-32 border-2 border-[#335495] dark:border-[#A5BECF] opacity-20" />
          <div className="tech-element absolute bottom-32 right-16 w-24 h-24 border-2 border-[#668BC4] dark:border-[#335495] opacity-20 rounded-full" />
          <div className="tech-element absolute top-1/2 right-20 w-16 h-16 bg-gradient-to-r from-[#335495] to-[#668BC4] opacity-20" />
          <div className="tech-element absolute bottom-20 left-1/4 w-20 h-20 border border-[#A5BECF] dark:border-[#668BC4] opacity-30 rotate-45" />
        </div>

        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 z-10">
              <div className="space-y-6">
                <Badge
                  variant="outline"
                  className="bg-[#A5BECF]/10 dark:bg-[#335495]/20 text-[#335495] dark:text-[#FEFEFE] border-[#335495] dark:border-[#A5BECF] text-sm backdrop-blur-sm hover:bg-[#335495] hover:text-[#FEFEFE] dark:hover:bg-[#A5BECF] dark:hover:text-[#040A1B] transition-all duration-300"
                >
                  Software Designer & Knowledge Sharer
                </Badge>

                <h1
                  ref={titleRef}
                  className="text-5xl lg:text-7xl font-bold text-[#040A1B] dark:text-[#FEFEFE] leading-tight"
                >
                  Connecting worlds through{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#335495] to-[#668BC4] animate-pulse">
                    code
                  </span>
                  , creating value with{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#668BC4] to-[#A5BECF]">
                    knowledge
                  </span>
                </h1>

                <p ref={subtitleRef} className="text-xl text-[#335495] dark:text-[#FEFEFE] leading-relaxed max-w-2xl">
                  Specialized in software design and development, dedicated to sharing technical knowledge and practical
                  experience to help more people grow in the field of programming.
                </p>
              </div>

              {/* Social Links */}
              <div ref={socialRef} className="flex items-center gap-4 pt-4">
                <span className="text-sm text-[#335495] dark:text-[#FEFEFE]">Connect:</span>
                <div className="flex gap-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="hover:bg-[#A5BECF]/20 dark:hover:bg-[#335495]/20 transition-all duration-300 hover:scale-110"
                  >
                    <Link href="https://github.com/0lai0" target="_blank">
                      <Github className="h-5 w-5 text-[#335495] dark:text-[#FEFEFE]" />
                    </Link>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="hover:bg-[#A5BECF]/20 dark:hover:bg-[#335495]/20 transition-all duration-300 hover:scale-110"
                  >
                    <Link href="https://www.linkedin.com/in/yu-chen-lai-8a836027a/" target="_blank">
                      <Linkedin className="h-5 w-5 text-[#335495] dark:text-[#FEFEFE]" />
                    </Link>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="hover:bg-[#A5BECF]/20 dark:hover:bg-[#335495]/20 transition-all duration-300 hover:scale-110"
                  >
                    <Link href="mailto:yuchenlai87@gmail.com">
                      <Mail className="h-5 w-5 text-[#335495] dark:text-[#FEFEFE]" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-[#335495] to-[#668BC4] hover:from-[#668BC4] hover:to-[#335495] text-[#FEFEFE] text-lg px-8 py-6 shadow-2xl hover:shadow-[#335495]/25 transition-all duration-300 hover:scale-105"
                >
                  <Link href="/portfolio">
                    Explore My Work <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6 border-[#335495] text-[#335495] hover:bg-[#335495] hover:text-[#FEFEFE] dark:border-[#A5BECF] dark:text-[#FEFEFE] dark:hover:bg-[#A5BECF] dark:hover:text-[#040A1B] backdrop-blur-sm transition-all duration-300 bg-transparent hover:scale-105"
                >
                  <Link href="/blog">Read My Articles</Link>
                </Button>
              </div>
            </div>

            <div ref={imageRef} className="relative z-10">
              <div className="relative w-80 h-80 mx-auto mb-8">
                {/* Animated rings */}
                <div
                  className="absolute inset-0 border-2 border-[#335495] dark:border-[#A5BECF] rounded-full opacity-20 animate-spin"
                  style={{ animationDuration: "20s" }}
                ></div>
                <div
                  className="absolute inset-4 border border-[#668BC4] dark:border-[#335495] rounded-full opacity-30 animate-spin"
                  style={{ animationDuration: "15s", animationDirection: "reverse" }}
                ></div>
                <div
                  className="absolute inset-8 border border-[#A5BECF] dark:border-[#668BC4] rounded-full opacity-40 animate-spin"
                  style={{ animationDuration: "10s" }}
                ></div>

                {/* Glowing background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#335495] to-[#668BC4] rounded-full opacity-20 blur-3xl animate-pulse"></div>
                <div className="absolute inset-4 bg-gradient-to-r from-[#668BC4] to-[#A5BECF] rounded-full opacity-30 blur-2xl"></div>

                {/* Profile Image Container */}
                <div className="relative z-10 w-full h-full rounded-full overflow-hidden transform transition-transform duration-500 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#335495] to-[#668BC4] opacity-20"></div>
                  <Image
                    src="/photo.jpg"
                    alt="Professional headshot"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover rounded-full border-4 border-[#A5BECF] dark:border-[#668BC4] shadow-2xl"
                    priority
                  />
                  {/* Overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#335495]/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                </div>
              </div>

              {/* Text content below image */}
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold text-[#040A1B] dark:text-[#FEFEFE]">
                  Yu-Chen Lai
                </h3>
                <p className="text-sm text-[#335495]/80 dark:text-[#FEFEFE]/80 max-w-xs mx-auto">
                  Passionate about creating innovative solutions .
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - 統一樣式 */}
        <div className="absolute bottom right-8">
          <ScrollIndicator targetId="highlights" />
        </div>
      </section>

      {/* Professional Highlights Section */}
      <section
        id="highlights"
        ref={highlightsRef}
        className="h-screen w-full py-16 px-4 bg-gradient-to-br from-[#FEFEFE] to-[#A5BECF]/10 dark:from-[#040A1B] dark:to-[#335495]/20 relative flex items-center snap-start"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#040A1B] dark:text-[#FEFEFE] mb-6">Professional Highlights</h2>
            <p className="text-xl text-[#335495] dark:text-[#FEFEFE] max-w-3xl mx-auto">
              Continuously advancing technical capabilities, accumulating rich project experience and professional
              certifications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="highlight-card text-center p-8 hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-[#A5BECF]/10 to-[#668BC4]/10 dark:from-[#335495]/20 dark:to-[#668BC4]/20 backdrop-blur-sm hover:scale-105 hover:-translate-y-2 group">
              <CardContent className="space-y-6">
                <div className="w-16 h-16 bg-gradient-to-r from-[#335495] to-[#668BC4] rounded-xl flex items-center justify-center mx-auto shadow-lg group-hover:rotate-12 transition-transform duration-300">
                  <Code className="h-8 w-8 text-[#FEFEFE]" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-[#040A1B] dark:text-[#FEFEFE] mb-2">5+</h3>
                  <p className="text-[#335495] dark:text-[#FEFEFE] font-medium">Projects</p>
                  <p className="text-sm text-[#335495]/70 dark:text-[#FEFEFE]/70 mt-1">
                    Frontend, Backend & Full-stack
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="highlight-card text-center p-8 hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-[#668BC4]/10 to-[#A5BECF]/10 dark:from-[#668BC4]/20 dark:to-[#A5BECF]/20 backdrop-blur-sm hover:scale-105 hover:-translate-y-2 group">
              <CardContent className="space-y-6">
                <div className="w-16 h-16 bg-gradient-to-r from-[#668BC4] to-[#A5BECF] rounded-xl flex items-center justify-center mx-auto shadow-lg group-hover:rotate-12 transition-transform duration-300">
                  <Award className="h-8 w-8 text-[#040A1B]" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-[#040A1B] dark:text-[#FEFEFE] mb-2">3</h3>
                  <p className="text-[#335495] dark:text-[#FEFEFE] font-medium">Certifications</p>
                  <p className="text-sm text-[#335495]/70 dark:text-[#FEFEFE]/70 mt-1">AWS, PADI & more</p>
                </div>
              </CardContent>
            </Card>

            <Card className="highlight-card text-center p-8 hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-[#A5BECF]/10 to-[#335495]/10 dark:from-[#A5BECF]/20 dark:to-[#335495]/20 backdrop-blur-sm hover:scale-105 hover:-translate-y-2 group">
              <CardContent className="space-y-6">
                <div className="w-16 h-16 bg-gradient-to-r from-[#A5BECF] to-[#335495] rounded-xl flex items-center justify-center mx-auto shadow-lg group-hover:rotate-12 transition-transform duration-300">
                  <BookOpen className="h-8 w-8 text-[#FEFEFE]" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-[#040A1B] dark:text-[#FEFEFE] mb-2">10+</h3>
                  <p className="text-[#335495] dark:text-[#FEFEFE] font-medium">Articles</p>
                  <p className="text-sm text-[#335495]/70 dark:text-[#FEFEFE]/70 mt-1">
                    Technical tutorials & insights
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="highlight-card text-center p-8 hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-[#668BC4]/10 to-[#335495]/10 dark:from-[#668BC4]/20 dark:to-[#335495]/20 backdrop-blur-sm hover:scale-105 hover:-translate-y-2 group">
              <CardContent className="space-y-6">
                <div className="w-16 h-16 bg-gradient-to-r from-[#668BC4] to-[#335495] rounded-xl flex items-center justify-center mx-auto shadow-lg group-hover:rotate-12 transition-transform duration-300">
                  <Users className="h-8 w-8 text-[#FEFEFE]" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-[#040A1B] dark:text-[#FEFEFE] mb-2">0.5K+</h3>
                  <p className="text-[#335495] dark:text-[#FEFEFE] font-medium">Readers</p>
                  <p className="text-sm text-[#335495]/70 dark:text-[#FEFEFE]/70 mt-1">Tech community member</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Scroll Indicator - 統一樣式 */}
        <div className="absolute bottom right-8">
          <ScrollIndicator targetId="recent-work" />
        </div>
      </section>

      {/* Recent Work Preview */}
      <section
        id="recent-work"
        ref={workRef}
        className="h-screen w-full py-16 px-4 bg-[#FEFEFE] dark:bg-[#040A1B] relative flex items-center snap-start"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-[#040A1B] dark:text-[#FEFEFE] mb-4">Recent Achievement</h2>
              <p className="text-xl text-[#335495] dark:text-[#FEFEFE]">
                Selected projects showcasing my technical skills and innovative thinking
              </p>
            </div>
            <Button asChild variant="outline" size="lg">
              <Link href="/portfolio">View All Projects</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "CodeFest Taipei Distinction",
                description: "Achieved 2nd place in this highly competitive coding challenge, demonstrating advanced problem-solving skills and rapid development capabilities.",
                tech: ["OpenSource", "Microservice", "Vue.js"],
                image: "codefest.jpg",
              },
              {
                title: "AWS Certified AI Practitioner",
                description: "Earned the AWS Certified Artificial Intelligence/Machine Learning (AI/ML) Specialty certification, validating expertise in designing, implementing, and optimizing AI/ML solutions on AWS.",
                tech: ["AWS", "AI/ML", "Cloud"],
                image: "aws_ai.jpg",
              },
              {
                title: "AWS Code Jam Excellence",
                description: "Secured 2nd place in the demanding AWS Code Jam, showcasing proficiency in cloud-native development and optimizing solutions within the AWS ecosystem.",
                tech: ["AWS", "Cloud Computing", "AI/ML"],
                image: "aws_code_jam.jpg",
              },
            ].map((project, index) => (
              <Card key={index} className="work-card overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="aspect-video bg-gradient-to-br from-blue-50 to-slate-100 overflow-hidden">
                  <Image
                    src={
                      project.image.includes(".jpg") 
                        ? `/${project.image}`
                        : `/placeholder.svg?height=200&width=350&query=${project.image}`
                    }
                    alt={project.title}
                    width={350}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-[#040A1B] dark:text-[#FEFEFE] mb-3 text-lg">{project.title}</h3>
                  <p className="text-[#335495] dark:text-[#FEFEFE] mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Scroll Indicator - 統一樣式 */}
        <div className="absolute bottom right-8">
          <ScrollIndicator targetId="latest-blog" />
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section
        id="latest-blog"
        ref={blogRef}
        className="h-screen w-full py-16 px-4 bg-gradient-to-br from-[#FEFEFE] to-[#A5BECF]/10 dark:from-[#040A1B] dark:to-[#335495]/20 flex items-center snap-start relative"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-[#040A1B] dark:text-[#FEFEFE] mb-4">Latest Articles</h2>
              <p className="text-xl text-[#335495] dark:text-[#FEFEFE]">
                Sharing technical insights and learning experiences
              </p>
            </div>
            <Button asChild variant="outline" size="lg">
              <Link href="/blog">Read More Articles</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AWS Certified AI Practitioner learning - Day 1",
                excerpt: "AWS Certified AI Practitioner learning - Day 1...",
                date: "July 5, 2025",
                readTime: "10 min read",
                link: "https://hackmd.io/@J1RmgHm8Q4-fUZSN7i1TqQ/ryPUbBBNel"
              },
              {
                title: "AWS Certified AI Practitioner learning - Day 2",
                excerpt: "AWS Certified AI Practitioner learning - Day 2...",
                date: "July 6, 2025",
                readTime: "10 min read",
                link: "https://hackmd.io/@J1RmgHm8Q4-fUZSN7i1TqQ/H1gRQ7uVee"
              },
              {
                title: "AWS Certified AI Practitioner learning - Day 3",
                excerpt: "AWS Certified AI Practitioner learning - Day 3...",
                date: "July 7, 2025",
                readTime: "10 min read",
                link: "https://hackmd.io/@J1RmgHm8Q4-fUZSN7i1TqQ/HymOjLYVgg"
              },
            ].map((post, index) => (
              <Card key={index} className="blog-card hover:shadow-lg transition-shadow group cursor-pointer">
                <Link href={post.link} target="_blank">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-bold text-[#040A1B] dark:text-[#FEFEFE] mb-3 group-hover:text-blue-600 transition-colors text-lg">
                          {post.title}
                        </h3>
                        <p className="text-[#335495] dark:text-[#FEFEFE] line-clamp-3 leading-relaxed">
                          {post.excerpt}
                        </p>
                      </div>
                      <div className="flex justify-between items-center text-sm text-[#335495]/70 dark:text-[#FEFEFE]/70">
                        <span>{post.date}</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>

        {/* Scroll Indicator - 統一樣式 */}
        <div className="absolute bottom right-8">
          <ScrollIndicator targetId="cta-section" />
        </div>
      </section>

      {/* CTA Section - 最後一個區段不需要 scroll indicator */}
      <section
        id="cta-section"
        className="h-screen w-full py-16 px-4 bg-gradient-to-r from-[#335495] to-[#668BC4] relative overflow-hidden flex items-center snap-start"
      >
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full animate-pulse"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23A5BECF' fillOpacity='0.3'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto text-center text-[#FEFEFE] relative z-10">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Collaborating?</h2>
          <p className="text-xl mb-10 text-[#FEFEFE]/90 max-w-2xl mx-auto">
            Whether it's project collaboration, technical consulting, or knowledge exchange, I'd love to connect with
            you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6 bg-[#FEFEFE] text-[#335495] hover:bg-[#A5BECF] hover:text-[#040A1B] transition-all duration-300 hover:scale-105"
            >
              <Link href="/contact">Get In Touch</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-[#FEFEFE] text-[#FEFEFE] hover:bg-[#FEFEFE] hover:text-[#335495] bg-transparent text-lg px-8 py-6 transition-all duration-300 hover:scale-105"
            >
              <Link href="/about">Learn More About Me</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
