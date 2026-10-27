'use client';

import React, { useState, useEffect, useMemo, Suspense } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { Tour } from '@/types/tour';
import { formatCurrency } from '@/data/tours';
import TourCard from '@/components/tours/TourCard';
import ScrollReveal from '@/components/ui/ScrollReveal';

const CATEGORIES = [
  'all',
  'Alpine & Trekking',
  'Cultural & Heritage',
  'Coastal & Islands',
  'Wildlife & Safari',
  'Polar & Northern Lights',
] as const;

interface ToursDirectoryClientProps {
  allTours: Tour[];
}

function ToursDirectoryContent({ allTours }: ToursDirectoryClientProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // Read initial values from URL query parameters
  const initialCategory = searchParams.get('category') || 'all';
  const initialRegion = searchParams.get('region') || 'all';
  const initialMaxPrice = Number(searchParams.get('maxPrice')) || 6500;
  const initialSearch = searchParams.get('search') || '';
  const initialSort = searchParams.get('sort') || 'featured';

  const [category, setCategory] = useState<string>(initialCategory);
  const [region, setRegion] = useState<string>(initialRegion);
  const [maxPrice, setMaxPrice] = useState<number>(initialMaxPrice);
  const [search, setSearch] = useState<string>(initialSearch);
  const [sort, setSort] = useState<string>(initialSort);

  // Sync state if query params change externally (e.g., navigating from footer)
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat !== null) setCategory(cat);

    const reg = searchParams.get('region');
    if (reg !== null) setRegion(reg);

    const price = searchParams.get('maxPrice');
    if (price !== null) setMaxPrice(Number(price));

    const s = searchParams.get('search');
    if (s !== null) setSearch(s);

    const srt = searchParams.get('sort');
    if (srt !== null) setSort(srt);
  }, [searchParams]);

  // Update URL search parameters when filters change
  const updateUrlParams = (
    newCat: string,
    newReg: string,
    newPrice: number,
    newSearch: string,
    newSort: string
  ) => {
    const params = new URLSearchParams();
    if (newCat !== 'all') params.set('category', newCat);
    if (newReg !== 'all') params.set('region', newReg);
    if (newPrice < 6500) params.set('maxPrice', String(newPrice));
    if (newSearch.trim()) params.set('search', newSearch.trim());
    if (newSort !== 'featured') params.set('sort', newSort);

    const qs = params.toString();
    router.replace(`${pathname}${qs ? `?${qs}` : ''}`, { scroll: false });
  };

  const handleCategoryChange = (cat: string) => {
    setCategory(cat);
    updateUrlParams(cat, region, maxPrice, search, sort);
  };

  const handleRegionChange = (reg: string) => {
    setRegion(reg);
    updateUrlParams(category, reg, maxPrice, search, sort);
  };

  const handlePriceChange = (price: number) => {
    setMaxPrice(price);
    updateUrlParams(category, region, price, search, sort);
  };

  const handleSearchChange = (query: string) => {
    setSearch(query);
    updateUrlParams(category, region, maxPrice, query, sort);
  };

  const handleSortChange = (newSort: string) => {
    setSort(newSort);
    updateUrlParams(category, region, maxPrice, search, newSort);
  };

  const handleReset = () => {
    setCategory('all');
    setRegion('all');
    setMaxPrice(6500);
    setSearch('');
    setSort('featured');
    router.replace(pathname, { scroll: false });
  };

  // Filter and sort the tours
  const filteredTours = useMemo(() => {
    const searchLower = search.trim().toLowerCase();

    const result = allTours.filter((tour) => {
      const matchCategory = category === 'all' || tour.category === category;
      const matchRegion = region === 'all' || tour.region === region;
      const matchPrice = tour.price <= maxPrice;
      const matchSearch =
        !searchLower ||
        tour.title.toLowerCase().includes(searchLower) ||
        tour.location.toLowerCase().includes(searchLower) ||
        tour.shortDesc.toLowerCase().includes(searchLower) ||
        tour.category.toLowerCase().includes(searchLower);

      return matchCategory && matchRegion && matchPrice && matchSearch;
    });

    result.sort((a, b) => {
      switch (sort) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'duration-asc':
          return a.durationDays - b.durationDays;
        case 'rating-desc':
          return b.rating - a.rating;
        case 'featured':
        default:
          return Number(b.featured) - Number(a.featured);
      }
    });

    return result;
  }, [allTours, category, region, maxPrice, search, sort]);

  return (
    <section className="section" aria-label="Tour Directory and Filters">
      <div className="container">
        {/* Interactive Filter Panel */}
        <div className="filter-panel">
          {/* Category Pills */}
          <div
            className="filter-pills"
            role="group"
            aria-label="Filter tours by category"
            id="category-pills-container"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`filter-pill ${category === cat ? 'is-active' : ''}`}
                onClick={() => handleCategoryChange(cat)}
              >
                {cat === 'all' ? 'All Categories' : cat}
              </button>
            ))}
          </div>

          {/* Detailed Filter Controls */}
          <div className="filter-controls-grid">
            <div className="filter-group">
              <label htmlFor="tour-search-input">Search Destination or Keyword</label>
              <input
                type="search"
                id="tour-search-input"
                placeholder="e.g., Patagonia, Japan, Fjords, Safari..."
                value={search}
                onChange={(e) => handleSearchChange(e.target.value)}
                autoComplete="off"
              />
            </div>

            <div className="filter-group">
              <label htmlFor="tour-region-select">Region</label>
              <select
                id="tour-region-select"
                value={region}
                onChange={(e) => handleRegionChange(e.target.value)}
              >
                <option value="all">All Regions</option>
                <option value="Europe">Europe &amp; Nordic</option>
                <option value="Asia">Asia &amp; Himalayas</option>
                <option value="South America">South America</option>
                <option value="Africa">Africa &amp; Indian Ocean</option>
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="tour-price-range">
                <span>Max Price</span>
                <strong id="price-range-output" style={{ color: 'var(--color-accent)' }}>
                  {formatCurrency(maxPrice)}
                </strong>
              </label>
              <input
                type="range"
                id="tour-price-range"
                min="2000"
                max="6500"
                step="100"
                value={maxPrice}
                onChange={(e) => handlePriceChange(Number(e.target.value))}
              />
            </div>

            <div className="filter-group">
              <label htmlFor="tour-sort-select">Sort By</label>
              <select
                id="tour-sort-select"
                value={sort}
                onChange={(e) => handleSortChange(e.target.value)}
              >
                <option value="featured">Featured First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="duration-asc">Duration: Short to Long</option>
                <option value="rating-desc">Highest Rated</option>
              </select>
            </div>

            <div>
              <button
                type="button"
                className="btn btn--outline btn--sm"
                id="reset-filters-btn"
                style={{ height: '42px' }}
                onClick={handleReset}
              >
                <i className="fa-solid fa-rotate-left" aria-hidden="true"></i> Reset
              </button>
            </div>
          </div>
        </div>

        {/* Results Counter Bar */}
        <div className="filter-summary-bar">
          <div id="tours-results-count" role="status" aria-live="polite">
            Showing <strong>{filteredTours.length}</strong> of <strong>{allTours.length}</strong> curated expeditions
          </div>
          <div>
            <span>All prices include boutique accommodations, expert guides &amp; domestic transfers.</span>
          </div>
        </div>

        {/* Tour Cards Grid or Empty State */}
        {filteredTours.length === 0 ? (
          <div className="empty-state">
            <i
              className="fa-solid fa-compass-drafting"
              style={{ fontSize: '2.5rem', color: 'var(--color-accent)', marginBottom: '0.75rem', display: 'inline-block' }}
            ></i>
            <h3 style={{ fontSize: 'var(--text-2xl)', marginBottom: '0.4rem' }}>
              No Matching Expeditions Found
            </h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>
              Try increasing your maximum price range or clearing your search filters to see more departures.
            </p>
            <button
              type="button"
              className="btn btn--primary"
              id="empty-reset-btn"
              onClick={handleReset}
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="tours-grid" id="tours-directory-grid" aria-live="polite">
            {filteredTours.map((tour) => (
              <ScrollReveal key={tour.id}>
                <TourCard tour={tour} />
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default function ToursDirectoryClient({ allTours }: ToursDirectoryClientProps) {
  return (
    <Suspense fallback={<div className="container" style={{ padding: '3rem 0', textAlign: 'center' }}>Loading expeditions...</div>}>
      <ToursDirectoryContent allTours={allTours} />
    </Suspense>
  );
}
