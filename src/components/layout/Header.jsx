import React, { useEffect, useState } from 'react';
import { siteData } from '../../lib/data';

const companyLogoUrl = `${process.env.PUBLIC_URL}/images/Original%20stafco%20limited%20logo.PNG`;
const companySlogan = siteData?.company?.slogan ?? 'Your reliable partner down the road';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToTop = (event) => {
    event.preventDefault();
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`} id="top">
      <div className="container nav-row">
        <a className="brand" href="#top" aria-label="Stafco home" onClick={scrollToTop}>
          <img className="brand-logo" src={companyLogoUrl} alt="Stafco logo" />
          <span className="brand-text-wrap">
            <span className="brand-name">{siteData?.company?.name ?? 'Stafco Limited'}</span>
            <span className="brand-slogan">{companySlogan}</span>
          </span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          Menu
        </button>
        <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
          <a className="nav-cta" href="#contact" onClick={() => setIsMenuOpen(false)}>Request Quote</a>
        </nav>
      </div>
    </header>
  );
}
