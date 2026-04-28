import React, { useEffect, useMemo, useState } from 'react';
import { siteData } from './lib/data';
import './index.css';

const EMPTY_ARRAY = [];

function App() {
  const [filter, setFilter] = useState('All');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const projects = siteData?.projects?.items ?? EMPTY_ARRAY;
  const services = siteData?.services?.items ?? EMPTY_ARRAY;
  const pillars = siteData?.whyUs?.pillars ?? EMPTY_ARRAY;
  const testimonials = siteData?.testimonials?.items ?? EMPTY_ARRAY;
  const filters = siteData?.projects?.filters ?? ['All'];

  const filteredProjects = useMemo(() => {
    if (filter === 'All') {
      return projects;
    }

    return projects.filter((item) => Array.isArray(item.category) && item.category.includes(filter));
  }, [filter, projects]);

  const currentYear = new Date().getFullYear();
  const heroBackgroundUrl = `${process.env.PUBLIC_URL}/images/Heroimage.jpeg`;
  const companyLogoUrl = `${process.env.PUBLIC_URL}/images/Original%20stafco%20limited%20logo.PNG`;
  const companySlogan = siteData?.company?.slogan ?? 'Your reliable partner down the road';

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="page-shell">
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`} id="top">
        <div className="container nav-row">
          <a className="brand" href="#top" aria-label="Stafco home">
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

      <main>
        <section
          className="hero-section"
          style={{
            backgroundImage:
              `linear-gradient(102deg, rgba(250, 244, 230, 0.95) 0%, rgba(250, 244, 230, 0.88) 36%, rgba(250, 244, 230, 0.62) 54%, rgba(250, 244, 230, 0.26) 72%, rgba(250, 244, 230, 0.06) 100%), url("${heroBackgroundUrl}")`,
          }}
        >
          <div className="hero-noise" aria-hidden="true" />
          <div className="container hero-layout">
            <div className="hero-copy">
              <p className="eyebrow">{siteData?.hero?.badge ?? 'Est. 2006 - Accra, Ghana'}</p>
              <h1>{siteData?.hero?.headline ?? 'Roads That Connect Ghana'}</h1>
              <p className="lead">{siteData?.hero?.subheadline ?? ''}</p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#projects">{siteData?.hero?.cta1?.label ?? 'View Projects'}</a>
                <a className="btn btn-secondary" href="#contact">{siteData?.hero?.cta2?.label ?? 'Request a Quote'}</a>
              </div>
            </div>
          </div>
          <div className="container stats-grid">
              {(siteData?.stats ?? []).map((item) => (
                <article className="stat-card" key={`${item.label}-${item.value}`}>
                  <h3>{item.value}</h3>
                  <p>{item.label}</p>
                </article>
              ))}
          </div>
        </section>

        <section className="section about-section container" id="about">
          <p className="eyebrow">{siteData?.about?.sectionLabel ?? 'Our Story'}</p>
          <h2>{siteData?.about?.headline ?? 'Built on Reliability'}</h2>
          <div className="split-grid">
            <div className="panel soft story-panel">
              {(siteData?.about?.body ?? []).map((paragraph, index) => (
                <p key={`about-${index}`}>{paragraph}</p>
              ))}
              <blockquote>{siteData?.about?.quote ?? ''}</blockquote>
            </div>
            <div className="panel timeline-panel">
              <ul className="timeline timeline-road">
                {(siteData?.about?.timeline ?? []).map((step) => (
                  <li className="timeline-item" key={`${step.year}-${step.text}`}>
                    <span className="timeline-year">{step.year}</span>
                    <p className="timeline-text">{step.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section section-alt services-section" id="services">
          <div className="container">
            <p className="eyebrow">{siteData?.services?.sectionLabel ?? 'Services'}</p>
            <h2>{siteData?.services?.headline ?? 'Infrastructure Services'}</h2>
            <p className="section-text">{siteData?.services?.subheadline ?? ''}</p>
            <div className="cards-grid">
              {services.map((service, index) => (
                <article className="info-card service-card" key={service.title}>
                  <p className="card-index">{String(index + 1).padStart(2, '0')}</p>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section projects-section container" id="projects">
          <p className="eyebrow">{siteData?.projects?.sectionLabel ?? 'Projects'}</p>
          <h2>{siteData?.projects?.headline ?? 'Recent Work'}</h2>
          <p className="section-text">{siteData?.projects?.subheadline ?? ''}</p>
          <div className="filters" role="tablist" aria-label="Project filters">
            {filters.map((value) => (
              <button
                key={value}
                className={`filter-chip ${filter === value ? 'active' : ''}`}
                type="button"
                onClick={() => setFilter(value)}
              >
                {value}
              </button>
            ))}
          </div>
          <div className="cards-grid">
            {filteredProjects.map((project) => (
              <article className="info-card project-card" key={`${project.title}-${project.year}`}>
                <div className="project-top" aria-hidden="true" />
                <p className="tag">{project.tag ?? 'Project'}</p>
                <h3>{project.title}</h3>
                <p>{project.location} - {project.year}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-alt why-section">
          <div className="container">
            <p className="eyebrow">{siteData?.whyUs?.sectionLabel ?? 'Why Us'}</p>
            <h2>{siteData?.whyUs?.headline ?? 'Trusted Contractor'}</h2>
            <p className="section-text">{siteData?.whyUs?.subheadline ?? ''}</p>
            <div className="cards-grid">
              {pillars.map((pillar) => (
                <article className="info-card pillar-card" key={pillar.title}>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.desc}</p>
                </article>
              ))}
            </div>
            <blockquote className="full-quote">{siteData?.whyUs?.pullQuote ?? ''}</blockquote>
          </div>
        </section>

        <section className="section testimonials-section container">
          <p className="eyebrow">{siteData?.testimonials?.sectionLabel ?? 'Testimonials'}</p>
          <h2>{siteData?.testimonials?.headline ?? 'Client Feedback'}</h2>
          <div className="cards-grid">
            {testimonials.map((item) => (
              <article className="info-card testimonial-card" key={`${item.name}-${item.company}`}>
                <p className="quote-mark">"</p>
                <p>{item.quote}</p>
                <h3>{item.name}</h3>
                <p className="testimonial-meta">{item.title} - {item.company}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-alt contact-section" id="contact">
          <div className="container split-grid contact-layout">
            <div className="panel contact-details">
              <p className="eyebrow">{siteData?.contact?.sectionLabel ?? 'Contact'}</p>
              <h2>{siteData?.contact?.headline ?? 'Lets Build Together'}</h2>
              <p className="section-text">{siteData?.contact?.subheadline ?? ''}</p>
              <ul className="contact-list">
                {(siteData?.contact?.info ?? []).map((entry) => (
                  <li key={`${entry.label}-${entry.value}`}>
                    <strong>{entry.label}:</strong> {entry.value}
                  </li>
                ))}
              </ul>
              <div className="hours-list">
                {(siteData?.contact?.hours ?? EMPTY_ARRAY).map((slot) => (
                  <p key={`${slot.days}-${slot.time}`}>
                    <strong>{slot.days}:</strong> {slot.time}
                  </p>
                ))}
              </div>
            </div>

            <form className="panel soft contact-form" onSubmit={(event) => event.preventDefault()}>
              <label>
                Name
                <input type="text" name="name" required />
              </label>
              <label>
                Email
                <input type="email" name="email" required />
              </label>
              <label>
                Service
                <select name="service" defaultValue="">
                  <option value="" disabled>Select a service</option>
                  {(siteData?.contact?.serviceOptions ?? []).map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </label>
              <label>
                Message
                <textarea name="message" rows="4" required />
              </label>
              <button className="btn btn-primary" type="submit">Send Request</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-row">
          <div className="footer-brand">
            <img className="footer-logo" src={companyLogoUrl} alt="Stafco logo" />
            <div>
              <p className="footer-company-name">{siteData?.company?.name ?? 'Stafco Limited'}</p>
              <p className="footer-slogan">{companySlogan}</p>
            </div>
          </div>
          <p>{currentYear} All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
