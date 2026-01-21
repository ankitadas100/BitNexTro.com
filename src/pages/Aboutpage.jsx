import React from 'react';
import { Shield, Zap, Globe, Users, Target, Award } from 'lucide-react';

export default function AboutPage() {
  const services = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity",
      description: "Advanced security solutions to protect your digital assets and ensure business continuity."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Scalable Infrastructure",
      description: "Build robust, scalable systems that grow with your business needs."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Networking Solutions",
      description: "Enterprise-grade networking infrastructure for seamless connectivity."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Enterprise Support",
      description: "24/7 dedicated support to keep your operations running smoothly."
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Enterprise Clients" },
    { number: "24/7", label: "Support Available" }
  ];

  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Innovation",
      description: "Constantly pushing boundaries with cutting-edge technology solutions."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Excellence",
      description: "Committed to delivering the highest quality in every project."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security First",
      description: "Your data security and privacy are our top priorities."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Client-Centric",
      description: "Building lasting partnerships through dedicated service."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-400 via-green-400 to-teal-300">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 lg:space-y-8 z-10">
              <div className="inline-block">
                <span className="bg-white/90 backdrop-blur-sm text-indigo-700 font-semibold px-6 py-2 rounded-full text-sm lg:text-base shadow-lg">
                  About BitNextro
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-indigo-900">Building Smart</span>
                <br />
                <span className="text-indigo-700">Technology for Modern</span>
                <br />
                <span className="text-indigo-900">Businesses</span>
              </h1>
              
              <div className="space-y-4 text-gray-800">
                <p className="text-base sm:text-lg lg:text-xl font-medium leading-relaxed">
                  <span className="font-bold text-indigo-900">BitNextro Solutions</span> is a next-generation IT company focused on 
                  transforming ideas into powerful digital solutions. We design reliable software, scalable infrastructure, 
                  and secure systems that simplify business operations and accelerate growth.
                </p>
                
                <p className="text-base sm:text-lg leading-relaxed">
                  Our mission is to deliver practical, end-to-end IT services — from networking and cybersecurity 
                  to enterprise support — enabling organizations to thrive in an ever-evolving digital landscape.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button className="bg-indigo-700 hover:bg-indigo-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Get Started
                </button>
                <button className="bg-white/90 backdrop-blur-sm hover:bg-white text-indigo-700 px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                  Learn More
                </button>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="relative lg:h-[600px] h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/90 via-blue-900/80 to-cyan-900/70">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-20 animate-pulse"></div>
                    <div className="absolute inset-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Shield className="w-32 h-32 lg:w-40 lg:h-40 text-cyan-300" />
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute top-20 right-20 w-16 h-16 bg-cyan-400/30 backdrop-blur-sm rounded-lg animate-bounce"></div>
                <div className="absolute bottom-32 left-16 w-20 h-20 bg-blue-400/30 backdrop-blur-sm rounded-lg animate-bounce" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute top-40 left-32 w-12 h-12 bg-indigo-400/30 backdrop-blur-sm rounded-lg animate-bounce" style={{animationDelay: '1s'}}></div>
              </div>
              
              <div className="absolute bottom-8 right-8 bg-indigo-900/80 backdrop-blur-md text-white px-6 py-3 rounded-lg">
                <p className="text-xl font-bold">BITNEXTRO SOLUTIONS PVT LTD</p>
                <p className="text-sm text-cyan-300">IT SUPPORT & SERVICES</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 lg:py-16 bg-indigo-900/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-3xl lg:text-4xl font-bold text-indigo-700 mb-2">{stat.number}</div>
                <div className="text-sm lg:text-base text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-indigo-900 mb-4">Our Core Services</h2>
            <p className="text-lg text-gray-800 max-w-2xl mx-auto">
              Comprehensive IT solutions tailored to meet your business needs
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="text-indigo-700 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-indigo-900 mb-3">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 lg:py-20 bg-white/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-indigo-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-800 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-indigo-700 text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-indigo-900 mb-2">{value.title}</h3>
                <p className="text-gray-700 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-indigo-700 to-indigo-900 rounded-2xl p-8 lg:p-12 shadow-2xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg lg:text-xl text-cyan-100 mb-8">
              Let's build something amazing together. Contact us today to get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-700 hover:bg-cyan-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                Contact Us
              </button>
              <button className="bg-cyan-500 text-white hover:bg-cyan-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
