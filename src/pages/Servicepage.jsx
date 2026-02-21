import React, { useState } from 'react';
import { 
  Settings, 
  ChevronDown, 
  Cpu, 
  Network, 
  Cloud, 
  ShieldCheck, 
  BrainCircuit, 
  ArrowRight,
  Monitor,
  Database,
  Shield,
  Headphones,
  Globe,
  GitBranch,
  TrendingUp,
  CheckCircle,
  ChevronRight
} from 'lucide-react';

// --- DATA STRUCTURE ---
const ALL_SERVICES = [
  {
    id: 1, 
    Icon: BrainCircuit, 
    title: "Artificial Intelligence",
    tagline: "Harness the power of AI to automate and scale your workflows",
    color: "#7c3aed", 
    lightColor: "#f5f3ff", 
    borderColor: "#ddd6fe",
    subItems: [
      { name: "Generative AI Solutions", desc: "Custom LLMs and automation for your business" },
      { name: "Machine Learning Models", desc: "Data-driven insights and predictive analytics" },
      { name: "Computer Vision", desc: "Image and video processing for automation" },
      { name: "AI Strategy Consulting", desc: "Roadmaps for AI integration and adoption" },
      { name: "NLP & Chatbots", desc: "Intelligent customer interaction platforms" }
    ]
  },
  {
    id: 2, 
    Icon: Network, 
    title: "Networking & Security",
    tagline: "Robust infrastructure and iron-clad protection for your data",
    color: "#059669", 
    lightColor: "#ecfdf5", 
    borderColor: "#d1fae5",
    subItems: [
      { name: "Cybersecurity Audit", desc: "Comprehensive vulnerability testing and risk assessment" },
      { name: "Managed Firewall", desc: "Next-gen protection and threat monitoring" },
      { name: "SD-WAN Solutions", desc: "Optimized connectivity for multi-site businesses" },
      { name: "Zero Trust Architecture", desc: "Modern security protocols for remote work" },
      { name: "Cloud Security", desc: "Protecting your assets across AWS, Azure, and GCP" }
    ]
  },
  {
    id: 3, 
    Icon: Settings, 
    title: "Managed Services",
    tagline: "Proactive IT management so you can focus on your business",
    color: "#d97706", 
    lightColor: "#fffbeb", 
    borderColor: "#fde68a",
    subItems: [
      { name: "Managed IT Support", desc: "Your dedicated IT team without the overhead" },
      { name: "Network Monitoring", desc: "Real-time visibility and proactive resolution" },
      { name: "Patch Management", desc: "Automated OS and software updates" },
      { name: "Helpdesk Services", desc: "Multi-tiered support for all your staff's needs" },
      { name: "Asset Management", desc: "Track hardware inventory and licenses" },
      { name: "IT Consulting", desc: "Roadmaps aligned with your objectives" }
    ]
  },
  {
    id: 4, 
    Icon: Monitor, 
    title: "Hardware Support",
    tagline: "Keep your infrastructure running at peak performance",
    color: "#2563eb", 
    lightColor: "#eff6ff", 
    borderColor: "#bfdbfe",
    subItems: [
      { name: "On-Site Hardware Repair", desc: "Fast, expert repairs at your location with minimal downtime" },
      { name: "Server & Workstation Setup", desc: "Professional configuration of enterprise-grade equipment" },
      { name: "Network Device Management", desc: "Routers, switches, firewalls — optimized" }
    ]
  },
  {
    id: 5, 
    Icon: Headphones, 
    title: "24/7 Remote Support",
    tagline: "Round-the-clock expert assistance whenever you need it",
    color: "#059669", 
    lightColor: "#ecfdf5", 
    borderColor: "#a7f3d0",
    subItems: [
      { name: "24/7 Helpdesk", desc: "Live agents available nights, weekends, and holidays" },
      { name: "Remote Desktop Support", desc: "Instant screen-share and takeover for fast resolution" }
    ]
  }
];

// --- SUB-COMPONENTS ---
const ServiceCard = ({ item, color, lightColor, borderColor }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="p-4 rounded-xl cursor-pointer transition-all duration-200 flex items-start gap-3 border"
      style={{
        background: hovered ? lightColor : '#ffffff',
        borderColor: hovered ? borderColor : '#f1f5f9',
        boxShadow: hovered ? `0 10px 25px -5px ${color}20` : 'none'
      }}
    >
      <div 
        className="w-2 h-2 rounded-full mt-2 transition-all"
        style={{ 
          background: color,
          boxShadow: hovered ? `0 0 10px ${color}` : 'none'
        }} 
      />
      <div>
        <h4 className="text-sm font-bold text-slate-900 leading-tight mb-1">{item.name}</h4>
        <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
      </div>
    </div>
  );
};

// --- MAIN COMPONENT ---
export default function App() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activePageIndex, setActivePageIndex] = useState(0);

  return (
    <div className="min-h-screen bg-white font-[play]">
      {/* NAVBAR SECTION */}
      

      {/* HERO SECTION */}
      <div className="pt-24 pb-16 px-4 bg-slate-950 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#168acc20] via-transparent to-transparent opacity-50" />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Comprehensive IT Solutions
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Services Built for <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">Modern Business</span>
          </h1>
          
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            From hardware on your floor to software in the cloud — one trusted partner for everything IT.
          </p>
        </div>
      </div>

      {/* TABS / SERVICES SECTION */}
      <div className="max-w-7xl mx-auto py-20 px-6">
        <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-[2.5rem] p-4 lg:p-8 shadow-xl border border-slate-100">
          
          {/* Left Nav (Tabs) */}
          <div className="lg:w-1/3 flex flex-col gap-2">
            {ALL_SERVICES.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActivePageIndex(index)}
                className={`flex items-center gap-4 p-5 rounded-2xl transition-all duration-300 text-left ${
                  activePageIndex === index 
                  ? 'bg-slate-900 text-white shadow-lg shadow-slate-200 scale-[1.02]' 
                  : 'hover:bg-slate-50 text-slate-600'
                }`}
              >
                <service.Icon size={24} className={activePageIndex === index ? 'text-white' : 'text-slate-400'} />
                <div>
                  <div className="font-bold text-lg">{service.title}</div>
                  <div className={`text-xs opacity-60 ${activePageIndex === index ? 'text-slate-300' : ''}`}>
                    {service.subItems.length} solutions available
                  </div>
                </div>
                <ChevronRight size={18} className="ml-auto opacity-40" />
              </button>
            ))}
          </div>

          {/* Right Content */}
          <div className="lg:w-2/3">
            <div className="h-full rounded-[2rem] p-8 border border-slate-100 bg-slate-50/30 flex flex-col">
              <div className="flex items-center gap-4 mb-8">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white"
                  style={{ backgroundColor: ALL_SERVICES[activePageIndex].color }}
                >
                  {React.createElement(ALL_SERVICES[activePageIndex].Icon, { size: 24 })}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">{ALL_SERVICES[activePageIndex].title}</h2>
                  <p className="text-slate-500">{ALL_SERVICES[activePageIndex].tagline}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ALL_SERVICES[activePageIndex].subItems.map((item, idx) => (
                  <ServiceCard 
                    key={idx} 
                    item={item} 
                    color={ALL_SERVICES[activePageIndex].color}
                    lightColor={ALL_SERVICES[activePageIndex].lightColor}
                    borderColor={ALL_SERVICES[activePageIndex].borderColor}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}