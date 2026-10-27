'use client';

import React, { useState } from 'react';
import { ItineraryDay } from '@/types/tour';

interface ItineraryAccordionProps {
  itinerary: ItineraryDay[];
}

export default function ItineraryAccordion({ itinerary }: ItineraryAccordionProps) {
  // Day 0 is expanded by default
  const [expandedIndices, setExpandedIndices] = useState<Set<number>>(new Set([0]));

  const toggleDay = (index: number) => {
    setExpandedIndices((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const allExpanded = expandedIndices.size === itinerary.length;

  const toggleAll = () => {
    if (allExpanded) {
      setExpandedIndices(new Set());
    } else {
      setExpandedIndices(new Set(itinerary.map((_, i) => i)));
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-md)' }}>
        <h2 style={{ fontSize: 'var(--text-2xl)' }}>Day-by-Day Itinerary</h2>
        <button
          type="button"
          className="btn btn--outline btn--sm"
          id="toggle-all-itinerary-btn"
          onClick={toggleAll}
        >
          {allExpanded ? 'Collapse All Days' : 'Expand All Days'}
        </button>
      </div>

      <div className="itinerary-list" id="detail-itinerary-accordion">
        {itinerary.map((step, idx) => {
          const isExpanded = expandedIndices.has(idx);
          return (
            <div key={idx} className="itinerary-item">
              <button
                type="button"
                className="itinerary-trigger"
                aria-expanded={isExpanded}
                onClick={() => toggleDay(idx)}
              >
                <span>
                  <span className="itinerary-day-badge">{step.day}</span>
                  {step.title}
                </span>
                <i
                  className={`fa-solid ${isExpanded ? 'fa-chevron-up' : 'fa-chevron-down'}`}
                  aria-hidden="true"
                ></i>
              </button>
              {isExpanded && (
                <div className="itinerary-content">
                  <p>{step.details}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
