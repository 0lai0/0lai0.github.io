"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Construction, ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FEFEFE] dark:bg-[#040A1B] transition-colors duration-500">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <Card className="p-8 bg-gradient-to-br from-[#A5BECF]/10 to-[#668BC4]/10 dark:from-[#335495]/20 dark:to-[#668BC4]/20 border-0 shadow-xl">
          <CardContent className="space-y-6">
            {/* Icon */}
            <div className="w-20 h-20 bg-gradient-to-r from-[#335495] to-[#668BC4] rounded-full flex items-center justify-center mx-auto shadow-lg">
              <Construction className="h-10 w-10 text-[#FEFEFE]" />
          </div>

            {/* Title */}
            <h1 className="text-4xl font-bold text-[#040A1B] dark:text-[#FEFEFE] mb-4">
              Blog Coming Soon
            </h1>

            {/* Description */}
            <p className="text-xl text-[#335495] dark:text-[#FEFEFE] leading-relaxed mb-8">
             I am preparing exciting technical articles and learning experiences. Stay tuned!
            </p>

            {/* Current Articles */}
            <div className="bg-[#FEFEFE]/50 dark:bg-[#040A1B]/50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-[#040A1B] dark:text-[#FEFEFE] mb-4">
              Currently available articles:
                    </h3>
                  <div className="space-y-3">
                <Link 
                  href="https://hackmd.io/@J1RmgHm8Q4-fUZSN7i1TqQ/ryPUbBBNel" 
                  target="_blank"
                  className="flex items-center justify-between p-3 bg-white dark:bg-[#335495]/20 rounded-lg hover:shadow-md transition-all duration-300 group"
                >
                  <span className="text-[#335495] dark:text-[#FEFEFE] group-hover:text-[#668BC4]">
                    AWS Certified AI Practitioner learning - Day 1
                      </span>
                  <ExternalLink className="h-4 w-4 text-[#335495] dark:text-[#FEFEFE] group-hover:text-[#668BC4]" />
                </Link>
                <Link 
                  href="https://hackmd.io/@J1RmgHm8Q4-fUZSN7i1TqQ/H1gRQ7uVee" 
                  target="_blank"
                  className="flex items-center justify-between p-3 bg-white dark:bg-[#335495]/20 rounded-lg hover:shadow-md transition-all duration-300 group"
                >
                  <span className="text-[#335495] dark:text-[#FEFEFE] group-hover:text-[#668BC4]">
                    AWS Certified AI Practitioner learning - Day 2
                      </span>
                  <ExternalLink className="h-4 w-4 text-[#335495] dark:text-[#FEFEFE] group-hover:text-[#668BC4]" />
                </Link>
                <Link 
                  href="https://hackmd.io/@J1RmgHm8Q4-fUZSN7i1TqQ/HymOjLYVgg" 
                  target="_blank"
                  className="flex items-center justify-between p-3 bg-white dark:bg-[#335495]/20 rounded-lg hover:shadow-md transition-all duration-300 group"
                >
                  <span className="text-[#335495] dark:text-[#FEFEFE] group-hover:text-[#668BC4]">
                    AWS Certified AI Practitioner learning - Day 3
                  </span>
                  <ExternalLink className="h-4 w-4 text-[#335495] dark:text-[#FEFEFE] group-hover:text-[#668BC4]" />
                </Link>
              </div>
              </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-[#335495] to-[#668BC4] hover:from-[#668BC4] hover:to-[#335495] text-[#FEFEFE]">
                <Link href="/">
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Back to Home
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="border-[#335495] text-[#335495] hover:bg-[#335495] hover:text-[#FEFEFE] dark:border-[#A5BECF] dark:text-[#FEFEFE] dark:hover:bg-[#A5BECF] dark:hover:text-[#040A1B]">
                <Link href="https://hackmd.io/@J1RmgHm8Q4-fUZSN7i1TqQ" target="_blank">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  View HackMD
                </Link>
              </Button>
            </div>

            {/* Footer */}
            <p className="text-sm text-[#335495]/70 dark:text-[#FEFEFE]/70 mt-6">
            Estimated launch time: Please stay tuned
            </p>
            </CardContent>
          </Card>
      </div>
    </div>
  )
}
