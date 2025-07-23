import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "YCLai - Software Designer & Knowledge Sharer",
    template: "%s | YCLai",
  },
  description:
    "Professional software designer specializing in full-stack development and system architecture design, dedicated to sharing technical knowledge and development experience",
  keywords: ["Software Design", "Full-Stack Development", "React", "Node.js", "TypeScript", "Technical Blog"],
  authors: [{ name: "YCLai" }],
  creator: "YCLai",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourwebsite.com",
    title: "YCLai - Software Designer & Knowledge Sharer",
    description:
      "Professional software designer specializing in full-stack development and system architecture design, dedicated to sharing technical knowledge and development experience",
    siteName: "YCLai Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "YCLai - Software Designer & Knowledge Sharer",
    description:
      "Professional software designer specializing in full-stack development and system architecture design, dedicated to sharing technical knowledge and development experience",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange={false}>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
