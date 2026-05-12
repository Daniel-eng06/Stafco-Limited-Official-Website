import React from 'react';
import { siteData } from '../../lib/data';

export default function AboutSection() {
  return (
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
  );
}
