import React from 'react';
import { siteData } from '../../lib/data';

const testimonials = siteData?.testimonials?.items ?? [];

export default function TestimonialsSection() {
  return (
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
  );
}
