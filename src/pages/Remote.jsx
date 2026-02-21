import React, { useState } from 'react'

const items = [
  { label: "24/7 Helpdesk", icon: "🛟", desc: "Round-the-clock assistance whenever you need it" },
  { label: "Remote Desktop Support", icon: "🖥️", desc: "Instant screen access to resolve issues fast" },
  { label: "Critical Incident Response", icon: "⚡", desc: "Rapid escalation for high-severity events" },
  { label: "Proactive System Monitoring", icon: "📡", desc: "We catch issues before they affect you" },
  { label: "Software Troubleshooting", icon: "🔧", desc: "Expert diagnosis across all platforms" },
  { label: "Dedicated Account Manager", icon: "👤", desc: "Your personal point of contact, always" },
]

export default function Remote() {
  const [hovered, setHovered] = useState(null)

  return (
    <div style={styles.wrapper}>
      {/* Tech grid overlay */}
      <div style={styles.grid} />
      {/* Ambient orbs */}
      <div style={styles.orb1} />
      <div style={styles.orb2} />
      <div style={styles.orb3} />

      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header}>
          <span style={styles.badge}>ALWAYS ON</span>
          <h1 style={styles.title}>24/7 Remote<br /><span style={styles.titleAccent}>Support</span></h1>
          <p style={styles.subtitle}>
            Enterprise-grade remote assistance, engineered for zero downtime and maximum peace of mind.
          </p>
        </div>

        {/* Cards Grid */}
        <div style={styles.grid2}>
          {items.map((item, i) => (
            <div
              key={i}
              style={{
                ...styles.card,
                ...(hovered === i ? styles.cardHovered : {}),
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Card glow on hover */}
              <div style={{
                ...styles.cardGlow,
                opacity: hovered === i ? 1 : 0,
              }} />

              <div style={styles.iconWrap}>
                <span style={{
                  ...styles.icon,
                  ...(hovered === i ? styles.iconHovered : {}),
                }}>{item.icon}</span>
                <div style={{
                  ...styles.iconRing,
                  opacity: hovered === i ? 1 : 0,
                }} />
              </div>

              <div style={styles.cardContent}>
                <h3 style={{
                  ...styles.cardTitle,
                  color: hovered === i ? '#e0d0ff' : '#fff',
                }}>{item.label}</h3>
                <p style={{
                  ...styles.cardDesc,
                  opacity: hovered === i ? 1 : 0.55,
                  transform: hovered === i ? 'translateY(0)' : 'translateY(4px)',
                }}>{item.desc}</p>
              </div>

              {/* Bottom highlight bar */}
              <div style={{
                ...styles.cardBar,
                transform: hovered === i ? 'scaleX(1)' : 'scaleX(0)',
              }} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={styles.ctaWrap}>
          <button
            style={styles.cta}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.18)'
              e.currentTarget.style.boxShadow = '0 0 40px rgba(160,100,255,0.6), 0 0 80px rgba(120,60,220,0.3)'
              e.currentTarget.style.letterSpacing = '3px'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
              e.currentTarget.style.boxShadow = '0 0 20px rgba(160,100,255,0.3)'
              e.currentTarget.style.letterSpacing = '2px'
            }}
          >
            GET STARTED NOW
          </button>
          <p style={styles.ctaNote}>No setup fees · Cancel anytime</p>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
       

        @keyframes float1 {
          0%,100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(30px,-40px) scale(1.1); }
        }
        @keyframes float2 {
          0%,100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(-40px,30px) scale(0.9); }
        }
        @keyframes float3 {
          0%,100% { transform: translate(0,0); }
          50% { transform: translate(20px,20px); }
        }
        @keyframes pulse {
          0%,100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.15); }
        }
        @keyframes badgePulse {
          0%,100% { box-shadow: 0 0 8px rgba(160,100,255,0.4); }
          50% { box-shadow: 0 0 20px rgba(160,100,255,0.9); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}

const styles = {
  wrapper: {
    position: 'relative',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #1a0533 0%, #2d0a5e 30%, #4a1a8a 60%, #1a0533 100%)',
    overflow: 'hidden',
    fontFamily: "'DM Sans', sans-serif",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '60px 20px',
  },
  grid: {
    position: 'absolute',
    inset: 0,
    backgroundImage: `
      linear-gradient(rgba(160,100,255,0.07) 1px, transparent 1px),
      linear-gradient(90deg, rgba(160,100,255,0.07) 1px, transparent 1px)
    `,
    backgroundSize: '48px 48px',
    pointerEvents: 'none',
  },
  orb1: {
    position: 'absolute',
    top: '-10%',
    left: '-10%',
    width: '500px',
    height: '500px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(120,60,220,0.4) 0%, transparent 70%)',
    animation: 'float1 10s ease-in-out infinite',
    pointerEvents: 'none',
  },
  orb2: {
    position: 'absolute',
    bottom: '-15%',
    right: '-10%',
    width: '600px',
    height: '600px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(180,80,255,0.3) 0%, transparent 70%)',
    animation: 'float2 13s ease-in-out infinite',
    pointerEvents: 'none',
  },
  orb3: {
    position: 'absolute',
    top: '40%',
    left: '50%',
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(200,150,255,0.15) 0%, transparent 70%)',
    animation: 'float3 8s ease-in-out infinite',
    pointerEvents: 'none',
  },
  container: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '1100px',
    width: '100%',
  },
  header: {
    textAlign: 'center',
    marginBottom: '60px',
    animation: 'fadeSlideUp 0.8s ease both',
  },
  badge: {
    display: 'inline-block',
    fontSize: '11px',
    fontWeight: '600',
    letterSpacing: '3px',
    color: '#c89dff',
    border: '1px solid rgba(200,157,255,0.4)',
    borderRadius: '100px',
    padding: '6px 18px',
    marginBottom: '24px',
    background: 'rgba(160,100,255,0.1)',
    animation: 'badgePulse 3s ease-in-out infinite',
  },
  title: {
    fontFamily: "'Syne', sans-serif",
    fontSize: 'clamp(40px, 6vw, 72px)',
    fontWeight: '800',
    color: '#fff',
    lineHeight: 1.05,
    marginBottom: '20px',
    letterSpacing: '-1px',
  },
  titleAccent: {
    background: 'linear-gradient(90deg, #c89dff, #7c3aed, #a855f7)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  subtitle: {
    fontSize: '17px',
    color: 'rgba(220,200,255,0.7)',
    maxWidth: '520px',
    margin: '0 auto',
    lineHeight: '1.7',
    fontWeight: '300',
  },
  grid2: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    marginBottom: '60px',
  },
  card: {
    position: 'relative',
    background: 'rgba(255,255,255,0.05)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '20px',
    padding: '32px 28px',
    cursor: 'pointer',
    overflow: 'hidden',
    transition: 'transform 0.35s cubic-bezier(0.23,1,0.32,1), border-color 0.35s, box-shadow 0.35s',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '20px',
  },
  cardHovered: {
    transform: 'translateY(-6px) scale(1.02)',
    borderColor: 'rgba(168,85,247,0.5)',
    boxShadow: '0 20px 60px rgba(120,40,200,0.35), 0 0 0 1px rgba(168,85,247,0.3)',
  },
  cardGlow: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(ellipse at top left, rgba(160,100,255,0.15) 0%, transparent 60%)',
    transition: 'opacity 0.35s',
    pointerEvents: 'none',
  },
  iconWrap: {
    position: 'relative',
    flexShrink: 0,
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '52px',
    height: '52px',
    borderRadius: '14px',
    background: 'rgba(160,100,255,0.15)',
    border: '1px solid rgba(160,100,255,0.25)',
    fontSize: '24px',
    filter: 'drop-shadow(0 0 8px rgba(160,100,255,0.3))',
    transition: 'transform 0.35s, filter 0.35s',
  },
  iconHovered: {
    transform: 'scale(1.12)',
    filter: 'drop-shadow(0 0 16px rgba(200,140,255,0.7))',
  },
  iconRing: {
    position: 'absolute',
    inset: '-4px',
    borderRadius: '18px',
    border: '1px solid rgba(180,100,255,0.5)',
    transition: 'opacity 0.35s',
    animation: 'pulse 2s ease-in-out infinite',
  },
  cardContent: {
    flex: 1,
    paddingTop: '4px',
  },
  cardTitle: {
    fontFamily: "'Syne', sans-serif",
    fontSize: '16px',
    fontWeight: '700',
    marginBottom: '8px',
    transition: 'color 0.3s',
    letterSpacing: '0.2px',
  },
  cardDesc: {
    fontSize: '13.5px',
    color: 'rgba(210,190,255,0.8)',
    lineHeight: '1.6',
    fontWeight: '300',
    transition: 'opacity 0.35s, transform 0.35s',
  },
  cardBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '2px',
    background: 'linear-gradient(90deg, #7c3aed, #c084fc, #7c3aed)',
    transformOrigin: 'left',
    transition: 'transform 0.4s cubic-bezier(0.23,1,0.32,1)',
  },
  ctaWrap: {
    textAlign: 'center',
  },
  cta: {
    fontFamily: "'Syne', sans-serif",
    fontSize: '13px',
    fontWeight: '700',
    letterSpacing: '2px',
    color: '#fff',
    background: 'rgba(255,255,255,0.08)',
    border: '1px solid rgba(255,255,255,0.2)',
    borderRadius: '100px',
    padding: '18px 52px',
    cursor: 'pointer',
    boxShadow: '0 0 20px rgba(160,100,255,0.3)',
    transition: 'all 0.3s cubic-bezier(0.23,1,0.32,1)',
    backdropFilter: 'blur(10px)',
  },
  ctaNote: {
    marginTop: '14px',
    fontSize: '12px',
    color: 'rgba(200,170,255,0.5)',
    letterSpacing: '0.5px',
  },
}