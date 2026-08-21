export type PropertyType = 'Apartment' | 'Villa' | 'House' | 'Condo' | 'Studio' | 'Office' | 'Penthouse' | 'Townhouse';

export type ListingStatus = 'Rent' | 'Sale';

export type BadgeType = 'Featured' | 'New' | 'Hot Deal' | 'Verified' | 'Exclusive';

export interface Property {
  id: string;
  name: string;
  tagline?: string;
  badge: BadgeType;
  badgeColor?: string;
  price: number;
  pricePeriod?: string; // e.g. "/ month" or "/ total"
  status: ListingStatus;
  type: PropertyType;
  location: {
    address: string;
    city: string;
    state: string;
    country: string;
    neighborhood?: string;
  };
  specs: {
    beds: number;
    baths: number;
    sqft: number;
    garages?: number;
    yearBuilt?: number;
  };
  mainImage: string;
  gallery: string[];
  description: string;
  amenities: string[];
  features: string[];
  featured?: boolean;
  agent: {
    name: string;
    title: string;
    avatar: string;
    phone: string;
    email: string;
    rating: number;
    reviewsCount: number;
  };
  virtualTourAvailable?: boolean;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface SearchFilterState {
  location: string;
  propertyType: string;
  priceRange: string;
  beds: string;
  listingStatus: 'All' | 'Rent' | 'Sale';
  searchQuery: string;
  sortBy: 'featured' | 'price-asc' | 'price-desc' | 'newest' | 'sqft-desc';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  content: string;
  avatar: string;
  verified?: boolean;
}

export interface TrustFeature {
  id: string;
  title: string;
  description: string;
  iconName: string;
  bgGradient: string;
}

export interface InquiryFormData {
  propertyId?: string;
  propertyName?: string;
  fullName: string;
  email: string;
  phone: string;
  message: string;
  moveInDate?: string;
  tourType?: 'in-person' | 'video-call';
}

export interface TourBookingData {
  propertyId: string;
  propertyName: string;
  date: string;
  timeSlot: string;
  tourType: 'in-person' | 'video';
  fullName: string;
  email: string;
  phone: string;
  notes?: string;
}

export interface ToastMessage {
  id: string;
  title: string;
  description?: string;
  type?: 'success' | 'info' | 'warning';
}

export interface InquiryRecord extends InquiryFormData {
  id: string;
  createdAt: string;
  status: 'new' | 'contacted' | 'closed';
}

export interface TourRecord extends TourBookingData {
  id: string;
  createdAt: string;
  status: 'upcoming' | 'completed' | 'cancelled';
}

export interface AdminUser {
  username: string;
  email: string;
  role: 'Super Admin' | 'Listing Manager';
}
