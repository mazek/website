import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ExternalLink, Target, Users, MessageCircle, Handshake, Eye, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Bitropy - Exit-Proven AI & Technology Leadership",
  description: "Learn about Bitropy's leadership team with proven track records from 9-figure exits (Nordcloud to IBM, Worksuite) and European e-commerce platforms. Expert AI consulting, data sovereignty, and fractional CTO services for enterprise technology transformation.",
  openGraph: {
    type: "website",
    title: "About Bitropy - Exit-Proven AI & Technology Leadership",
    description: "Leadership team with proven track records from 9-figure exits and European e-commerce platforms. Expert AI consulting and fractional CTO services.",
    url: "https://bitropy.io/about",
    images: [
      {
        url: "https://bitropy.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bitropy Leadership Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Bitropy - Exit-Proven AI & Technology Leadership",
    description: "Leadership team with proven track records from 9-figure exits and European e-commerce platforms. Expert AI consulting and fractional CTO services.",
    images: ["https://bitropy.io/og-image.png"],
  },
  alternates: {
    canonical: "https://bitropy.io/about",
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header currentPage="about" />

      {/* Back to Home Link */}
      <div className="w-full max-w-6xl mx-auto px-6 md:px-8 pt-8">
        <Link href="/" className="inline-flex items-center text-gray-600 hover:text-purple-600 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>
      </div>

      {/* About Hero Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="w-full max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl text-gray-900">
              About
              <span className="text-purple-600">
                {" "}
                Bitropy
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our mission, values, and the visionary behind our success story.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Founders Section */}
            <Card className="bg-white border-gray-200 p-8">
              <CardContent className="space-y-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Users className="h-8 w-8 text-purple-600" />
                  <h2 className="text-3xl font-medium text-gray-900">Backed by Decades of Experience</h2>
                </div>

                {/* Two-column founder layout */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Darek Dwornikowski */}
                  <div className="space-y-4">
                    <div className="relative w-48 h-48 mx-auto md:mx-0">
                      <Image
                        src="/darek.jpg"
                        alt="Darek Dwornikowski"
                        width={192}
                        height={192}
                        className="rounded-lg object-cover w-full h-full"
                      />
                    </div>
                    <div className="border-t-2 border-gray-300 pt-4">
                      <h3 className="text-xl font-semibold text-purple-600 mb-1">Darek Dwornikowski</h3>
                      <p className="text-lg font-medium text-purple-600 mb-3">co-founder and CEO</p>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        Helped build and scale Europe&apos;s largest cloud integrator - Nordcloud successfully exited to IBM for 500M. ex Computer scientist and researcher.
                      </p>
                      <Link
                        href="https://linkedin.com/in/darekd"
                        target="_blank"
                        className="inline-flex items-center text-gray-600 hover:text-purple-600 transition-colors mt-3 text-sm"
                      >
                        Connect on LinkedIn <ExternalLink className="h-3 w-3 ml-1" />
                      </Link>
                    </div>
                  </div>

                  {/* Marcin Mazurek */}
                  <div className="space-y-4">
                    <div className="relative w-48 h-48 mx-auto md:mx-0">
                      <Image
                        src="/marcin.png"
                        alt="Marcin Mazurek"
                        width={192}
                        height={192}
                        className="rounded-lg object-cover w-full h-full"
                      />
                    </div>
                    <div className="border-t-2 border-gray-300 pt-4">
                      <h3 className="text-xl font-semibold text-purple-600 mb-1">Marcin Mazurek</h3>
                      <p className="text-lg font-medium text-purple-600 mb-3">co-founder and board member</p>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        CPTO & Board member @ Autopay Group, VP of Technology in Allegro - biggest European marketplace, Stanford GSB alumni.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Why Bitropy was Created */}
            <Card className="bg-white border-gray-200 p-8">
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Target className="h-8 w-8 text-purple-600" />
                  <h2 className="text-3xl font-medium text-gray-900">Why Bitropy was Created</h2>
                </div>
                <div className="text-gray-600 space-y-4 leading-relaxed">
                  <p>Between us, we&apos;ve scaled Europe&apos;s largest cloud integrator to a 500M exit, led technology at Europe&apos;s biggest marketplace, and earned Stanford GSB credentials. Through it all, we saw the same pattern: talented companies held back by technology decisions they didn&apos;t need to make alone.</p>
                  <p>Bitropy exists to change that. We bring the strategic thinking and technical execution from our combined decades of experience directly to companies ready to accelerate their growth. No lengthy discovery phases. No theoretical frameworks. Just proven expertise applied to your specific challenges.</p>
                  <p>We believe exceptional technology guidance shouldn&apos;t be reserved for enterprise budgets or locked behind consulting bureaucracy. Every ambitious company deserves access to leaders who&apos;ve actually built, scaled, and successfully exited technology organizations.</p>
                </div>
              </CardContent>
            </Card>

            {/* Our Values */}
            <Card className="bg-white border-gray-200 p-8">
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <Users className="h-8 w-8 text-purple-600" />
                  <h2 className="text-3xl font-medium text-gray-900">Our Values</h2>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-50 flex-shrink-0">
                        <Target className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-gray-900 mb-2">Meritocracy</h4>
                        <p className="text-gray-600">We believe that the best ideas and contributions should be recognized and rewarded, regardless of hierarchy. Excellence and results drive our decisions.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-50 flex-shrink-0">
                        <MessageCircle className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-gray-900 mb-2">Feedback Oriented</h4>
                        <p className="text-gray-600">Continuous improvement through honest, constructive feedback. We create an environment where everyone can grow and learn from each other.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-50 flex-shrink-0">
                        <Handshake className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-gray-900 mb-2">Partnership</h4>
                        <p className="text-gray-600">We operate like a modern law firm where employees participate in revenue sharing. Everyone has a stake in our collective success and growth.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-50 flex-shrink-0">
                        <Eye className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-gray-900 mb-2">Customer Focus</h4>
                        <p className="text-gray-600">Our clients&apos; success is our success. We prioritize understanding their needs and delivering solutions that create real, measurable value.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-50 flex-shrink-0">
                        <Shield className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-gray-900 mb-2">Honesty & Trustworthiness</h4>
                        <p className="text-gray-600">We build lasting relationships through transparent communication, ethical practices, and always delivering on our commitments.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}