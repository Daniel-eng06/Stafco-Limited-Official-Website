import React, { useEffect, useRef } from 'react';
import { siteData } from '../../lib/data';

const { hero, stats } = siteData;

export default function Hero() {
  const headlineRef = useRef(null);

  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    const t = setTimeout(() => {
      el.style.transition = 'opacity 1.1s ease, transform 1.1s ease';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 200);
    return () => clearTimeout(t);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="top" className="hero-bg grain-overlay">
      {/* Background image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url("/images/hero-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          backgroundAttachment: 'fixed',
          filter: 'sepia(30%) brightness(0.55) contrast(1.1)',
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 'clamp(6rem, 12vw, 9rem) 1.5rem 4rem',
        }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <div ref={headlineRef} style={{ maxWidth: '680px' }}>
            {/* Badge */}
            <div style={{ marginBottom: '2rem' }}>
              <span className="vintage-stamp">{hero.badge}</span>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: 'clamp(2.4rem, 6vw, 4.5rem)',
                fontWeight: 700,
                color: '#F5ECD7',
                lineHeight: 1.12,
                marginBottom: '1.5rem',
                whiteSpace: 'pre-line',
              }}
            >
              {hero.headline}
            </h1>

            {/* Gold rule */}
            <div style={{ width: '60px', height: '2px', background: '#B8860B', marginBottom: '1.5rem' }} />

            {/* Sub */}
            <p
              style={{
                fontFamily: '"Lato", sans-serif',
                fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                color: 'rgba(245,236,215,0.85)',
                lineHeight: 1.75,
                marginBottom: '2.5rem',
                maxWidth: '540px',
              }}
            >
              {hero.subheadline}
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <a
                href={hero.cta1.href}
                onClick={(e) => handleNav(e, hero.cta1.href)}
                className="btn-outline"
              >
                {hero.cta1.label}
              </a>
              <a
                href={hero.cta2.href}
                onClick={(e) => handleNav(e, hero.cta2.href)}
                className="btn-primary"
              >
                {hero.cta2.label}
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
          zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem',
          animation: 'bounce 2s infinite' }}>
          <div style={{ width: '1px', height: '48px', background: 'rgba(245,236,215,0.4)' }} />
          <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
            <path d="M1 1l6 6 6-6" stroke="rgba(245,236,215,0.5)" strokeWidth="1.5"/>
          </svg>
        </div>
      </div>

      {/* Stat bar */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          background: 'rgba(44,26,14,0.88)',
          borderTop: '1px solid rgba(184,134,11,0.3)',
        }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={i}
              style={{
                padding: '1.5rem 1rem',
                textAlign: 'center',
                borderRight: i < stats.length - 1 ? '1px solid rgba(184,134,11,0.2)' : 'none',
              }}
            >
              <p style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: 700, color: '#B8860B', lineHeight: 1 }}>
                {s.value}
              </p>
              <p style={{ fontFamily: '"Lato", sans-serif', fontSize: '0.68rem', fontWeight: 700,
                letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(245,236,215,0.6)',
                marginTop: '0.35rem' }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
      `}</style>
    </section>
  );
}
