const regions = [
  {
    slug: 'stockholm',
    name: 'Stockholm',
    emoji: '🏙️',
    description: 'Stores across the capital and surrounding suburbs.',
    storeCount: 3,
    stores: [
      {
        name: 'Willys Stockholm City',
        address: 'Klarabergsgatan 50, 111 21 Stockholm',
        hours: 'Mon-Sun 07:00-23:00',
        phone: '08-411 22 33',
        open24h: false,
        services: ['Self-checkout', 'Bakery', 'Online pickup']
      },
      {
        name: 'Willys Liljeholmen',
        address: 'Liljeholmstorget 12, 117 61 Stockholm',
        hours: 'Mon-Sun 07:00-22:00',
        phone: '08-744 55 66',
        open24h: false,
        services: ['Pharmacy', 'Bakery']
      },
      {
        name: 'Willys Kista',
        address: 'Isafjordsgatan 2, 164 40 Kista',
        hours: 'Open 24 hours',
        phone: '08-752 11 99',
        open24h: true,
        services: ['Self-checkout', 'Online pickup', 'Parking']
      }
    ]
  },
  {
    slug: 'gothenburg',
    name: 'Gothenburg',
    emoji: '🌊',
    description: 'Serving the west coast from Gothenburg\'s city centre to the suburbs.',
    storeCount: 2,
    stores: [
      {
        name: 'Willys Nordstan',
        address: 'Nordstadstorget 7, 411 05 Göteborg',
        hours: 'Mon-Fri 08:00-21:00 | Sat-Sun 09:00-20:00',
        phone: '031-774 22 10',
        open24h: false,
        services: ['Bakery', 'Self-checkout']
      },
      {
        name: 'Willys Frölunda',
        address: 'Frölunda Torg 3, 421 42 Göteborg',
        hours: 'Mon-Sun 07:00-22:00',
        phone: '031-699 44 55',
        open24h: false,
        services: ['Bakery', 'Parking', 'Online pickup']
      }
    ]
  },
  {
    slug: 'malmo',
    name: 'Malmö',
    emoji: '🌉',
    description: 'Quality groceries across Sweden\'s third-largest city.',
    storeCount: 2,
    stores: [
      {
        name: 'Willys Triangeln',
        address: 'Södra Förstadsgatan 48, 211 43 Malmö',
        hours: 'Mon-Sun 08:00-22:00',
        phone: '040-611 33 20',
        open24h: false,
        services: ['Bakery', 'Self-checkout', 'Online pickup']
      },
      {
        name: 'Willys Hyllie',
        address: 'Hyllie Stationstorg 31, 215 32 Malmö',
        hours: 'Mon-Sun 07:00-23:00',
        phone: '040-556 77 88',
        open24h: false,
        services: ['Parking', 'Self-checkout', 'Bakery']
      }
    ]
  }
];

export default regions;