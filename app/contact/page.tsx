"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, MapPin, Linkedin, Github, MessageCircle, Clock, CheckCircle } from "lucide-react"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function ContactPage() {
  const headerRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const contactInfoRef = useRef<HTMLDivElement>(null)
  const faqRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    selectedServices: [] as string[]
  })

  // Form validation
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

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

    // Form animation
    gsap.fromTo(
      ".form-element",
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    )

    // Contact info animation
    gsap.fromTo(
      ".contact-card",
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contactInfoRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    )

    // FAQ animation
    gsap.fromTo(
      ".faq-item",
      { y: 60, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: faqRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    )

    // Services animation
    gsap.fromTo(
      ".service-card",
      { y: 80, opacity: 0, rotationY: 45 },
      {
        y: 0,
        opacity: 1,
        rotationY: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    )
  }, [])

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "yuchenlai87@gmail.com",
      description: "Best way to reach me, usually respond within 24 hours",
      href: "mailto:yuchenlai87@gmail.com",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/yourprofile",
      description: "Professional networking and collaboration opportunities",
      href: "https://www.linkedin.com/in/yu-chen-lai-8a836027a/",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/yourusername",
      description: "Check out my open-source projects and code",
      href: "https://github.com/0lai0",
    },
  ]

  const services = [
    {
      title: "Project Development",
      description: "Full-stack web apps, mobile app development",
      available: true,
    },
    {
      title: "Technical Consulting",
      description: "Architecture design, technology selection advice",
      available: true,
    },
    {
      title: "Code Review",
      description: "Code quality assessment and optimization suggestions",
      available: true,
    },
    {
      title: "Technical Training",
      description: "Corporate training, technical workshops",
      available: false,
    },
  ]

  const faqs = [
    {
      question: "Do you accept remote work?",
      answer: "Yes, I have extensive remote work experience and can effectively collaborate and communicate online.",
    },
    {
      question: "What are your technical specialties?",
      answer: "I specialize mainly in Cloud, Microservice, OpenSource, and GCP/AWS service architecture design.",
    },
    {
      question: "What's the process for project collaboration?",
      answer:
        "Usually we start with requirements discussion, then I provide technical solutions and timeline planning, and begin development after confirmation.",
    },
    {
      question: "How often do you update your blog?",
      answer:
        "I regularly share technical articles, usually 1-2 posts per month, covering latest tech trends and practical experience.",
    },
  ]

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }))
    }
  }

  // Handle service selection
  const handleServiceToggle = (service: string) => {
    setFormData(prev => {
      const services = prev.selectedServices.includes(service)
        ? prev.selectedServices.filter(s => s !== service)
        : [...prev.selectedServices, service]
      return {
        ...prev,
        selectedServices: services
      }
    })
  }

  // Validate form
  const validateForm = () => {
    const newErrors = {
      name: !formData.name ? "Name is required" : "",
      email: !formData.email ? "Email is required" : !formData.email.includes("@") ? "Invalid email format" : "",
      subject: !formData.subject ? "Subject is required" : "",
      message: !formData.message ? "Message is required" : ""
    }
    setErrors(newErrors)
    return !Object.values(newErrors).some(error => error)
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    try {
      // Here you would typically send the data to your backend
      // For now, we'll simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Clear form after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        selectedServices: []
      })
      setSubmitStatus("success")
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen py-12 px-4 bg-[#FEFEFE] dark:bg-[#040A1B] transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#040A1B] dark:text-[#FEFEFE] mb-4">Contact Me</h1>
          <p className="text-xl text-[#335495] dark:text-[#FEFEFE] max-w-3xl mx-auto">
            Whether it's project collaboration, technical consulting, or knowledge exchange, I'd love to connect and
            discuss with you
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div id="contact-form" ref={formRef} className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#040A1B] dark:text-[#FEFEFE]">
                  <MessageCircle className="h-5 w-5" />
                  Send Message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="form-element space-y-2">
                      <Label htmlFor="name" className="text-[#040A1B] dark:text-[#FEFEFE]">
                        Name *
                      </Label>
                      <Input 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="YCLai"
                        className={errors.name ? "border-red-500" : ""}
                      />
                      {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    </div>
                    <div className="form-element space-y-2">
                      <Label htmlFor="email" className="text-[#040A1B] dark:text-[#FEFEFE]">
                        Email *
                      </Label>
                      <Input 
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        className={errors.email ? "border-red-500" : ""}
                      />
                      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="form-element space-y-2">
                    <Label htmlFor="subject" className="text-[#040A1B] dark:text-[#FEFEFE]">
                      Subject *
                    </Label>
                    <Input 
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Brief description of your needs or questions"
                      className={errors.subject ? "border-red-500" : ""}
                    />
                    {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
                  </div>

                  <div className="form-element space-y-2">
                    <Label htmlFor="message" className="text-[#040A1B] dark:text-[#FEFEFE]">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please describe your requirements, project details, or topics you'd like to discuss in detail..."
                      rows={6}
                      className={errors.message ? "border-red-500" : ""}
                    />
                    {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                  </div>

                  <div className="form-element space-y-4">
                    <div className="text-sm text-[#335495] dark:text-[#FEFEFE]">
                      <p className="mb-2">Please select the service types you're interested in:</p>
                      <div className="flex flex-wrap gap-2">
                        {services.map((service, index) => (
                          <Badge
                            key={index}
                            variant={service.available ? "outline" : "secondary"}
                            className={`cursor-pointer ${
                              service.available
                                ? formData.selectedServices.includes(service.title)
                                  ? "bg-[#335495] text-white dark:bg-[#A5BECF] dark:text-[#040A1B]"
                                  : "hover:bg-blue-50 dark:hover:bg-[#335495]/20 border-blue-200"
                                : "opacity-50"
                            }`}
                            onClick={() => service.available && handleServiceToggle(service.title)}
                          >
                            {service.title}
                            {!service.available && " (Not Available)"}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full md:w-auto bg-gradient-to-r from-[#335495] to-[#668BC4] text-white hover:from-[#668BC4] hover:to-[#335495] focus:ring-4 focus:ring-[#668BC4]/50 transition-all duration-300"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>

                    {submitStatus === "success" && (
                      <p className="text-green-500 text-sm">Message sent successfully!</p>
                    )}
                    {submitStatus === "error" && (
                      <p className="text-red-500 text-sm">Failed to send message. Please try again.</p>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div ref={contactInfoRef} className="space-y-6">
            {/* Contact Methods */}
            <Card className="contact-card">
              <CardHeader>
                <CardTitle className="text-[#040A1B] dark:text-[#FEFEFE]">Contact Methods</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon
                  return (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 dark:bg-[#335495]/20 rounded-lg flex items-center justify-center">
                          <IconComponent className="h-5 w-5 text-blue-600 dark:text-[#A5BECF]" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-[#040A1B] dark:text-[#FEFEFE]">{method.title}</h4>
                          <Link href={method.href} className="text-sm text-blue-600 hover:underline">
                            {method.value}
                          </Link>
                        </div>
                      </div>
                      <p className="text-xs text-[#335495]/70 dark:text-[#FEFEFE]/70 ml-13">{method.description}</p>
                    </div>
                  )
                })}
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card className="contact-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#040A1B] dark:text-[#FEFEFE]">
                  <Clock className="h-5 w-5" />
                  Response Time
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-[#335495] dark:text-[#FEFEFE]">Email: Within 24 hours</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-[#335495] dark:text-[#FEFEFE]">LinkedIn: Within 48 hours</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-blue-500" />
                  <span className="text-[#335495] dark:text-[#FEFEFE]">Urgent projects: Immediate response</span>
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="contact-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#040A1B] dark:text-[#FEFEFE]">
                  <MapPin className="h-5 w-5" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#335495] dark:text-[#FEFEFE] mb-2">Taichung, Taiwan</p>
                <p className="text-xs text-[#335495]/70 dark:text-[#FEFEFE]/70">
                   welcome face-to-face meetings
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <section id="faq-section" ref={faqRef} className="mt-16">
          <h2 className="text-2xl font-bold text-[#040A1B] dark:text-[#FEFEFE] mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="faq-item">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-[#040A1B] dark:text-[#FEFEFE] mb-2">{faq.question}</h3>
                  <p className="text-sm text-[#335495] dark:text-[#FEFEFE]">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Services Overview */}
        <section id="services-section" ref={servicesRef} className="mt-16">
          <h2 className="text-2xl font-bold text-[#040A1B] dark:text-[#FEFEFE] mb-8 text-center">Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className={`service-card ${service.available ? "" : "opacity-60"}`}>
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-[#040A1B] dark:text-[#FEFEFE] mb-2">{service.title}</h3>
                  <p className="text-sm text-[#335495] dark:text-[#FEFEFE] mb-3">{service.description}</p>
                  <Badge variant={service.available ? "default" : "secondary"}>
                    {service.available ? "Available" : "Not Available"}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
