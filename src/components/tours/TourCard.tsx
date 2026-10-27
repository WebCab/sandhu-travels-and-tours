import React from 'react';
import Link from 'next/link';
import { Tour } from '@/types/tour';
import { formatCurrency } from '@/data/tours';
import TourImageWithFallback from '@/components/ui/TourImageWithFallback';

interface TourCardProps {
  tour: Tour;
}

export default function TourCard({ tour }: TourCardProps) {
  return (
    <article className="tour-card" data-tour-id={tour.id}>
      <div className="tour-card__media">
        <TourImageWithFallback
          src={tour.image}
          alt={tour.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
        />
        <div className="tour-card__badges">
          <span className="tour-card__category">{tour.category}</span>
          <span className="tour-card__rating" aria-label={`Rated ${tour.rating} out of 5`}>
            <i className="fa-solid fa-star" aria-hidden="true"></i> {tour.rating}
          </span>
        </div>
      </div>

      <div className="tour-card__body">
        <div className="tour-card__meta">
          <span>
            <i className="fa-solid fa-location-dot" aria-hidden="true"></i> {tour.location}
          </span>
          <span>
            <i className="fa-regular fa-clock" aria-hidden="true"></i> {tour.durationLabel}
          </span>
          <span>
            <i className="fa-solid fa-user-group" aria-hidden="true"></i> Max {tour.maxGroup}
          </span>
        </div>

        <h3 className="tour-card__title">
          <Link href={`/tours/${tour.id}`}>{tour.title}</Link>
        </h3>

        <p className="tour-card__desc">{tour.shortDesc}</p>

        <div className="tour-card__footer">
          <div>
            <span className="tour-card__price-label">All-Inclusive From</span>
            <div className="tour-card__price">
              {formatCurrency(tour.price)} <small>/ guest</small>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '0.4rem' }}>
            <Link
              href={`/contact?tour=${encodeURIComponent(tour.title)}`}
              className="btn btn--outline btn--sm"
              aria-label={`Enquire about ${tour.title}`}
            >
              Enquire
            </Link>
            <Link
              href={`/tours/${tour.id}`}
              className="btn btn--primary btn--sm"
            >
              Itinerary <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
