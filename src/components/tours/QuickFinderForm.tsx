'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function QuickFinderForm() {
  const router = useRouter();
  const [category, setCategory] = useState('all');
  const [region, setRegion] = useState('all');
  const [maxPrice, setMaxPrice] = useState('7000');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (category !== 'all') params.set('category', category);
    if (region !== 'all') params.set('region', region);
    if (maxPrice && Number(maxPrice) <= 6500) {
      params.set('maxPrice', maxPrice);
    }
    const query = params.toString();
    router.push(`/tours${query ? `?${query}` : ''}`);
  };

  return (
    <div className="container quick-finder-wrap">
      <form className="quick-finder" id="home-quick-finder" onSubmit={handleSubmit} aria-label="Quick Expedition Finder">
        <div className="finder-field">
          <label htmlFor="quick-category">Travel Style</label>
          <select
            id="quick-category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">All Expedition Styles</option>
            <option value="Alpine & Trekking">Alpine &amp; Trekking</option>
            <option value="Cultural & Heritage">Cultural &amp; Heritage</option>
            <option value="Coastal & Islands">Coastal &amp; Islands</option>
            <option value="Wildlife & Safari">Wildlife &amp; Safari</option>
            <option value="Polar & Northern Lights">Polar &amp; Northern Lights</option>
          </select>
        </div>

        <div className="finder-field">
          <label htmlFor="quick-region">Destination Region</label>
          <select
            id="quick-region"
            name="region"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
          >
            <option value="all">All Global Regions</option>
            <option value="Europe">Europe &amp; Nordic</option>
            <option value="Asia">Asia &amp; Himalayas</option>
            <option value="South America">South America</option>
            <option value="Africa">Africa &amp; Indian Ocean</option>
          </select>
        </div>

        <div className="finder-field">
          <label htmlFor="quick-budget">Maximum Budget</label>
          <select
            id="quick-budget"
            name="maxPrice"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          >
            <option value="7000">Up to $7,000 / person</option>
            <option value="3000">Under $3,000 / person</option>
            <option value="4500">Under $4,500 / person</option>
            <option value="5500">Under $5,500 / person</option>
          </select>
        </div>

        <button type="submit" className="btn btn--primary btn--lg btn--full">
          <i className="fa-solid fa-magnifying-glass" aria-hidden="true"></i> Find Matching Tours
        </button>
      </form>
    </div>
  );
}
