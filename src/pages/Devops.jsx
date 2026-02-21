import React, { useEffect, useRef, useState } from 'react'

const services = [
  {
    title: 'CI/CD Pipeline Setup',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:44,height:44}}>
        <circle cx="8" cy="24" r="4" stroke="#00E5FF" strokeWidth="1.5"/>
        <circle cx="24" cy="10" r="4" stroke="#00E5FF" strokeWidth="1.5"/>
        <circle cx="40" cy="24" r="4" stroke="#00E5FF" strokeWidth="1.5"/>
        <circle cx="24" cy="38" r="4" stroke="rgba(0,229,255,0.5)" strokeWidth="1.5"/>
        <line x1="12" y1="22" x2="20" y2="13" stroke="#00E5FF" strokeWidth="1.2"/>
        <line x1="28" y1="13" x2="36" y2="22" stroke="#00E5FF" strokeWidth="1.2"/>
        <line x1="36" y1="26" x2="28" y2="35" stroke="#00E5FF" strokeWidth="1.2" strokeDasharray="3 2"/>
        <line x1="20" y1="35" x2="12" y2="26" stroke="#00E5FF" strokeWidth="1.2" strokeDasharray="3 2"/>
        <polyline points="18,24 22,28 30,20" stroke="#00E5FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Infrastructure as Code',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:44,height:44}}>
        <rect x="6" y="8" width="36" height="32" rx="4" stroke="#00E5FF" strokeWidth="1.5"/>
        <line x1="6" y1="16" x2="42" y2="16" stroke="#00E5FF" strokeWidth="1" opacity="0.4"/>
        <circle cx="11" cy="12" r="1.5" fill="#00E5FF" opacity="0.8"/>
        <circle cx="16" cy="12" r="1.5" fill="#00E5FF" opacity="0.5"/>
        <circle cx="21" cy="12" r="1.5" fill="#00E5FF" opacity="0.3"/>
        <polyline points="12,24 16,28 12,32" stroke="#00E5FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="20" y1="32" x2="30" y2="32" stroke="#00E5FF" strokeWidth="1.2" opacity="0.6"/>
        <line x1="20" y1="24" x2="36" y2="24" stroke="#00E5FF" strokeWidth="1.2" opacity="0.4"/>
        <line x1="20" y1="28" x2="33" y2="28" stroke="#00E5FF" strokeWidth="1.2" opacity="0.3"/>
      </svg>
    ),
  },
  {
    title: 'Container Orchestration',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:44,height:44}}>
        <rect x="18" y="6" width="12" height="10" rx="2" stroke="#00E5FF" strokeWidth="1.5"/>
        <rect x="6" y="28" width="12" height="10" rx="2" stroke="#00E5FF" strokeWidth="1.5"/>
        <rect x="18" y="32" width="12" height="10" rx="2" stroke="#00E5FF" strokeWidth="1.5"/>
        <rect x="30" y="28" width="12" height="10" rx="2" stroke="#00E5FF" strokeWidth="1.5" opacity="0.7"/>
        <line x1="24" y1="16" x2="24" y2="22" stroke="#00E5FF" strokeWidth="1.2"/>
        <line x1="24" y1="22" x2="12" y2="28" stroke="#00E5FF" strokeWidth="1.2"/>
        <line x1="24" y1="22" x2="24" y2="32" stroke="#00E5FF" strokeWidth="1.2"/>
        <line x1="24" y1="22" x2="36" y2="28" stroke="#00E5FF" strokeWidth="1.2" opacity="0.7"/>
        <circle cx="24" cy="22" r="2" fill="#00E5FF"/>
      </svg>
    ),
  },
  {
    title: 'Cloud Automation',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:44,height:44}}>
        <path d="M34 32H14a8 8 0 01-2-15.7A10 10 0 0132 20h2a6 6 0 010 12z" stroke="#00E5FF" strokeWidth="1.5" strokeLinejoin="round"/>
        <polyline points="22,38 26,34 22,30" stroke="#00E5FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="14" y1="34" x2="26" y2="34" stroke="#00E5FF" strokeWidth="1.2" opacity="0.6"/>
        <circle cx="36" cy="10" r="3" stroke="#00E5FF" strokeWidth="1.2" opacity="0.5"/>
        <line x1="36" y1="6" x2="36" y2="4" stroke="#00E5FF" strokeWidth="1" opacity="0.4"/>
        <line x1="39.1" y1="6.9" x2="40.5" y2="5.5" stroke="#00E5FF" strokeWidth="1" opacity="0.4"/>
        <line x1="40" y1="10" x2="42" y2="10" stroke="#00E5FF" strokeWidth="1" opacity="0.4"/>
      </svg>
    ),
  },
  {
    title: 'Monitoring & Observability',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:44,height:44}}>
        <rect x="4" y="8" width="40" height="26" rx="3" stroke="#00E5FF" strokeWidth="1.5"/>
        <line x1="14" y1="40" x2="34" y2="40" stroke="#00E5FF" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="24" y1="34" x2="24" y2="40" stroke="#00E5FF" strokeWidth="1.2"/>
        <polyline points="8,28 13,20 18,24 23,14 28,18 33,12 40,22" stroke="#00E5FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="23" cy="14" r="2" fill="#00E5FF" opacity="0.9"/>
      </svg>
    ),
  },
  {
    title: 'DevSecOps Integration',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:44,height:44}}>
        <path d="M24 6L8 12v12c0 10 7 18 16 20 9-2 16-10 16-20V12L24 6z" stroke="#00E5FF" strokeWidth="1.5" strokeLinejoin="round"/>
        <circle cx="24" cy="22" r="5" stroke="#00E5FF" strokeWidth="1.3"/>
        <line x1="24" y1="17" x2="24" y2="14" stroke="#00E5FF" strokeWidth="1.2"/>
        <line x1="24" y1="27" x2="24" y2="30" stroke="#00E5FF" strokeWidth="1.2" opacity="0.5"/>
        <polyline points="20,20 24,24 30,17" stroke="#00E5FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

