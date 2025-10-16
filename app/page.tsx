import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import FourPillars from "@/components/sections/FourPillars"
import ClientButton from "@/components/ui/ClientButton"
import { Code, Shield, ExternalLink } from "lucide-react"
import EntropyAnimation from "@/components/ui/EntropyAnimation"
import Image from "next/image"
import Link from "next/link"

export default function ConsultingLandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header currentPage="home" />

      {/* Hero Section */}
      <section className="relative py-24 md:py-40 overflow-hidden">
        {/* Subtle gradient background with dot pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
        
        {/* Entropy Animation Background */}
        <div className="absolute inset-0 opacity-30">
          <EntropyAnimation 
            latticeCount={3}
          />
        </div>

        <div className="w-full max-w-6xl mx-auto px-6 md:px-8 relative z-10">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl text-gray-900">
              Empowered by
              <span className="text-purple-600">
                {" "}
                AI
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We empower product teams to harness AI, work smarter, and create products that truly stand out.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <ClientButton
                size="lg"
                className="text-lg font-semibold px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                href="https://calendly.com/darek-bitropy/call"
              >
                Start Your AI Fast Track
              </ClientButton>
            </div>
          </div>
        </div>

      </section>

      {/* Services Section */}
      <FourPillars />

      {/* Why Bitropy Section */}
      <section id="expertise" className="py-24 md:py-32 bg-white">
        <div className="w-full max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center space-y-6 mb-16 max-w-4xl mx-auto">
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl text-gray-900">
              Bitropy is <span className="text-purple-600">different</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We&apos;re a technology-first company helping enterprises adopt AI <span className="font-semibold">securely, privately, and quickly</span>.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              Unlike traditional consultancies that deliver slides and roadmaps, we are <span className="font-semibold">forward-deployed engineers</span> who build, deploy, and optimize AI solutions that deliver <span className="font-semibold">measurable business value in weeks—not years</span>.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center space-y-4">
              <div className="text-4xl font-bold text-purple-600">Forward-Deployed</div>
              <h3 className="text-xl font-semibold text-gray-900">Engineers, Not Consultants</h3>
              <p className="text-gray-600">
                AI specialists and data scientists who build and deploy, not just strategize
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="text-4xl font-bold text-purple-600">Weeks</div>
              <h3 className="text-xl font-semibold text-gray-900">To Measurable Value</h3>
              <p className="text-gray-600">
                Working AI solutions and optimized deployments, not PowerPoints and roadmaps
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="text-4xl font-bold text-purple-600">Transparent</div>
              <h3 className="text-xl font-semibold text-gray-900">Value-Based Pricing</h3>
              <p className="text-gray-600">
                Long-term impact focus with transparent, value-based engagement models
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="testimonials" className="py-24 md:py-32 bg-gray-50">
        <div className="w-full max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl text-gray-900">
              Real Results
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Delivered in weeks, not months
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 w-full max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <Code className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Private AI for Financial Services</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Deployed complete on-premises AI infrastructure with private LLMs for a major bank. Achieved enterprise AI capabilities while maintaining 100% data sovereignty and regulatory compliance.
                </p>
                <p className="text-purple-600 font-semibold text-sm">Result: Zero data leakage, full compliance</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Private USDC Payment Gateway</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Built secure, self-hosted payment infrastructure for USDC transactions. Enabled private stablecoin payments while maintaining complete transaction privacy and regulatory compliance.
                </p>
                <p className="text-purple-600 font-semibold text-sm">Result: $10M+ processed, zero custody risk</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="w-full max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl text-gray-900">
              Backed by Decades of Experience
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Darek Dwornikowski */}
            <div className="space-y-4">
              <div className="relative w-48 h-48 mx-auto">
                <Image
                  src="/darek.jpg"
                  alt="Darek Dwornikowski"
                  width={192}
                  height={192}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
              <div className="border-t-2 border-gray-300 pt-4 text-center">
                <h3 className="text-xl font-semibold text-purple-600 mb-1">Darek Dwornikowski</h3>
                <p className="text-lg font-medium text-purple-600 mb-3">co-founder and CEO</p>
                <p className="text-sm text-gray-600 leading-relaxed">
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
              <div className="relative w-48 h-48 mx-auto">
                <Image
                  src="/marcin.png"
                  alt="Marcin Mazurek"
                  width={192}
                  height={192}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
              <div className="border-t-2 border-gray-300 pt-4 text-center">
                <h3 className="text-xl font-semibold text-purple-600 mb-1">Marcin Mazurek</h3>
                <p className="text-lg font-medium text-purple-600 mb-3">co-founder and board member</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  CPTO & Board member @ Autopay Group, VP of Technology in Allegro - biggest European marketplace, Stanford GSB alumni.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
