import React from 'react';
import type { Metadata } from 'next';
import { getAllTours } from '@/data/tours';
import ToursDirectoryClient from '@/components/tours/ToursDirectoryClient';

export const metadata: Metadata = {
  title: 'Destinations & Small-Group Tours | Sandhu Travels and Tour',
  description:
    'Filter our curated expeditions by travel style, region, duration, or maximum budget to discover your next unforgettable journey.',
};

export default function ToursPage() {
  const allTours = getAllTours();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">
            <i className="fa-solid fa-map-location-dot" aria-hidden="true"></i> 2026–2027 Collection
          </span>
          <h1>Destinations &amp; Small-Group Tours</h1>
          <p>
            Filter our curated expeditions by travel style, region, duration, or maximum budget to discover your next unforgettable journey.
          </p>
        </div>
      </section>

      <ToursDirectoryClient allTours={allTours} />
    </>
  );
}
