// /src/data/packages.ts

export interface ItineraryDay {
  day: string
  title: string
  description: string
}

export interface Package {
  id: string
  title: string
  slug: string
  description: string
  duration: string
  price: string
  media: { type: 'image' | 'video'; src: string }[]
  overview: string
  pickup: string
  bestSeason: string
  suitableFor: string
  includes: string[]
  itinerary: ItineraryDay[]
}

export const packages: Package[] = [
  {
    id: '1',
    title: 'Mystic North Sikkim Tour',
    slug: 'north-sikkim-tour',
    description: 'Explore Gurudongmar Lake, Yumthang Valley, and Lachung.',
    duration: '5 Days / 4 Nights',
    price: '₹15,999',
    media: [
      { type: 'image', src: '/packages/north.jpg' },
      { type: 'video', src: '/packages/north.mp4' },
    ],
    overview: `This immersive tour takes you through the enchanting landscapes of North Sikkim, featuring snow-capped mountains, tranquil valleys, and sacred lakes.`,
    pickup: 'Pickup from Gangtok',
    bestSeason: 'March to June, September to December',
    suitableFor: 'Nature lovers, families, adventure seekers',
    includes: [
      'Transport (shared vehicle)',
      'Hotel accommodation (Standard)',
      'Meals (Breakfast & Dinner)',
      'Permits & entry fees',
      'Local guide support',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Gangtok to Lachen',
        description:
          'Scenic drive via Chungthang. Visit waterfalls and viewpoints en route. Overnight at Lachen.',
      },
      {
        day: 'Day 2',
        title: 'Lachen to Gurudongmar Lake',
        description:
          'Early morning journey to Gurudongmar Lake. Return and proceed to Lachung. Overnight stay.',
      },
      {
        day: 'Day 3',
        title: 'Lachung to Yumthang Valley',
        description:
          'Explore the beautiful Yumthang Valley and optional Zero Point visit. Back to Gangtok in the evening.',
      },
      {
        day: 'Day 4',
        title: 'Local Gangtok Sightseeing',
        description:
          'Visit Tashi View Point, Hanuman Tok, and Enchey Monastery. Free time for shopping.',
      },
      {
        day: 'Day 5',
        title: 'Departure',
        description: 'Check-out and transfer to Siliguri or Bagdogra.',
      },
    ],
  },

  {
    id: '2',
    title: 'Cultural South Sikkim Retreat',
    slug: 'south-sikkim-retreat',
    description: 'Visit monasteries, tea gardens, and Namchi town.',
    duration: '3 Days / 2 Nights',
    price: '₹9,499',
    media: [
      { type: 'image', src: '/packages/south.jpg' },
      { type: 'video', src: '/packages/south.mp4' },
    ],
    overview: `Delve into the cultural richness of South Sikkim, surrounded by peaceful monasteries, sprawling tea gardens, and panoramic mountain views.`,
    pickup: 'Pickup from Namchi or Gangtok',
    bestSeason: 'October to May',
    suitableFor: 'Couples, cultural explorers, leisure travelers',
    includes: [
      'Private transport',
      'Hotel stay with breakfast (Standard)',
      'Monastery entry tickets',
      'Local guide',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Gangtok to Namchi',
        description:
          'Drive to Namchi. Visit Samdruptse and Char Dham. Overnight in Namchi.',
      },
      {
        day: 'Day 2',
        title: 'Tea Gardens & Temi',
        description:
          'Explore Temi Tea Estate. Visit local markets. Return to hotel for cultural program.',
      },
      {
        day: 'Day 3',
        title: 'Return to Gangtok',
        description: 'Scenic return with stops at Buddha Park and local handicraft shops.',
      },
    ],
  },

  {
    id: '3',
    title: 'Adventure West Sikkim Trail',
    slug: 'west-sikkim-trail',
    description: 'Trek through Geyzing and explore Pelling & Khecheopalri.',
    duration: '4 Days / 3 Nights',
    price: '₹12,299',
    media: [
      { type: 'image', src: '/packages/west.jpg' },
      { type: 'video', src: '/packages/west.mp4' },
    ],
    overview: `A mix of soft trekking and immersive sightseeing, this package offers the thrill of mountain trails and peaceful lakes.`,
    pickup: 'Pickup from Pelling or Siliguri',
    bestSeason: 'March to May, September to November',
    suitableFor: 'Trekkers, youth groups, adventure seekers',
    includes: [
      'Trekking guide & gear',
      'Homestay and camp accommodation',
      'All meals during trek',
      'Transport to trek start point',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrival & Pelling Sightseeing',
        description:
          'Visit Rabdentse Ruins, Skywalk, and Pemayangtse Monastery. Overnight at Pelling.',
      },
      {
        day: 'Day 2',
        title: 'Trek to Khecheopalri',
        description:
          'Trek from Darap to Khecheopalri Lake through forests and villages. Overnight in tent.',
      },
      {
        day: 'Day 3',
        title: 'Lake Exploration & Return Trek',
        description:
          'Visit the holy lake, meditate, and return trek to Yuksom. Overnight in homestay.',
      },
      {
        day: 'Day 4',
        title: 'Departure',
        description: 'Drive back to Siliguri or Gangtok after breakfast.',
      },
    ],
  },
];
