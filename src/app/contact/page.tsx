import React from 'react';
import type { Metadata } from 'next';
import { getAllTours } from '@/data/tours';
import ContactBookingForm from '@/components/forms/ContactBookingForm';

export const metadata: Metadata = {
  title: 'Contact & Bespoke Booking Enquiry | Sandhu Travels and Tour',
  description:
    'Connect with a regional specialist to check live availability, customize an itinerary, or request a detailed trip dossier.',
};

export default function ContactPage() {
  const allTours = getAllTours();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">
            <i className="fa-regular fa-paper-plane" aria-hidden="true"></i> Personal Trip Planning
          </span>
          <h1>Begin Your Expedition Conversation</h1>
          <p>
            Connect with a regional specialist to check live availability, customize an itinerary, or request a detailed trip dossier.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-layout">
            {/* Left Column: Direct Regional Offices & Contact Info */}
            <div>
              <span className="eyebrow">Global Dispatch Desks</span>
              <h2 style={{ fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-sm)' }}>
                Talk to Someone Who Has Walked the Trail
              </h2>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-xl)' }}>
                We don’t employ call-center scripts. When you reach out, you’ll be paired directly with the specialist who scouts and manages your chosen region.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                <div className="feature-card" style={{ padding: 'var(--space-lg)' }}>
                  <h3 style={{ fontSize: 'var(--text-lg)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <i className="fa-solid fa-location-dot" style={{ color: 'var(--color-accent)' }} aria-hidden="true"></i>
                    Geneva Headquarters (Europe &amp; Polar)
                  </h3>
                  <p style={{ marginTop: '0.35rem' }}>Rue du Rhône 42, 1204 Genève, Switzerland</p>
                  <p style={{ marginTop: '0.25rem', fontWeight: 600, color: 'var(--color-primary)' }}>
                    +41 22 819 44 00 • europe@sandhutravels.com
                  </p>
                </div>

                <div className="feature-card" style={{ padding: 'var(--space-lg)' }}>
                  <h3 style={{ fontSize: 'var(--text-lg)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <i className="fa-solid fa-location-dot" style={{ color: 'var(--color-accent)' }} aria-hidden="true"></i>
                    Kyoto Atelier (Asia &amp; Pacific)
                  </h3>
                  <p style={{ marginTop: '0.35rem' }}>Nakagyo Ward, Yanaginobanba Dori, Kyoto 604-8101</p>
                  <p style={{ marginTop: '0.25rem', fontWeight: 600, color: 'var(--color-primary)' }}>
                    +81 75 221 9080 • asia@sandhutravels.com
                  </p>
                </div>

                <div className="feature-card" style={{ padding: 'var(--space-lg)' }}>
                  <h3 style={{ fontSize: 'var(--text-lg)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <i className="fa-solid fa-location-dot" style={{ color: 'var(--color-accent)' }} aria-hidden="true"></i>
                    Cusco Field House (Americas &amp; Antarctica)
                  </h3>
                  <p style={{ marginTop: '0.35rem' }}>Calle Palacio 135, Centro Histórico, Cusco, Peru</p>
                  <p style={{ marginTop: '0.25rem', fontWeight: 600, color: 'var(--color-primary)' }}>
                    +51 84 234 910 • andes@sandhutravels.com
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Client-Side Validated Booking & Contact Form */}
            <ContactBookingForm tours={allTours} />
          </div>
        </div>
      </section>
    </>
  );
}
