import React, { useState, useEffect } from 'react'

const services = [
  {
    icon: "⬡",
    symbol: "01",
    title: "Custom Web Design",
    desc: "Bespoke digital experiences built from scratch — stunning, responsive, and perfectly on-brand.",
    tag: "Design",
  },
  {
    icon: "◈",
    symbol: "02",
    title: "Frontend Development",
    desc: "Blazing-fast React & Next.js builds with silky animations and pixel-perfect implementation.",
    tag: "Build",
  },
  {
    icon: "◎",
    symbol: "03",
    title: "E-Commerce Solutions",
    desc: "High-converting storefronts with seamless checkout flows and powerful backend integrations.",
    tag: "Sell",
  },
  {
    icon: "⟡",
    symbol: "04",
    title: "CMS Integration",
    desc: "Empower your team with intuitive content management — Sanity, Contentful, and more.",
    tag: "Manage",
  },
  {
    icon: "◇",
    symbol: "05",
    title: "Performance Optimisation",
    desc: "Sub-second load times, Core Web Vitals excellence, and SEO that drives real organic growth.",
    tag: "Optimise",
  },
  {
    icon: "✦",
    symbol: "06",
    title: "Maintenance & Support",
    desc: "Ongoing care packages to keep your site secure, updated, and evolving with your business.",
    tag: "Support",
  },
]

