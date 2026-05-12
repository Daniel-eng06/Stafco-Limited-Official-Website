import React from 'react';
import { siteData } from '../../lib/data';

const pillars = siteData?.whyUs?.pillars ?? [];
const staffImageUrl = `${process.env.PUBLIC_URL}/images/Staff.jpeg`;

export default function WhyUsSection() {
  return (
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
          <blockquote className="full-quote why-pull-quote">{siteData?.whyUs?.pullQuote ?? ''}</blockquote>
          <div className="why-staff-image">
            <img src={staffImageUrl} alt="Stafco staff" />
          </div>
        </div>
      </div>
    </section>
  );
}
