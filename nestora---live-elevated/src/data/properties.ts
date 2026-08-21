import { Property } from '../types';

export const PROPERTIES: Property[] = [
  {
    id: 'prop-1',
    name: 'Modern Ocean Villa',
    tagline: 'Panoramic coastal views with private infinity pool',
    badge: 'Featured',
    badgeColor: 'bg-indigo-600 text-white',
    price: 4200,
    pricePeriod: '/ month',
    status: 'Rent',
    type: 'Villa',
    location: {
      address: '742 Ocean Drive, Key Biscayne',
      city: 'Miami',
      state: 'Florida',
      country: 'USA',
      neighborhood: 'Key Biscayne'
    },
    specs: {
      beds: 5,
      baths: 4,
      sqft: 4200,
      garages: 3,
      yearBuilt: 2023
    },
    mainImage: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'Immerse yourself in coastal luxury at the Modern Ocean Villa. This bespoke waterfront residence showcases floor-to-ceiling glass walls, sweeping views of Biscayne Bay, an Italian chef’s kitchen with Sub-Zero appliances, and an expansive cantilevered deck with a temperature-regulated infinity pool.',
    amenities: [
      'Private Infinity Pool',
      'Waterfront Access',
      'Smart Home Automation',
      'Wine Cellar',
      'Chef Kitchen',
      'EV Charging Station',
      '24/7 Security System',
      'Private Dock'
    ],
    features: [
      'Direct ocean sunset views',
      'Triple-glazed soundproof glass',
      'Designer Italian marble countertops',
      'Primary suite with spa bath & steam shower'
    ],
    featured: true,
    agent: {
      name: 'Elena Rostova',
      title: 'Senior Luxury Property Advisor',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      phone: '+1 (305) 892-4110',
      email: 'elena.rostova@nestora.com',
      rating: 4.95,
      reviewsCount: 48
    },
    virtualTourAvailable: true,
    coordinates: { lat: 25.6983, lng: -80.1628 }
  },
  {
    id: 'prop-2',
    name: 'Urban Luxury Apartment',
    tagline: 'High-rise skyline sanctuary in downtown Gold Coast',
    badge: 'New',
    badgeColor: 'bg-emerald-600 text-white',
    price: 2850,
    pricePeriod: '/ month',
    status: 'Rent',
    type: 'Apartment',
    location: {
      address: '180 N Michigan Ave, Suite 3402',
      city: 'Chicago',
      state: 'Illinois',
      country: 'USA',
      neighborhood: 'The Loop / Gold Coast'
    },
    specs: {
      beds: 3,
      baths: 2,
      sqft: 2100,
      garages: 2,
      yearBuilt: 2024
    },
    mainImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1502005229762-ee1b2b8ab98f?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'Elevated urban living above Millennium Park. This pristine high-floor residence features custom white-oak herringbone flooring, customized Poliform cabinetry, motorized shades, and a private wraparound terrace boasting unobstructed panoramic vistas of Lake Michigan and the city skyline.',
    amenities: [
      'Panoramic City & Lake Views',
      '24/7 Concierge & Valet',
      'Sky Lounge & Rooftop Pool',
      'Fitness Center & Yoga Studio',
      'Co-working Lounge',
      'Pet Spa & Dog Run',
      'Secured Parking'
    ],
    features: [
      'Floor-to-ceiling glass curtain walls',
      'Custom Miele kitchen suite',
      'Motorized solar shades throughout',
      'Private balcony with lake breeze'
    ],
    featured: true,
    agent: {
      name: 'Marcus Vance',
      title: 'Principal Residential Specialist',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      phone: '+1 (312) 440-9821',
      email: 'marcus.vance@nestora.com',
      rating: 4.9,
      reviewsCount: 36
    },
    virtualTourAvailable: true,
    coordinates: { lat: 41.8864, lng: -87.6247 }
  },
  {
    id: 'prop-3',
    name: 'Sunny Autumn House',
    tagline: 'Modern hill country retreat with mature oaks and natural light',
    badge: 'Hot Deal',
    badgeColor: 'bg-rose-500 text-white',
    price: 3100,
    pricePeriod: '/ month',
    status: 'Rent',
    type: 'House',
    location: {
      address: '2804 Westlake Hills Blvd',
      city: 'Austin',
      state: 'Texas',
      country: 'USA',
      neighborhood: 'Westlake Hills'
    },
    specs: {
      beds: 4,
      baths: 3,
      sqft: 3600,
      garages: 2,
      yearBuilt: 2022
    },
    mainImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'Designed by renowned Texas architects, this luminous modern craftsman residence blends warm cedar wood, smooth limestone, and soaring vaulted ceilings. Enjoy quiet mornings on the screened cedar porch or host evenings around the outdoor firepit nestled beneath heritage oaks.',
    amenities: [
      'Private Landscaped Backyard',
      'Custom Heated Pool & Spa',
      'Screened Outdoor Porch',
      'Solar Panel Array & Tesla Powerwall',
      'Custom Home Office',
      'Walk-in Pantry & Butler Station'
    ],
    features: [
      'Zero-threshold indoor/outdoor sliding doors',
      'Reclaimed white oak wood finishes',
      'Top-rated Eanes ISD school district',
      'Energy Star certified sustainable home'
    ],
    featured: true,
    agent: {
      name: 'Chloe Bennett',
      title: 'Luxury Estates Director',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
      phone: '+1 (512) 670-3419',
      email: 'chloe.bennett@nestora.com',
      rating: 5.0,
      reviewsCount: 52
    },
    virtualTourAvailable: true,
    coordinates: { lat: 30.2917, lng: -97.8012 }
  },
  {
    id: 'prop-4',
    name: 'The Glass Horizon Penthouse',
    tagline: 'Iconic Central Park South duplex penthouse',
    badge: 'Exclusive',
    badgeColor: 'bg-purple-700 text-white',
    price: 8500,
    pricePeriod: '/ month',
    status: 'Rent',
    type: 'Penthouse',
    location: {
      address: '220 Central Park South, PH-A',
      city: 'New York',
      state: 'New York',
      country: 'USA',
      neighborhood: 'Manhattan'
    },
    specs: {
      beds: 4,
      baths: 5,
      sqft: 5100,
      garages: 2,
      yearBuilt: 2023
    },
    mainImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'An architectural tour de force overlooking Central Park. Featuring a 60-foot double-height salon, private elevator access, primary wing with dual dressing suites, and a landscaped private terrace overlooking the Manhattan skyline.',
    amenities: [
      'Full Central Park Views',
      'Private Keyed Elevator',
      'White Glove Doorman & Valet',
      'Private Terrace with Wet Bar',
      'Custom Wine Storage',
      'Bespoke Sound System'
    ],
    features: [
      'Direct Central Park North-facing panorama',
      'Calacatta gold marble master bathrooms',
      'Integrated Lutron lighting & climate control'
    ],
    featured: false,
    agent: {
      name: 'Marcus Vance',
      title: 'Principal Residential Specialist',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      phone: '+1 (212) 555-0199',
      email: 'marcus.vance@nestora.com',
      rating: 4.9,
      reviewsCount: 36
    },
    virtualTourAvailable: true,
    coordinates: { lat: 40.7667, lng: -73.9774 }
  },
  {
    id: 'prop-5',
    name: 'Bel-Air Minimalist Haven',
    tagline: 'Serene contemporary villa nestled in lush canyon surroundings',
    badge: 'Featured',
    badgeColor: 'bg-indigo-600 text-white',
    price: 6800,
    pricePeriod: '/ month',
    status: 'Rent',
    type: 'Villa',
    location: {
      address: '10410 Bellagio Road',
      city: 'Los Angeles',
      state: 'California',
      country: 'USA',
      neighborhood: 'Bel-Air'
    },
    specs: {
      beds: 5,
      baths: 6,
      sqft: 5800,
      garages: 4,
      yearBuilt: 2023
    },
    mainImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'An organic modern masterpiece celebrating natural stone, warm oak, and Japanese-inspired Zen courtyards. Features an expansive zero-edge pool, private screening room, sauna, and panoramic canyon greenery.',
    amenities: [
      'Zero-Edge Pool & Hot Tub',
      'Private Home Cinema',
      'Zen Garden & Waterfall',
      'Infrared Sauna & Steam Room',
      'Gated Motor Court',
      'Security Post & Cameras'
    ],
    features: [
      'Indoor-outdoor seamless glass pockets',
      'Custom bronze architectural finishes',
      'Cul-de-sac private hilltop location'
    ],
    featured: true,
    agent: {
      name: 'Chloe Bennett',
      title: 'Luxury Estates Director',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
      phone: '+1 (310) 840-7712',
      email: 'chloe.bennett@nestora.com',
      rating: 5.0,
      reviewsCount: 52
    },
    virtualTourAvailable: true,
    coordinates: { lat: 34.0837, lng: -118.4468 }
  },
  {
    id: 'prop-6',
    name: 'Pacific Heights Townhome',
    tagline: 'Classic San Francisco elegance reimagined for modern luxury',
    badge: 'Verified',
    badgeColor: 'bg-blue-600 text-white',
    price: 4600,
    pricePeriod: '/ month',
    status: 'Rent',
    type: 'Townhouse',
    location: {
      address: '2640 Broadway Street',
      city: 'San Francisco',
      state: 'California',
      country: 'USA',
      neighborhood: 'Pacific Heights'
    },
    specs: {
      beds: 4,
      baths: 4,
      sqft: 3800,
      garages: 2,
      yearBuilt: 2021
    },
    mainImage: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'Commanding Golden Gate and Bay views from all four levels. This completely renovated Pacific Heights Victorian features an elevator, radiant floor heating, custom Boffi kitchen, and a private rear English garden.',
    amenities: [
      'Golden Gate Bridge Views',
      'Private Elevator to all 4 levels',
      'Private English Courtyard Garden',
      'Radiant Heated Floors',
      'Wine Tasting Room',
      '2-Car Attached Garage'
    ],
    features: [
      'Preserved architectural crown moldings',
      'Boffi designer kitchen with Gaggenau appliances',
      'Rooftop observation deck'
    ],
    featured: false,
    agent: {
      name: 'Elena Rostova',
      title: 'Senior Luxury Property Advisor',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      phone: '+1 (415) 902-1200',
      email: 'elena.rostova@nestora.com',
      rating: 4.95,
      reviewsCount: 48
    },
    virtualTourAvailable: true,
    coordinates: { lat: 37.7941, lng: -122.4387 }
  },
  {
    id: 'prop-7',
    name: 'Emerald Ridge Chalet',
    tagline: 'Ski-in / ski-out modern timber estate with hot spring tub',
    badge: 'Hot Deal',
    badgeColor: 'bg-rose-500 text-white',
    price: 5200,
    pricePeriod: '/ month',
    status: 'Rent',
    type: 'House',
    location: {
      address: '410 Red Mountain Road',
      city: 'Aspen',
      state: 'Colorado',
      country: 'USA',
      neighborhood: 'Red Mountain'
    },
    specs: {
      beds: 5,
      baths: 5,
      sqft: 4600,
      garages: 2,
      yearBuilt: 2022
    },
    mainImage: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'A striking blend of alpine grandeur and modern glass architecture. Features heated driveway, ski prep locker room with boot warmers, sunken fire lounge, and an outdoor cedar hot tub with views of Ajax Mountain.',
    amenities: [
      'Ski-in / Ski-out Access',
      'Heated Driveway & Walkways',
      'Ski & Snowboard Equipment Room',
      'Custom Outdoor Cedar Hot Tub',
      'Floor-to-Ceiling Stone Fireplace',
      'Sauna & Steam Bath'
    ],
    features: [
      'Triple-height vaulted timber ceilings',
      'Unbroken views of Aspen Mountain',
      'Smart temperature zone control'
    ],
    featured: false,
    agent: {
      name: 'Marcus Vance',
      title: 'Principal Residential Specialist',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      phone: '+1 (970) 925-1100',
      email: 'marcus.vance@nestora.com',
      rating: 4.9,
      reviewsCount: 36
    },
    virtualTourAvailable: true,
    coordinates: { lat: 39.1911, lng: -106.8175 }
  },
  {
    id: 'prop-8',
    name: 'Waikiki Azure Beachfront Villa',
    tagline: 'Private beach access with tropical garden oasis',
    badge: 'Exclusive',
    badgeColor: 'bg-purple-700 text-white',
    price: 7400,
    pricePeriod: '/ month',
    status: 'Rent',
    type: 'Villa',
    location: {
      address: '3200 Kahala Avenue',
      city: 'Honolulu',
      state: 'Hawaii',
      country: 'USA',
      neighborhood: 'Kahala'
    },
    specs: {
      beds: 6,
      baths: 6,
      sqft: 6100,
      garages: 3,
      yearBuilt: 2023
    },
    mainImage: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'Direct sandy beachfront estate on coveted Kahala Avenue. Features seamless open-air pavilion architecture, lush koi ponds, tiki torches, outdoor shower pavilions, and a resort-style saltwater swimming pool.',
    amenities: [
      'Direct Private Beachfront',
      'Saltwater Resort Pool & Cabana',
      'Lush Tropical Landscape & Koi Pond',
      'Outdoor Kitchen & Lanai',
      'Gated Motor Court',
      'Surfing & Paddleboard Storage'
    ],
    features: [
      'Pocketing Fleetwood glass door systems',
      'Custom Koa wood carpentry',
      'Private primary suite lanai with ocean sunrise'
    ],
    featured: false,
    agent: {
      name: 'Chloe Bennett',
      title: 'Luxury Estates Director',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
      phone: '+1 (808) 732-9011',
      email: 'chloe.bennett@nestora.com',
      rating: 5.0,
      reviewsCount: 52
    },
    virtualTourAvailable: true,
    coordinates: { lat: 21.2612, lng: -157.7844 }
  },
  {
    id: 'prop-9',
    name: 'Beacon Hill Brownstone Loft',
    tagline: 'Historic charm meets state-of-the-art Italian design',
    badge: 'New',
    badgeColor: 'bg-emerald-600 text-white',
    price: 2450,
    pricePeriod: '/ month',
    status: 'Rent',
    type: 'Condo',
    location: {
      address: '72 Mount Vernon Street, Apt 3',
      city: 'Boston',
      state: 'Massachusetts',
      country: 'USA',
      neighborhood: 'Beacon Hill'
    },
    specs: {
      beds: 2,
      baths: 2,
      sqft: 1650,
      garages: 1,
      yearBuilt: 2021
    },
    mainImage: 'https://images.unsplash.com/photo-1502005229762-ee1b2b8ab98f?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1502005229762-ee1b2b8ab98f?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'Located on iconic gas-lit Mount Vernon Street, this refined loft residence combines exposed antique brickwork with contemporary quartz countertops, gas fireplace, and a common rooftop terrace with Boston Common views.',
    amenities: [
      'Historic Gas-Lit Street Location',
      'Common Rooftop with City Views',
      'Exposed Brick & Gas Fireplace',
      'Custom Built-in Bookshelves',
      'In-Unit Bosch Washer/Dryer',
      'Storage Unit Included'
    ],
    features: [
      '11-foot ceilings with exposed original beams',
      'Primary bathroom with soaking tub',
      'Steps from Charles Street boutiques and dining'
    ],
    featured: false,
    agent: {
      name: 'Elena Rostova',
      title: 'Senior Luxury Property Advisor',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      phone: '+1 (617) 227-4001',
      email: 'elena.rostova@nestora.com',
      rating: 4.95,
      reviewsCount: 48
    },
    virtualTourAvailable: false,
    coordinates: { lat: 42.3588, lng: -71.0678 }
  },
  {
    id: 'prop-10',
    name: 'Silicon Valley Executive Studio',
    tagline: 'High-tech turnkey studio loft with fiber internet & smart hub',
    badge: 'Verified',
    badgeColor: 'bg-blue-600 text-white',
    price: 1950,
    pricePeriod: '/ month',
    status: 'Rent',
    type: 'Studio',
    location: {
      address: '350 University Avenue',
      city: 'Palo Alto',
      state: 'California',
      country: 'USA',
      neighborhood: 'Downtown Palo Alto'
    },
    specs: {
      beds: 1,
      baths: 1,
      sqft: 850,
      garages: 1,
      yearBuilt: 2024
    },
    mainImage: 'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1502005229762-ee1b2b8ab98f?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'Engineered for founders and tech executives, this premium studio features custom Murphy bed system, acoustic soundproofing, 10Gbps fiber hookup, and dedicated concierge access in the heart of Palo Alto.',
    amenities: [
      '10Gbps Ultra-Fast Fiber',
      'Smart Voice & App Automation',
      'Acoustic Studio Soundproofing',
      'Rooftop Co-Working Cabana',
      'Secure Bike & EV Storage'
    ],
    features: [
      'Italian transformable furniture suite',
      'Air filtration HEPA H13 system',
      'Walk to Caltrain & Stanford campus'
    ],
    featured: false,
    agent: {
      name: 'Marcus Vance',
      title: 'Principal Residential Specialist',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      phone: '+1 (650) 321-4900',
      email: 'marcus.vance@nestora.com',
      rating: 4.9,
      reviewsCount: 36
    },
    virtualTourAvailable: true,
    coordinates: { lat: 37.4443, lng: -122.1611 }
  },
  {
    id: 'prop-11',
    name: 'Cherry Creek Modern Residence',
    tagline: 'Sun-drenched architectural home with mountain backdrop',
    badge: 'Featured',
    badgeColor: 'bg-indigo-600 text-white',
    price: 3400,
    pricePeriod: '/ month',
    status: 'Rent',
    type: 'House',
    location: {
      address: '290 Cook Street',
      city: 'Denver',
      state: 'Colorado',
      country: 'USA',
      neighborhood: 'Cherry Creek North'
    },
    specs: {
      beds: 4,
      baths: 4,
      sqft: 3400,
      garages: 2,
      yearBuilt: 2023
    },
    mainImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'Sophisticated living in Denver’s most walkable luxury enclave. Features open-concept steel & glass staircase, Wolf/Sub-Zero appliances, rooftop terrace with Rocky Mountain views, and private courtyard.',
    amenities: [
      'Rocky Mountain Panoramic Views',
      'Walk to Cherry Creek Shopping',
      'Private Rooftop Fire Pit',
      'Custom Finished Basement',
      'Heated 2-Car Garage'
    ],
    features: [
      'Custom dark quartz kitchen island',
      'Primary retreat with double vanity and steam room',
      'Floor-to-ceiling glass atrium'
    ],
    featured: false,
    agent: {
      name: 'Chloe Bennett',
      title: 'Luxury Estates Director',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
      phone: '+1 (303) 780-9944',
      email: 'chloe.bennett@nestora.com',
      rating: 5.0,
      reviewsCount: 52
    },
    virtualTourAvailable: true,
    coordinates: { lat: 39.7188, lng: -104.9547 }
  },
  {
    id: 'prop-12',
    name: 'La Jolla Pacific Cliffside Estate',
    tagline: 'Breathtaking ocean bluff setting with private tennis court',
    badge: 'Exclusive',
    badgeColor: 'bg-purple-700 text-white',
    price: 9200,
    pricePeriod: '/ month',
    status: 'Rent',
    type: 'Villa',
    location: {
      address: '7840 Camino de la Costa',
      city: 'San Diego',
      state: 'California',
      country: 'USA',
      neighborhood: 'La Jolla'
    },
    specs: {
      beds: 6,
      baths: 7,
      sqft: 6800,
      garages: 4,
      yearBuilt: 2024
    },
    mainImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'Perched directly above the Pacific surf, this iconic estate provides unmatched whale watching and sunset vistas. Features oceanfront infinity edge pool, lighted championship tennis court, wine vault, and private security gate.',
    amenities: [
      'Cliffside Oceanfront Setting',
      'Infinity Edge Coastal Pool',
      'Championship Tennis Court',
      'Temperature Controlled 1,000-Bottle Wine Vault',
      '4-Car Subterranean Motor Garage',
      'Private Security Gate & System'
    ],
    features: [
      'Unobstructed 180-degree Pacific ocean panorama',
      'Integrated indoor-outdoor acoustic system',
      'Private guest casita with kitchen'
    ],
    featured: false,
    agent: {
      name: 'Elena Rostova',
      title: 'Senior Luxury Property Advisor',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      phone: '+1 (858) 454-9002',
      email: 'elena.rostova@nestora.com',
      rating: 4.95,
      reviewsCount: 48
    },
    virtualTourAvailable: true,
    coordinates: { lat: 32.8328, lng: -117.2713 }
  }
];
