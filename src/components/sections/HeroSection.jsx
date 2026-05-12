import React from 'react';
import { siteData } from '../../lib/data';

const heroBackgroundUrl = `${process.env.PUBLIC_URL}/images/New Hero.jpeg`;

export default function HeroSection() {
  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `url("${heroBackgroundUrl}")`,
        backgroundPosition: 'center bottom',
      }}
    >
      <div className="hero-noise" aria-hidden="true" />
      <div className="container hero-layout">
        <div className="hero-copy">
          <p className="eyebrow">{siteData?.hero?.badge ?? 'Est. 1994 · Ghana'}</p>
          <h1>{siteData?.hero?.headline ?? 'Roads That Connect Ghana'}</h1>
          <p className="lead">{siteData?.hero?.subheadline ?? ''}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">{siteData?.hero?.cta1?.label ?? 'View Projects'}</a>
            <a className="btn btn-secondary" href="#contact">{siteData?.hero?.cta2?.label ?? 'Request Quote'}</a>
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
  );
}
