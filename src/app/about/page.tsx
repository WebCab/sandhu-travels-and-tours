import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import TourImageWithFallback from '@/components/ui/TourImageWithFallback';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata: Metadata = {
  title: 'About Our Story & Ethos | Sandhu Travels and Tour',
  description:
    'Pioneering low-impact, high-wonder travel since 2014. Discover our conservation commitments, leadership team, and certified B-Corp ethos.',
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">
            <i className="fa-solid fa-seedling" aria-hidden="true"></i> Founded in 2014
          </span>
          <h1>Pioneering Low-Impact, High-Wonder Travel</h1>
          <p>
            We believe travel should enrich the places we visit as deeply as it transforms the people who journey through them.
          </p>
        </div>
      </section>

      {/* Origin Story Section */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'var(--space-3xl)',
              alignItems: 'center',
            }}
          >
            <div>
              <span className="eyebrow">Our Origin Story</span>
              <h2 className="section-title">Born on a Trail in the Cordillera Huayhuash</h2>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-md)' }}>
                Sandhu Travels and Tour began when two field conservationists and an architectural historian realized that mainstream tourism was rushing travelers past the most meaningful stories on Earth.
              </p>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-lg)' }}>
                Instead of 40-seat coaches and chain hotels, we partnered directly with indigenous land trusts, family-owned alpine refuges, and working research vessels. Every itinerary is scouted on foot by our regional directors to ensure your travel dollars stay in local hands.
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
                <Link href="/tours" className="btn btn--primary">
                  Explore Our Expeditions
                </Link>
                <Link href="/contact" className="btn btn--outline">
                  Meet Our Specialists
                </Link>
              </div>
            </div>

            <div style={{ position: 'relative', width: '100%', height: '420px', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
              <TourImageWithFallback
                src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=1000&q=80"
                alt="Small group of hikers walking across a scenic mountain ridge"
                fill
                sizes="(max-width: 768px) 100vw, 550px"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics Section */}
      <section className="section section--alt" aria-label="Sustainability and Impact Metrics">
        <div className="container">
          <div className="stats-grid">
            <ScrollReveal>
              <div className="stat-card">
                <div className="stat-card__number">12</div>
                <strong>Max Group Size</strong>
                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>
                  Average of 9 guests per departure
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="stat-card">
                <div className="stat-card__number">91%</div>
                <strong>Local Economic Retention</strong>
                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>
                  Paid directly to regional partners
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="stat-card">
                <div className="stat-card__number">18,500+</div>
                <strong>Native Trees Restored</strong>
                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>
                  Through our Andean &amp; Nordic trusts
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="stat-card">
                <div className="stat-card__number">100%</div>
                <strong>B-Corp Certified Ethos</strong>
                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>
                  Audited annual impact reports
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Expedition Leadership Team */}
      <section className="section" aria-labelledby="team-heading">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="eyebrow">Field Leadership</span>
            <h2 id="team-heading" className="section-title">
              Meet Our Expedition Directors
            </h2>
            <p className="section-subtitle">
              Scholars, mountaineers, and storytellers who call our destinations home.
            </p>
          </div>

          <div className="team-grid">
            <ScrollReveal>
              <article className="team-card">
                <div style={{ position: 'relative', width: '100%', aspectRatio: '4 / 3' }}>
                  <TourImageWithFallback
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80"
                    alt="Portrait of Sofia Valdivia, Co-Founder and Andes Director"
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="team-card__body">
                  <span className="badge badge--accent" style={{ marginBottom: '0.4rem' }}>
                    Co-Founder &amp; Andes Director
                  </span>
                  <h3 style={{ fontSize: 'var(--text-xl)' }}>Sofía Valdivia</h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', marginTop: '0.35rem' }}>
                    Former high-altitude botanist born in Cusco. Sofía has designed conservation trails across Peru, Bolivia, and Chilean Patagonia for 15 years.
                  </p>
                </div>
              </article>
            </ScrollReveal>

            <ScrollReveal>
              <article className="team-card">
                <div style={{ position: 'relative', width: '100%', aspectRatio: '4 / 3' }}>
                  <TourImageWithFallback
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80"
                    alt="Portrait of Henrik Solberg, Head of Nordic & Polar Expeditions"
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="team-card__body">
                  <span className="badge badge--accent" style={{ marginBottom: '0.4rem' }}>
                    Nordic &amp; Polar Director
                  </span>
                  <h3 style={{ fontSize: 'var(--text-xl)' }}>Henrik Solberg</h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', marginTop: '0.35rem' }}>
                    Licensed Arctic Yacht Master and sea-kayak guide based in Tromsø, leading our Svalbard, Lofoten, and Greenlandic coastal voyages.
                  </p>
                </div>
              </article>
            </ScrollReveal>

            <ScrollReveal>
              <article className="team-card">
                <div style={{ position: 'relative', width: '100%', aspectRatio: '4 / 3' }}>
                  <TourImageWithFallback
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80"
                    alt="Portrait of Mei-Ling Takahashi, East Asia Cultural Curator"
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="team-card__body">
                  <span className="badge badge--accent" style={{ marginBottom: '0.4rem' }}>
                    Asia Cultural Curator
                  </span>
                  <h3 style={{ fontSize: 'var(--text-xl)' }}>Mei-Ling Takahashi</h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', marginTop: '0.35rem' }}>
                    Architectural historian specializing in sacred pilgrimage routes, traditional wooden joinery, and culinary heritage across Japan and Bhutan.
                  </p>
                </div>
              </article>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
