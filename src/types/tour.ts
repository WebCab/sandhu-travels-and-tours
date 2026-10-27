export interface ItineraryDay {
  day: string;
  title: string;
  details: string;
}

export type TourCategory =
  | 'Alpine & Trekking'
  | 'Cultural & Heritage'
  | 'Coastal & Islands'
  | 'Wildlife & Safari'
  | 'Polar & Northern Lights';

export type TourRegion = 'Europe' | 'Asia' | 'South America' | 'Africa';

export interface Tour {
  id: string;
  title: string;
  category: TourCategory;
  region: TourRegion;
  location: string;
  durationDays: number;
  durationLabel: string;
  price: number;
  rating: number;
  reviews: number;
  maxGroup: number;
  difficulty: string;
  nextDeparture: string;
  featured: boolean;
  image: string;
  imageAlt: string;
  shortDesc: string;
  longDesc: string;
  highlights: string[];
  itinerary: ItineraryDay[];
}

export interface FilterState {
  category: string;
  region: string;
  maxPrice: number;
  search: string;
  sort: string;
}
