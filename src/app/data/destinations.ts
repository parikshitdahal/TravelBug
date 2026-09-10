export interface Destination {
  name: string
  description: string
  media: { type: 'image' | 'video'; src: string }
  tags: string[]
}

export interface DistrictData {
  district: string
  name: string
  intro: string
  featuredMedia: { type: 'image' | 'video'; src: string }
  destinations: Destination[]
}

export const destinationData: DistrictData[] = [
  {
    district: 'north',
    name: 'North Sikkim',
    intro: 'North Sikkim is where the landscape turns dramatic and elemental, with high-altitude lakes, alpine valleys, prayer-flag passes, and mountain villages that feel wonderfully remote.',
    featuredMedia: { type: 'image', src: '/destinations/north-hero.jpg' },
    destinations: [
      {
        name: 'Gurudongmar Lake',
        description: 'A pristine high-altitude lake ringed by stark mountains, Gurudongmar is as spiritually revered as it is visually unforgettable.',
        media: { type: 'image', src: '/destinations/gurudongmar.jpg' },
        tags: ['17,800 ft', 'Frozen Lake', 'Sacred']
      },
      {
        name: 'Yumthang Valley',
        description: 'Known as the Valley of Flowers, Yumthang opens into wide alpine meadows, hot springs, and seasonal rhododendron blooms.',
        media: { type: 'video', src: '/destinations/yumthang.mp4' },
        tags: ['Flora', 'Hot Springs', 'Scenic']
      },
      {
        name: 'Lachung',
        description: 'A charming mountain village with river views and traditional character, Lachung is the classic gateway to North Sikkim’s most iconic landscapes.',
        media: { type: 'image', src: '/destinations/lachung.jpeg' },
        tags: ['Cultural', 'Gateway', 'Village']
      }
    ]
  },
  {
    district: 'south',
    name: 'South Sikkim',
    intro: 'South Sikkim feels slower, greener, and more reflective, with tea gardens, monasteries, hillside towns, and a softer rhythm that rewards unhurried travel.',
    featuredMedia: { type: 'image', src: '/destinations/namchi.jpg' },
    destinations: [
      {
        name: 'Namchi',
        description: 'Set high above the valleys, Namchi blends spiritual landmarks, open mountain views, and a calm small-town atmosphere.',
        media: { type: 'image', src: '/destinations/namchi2.jpg' },
        tags: ['Buddhist', 'Statue of Guru Padmasambhava', 'Cultural']
      },
      {
        name: 'Temi Tea Garden',
        description: 'Sikkim’s celebrated tea estate, Temi rolls across the hills in elegant green layers with striking mountain panoramas.',
        media: { type: 'image', src: '/destinations/temi.jpg' },
        tags: ['Tea Estate', 'Organic', 'Viewpoint']
      }
    ]
  },
  {
    district: 'east',
    name: 'East Sikkim',
    intro: 'East Sikkim brings together the liveliness of Gangtok, revered mountain lakes, and some of the state’s most accessible high-altitude experiences.',
    featuredMedia: { type: 'image', src: '/destinations/gtk.jpg' },
    destinations: [
      {
        name: 'Gangtok',
        description: 'Sikkim’s capital is lively yet scenic, pairing café culture, monasteries, viewpoints, and mountain-town energy in one place.',
        media: { type: 'image', src: '/destinations/gangtok.jpg' },
        tags: ['City', 'Food', 'Monastery']
      },
      {
        name: 'Tsomgo Lake',
        description: 'A revered glacial lake that shifts colour with the seasons, Tsomgo is one of East Sikkim’s most atmospheric high-altitude sights.',
        media: { type: 'video', src: '/destinations/tsomgo.mp4' },
        tags: ['Glacial Lake', 'Snow', 'Altitude']
      }
    ]
  },
  {
    district: 'west',
    name: 'West Sikkim',
    intro: 'West Sikkim is rich in legend, monastery culture, and grand Khangchendzonga views, making it ideal for travellers who want beauty with depth.',
    featuredMedia: { type: 'image', src: '/destinations/west.jpg' },
    destinations: [
      {
        name: 'Pelling',
        description: 'Pelling is one of Sikkim’s great viewpoint towns, loved for its sweeping mountain vistas, monasteries, and easy access to heritage sites.',
        media: { type: 'image', src: '/destinations/west2.jpg' },
        tags: ['Kanchenjunga View', 'Monasteries', 'Skywalk']
      },
      {
        name: 'Khecheopalri Lake',
        description: 'Surrounded by forest and held sacred by locals, Khecheopalri carries a quiet, contemplative beauty that stays with you.',
        media: { type: 'image', src: '/destinations/khechiperi.jpg' },
        tags: ['Sacred', 'Wishing Lake', 'Nature']
      }
    ]
  },
  {
    district: 'darjeeling',
    name: 'Darjeeling',
    intro: 'Darjeeling pairs old hill-station character with tea garden slopes, heritage corners, monastery calm, and views that feel classic for a reason.',
    featuredMedia: { type: 'image', src: '/hero3.jpg' },
    destinations: [
      {
        name: 'Tiger Hill',
        description: 'Famous for sunrise views over Khangchendzonga, Tiger Hill is one of Darjeeling’s most iconic viewpoints when the morning opens clear.',
        media: { type: 'image', src: '/hero3.jpg' },
        tags: ['Sunrise', 'Viewpoint', 'Classic']
      },
      {
        name: 'Darjeeling Mall Road',
        description: 'The heart of town for slow walks, cafés, bookshops, and evening hill-station atmosphere with a strong heritage feel.',
        media: { type: 'image', src: '/hero5.jpg' },
        tags: ['Leisure', 'Cafes', 'Town Life']
      }
    ]
  },
  {
    district: 'kalimpong',
    name: 'Kalimpong',
    intro: 'Kalimpong feels quieter and more open, with ridgeline views, monastery spaces, flower nurseries, and a pace that suits slower mountain travel.',
    featuredMedia: { type: 'image', src: '/hero5.jpg' },
    destinations: [
      {
        name: 'Deolo Hill',
        description: 'A wide open hilltop known for big views, cool air, and a sense of space that makes Kalimpong feel especially unhurried.',
        media: { type: 'image', src: '/hero5.jpg' },
        tags: ['Viewpoint', 'Leisure', 'Open Skies']
      },
      {
        name: 'Kalimpong Monastery Trail',
        description: 'Monastery visits, quiet ridges, and garden-town roads come together here in a softer Himalayan experience.',
        media: { type: 'image', src: '/hero2.jpeg' },
        tags: ['Monastery', 'Culture', 'Slow Travel']
      }
    ]
  },
  {
    district: 'dooars',
    name: 'Dooars',
    intro: 'The Dooars opens into forests, tea country, riverbeds, and wildlife corridors, offering a greener foothill mood very different from the mountain towns.',
    featuredMedia: { type: 'image', src: '/hero.jpeg' },
    destinations: [
      {
        name: 'Gorumara Side',
        description: 'Known for forest watchtowers, grassland edges, and wildlife-rich landscapes, this side of the Dooars feels spacious and earthy.',
        media: { type: 'image', src: '/hero.jpeg' },
        tags: ['Forest', 'Wildlife', 'Safari Mood']
      },
      {
        name: 'Tea Garden Belt',
        description: 'Long green estates and village roads give the Dooars its distinct rhythm, where tea country and river plains shape the journey.',
        media: { type: 'image', src: '/destinations/temi.jpg' },
        tags: ['Tea Gardens', 'Scenic Drive', 'Foothills']
      }
    ]
  }
]
