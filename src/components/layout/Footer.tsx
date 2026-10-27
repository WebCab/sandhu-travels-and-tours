import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <Link
              href="/"
              className="brand-logo"
              style={{ color: '#ffffff', marginBottom: 'var(--space-sm)' }}
            >
              <span className="brand-logo__icon" style={{ background: 'var(--color-accent)' }}>
                <i className="fa-solid fa-compass" aria-hidden="true"></i>
              </span>
              <span>
                Sandhu <small className="brand-logo__sub" style={{ color: '#f6b397' }}>Travels &amp; Tour</small>
              </span>
            </Link>
            <p style={{ fontSize: 'var(--text-sm)', marginBottom: 'var(--space-md)', maxWidth: '340px' }}>
              Crafting carbon-neutral small-group expeditions and bespoke private journeys across six continents since 2014.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-sm)' }}>
              <Link
                href="/contact"
                className="badge"
                style={{ background: 'rgba(255,255,255,0.1)', color: '#ffffff' }}
              >
                <i className="fa-solid fa-certificate" style={{ color: 'var(--color-gold)' }}></i> ATOL &amp; Swiss Travel Guarantee
              </Link>
            </div>
          </div>

          <div className="footer-col">
            <h4>Site Navigation</h4>
            <ul className="footer-links">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/tours">Destinations &amp; Tours</Link>
              </li>
              <li>
                <Link href="/tours/kyoto-kumano">Sample Itinerary</Link>
              </li>
              <li>
                <Link href="/about">About Our Ethos</Link>
              </li>
              <li>
                <Link href="/contact">Contact &amp; Booking</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Expedition Styles</h4>
            <ul className="footer-links">
              <li>
                <Link href="/tours?category=Alpine+%26+Trekking">Alpine &amp; Trekking</Link>
              </li>
              <li>
                <Link href="/tours?category=Cultural+%26+Heritage">Cultural &amp; Heritage</Link>
              </li>
              <li>
                <Link href="/tours?category=Coastal+%26+Islands">Coastal &amp; Islands</Link>
              </li>
              <li>
                <Link href="/tours?category=Wildlife+%26+Safari">Wildlife &amp; Safari</Link>
              </li>
              <li>
                <Link href="/tours?category=Polar+%26+Northern+Lights">Polar &amp; Northern Lights</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Direct Contact</h4>
            <ul className="footer-links">
              <li>
                <i className="fa-solid fa-location-dot" style={{ color: 'var(--color-accent)', width: '18px' }}></i>
                {' '}Rue du Rhône 42, 1204 Geneva
              </li>
              <li>
                <i className="fa-solid fa-phone" style={{ color: 'var(--color-accent)', width: '18px' }}></i>
                {' '}+41 22 819 44 00
              </li>
              <li>
                <i className="fa-solid fa-envelope" style={{ color: 'var(--color-accent)', width: '18px' }}></i>
                {' '}concierge@sandhutravels.com
              </li>
              <li style={{ marginTop: 'var(--space-sm)' }}>
                <span className="badge" style={{ background: 'rgba(212, 101, 59, 0.2)', color: '#ffbfa8' }}>
                  <i className="fa-solid fa-shield-heart" aria-hidden="true"></i> 100% Net-Positive Impact
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Sandhu Travels and Tour. All rights reserved. Built with Next.js App Router &amp; TypeScript.</p>
          <p>Curated small-group expeditions across Earth&apos;s most extraordinary frontiers.</p>
        </div>
      </div>
    </footer>
  );
}
