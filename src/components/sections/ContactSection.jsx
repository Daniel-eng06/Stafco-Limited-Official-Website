import React from 'react';
import { siteData } from '../../lib/data';

const EMPTY_ARRAY = [];

export default function ContactSection() {
  return (
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

        <form
          className="panel soft contact-form"
          onSubmit={(event) => {
            event.preventDefault();
            const data = new FormData(event.target);
            const name = data.get('name') ?? '';
            const email = data.get('email') ?? '';
            const service = data.get('service') ?? '';
            const message = data.get('message') ?? '';
            const today = new Date().toLocaleDateString('en-GB', {
              day: 'numeric', month: 'long', year: 'numeric',
            });
            const subject = encodeURIComponent(`Service Enquiry: ${service} — ${name}`);
            const body = encodeURIComponent(
`Dear Stafco Limited,

I am writing to formally request a quotation for the following service:

  Service Required : ${service}

──────────────────────────────────────
CONTACT DETAILS
──────────────────────────────────────
  Full Name  : ${name}
  Email      : ${email}
  Date       : ${today}

──────────────────────────────────────
PROJECT DETAILS / MESSAGE
──────────────────────────────────────
${message}

──────────────────────────────────────

Please feel free to contact me at the email address above to discuss this further or to arrange a site visit.

Thank you for your time and I look forward to hearing from you.

Kind regards,
${name}`
            );
            window.location.href = `mailto:stafcoltd@yahoo.com?subject=${subject}&body=${body}`;
          }}
        >
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
  );
}
