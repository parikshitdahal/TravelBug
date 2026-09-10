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
    description: 'An alpine North Sikkim route through Gurudongmar, Yumthang, and Lachung, built for travellers who want high-altitude drama and raw Himalayan beauty.',
    duration: '5 Days / 4 Nights',
    media: [
      { type: 'image', src: '/packages/north.jpg' },
      { type: 'video', src: '/packages/north.mp4' },
    ],
    overview: `This journey captures the most striking side of North Sikkim, from the sacred stillness of Gurudongmar Lake to the flower-filled openness of Yumthang Valley and the mountain-village charm of Lachung. It is a route made for travellers who want scenery that feels vast, crisp, and unforgettable.`,
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
    description: 'A slower South Sikkim retreat through Namchi, monasteries, and Temi Tea Estate, ideal for travellers who want culture, views, and a gentler pace.',
    duration: '3 Days / 2 Nights',
    media: [
      { type: 'image', src: '/packages/south.jpg' },
      { type: 'video', src: '/packages/south.mp4' },
    ],
    overview: `This South Sikkim itinerary is designed for unhurried travel, combining peaceful monasteries, cultural landmarks, and the elegant hillside setting of Temi Tea Estate. It is a softer, more reflective route with mountain views, local character, and space to breathe.`,
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
    description: 'A scenic West Sikkim journey through Pelling, Khecheopalri, and heritage-rich hill country for travellers who want views, trails, and local depth.',
    duration: '4 Days / 3 Nights',
    media: [
      { type: 'image', src: '/packages/west.jpg' },
      { type: 'video', src: '/packages/west.mp4' },
    ],
    overview: `West Sikkim offers a rewarding blend of mountain scenery, monastery culture, and heritage landscapes. This route moves through Pelling and nearby highlights with a balance of soft adventure, viewpoint-driven travel, and the quieter beauty that defines the western side of the state.`,
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
    description: 'A complete Sikkim circuit covering Gangtok, Tsomgo, North Sikkim, Namchi, Ravangla, and Pelling for travellers who want the state’s highlights in one well-rounded journey.',
    duration: '8 Days / 7 Nights',
    media: [
      { type: 'image', src: '/destinations/gtk.jpg' },
      { type: 'video', src: '/destinations/tsomgo.mp4' },
    ],
    overview: `This itinerary brings together the many moods of Sikkim in one continuous route, from the energy of Gangtok and the sacred high-altitude beauty of Tsomgo, Gurudongmar, and Yumthang to the cultural and scenic richness of Namchi, Ravangla, and Pelling. It is an ideal choice for travellers who want a fuller sense of the state rather than only one region.`,
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

  {
    id: '5',
    title: 'Darjeeling & Kalimpong Escape',
    slug: 'darjeeling-kalimpong-escape',
    description: 'A classic North Bengal hill journey through Darjeeling’s heritage charm and Kalimpong’s quieter Himalayan pace.',
    duration: '5 Days / 4 Nights',
    media: [
      { type: 'image', src: '/hero3.jpg' },
      { type: 'image', src: '/hero5.jpg' },
    ],
    overview: `This route is ideal for travellers who want the charm of the hills without rushing from stop to stop. Darjeeling brings heritage promenades, tea country, and iconic viewpoints, while Kalimpong adds a slower mood with ridgeline scenery, monastery culture, and easy mountain afternoons.`,
    pickup: 'Pickup from NJP / Bagdogra',
    bestSeason: 'March to June, October to December',
    suitableFor: 'Couples, families, and travellers looking for an easy hill holiday',
    includes: [
      'Private vehicle for transfers and sightseeing',
      'Hotel accommodation',
      'Breakfast',
      'Local sightseeing support',
      'Trip coordination assistance',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrival and Transfer to Darjeeling',
        description:
          'Arrive at NJP or Bagdogra and drive up to Darjeeling. Check in and enjoy a relaxed evening around the Mall area.',
      },
      {
        day: 'Day 2',
        title: 'Darjeeling Local Sightseeing',
        description:
          'Explore Darjeeling’s signature highlights, viewpoints, heritage landmarks, monastery stops, and hill-town character at an easy pace.',
      },
      {
        day: 'Day 3',
        title: 'Darjeeling to Kalimpong',
        description:
          'Drive from Darjeeling to Kalimpong, settling into a quieter hill setting with open views and a calmer atmosphere.',
      },
      {
        day: 'Day 4',
        title: 'Kalimpong Sightseeing',
        description:
          'Spend the day covering Kalimpong’s viewpoints, monastery spaces, and garden-side sights while enjoying its slower pace.',
      },
      {
        day: 'Day 5',
        title: 'Drop to NJP/Bagdogra',
        description:
          'After breakfast, check out and drive back to NJP Railway Station or Bagdogra Airport for departure.',
      },
    ],
  },

  {
    id: '6',
    title: 'Dooars Forest & Tea Trail',
    slug: 'dooars-forest-tea-trail',
    description: 'A softer wilderness escape through the Dooars, with forests, tea gardens, riverside stretches, and wildlife-rich foothill landscapes.',
    duration: '5 Days / 4 Nights',
    media: [
      { type: 'image', src: '/hero.jpeg' },
      { type: 'image', src: '/hero5.jpg' },
    ],
    overview: `The Dooars offers a very different mood from the mountains: broad riverbeds, tea country, forest edges, and wildlife-rich terrain at the Himalayan foothills. This itinerary is designed for travellers who want greenery, open landscapes, and a quieter North Bengal experience with a touch of safari atmosphere.`,
    pickup: 'Pickup from NJP / Bagdogra / New Mal Junction',
    bestSeason: 'October to April',
    suitableFor: 'Families, nature lovers, birdwatchers, and relaxed forest-side holiday seekers',
    includes: [
      'Private transfers and local transport',
      'Hotel or resort accommodation',
      'Breakfast',
      'Trip assistance and coordination',
      'Flexible sightseeing planning',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrival and Transfer to Dooars',
        description:
          'Arrive from NJP, Bagdogra, or New Mal Junction and transfer to your Dooars stay through tea gardens and forest-fringed roads.',
      },
      {
        day: 'Day 2',
        title: 'Gorumara / Lataguri Side Exploration',
        description:
          'Spend the day exploring the Gorumara or Lataguri side of the Dooars, with forest landscapes, watchtower areas, and open green stretches.',
      },
      {
        day: 'Day 3',
        title: 'Jaldapara / Chilapata Circuit',
        description:
          'Continue into another side of the Dooars region for a fuller forest-and-plains experience, with optional safari zones depending on availability.',
      },
      {
        day: 'Day 4',
        title: 'Tea Garden and Riverside Leisure',
        description:
          'Keep the day relaxed with tea garden roads, village edges, and riverside downtime that lets you absorb the pace of the Dooars.',
      },
      {
        day: 'Day 5',
        title: 'Departure',
        description:
          'After breakfast, transfer back to NJP, Bagdogra, or your preferred departure point.',
      },
    ],
  },

  {
    id: '7',
    title: 'Sikkim, Darjeeling & Kalimpong Circuit',
    slug: 'sikkim-darjeeling-kalimpong-circuit',
    description: 'A wider Eastern Himalayan circuit combining Gangtok, Darjeeling, and Kalimpong in one scenic multi-destination journey.',
    duration: '7 Days / 6 Nights',
    media: [
      { type: 'image', src: '/hero3.jpg' },
      { type: 'image', src: '/destinations/gtk.jpg' },
    ],
    overview: `This itinerary is ideal for travellers who want to see beyond a single destination. It combines the energy of Gangtok, the heritage appeal of Darjeeling, and the slower charm of Kalimpong into one balanced circuit through the Eastern Himalayas.`,
    pickup: 'Pickup from NJP / Bagdogra',
    bestSeason: 'March to June, October to December',
    suitableFor: 'First-time visitors, couples, families, and travellers who want both Sikkim and North Bengal in one trip',
    includes: [
      'Private vehicle for transfers and sightseeing',
      'Hotel accommodation',
      'Breakfast',
      'Local sightseeing support',
      'Trip coordination assistance',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrival and Transfer to Gangtok',
        description:
          'Arrive at NJP or Bagdogra and transfer to Gangtok. Check in and enjoy a relaxed evening in the capital city.',
      },
      {
        day: 'Day 2',
        title: 'Gangtok Sightseeing',
        description:
          'Explore Gangtok’s viewpoints, monastery spaces, local markets, and nearby attractions at an easy pace.',
      },
      {
        day: 'Day 3',
        title: 'Excursion to Tsomgo Lake',
        description:
          'Head out for an excursion toward Tsomgo Lake and the surrounding high-altitude sector before returning to Gangtok.',
      },
      {
        day: 'Day 4',
        title: 'Gangtok to Darjeeling',
        description:
          'Drive from Gangtok to Darjeeling, settling into the old hill-station atmosphere by evening.',
      },
      {
        day: 'Day 5',
        title: 'Darjeeling Local Sightseeing',
        description:
          'Take in Darjeeling’s iconic sights, viewpoints, and hill-town charm through a curated day of local exploration.',
      },
      {
        day: 'Day 6',
        title: 'Darjeeling to Kalimpong',
        description:
          'Travel onward to Kalimpong for a quieter mountain setting, with open ridgeline views and a more relaxed pace.',
      },
      {
        day: 'Day 7',
        title: 'Drop to NJP/Bagdogra',
        description:
          'After breakfast, check out and drive back to NJP Railway Station or Bagdogra Airport for departure.',
      },
    ],
  },
];
