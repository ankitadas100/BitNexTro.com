import { useState, useEffect, useRef } from "react";

const services = [
  {
    id: 1,
    icon: "🛡️",
    title: "Threat Detection & Response",
    desc: "Real-time monitoring with AI-powered threat intelligence to detect, analyze, and neutralize cyber threats before they cause damage.",
    stat: "99.8% Detection Rate",
  },
  {
    id: 2,
    icon: "🔍",
    title: "Security Audits & Assessments",
    desc: "Comprehensive evaluation of your security posture — identifying vulnerabilities, gaps, and compliance failures across your entire infrastructure.",
    stat: "360° Coverage",
  },
  {
    id: 3,
    icon: "⚔️",
    title: "Penetration Testing",
    desc: "Ethical hackers simulate real-world attacks to expose weaknesses in your systems, applications, and networks before adversaries do.",
    stat: "500+ CVEs Found",
  },
  {
    id: 4,
    icon: "💻",
    title: "Endpoint Protection",
    desc: "Advanced protection for every device on your network — from workstations to mobile endpoints — with behavioral analysis and zero-day defense.",
    stat: "10M+ Endpoints Secured",
  },
  {
    id: 5,
    icon: "📧",
    title: "Email Security & Anti-Phishing",
    desc: "Block phishing, BEC attacks, malware, and social engineering before they reach your inbox with intelligent email filtering and user training.",
    stat: "98.5% Phish Blocked",
  },
  {
    id: 6,
    icon: "📋",
    title: "Compliance Management",
    desc: "Stay audit-ready with automated compliance workflows for GDPR, HIPAA, ISO 27001, SOC 2, and PCI-DSS regulations.",
    stat: "40+ Frameworks",
  },
];

function GridBackground() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {/* Tech grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(220,20,20,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(220,20,20,0.07) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
      {/* Radial glow center */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "900px",
          height: "900px",
          background:
            "radial-gradient(circle, rgba(180,0,0,0.18) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />
      {/* Scanline effect */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)",
        }}
      />
    </div>
  );
}

