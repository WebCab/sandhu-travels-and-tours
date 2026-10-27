'use client';

import React, { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Tour } from '@/types/tour';
import { formatCurrency } from '@/data/tours';

interface ContactBookingFormProps {
  tours: Tour[];
}

function ContactBookingFormContent({ tours }: ContactBookingFormProps) {
  const searchParams = useSearchParams();
  const formRef = useRef<HTMLFormElement>(null);

  const initialTourParam = searchParams.get('tour') || '';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedTour, setSelectedTour] = useState(initialTourParam);
  const [travelers, setTravelers] = useState(2);
  const [date, setDate] = useState('2026-11');
  const [message, setMessage] = useState('');
  const [newsletter, setNewsletter] = useState(false);

  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
  const [successData, setSuccessData] = useState<{
    reference: string;
    name: string;
    email: string;
    tour: string;
    travelers: number;
    date: string;
  } | null>(null);

  // Sync if query param updates
  useEffect(() => {
    const tourParam = searchParams.get('tour');
    if (tourParam) {
      setSelectedTour(tourParam);
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneTrimmed = phone.trim();
    const phoneValid = !phoneTrimmed || /^[+0-9()\-\s]{7,20}$/.test(phoneTrimmed);

    const newErrors: { [key: string]: boolean } = {
      name: name.trim().length < 2,
      email: !emailRegex.test(email.trim()),
      phone: !phoneValid,
      tour: !selectedTour.trim(),
      travelers: travelers < 1 || travelers > 24,
      date: !date.trim(),
      message: message.trim().length < 15,
    };

    setErrors(newErrors);

    const hasError = Object.values(newErrors).some(Boolean);
    if (hasError) {
      // Focus first invalid input
      const firstInvalidKey = Object.keys(newErrors).find((k) => newErrors[k]);
      if (firstInvalidKey && formRef.current) {
        const input = formRef.current.querySelector<HTMLElement>(`[name="${firstInvalidKey}"]`);
        if (input) input.focus();
      }
      return;
    }

    const refCode = 'ST-ENQ-' + Math.floor(10000 + Math.random() * 90000);
    setSuccessData({
      reference: refCode,
      name: name.trim(),
      email: email.trim(),
      tour: selectedTour,
      travelers,
      date,
    });

    // Reset form fields
    setName('');
    setEmail('');
    setPhone('');
    setSelectedTour('');
    setTravelers(2);
    setDate('2026-11');
    setMessage('');
    setNewsletter(false);
    setErrors({});
  };

  return (
    <div className="form-card">
      <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: '0.35rem' }}>
        Expedition Enquiry &amp; Booking Form
      </h2>
      <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-lg)' }}>
        Fields marked with an asterisk (<span style={{ color: 'var(--color-error)' }}>*</span>) are required. We respond to all enquiries within 1 business day.
      </p>

      <form ref={formRef} id="main-contact-form" onSubmit={handleSubmit} noValidate>
        <div className="form-grid">
          <div className="form-group">
            <label className="form-label" htmlFor="contact-name">
              Full Name <span>*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="contact-name"
              name="name"
              placeholder="e.g., Julian Vance"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (errors.name) setErrors((prev) => ({ ...prev, name: false }));
              }}
              aria-invalid={errors.name}
              required
            />
            {errors.name && (
              <div className="form-error is-visible" id="error-contact-name" role="alert">
                Please enter your full name (at least 2 characters).
              </div>
            )}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="contact-email">
              Email Address <span>*</span>
            </label>
            <input
              type="email"
              className="form-control"
              id="contact-email"
              name="email"
              placeholder="julian@domain.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) setErrors((prev) => ({ ...prev, email: false }));
              }}
              aria-invalid={errors.email}
              required
            />
            {errors.email && (
              <div className="form-error is-visible" id="error-contact-email" role="alert">
                Please enter a valid email address.
              </div>
            )}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="contact-phone">
              Phone / WhatsApp Number
            </label>
            <input
              type="tel"
              className="form-control"
              id="contact-phone"
              name="phone"
              placeholder="+1 (555) 234-5678"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                if (errors.phone) setErrors((prev) => ({ ...prev, phone: false }));
              }}
              aria-invalid={errors.phone}
            />
            {errors.phone && (
              <div className="form-error is-visible" id="error-contact-phone" role="alert">
                Please enter a valid phone number (7–20 digits).
              </div>
            )}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="contact-tour">
              Expedition of Interest <span>*</span>
            </label>
            <select
              className="form-control"
              id="contact-tour"
              name="tour"
              value={selectedTour}
              onChange={(e) => {
                setSelectedTour(e.target.value);
                if (errors.tour) setErrors((prev) => ({ ...prev, tour: false }));
              }}
              aria-invalid={errors.tour}
              required
            >
              <option value="">— Select an Expedition or Service —</option>
              <option value="Custom Bespoke Itinerary">Design a Custom Private Journey</option>
              {tours.map((t) => (
                <option key={t.id} value={t.title}>
                  {t.title} ({t.durationLabel} — {formatCurrency(t.price)})
                </option>
              ))}
            </select>
            {errors.tour && (
              <div className="form-error is-visible" id="error-contact-tour" role="alert">
                Please choose an expedition or service.
              </div>
            )}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="contact-travelers">
              Number of Travelers <span>*</span>
            </label>
            <input
              type="number"
              className="form-control"
              id="contact-travelers"
              name="travelers"
              min="1"
              max="24"
              value={travelers}
              onChange={(e) => {
                setTravelers(Number(e.target.value));
                if (errors.travelers) setErrors((prev) => ({ ...prev, travelers: false }));
              }}
              aria-invalid={errors.travelers}
              required
            />
            {errors.travelers && (
              <div className="form-error is-visible" id="error-contact-travelers" role="alert">
                Please enter between 1 and 24 travelers.
              </div>
            )}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="contact-date">
              Preferred Travel Month / Date <span>*</span>
            </label>
            <input
              type="month"
              className="form-control"
              id="contact-date"
              name="date"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
                if (errors.date) setErrors((prev) => ({ ...prev, date: false }));
              }}
              aria-invalid={errors.date}
              required
            />
            {errors.date && (
              <div className="form-error is-visible" id="error-contact-date" role="alert">
                Please select a preferred travel month.
              </div>
            )}
          </div>

          <div className="form-group form-group--full">
            <label className="form-label" htmlFor="contact-message">
              Tell Us About Your Travel Goals &amp; Questions <span>*</span>
            </label>
            <textarea
              className="form-control"
              id="contact-message"
              name="message"
              rows={4}
              placeholder="Share your preferred pace, celebration occasion, dietary preferences, or questions for our guide team..."
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                if (errors.message) setErrors((prev) => ({ ...prev, message: false }));
              }}
              aria-invalid={errors.message}
              required
            ></textarea>
            {errors.message && (
              <div className="form-error is-visible" id="error-contact-message" role="alert">
                Please share a brief message (at least 15 characters).
              </div>
            )}
          </div>

          <div className="form-group form-group--full">
            <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', cursor: 'pointer' }}>
              <input
                type="checkbox"
                id="contact-newsletter"
                checked={newsletter}
                onChange={(e) => setNewsletter(e.target.checked)}
                style={{ marginTop: '3px', accentColor: 'var(--color-accent)' }}
              />
              <span>Send me seasonal expedition dispatches and early access to 2027 small-group departures (optional).</span>
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn--primary btn--lg btn--full">
          <i className="fa-solid fa-paper-plane" aria-hidden="true"></i> Submit Expedition Enquiry
        </button>
      </form>

      {/* Accessible Confirmation Message Container */}
      {successData && (
        <div className="form-success-box is-visible" id="contact-form-success" role="status" aria-live="polite">
          <h3 style={{ fontSize: 'var(--text-xl)', color: 'var(--color-success)', marginBottom: '0.4rem' }}>
            <i className="fa-solid fa-circle-check" aria-hidden="true"></i> Expedition Enquiry Received ({successData.reference})
          </h3>
          <p style={{ fontSize: 'var(--text-sm)', marginBottom: '0.5rem' }}>
            Warm thanks, <strong>{successData.name}</strong>! Your enquiry for <strong>{successData.tour}</strong> ({successData.travelers} traveler{successData.travelers > 1 ? 's' : ''}, preferred departure: {successData.date}) has been routed to our Regional Expedition Director.
          </p>
          <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>
            A copy of your dossier and availability confirmation has been dispatched to <strong>{successData.email}</strong>.
          </p>
        </div>
      )}
    </div>
  );
}

export default function ContactBookingForm({ tours }: ContactBookingFormProps) {
  return (
    <Suspense fallback={<div>Loading enquiry form...</div>}>
      <ContactBookingFormContent tours={tours} />
    </Suspense>
  );
}
