import React from 'react';
import { siteData } from '../../lib/data';

const { company } = siteData;

const quickLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

const handleNav = (e, href) => {
  e.preventDefault();
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function Footer() {
  return (
    <footer style={{ background: '#1a0e07', color: '#E8D5B0' }}>
      {/* Top CTA band */}
      <div style={{ background: '#C4501A', padding: '2.5rem 1.5rem', textAlign: 'center' }}>
        <p style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(1.2rem, 3vw, 1.7rem)',
          fontStyle: 'italic', color: '#fff', marginBottom: '1.25rem' }}>
          Ready to build? Let's talk.
        </p>
        <a
          href="#contact"
          onClick={(e) => handleNav(e, '#contact')}
          style={{
            display: 'inline-block',
            background: 'transparent',
            color: '#fff',
            fontFamily: '"Lato", sans-serif',
            fontSize: '0.78rem',
            fontWeight: 700,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            padding: '0.75rem 2rem',
            border: '2px solid rgba(255,255,255,0.8)',
            textDecoration: 'none',
            transition: 'background 0.25s',
          }}
          onMouseEnter={(e) => (e.target.style.background = 'rgba(255,255,255,0.15)')}
          onMouseLeave={(e) => (e.target.style.background = 'transparent')}
        >
          Request a Quote
        </a>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <img
            src="/images/logo.png"
            alt="Stafco Limited"
            style={{ height: '52px', objectFit: 'contain', marginBottom: '1rem', filter: 'brightness(1.8)' }}
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <p style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.1rem', fontWeight: 600,
            color: '#F5ECD7', marginBottom: '0.5rem' }}>
            Stafco Limited
          </p>
          <p style={{ fontSize: '0.82rem', color: '#9B7B5C', lineHeight: 1.6, maxWidth: '260px' }}>
            Building Ghana's roads, infrastructure, and future — since 2004.
          </p>
          {/* Social */}
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
            <SocialLink href={company.facebook} label="Facebook">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </SocialLink>
            <SocialLink href={company.linkedin} label="LinkedIn">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </SocialLink>
            <SocialLink href={company.whatsapp} label="WhatsApp">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
            </SocialLink>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <p style={{ fontFamily: '"Lato", sans-serif', fontSize: '0.68rem', fontWeight: 700,
            letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8860B', marginBottom: '1.25rem' }}>
            Quick Links
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {quickLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={(e) => handleNav(e, l.href)}
                  style={{ fontSize: '0.88rem', color: '#9B7B5C', textDecoration: 'none',
                    transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.target.style.color = '#F5ECD7')}
                  onMouseLeave={(e) => (e.target.style.color = '#9B7B5C')}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p style={{ fontFamily: '"Lato", sans-serif', fontSize: '0.68rem', fontWeight: 700,
            letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8860B', marginBottom: '1.25rem' }}>
            Contact Us
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
            <ContactLine icon="📞" text={company.phone} />
            <ContactLine icon="✉" text={company.email} />
            <ContactLine icon="📍" text={company.address} />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(184,134,11,0.2)', padding: '1.25rem 1.5rem' }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <p style={{ fontSize: '0.78rem', color: '#6B4C2A' }}>
            © {new Date().getFullYear()} Stafco Limited. All rights reserved.
          </p>
          <p style={{ fontSize: '0.75rem', color: '#6B4C2A', letterSpacing: '0.08em' }}>
            Built with pride · Accra, Ghana
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        width: '38px', height: '38px',
        border: '1px solid rgba(184,134,11,0.4)',
        color: '#9B7B5C',
        transition: 'border-color 0.2s, color 0.2s',
        borderRadius: '2px',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = '#B8860B';
        e.currentTarget.style.color = '#B8860B';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(184,134,11,0.4)';
        e.currentTarget.style.color = '#9B7B5C';
      }}
    >
      {children}
    </a>
  );
}

function ContactLine({ icon, text }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
      <span style={{ fontSize: '0.85rem', marginTop: '0.1rem', opacity: 0.7 }}>{icon}</span>
      <span style={{ fontSize: '0.85rem', color: '#9B7B5C', lineHeight: 1.5 }}>{text}</span>
    </div>
  );
}
