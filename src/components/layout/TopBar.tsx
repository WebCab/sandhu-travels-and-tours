import React from 'react';

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="container top-bar__inner">
        <div className="top-bar__info">
          <span>
            <i className="fa-solid fa-phone" aria-hidden="true"></i> +41 22 819 44 00 (24/7 Expedition Desk)
          </span>
          <span>
            <i className="fa-solid fa-earth-americas" aria-hidden="true"></i> 100% Carbon-Neutral Small Group Tours
          </span>
        </div>
        <div className="top-bar__actions">
          <span>
            <i className="fa-solid fa-award" aria-hidden="true" style={{ color: 'var(--color-gold)' }}></i> 2026 World Sustainable Expedition Winner
          </span>
        </div>
      </div>
    </div>
  );
}
