import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Heart } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/0lai0",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/yu-chen-lai-8a836027a/",
      icon: Linkedin,
    },
    {
      name: "Email",
      href: "mailto:yuchenlai87@gmail.com",
      icon: Mail,
    },
  ]

  const quickLinks = [
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">YC</span>
              </div>
              <span className="font-bold text-white">YCLai</span>
            </Link>
            <p className="text-slate-400 text-sm">
              Software Designer & Knowledge Sharer
              <br />
              Connecting worlds through code, creating value with knowledge
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="font-semibold mb-4">Latest Articles</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/blog/AWS_Certified_AI_Practitioner_learning"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  AWS Certified AI Practitioner learning 
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/microservices-patterns"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  Microservices Architecture
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/typescript-advanced"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  Advanced TypeScript Techniques
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-semibold mb-4">Contact Me</h3>
            <div className="space-y-4">
              <p className="text-slate-400 text-sm">yuchenlai87@gmail.com</p>
              <div className="flex space-x-2">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon
                  return (
                    <Button
                      key={social.name}
                      variant="ghost"
                      size="sm"
                      asChild
                      className="text-slate-400 hover:text-white hover:bg-slate-800"
                    >
                      <Link href={social.href} target="_blank">
                        <IconComponent className="h-4 w-4" />
                      </Link>
                    </Button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">© 2025 YCLai. All rights reserved.</p>
          <p className="text-slate-400 text-sm flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-red-500" /> using Next.js
          </p>
        </div>
      </div>
    </footer>
  )
}
