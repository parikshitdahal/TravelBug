export interface Destination {
  name: string
  description: string
  media: { type: 'image' | 'video'; src: string }
  tags: string[]
}

export interface DistrictData {
  district: string
  intro: string
  featuredMedia: { type: 'image' | 'video'; src: string }
  destinations: Destination[]
}

export const destinationData: DistrictData[] = [
  {
    district: 'north',
    intro: 'North Sikkim is known for its dramatic landscapes, alpine valleys, and high-altitude lakes. Perfect for adventure seekers and nature lovers.',
    featuredMedia: { type: 'image', src: '/destinations/north-hero.jpg' },
    destinations: [
      {
        name: 'Gurudongmar Lake',
        description: 'One of the highest lakes in the world, located at 17,800 ft and revered by both Buddhists and Sikhs.',
        media: { type: 'image', src: '/destinations/gurudongmar.jpg' },
        tags: ['17,800 ft', 'Frozen Lake', 'Sacred']
      },
      {
        name: 'Yumthang Valley',
        description: 'Known as the Valley of Flowers, famous for hot springs and rhododendrons.',
        media: { type: 'video', src: '/destinations/yumthang.mp4' },
        tags: ['Flora', 'Hot Springs', 'Scenic']
      },
      {
        name: 'Lachung',
        description: 'A picturesque mountain village and gateway to Yumthang, with vibrant traditions and culture.',
        media: { type: 'image', src: '/destinations/lachung.jpeg' },
        tags: ['Cultural', 'Gateway', 'Village']
      }
    ]
  },
  {
    district: 'south',
    intro: 'South Sikkim offers peaceful monasteries, lush tea gardens, and a culturally rich atmosphere perfect for slow, soulful travel.',
    featuredMedia: { type: 'image', src: '/destinations/namchi.jpg' },
    destinations: [
      {
        name: 'Namchi',
        description: 'A cultural hub with giant statues, monasteries, and panoramic views.',
        media: { type: 'image', src: '/destinations/namchi2.jpg' },
        tags: ['Buddhist', 'Statue of Guru Padmasambhava', 'Cultural']
      },
      {
        name: 'Temi Tea Garden',
        description: 'The only tea estate in Sikkim producing premium organic tea with stunning mountain views.',
        media: { type: 'image', src: '/destinations/temi.jpg' },
        tags: ['Tea Estate', 'Organic', 'Viewpoint']
      }
    ]
  },
  {
    district: 'east',
    intro: 'East Sikkim is a blend of history, culture, and modern development. Home to the capital city Gangtok and important heritage sites.',
    featuredMedia: { type: 'image', src: '/destinations/gtk.jpg' },
    destinations: [
      {
        name: 'Gangtok',
        description: 'The capital city known for its vibrant culture, MG Marg, and local cuisine.',
        media: { type: 'image', src: '/destinations/gangtok.jpg' },
        tags: ['City', 'Food', 'Monastery']
      },
      {
        name: 'Tsomgo Lake',
        description: 'A glacial lake at 12,313 ft surrounded by mountains, also known as Changu Lake.',
        media: { type: 'video', src: '/destinations/tsomgo.mp4' },
        tags: ['Glacial Lake', 'Snow', 'Altitude']
      }
    ]
  },
  {
    district: 'west',
    intro: 'West Sikkim is steeped in legends, monasteries, and some of the best trekking routes including views of Mt. Kanchenjunga.',
    featuredMedia: { type: 'image', src: '/destinations/west.jpg' },
    destinations: [
      {
        name: 'Pelling',
        description: 'A scenic town with views of the Kanchenjunga range and ancient monasteries.',
        media: { type: 'image', src: '/destinations/west2.jpg' },
        tags: ['Kanchenjunga View', 'Monasteries', 'Skywalk']
      },
      {
        name: 'Khecheopalri Lake',
        description: 'A sacred lake believed to fulfill wishes, surrounded by lush forest.',
        media: { type: 'image', src: '/destinations/khechiperi.jpg' },
        tags: ['Sacred', 'Wishing Lake', 'Nature']
      }
    ]
  }
]
