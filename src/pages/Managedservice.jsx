import React, { useEffect, useRef } from 'react'

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Clash+Display:wght@400;500;600;700&family=Satoshi:wght@300;400;500;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap');

 

  :root {
    --bg:         #050c0a;
    --bg1:        #060e0b;
    --bg2:        #081210;
    --bg3:        #0a1614;
    --bg4:        #0d1c19;

    --g1:         #0d9e6e;
    --g2:         #10b981;
    --g3:         #34d399;
    --g4:         #6ee7b7;
    --g5:         #a7f3d8;

    --teal:       #14b8a6;
    --teal-lt:    #5eead4;

    --glass-bg:   rgba(16, 185, 129, 0.06);
    --glass-bg2:  rgba(16, 185, 129, 0.10);
    --glass-bg3:  rgba(16, 185, 129, 0.15);
    --glass-b:    rgba(52, 211, 153, 0.14);
    --glass-bh:   rgba(52, 211, 153, 0.30);
    --glass-glow: rgba(16, 185, 129, 0.20);

    --white:      #edfdf7;
    --cream:      #d1fae5;
    --muted:      rgba(167, 243, 216, 0.55);
    --dim:        rgba(167, 243, 216, 0.28);
    --line:       rgba(52, 211, 153, 0.10);
    --line2:      rgba(52, 211, 153, 0.06);
  }

  .ms-root {
    font-family: 'DM Sans', sans-serif;
    background: var(--bg);
    color: var(--white);
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
  }

  /* ── Mesh gradient background ── */
  .ms-mesh {
    position: fixed; inset: 0; z-index: 0; pointer-events: none;
    background:
      radial-gradient(ellipse 65% 55% at 10% 15%,  rgba(13,158,110,0.12) 0%, transparent 60%),
      radial-gradient(ellipse 50% 50% at 90% 80%,  rgba(20,184,166,0.10) 0%, transparent 55%),
      radial-gradient(ellipse 35% 40% at 55% 45%,  rgba(16,185,129,0.06) 0%, transparent 60%),
      radial-gradient(ellipse 60% 35% at 80% 10%,  rgba(52,211,153,0.05) 0%, transparent 55%);
  }

  /* ── Animated grid lines ── */
  .ms-grid-bg {
    position: fixed; inset: 0; z-index: 0; pointer-events: none;
    background-image:
      linear-gradient(var(--line2) 1px, transparent 1px),
      linear-gradient(90deg, var(--line2) 1px, transparent 1px);
    background-size: 72px 72px;
    mask-image: radial-gradient(ellipse at center, black 20%, transparent 80%);
  }

  /* ── Noise ── */
  .ms-noise {
    position: fixed; inset: 0; z-index: 0; pointer-events: none; opacity: 0.022;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E");
  }

  .ms-page { position: relative; z-index: 2; }

  /* ══ NAV ══ */
  .ms-nav {
    position: sticky; top: 0; z-index: 100;
    display: flex; align-items: center; justify-content: space-between;
    padding: 18px 72px;
    background: rgba(5, 12, 10, 0.75);
    backdrop-filter: blur(28px) saturate(180%);
    -webkit-backdrop-filter: blur(28px) saturate(180%);
    border-bottom: 1px solid var(--line);
  }
  @media(max-width:900px){ .ms-nav { padding: 16px 22px; } }

  .ms-logo {
    font-family: 'Syne', sans-serif;
    font-size: 20px; font-weight: 800; letter-spacing: -0.3px;
    color: var(--g3);
    display: flex; align-items: center; gap: 10px;
  }
  .ms-logo-icon {
    width: 32px; height: 32px; border-radius: 8px;
    background: linear-gradient(135deg, var(--g1), var(--teal));
    display: flex; align-items: center; justify-content: center;
    box-shadow: 0 0 18px rgba(13,158,110,0.4);
  }
  .ms-nav-links { display: flex; gap: 28px; list-style: none; }
  .ms-nav-links a { color: var(--muted); text-decoration: none; font-size: 14px; font-weight: 500; transition: color .2s; }
  .ms-nav-links a:hover { color: var(--g3); }
  @media(max-width:760px){ .ms-nav-links { display: none; } }

  .ms-nav-btn {
    background: var(--glass-bg2);
    border: 1px solid var(--glass-b);
    color: var(--g3); padding: 9px 22px; border-radius: 8px;
    font-size: 14px; font-weight: 600; cursor: pointer; font-family: inherit;
    backdrop-filter: blur(12px);
    transition: background .25s, border-color .25s, box-shadow .25s;
  }
  .ms-nav-btn:hover {
    background: var(--glass-bg3);
    border-color: var(--glass-bh);
    box-shadow: 0 0 24px var(--glass-glow);
  }

  /* ══ HERO ══ */
  .ms-hero {
    padding: 88px 72px 80px;
    display: grid; grid-template-columns: 1fr 460px;
    gap: 64px; align-items: center;
    border-bottom: 1px solid var(--line);
    position: relative; overflow: hidden;
  }
  @media(max-width:1100px){ .ms-hero { grid-template-columns: 1fr; padding: 70px 22px 60px; } }

  .ms-hero-badge {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 6px 16px; border-radius: 100px;
    background: var(--glass-bg2);
    border: 1px solid var(--glass-b);
    backdrop-filter: blur(12px);
    font-size: 11px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase;
    color: var(--g3); margin-bottom: 28px;
  }
  .ms-badge-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--g2); animation: pulse 1.8s infinite; }
  @keyframes pulse { 0%,100%{opacity:1;box-shadow:0 0 0 0 rgba(16,185,129,0.5);} 50%{opacity:0.6;box-shadow:0 0 0 5px rgba(16,185,129,0);} }

  .ms-hero h1 {
    font-family: 'Syne', sans-serif;
    font-size: clamp(40px, 5.5vw, 70px);
    font-weight: 800; line-height: 1.05; letter-spacing: -2px;
    color: var(--white); margin-bottom: 24px;
  }
  .ms-hero h1 span {
    background: linear-gradient(120deg, var(--g3) 0%, var(--teal-lt) 60%, var(--g4) 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  }
  .ms-hero-p {
    font-size: 17px; color: var(--muted); line-height: 1.8; font-weight: 300;
    max-width: 460px; margin-bottom: 44px;
  }
  .ms-hero-btns { display: flex; gap: 14px; align-items: center; flex-wrap: wrap; }

  .ms-btn-primary {
    background: linear-gradient(135deg, var(--g1), var(--g2));
    color: #fff; border: none; padding: 14px 34px;
    border-radius: 10px; font-size: 15px; font-weight: 600;
    cursor: pointer; font-family: inherit;
    box-shadow: 0 0 36px rgba(13,158,110,0.35);
    transition: transform .25s, box-shadow .25s;
  }
  .ms-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 0 56px rgba(13,158,110,0.55); }

  .ms-btn-glass {
    background: var(--glass-bg);
    border: 1px solid var(--glass-b);
    color: var(--g4); padding: 14px 28px;
    border-radius: 10px; font-size: 15px; font-weight: 500;
    cursor: pointer; font-family: inherit;
    backdrop-filter: blur(12px);
    display: flex; align-items: center; gap: 8px;
    transition: background .25s, border-color .25s;
  }
  .ms-btn-glass:hover { background: var(--glass-bg2); border-color: var(--glass-bh); }

  /* Hero right — glass metrics panel */
  .ms-metrics-panel {
    background: var(--glass-bg);
    border: 1px solid var(--glass-b);
    border-radius: 22px;
    padding: 32px 28px;
    backdrop-filter: blur(24px) saturate(160%);
    -webkit-backdrop-filter: blur(24px) saturate(160%);
    position: relative; overflow: hidden;
    box-shadow: 0 0 80px rgba(13,158,110,0.08), inset 0 0 60px rgba(16,185,129,0.02);
  }
  .ms-metrics-panel::before {
    content: '';
    position: absolute; top: -60px; right: -60px;
    width: 200px; height: 200px; border-radius: 50%;
    background: radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%);
    pointer-events: none;
  }
  .ms-panel-label {
    font-size: 10px; letter-spacing: 3.5px; text-transform: uppercase;
    color: var(--g2); font-weight: 700; margin-bottom: 22px;
    display: flex; align-items: center; gap: 8px;
  }
  .ms-panel-label::after { content: ''; flex: 1; height: 1px; background: var(--line); }

  .ms-metric-row {
    display: flex; align-items: center; justify-content: space-between;
    padding: 13px 0; border-bottom: 1px solid var(--line2);
  }
  .ms-metric-row:last-child { border-bottom: none; }
  .ms-metric-left { display: flex; align-items: center; gap: 10px; }
  .ms-metric-dot { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; }
  .ms-metric-name { font-size: 13px; color: var(--muted); font-weight: 400; }
  .ms-metric-val {
    font-family: 'Syne', sans-serif;
    font-size: 15px; font-weight: 700; color: var(--g3); letter-spacing: -0.3px;
  }

  /* ══ SECTION SHARED ══ */
  .ms-section { padding: 88px 72px; }
  @media(max-width:900px){ .ms-section { padding: 66px 22px; } }

  .ms-eyebrow {
    font-size: 10px; letter-spacing: 4px; text-transform: uppercase;
    color: var(--g2); font-weight: 700; margin-bottom: 12px;
    display: flex; align-items: center; gap: 10px;
  }
  .ms-eyebrow::before { content: ''; display: block; width: 24px; height: 1px; background: var(--g2); }

  .ms-h2 {
    font-family: 'Syne', sans-serif;
    font-size: clamp(28px, 3.5vw, 48px); font-weight: 800;
    line-height: 1.08; letter-spacing: -1.2px; color: var(--white);
  }
  .ms-h2 span {
    background: linear-gradient(120deg, var(--g3), var(--teal-lt));
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  }
  .ms-body { font-size: 15px; color: var(--muted); line-height: 1.8; font-weight: 300; }

  /* ══ SERVICES ══ */
  .ms-svc-section {
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
    padding: 88px 72px;
    background: rgba(8,18,16,0.4);
  }
  @media(max-width:900px){ .ms-svc-section { padding: 66px 22px; } }

  .ms-svc-head {
    display: flex; justify-content: space-between; align-items: flex-end;
    gap: 40px; margin-bottom: 52px;
  }
  @media(max-width:900px){ .ms-svc-head { flex-direction: column; align-items: flex-start; } }
  .ms-svc-head .ms-body { max-width: 320px; }

  .ms-svc-grid {
    display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px;
  }
  @media(max-width:1000px){ .ms-svc-grid { grid-template-columns: 1fr 1fr; } }
  @media(max-width:560px){ .ms-svc-grid { grid-template-columns: 1fr; } }

  /* Glassmorphism card */
  .ms-card {
    background: var(--glass-bg);
    border: 1px solid var(--glass-b);
    border-radius: 18px; padding: 34px 28px;
    backdrop-filter: blur(20px) saturate(150%);
    -webkit-backdrop-filter: blur(20px) saturate(150%);
    position: relative; overflow: hidden;
    cursor: default;
    transition: transform .35s cubic-bezier(.2,.9,.3,1), border-color .35s, box-shadow .35s, background .35s;
  }
  /* inner glow top */
  .ms-card::before {
    content: '';
    position: absolute; top: 0; left: 0; right: 0; height: 1px;
    background: linear-gradient(90deg, transparent, var(--g2), transparent);
    opacity: 0; transition: opacity .35s;
  }
  /* subtle inner gradient */
  .ms-card::after {
    content: '';
    position: absolute; inset: 0; border-radius: inherit;
    background: radial-gradient(ellipse at top left, rgba(16,185,129,0.08) 0%, transparent 60%);
    opacity: 0; transition: opacity .35s;
    pointer-events: none;
  }
  .ms-card:hover {
    transform: translateY(-8px);
    border-color: var(--glass-bh);
    background: var(--glass-bg2);
    box-shadow:
      0 24px 60px rgba(13,158,110,0.18),
      0 0 0 1px rgba(52,211,153,0.08),
      inset 0 0 30px rgba(16,185,129,0.03);
  }
  .ms-card:hover::before { opacity: 1; }
  .ms-card:hover::after  { opacity: 1; }

  .ms-card-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 22px; }
  .ms-card-icon {
    width: 50px; height: 50px; border-radius: 13px;
    background: var(--glass-bg2);
    border: 1px solid var(--glass-b);
    display: flex; align-items: center; justify-content: center;
    backdrop-filter: blur(12px);
    transition: box-shadow .35s, background .35s;
  }
  .ms-card:hover .ms-card-icon {
    box-shadow: 0 0 28px rgba(16,185,129,0.35);
    background: var(--glass-bg3);
  }
  .ms-card-num {
    font-family: 'Syne', sans-serif;
    font-size: 11px; font-weight: 700; color: var(--dim); letter-spacing: 1px;
  }
  .ms-card h3 { font-family: 'Syne', sans-serif; font-size: 17px; font-weight: 700; color: var(--white); margin-bottom: 10px; }
  .ms-card p  { font-size: 13.5px; color: var(--muted); line-height: 1.7; font-weight: 300; }
  .ms-card-cta {
    margin-top: 22px; font-size: 12px; font-weight: 600; color: var(--g3);
    display: flex; align-items: center; gap: 5px;
    opacity: 0; transform: translateY(4px); transition: opacity .3s, transform .3s;
  }
  .ms-card:hover .ms-card-cta { opacity: 1; transform: translateY(0); }

  /* ══ PROCESS ══ */
  .ms-process-section { border-bottom: 1px solid var(--line); }

  .ms-process-head { margin-bottom: 60px; }
  .ms-process-head .ms-body { margin-top: 12px; max-width: 480px; }

  .ms-steps-row {
    display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px;
    background: var(--line);
    border: 1px solid var(--line); border-radius: 16px; overflow: hidden;
  }
  @media(max-width:900px){ .ms-steps-row { grid-template-columns: 1fr 1fr; } }
  @media(max-width:560px){ .ms-steps-row { grid-template-columns: 1fr; } }

  .ms-step {
    background: var(--bg1);
    padding: 40px 32px;
    display: flex; flex-direction: column; gap: 0;
    transition: background .3s;
    position: relative; overflow: hidden;
  }
  .ms-step::after {
    content: '';
    position: absolute; bottom: 0; left: 0; right: 0; height: 2px;
    background: linear-gradient(90deg, transparent, var(--g1), transparent);
    transform: scaleX(0); transition: transform .4s;
  }
  .ms-step:hover { background: var(--bg3); }
  .ms-step:hover::after { transform: scaleX(1); }

  .ms-step-num {
    font-family: 'Syne', sans-serif;
    font-size: 42px; font-weight: 800; line-height: 1;
    color: rgba(52,211,153,0.12);
    margin-bottom: 20px;
    transition: color .3s;
  }
  .ms-step:hover .ms-step-num { color: rgba(52,211,153,0.20); }

  .ms-step-circle {
    width: 48px; height: 48px; border-radius: 50%; margin-bottom: 20px;
    background: var(--glass-bg2);
    border: 1px solid var(--glass-b);
    display: flex; align-items: center; justify-content: center;
    backdrop-filter: blur(12px);
    transition: box-shadow .3s;
  }
  .ms-step:hover .ms-step-circle { box-shadow: 0 0 24px rgba(16,185,129,0.3); }

  .ms-step h4 { font-family: 'Syne', sans-serif; font-size: 16px; font-weight: 700; color: var(--white); margin-bottom: 10px; }
  .ms-step p  { font-size: 13px; color: var(--muted); line-height: 1.65; font-weight: 300; }
  .ms-step-tag {
    margin-top: 18px; display: inline-block;
    font-size: 10px; letter-spacing: 2px; text-transform: uppercase;
    color: var(--g1); font-weight: 700;
    padding: 3px 10px; border: 1px solid rgba(13,158,110,0.25); border-radius: 4px;
    width: fit-content;
  }

  /* ══ WHY US ══ */
  .ms-why-section { border-bottom: 1px solid var(--line); background: rgba(6,14,11,0.5); }

  .ms-why-inner {
    display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: start;
  }
  @media(max-width:900px){ .ms-why-inner { grid-template-columns: 1fr; gap: 48px; } }

  /* Stat cards left */
  .ms-stat-stack { display: flex; flex-direction: column; gap: 16px; }

  .ms-stat-card {
    background: var(--glass-bg);
    border: 1px solid var(--glass-b);
    border-radius: 18px; padding: 28px 26px;
    backdrop-filter: blur(20px) saturate(150%);
    -webkit-backdrop-filter: blur(20px) saturate(150%);
    position: relative; overflow: hidden;
    transition: border-color .3s, box-shadow .3s, background .3s;
    cursor: default;
  }
  .ms-stat-card:hover {
    border-color: var(--glass-bh);
    box-shadow: 0 16px 48px rgba(13,158,110,0.16), inset 0 0 24px rgba(16,185,129,0.03);
    background: var(--glass-bg2);
  }
  .ms-stat-card.wide {
    display: flex; gap: 24px; align-items: center;
  }
  .ms-stat-icon {
    width: 52px; height: 52px; border-radius: 14px; flex-shrink: 0;
    background: var(--glass-bg2);
    border: 1px solid var(--glass-b);
    display: flex; align-items: center; justify-content: center;
    backdrop-filter: blur(12px);
  }
  .ms-stat-num {
    font-family: 'Syne', sans-serif;
    font-size: 46px; font-weight: 800; letter-spacing: -2px; line-height: 1;
    background: linear-gradient(120deg, var(--white) 20%, var(--g3) 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    margin-bottom: 6px;
  }
  .ms-stat-label { font-size: 13px; color: var(--muted); line-height: 1.5; font-weight: 400; }
  .ms-stat-badge {
    display: inline-flex; align-items: center; gap: 5px; margin-top: 12px;
    background: rgba(13,158,110,0.15); border: 1px solid rgba(52,211,153,0.2);
    color: var(--g3); font-size: 10px; font-weight: 700; letter-spacing: 1.5px;
    text-transform: uppercase; padding: 4px 12px; border-radius: 100px;
  }
  .ms-stat-badge-dot { width: 5px; height: 5px; border-radius: 50%; background: var(--g2); animation: pulse 2s infinite; }

  .ms-mini-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
  .ms-mini-card {
    background: var(--glass-bg);
    border: 1px solid var(--glass-b);
    border-radius: 14px; padding: 22px 20px;
    backdrop-filter: blur(16px);
    transition: border-color .3s, transform .3s;
    cursor: default;
  }
  .ms-mini-card:hover { border-color: var(--glass-bh); transform: translateY(-3px); }
  .ms-mini-num {
    font-family: 'Syne', sans-serif;
    font-size: 28px; font-weight: 800; letter-spacing: -1px;
    background: linear-gradient(120deg, var(--g3), var(--teal-lt));
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    margin-bottom: 5px;
  }
  .ms-mini-label { font-size: 12px; color: var(--dim); line-height: 1.5; }

  /* Right content */
  .ms-why-r { }
  .ms-why-r .ms-h2 { margin-bottom: 20px; }
  .ms-why-r .ms-body { margin-bottom: 36px; }

  .ms-feat-list { display: flex; flex-direction: column; }
  .ms-feat-item {
    display: flex; align-items: flex-start; gap: 16px;
    padding: 18px 0; border-bottom: 1px solid var(--line);
    transition: padding-left .3s; cursor: default;
  }
  .ms-feat-item:first-child { border-top: 1px solid var(--line); }
  .ms-feat-item:hover { padding-left: 8px; }
  .ms-feat-icon {
    width: 40px; height: 40px; border-radius: 10px; flex-shrink: 0;
    background: var(--glass-bg2);
    border: 1px solid var(--glass-b);
    backdrop-filter: blur(12px);
    display: flex; align-items: center; justify-content: center; margin-top: 1px;
    transition: box-shadow .3s;
  }
  .ms-feat-item:hover .ms-feat-icon { box-shadow: 0 0 18px rgba(16,185,129,0.25); }
  .ms-feat-item h5 { font-family: 'Syne', sans-serif; font-size: 14px; font-weight: 700; color: var(--white); margin-bottom: 3px; }
  .ms-feat-item p  { font-size: 13px; color: var(--muted); line-height: 1.6; font-weight: 300; }

  /* ══ CTA ══ */
  .ms-cta-wrap { padding: 0 72px 72px; }
  @media(max-width:900px){ .ms-cta-wrap { padding: 0 22px 48px; } }

  .ms-cta {
    padding: 56px 56px;
    border-radius: 20px;
    background: var(--glass-bg);
    border: 1px solid var(--glass-b);
    backdrop-filter: blur(28px) saturate(160%);
    -webkit-backdrop-filter: blur(28px) saturate(160%);
    display: flex; align-items: center; justify-content: space-between; gap: 36px;
    position: relative; overflow: hidden;
    box-shadow: 0 0 80px rgba(13,158,110,0.08), inset 0 0 60px rgba(16,185,129,0.02);
  }
  @media(max-width:900px){ .ms-cta { padding: 36px 26px; flex-direction: column; } }
  .ms-cta::before {
    content: ''; position: absolute; top: -80px; right: -80px;
    width: 300px; height: 300px; border-radius: 50%;
    background: radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%);
    pointer-events: none;
  }
  .ms-cta::after {
    content: ''; position: absolute; bottom: -60px; left: -60px;
    width: 240px; height: 240px; border-radius: 50%;
    background: radial-gradient(circle, rgba(20,184,166,0.07) 0%, transparent 70%);
    pointer-events: none;
  }
  .ms-cta h3 {
    font-family: 'Syne', sans-serif;
    font-size: clamp(22px, 2.8vw, 36px); font-weight: 800;
    color: var(--white); margin-bottom: 8px; line-height: 1.1; letter-spacing: -0.5px;
  }
  .ms-cta p { font-size: 14px; color: var(--muted); font-weight: 300; }
  .ms-cta-btns { display: flex; gap: 12px; flex-shrink: 0; flex-wrap: wrap; position: relative; z-index: 1; }
