'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu whenever pathname changes
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    if (path === '/tours') return pathname === '/tours';
    if (path === '/tours/kyoto-kumano') return pathname.startsWith('/tours/');
    return pathname === path;
  };

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`} id="site-header">
      <div className="container nav-container">
        <Link href="/" className="brand-logo" aria-label="Sandhu Travels and Tour Home">
          <span className="brand-logo__icon" aria-hidden="true">
            <i className="fa-solid fa-compass"></i>
          </span>
          <span>
            Sandhu
            <small className="brand-logo__sub">Travels &amp; Tour</small>
          </span>
        </Link>

        <nav aria-label="Primary Navigation">
          <ul className={`nav-menu ${mobileMenuOpen ? 'is-open' : ''}`} id="primary-nav-menu">
            <li>
              <Link
                href="/"
                className={`nav-link ${isActive('/') ? 'is-active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/tours"
                className={`nav-link ${isActive('/tours') ? 'is-active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Destinations &amp; Tours
              </Link>
            </li>
            <li>
              <Link
                href="/tours/kyoto-kumano"
                className={`nav-link ${isActive('/tours/kyoto-kumano') ? 'is-active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Sample Itinerary
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`nav-link ${isActive('/about') ? 'is-active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`nav-link ${isActive('/contact') ? 'is-active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="nav-cta">
          <Link href="/tours" className="btn btn--outline btn--sm">
            Explore Tours
          </Link>
          <Link href="/contact" className="btn btn--primary btn--sm">
            Book Enquiry <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </Link>
          <button
            type="button"
            className="mobile-menu-toggle"
            id="mobile-menu-toggle"
            aria-expanded={mobileMenuOpen}
            aria-controls="primary-nav-menu"
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i
              className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}
              aria-hidden="true"
              id="mobile-menu-icon"
            ></i>
          </button>
        </div>
      </div>
    </header>
  );
}
