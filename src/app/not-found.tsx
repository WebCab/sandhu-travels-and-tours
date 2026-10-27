import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
      <div className="container container--narrow" style={{ textAlign: 'center' }}>
        <span className="eyebrow">
          <i className="fa-solid fa-compass" aria-hidden="true"></i> Off the Map
        </span>
        <h1 style={{ fontSize: 'var(--text-5xl)', marginBlock: 'var(--space-xs) var(--space-md)' }}>
          404 — Expedition Route Not Found
        </h1>
        <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-xl)' }}>
          The trail you are looking for has shifted or does not exist. Let us guide you back to our curated destinations.
        </p>
        <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" className="btn btn--primary btn--lg">
            Return Home
          </Link>
          <Link href="/tours" className="btn btn--outline btn--lg">
            Browse All Expeditions
          </Link>
        </div>
      </div>
    </section>
  );
}
