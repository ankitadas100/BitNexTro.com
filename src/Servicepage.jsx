import React from 'react'
import { Code, HardDrive, Wrench, Cloud, Database, Shield, Globe, Cpu } from 'lucide-react'

export default function Servicepage() {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Software Development & Programming",
      gradient: "from-blue-500 to-blue-700",
      iconBg: "bg-blue-950",
      services: [
        "Custom Software",
        "Web & Mobile Apps",
        "DevOps & Automation",
        "Maintenance & Testing"
      ]
    },
    {
      icon: <HardDrive className="w-8 h-8" />,
      title: "Hardware & Infrastructure Services",
      gradient: "from-purple-500 to-purple-700",
      iconBg: "bg-purple-950",
      services: [
        "Workstations & Servers",
        "OS & Virtualization",
        "Network Devices",
        "Hardware Maintenance"
      ]
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Hardware Maintenance",
      gradient: "from-orange-500 to-orange-700",
      iconBg: "bg-orange-950",
      services: [
        "Network Setup",
        "Managed Networking",
        "VoIP and Collaboration",
        "Network Security"
      ]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Computing & Virtualization",
      gradient: "from-teal-500 to-teal-700",
      iconBg: "bg-teal-950",
      services: [
        "Cloud & Management",
        "IaaS",
        "PaaS",
        "SaaS"
      ]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Storage & Backup Solutions",
      gradient: "from-cyan-500 to-cyan-700",
      iconBg: "bg-cyan-950",
      services: [
        "Cloud Storage",
        "Data Backup",
        "Disaster Recovery",
        "Database Management"
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity & Compliance",
      gradient: "from-pink-500 to-pink-700",
      iconBg: "bg-pink-950",
      services: [
        "Security Audits",
        "Threat Detection",
        "Compliance Management",
        "Penetration Testing"
      ]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Digital Marketing & Web Services",
      gradient: "from-yellow-500 to-yellow-700",
      iconBg: "bg-yellow-950",
      services: [
        "SEO Optimization",
        "Content Management",
        "Social Media",
        "Web Analytics"
      ]
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Emerging Technologies",
      gradient: "from-indigo-500 to-indigo-700",
      iconBg: "bg-indigo-950",
      services: [
        "AI & Machine Learning",
        "IoT Solutions",
        "Blockchain",
        "Quantum Computing"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 py-16 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
          Our Professional Services
        </h1>
        <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto">
          Comprehensive IT solutions tailored to your business needs. From software development to cloud infrastructure, we deliver excellence at every level.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-900/50 hover:-translate-y-2"
          >
            {/* Icon Container */}
            <div className={`${service.iconBg} rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
              <div className={`bg-linear-to-br ${service.gradient} rounded-lg p-2 text-white`}>
                {service.icon}
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-white mb-4 leading-tight min-h-14">
              {service.title}
            </h3>

            {/* Services List */}
            <div className="space-y-2">
              {service.services.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center text-slate-400 hover:text-slate-300 transition-colors duration-200"
                >
                  <div className={`w-1.5 h-1.5 rounded-full bg-linear-to-r ${service.gradient} mr-2`}></div>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Hover Effect Overlay */}
            <div className={`absolute inset-0 rounded-2xl bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto mt-20 text-center bg-linear-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-slate-800">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Ready to Transform Your Business?
        </h2>
        <p className="text-slate-400 mb-8 text-lg">
          Let's discuss how our services can help you achieve your goals
        </p>
        <button className="bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105">
          Get Started Today
        </button>
      </div>
    </div>
  )
}
