import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllTours, getTourById } from '@/data/tours';
import ItineraryAccordion from '@/components/tours/ItineraryAccordion';
import BookingHoldSidebar from '@/components/tours/BookingHoldSidebar';
import TourImageWithFallback from '@/components/ui/TourImageWithFallback';

interface TourDetailPageProps {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  const tours = getAllTours();
  return tours.map((tour) => ({
    id: tour.id,
  }));
}

export function generateMetadata({ params }: TourDetailPageProps): Metadata {
  const tour = getTourById(params.id);
  if (!tour) {
    return {
      title: 'Tour Not Found | Sandhu Travels and Tour',
    };
  }

  return {
    title: `${tour.title} | Sandhu Travels and Tour`,
    description: tour.shortDesc,
    openGraph: {
      title: `${tour.title} | Sandhu Travels and Tour`,
      description: tour.shortDesc,
      images: [
        {
          url: tour.image,
          alt: tour.imageAlt,
        },
      ],
    },
  };
}

export default function TourDetailPage({ params }: TourDetailPageProps) {
  const tour = getTourById(params.id);
  if (!tour) {
    notFound();
  }

  const allTours = getAllTours();

  return (
    <>
      {/* Quick Switcher Bar */}
      <div className="tour-switcher-bar" aria-label="Switch active tour itinerary">
        <div className="container tour-switcher-bar__inner">
          <span className="tour-switcher-label">
            <i className="fa-solid fa-binoculars" aria-hidden="true"></i> Select Expedition:
          </span>
          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'nowrap' }}>
            {allTours.map((t) => (
              <Link
                key={t.id}
                href={`/tours/${t.id}`}
                className={`tour-Detail-pill ${t.id === tour.id ? 'is-active' : ''}`}
              >
                {t.location}: {t.title.split('&')[0].trim()}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 'var(--space-xl)' }}>
        <div className="container">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            style={{
              marginBottom: 'var(--space-md)',
              fontSize: 'var(--text-xs)',
              color: 'var(--color-text-muted)',
            }}
          >
            <Link href="/" style={{ textDecoration: 'underline' }}>
              Home
            </Link>
            <span aria-hidden="true"> / </span>
            <Link href="/tours" style={{ textDecoration: 'underline' }}>
              Destinations &amp; Tours
            </Link>
            <span aria-hidden="true"> / </span>
            <strong style={{ color: 'var(--color-primary)' }}>{tour.title}</strong>
          </nav>

          <div className="detail-layout">
            {/* Left Column: Tour Details */}
            <div>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 'var(--space-xs)',
                  alignItems: 'center',
                  marginBottom: 'var(--space-xs)',
                }}
              >
                <span className="badge badge--accent">{tour.category}</span>
                <span className="badge">
                  <i className="fa-solid fa-location-dot" aria-hidden="true"></i>{' '}
                  {tour.location}, {tour.region}
                </span>
                <span className="badge">
                  <i className="fa-solid fa-star" style={{ color: 'var(--color-gold)' }} aria-hidden="true"></i>{' '}
                  {tour.rating} ({tour.reviews} Verified Reviews)
                </span>
              </div>

              <h1 style={{ fontSize: 'var(--text-4xl)', marginBottom: 'var(--space-sm)' }}>
                {tour.title}
              </h1>
              <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-lg)' }}>
                {tour.shortDesc}
              </p>

              {/* Gallery Image */}
              <div className="detail-gallery">
                <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9' }}>
                  <TourImageWithFallback
                    src={tour.image}
                    alt={tour.imageAlt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 760px"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>

              {/* Key Expedition Metrics */}
              <div className="detail-stats-bar">
                <div className="detail-stat-item">
                  <i className="fa-regular fa-calendar" aria-hidden="true"></i>
                  <div>
                    <small>Duration</small>
                    <strong>{tour.durationLabel}</strong>
                  </div>
                </div>
                <div className="detail-stat-item">
                  <i className="fa-solid fa-user-group" aria-hidden="true"></i>
                  <div>
                    <small>Group Size</small>
                    <strong>Max {tour.maxGroup} Guests</strong>
                  </div>
                </div>
                <div className="detail-stat-item">
                  <i className="fa-solid fa-mountain" aria-hidden="true"></i>
                  <div>
                    <small>Activity Level</small>
                    <strong>{tour.difficulty}</strong>
                  </div>
                </div>
                <div className="detail-stat-item">
                  <i className="fa-solid fa-plane-departure" aria-hidden="true"></i>
                  <div>
                    <small>Next Departure</small>
                    <strong>{tour.nextDeparture}</strong>
                  </div>
                </div>
              </div>

              {/* Expedition Overview */}
              <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-sm)' }}>
                Expedition Overview
              </h2>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-xl)' }}>
                {tour.longDesc}
              </p>

              {/* Highlights List */}
              <h3 style={{ fontSize: 'var(--text-xl)', marginBottom: 'var(--space-sm)' }}>
                Signature Highlights
              </h3>
              <ul
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                  gap: 'var(--space-sm)',
                  marginBottom: 'var(--space-2xl)',
                }}
              >
                {tour.highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    style={{
                      background: 'var(--color-surface)',
                      padding: '0.85rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--color-border)',
                      fontSize: 'var(--text-sm)',
                      display: 'flex',
                      gap: '0.6rem',
                      alignItems: 'flex-start',
                    }}
                  >
                    <i
                      className="fa-solid fa-compass"
                      style={{ color: 'var(--color-accent)', marginTop: '4px' }}
                      aria-hidden="true"
                    ></i>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Expandable Day-by-Day Itinerary */}
              <ItineraryAccordion itinerary={tour.itinerary} />

              {/* Included / Excluded */}
              <h2 style={{ fontSize: 'var(--text-2xl)', marginBlock: 'var(--space-xl) var(--space-sm)' }}>
                What’s Included &amp; Excluded
              </h2>
              <div className="inclusions-grid">
                <div className="inclusion-box">
                  <h3 style={{ fontSize: 'var(--text-base)', color: 'var(--color-success)', marginBottom: 'var(--space-sm)' }}>
                    <i className="fa-solid fa-circle-check" aria-hidden="true"></i> Included in Your Fare
                  </h3>
                  <ul>
                    <li>
                      <i className="fa-solid fa-check" style={{ color: 'var(--color-success)', marginTop: '4px' }}></i>
                      <span>All boutique hotel, eco-lodge &amp; ryokan accommodations</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-check" style={{ color: 'var(--color-success)', marginTop: '4px' }}></i>
                      <span>Daily gourmet breakfasts, 7 regional lunches, and 8 celebration dinners</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-check" style={{ color: 'var(--color-success)', marginTop: '4px' }}></i>
                      <span>Dedicated Sandhu Travels Expedition Leader &amp; local scholars</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-check" style={{ color: 'var(--color-success)', marginTop: '4px' }}></i>
                      <span>All domestic transport, luggage porterage &amp; national park permits</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-check" style={{ color: 'var(--color-success)', marginTop: '4px' }}></i>
                      <span>100% net carbon offset &amp; community conservation levy</span>
                    </li>
                  </ul>
                </div>

                <div className="inclusion-box">
                  <h3 style={{ fontSize: 'var(--text-base)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-sm)' }}>
                    <i className="fa-solid fa-circle-xmark" aria-hidden="true"></i> Not Included
                  </h3>
                  <ul>
                    <li>
                      <i className="fa-solid fa-xmark" style={{ color: 'var(--color-text-light)', marginTop: '4px' }}></i>
                      <span>International flights to/from rendezvous city</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-xmark" style={{ color: 'var(--color-text-light)', marginTop: '4px' }}></i>
                      <span>Comprehensive personal travel &amp; medical evacuation insurance</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-xmark" style={{ color: 'var(--color-text-light)', marginTop: '4px' }}></i>
                      <span>Alcoholic beverages outside included wine tastings &amp; welcome banquets</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-xmark" style={{ color: 'var(--color-text-light)', marginTop: '4px' }}></i>
                      <span>Discretionary gratuities for local mountain guides &amp; drivers</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column: Sticky Booking Hold Sidebar */}
            <BookingHoldSidebar tour={tour} />
          </div>
        </div>
      </section>
    </>
  );
}
