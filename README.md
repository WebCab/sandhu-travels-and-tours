# Sandhu Travels & Tour — Next.js App Router (TypeScript)

A production-ready, SEO-optimized web application for **Sandhu Travels and Tour**, specializing in curated small-group expeditions, sustainable cultural tours, and bespoke wilderness adventures across the globe.

---

## 🏔️ Brand Aesthetics & Design System

- **Deep Alpine Forest**: `#0f2e2a` (Primary Brand Color)
- **Muted Pine**: `#1a4741`
- **Midnight Evergreen**: `#081c19`
- **Terracotta Sun**: `#d4653b` (Accent & CTA)
- **Burnt Sienna**: `#b84f27` (Hover State)
- **Warm Alabaster Sand**: `#faf7f2` (Surface / Background)
- **Compass Gold**: `#d49b35` (Rating Badges)
- **Typography**: Google Fonts (*Playfair Display* for editorial headings, *Plus Jakarta Sans* for UI) loaded via `next/font/google`.
- **Icons**: Font Awesome 6.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (`strict: true`)
- **Styling**: Vanilla CSS with CSS Custom Properties (`:root` design tokens in `src/app/globals.css`)
- **Image Optimization**: `next/image` with remote patterns configured for `images.unsplash.com` and `placehold.co`, plus `<TourImageWithFallback />` wrapper.
- **Pre-rendering**: Static Site Generation (SSG) with `generateStaticParams()` for all 9 tour detail routes.

---

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css                  # Design tokens, reset, typography, components & layout
│   ├── layout.tsx                   # Root layout (Fonts, TopBar, Header, Footer)
│   ├── page.tsx                     # Home Page (Hero, Quick Finder, Featured Tours, Pillars, Testimonials, CTA)
│   ├── tours/
│   │   ├── page.tsx                 # Destinations & Tours Directory
│   │   └── [id]/
│   │       └── page.tsx             # Dynamic Tour Detail Page (generateStaticParams + generateMetadata)
│   ├── about/
│   │   └── page.tsx                 # About Us (Origin story, Impact metrics, Leadership team)
│   └── contact/
│       └── page.tsx                 # Contact & Booking Enquiry Page (?tour= param support)
├── components/
│   ├── forms/
│   │   └── ContactBookingForm.tsx   # Client-side validated booking enquiry form
│   ├── layout/
│   │   ├── Footer.tsx               # Global footer with deep links
│   │   ├── Header.tsx               # Sticky header with mobile menu toggle & active link highlighting
│   │   └── TopBar.tsx               # Announcement bar with 24/7 expedition desk contact
│   ├── tours/
│   │   ├── BookingHoldSidebar.tsx   # Sticky 72-hour space hold calculator & validated form
│   │   ├── ItineraryAccordion.tsx   # Day-by-day expandable accordion with Expand/Collapse All
│   │   ├── QuickFinderForm.tsx      # Home search form that routes to /tours with query params
│   │   ├── TourCard.tsx             # Reusable tour package card linking to /tours/[id] and /contact
│   │   └── ToursDirectoryClient.tsx # Real-time filtering, search, price slider, and sorting
│   └── ui/
│       ├── ScrollReveal.tsx         # IntersectionObserver wrapper for smooth scroll animations
│       └── TourImageWithFallback.tsx# next/image wrapper with automatic error fallback
├── data/
│   └── tours.ts                     # Strongly typed TOURS_DATA array (all 9 expeditions) & helpers
└── types/
    └── tour.ts                      # Tour, ItineraryDay, FilterState TypeScript interfaces
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Locally in Development Mode
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Static Validation
```bash
npm run build
npm run start
```
