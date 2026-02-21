import React, { useEffect, useRef, useState } from 'react'

const services = [
  {
    title: 'Search Engine Optimization',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:44,height:44}}>
        <circle cx="20" cy="20" r="12" stroke="white" strokeWidth="1.6"/>
        <line x1="29" y1="29" x2="42" y2="42" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <line x1="14" y1="20" x2="26" y2="20" stroke="white" strokeWidth="1.3" opacity="0.7"/>
        <line x1="14" y1="16" x2="22" y2="16" stroke="white" strokeWidth="1.3" opacity="0.5"/>
        <line x1="14" y1="24" x2="24" y2="24" stroke="white" strokeWidth="1.3" opacity="0.4"/>
        <circle cx="20" cy="20" r="5" stroke="white" strokeWidth="1" opacity="0.3" strokeDasharray="2 2"/>
      </svg>
    ),
  },
  {
    title: 'Pay-Per-Click Advertising',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:44,height:44}}>
        <rect x="4" y="10" width="40" height="28" rx="4" stroke="white" strokeWidth="1.6"/>
        <line x1="4" y1="18" x2="44" y2="18" stroke="white" strokeWidth="1" opacity="0.4"/>
        <circle cx="10" cy="14" r="2" fill="white" opacity="0.8"/>
        <circle cx="16" cy="14" r="2" fill="white" opacity="0.5"/>
        <path d="M12 28l6-6 5 4 6-8 5 6" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="34" cy="30" r="3" stroke="white" strokeWidth="1.4"/>
        <line x1="36.1" y1="32.1" x2="39" y2="35" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Social Media Management',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:44,height:44}}>
        <circle cx="36" cy="10" r="5" stroke="white" strokeWidth="1.6"/>
        <circle cx="10" cy="24" r="5" stroke="white" strokeWidth="1.6"/>
        <circle cx="36" cy="38" r="5" stroke="white" strokeWidth="1.6"/>
        <line x1="15" y1="21.5" x2="31" y2="12.5" stroke="white" strokeWidth="1.4"/>
        <line x1="15" y1="26.5" x2="31" y2="35.5" stroke="white" strokeWidth="1.4"/>
        <circle cx="36" cy="10" r="2" fill="white" opacity="0.5"/>
        <circle cx="10" cy="24" r="2" fill="white" opacity="0.5"/>
        <circle cx="36" cy="38" r="2" fill="white" opacity="0.5"/>
      </svg>
    ),
  },
  {
    title: 'Content Marketing',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:44,height:44}}>
        <rect x="8" y="6" width="32" height="36" rx="3" stroke="white" strokeWidth="1.6"/>
        <line x1="14" y1="16" x2="34" y2="16" stroke="white" strokeWidth="1.3" opacity="0.8"/>
        <line x1="14" y1="22" x2="34" y2="22" stroke="white" strokeWidth="1.3" opacity="0.6"/>
        <line x1="14" y1="28" x2="26" y2="28" stroke="white" strokeWidth="1.3" opacity="0.4"/>
        <circle cx="32" cy="32" r="7" fill="rgba(255,255,255,0.15)" stroke="white" strokeWidth="1.4"/>
        <line x1="30" y1="32" x2="34" y2="32" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
        <line x1="32" y1="30" x2="32" y2="34" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Email Marketing',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:44,height:44}}>
        <rect x="4" y="12" width="40" height="28" rx="4" stroke="white" strokeWidth="1.6"/>
        <polyline points="4,14 24,28 44,14" stroke="white" strokeWidth="1.4" strokeLinejoin="round"/>
        <line x1="4" y1="40" x2="16" y2="28" stroke="white" strokeWidth="1" opacity="0.35"/>
        <line x1="44" y1="40" x2="32" y2="28" stroke="white" strokeWidth="1" opacity="0.35"/>
        <circle cx="38" cy="10" r="5" fill="rgba(255,255,255,0.25)" stroke="white" strokeWidth="1.2"/>
        <line x1="36" y1="10" x2="40" y2="10" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="38" y1="8" x2="38" y2="12" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Analytics & Reporting',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:44,height:44}}>
        <rect x="6" y="28" width="8" height="14" rx="2" fill="rgba(255,255,255,0.25)" stroke="white" strokeWidth="1.4"/>
        <rect x="18" y="20" width="8" height="22" rx="2" fill="rgba(255,255,255,0.2)" stroke="white" strokeWidth="1.4"/>
        <rect x="30" y="12" width="8" height="30" rx="2" fill="rgba(255,255,255,0.15)" stroke="white" strokeWidth="1.4"/>
        <polyline points="10,26 22,18 34,10" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="34" cy="10" r="2.5" fill="white"/>
        <line x1="6" y1="44" x2="44" y2="44" stroke="white" strokeWidth="1" opacity="0.3"/>
      </svg>
    ),
  },
]

