"use client"

import { useEffect, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Award, Code, Database, Globe, Server, Smartphone } from "lucide-react"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function AboutPage() {
  const headerRef = useRef<HTMLDivElement>(null)
  const storyRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)
  const certificationsRef = useRef<HTMLDivElement>(null)
  const valuesRef = useRef<HTMLDivElement>(null)

  const skills = [
    { name: "Golang", level: 85, icon: Code },
    { name: "Vue.js", level: 80, icon: Globe },
    { name: "Microservice", level: 85, icon: Server },
    { name: "Python", level: 80, icon: Code },
    { name: "Database Design", level: 80, icon: Database },
    { name: "Mobile Development", level: 75, icon: Smartphone },
  ]

  const certifications = [
    "AWS Certified AI Practitioner",
    "PADI Open Water Diver",
    "PADI Advanced Open Water Diver",
  ]

  useEffect(() => {
    // Header animation
    gsap.fromTo(
      headerRef.current?.children || [],
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      },
    )

    // Story section animation
    gsap.fromTo(
      ".story-element",
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: storyRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    )

    // Skills animation
    gsap.fromTo(
      ".skill-card",
      { y: 80, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    )

    // Experience timeline animation
    gsap.fromTo(
      ".experience-item",
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: experienceRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    )

    // Certifications animation
    gsap.fromTo(
      ".cert-item",
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: certificationsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    )

    // Values animation
    gsap.fromTo(
      ".value-card",
      { y: 100, opacity: 0, rotationY: 45 },
      {
        y: 0,
        opacity: 1,
        rotationY: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: valuesRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    )
  }, [])

  return (
    <div className="min-h-screen py-12 px-4 bg-[#FEFEFE] dark:bg-[#040A1B] transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#040A1B] dark:text-[#FEFEFE] mb-4">About Me</h1>
          <p className="text-xl text-[#335495] dark:text-[#FEFEFE] max-w-3xl mx-auto">
            A passionate software designer dedicated to creating quality digital solutions and driving tech community
            growth through knowledge sharing
          </p>
        </div>

        {/* Personal Introduction */}
        <section id="story" ref={storyRef} className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="story-element text-3xl font-bold text-[#040A1B] dark:text-[#FEFEFE]">My Story</h2>
              <div className="space-y-4 text-[#335495] dark:text-[#FEFEFE]">
                <p className="story-element">
                My passion for programming grew throughout my undergraduate studies, leading me to pursue graduate research primarily focused on Microservices Architecture, 
                Containerization Technologies (Kubernetes, Docker Clusters), and Cloud Platform deployments and management (AWS, GCP), d
                elving deep into modern system architectures. During this time, I actively participated in cloud computing competitions and am enthusiastic about engaging with AWS and Google technical communities, 
                exchanging insights and practical experiences with industry peers.
                </p><br></br>
                <p className="story-element">
                  I firmly believe that technology is not merely a tool, but a powerful medium for solving problems and creating value. 
                  Therefore, I not only dedicate myself to continuous technical improvement but also wholeheartedly enjoy sharing my knowledge and experiences, 
                  hoping to assist fellow developers in navigating their technical journeys more smoothly. My current specialization lies in multimodal microservice root cause analysis, 
                  while continuously staying abreast of emerging trends like AI/ML applications in software development.
                </p><br></br>
                <p className="story-element">
                  Beyond my technical pursuits, I am also an avid traveler and a keen enthusiast for challenges. 
                  These experiences allow me to observe the world from a more open and diverse perspective, 
                  always maintaining a spirit of exploration and innovation when confronting complex problems.
                </p><br></br>
              </div>
            </div>
            <div className="story-element relative">
              <Image
                src="/aboutme.jpg?height=400&width=400"
                alt="Work photo"
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" ref={skillsRef} className="mb-16">
          <h2 className="text-3xl font-bold text-[#040A1B] dark:text-[#FEFEFE] mb-8 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon
              return (
                <Card key={index} className="skill-card">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <IconComponent className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-[#040A1B] dark:text-[#FEFEFE]">{skill.name}</h3>
                      </div>
                      <span className="text-sm text-[#335495] dark:text-[#FEFEFE]">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Experience Timeline */}
        <section id="experience" ref={experienceRef} className="mb-16">
          <h2 className="text-3xl font-bold text-[#040A1B] dark:text-[#FEFEFE] mb-8 text-center">
            Professional Experience
          </h2>
          <div className="space-y-8">
            {[
              {
                period: "2024 - Present",
                title: "National Taichung University of Education master",
                company: "Computer Science and Information Engineering Department",
                description:
                  "Microservices Architecture, and Cloud Platform deployments and management (AWS, GCP)",
              },
              {
                period: "2020 - 2024",
                title: "National Taichung University of Education bachelor",
                company: "Computer Science and Information Engineering Department",
                description:
                  "Containerization Technologies (Kubernetes, Docker Clusters)",
              },
            ].map((exp, index) => (
              <Card key={index} className="experience-item">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="md:w-32 flex-shrink-0">
                      <Badge variant="outline" className="text-blue-600 border-blue-200">
                        {exp.period}
                      </Badge>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-[#040A1B] dark:text-[#FEFEFE] text-lg">{exp.title}</h3>
                      <p className="text-blue-600 font-medium mb-2">{exp.company}</p>
                      <p className="text-[#335495] dark:text-[#FEFEFE]">{exp.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications" ref={certificationsRef} className="mb-16">
          <h2 className="text-3xl font-bold text-[#040A1B] dark:text-[#FEFEFE] mb-8 text-center">
            Professional Certifications
          </h2>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[#040A1B] dark:text-[#FEFEFE]">
                <Award className="h-5 w-5 text-yellow-600" />
                Achieved Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="cert-item flex items-center gap-2 p-3 bg-slate-50 dark:bg-[#335495]/20 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-[#040A1B] dark:text-[#FEFEFE]">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Values & Philosophy */}
        <section id="values" ref={valuesRef}>
          <h2 className="text-3xl font-bold text-[#040A1B] dark:text-[#FEFEFE] mb-8 text-center">
            Values & Philosophy
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="value-card text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-[#040A1B] dark:text-[#FEFEFE] mb-2">Continuous Learning</h3>
                <p className="text-[#335495] dark:text-[#FEFEFE] text-sm">
                  Technology evolves rapidly; maintaining learning enthusiasm is key to growth
                </p>
              </CardContent>
            </Card>

            <Card className="value-card text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-[#040A1B] dark:text-[#FEFEFE] mb-2">Knowledge Sharing</h3>
                <p className="text-[#335495] dark:text-[#FEFEFE] text-sm">
                  Growing together with the community through sharing experiences
                </p>
              </CardContent>
            </Card>

            <Card className="value-card text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-[#040A1B] dark:text-[#FEFEFE] mb-2">Quality First</h3>
                <p className="text-[#335495] dark:text-[#FEFEFE] text-sm">
                  Pursuing excellence in code quality and user experience
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
