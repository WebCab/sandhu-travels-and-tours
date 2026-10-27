import { Tour } from '@/types/tour';

export const TOURS_DATA: Tour[] = [
  {
    id: 'kyoto-kumano',
    title: 'Kyoto & Kumano Kodo Sacred Trails',
    category: 'Cultural & Heritage',
    region: 'Asia',
    location: 'Japan',
    durationDays: 10,
    durationLabel: '10 Days / 9 Nights',
    price: 4290,
    rating: 4.98,
    reviews: 44,
    maxGroup: 10,
    difficulty: 'Moderate Walking',
    nextDeparture: 'Nov 14, 2026',
    featured: true,
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Traditional wooden pagoda in Kyoto framed by vibrant red autumn maples',
    shortDesc: 'Walk ancient cedar-lined pilgrimage trails, unwind in mountain onsen ryokans, and experience private Zen temple mornings.',
    longDesc: 'This carefully paced 10-day journey connects Japan’s imperial heartland with the mist-shrouded mountains of the Kii Peninsula. Alongside our bilingual cultural historian, you will experience private morning meditation in a Kyoto Zen sub-temple, trek flagstones laid over a millennium ago on the UNESCO-listed Kumano Kodo, and unwind each evening in mineral-rich hot springs.',
    highlights: [
      'Private dawn access & tea ceremony inside a Daitoku-ji Zen sub-temple',
      '4 days of guided point-to-point trekking along the Nakahechi imperial pilgrimage route',
      'Overnight stay at a wooden river-view onsen ryokan in Yunomine',
      'Kaiseki banquet prepared by a third-generation culinary master in Gion'
    ],
    itinerary: [
      { day: 'Days 1–3', title: 'Imperial Kyoto & Hidden Artisan Quarters', details: 'Arrive in Kyoto for a welcome kaiseki dinner. Explore Arashiyama bamboo groves at sunrise, visit private machiya townhouses, and meet master ceramicists.' },
      { day: 'Days 4–6', title: 'Into the Sacred Mountains of Kumano Kodo', details: 'Board a scenic express train south to Tanabe. Trek through ancient cypress forests from Takijiri-oji to Chikatsuyu, staying at family-run minshuku inns.' },
      { day: 'Days 7–8', title: 'Kumano Hongu Taisha & Nachi Falls', details: 'Descend to the grand shrine of Hongu Taisha, soak in the UNESCO thermal waters of Tsuboyu, and behold the 133-meter cascade of Nachi Falls.' },
      { day: 'Days 9–10', title: 'Coastal Wakayama & Osaka Farewell', details: 'Travel along the Pacific coast before a celebratory farewell dinner in Osaka and private airport transfer.' }
    ]
  },
  {
    id: 'patagonia-granite',
    title: 'Patagonia Granite Peaks & Fjords',
    category: 'Alpine & Trekking',
    region: 'South America',
    location: 'Chile & Argentina',
    durationDays: 12,
    durationLabel: '12 Days / 11 Nights',
    price: 5450,
    rating: 4.97,
    reviews: 61,
    maxGroup: 12,
    difficulty: 'Challenging Trek',
    nextDeparture: 'Dec 05, 2026',
    featured: true,
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Jagged granite towers of Torres del Paine reflecting in a turquoise glacial lake',
    shortDesc: 'Traverse Torres del Paine and Los Glaciares National Park with private estancia stays and glaciologist-led hikes.',
    longDesc: 'Spanning both Chilean and Argentine Patagonia, this 12-day expedition pairs iconic high-alpine trails under Fitz Roy and the Paine Massif with quiet conservation estancias far from crowded refugios.',
    highlights: [
      'Guided hikes to Laguna de los Tres (Mount Fitz Roy) and Base of the Towers',
      'Private zodiac navigation beside the calving face of Grey Glacier',
      '3 nights at a working sustainable sheep and rewilding estancia on the steppe',
      'Accompanied by a certified Patagonian mountaineer and glaciologist'
    ],
    itinerary: [
      { day: 'Days 1–3', title: 'El Chaltén & Mount Fitz Roy Massif', details: 'Meet in El Calafate and transfer to mountain village El Chaltén for guided day treks to Laguna Capri and Fitz Roy lookouts.' },
      { day: 'Days 4–6', title: 'Perito Moreno Glacier & Estancia Cristina', details: 'Cross Lake Argentino by boat to a remote historic estancia surrounded by hanging glaciers and condor cliffs.' },
      { day: 'Days 7–10', title: 'Torres del Paine National Park', details: 'Cross into Chile to explore the French Valley, Lake Pehoé, and the iconic granite horns with eco-camp domes.' },
      { day: 'Days 11–12', title: 'Last Hope Sound & Punta Arenas', details: 'Sail through fjord channels to spot Magellanic penguins before returning to Punta Arenas.' }
    ]
  },
  {
    id: 'lofoten-arctic',
    title: 'Lofoten Arctic Fjords & Northern Lights',
    category: 'Polar & Northern Lights',
    region: 'Europe',
    location: 'Norway',
    durationDays: 8,
    durationLabel: '8 Days / 7 Nights',
    price: 3890,
    rating: 4.95,
    reviews: 38,
    maxGroup: 10,
    difficulty: 'Easy to Moderate',
    nextDeparture: 'Jan 18, 2027',
    featured: true,
    image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Green aurora borealis dancing over snowy peaks and fisherman cabins in Lofoten Norway',
    shortDesc: 'Chase the Aurora Borealis across dramatic Norwegian sea cliffs, stay in restored rorbuer cabins, and sail silent fjords.',
    longDesc: 'Set 100 miles above the Arctic Circle, the Lofoten archipelago offers one of Earth’s most dramatic winter seascapes. By day, snowshoe along coastal ridges and sail into Trollfjord; by night, photograph the Northern Lights with our astrophysicist guide.',
    highlights: [
      'Nightly Aurora Borealis excursions with an Arctic night-sky photographer',
      'Silent hybrid-electric catamaran cruise into narrow Trollfjord',
      'Boutique waterfront stays in historic red timber rorbuer cabins',
      'Sámi reindeer herder cultural dinner and storytelling evening'
    ],
    itinerary: [
      { day: 'Days 1–2', title: 'Svolvær Harbour & Austnesfjorden', details: 'Arrive in Svolvær, settle into waterfront cabins, and enjoy your first evening aurora coastal drive.' },
      { day: 'Days 3–5', title: 'Henningsvær, Nusfjord & Sea Eagle Safari', details: 'Explore preserved fishing villages, snowshoe above Haukland Beach, and kayak sheltered turquoise bays.' },
      { day: 'Days 6–8', title: 'Reinebringen Views & Tromsø Departure', details: 'Photograph iconic Reine fjord vistas before boarding the coastal express north to Tromsø.' }
    ]
  },
  {
    id: 'amalfi-aeolian',
    title: 'Amalfi Cliffpaths & Aeolian Volcanoes',
    category: 'Coastal & Islands',
    region: 'Europe',
    location: 'Southern Italy',
    durationDays: 9,
    durationLabel: '9 Days / 8 Nights',
    price: 3650,
    rating: 4.93,
    reviews: 52,
    maxGroup: 12,
    difficulty: 'Moderate Walking',
    nextDeparture: 'May 04, 2027',
    featured: false,
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Colorful cliffside village overlooking turquoise Mediterranean waters on the Amalfi Coast',
    shortDesc: 'Walk the Path of the Gods above Positano, charter a wooden gulet through Sicily’s Aeolian Islands, and hike Stromboli at dusk.',
    longDesc: 'Combine the terraced lemon groves of the Sorrentine Peninsula with the untamed volcanic archipelago north of Sicily. Hike high above the Tyrrhenian Sea and dine at organic island vineyards.',
    highlights: [
      'Guided trek along the Sentiero degli Dei (Path of the Gods) with cliffside lemon-grove picnic',
      '3-day private sailboat island-hopping between Salina, Lipari, and Panarea',
      'Sunset ascent with volcanological guides to watch Stromboli’s glowing craters',
      'Private Malvasia wine tasting at a cliffside estate on Salina'
    ],
    itinerary: [
      { day: 'Days 1–3', title: 'Ravello Gardens & Path of the Gods', details: 'Base in tranquil Ravello to walk ancient mule tracks linking hilltop monasteries and coastal coves.' },
      { day: 'Days 4–6', title: 'Sailing the Aeolian Archipelago', details: 'Hydrofoil to Lipari and board our private vessel to explore volcanic sea caves and caper farms.' },
      { day: 'Days 7–9', title: 'Stromboli Volcano & Taormina Finale', details: 'Witness volcanic fireworks at dusk on Stromboli before concluding in Sicily.' }
    ]
  },
  {
    id: 'okavango-namib',
    title: 'Okavango Delta & Namib Desert Skies',
    category: 'Wildlife & Safari',
    region: 'Africa',
    location: 'Botswana & Namibia',
    durationDays: 11,
    durationLabel: '11 Days / 10 Nights',
    price: 6290,
    rating: 4.99,
    reviews: 29,
    maxGroup: 8,
    difficulty: 'Easy & Accessible',
    nextDeparture: 'Jun 12, 2027',
    featured: true,
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Elephants walking across golden savanna grasslands at sunset in Africa',
    shortDesc: 'Glide through crystal lagoons by mokoro dugout canoe and climb the towering apricot dunes of Sossusvlei at first light.',
    longDesc: 'An extraordinary contrast of water and sand. Spend five days in private wildlife concessions of Botswana’s Okavango Delta followed by six days exploring Namibia’s towering red dunes and Dark Sky reserves.',
    highlights: [
      'Light-aircraft transfers directly into private, unfenced Okavango wildlife reserves',
      'Silent mokoro canoe safaris and walking tracking with bushmen naturalists',
      'First-light entry to Sossusvlei & Deadvlei before public gates open',
      'Sleep-out under the Southern Cross on an elevated star-bed deck'
    ],
    itinerary: [
      { day: 'Days 1–5', title: 'Okavango Delta Private Concessions', details: 'Fly by bush plane from Maun into two distinct delta habitats to track leopards, wild dogs, and elephant herds.' },
      { day: 'Days 6–8', title: 'Sossusvlei Red Dunes & NamibRand', details: 'Fly to Windhoek and continue to the Namib Desert for dawn dune climbs and desert-adapted wildlife.' },
      { day: 'Days 9–11', title: 'Skeleton Coast & Swakopmund', details: 'Explore dramatic Atlantic shipwrecks and desert canyons before departure.' }
    ]
  },
  {
    id: 'dolomites-alta-via',
    title: 'Dolomites Alta Via & Ladin Valleys',
    category: 'Alpine & Trekking',
    region: 'Europe',
    location: 'Northern Italy',
    durationDays: 7,
    durationLabel: '7 Days / 6 Nights',
    price: 2890,
    rating: 4.94,
    reviews: 47,
    maxGroup: 12,
    difficulty: 'Moderate to Active',
    nextDeparture: 'Jul 09, 2027',
    featured: false,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Dramatic limestone peaks and emerald alpine meadows in the Italian Dolomites',
    shortDesc: 'Trek beneath pale limestone spires from Cortina to Val Badia with gourmet high-altitude rifugio hospitality.',
    longDesc: 'Experience the finest sections of the Alta Via 1 without carrying a heavy pack. Each day ends at handpicked mountain rifugios and South Tyrolean wellness chalets serving award-winning alpine cuisine.',
    highlights: [
      'Sunrise photography and ridge hike around Tre Cime di Lavaredo',
      'Overnight at the legendary Rifugio Lagazuoi at 2,752 meters',
      'Ladin farmstead cheese and biodynamic wine lunch in Val Badia',
      'Daily luggage transfers between valley hotels'
    ],
    itinerary: [
      { day: 'Days 1–2', title: 'Cortina d’Ampezzo & Lake Braies', details: 'Meet in Venice for private transfer into the Dolomites and warm-up trails around Lago di Braies.' },
      { day: 'Days 3–5', title: 'Tre Cime, Cinque Torri & Lagazuoi', details: 'Walk open-air WWI mountain history trails and sleep high above the clouds.' },
      { day: 'Days 6–7', title: 'Alpe di Siusi Meadows & Bolzano', details: 'Cross Europe’s largest high-alpine pasture before descending to Bolzano.' }
    ]
  },
  {
    id: 'bhutan-himalaya',
    title: 'Bhutan: Kingdom of the Thunder Dragon',
    category: 'Cultural & Heritage',
    region: 'Asia',
    location: 'Bhutan',
    durationDays: 9,
    durationLabel: '9 Days / 8 Nights',
    price: 4980,
    rating: 4.99,
    reviews: 31,
    maxGroup: 10,
    difficulty: 'Moderate',
    nextDeparture: 'Oct 16, 2026',
    featured: true,
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Himalayan monastery perched high on a misty mountain cliffside in Bhutan',
    shortDesc: 'Journey through pine-scented Himalayan valleys from Paro to Phobjikha, culminating at the cliffside Tiger’s Nest Monastery.',
    longDesc: 'In the world’s only carbon-negative kingdom, progress is measured by Gross National Happiness. Walk ancient suspension bridges festooned with prayer flags, share butter tea with monastic scholars, and hike pristine rhododendron forests.',
    highlights: [
      'Acclimatized morning ascent to Taktsang (Tiger’s Nest Monastery)',
      'Traditional hot-stone bath at a family farmhouse in the Phobjikha Valley',
      'Private blessing ceremony with a senior lama in Punakha Dzong',
      'Includes Bhutan Sustainable Development Fee (SDF) in full'
    ],
    itinerary: [
      { day: 'Days 1–3', title: 'Thimphu & Dochula Pass (3,100m)', details: 'Fly into Paro with views of Everest, explore Thimphu textile academies, and cross the 108 chortens of Dochula.' },
      { day: 'Days 4–6', title: 'Punakha Fortress & Glacial Phobjikha', details: 'Hike across rice terraces to Punakha Dzong and observe black-necked cranes in Gangtey.' },
      { day: 'Days 7–9', title: 'Paro Valley & Tiger’s Nest Ascent', details: 'Trek to the sacred cliffside monastery of Taktsang before your farewell banquet.' }
    ]
  },
  {
    id: 'galapagos-darwin',
    title: 'Galápagos Intimate Yacht & Darwin Trails',
    category: 'Coastal & Islands',
    region: 'South America',
    location: 'Ecuador',
    durationDays: 8,
    durationLabel: '8 Days / 7 Nights',
    price: 5890,
    rating: 4.97,
    reviews: 42,
    maxGroup: 12,
    difficulty: 'Easy to Moderate',
    nextDeparture: 'Feb 08, 2027',
    featured: false,
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Sea turtle swimming through clear blue tropical ocean water in Galapagos',
    shortDesc: 'Snorkel alongside marine iguanas, penguins, and hammerhead sharks aboard a 12-guest motor yacht with two naturalists.',
    longDesc: 'Explore the Western and Central islands of the Galápagos archipelago in unmatched intimacy. With a 6:1 guest-to-naturalist ratio, you’ll make twice-daily landings and deep-water snorkels.',
    highlights: [
      'Exclusive 12-passenger expedition yacht with private balcony cabins',
      'Snorkel with Galápagos penguins, sea lions, and green sea turtles at Fernandina',
      'Visit giant tortoise breeding sanctuaries in the Santa Cruz highlands',
      'Colonial Quito UNESCO Old Town pre-cruise heritage stay included'
    ],
    itinerary: [
      { day: 'Days 1–2', title: 'Historic Quito & Flight to Baltra', details: 'Explore Quito’s gilded churches before flying out to the archipelago to board our yacht.' },
      { day: 'Days 3–6', title: 'Isabela, Fernandina & Rabida Islands', details: 'Explore volcanic lava fields, flightless cormorant colonies, and red-sand beaches.' },
      { day: 'Days 7–8', title: 'Santa Cruz Tortoise Reserve & Return', details: 'Observe giant tortoises in the wild before flying back to mainland Ecuador.' }
    ]
  },
  {
    id: 'atlas-sahara',
    title: 'High Atlas Kasbahs & Sahara Erg Chebbi',
    category: 'Cultural & Heritage',
    region: 'Africa',
    location: 'Morocco',
    durationDays: 8,
    durationLabel: '8 Days / 7 Nights',
    price: 2490,
    rating: 4.92,
    reviews: 56,
    maxGroup: 12,
    difficulty: 'Easy to Moderate',
    nextDeparture: 'Nov 22, 2026',
    featured: false,
    image: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Golden sand dunes of the Sahara desert in Morocco under warm sunlight',
    shortDesc: 'Trek Amazigh mountain villages beneath Mount Toubkal, sleep in luxury desert tents, and explore Marrakech riads.',
    longDesc: 'From the snow-dusted passes of the High Atlas to the singing dunes of the Sahara, experience Morocco’s rich Amazigh (Berber) hospitality, adobe kasbah architecture, and spice-perfumed medinas.',
    highlights: [
      '2 nights at an eco-kasbah in the High Atlas with guided village mule-trail walks',
      'Private luxury tented camp deep in the Erg Chebbi dunes with Gnawa musicians',
      'Architectural and culinary walking tour of Marrakech’s historic medina',
      'Visit women-led saffron and argan oil cooperatives in the Draa Valley'
    ],
    itinerary: [
      { day: 'Days 1–3', title: 'Marrakech Riads & High Atlas Valleys', details: 'Discover hidden palaces in Marrakech before ascending to Imlil in the High Atlas Mountains.' },
      { day: 'Days 4–6', title: 'Aït Benhaddou, Dadès Gorge & Sahara Camp', details: 'Cross the Tizi n’Tichka pass to ancient earthen citadels and ride into the golden Sahara dunes.' },
      { day: 'Days 7–8', title: 'Draa Oasis & Return to Marrakech', details: 'Travel through date-palm oases back to Marrakech for a rooftop farewell dinner.' }
    ]
  }
];

export function getAllTours(): Tour[] {
  return TOURS_DATA;
}

export function getFeaturedTours(): Tour[] {
  return TOURS_DATA.filter((tour) => tour.featured);
}

export function getTourById(id: string): Tour | undefined {
  return TOURS_DATA.find((tour) => tour.id === id);
}

export function formatCurrency(amount: number): string {
  return '$' + Number(amount).toLocaleString('en-US');
}
