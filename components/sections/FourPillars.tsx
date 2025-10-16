import { Brain, Code, Shield } from "lucide-react"

export default function FourPillars() {
  const services = [
    {
      icon: Brain,
      title: "AI Upskill",
      description: "Make people more productive with AI. We train your teams to leverage AI tools effectively, turning your workforce into AI-empowered problem solvers who deliver faster, smarter results."
    },
    {
      icon: Shield,
      title: "AI Fast Track",
      description: "Improve your company processes with AI done smart. We integrate AI into your workflows with governance, compliance, and data sovereignty - delivering automation that works within your constraints."
    },
    {
      icon: Code,
      title: "AI Development",
      description: "Custom agentic app development. We build intelligent systems that act autonomously - from AI agents that handle customer support to workflows that coordinate complex business processes."
    }
  ]

  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl text-gray-900">
            Our services are focused on making real impact
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We empower your teams to harness AI, work smarter, and create products that truly stand out
          </p>
        </div>

        {/* Horizontal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon
            
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-purple-200 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                    <IconComponent className="h-6 w-6 text-purple-600" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-base">
                    {service.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
