"use client"

import { useEffect, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Github, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function PortfolioPage() {
  const headerRef = useRef<HTMLDivElement>(null)
  const tabsRef = useRef<HTMLDivElement>(null)
  const githubRef = useRef<HTMLDivElement>(null)

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

    // Project cards animation
    gsap.fromTo(
      ".project-card",
      { y: 100, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: tabsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    )

    // GitHub section animation
    gsap.fromTo(
      ".github-element",
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: githubRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    )
  }, [])

  const projects = {
    web: [
      {
        title: "Flashcard Learning System",
        description:
          "The website utilizes an interactive flashcard learning system.",
        image: "/flashcard.png",
        tech: ["JavaScript", "CSS", "HTML", "AWS"],
        features: ["Learning System", "Flashcard-based" ],
        github: "https://github.com/0lai0/aws-card.git",
        demo: "https://www.20020418.xyz/aws-card/",
        role: "Full-Stack Developer",
        duration: "3 months",
        learnings:
          " ",
      },
      
    ],
    mobile: [
      {
        title: "TownPass-Services",
        description:
          "Making Waste Sorting and Collection Effortless!",
        image: "/townpass.png",
        tech: ["Vue.js", "TypeScript", "JavaScript"],
        features: ["Trash Car Tracking", "ios/android Setting", "AI"],
        github: "https://github.com/0lai0/Lapras.git",
        demo: "https://github.com/0lai0/Lapras.git",
        role: "Mobile Developer",
        duration: "3 months",
        learnings: "Mastered mobile development best practices, learned trash car data processing",
      },

    ],
    backend: [
      {
        title: "Microservices Root Cause Analysis",
        description:
          "Microserivce Root Cause Analysis",
        image: "microservices architecture diagram",
        tech: ["Go", "Docker", "Kubernetes", "Microservices", "Prometheus"],
        features: ["Service Discovery", "Load Balancing", "Root Cause", "Monitoring & Alerts"],
        github: "https://github.com/0lai0/RCAEval.git",
        demo: "https://github.com/0lai0/RCAEval.git",
        role: "Backend Architect",
        duration: "8 months",
        learnings: "Microserivce Root Cause Analysis",
      },

    ],
  }

  return (
    <div className="min-h-screen py-12 px-4 bg-[#FEFEFE] dark:bg-[#040A1B] transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#040A1B] dark:text-[#FEFEFE] mb-4">Portfolio</h1>
          <p className="text-xl text-[#335495] dark:text-[#FEFEFE] max-w-3xl mx-auto">
            Selected projects showcasing my technical capabilities and innovative thinking in software design and
            development
          </p>
        </div>

        {/* Project Categories */}
        <div id="projects" ref={tabsRef}>
          <Tabs defaultValue="web" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="web">Web Development</TabsTrigger>
              <TabsTrigger value="mobile">Mobile Apps</TabsTrigger>
              <TabsTrigger value="backend">Backend Services</TabsTrigger>
            </TabsList>

            {Object.entries(projects).map(([category, projectList]) => (
              <TabsContent key={category} value={category}>
                <div className="grid gap-8">
                  {projectList.map((project, index) => (
                    <Card key={index} className="project-card overflow-hidden">
                      <div className="grid lg:grid-cols-2 gap-0">
                        <div className="aspect-video lg:aspect-square bg-gradient-to-br from-[#A5BECF]/10 to-[#668BC4]/10 dark:from-[#335495]/20 dark:to-[#668BC4]/20 p-4 relative overflow-hidden">
                          <div className="w-full h-full rounded-xl border border-[#A5BECF]/20 dark:border-[#335495]/20 overflow-hidden shadow-lg relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#A5BECF]/5 to-[#668BC4]/5 dark:from-[#335495]/10 dark:to-[#668BC4]/10"></div>
                            <Image
                              src={
                                project.image.startsWith("/") 
                                  ? project.image 
                                  : `/placeholder.svg?height=400&width=600&query=${project.image}`
                              }
                              alt={project.title}
                              width={600}
                              height={400}
                              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                            />
                          </div>
                        </div>
                        <div className="p-8">
                          <CardHeader className="p-0 mb-6">
                            <CardTitle className="text-2xl text-[#040A1B] dark:text-[#FEFEFE] mb-2">
                              {project.title}
                            </CardTitle>
                            <p className="text-[#335495] dark:text-[#FEFEFE] leading-relaxed">{project.description}</p>
                          </CardHeader>

                          <CardContent className="p-0 space-y-6">
                            {/* Tech Stack */}
                            <div>
                              <h4 className="font-semibold text-[#040A1B] dark:text-[#FEFEFE] mb-2">Tech Stack</h4>
                              <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech) => (
                                  <Badge key={tech} variant="secondary">
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            {/* Key Features */}
                            <div>
                              <h4 className="font-semibold text-[#040A1B] dark:text-[#FEFEFE] mb-2">Key Features</h4>
                              <ul className="text-sm text-[#335495] dark:text-[#FEFEFE] space-y-1">
                                {project.features.map((feature, idx) => (
                                  <li key={idx} className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Project Details */}
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>
                                <span className="font-medium text-[#040A1B] dark:text-[#FEFEFE]">My Role:</span>
                                <p className="text-[#335495] dark:text-[#FEFEFE]">{project.role}</p>
                              </div>
                              <div>
                                <span className="font-medium text-[#040A1B] dark:text-[#FEFEFE]">Duration:</span>
                                <p className="text-[#335495] dark:text-[#FEFEFE]">{project.duration}</p>
                              </div>
                            </div>

                            {/* Learning Outcomes */}
                            <div>
                              <h4 className="font-semibold text-[#040A1B] dark:text-[#FEFEFE] mb-2">Key Learnings</h4>
                              <p className="text-sm text-[#335495] dark:text-[#FEFEFE]">{project.learnings}</p>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-3 pt-4">
                              <Button asChild size="sm">
                                <Link href={project.github} target="_blank">
                                  <Github className="w-4 h-4 mr-2" />
                                  GitHub
                                </Link>
                              </Button>
                              <Button asChild variant="outline" size="sm">
                                <Link href={project.demo} target="_blank">
                                  <ExternalLink className="w-4 h-4 mr-2" />
                                  Live Demo
                                </Link>
                              </Button>
                            </div>
                          </CardContent>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* GitHub Profile Link */}
        <section id="github-section" ref={githubRef} className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-slate-50 to-blue-50 dark:from-[#335495]/20 dark:to-[#668BC4]/20 border-0">
            <CardContent className="p-8">
              <div className="space-y-4">
                <Globe className="github-element w-12 h-12 text-blue-600 mx-auto" />
                <h3 className="github-element text-2xl font-bold text-[#040A1B] dark:text-[#FEFEFE]">
                  Explore More Projects
                </h3>
                <p className="github-element text-[#335495] dark:text-[#FEFEFE] max-w-2xl mx-auto">
                  Check out more open-source projects and code examples on my GitHub, including experimental projects,
                  learning notes, and technical research
                </p>
                <div className="github-element flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link href="https://github.com/0lai0" target="_blank">
                      <Github className="w-5 h-5 mr-2" />
                      Visit GitHub
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="https://hackmd.io/@J1RmgHm8Q4-fUZSN7i1TqQ" target="_blank">
                      View HackMD Notes
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