function AnimatedBackground() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animFrame
    let t = 0
    let W = canvas.width = canvas.offsetWidth
    let H = canvas.height = canvas.offsetHeight

    const particles = Array.from({length: 55}, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 2.5 + 0.5,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.4 + 0.1,
      color: Math.random() > 0.5 ? '255,255,255' : '155,93,229',
    }))

    // Floating geometric shapes
    const shapes = Array.from({length: 6}, (_, i) => ({
      x: Math.random() * W,
      y: Math.random() * H,
      size: 30 + Math.random() * 60,
      dx: (Math.random() - 0.5) * 0.12,
      dy: (Math.random() - 0.5) * 0.12,
      rot: Math.random() * Math.PI * 2,
      drot: (Math.random() - 0.5) * 0.005,
      type: i % 3,
    }))

    function drawWave(y, amp, freq, phase, alpha) {
      ctx.beginPath()
      for (let x = 0; x <= W; x += 4) {
        const wy = y + Math.sin((x / W) * freq * Math.PI * 2 + phase) * amp
        x === 0 ? ctx.moveTo(x, wy) : ctx.lineTo(x, wy)
      }
      ctx.lineTo(W, H)
      ctx.lineTo(0, H)
      ctx.closePath()
      ctx.fillStyle = `rgba(255,255,255,${alpha})`
      ctx.fill()
    }

    function draw() {
      ctx.clearRect(0, 0, W, H)
      t += 0.008

      // Waves
      drawWave(H * 0.7, 28, 1.5, t, 0.04)
      drawWave(H * 0.75, 22, 2, t * 1.3 + 1, 0.03)
      drawWave(H * 0.82, 18, 2.5, t * 0.8 + 2, 0.025)

      // Geometric shapes
      shapes.forEach(s => {
        ctx.save()
        ctx.translate(s.x, s.y)
        ctx.rotate(s.rot)
        ctx.strokeStyle = 'rgba(255,255,255,0.1)'
        ctx.lineWidth = 1
        ctx.beginPath()
        if (s.type === 0) {
          ctx.rect(-s.size/2, -s.size/2, s.size, s.size)
        } else if (s.type === 1) {
          ctx.arc(0, 0, s.size/2, 0, Math.PI * 2)
        } else {
          ctx.moveTo(0, -s.size/2)
          ctx.lineTo(s.size/2, s.size/2)
          ctx.lineTo(-s.size/2, s.size/2)
          ctx.closePath()
        }
        ctx.stroke()
        ctx.restore()
        s.x += s.dx; s.y += s.dy; s.rot += s.drot
        if (s.x < -100) s.x = W + 100
        if (s.x > W + 100) s.x = -100
        if (s.y < -100) s.y = H + 100
        if (s.y > H + 100) s.y = -100
      })

      // Particles
      particles.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p.color},${p.alpha})`
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
        borderRadius: 18,
        padding: '38px 28px 34px',
        background: hovered
          ? 'rgba(255,255,255,0.22)'
          : 'rgba(255,255,255,0.12)',
        backdropFilter: 'blur(22px)',
        WebkitBackdropFilter: 'blur(22px)',
        border: hovered
          ? '1px solid rgba(255,255,255,0.55)'
          : '1px solid rgba(255,255,255,0.22)',
        boxShadow: hovered
          ? '0 20px 60px rgba(155,93,229,0.35), 0 6px 24px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.4)'
          : '0 6px 28px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.2)',
        transform: hovered ? 'translateY(-10px) scale(1.05)' : 'translateY(0) scale(1)',
        transition: 'all 0.42s cubic-bezier(0.23,1,0.32,1)',
        cursor: 'default',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 20,
        animation: `cardIn 0.7s ease both`,
        animationDelay: `${index * 0.1}s`,
        overflow: 'hidden',
      }}
    >
      {/* Purple glow corner on hover */}
      <div style={{
        position: 'absolute', bottom: -20, right: -20,
        width: 120, height: 120,
        background: 'radial-gradient(circle, rgba(155,93,229,0.35), transparent 65%)',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.42s',
        pointerEvents: 'none',
        borderRadius: '50%',
      }}/>
      {/* Top shimmer */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)',
        opacity: hovered ? 1 : 0.3,
        transition: 'opacity 0.42s',
      }}/>

      {/* Icon */}
      <div style={{
        transform: hovered ? 'scale(1.18) rotate(-5deg)' : 'scale(1) rotate(0deg)',
        transition: 'transform 0.42s cubic-bezier(0.23,1,0.32,1)',
        filter: hovered
          ? 'drop-shadow(0 0 14px rgba(255,255,255,0.9))'
          : 'drop-shadow(0 0 4px rgba(255,255,255,0.4))',
      }}>
        {service.icon}
      </div>

      {/* Text */}
      <div>
        <div style={{
          fontFamily: '"Clash Display", "Cabinet Grotesk", "DM Sans", sans-serif',
          fontWeight: 700,
          fontSize: '1.08rem',
          letterSpacing: '-0.01em',
          lineHeight: 1.25,
          color: '#ffffff',
          textShadow: hovered ? '0 0 20px rgba(255,255,255,0.6)' : '0 1px 4px rgba(0,0,0,0.15)',
          transition: 'text-shadow 0.35s',
        }}>
          {service.title}
        </div>
        <div style={{
          marginTop: 9,
          width: hovered ? 46 : 24,
          height: 2.5,
          borderRadius: 3,
          background: hovered
            ? 'linear-gradient(90deg, #fff, rgba(155,93,229,0.8))'
            : 'rgba(255,255,255,0.5)',
          transition: 'all 0.42s cubic-bezier(0.23,1,0.32,1)',
          boxShadow: hovered ? '0 0 8px rgba(255,255,255,0.6)' : 'none',
        }}/>
      </div>
    </div>
  )
}

export default function Digital() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&family=Outfit:wght@400;600;700;800;900&display=swap');

        @keyframes cardIn {
          from { opacity: 0; transform: translateY(32px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0)   scale(1); }
        }
        @keyframes heroIn {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradShift {
          0%,100% { background-position: 0% 50%; }
          50%      { background-position: 100% 50%; }
        }
        @keyframes logoPulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(255,255,255,0.45); }
          50%      { box-shadow: 0 0 0 7px rgba(255,255,255,0); }
        }
        @keyframes floatY {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-8px); }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
       
      `}</style>

      <section style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        background: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E53 35%, #F7548A 65%, #9B5DE5 100%)',
        backgroundSize: '300% 300%',
        animation: 'gradShift 9s ease infinite',
        overflow: 'hidden',
        fontFamily: '"DM Sans", sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '84px 24px 104px',
      }}>

        {/* Ambient radial blobs */}
        <div style={{
          position: 'absolute', top: '-12%', right: '-5%',
          width: 520, height: 520,
          background: 'radial-gradient(circle, rgba(255,255,255,0.18) 0%, transparent 65%)',
          borderRadius: '50%', pointerEvents: 'none', filter: 'blur(10px)',
        }}/>
        <div style={{
          position: 'absolute', bottom: '-8%', left: '-6%',
          width: 480, height: 480,
          background: 'radial-gradient(circle, rgba(155,93,229,0.3) 0%, transparent 65%)',
          borderRadius: '50%', pointerEvents: 'none',
        }}/>
        <div style={{
          position: 'absolute', top: '40%', left: '50%',
          width: 300, height: 300,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(255,255,255,0.07) 0%, transparent 70%)',
          borderRadius: '50%', pointerEvents: 'none',
        }}/>

        <AnimatedBackground />

        {/* Decorative spinning ring */}
        <div style={{
          position: 'absolute', top: 60, left: '8%',
          width: 80, height: 80,
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '50%',
          animation: 'spinSlow 18s linear infinite',
          pointerEvents: 'none',
        }}>
          <div style={{
            position: 'absolute', top: -4, left: '50%', marginLeft: -4,
            width: 8, height: 8, borderRadius: '50%',
            background: 'rgba(255,255,255,0.6)',
          }}/>
        </div>

        {/* Logo top right */}
        <div style={{
          position: 'absolute', top: 28, right: 36,
          display: 'flex', alignItems: 'center', gap: 10, zIndex: 10,
        }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: 'rgba(255,255,255,0.2)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.4)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            animation: 'logoPulse 2.5s ease infinite',
          }}>
            <svg viewBox="0 0 20 20" fill="none" width="18" height="18">
              <path d="M3 14l4-5 4 3 3-5 3 4" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="16" cy="5" r="2.5" stroke="white" strokeWidth="1.4"/>
            </svg>
          </div>
          <span style={{
            fontFamily: '"Outfit", sans-serif',
            fontWeight: 700, fontSize: '0.9rem',
            color: 'rgba(255,255,255,0.9)',
            letterSpacing: '0.07em',
          }}>GROWTHLAB</span>
        </div>

        {/* Badge */}
        <div style={{
          position: 'relative', zIndex: 2, marginBottom: 28,
          padding: '6px 20px',
          borderRadius: 100,
          border: '1px solid rgba(255,255,255,0.4)',
          background: 'rgba(255,255,255,0.15)',
          backdropFilter: 'blur(10px)',
          animation: 'heroIn 0.55s ease 0.1s both',
        }}>
          <span style={{
            fontFamily: '"Outfit", sans-serif',
            fontWeight: 600, fontSize: '0.7rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#ffffff',
          }}>Full-Funnel Marketing Agency</span>
        </div>

        {/* Title */}
        <h1 style={{
          position: 'relative', zIndex: 2,
          fontFamily: '"Outfit", sans-serif',
          fontWeight: 900,
          fontSize: 'clamp(2.4rem, 6vw, 4.4rem)',
          letterSpacing: '-0.03em',
          color: '#ffffff',
          textAlign: 'center',
          lineHeight: 1.08,
          maxWidth: 740,
          textShadow: '0 4px 30px rgba(0,0,0,0.15)',
          animation: 'heroIn 0.65s ease 0.2s both',
        }}>
          Digital{' '}
          <span style={{
            position: 'relative',
            display: 'inline-block',
            animation: 'floatY 4.5s ease-in-out infinite',
          }}>
            <span style={{
              background: 'linear-gradient(135deg, #fff 0%, rgba(255,220,200,0.95) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Marketing</span>
          </span>
        </h1>

        {/* Subtitle */}
        <p style={{
          position: 'relative', zIndex: 2,
          marginTop: 18,
          fontFamily: '"DM Sans", sans-serif',
          fontWeight: 300,
          fontSize: 'clamp(0.98rem, 2vw, 1.18rem)',
          color: 'rgba(255,255,255,0.72)',
          textAlign: 'center',
          maxWidth: 480,
          lineHeight: 1.65,
          letterSpacing: '0.01em',
          animation: 'heroIn 0.65s ease 0.35s both',
        }}>
          Driving Growth Through Data &amp; Creativity
        </p>

        {/* Metric pills */}
        <div style={{
          position: 'relative', zIndex: 2,
          display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center',
          marginTop: 34,
          animation: 'heroIn 0.65s ease 0.45s both',
        }}>
          {[['340%', 'Avg. ROAS'], ['2M+', 'Leads Generated'], ['98%', 'Client Retention']].map(([val, label]) => (
            <div key={label} style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2,
              padding: '12px 22px',
              borderRadius: 14,
              background: 'rgba(255,255,255,0.14)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.25)',
            }}>
              <span style={{
                fontFamily: '"Outfit", sans-serif',
                fontWeight: 800, fontSize: '1.5rem',
                color: '#ffffff',
                letterSpacing: '-0.02em',
                textShadow: '0 0 20px rgba(255,255,255,0.4)',
              }}>{val}</span>
              <span style={{
                fontFamily: '"DM Sans", sans-serif',
                fontWeight: 400, fontSize: '0.7rem',
                color: 'rgba(255,255,255,0.6)',
                letterSpacing: '0.07em',
                textTransform: 'uppercase',
              }}>{label}</span>
            </div>
          ))}
        </div>

        {/* Wavy divider */}
        <div style={{
          position: 'relative', zIndex: 2,
          marginTop: 44,
          display: 'flex', alignItems: 'center', gap: 10,
          animation: 'heroIn 0.65s ease 0.5s both',
        }}>
          {[1,2,3,4,5,6,7].map((_, i) => (
            <div key={i} style={{
              width: i === 3 ? 28 : 8,
              height: 3,
              borderRadius: 3,
              background: i === 3
                ? 'linear-gradient(90deg, #fff, rgba(155,93,229,0.8))'
                : 'rgba(255,255,255,0.3)',
              transition: 'all 0.3s',
            }}/>
          ))}
        </div>

        {/* Cards Grid */}
        <div style={{
          position: 'relative', zIndex: 2,
          marginTop: 54,
          width: '100%', maxWidth: 1080,
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
          marginTop: 66,
          display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center',
          animation: 'heroIn 0.7s ease 0.95s both',
        }}>
          <button
            style={{
              padding: '15px 40px',
              borderRadius: 14,
              border: 'none',
              background: '#ffffff',
              color: '#FF6B6B',
              fontFamily: '"Outfit", sans-serif',
              fontWeight: 700,
              fontSize: '0.97rem',
              letterSpacing: '0.01em',
              cursor: 'pointer',
              boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
              transition: 'transform 0.22s, box-shadow 0.22s',
            }}
            onMouseEnter={e => {
              e.target.style.transform = 'translateY(-3px)'
              e.target.style.boxShadow = '0 16px 44px rgba(0,0,0,0.25)'
            }}
            onMouseLeave={e => {
              e.target.style.transform = 'translateY(0)'
              e.target.style.boxShadow = '0 8px 32px rgba(0,0,0,0.18)'
            }}
          >
            Grow My Brand →
          </button>
          <button
            style={{
              padding: '15px 40px',
              borderRadius: 14,
              border: '1px solid rgba(255,255,255,0.4)',
              background: 'rgba(255,255,255,0.12)',
              backdropFilter: 'blur(12px)',
              color: '#ffffff',
              fontFamily: '"Outfit", sans-serif',
              fontWeight: 600,
              fontSize: '0.97rem',
              cursor: 'pointer',
              transition: 'border-color 0.22s, background 0.22s',
            }}
            onMouseEnter={e => {
              e.target.style.borderColor = 'rgba(255,255,255,0.7)'
              e.target.style.background = 'rgba(255,255,255,0.2)'
            }}
            onMouseLeave={e => {
              e.target.style.borderColor = 'rgba(255,255,255,0.4)'
              e.target.style.background = 'rgba(255,255,255,0.12)'
            }}
          >
            View Case Studies
          </button>
        </div>

      </section>
    </>
  )
}
