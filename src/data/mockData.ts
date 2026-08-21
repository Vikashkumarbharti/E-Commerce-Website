import { Testimonial, TrustFeature } from '../types';

export const TRUST_FEATURES: TrustFeature[] = [
  {
    id: 'feature-1',
    title: 'Verified Properties',
    description: 'All properties are verified for your peace of mind.',
    iconName: 'ShieldCheck',
    bgGradient: 'from-indigo-500/10 to-purple-500/10 text-indigo-600'
  },
  {
    id: 'feature-2',
    title: 'Safe & Secure',
    description: 'Your safety is our priority in every transaction.',
    iconName: 'Lock',
    bgGradient: 'from-purple-500/10 to-pink-500/10 text-purple-600'
  },
  {
    id: 'feature-3',
    title: '24/7 Support',
    description: 'Our team is here to help you anytime, anywhere.',
    iconName: 'Headphones',
    bgGradient: 'from-blue-500/10 to-indigo-500/10 text-blue-600'
  },
  {
    id: 'feature-4',
    title: 'Best Price Guarantee',
    description: 'Get the best deals at the best prices.',
    iconName: 'Sparkles',
    bgGradient: 'from-amber-500/10 to-purple-500/10 text-violet-600'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Sarah Johnson',
    role: 'Creative Director',
    location: 'Miami, FL',
    rating: 5,
    content: 'Nestora made finding our dream home so easy. The process was smooth and fully professional.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    verified: true
  },
  {
    id: 'test-2',
    name: 'David Miller',
    role: 'Tech Executive',
    location: 'Chicago, IL',
    rating: 5,
    content: 'Amazing service and verified listings. I got the perfect apartment in just a few days!',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    verified: true
  },
  {
    id: 'test-3',
    name: 'Emily Carter',
    role: 'Interior Designer',
    location: 'Austin, TX',
    rating: 5,
    content: 'A trusted platform with real value. Highly recommended for anyone looking for a new home.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
    verified: true
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Search & Explore',
    description: 'Browse thousands of verified listings in your desired location.',
    icon: 'Search',
    color: 'from-blue-600 to-indigo-600'
  },
  {
    step: '02',
    title: 'Choose Your Property',
    description: 'Compare options and find the perfect space for your lifestyle.',
    icon: 'Home',
    color: 'from-indigo-600 to-purple-600'
  },
  {
    step: '03',
    title: 'Move In & Enjoy',
    description: 'Complete the process and start your new journey with confidence.',
    icon: 'KeyRound',
    color: 'from-purple-600 to-violet-600'
  }
];

export const WHY_CHOOSE_POINTS = [
  'Wide range of premium rental options',
  'Flexible rent terms & easy agreements',
  'Personalized recommendations',
  'Trusted by thousands of happy clients'
];

export const BLOG_POSTS = [
  {
    id: 'blog-1',
    title: '2026 Luxury Real Estate Outlook: Waterfront & Smart Living Trends',
    category: 'Market Trends',
    readTime: '4 min read',
    date: 'Aug 14, 2026',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Explore how modern architecture, sustainability, and private wellness facilities are defining prime residential investments this year.'
  },
  {
    id: 'blog-2',
    title: 'How to Choose the Perfect Luxury Penthouse: Checklist & Guide',
    category: 'Buyer Guide',
    readTime: '6 min read',
    date: 'Aug 08, 2026',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Key factors when evaluating high-rise penthouses, from terrace engineering and HOA bylaws to private elevator keyed security.'
  },
  {
    id: 'blog-3',
    title: 'Architectural Spotlight: The Evolution of Seamless Indoor-Outdoor Spaces',
    category: 'Design & Architecture',
    readTime: '5 min read',
    date: 'Jul 29, 2026',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Modern cantilevered roofs, Fleetwood pocket doors, and climate-matched landscaping create effortless continuity.'
  }
];

export const COMPANY_SERVICES = [
  {
    id: 'srv-1',
    title: 'Luxury Property Rental',
    description: 'Bespoke concierge search for high-end residential leases and corporate relocations with flexible terms.',
    icon: 'Key'
  },
  {
    id: 'srv-2',
    title: 'Prime Residential Acquisition',
    description: 'Expert negotiation, private off-market listings access, and comprehensive due diligence for buyers.',
    icon: 'Building2'
  },
  {
    id: 'srv-3',
    title: 'Property Management & Asset Care',
    description: 'White-glove tenant management, maintenance, revenue optimization, and 24/7 emergency care.',
    icon: 'ShieldCheck'
  },
  {
    id: 'srv-4',
    title: 'Virtual VR & 3D Tours',
    description: 'Ultra-high-definition interactive walkthroughs allowing international clients to inspect estates remotely.',
    icon: 'Glasses'
  }
];