function GlitchText({ text }) {
  return (
    <span style={{ position: "relative", display: "inline-block" }}>
      <style>{`
        @keyframes glitch1 {
          0%, 90%, 100% { clip-path: none; transform: none; }
          92% { clip-path: polygon(0 20%, 100% 20%, 100% 40%, 0 40%); transform: translateX(-4px); }
          94% { clip-path: polygon(0 60%, 100% 60%, 100% 80%, 0 80%); transform: translateX(4px); }
          96% { clip-path: none; transform: none; }
        }
        @keyframes pulse-glow {
          0%, 100% { text-shadow: 0 0 20px rgba(255,40,40,0.8), 0 0 40px rgba(255,40,40,0.4); }
          50% { text-shadow: 0 0 40px rgba(255,40,40,1), 0 0 80px rgba(255,40,40,0.6), 0 0 120px rgba(255,40,40,0.3); }
        }
        @keyframes scanline {
          0% { top: -100%; }
          100% { top: 100%; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes borderPulse {
          0%, 100% { border-color: rgba(220,20,20,0.4); box-shadow: 0 0 15px rgba(220,20,20,0.1), inset 0 0 15px rgba(220,20,20,0.05); }
          50% { border-color: rgba(255,60,60,0.8); box-shadow: 0 0 30px rgba(220,20,20,0.3), inset 0 0 20px rgba(220,20,20,0.1); }
        }
        @keyframes floatUp {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0px); }
        }
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      <span
        style={{
          animation: "glitch1 8s infinite, pulse-glow 3s ease-in-out infinite",
        }}
      >
        {text}
      </span>
    </span>
  );
}

function ServiceCard({ service, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: "16px",
        border: `1px solid ${hovered ? "rgba(255,60,60,0.7)" : "rgba(220,20,20,0.25)"}`,
        background: hovered
          ? "rgba(100,5,5,0.35)"
          : "rgba(40,2,2,0.25)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        padding: "32px 28px",
        cursor: "default",
        transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
        boxShadow: hovered
          ? "0 0 40px rgba(220,20,20,0.3), inset 0 0 30px rgba(220,20,20,0.08), 0 20px 60px rgba(0,0,0,0.5)"
          : "0 8px 32px rgba(0,0,0,0.4), inset 0 0 0px transparent",
        transform: hovered ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)",
        animation: `fadeInUp 0.6s ease forwards`,
        animationDelay: `${index * 0.1}s`,
        opacity: 0,
        overflow: "hidden",
      }}
    >
      {/* Corner accents */}
      {["topLeft", "topRight", "bottomLeft", "bottomRight"].map((corner) => (
        <div
          key={corner}
          style={{
            position: "absolute",
            width: "14px",
            height: "14px",
            borderColor: hovered ? "rgba(255,80,80,0.9)" : "rgba(220,20,20,0.5)",
            borderStyle: "solid",
            borderWidth: 0,
            ...(corner === "topLeft" && { top: 8, left: 8, borderTopWidth: 2, borderLeftWidth: 2 }),
            ...(corner === "topRight" && { top: 8, right: 8, borderTopWidth: 2, borderRightWidth: 2 }),
            ...(corner === "bottomLeft" && { bottom: 8, left: 8, borderBottomWidth: 2, borderLeftWidth: 2 }),
            ...(corner === "bottomRight" && { bottom: 8, right: 8, borderBottomWidth: 2, borderRightWidth: 2 }),
            transition: "border-color 0.3s ease",
          }}
        />
      ))}

      {/* Glow line top */}
      <div style={{
        position: "absolute",
        top: 0, left: "20%", right: "20%",
        height: "1px",
        background: hovered
          ? "linear-gradient(90deg, transparent, rgba(255,60,60,0.9), transparent)"
          : "linear-gradient(90deg, transparent, rgba(220,20,20,0.3), transparent)",
        transition: "all 0.4s ease",
      }} />

      {/* Icon */}
      <div style={{
        fontSize: "36px",
        marginBottom: "16px",
        display: "inline-block",
        filter: hovered ? "drop-shadow(0 0 12px rgba(255,60,60,0.9))" : "drop-shadow(0 0 4px rgba(220,20,20,0.4))",
        transition: "filter 0.3s ease",
        animation: hovered ? "floatUp 2s ease-in-out infinite" : "none",
      }}>
        {service.icon}
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: "'Orbitron', 'Courier New', monospace",
        fontSize: "15px",
        fontWeight: 700,
        color: hovered ? "#fff" : "#f0d0d0",
        marginBottom: "12px",
        letterSpacing: "0.5px",
        textTransform: "uppercase",
        transition: "color 0.3s ease",
      }}>
        {service.title}
      </h3>

      {/* Description */}
      <p style={{
        fontFamily: "'Share Tech Mono', monospace",
        fontSize: "13px",
        lineHeight: 1.7,
        color: hovered ? "rgba(255,220,220,0.9)" : "rgba(230,180,180,0.65)",
        marginBottom: "20px",
        transition: "color 0.3s ease",
      }}>
        {service.desc}
      </p>

      {/* Stat badge */}
      <div style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        padding: "6px 14px",
        borderRadius: "100px",
        border: `1px solid ${hovered ? "rgba(255,80,80,0.7)" : "rgba(220,20,20,0.3)"}`,
        background: hovered ? "rgba(180,10,10,0.4)" : "rgba(100,5,5,0.2)",
        transition: "all 0.3s ease",
      }}>
        <div style={{
          width: "6px", height: "6px",
          borderRadius: "50%",
          background: hovered ? "#ff4444" : "#cc2222",
          boxShadow: hovered ? "0 0 8px #ff4444" : "none",
          transition: "all 0.3s ease",
        }} />
        <span style={{
          fontFamily: "'Orbitron', monospace",
          fontSize: "11px",
          fontWeight: 700,
          color: hovered ? "#ff9999" : "#cc6666",
          letterSpacing: "1px",
          transition: "color 0.3s ease",
        }}>
          {service.stat}
        </span>
      </div>
    </div>
  );
}

export default function Cybersecurity() {
  const tickerItems = [
    "THREAT LEVEL: ELEVATED",
    "SYSTEMS SECURED: 10M+",
    "ACTIVE MONITORING: 24/7",
    "ZERO-DAY PROTECTION: ACTIVE",
    "ENCRYPTION: AES-256",
    "SOC OPERATIONS: LIVE",
    "INTRUSION PREVENTION: ON",
  ];

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0f0101",
      color: "#fff",
      fontFamily: "'Share Tech Mono', monospace",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Import fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Share+Tech+Mono&display=swap');
      `}</style>

      <GridBackground />

      {/* Ticker bar */}
      <div style={{
        position: "relative",
        zIndex: 10,
        background: "rgba(180,10,10,0.85)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,60,60,0.4)",
        overflow: "hidden",
        padding: "8px 0",
      }}>
        <div style={{
          display: "flex",
          gap: "60px",
          animation: "ticker 20s linear infinite",
          whiteSpace: "nowrap",
        }}>
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} style={{
              fontFamily: "'Orbitron', monospace",
              fontSize: "11px",
              letterSpacing: "2px",
              color: "#fff",
              opacity: 0.9,
            }}>
              ⚡ {item}
            </span>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div style={{
        position: "relative",
        zIndex: 10,
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "80px 24px 80px",
      }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          {/* Badge */}
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "8px 20px",
            borderRadius: "100px",
            border: "1px solid rgba(255,60,60,0.5)",
            background: "rgba(180,10,10,0.2)",
            backdropFilter: "blur(10px)",
            marginBottom: "28px",
            animation: "fadeInUp 0.6s ease forwards",
          }}>
            <div style={{
              width: "8px", height: "8px",
              borderRadius: "50%",
              background: "#ff3333",
              boxShadow: "0 0 10px #ff3333, 0 0 20px rgba(255,50,50,0.5)",
              animation: "pulse-glow 1.5s ease infinite",
            }} />
            <span style={{
              fontFamily: "'Orbitron', monospace",
              fontSize: "11px",
              letterSpacing: "3px",
              color: "#ff9999",
              textTransform: "uppercase",
            }}>
              Enterprise Security Solutions
            </span>
          </div>

          {/* Main heading */}
          <h1 style={{
            fontFamily: "'Orbitron', monospace",
            fontSize: "clamp(36px, 6vw, 72px)",
            fontWeight: 900,
            lineHeight: 1.1,
            marginBottom: "24px",
            color: "#fff",
            textTransform: "uppercase",
            letterSpacing: "2px",
            animation: "fadeInUp 0.6s ease 0.2s forwards",
            opacity: 0,
          }}>
            <GlitchText text="CYBER" />
            <br />
            <span style={{
              background: "linear-gradient(135deg, #ff3333, #cc0000, #ff6666)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              SECURITY
            </span>
          </h1>

          {/* Subtitle */}
          <p style={{
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: "clamp(14px, 2vw, 17px)",
            color: "rgba(255,180,180,0.7)",
            maxWidth: "600px",
            margin: "0 auto 40px",
            lineHeight: 1.8,
            animation: "fadeInUp 0.6s ease 0.4s forwards",
            opacity: 0,
          }}>
            Advanced threat protection for the modern enterprise. Defend your digital
            perimeter with military-grade security infrastructure.
          </p>

          {/* CTA buttons */}
          <div style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
            animation: "fadeInUp 0.6s ease 0.6s forwards",
            opacity: 0,
          }}>
            <button style={{
              fontFamily: "'Orbitron', monospace",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              padding: "14px 32px",
              borderRadius: "8px",
              border: "none",
              background: "linear-gradient(135deg, #cc0000, #ff2222)",
              color: "#fff",
              cursor: "pointer",
              boxShadow: "0 0 30px rgba(200,0,0,0.5), 0 4px 20px rgba(0,0,0,0.4)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={e => {
              e.target.style.boxShadow = "0 0 50px rgba(255,50,50,0.8), 0 4px 20px rgba(0,0,0,0.4)";
              e.target.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={e => {
              e.target.style.boxShadow = "0 0 30px rgba(200,0,0,0.5), 0 4px 20px rgba(0,0,0,0.4)";
              e.target.style.transform = "translateY(0)";
            }}>
              Get Protected Now
            </button>
            <button style={{
              fontFamily: "'Orbitron', monospace",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              padding: "14px 32px",
              borderRadius: "8px",
              border: "1px solid rgba(220,20,20,0.5)",
              background: "rgba(40,2,2,0.4)",
              backdropFilter: "blur(10px)",
              color: "#ff9999",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={e => {
              e.target.style.borderColor = "rgba(255,60,60,0.9)";
              e.target.style.background = "rgba(100,5,5,0.4)";
              e.target.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={e => {
              e.target.style.borderColor = "rgba(220,20,20,0.5)";
              e.target.style.background = "rgba(40,2,2,0.4)";
              e.target.style.transform = "translateY(0)";
            }}>
              View Threat Report
            </button>
          </div>
        </div>

        {/* Stats bar */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "1px",
          background: "rgba(220,20,20,0.2)",
          border: "1px solid rgba(220,20,20,0.25)",
          borderRadius: "16px",
          overflow: "hidden",
          marginBottom: "80px",
          backdropFilter: "blur(20px)",
          animation: "fadeInUp 0.6s ease 0.7s forwards",
          opacity: 0,
        }}>
          {[
            { val: "99.8%", label: "Uptime SLA" },
            { val: "<30s", label: "Response Time" },
            { val: "500+", label: "Enterprise Clients" },
            { val: "24/7", label: "SOC Monitoring" },
          ].map((stat, i) => (
            <div key={i} style={{
              padding: "28px 20px",
              textAlign: "center",
              background: "rgba(20,1,1,0.6)",
              transition: "background 0.3s ease",
            }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(80,5,5,0.5)"}
            onMouseLeave={e => e.currentTarget.style.background = "rgba(20,1,1,0.6)"}
            >
              <div style={{
                fontFamily: "'Orbitron', monospace",
                fontSize: "28px",
                fontWeight: 900,
                color: "#ff4444",
                textShadow: "0 0 20px rgba(255,60,60,0.6)",
                marginBottom: "6px",
              }}>
                {stat.val}
              </div>
              <div style={{
                fontFamily: "'Share Tech Mono', monospace",
                fontSize: "11px",
                color: "rgba(255,180,180,0.6)",
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Section label */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          marginBottom: "48px",
        }}>
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, transparent, rgba(220,20,20,0.5))" }} />
          <span style={{
            fontFamily: "'Orbitron', monospace",
            fontSize: "12px",
            letterSpacing: "4px",
            color: "#cc4444",
            textTransform: "uppercase",
          }}>
            Our Services
          </span>
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, rgba(220,20,20,0.5), transparent)" }} />
        </div>

        {/* Services grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "24px",
        }}>
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{
          marginTop: "80px",
          textAlign: "center",
          padding: "60px 40px",
          borderRadius: "20px",
          border: "1px solid rgba(220,20,20,0.3)",
          background: "rgba(30,2,2,0.4)",
          backdropFilter: "blur(20px)",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            top: 0, left: "30%", right: "30%",
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(255,60,60,0.8), transparent)",
          }} />
          <h2 style={{
            fontFamily: "'Orbitron', monospace",
            fontSize: "clamp(22px, 4vw, 38px)",
            fontWeight: 900,
            textTransform: "uppercase",
            letterSpacing: "2px",
            marginBottom: "16px",
            color: "#fff",
          }}>
            Ready to Fortify Your Defenses?
          </h2>
          <p style={{
            color: "rgba(255,180,180,0.6)",
            marginBottom: "32px",
            fontSize: "14px",
            lineHeight: 1.8,
          }}>
            Get a free security assessment and discover your vulnerabilities before attackers do.
          </p>
          <button style={{
            fontFamily: "'Orbitron', monospace",
            fontSize: "14px",
            fontWeight: 700,
            letterSpacing: "2px",
            textTransform: "uppercase",
            padding: "16px 48px",
            borderRadius: "8px",
            border: "none",
            background: "linear-gradient(135deg, #aa0000, #ee1111, #aa0000)",
            color: "#fff",
            cursor: "pointer",
            boxShadow: "0 0 40px rgba(200,0,0,0.6)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={e => {
            e.target.style.boxShadow = "0 0 70px rgba(255,50,50,0.9)";
            e.target.style.transform = "scale(1.05)";
          }}
          onMouseLeave={e => {
            e.target.style.boxShadow = "0 0 40px rgba(200,0,0,0.6)";
            e.target.style.transform = "scale(1)";
          }}>
            Schedule Free Assessment →
          </button>
        </div>
      </div>
    </div>
  );
}
