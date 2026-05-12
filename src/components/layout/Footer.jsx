import React from 'react';
import { siteData } from '../../lib/data';

const companyLogoUrl = `${process.env.PUBLIC_URL}/images/Original%20stafco%20limited%20logo.PNG`;
const companySlogan = siteData?.company?.slogan ?? 'Your reliable partner down the road';
const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-row">
        <div className="footer-brand">
          <img className="footer-logo" src={companyLogoUrl} alt="Stafco logo" />
          <div className="footer-text-wrap">
            <p className="footer-company-name">{siteData?.company?.name ?? 'Stafco Limited'}</p>
            <p className="footer-slogan">{companySlogan}</p>
          </div>
        </div>
        <p>&copy; {currentYear} Stafco Limited. All rights reserved.</p>
      </div>
    </footer>
  );
}