`

/* Icon helper */
const Ico = ({ d, size = 22, color = '#34d399' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    {d}
  </svg>
)

const ic = {
  support:   <Ico d={<><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></>}/>,
  network:   <Ico d={<><circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"/></>}/>,
  patch:     <Ico d={<><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></>}/>,
  helpdesk:  <Ico d={<><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></>}/>,
  asset:     <Ico d={<><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></>}/>,
  consult:   <Ico d={<><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></>}/>,
  lock:      <Ico d={<><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></>}/>,
  zap:       <Ico d={<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>}/>,
  globe:     <Ico d={<><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></>}/>,
  server:    <Ico d={<><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></>}/>,
  arrow:     <Ico d={<><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></>} size={15} color="#34d399"/>,
  clock:     <Ico d={<><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>}/>,
  discover:  <Ico d={<><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></>}/>,
  plan:      <Ico d={<><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></>}/>,
  deploy:    <Ico d={<><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></>}/>,
  monitor:   <Ico d={<><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></>}/>,
}

const services = [
  { k:'support',  name:'Managed IT Support',   desc:'Your dedicated IT team without the overhead — proactive maintenance, lifecycle planning, and continuous optimisation on a fixed monthly cost.' },
  { k:'network',  name:'Network Monitoring',   desc:'Real-time visibility and proactive resolution across your entire network fabric with AI-assisted anomaly detection and instant alerting.' },
  { k:'patch',    name:'Patch Management',     desc:'Automated OS and software updates deployed in tested rollout windows — zero disruptions, full compliance coverage, every time.' },
  { k:'helpdesk', name:'Helpdesk Services',    desc:'Multi-tiered support for all your staff\'s needs — from password resets to complex incident escalation, around the clock, 365 days.' },
  { k:'asset',    name:'Asset Management',     desc:'Track hardware inventory, software licences, and warranty expiry across your entire estate from a single live, unified dashboard.' },
  { k:'consult',  name:'IT Consulting',        desc:'Technology roadmaps aligned with your business objectives, budget constraints, and long-term digital transformation ambitions.' },
]

const steps = [
  { icon:'discover', n:'01', title:'Discovery & Audit',        desc:'Deep-dive assessment of your infrastructure, mapping every asset, risk, and gap before we write a single line of policy.', tag:'Week 1–2' },
  { icon:'plan',     n:'02', title:'Strategy & Design',        desc:'Tailored managed services blueprint with defined SLAs, escalation paths, tooling stack, and phased implementation roadmap.', tag:'Week 2–3' },
  { icon:'deploy',   n:'03', title:'Onboarding & Deployment',  desc:'Zero-disruption cutover. Agents, integrations, and automation workflows live within days — your team barely notices.', tag:'Week 3–5' },
  { icon:'monitor',  n:'04', title:'Monitor & Optimise',       desc:'24/7 monitoring, executive monthly reports, and continuous service improvements that scale with your business.', tag:'Ongoing' },
]

const feats = [
  { k:'lock',   title:'Zero-Trust Security',     desc:'Compliance-ready controls and layered posture management across every endpoint and workload.' },
  { k:'zap',    title:'Sub-15min P1 Response',   desc:'Guaranteed by SLA — not just a promise, a contractual commitment we meet every single month.' },
  { k:'globe',  title:'Vendor-Neutral Expertise',desc:'We work with your existing stack. No forced migrations, no hidden lock-in, no agenda.' },
  { k:'server', title:'Certified Engineering',   desc:'Multi-certified engineers across cloud, on-premise, hybrid, and edge infrastructure.' },
]

export default function Managedservice() {
  return (
    <>
      <style>{css}</style>
      <div className="ms-root">
        <div className="ms-mesh"/>
        <div className="ms-grid-bg"/>
        <div className="ms-noise"/>
        <div className="ms-page">

          {/* NAV */}
          <header className="ms-nav">
            <div className="ms-logo">
              <div className="ms-logo-icon">
                <Ico d={<><rect x="2" y="3" width="7" height="7" rx="1"/><rect x="15" y="3" width="7" height="7" rx="1"/><rect x="2" y="14" width="7" height="7" rx="1"/><rect x="15" y="14" width="7" height="7" rx="1"/></>} size={16} color="#fff"/>
              </div>
              NexusTech
            </div>
            <ul className="ms-nav-links">
              {['Services','Solutions','About','Insights'].map(l => <li key={l}><a href="#">{l}</a></li>)}
            </ul>
            <button className="ms-nav-btn">Free IT Audit</button>
          </header>

          {/* HERO */}
          <section className="ms-hero">
            <div>
              <div className="ms-hero-badge">
                <span className="ms-badge-dot"/>
                Managed IT Services
              </div>
              <h1>IT That <span>Never Sleeps.</span><br/>Partners That Never Leave.</h1>
              <p className="ms-hero-p">
                A fully outsourced technology partner that monitors, protects, and evolves your infrastructure 24/7 — so your team stays focused on what truly moves the business forward.
              </p>
              <div className="ms-hero-btns">
                <button className="ms-btn-primary">Request Free Audit</button>
                <button className="ms-btn-glass">View SLA Details {ic.arrow}</button>
              </div>
            </div>

            {/* Glass metrics panel */}
            <div className="ms-metrics-panel">
              <div className="ms-panel-label">Live Platform Status</div>
              {[
                { name:'Network Uptime (30d)',      val:'99.97%', color:'#10b981' },
                { name:'Avg. Response Time',        val:'11 min',  color:'#10b981' },
                { name:'Patch Compliance',          val:'98.4%',   color:'#34d399' },
                { name:'Active Endpoints',          val:'247',     color:'#34d399' },
                { name:'Open Critical Alerts',      val:'0',       color:'#6ee7b7' },
                { name:'Monthly SLA Score',         val:'100%',    color:'#10b981' },
              ].map((m, i) => (
                <div className="ms-metric-row" key={i}>
                  <div className="ms-metric-left">
                    <div className="ms-metric-dot" style={{ background: m.color, boxShadow: `0 0 6px ${m.color}` }}/>
                    <span className="ms-metric-name">{m.name}</span>
                  </div>
                  <span className="ms-metric-val">{m.val}</span>
                </div>
              ))}
            </div>
          </section>

          {/* SERVICES */}
          <section className="ms-svc-section">
            <div className="ms-svc-head">
              <div>
                <div className="ms-eyebrow">Core Services</div>
                <h2 className="ms-h2">Six Pillars of<br/><span>Managed Excellence</span></h2>
              </div>
              <p className="ms-body">Specialist service lines unified under one responsive account team — with transparent SLA reporting and a dedicated engineer on your account.</p>
            </div>
            <div className="ms-svc-grid">
              {services.map((s, i) => (
                <div className="ms-card" key={s.k}>
                  <div className="ms-card-top">
                    <div className="ms-card-icon">{ic[s.k]}</div>
                    <span className="ms-card-num">{String(i+1).padStart(2,'0')}</span>
                  </div>
                  <h3>{s.name}</h3>
                  <p>{s.desc}</p>
                  <div className="ms-card-cta">Learn more {ic.arrow}</div>
                </div>
              ))}
            </div>
          </section>

          {/* PROCESS */}
          <section className="ms-section ms-process-section">
            <div className="ms-process-head">
              <div className="ms-eyebrow">Our Methodology</div>
              <h2 className="ms-h2">From Discovery<br/>to <span>Always-On</span></h2>
              <p className="ms-body">A proven four-phase onboarding and service delivery model refined across hundreds of enterprise deployments.</p>
            </div>
            <div className="ms-steps-row">
              {steps.map((s, i) => (
                <div className="ms-step" key={i}>
                  <div className="ms-step-num">{s.n}</div>
                  <div className="ms-step-circle">{ic[s.icon]}</div>
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                  <span className="ms-step-tag">{s.tag}</span>
                </div>
              ))}
            </div>
          </section>

          {/* WHY US */}
          <section className="ms-section ms-why-section">
            <div className="ms-why-inner">
              {/* Left: stats */}
              <div>
                <div className="ms-eyebrow" style={{marginBottom:24}}>Why Partner With Us</div>
                <div className="ms-stat-stack">
                  <div className="ms-stat-card wide">
                    <div className="ms-stat-icon">{ic.clock}</div>
                    <div>
                      <div className="ms-stat-num">99.9%</div>
                      <div className="ms-stat-label">Uptime SLA across all managed environments and service tiers</div>
                      <div className="ms-stat-badge"><span className="ms-stat-badge-dot"/>SLA Guaranteed</div>
                    </div>
                  </div>
                  <div className="ms-mini-grid">
                    {[
                      { num:'<15m',  label:'Average P1 incident response time' },
                      { num:'100%',  label:'Automated patch compliance rate' },
                      { num:'24/7',  label:'NOC and helpdesk availability' },
                      { num:'500+',  label:'Managed endpoints under active care' },
                    ].map((m, i) => (
                      <div className="ms-mini-card" key={i}>
                        <div className="ms-mini-num">{m.num}</div>
                        <div className="ms-mini-label">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: content */}
              <div className="ms-why-r">
                <h2 className="ms-h2">The Numbers<br/><span>Prove Everything</span></h2>
                <p className="ms-body">
                  We are not a break-fix vendor — we are a long-term technology partner. Our model is built on proactive prevention, measurable outcomes, and radical transparency. Fixed monthly pricing means predictable IT spend with no hidden costs and no surprises. Our clients trust us not because we promise results — but because our numbers consistently prove it, month after month.
                </p>
                <div className="ms-feat-list">
                  {feats.map((f, i) => (
                    <div className="ms-feat-item" key={i}>
                      <div className="ms-feat-icon">{ic[f.k]}</div>
                      <div>
                        <h5>{f.title}</h5>
                        <p>{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="ms-cta-wrap">
            <div className="ms-cta">
              <div style={{position:'relative', zIndex:1}}>
                <h3>Ready to Hand Off Your IT?</h3>
                <p>Book a free infrastructure audit — no obligation, no sales pitch. Just total clarity.</p>
              </div>
              <div className="ms-cta-btns">
                <button className="ms-btn-primary">Book a Free Audit</button>
                <button className="ms-btn-glass">Talk to an Engineer {ic.arrow}</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
