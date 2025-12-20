import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Smartphone, Zap, ArrowRight, Briefcase, Cpu, Globe, Shield, Database, HardDrive, MonitorCloud, CloudUpload } from 'lucide-react';

// Mock Data (Replace with your actual props)
const services = [
  {
    icon: <Code size={32} />,
    title: "Software Development & Programming",
    desc: ["Custom Software", "Web & Mobile Apps", "DevOps & Automation", "Maintenance & Testing"],
    color: "from-blue-400 to-cyan-300"
  },
  {
    icon: <HardDrive  size={32} />,
    title: "Hardware & Infrastructure Services",
    desc: ["Workstations & Servers", "OS & Virtualization", "Network Devices", "Hardware Maintenance"],
    color: "from-purple-400 to-pink-300"
  },
  {
    icon: <MonitorCloud  size={32} />,
    title: "Hardware Maintenance",
    desc: ["Network Setup", "Managed Networking", "VoIP and Collaboration","Network Security"],
    color: "from-orange-400 to-red-300"
  },
  {
    icon: <CloudUpload  size={32} />,
    title: "Cloud Computing & Virtualization",
    desc: ["Cloud & Management", "IaaS ", "PaaS","SaaS"],
    color: "from-emerald-400 to-teal-300"
  },
  {
    icon: <Database size={32} />,
    title: "Data Storage, Backup & Analytics",
    desc: [
      "SAN/NAS & Cloud Storage Setup",
      "Database Administration",
      "Backup & Disaster Recovery",
      "Data Analytics & BI Solutions"
    ],
    color: "from-blue-400 to-cyan-300"
  },
  {
    icon: <Shield size={32} />,
    title: "Cybersecurity & Compliance",
    desc: [
      "Risk Assessment & Threat Protection",
      "Encryption & Access Control",
      "DLP & Security Monitoring",
      "Identity & Compliance Management"
    ],
    color: "from-purple-400 to-pink-300"
  },
  {
    icon: <Globe size={32} />,
    title: "Digital & Marketing Services",
    desc: [
      "Web Design & Development",
      "Graphic & Multimedia Design",
      "SEO & Social Media Management",
      "Email & Digital Advertising"
    ],
    color: "from-orange-400 to-red-300"
  },
  {
    icon: <Cpu size={32} />,
    title: "Emerging Technology & Innovation",
    desc: [
      "AI & Machine Learning",
      "Blockchain & Cryptocurrency",
      "IoT & Smart Systems",
      "AR/VR & RPA Solutions"
    ],
    color: "from-emerald-400 to-teal-300"
  },
  {
    icon: <Briefcase size={32} />,
    title: "Enterprise Solutions & Consulting",
    desc: [
      "IT Consulting & Strategy",
      "Managed IT Services",
      "E-commerce & ERP/CRM",
      "Migration & Professional Services"
    ],
    color: "from-indigo-400 to-violet-300"
  }


];
// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50 }
  }
};

const ServiceCard = ({ service }) => {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -10 }}
      className="group relative p-1 rounded-2xl bg-transparent transition-all duration-300"
    >
      {/* Gradient Border Effect */}
      <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-gray-200 to-gray-100 opacity-50 group-hover:opacity-100 group-hover:from-blue-500 group-hover:to-purple-600 transition-all duration-500 blur-sm -z-10" />
      
      {/* Card Content */}
      <div className="h-full  relative bg-[#72dc9c] backdrop-blur-xl p-8 rounded-xl shadow-sm group-hover:shadow-2xl transition-all duration-300 border border-white/20 overflow-hidden" style={{border:`3px solid blue`}}>
        
        {/* Decorative Background Blob inside card */}
        <div className={`absolute -top-10 -right-10 w-32 h-32 bg-linear-to-br ${service.color} opacity-55 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700`} />

        {/* Icon Container */}
        <div className={`w-14 h-14 mb-6 rounded-lg bg-linear-to-br ${service.color} p-0.5 shadow-lg group-hover:rotate-6 transition-transform duration-300`}>
          <div className="w-full h-full bg-[#00ff66]    rounded-[7px] flex items-center justify-center text-sky-700 group-hover:text-black">
            {service.icon}
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
          {service.title}
        </h3>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {service.desc.map((item, idx) => (
            <span 
              key={idx}
              className="px-3 py-1.5 bg-green-500 text-gray-900 text-sm rounded-full border border-gray-900 group-hover:bg-blue-50 group-hover:text-blue-700 group-hover:border-blue-200 transition-all duration-300"
            >
              {item}
            </span>
          ))}
        </div>

        {/* 'Learn More' Link that appears on hover */}
        <div className="flex items-center text-sm font-semibold text-blue-600 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          <span>Learn more</span>
          <ArrowRight className="ml-2 w-4 h-4" />
        </div>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-24 px-4 overflow-hidden bg-blue-400 mt-7" style={{borderTopRightRadius:"100px", borderTopLeftRadius:"100px"}}>
      {/* Modern Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-30">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-2"
        >
          <span className="px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold tracking-wide uppercase mb-1 inline-block animate-bounce">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-gray-900 via-blue-800 to-gray-900">
            Exceptional Services<br /> For Your Business
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            We provide comprehensive digital solutions customized to specific needs, 
            ensuring your business stands out in the modern landscape.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, idx) => (
            <ServiceCard key={idx} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;