export default function Websitedev() {
  const [hovered, setHovered] = useState(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div style={styles.wrapper}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Outfit:wght@300;400;500;600&display=swap');

       

        @keyframes drift1 {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          33%       { transform: translate(40px, -60px) scale(1.08) rotate(4deg); }
          66%       { transform: translate(-30px, 30px) scale(0.96) rotate(-3deg); }
        }
        @keyframes drift2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50%       { transform: translate(-50px, 40px) scale(1.12); }
        }
        @keyframes drift3 {
          0%, 100% { transform: translate(0, 0); }
          50%       { transform: translate(30px, -30px); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes tagPulse {
          0%, 100% { opacity: 0.7; }
          50%       { opacity: 1; }
        }
        @keyframes iconBounce {
          0%, 100% { transform: translateY(0) scale(1); }
          40%       { transform: translateY(-6px) scale(1.2); }
          70%       { transform: translateY(-2px) scale(1.06); }
        }

        .card-glass {
          position: relative;
          background: rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 180, 200, 0.16);
          border-radius: 24px;
          padding: 36px 30px 30px;
          cursor: pointer;
          overflow: hidden;
          transition:
            transform 0.4s cubic-bezier(0.23, 1, 0.32, 1),
            box-shadow 0.4s cubic-bezier(0.23, 1, 0.32, 1),
            border-color 0.4s,
            background 0.4s;
          animation: fadeUp 0.7s ease both;
        }
        .card-glass:hover {
          transform: translateY(-10px) scale(1.025);
          background: rgba(255, 255, 255, 0.11);
          border-color: rgba(255, 60, 120, 0.55);
          box-shadow:
            0 0 0 1px rgba(255, 60, 120, 0.3),
            0 20px 50px rgba(180, 0, 60, 0.5),
            0 0 80px rgba(255, 40, 110, 0.22),
            inset 0 1px 0 rgba(255, 200, 220, 0.18);
        }
        .card-glass:hover .card-icon {
          animation: iconBounce 0.65s ease forwards;
          color: #ff4d9e !important;
          text-shadow: 0 0 20px rgba(255,60,150,0.95), 0 0 50px rgba(255,40,130,0.55) !important;
        }
        .card-glass:hover .card-glow-spot {
          opacity: 1;
        }
        .card-glass:hover .card-symbol {
          color: rgba(255, 90, 140, 0.55);
        }
        .card-glass:hover .card-bar {
          transform: scaleX(1);
        }
        .card-glass:hover .card-tag {
          background: rgba(255, 50, 110, 0.22);
          border-color: rgba(255, 70, 130, 0.6);
          color: #ffb3cc;
        }
        .card-glass:hover .card-title {
          background: linear-gradient(135deg, #fff 0%, #ffcce0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .card-icon {
          font-size: 38px;
          line-height: 1;
          color: rgba(255, 175, 205, 0.8);
          text-shadow: 0 0 14px rgba(255,100,150,0.45);
          display: block;
          margin-bottom: 22px;
          transition: color 0.3s, text-shadow 0.3s;
        }
        .card-symbol {
          position: absolute;
          top: 28px;
          right: 28px;
          font-family: 'Outfit', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 2px;
          color: rgba(255, 175, 200, 0.22);
          transition: color 0.35s;
        }
        .card-glow-spot {
          position: absolute;
          top: -70px;
          right: -70px;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,50,110,0.28) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.45s;
          pointer-events: none;
        }
        .card-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          width: 100%;
          background: linear-gradient(90deg, #cc0044, #ff4d9e, #ff80b5, #cc0044);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          border-radius: 0 0 24px 24px;
        }
        .card-tag {
          display: inline-block;
          font-family: 'Outfit', sans-serif;
          font-size: 9.5px;
          font-weight: 600;
          letter-spacing: 2.5px;
          color: rgba(255,155,185,0.75);
          border: 1px solid rgba(255,100,145,0.22);
          border-radius: 100px;
          padding: 4px 12px;
          margin-bottom: 14px;
          background: rgba(255,50,110,0.07);
          transition: all 0.3s;
          animation: tagPulse 3.5s ease-in-out infinite;
          text-transform: uppercase;
        }
        .card-title {
          font-family: 'Playfair Display', serif;
          font-size: 19px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 12px;
          line-height: 1.25;
          transition: all 0.3s;
        }

        .cta-btn {
          font-family: 'Outfit', sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 3px;
          color: #fff;
          background: linear-gradient(135deg, rgba(200,10,70,0.65), rgba(255,50,130,0.45));
          border: 1px solid rgba(255,90,150,0.4);
          border-radius: 100px;
          padding: 18px 56px;
          cursor: pointer;
          backdrop-filter: blur(12px);
          box-shadow: 0 0 30px rgba(200,10,70,0.45), inset 0 1px 0 rgba(255,200,220,0.18);
          transition: all 0.35s cubic-bezier(0.23, 1, 0.32, 1);
          text-transform: uppercase;
        }
        .cta-btn:hover {
          transform: translateY(-3px) scale(1.05);
          background: linear-gradient(135deg, rgba(200,10,70,0.9), rgba(255,50,130,0.75));
          box-shadow: 0 0 60px rgba(255,10,90,0.75), 0 0 120px rgba(200,0,70,0.35), inset 0 1px 0 rgba(255,200,220,0.28);
          border-color: rgba(255,110,160,0.7);
          letter-spacing: 4px;
        }

        .stat-num {
          font-family: 'Playfair Display', serif;
          font-size: 40px;
          font-weight: 900;
          background: linear-gradient(135deg, #fff 0%, #ffb3cc 55%, #ff4d8f 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200%;
          animation: shimmer 4s linear infinite;
          line-height: 1;
        }
      `}</style>

      {/* Cursor spotlight */}
      <div style={{
        position: 'fixed',
        left: mousePos.x - 250,
        top: mousePos.y - 250,
        width: 500,
        height: 500,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,20,90,0.055) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 1,
        transition: 'left 0.08s ease-out, top 0.08s ease-out',
      }} />

      {/* Ambient orbs */}
      <div style={{ ...styles.orb, ...styles.orb1 }} />
      <div style={{ ...styles.orb, ...styles.orb2 }} />
      <div style={{ ...styles.orb, ...styles.orb3 }} />

      {/* Grain */}
      <div style={styles.grain} />

      {/* Decorative diagonal lines */}
      <div style={styles.diagLine1} />
      <div style={styles.diagLine2} />

      <div style={styles.container}>

        {/* ── Header ── */}
        <div style={styles.header}>
          <div style={styles.eyebrowRow}>
            <div style={styles.eyebrowLine} />
            <span style={styles.eyebrow}>WEB DEVELOPMENT</span>
            <div style={styles.eyebrowLine} />
          </div>

          <h1 style={styles.h1}>
            We Build Websites<br />
            <em style={styles.h1Italic}>That Convert.</em>
          </h1>

          <p style={styles.lead}>
            From concept to launch — crafting digital experiences that captivate audiences,
            elevate brands, and drive measurable results for ambitious businesses.
          </p>

          {/* Stats */}
          <div style={styles.statsRow}>
            {[
              { num: "150+", label: "Projects Delivered" },
              { num: "98%", label: "Client Satisfaction" },
              { num: "0.8s", label: "Avg Load Time" },
            ].map((s, i) => (
              <div key={i} style={styles.stat}>
                <div className="stat-num">{s.num}</div>
                <div style={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Services Grid ── */}
        <div style={styles.servicesGrid}>
          {services.map((svc, i) => (
            <div
              key={i}
              className="card-glass"
              style={{ animationDelay: `${i * 0.1}s` }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="card-glow-spot" />
              <span className="card-symbol">{svc.symbol}</span>
              <span className="card-icon">{svc.icon}</span>
              <span className="card-tag">{svc.tag}</span>
              <h3 className="card-title">{svc.title}</h3>
              <p style={styles.cardDesc}>{svc.desc}</p>
              <div className="card-bar" />
            </div>
          ))}
        </div>

        {/* ── CTA ── */}
        <div style={styles.ctaWrap}>
          <div style={styles.ctaGlass}>
            <div style={styles.ctaGlowSpot} />
            <p style={styles.ctaEyebrow}>READY TO LAUNCH?</p>
            <h2 style={styles.ctaHeading}>
              Let's build something<br />
              <em style={styles.h1Italic}>extraordinary.</em>
            </h2>
            <p style={styles.ctaDesc}>
              Book a free discovery call and let's map out your vision together.
            </p>
            <button className="cta-btn">Start Your Project</button>
            <p style={styles.ctaNote}>No commitment required · Response within 24 hrs</p>
          </div>
        </div>

      </div>
    </div>
  )
}

const styles = {
  wrapper: {
    position: 'relative',
    minHeight: '100vh',
    background: 'linear-gradient(155deg, #160006 0%, #380010 22%, #6b0025 48%, #8c1835 68%, #380010 100%)',
    overflow: 'hidden',
    fontFamily: "'Outfit', sans-serif",
  },
  grain: {
    position: 'fixed',
    inset: 0,
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E")`,
    backgroundRepeat: 'repeat',
    backgroundSize: '256px 256px',
    pointerEvents: 'none',
    zIndex: 1,
    mixBlendMode: 'overlay',
  },
  orb: {
    position: 'absolute',
    borderRadius: '50%',
    pointerEvents: 'none',
  },
  orb1: {
    top: '-15%',
    left: '-12%',
    width: '650px',
    height: '650px',
    background: 'radial-gradient(circle, rgba(210,10,70,0.38) 0%, transparent 70%)',
    animation: 'drift1 14s ease-in-out infinite',
    filter: 'blur(2px)',
  },
  orb2: {
    bottom: '-20%',
    right: '-15%',
    width: '750px',
    height: '750px',
    background: 'radial-gradient(circle, rgba(255,50,120,0.22) 0%, transparent 70%)',
    animation: 'drift2 18s ease-in-out infinite',
    filter: 'blur(4px)',
  },
  orb3: {
    top: '45%',
    left: '38%',
    width: '380px',
    height: '380px',
    background: 'radial-gradient(circle, rgba(190,0,55,0.18) 0%, transparent 70%)',
    animation: 'drift3 10s ease-in-out infinite',
  },
  diagLine1: {
    position: 'absolute',
    top: '8%',
    right: '6%',
    width: '1px',
    height: '220px',
    background: 'linear-gradient(to bottom, transparent, rgba(255,70,130,0.28), transparent)',
    transform: 'rotate(18deg)',
  },
  diagLine2: {
    position: 'absolute',
    bottom: '18%',
    left: '4%',
    width: '1px',
    height: '160px',
    background: 'linear-gradient(to bottom, transparent, rgba(255,70,130,0.18), transparent)',
    transform: 'rotate(-14deg)',
  },
  container: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '1120px',
    margin: '0 auto',
    padding: '80px 24px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '72px',
  },
  eyebrowRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
    justifyContent: 'center',
    marginBottom: '28px',
  },
  eyebrowLine: {
    width: '38px',
    height: '1px',
    background: 'linear-gradient(90deg, transparent, rgba(255,90,140,0.65))',
  },
  eyebrow: {
    fontFamily: "'Outfit', sans-serif",
    fontSize: '10px',
    fontWeight: '600',
    letterSpacing: '4px',
    color: 'rgba(255,145,180,0.65)',
  },
  h1: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 'clamp(42px, 6vw, 82px)',
    fontWeight: '900',
    color: '#fff',
    lineHeight: 1.07,
    marginBottom: '24px',
    textShadow: '0 0 80px rgba(255,40,110,0.28)',
  },
  h1Italic: {
    fontStyle: 'italic',
    background: 'linear-gradient(135deg, #ffb3cc 0%, #ff4d8f 45%, #cc0044 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  lead: {
    fontSize: '16.5px',
    fontWeight: '300',
    color: 'rgba(255,195,210,0.65)',
    maxWidth: '560px',
    margin: '0 auto 48px',
    lineHeight: '1.78',
  },
  statsRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: '64px',
    flexWrap: 'wrap',
  },
  stat: {
    textAlign: 'center',
  },
  statLabel: {
    fontFamily: "'Outfit', sans-serif",
    fontSize: '10.5px',
    fontWeight: '500',
    letterSpacing: '1.5px',
    color: 'rgba(255,150,185,0.5)',
    marginTop: '7px',
    textTransform: 'uppercase',
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '22px',
    marginBottom: '72px',
  },
  cardDesc: {
    fontFamily: "'Outfit', sans-serif",
    fontSize: '13.5px',
    fontWeight: '300',
    color: 'rgba(255,195,210,0.6)',
    lineHeight: '1.72',
  },
  ctaWrap: {
    display: 'flex',
    justifyContent: 'center',
  },
  ctaGlass: {
    position: 'relative',
    background: 'rgba(255,255,255,0.055)',
    backdropFilter: 'blur(28px)',
    WebkitBackdropFilter: 'blur(28px)',
    border: '1px solid rgba(255,140,175,0.18)',
    borderRadius: '32px',
    padding: '64px 72px',
    textAlign: 'center',
    maxWidth: '640px',
    width: '100%',
    overflow: 'hidden',
    boxShadow: '0 40px 100px rgba(140,0,45,0.45), inset 0 1px 0 rgba(255,195,215,0.1)',
  },
  ctaGlowSpot: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '420px',
    height: '420px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(200,10,65,0.13) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
  ctaEyebrow: {
    fontFamily: "'Outfit', sans-serif",
    fontSize: '10px',
    fontWeight: '600',
    letterSpacing: '4px',
    color: 'rgba(255,120,160,0.6)',
    marginBottom: '20px',
  },
  ctaHeading: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 'clamp(28px, 4vw, 46px)',
    fontWeight: '900',
    color: '#fff',
    lineHeight: '1.18',
    marginBottom: '18px',
  },
  ctaDesc: {
    fontFamily: "'Outfit', sans-serif",
    fontSize: '15px',
    fontWeight: '300',
    color: 'rgba(255,185,205,0.6)',
    marginBottom: '36px',
    lineHeight: '1.72',
  },
  ctaNote: {
    fontFamily: "'Outfit', sans-serif",
    fontSize: '11px',
    color: 'rgba(255,140,175,0.38)',
    marginTop: '16px',
    letterSpacing: '0.5px',
  },
}