function ParticleCanvas() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animFrame
    let W = canvas.width = canvas.offsetWidth
    let H = canvas.height = canvas.offsetHeight

    const nodes = Array.from({length: 22}, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      dx: (Math.random() - 0.5) * 0.18,
      dy: (Math.random() - 0.5) * 0.18,
    }))

    const particles = Array.from({length: 45}, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.8 + 0.4,
      dx: (Math.random() - 0.5) * 0.25,
      dy: (Math.random() - 0.5) * 0.25,
      alpha: Math.random() * 0.45 + 0.08,
    }))

    // Cloud blobs
    const clouds = Array.from({length: 4}, (_, i) => ({
      x: (i / 3) * W,
      y: Math.random() * H * 0.5,
      dx: (Math.random() - 0.5) * 0.08,
      rx: 120 + Math.random() * 80,
      ry: 50 + Math.random() * 40,
    }))

    function draw() {
      ctx.clearRect(0, 0, W, H)

      // Cloud shapes
      clouds.forEach(c => {
        const grad = ctx.createRadialGradient(c.x, c.y, 10, c.x, c.y, c.rx)
        grad.addColorStop(0, 'rgba(135,206,235,0.08)')
        grad.addColorStop(1, 'rgba(135,206,235,0)')
        ctx.beginPath()
        ctx.ellipse(c.x, c.y, c.rx, c.ry, 0, 0, Math.PI * 2)
        ctx.fillStyle = grad
        ctx.fill()
        c.x += c.dx
        if (c.x > W + c.rx) c.x = -c.rx
        if (c.x < -c.rx) c.x = W + c.rx
      })

      // Network lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx*dx + dy*dy)
          if (dist < 160) {
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(0,229,255,${0.06 * (1 - dist/160)})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }

      nodes.forEach(n => {
        ctx.beginPath()
        ctx.arc(n.x, n.y, 1.8, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(0,229,255,0.2)'
        ctx.fill()
        n.x += n.dx; n.y += n.dy
        if (n.x < 0 || n.x > W) n.dx *= -1
        if (n.y < 0 || n.y > H) n.dy *= -1
      })

      particles.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${p.alpha})`
        ctx.fill()
        p.x += p.dx; p.y += p.dy
        if (p.x < 0 || p.x > W) p.dx *= -1
        if (p.y < 0 || p.y > H) p.dy *= -1
      })

      animFrame = requestAnimationFrame(draw)
    }
    draw()

    const resize = () => {
      W = canvas.width = canvas.offsetWidth
      H = canvas.height = canvas.offsetHeight
    }
    window.addEventListener('resize', resize)
    return () => { cancelAnimationFrame(animFrame); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <canvas ref={canvasRef} style={{
      position: 'absolute', inset: 0,
      width: '100%', height: '100%',
      pointerEvents: 'none',
    }}/>
  )
}

function ServiceCard({ service, index }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        borderRadius: 20,
        padding: '38px 30px 34px',
        background: hovered
          ? 'rgba(255,255,255,0.18)'
          : 'rgba(255,255,255,0.09)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: hovered
          ? '1px solid rgba(0,229,255,0.55)'
          : '1px solid rgba(255,255,255,0.18)',
        boxShadow: hovered
          ? '0 16px 48px rgba(0,229,255,0.2), 0 4px 20px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.3)'
          : '0 4px 24px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.15)',
        transform: hovered ? 'translateY(-10px) scale(1.04)' : 'translateY(0) scale(1)',
        transition: 'all 0.4s cubic-bezier(0.23,1,0.32,1)',
        cursor: 'default',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 20,
        animation: `cardIn 0.65s ease both`,
        animationDelay: `${index * 0.1}s`,
        overflow: 'hidden',
      }}
    >
      {/* Top-right shimmer */}
      <div style={{
        position: 'absolute', top: -1, right: -1,
        width: 100, height: 100,
        background: 'radial-gradient(circle at top right, rgba(135,206,235,0.22), transparent 65%)',
        borderRadius: '0 20px 0 0',
        opacity: hovered ? 1 : 0.4,
        transition: 'opacity 0.4s',
        pointerEvents: 'none',
      }}/>

      {/* Icon */}
      <div style={{
        transform: hovered ? 'scale(1.15)' : 'scale(1)',
        transition: 'transform 0.4s cubic-bezier(0.23,1,0.32,1)',
        filter: hovered
          ? 'drop-shadow(0 0 12px rgba(0,229,255,0.8))'
          : 'drop-shadow(0 0 4px rgba(0,229,255,0.3))',
      }}>
        {service.icon}
      </div>

      {/* Text */}
      <div>
        <div style={{
          fontFamily: '"Plus Jakarta Sans", "DM Sans", sans-serif',
          fontWeight: 700,
          fontSize: '1.06rem',
          letterSpacing: '-0.01em',
          lineHeight: 1.3,
          color: hovered ? '#ffffff' : 'rgba(255,255,255,0.9)',
          textShadow: hovered ? '0 0 20px rgba(0,229,255,0.5)' : 'none',
          transition: 'all 0.3s',
        }}>
          {service.title}
        </div>
        <div style={{
          marginTop: 8,
          width: hovered ? 44 : 26,
          height: 2,
          borderRadius: 2,
          background: 'linear-gradient(90deg, #00E5FF, rgba(135,206,235,0.4))',
          transition: 'width 0.4s cubic-bezier(0.23,1,0.32,1)',
        }}/>
      </div>
    </div>
  )
}

export default function Devops() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes cardIn {
          from { opacity: 0; transform: translateY(30px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes heroIn {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradMove {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes badgePulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(0,229,255,0.5); }
          50% { box-shadow: 0 0 0 7px rgba(0,229,255,0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
       
      `}</style>

      <section style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        background: 'linear-gradient(160deg, #87CEEB 0%, #3A8FB5 30%, #1A5276 60%, #0F3057 100%)',
        backgroundSize: '200% 200%',
        animation: 'gradMove 10s ease infinite',
        overflow: 'hidden',
        fontFamily: '"DM Sans", sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '80px 24px 100px',
      }}>

        {/* Ambient light blobs */}
        <div style={{
          position: 'absolute', top: '-8%', left: '10%',
          width: 600, height: 350,
          background: 'radial-gradient(ellipse, rgba(255,255,255,0.12) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          filter: 'blur(30px)',
        }}/>
        <div style={{
          position: 'absolute', bottom: '5%', right: '5%',
          width: 450, height: 450,
          background: 'radial-gradient(circle, rgba(0,229,255,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}/>

        <ParticleCanvas />

        {/* Logo top right */}
        <div style={{
          position: 'absolute', top: 28, right: 36,
          display: 'flex', alignItems: 'center', gap: 10,
          zIndex: 10,
        }}>
          <div style={{
            width: 34, height: 34, borderRadius: 9,
            background: 'rgba(255,255,255,0.2)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.35)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            animation: 'badgePulse 2.8s ease infinite',
          }}>
            <svg viewBox="0 0 20 20" fill="none" width="18" height="18">
              <path d="M10 2L2 7v6l8 5 8-5V7L10 2z" stroke="#00E5FF" strokeWidth="1.4" strokeLinejoin="round"/>
              <path d="M10 12V8M7.5 9.5L10 8l2.5 1.5" stroke="#00E5FF" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
          </div>
          <span style={{
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontWeight: 700, fontSize: '0.88rem',
            color: 'rgba(255,255,255,0.85)',
            letterSpacing: '0.06em',
          }}>CLOUDFORGE</span>
        </div>

        {/* Badge */}
        <div style={{
          position: 'relative', zIndex: 2,
          marginBottom: 26,
          padding: '6px 20px',
          borderRadius: 100,
          border: '1px solid rgba(255,255,255,0.3)',
          background: 'rgba(255,255,255,0.12)',
          backdropFilter: 'blur(10px)',
          animation: 'heroIn 0.6s ease 0.1s both',
        }}>
          <span style={{
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontWeight: 600,
            fontSize: '0.7rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#00E5FF',
          }}>Enterprise Cloud Services</span>
        </div>

        {/* Title */}
        <h1 style={{
          position: 'relative', zIndex: 2,
          fontFamily: '"Plus Jakarta Sans", sans-serif',
          fontWeight: 800,
          fontSize: 'clamp(2.2rem, 5.5vw, 4rem)',
          letterSpacing: '-0.03em',
          color: '#ffffff',
          textAlign: 'center',
          lineHeight: 1.1,
          maxWidth: 720,
          textShadow: '0 2px 40px rgba(0,229,255,0.3)',
          animation: 'heroIn 0.65s ease 0.2s both',
        }}>
          DevOps &{' '}
          <span style={{
            background: 'linear-gradient(135deg, #00E5FF 0%, #87CEEB 60%, #ffffff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'float 4s ease-in-out infinite',
            display: 'inline-block',
          }}>Cloud Engineering</span>
        </h1>

        {/* Subtitle */}
        <p style={{
          position: 'relative', zIndex: 2,
          marginTop: 18,
          fontFamily: '"DM Sans", sans-serif',
          fontWeight: 300,
          fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
          color: 'rgba(255,255,255,0.65)',
          textAlign: 'center',
          letterSpacing: '0.01em',
          maxWidth: 500,
          lineHeight: 1.65,
          animation: 'heroIn 0.65s ease 0.35s both',
        }}>
          Automating Infrastructure for Scalable Innovation
        </p>

        {/* Stats row */}
        <div style={{
          position: 'relative', zIndex: 2,
          display: 'flex', gap: 36, flexWrap: 'wrap', justifyContent: 'center',
          marginTop: 36,
          animation: 'heroIn 0.65s ease 0.45s both',
        }}>
          {[['99.9%', 'Uptime SLA'], ['10x', 'Faster Deploy'], ['< 5min', 'MTTR']].map(([val, label]) => (
            <div key={label} style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              gap: 2,
              padding: '12px 20px',
              borderRadius: 12,
              background: 'rgba(255,255,255,0.08)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.15)',
            }}>
              <span style={{
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontWeight: 800, fontSize: '1.4rem',
                color: '#00E5FF',
                letterSpacing: '-0.02em',
              }}>{val}</span>
              <span style={{
                fontFamily: '"DM Sans", sans-serif',
                fontWeight: 400, fontSize: '0.72rem',
                color: 'rgba(255,255,255,0.55)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}>{label}</span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{
          position: 'relative', zIndex: 2,
          marginTop: 44,
          display: 'flex', alignItems: 'center', gap: 16,
          width: '100%', maxWidth: 300,
          animation: 'heroIn 0.65s ease 0.5s both',
        }}>
          <div style={{flex:1, height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.25))'}}/>
          <div style={{width:6, height:6, borderRadius:'50%', background:'#00E5FF', boxShadow:'0 0 8px #00E5FF'}}/>
          <div style={{flex:1, height: 1, background: 'linear-gradient(90deg, rgba(255,255,255,0.25), transparent)'}}/>
        </div>

        {/* Cards Grid */}
        <div style={{
          position: 'relative', zIndex: 2,
          marginTop: 52,
          width: '100%',
          maxWidth: 1080,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(295px, 1fr))',
          gap: 22,
        }}>
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div style={{
          position: 'relative', zIndex: 2,
          marginTop: 64,
          display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center',
          animation: 'heroIn 0.7s ease 0.9s both',
        }}>
          <button
            style={{
              padding: '15px 38px',
              borderRadius: 12,
              border: 'none',
              background: 'linear-gradient(135deg, #00E5FF 0%, #3A8FB5 100%)',
              color: '#0F3057',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontWeight: 700,
              fontSize: '0.95rem',
              letterSpacing: '0.02em',
              cursor: 'pointer',
              boxShadow: '0 8px 30px rgba(0,229,255,0.35)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => {
              e.target.style.transform = 'translateY(-2px)'
              e.target.style.boxShadow = '0 14px 40px rgba(0,229,255,0.5)'
            }}
            onMouseLeave={e => {
              e.target.style.transform = 'translateY(0)'
              e.target.style.boxShadow = '0 8px 30px rgba(0,229,255,0.35)'
            }}
          >
            Start Your Migration
          </button>
          <button
            style={{
              padding: '15px 38px',
              borderRadius: 12,
              border: '1px solid rgba(255,255,255,0.3)',
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)',
              color: 'rgba(255,255,255,0.9)',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontWeight: 600,
              fontSize: '0.95rem',
              cursor: 'pointer',
              transition: 'border-color 0.2s, background 0.2s',
            }}
            onMouseEnter={e => {
              e.target.style.borderColor = 'rgba(0,229,255,0.6)'
              e.target.style.background = 'rgba(0,229,255,0.1)'
            }}
            onMouseLeave={e => {
              e.target.style.borderColor = 'rgba(255,255,255,0.3)'
              e.target.style.background = 'rgba(255,255,255,0.1)'
            }}
          >
            View Architecture Docs
          </button>
        </div>
      </section>
    </>
  )
}