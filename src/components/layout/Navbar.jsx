import React, { useState, useEffect } from 'react';
import { siteData } from '../../lib/data';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#top" onClick={(e) => handleNav(e, '#top')} className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt="Stafco Limited Logo"
            style={{ height: '48px', objectFit: 'contain' }}
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <span
            style={{
              fontFamily: '"Playfair Display", serif',
              fontWeight: 700,
              fontSize: '1.15rem',
              color: scrolled ? '#F5ECD7' : '#F5ECD7',
              letterSpacing: '0.04em',
              lineHeight: 1.2,
            }}
          >
            Stafco<br />
            <span style={{ fontWeight: 300, fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              Limited
            </span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              style={{
                fontFamily: '"Lato", sans-serif',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: scrolled ? '#E8D5B0' : 'rgba(245,236,215,0.9)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#C4501A')}
              onMouseLeave={(e) => (e.target.style.color = scrolled ? '#E8D5B0' : 'rgba(245,236,215,0.9)')}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNav(e, '#contact')}
            className="btn-primary"
            style={{ padding: '0.6rem 1.4rem', fontSize: '0.72rem' }}
          >
            Request a Quote
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span style={{ display:'block', width:'22px', height:'2px', background:'#F5ECD7', transition:'all 0.25s',
            transform: menuOpen ? 'rotate(45deg) translate(3px, 4px)' : 'none' }} />
          <span style={{ display:'block', width:'22px', height:'2px', background:'#F5ECD7', transition:'all 0.25s',
            opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display:'block', width:'22px', height:'2px', background:'#F5ECD7', transition:'all 0.25s',
            transform: menuOpen ? 'rotate(-45deg) translate(3px, -4px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ background: '#2C1A0E', borderTop: '1px solid rgba(184,134,11,0.3)' }}>
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                style={{
                  fontFamily: '"Lato", sans-serif',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#E8D5B0',
                  textDecoration: 'none',
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNav(e, '#contact')}
              className="btn-primary"
              style={{ textAlign: 'center', marginTop: '0.5rem' }}
            >
              Request a Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
