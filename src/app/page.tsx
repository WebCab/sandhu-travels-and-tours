import React from 'react';
import Link from 'next/link';
import { getFeaturedTours } from '@/data/tours';
import TourCard from '@/components/tours/TourCard';
import QuickFinderForm from '@/components/tours/QuickFinderForm';
import ScrollReveal from '@/components/ui/ScrollReveal';
import TourImageWithFallback from '@/components/ui/TourImageWithFallback';

export default function HomePage() {
  const featuredTours = getFeaturedTours();

  return (
    <>
      {/* Hero Section */}
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero__bg">
          <TourImageWithFallback
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1800&q=80"
            alt="Traveler overlooking dramatic canyon road and mountain peaks at golden hour"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center', filter: 'brightness(0.55) contrast(1.05)' }}
          />
        </div>
        <div className="hero__overlay"></div>

        <div className="container hero__content">
          <span className="hero__badge">
            <i className="fa-solid fa-award" aria-hidden="true"></i> 2026 World Sustainable Expedition Winner
          </span>
          <h1 id="hero-heading" className="hero__title">
            Journey Beyond the Map into <em>Living Landscapes</em>
          </h1>
          <p className="hero__lead">
            Intimate small-group expeditions limited to 12 guests. Led by local naturalists, historians, and mountaineers across Earth&apos;s most extraordinary frontiers.
          </p>
          <div className="hero__actions">
            <Link href="/tours" className="btn btn--primary btn--lg">
              Explore 2026–2027 Expeditions <i className="fa-solid fa-compass" aria-hidden="true"></i>
            </Link>
            <Link href="/contact" className="btn btn--outline-light btn--lg">
              Plan a Bespoke Journey
            </Link>
          </div>

          <div className="hero__trust" aria-label="Key company highlights">
            <div className="hero__trust-item">
              <strong>Max 12</strong>
              <span>Guests per expedition</span>
            </div>
            <div className="hero__trust-item">
              <strong>4.96 / 5</strong>
              <span>Verified traveler rating</span>
            </div>
            <div className="hero__trust-item">
              <strong>42+</strong>
              <span>Protected regions explored</span>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Quick Search Bar */}
      <QuickFinderForm />

      {/* Featured Destinations & Tour Packages Section */}
      <section className="section" aria-labelledby="featured-tours-heading">
        <div className="container">
          <div
            className="section-header"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              maxWidth: '100%',
              gap: '1rem',
            }}
          >
            <div>
              <span className="eyebrow">
                <i className="fa-solid fa-route" aria-hidden="true"></i> Signature Departures
              </span>
              <h2 id="featured-tours-heading" className="section-title">
                Featured 2026–2027 Expeditions
              </h2>
              <p className="section-subtitle">
                Handcrafted itineraries balancing iconic wonders with off-grid wilderness sanctuaries.
              </p>
            </div>
            <Link href="/tours" className="btn btn--outline">
              View All 9 Tours <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </Link>
          </div>

          <div className="tours-grid" id="home-featured-tours-grid" aria-live="polite">
            {featuredTours.map((tour) => (
              <ScrollReveal key={tour.id}>
                <TourCard tour={tour} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Travel With Us Section */}
      <section className="section section--alt" aria-labelledby="why-us-heading">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="eyebrow">
              <i className="fa-solid fa-feather-pointed" aria-hidden="true"></i> The Sandhu Standard
            </span>
            <h2 id="why-us-heading" className="section-title">
              Thoughtful Travel Without Compromise
            </h2>
            <p className="section-subtitle">
              Every route we design puts conservation, authentic cultural exchange, and effortless comfort first.
            </p>
          </div>

          <div className="features-grid">
            <ScrollReveal>
              <article className="feature-card">
                <div className="feature-card__icon" aria-hidden="true">
                  <i className="fa-solid fa-user-group"></i>
                </div>
                <h3>Intimate Groups of 8–12</h3>
                <p>
                  Never get lost in a crowd. Small groups unlock private vineyard dinners, quiet wildlife encounters, and boutique mountain refuges.
                </p>
              </article>
            </ScrollReveal>

            <ScrollReveal>
              <article className="feature-card">
                <div className="feature-card__icon" aria-hidden="true">
                  <i className="fa-solid fa-leaf"></i>
                </div>
                <h3>100% Net-Positive Impact</h3>
                <p>
                  Every departure funds regional rewilding initiatives and stays exclusively in locally owned eco-lodges and historic estancias.
                </p>
              </article>
            </ScrollReveal>

            <ScrollReveal>
              <article className="feature-card">
                <div className="feature-card__icon" aria-hidden="true">
                  <i className="fa-solid fa-person-hiking"></i>
                </div>
                <h3>Master Local Guides</h3>
                <p>
                  Walk alongside glaciologists in Patagonia, tea masters in Uji, and marine biologists across the Galápagos archipelago.
                </p>
              </article>
            </ScrollReveal>

            <ScrollReveal>
              <article className="feature-card">
                <div className="feature-card__icon" aria-hidden="true">
                  <i className="fa-solid fa-shield-heart"></i>
                </div>
                <h3>Flexible Peace of Mind</h3>
                <p>
                  Complimentary date transfers up to 45 days before departure, transparent all-inclusive pricing, and 24/7 satellite support.
                </p>
              </article>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Traveler Stories / Testimonials */}
      <section className="section section--dark" aria-labelledby="testimonials-heading">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="eyebrow">
              <i className="fa-solid fa-quote-left" aria-hidden="true"></i> Guest Chronicles
            </span>
            <h2 id="testimonials-heading" className="section-title">
              Words From Fellow Explorers
            </h2>
            <p className="section-subtitle">
              Over 94% of our travelers return for a second expedition within two years.
            </p>
          </div>

          <div className="testimonials-grid">
            <ScrollReveal>
              <article className="testimonial-card">
                <div>
                  <div className="testimonial-card__stars" aria-label="5 out of 5 stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <p className="testimonial-card__quote">
                    “Our 10 days on the Kyoto &amp; Kumano Kodo pilgrimage felt like stepping into another century. Our guide Kenji arranged private temple access at dawn that we will remember forever.”
                  </p>
                </div>
                <div className="testimonial-card__author">
                  <span className="testimonial-card__avatar" aria-hidden="true">
                    CM
                  </span>
                  <div>
                    <strong>Clara &amp; Marcus Lindqvist</strong>
                    <div style={{ fontSize: '0.75rem', opacity: 0.75 }}>
                      Kyoto &amp; Kumano Kodo Trail • Autumn 2025
                    </div>
                  </div>
                </div>
              </article>
            </ScrollReveal>

            <ScrollReveal>
              <article className="testimonial-card">
                <div>
                  <div className="testimonial-card__stars" aria-label="5 out of 5 stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <p className="testimonial-card__quote">
                    “From kayaking beside calving glaciers in Patagonia to dining at family-run estancias, Sandhu Travels and Tour handled every single logistics detail with warmth and precision.”
                  </p>
                </div>
                <div className="testimonial-card__author">
                  <span className="testimonial-card__avatar" aria-hidden="true">
                    DR
                  </span>
                  <div>
                    <strong>Dr. Devon Vance</strong>
                    <div style={{ fontSize: '0.75rem', opacity: 0.75 }}>
                      Patagonia Granite Peaks • January 2026
                    </div>
                  </div>
                </div>
              </article>
            </ScrollReveal>

            <ScrollReveal>
              <article className="testimonial-card">
                <div>
                  <div className="testimonial-card__stars" aria-label="5 out of 5 stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <p className="testimonial-card__quote">
                    “Watching the Aurora Borealis from a private sailboat in Lofoten with only nine other travelers was pure magic. Worth every penny.”
                  </p>
                </div>
                <div className="testimonial-card__author">
                  <span className="testimonial-card__avatar" aria-hidden="true">
                    AK
                  </span>
                  <div>
                    <strong>Amara K. Osei</strong>
                    <div style={{ fontSize: '0.75rem', opacity: 0.75 }}>
                      Lofoten Arctic Fjords • February 2026
                    </div>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="section" aria-labelledby="home-cta-heading">
        <div className="container">
          <div
            style={{
              background: 'linear-gradient(125deg, var(--color-primary), var(--color-primary-light))',
              borderRadius: 'var(--radius-xl)',
              padding: 'var(--space-3xl)',
              color: '#ffffff',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 'var(--space-xl)',
              boxShadow: 'var(--shadow-lg)',
            }}
          >
            <div style={{ maxWidth: '600px' }}>
              <span className="eyebrow" style={{ color: '#f6b397' }}>
                Ready When You Are
              </span>
              <h2 id="home-cta-heading" style={{ color: '#ffffff', fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-xs)' }}>
                Speak With a Regional Expedition Specialist
              </h2>
              <p style={{ color: 'rgba(250, 247, 242, 0.86)' }}>
                Whether you want to reserve a seat on a scheduled small-group departure or craft a private family adventure, our specialists are here to help.
              </p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-md)' }}>
              <Link href="/contact" className="btn btn--primary btn--lg">
                Start Booking Enquiry
              </Link>
              <Link href="/tours" className="btn btn--outline-light btn--lg">
                Browse All Tours
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
