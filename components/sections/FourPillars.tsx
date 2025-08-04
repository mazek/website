"use client"

import { useState } from "react"
import { Brain, Code, Database, Shield } from "lucide-react"

interface FourPillarsProps {
  dict: any
}

export default function FourPillars({ dict }: FourPillarsProps) {
  const [activeService, setActiveService] = useState('advisory')

  const services = [
    {
      key: 'advisory',
      icon: Brain,
      title: dict.services.advisory.title,
      description: dict.services.advisory.description,
      whatWeDeliver: dict.services.advisory.what_we_deliver,
      services: dict.services.advisory.services,
      perfectFor: dict.services.advisory.perfect_for
    },
    {
      key: 'ai_productivity',
      icon: Database,
      title: dict.services.ai_productivity.title,
      description: dict.services.ai_productivity.description,
      whatWeDeliver: dict.services.advisory.what_we_deliver,
      services: dict.services.ai_productivity.services,
      perfectFor: dict.services.ai_productivity.perfect_for
    },
    {
      key: 'blockchain',
      icon: Code,
      title: dict.services.blockchain.title,
      description: dict.services.blockchain.description,
      whatWeDeliver: dict.services.advisory.what_we_deliver,
      services: dict.services.blockchain.services,
      perfectFor: dict.services.blockchain.perfect_for
    },
    {
      key: 'infrastructure',
      icon: Shield,
      title: dict.services.infrastructure.title,
      description: dict.services.infrastructure.description,
      whatWeDeliver: dict.services.advisory.what_we_deliver,
      services: dict.services.infrastructure.services,
      perfectFor: dict.services.infrastructure.perfect_for
    }
  ]

  const activeServiceData = services.find(service => service.key === activeService)

  return (
    <section id="services" className="py-20 md:py-32 relative bg-gray-800">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
            {dict.services.section_title.split(' ').slice(0, -1).join(' ')}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              {" "}
              {dict.services.section_title.split(' ').slice(-1)[0]}
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-[800px] mx-auto">
            {dict.services.section_subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Left side - Service buttons */}
          <div className="flex flex-col justify-between aspect-square space-y-4">
            {services.map((service) => {
              const IconComponent = service.icon
              const isActive = activeService === service.key
              
              return (
                <button
                  key={service.key}
                  onClick={() => setActiveService(service.key)}
                  className={`w-full flex-1 p-6 rounded-lg border transition-all duration-300 text-left group ${
                    isActive 
                      ? 'bg-purple-900/50 border-purple-500 shadow-lg shadow-purple-500/20' 
                      : 'bg-gray-900 border-gray-700 hover:border-purple-500/50 hover:bg-gray-800'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-lg transition-all ${
                      isActive 
                        ? 'bg-purple-800/50' 
                        : 'bg-purple-900/50 group-hover:bg-purple-800/50'
                    }`}>
                      <IconComponent className="h-6 w-6 text-purple-400" />
                    </div>
                    <h3 className={`text-xl font-semibold transition-colors ${
                      isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'
                    }`}>
                      {service.title}
                    </h3>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Right side - Content display (square) */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-8 aspect-square flex flex-col justify-center">
            {activeServiceData && (
              <div className="space-y-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-purple-900/50">
                    <activeServiceData.icon className="h-8 w-8 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {activeServiceData.title}
                  </h3>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  {activeServiceData.description}
                </p>

                <div>
                  <h4 className="font-semibold text-white mb-3">
                    {activeServiceData.whatWeDeliver}
                  </h4>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    {activeServiceData.services.map((service: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-purple-300 text-sm font-medium bg-purple-900/20 p-3 rounded-lg border border-purple-900/50">
                  {activeServiceData.perfectFor}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}