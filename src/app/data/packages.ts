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

  {
    id: '4',
    title: 'Complete Sikkim Tour',
    slug: 'complete-sikkim-tour',
    description: 'A full-circle Sikkim journey covering Gangtok, North Sikkim, Changu Lake, Namchi, Ravangla, and Pelling.',
    duration: '8 Days / 7 Nights',
    media: [
      { type: 'image', src: '/destinations/gtk.jpg' },
      { type: 'video', src: '/destinations/tsomgo.mp4' },
    ],
    overview: `This itinerary is designed for travelers who want to experience the best of Sikkim in one seamless route. From the alpine beauty of Gurudongmar and Yumthang to the cultural depth of Namchi, Ravangla, and Pelling, the journey blends scenic drives, iconic landmarks, mountain towns, and local experiences into one complete trip.`,
    pickup: 'Pickup from NJP / Bagdogra',
    bestSeason: 'March to June, October to December',
    suitableFor: 'Families, couples, first-time visitors, and explorers looking for a full Sikkim circuit',
    includes: [
      'Private or shared transport as per plan',
      'Hotel accommodation',
      'Breakfast and dinner',
      'Permits for North Sikkim and Tsomgo sector',
      'Local travel assistance',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Welcome to Sikkim',
        description:
          'Arrive at NJP or Bagdogra and transfer to Gangtok. Check in, relax, and spend the evening at leisure around MG Marg if time permits.',
      },
      {
        day: 'Day 2',
        title: 'Excursion to Changu Lake and Baba Mandir',
        description:
          'Enjoy a day trip to the high-altitude Tsomgo (Changu) Lake and Baba Harbhajan Singh Mandir. Return to Gangtok for an overnight stay.',
      },
      {
        day: 'Day 3',
        title: 'Gangtok to Lachen',
        description:
          'Drive through scenic mountain roads via Chungthang toward Lachen. Stop at waterfalls and viewpoints en route before checking in for the night.',
      },
      {
        day: 'Day 4',
        title: 'Lachen to Lachung via Gurudongmar Lake',
        description:
          'Start early for Gurudongmar Lake, one of the highest lakes in the world. After the visit, return through Lachen and continue onward to Lachung for an overnight stay.',
      },
      {
        day: 'Day 5',
        title: 'Lachung to Gangtok via Yumthang Valley',
        description:
          'Visit the flower-filled landscapes of Yumthang Valley in the morning, then drive back to Gangtok with scenic stops along the way.',
      },
      {
        day: 'Day 6',
        title: 'Gangtok to Pelling via Temi Tea Estate, Namchi, & Ravongla',
        description:
          'Travel toward West Sikkim, covering Temi Tea Estate, Namchi, and Ravongla en route. Continue to Pelling and settle in for the evening.',
      },
      {
        day: 'Day 7',
        title: 'Pelling Sightseeing',
        description:
          'Explore the highlights of Pelling including monasteries, viewpoints, and heritage sites such as the Skywalk, Rabdentse Ruins, and nearby attractions based on time and interest.',
      },
      {
        day: 'Day 8',
        title: 'Drop to NJP/Bagdogra',
        description:
          'After breakfast, check out and drive back to NJP Railway Station or Bagdogra Airport for departure.',
      },
    ],
  },
];
