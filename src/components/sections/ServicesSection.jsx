import React from 'react';
import { siteData } from '../../lib/data';

const services = siteData?.services?.items ?? [];

export default function ServicesSection() {
  return (
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
  );
}
