"use client"

import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ExternalLink, Target, Users, MessageCircle, Handshake, Eye, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header currentPage="about" />

      {/* Back to Home Link */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 pt-8">
        <Link href="/" className="inline-flex items-center text-gray-300 hover:text-white transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>
      </div>

      {/* About Hero Section */}
      <section className="py-16 md:py-24">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-white">
              About
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Bitropy
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-[600px] mx-auto">
              Our mission, values, and the visionary behind our success story.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Why Bitropy was Created */}
            <Card className="bg-gray-800 border-gray-700 p-8">
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Target className="h-8 w-8 text-purple-400" />
                  <h2 className="text-3xl font-bold text-white">Why Bitropy was Created</h2>
                </div>
                <div className="text-gray-300 space-y-4 leading-relaxed">
                  <p>
                    As a founder with extensive experience in building and scaling technology organizations, I recognized a critical gap in the market. Many companies struggle to leverage the best available technology to drive their growth and innovation. They often lack the expertise, resources, or strategic guidance needed to make informed technology decisions that can truly transform their business.
                  </p>
                  <p>
                    Bitropy was born from my desire to help companies in the best possible way to harness cutting-edge technology solutions. Having witnessed firsthand the transformative power of well-implemented technology strategies through my work at Nordcloud, Worksuite, and other ventures, I wanted to create a consultancy that could bridge this gap for businesses of all sizes.
                  </p>
                  <p>
                    Our mission is to democratize access to world-class technology expertise, ensuring that every company—regardless of size or industry—can leverage the most effective technologies to achieve their goals and stay competitive in today's rapidly evolving digital landscape.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Our Values */}
            <Card className="bg-gray-800 border-gray-700 p-8">
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <Users className="h-8 w-8 text-purple-400" />
                  <h2 className="text-3xl font-bold text-white">Our Values</h2>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-900/50 flex-shrink-0">
                        <Target className="h-6 w-6 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Meritocracy</h4>
                        <p className="text-gray-300">We believe that the best ideas and contributions should be recognized and rewarded, regardless of hierarchy. Excellence and results drive our decisions.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-900/50 flex-shrink-0">
                        <MessageCircle className="h-6 w-6 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Feedback Oriented</h4>
                        <p className="text-gray-300">Continuous improvement through honest, constructive feedback. We create an environment where everyone can grow and learn from each other.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-900/50 flex-shrink-0">
                        <Handshake className="h-6 w-6 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Partnership</h4>
                        <p className="text-gray-300">We operate like a modern law firm where employees participate in revenue sharing. Everyone has a stake in our collective success and growth.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-900/50 flex-shrink-0">
                        <Eye className="h-6 w-6 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Customer Focus</h4>
                        <p className="text-gray-300">Our clients' success is our success. We prioritize understanding their needs and delivering solutions that create real, measurable value.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-900/50 flex-shrink-0">
                        <Shield className="h-6 w-6 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Honesty & Trustworthiness</h4>
                        <p className="text-gray-300">We build lasting relationships through transparent communication, ethical practices, and always delivering on our commitments.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Founder Section */}
            <Card className="bg-gray-800 border-gray-700 p-8">
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <Users className="h-8 w-8 text-purple-400" />
                  <h2 className="text-3xl font-bold text-white">Meet Our Founder</h2>
                </div>
                
                <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8 mb-8">
                  <div className="relative flex-shrink-0">
                    <Image
                      src="/darek.jpg"
                      alt="Darek Dwornikowski - CEO & Founder"
                      width={200}
                      height={200}
                      className="rounded-full border-4 border-purple-600"
                    />
                  </div>
                  <div className="space-y-4 text-center lg:text-left">
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">Darek Dwornikowski</h3>
                      <p className="text-xl text-purple-400 mb-2">Founder & CEO, Bitropy</p>
                      <Link 
                        href="https://linkedin.com/in/darekd" 
                        target="_blank"
                        className="inline-flex items-center text-gray-300 hover:text-purple-400 transition-colors"
                      >
                        Connect on LinkedIn <ExternalLink className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-2xl font-bold text-white mb-4">Technology Visionary & Serial Entrepreneur</h4>
                  <div className="text-gray-300 space-y-4 leading-relaxed">
                    <p>
                      Darek Dwornikowski is an experienced Polish entrepreneur and technology visionary who has been part of two successful exits with nine-figure valuations. Currently serving as CEO of Bitropy, he leads the company's strategic development, leveraging his extensive experience in building and scaling technology organizations.
                    </p>
                    <p>
                      Previously, as VP of Engineering and a member of the global leadership team at Nordcloud, Darek was instrumental in the company's transformation from a startup to a leading European cloud services provider, ultimately acquired by IBM for over $500M. It was Darek who built Nordcloud's Polish division from the ground up, scaling the team to over 400 employees and developing the company's SaaS business from scratch.
                    </p>
                    <p>
                      At Worksuite, serving as CTO, he participated in the company's sale to growth funds. His experience encompasses not only M&A strategies and preparing companies for exits, but also deep technical expertise in cloud computing, distributed systems, and blockchain, which is supported by his earlier academic career at Poznań University of Technology and his role as co-founder of Tenesys.
                    </p>
                    <p>
                      Today, Darek actively advises on technical due diligence for VC/PE funds and supports founders in scaling and selling their companies, bringing together his unique combination of technical depth and business acumen to drive successful outcomes.
                    </p>
                  </div>
                </div>

                <div className="border-t border-gray-700 pt-6">
                  <h4 className="text-xl font-semibold text-white mb-3">Key Achievements</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Two successful nine-figure exits as key leadership team member
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Built and scaled Nordcloud Poland from 0 to 400+ employees
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Developed SaaS business line that contributed to $500M+ acquisition by IBM
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Deep expertise in cloud computing, distributed systems, and blockchain technology
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Active advisor for VC/PE technical due diligence and founder support
                    </li>
                  </ul>
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