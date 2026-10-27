'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Tour } from '@/types/tour';
import { formatCurrency } from '@/data/tours';

interface BookingHoldSidebarProps {
  tour: Tour;
}

export default function BookingHoldSidebar({ tour }: BookingHoldSidebarProps) {
  const [guests, setGuests] = useState<number>(2);
  const [departureDate, setDepartureDate] = useState<string>(tour.nextDeparture);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);

  const [confirmation, setConfirmation] = useState<{
    reference: string;
    name: string;
    email: string;
    guests: number;
    date: string;
  } | null>(null);

  const handleGuestChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value, 10);
    if (!isNaN(val)) {
      setGuests(Math.max(1, Math.min(12, val)));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const isNameValid = name.trim().length >= 2;
    const isEmailValid = emailRegex.test(email.trim());

    setNameError(!isNameValid);
    setEmailError(!isEmailValid);

    if (!isNameValid || !isEmailValid) return;

    const refCode = 'ST-' + Math.floor(100000 + Math.random() * 900000);
    setConfirmation({
      reference: refCode,
      name: name.trim(),
      email: email.trim(),
      guests,
      date: departureDate,
    });

    // Reset inputs
    setName('');
    setEmail('');
  };

  const estimatedTotal = guests * tour.price;

  return (
    <aside className="booking-sidebar">
      <div className="booking-sidebar__price-box">
        <div>
          <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text-muted)' }}>
            All-Inclusive From
          </span>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--color-primary)' }}>
            {formatCurrency(tour.price)}
          </div>
          <small style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-xs)' }}>per guest • twin share</small>
        </div>
        <span className="badge badge--accent">
          <i className="fa-solid fa-fire" aria-hidden="true"></i> Selling Fast
        </span>
      </div>

      <form id="detail-booking-form" onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label className="form-label" htmlFor="detail-departure-select">
            Selected Departure Date
          </label>
          <select
            className="form-control"
            id="detail-departure-select"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
          >
            <option value={tour.nextDeparture}>{tour.nextDeparture} (Guaranteed Departure)</option>
            <option value="Apr 10, 2027">Apr 10, 2027 (Spring Expedition)</option>
            <option value="Sep 18, 2027">Sep 18, 2027 (Autumn Expedition)</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="detail-guests-input">
            Number of Travelers: <strong>{guests}</strong>
          </label>
          <input
            type="range"
            className="form-control"
            id="detail-guests-input"
            min="1"
            max="12"
            value={guests}
            onChange={handleGuestChange}
            style={{ accentColor: 'var(--color-accent)', padding: 0 }}
          />
        </div>

        {/* Live Estimated Total */}
        <div style={{ background: 'var(--color-surface-alt)', padding: '0.85rem 1rem', borderRadius: 'var(--radius-md)', marginBottom: 'var(--space-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--color-text-muted)' }}>
            Estimated Total ({guests} {guests > 1 ? 'guests' : 'guest'}):
          </span>
          <strong style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', color: 'var(--color-primary)' }}>
            {formatCurrency(estimatedTotal)}
          </strong>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="detail-name-input">
            Full Name <span>*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="detail-name-input"
            placeholder="e.g., Eleanor Vance"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (nameError) setNameError(false);
            }}
            aria-invalid={nameError}
            required
          />
          {nameError && (
            <div className="form-error is-visible" id="detail-name-error" role="alert">
              Please enter your full name (at least 2 characters).
            </div>
          )}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="detail-email-input">
            Email Address <span>*</span>
          </label>
          <input
            type="email"
            className="form-control"
            id="detail-email-input"
            placeholder="eleanor@domain.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (emailError) setEmailError(false);
            }}
            aria-invalid={emailError}
            required
          />
          {emailError && (
            <div className="form-error is-visible" id="detail-email-error" role="alert">
              Please enter a valid email address.
            </div>
          )}
        </div>

        <button type="submit" className="btn btn--primary btn--full btn--lg" style={{ marginBottom: 'var(--space-md)' }}>
          <i className="fa-solid fa-lock" aria-hidden="true"></i> Place 72-Hour Space Hold
        </button>

        <p style={{ fontSize: '0.75rem', color: 'var(--color-text-light)', textAlign: 'center', marginBottom: 'var(--space-md)' }}>
          <i className="fa-solid fa-shield-halved" aria-hidden="true"></i> No payment required today. Holds expire automatically after 72 hours.
        </p>
      </form>

      {/* Confirmation message */}
      {confirmation && (
        <div className="form-success-box is-visible" id="detail-booking-success" role="status" aria-live="polite">
          <h4 style={{ color: 'var(--color-success)', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', marginBottom: '0.35rem' }}>
            <i className="fa-solid fa-circle-check" aria-hidden="true"></i> 72-Hour Space Hold Confirmed!
          </h4>
          <p style={{ fontSize: 'var(--text-xs)', marginBottom: '0.35rem' }}>
            Thank you, <strong>{confirmation.name}</strong>. We have placed a complimentary hold for <strong>{confirmation.guests} guest{confirmation.guests > 1 ? 's' : ''}</strong> on <em>{tour.title}</em> ({confirmation.date}).
          </p>
          <p style={{ fontSize: 'var(--text-xs)', fontWeight: 700 }}>
            Hold Reference: {confirmation.reference} • Dispatched to {confirmation.email}
          </p>
        </div>
      )}

      {/* Bespoke link */}
      <div style={{ marginTop: 'var(--space-md)', paddingTop: 'var(--space-md)', borderTop: '1px solid var(--color-border)', textAlign: 'center' }}>
        <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>
          Need a private departure or custom dates?
        </p>
        <Link
          href={`/contact?tour=${encodeURIComponent(tour.title)}`}
          style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--color-accent)', textDecoration: 'underline' }}
        >
          Request Custom Expedition Dossier &rarr;
        </Link>
      </div>
    </aside>
  );
}
