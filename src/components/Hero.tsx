import React from 'react';
import { MapPin, Home, DollarSign, Search, ChevronDown, Sparkles, Star } from 'lucide-react';
import { SearchFilterState } from '../types';

interface HeroProps {
  filters: SearchFilterState;
  onFilterChange: (key: keyof SearchFilterState, value: string) => void;
  onPerformSearch: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  filters,
  onFilterChange,
  onPerformSearch
}) => {
  const locations = [
    { value: 'New York', label: 'New York, USA' },
    { value: 'Miami', label: 'Miami, Florida' },
    { value: 'Chicago', label: 'Chicago, Illinois' },
    { value: 'Austin', label: 'Austin, Texas' },
    { value: 'Los Angeles', label: 'Los Angeles, California' },
    { value: 'San Francisco', label: 'San Francisco, California' }
  ];

  const propertyTypes = [
    { value: '', label: 'Any Type' },
    { value: 'Villa', label: 'Villa' },
    { value: 'Apartment', label: 'Apartment' },
    { value: 'House', label: 'House' },
    { value: 'Condo', label: 'Condo' },
    { value: 'Penthouse', label: 'Penthouse' }
  ];

  const priceRanges = [
    { value: '1000-5000', label: '$1,000 - $5,000' },
    { value: '0-2000', label: 'Under $2,000' },
    { value: '2000-4000', label: '$2,000 - $4,000' },
    { value: '4000-7000', label: '$4,000 - $7,000' },
    { value: '7000-15000', label: '$7,000+' }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onPerformSearch();
  };

  return (
    <section id="home" className="relative pt-2 pb-14 sm:pb-18 lg:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Container with Rounded Corners matching Reference */}
        <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#E6EEF8] via-[#EFF4FB] to-[#DDE7F6] min-h-[480px] sm:min-h-[520px] lg:min-h-[560px] flex flex-col justify-between p-6 sm:p-10 lg:p-12 border border-indigo-100/60 shadow-lg shadow-indigo-900/5">
          
          {/* Background House Architecture & Sunset Ocean View */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
              alt="Modern Luxury Villa Architecture with Pool and Sunset"
              className="w-full h-full object-cover object-right-bottom sm:object-right opacity-85"
              loading="eager"
            />
            {/* Subtle soft white/light-blue gradient mask to keep text ultra legible on left */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#EFF4FB] via-[#EFF4FB]/85 to-transparent w-full sm:w-[65%]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#EFF4FB]/60 via-transparent to-transparent" />
          </div>

          {/* Top Row: Tag on left, Trusted Families Badge on right */}
          <div className="relative z-10 flex items-center justify-between gap-4">
            {/* Left Dream • Search • Own Pill */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-indigo-100 shadow-xs text-indigo-700 text-xs font-semibold">
              <Home className="w-3.5 h-3.5 text-indigo-600" />
              <span>Dream • Search • Own</span>
            </div>

            {/* Right Floating "Trusted by 25K+ Happy Families" Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-white shadow-md">
              <div className="flex -space-x-2 overflow-hidden">
                <img
                  className="inline-block h-6 w-6 rounded-full border border-white object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                  alt="Avatar"
                />
                <img
                  className="inline-block h-6 w-6 rounded-full border border-white object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                  alt="Avatar"
                />
                <img
                  className="inline-block h-6 w-6 rounded-full border border-white object-cover"
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80"
                  alt="Avatar"
                />
              </div>
              <div className="text-[11px] font-medium text-slate-600">
                <span>Trusted by <strong className="text-slate-900 font-bold">25K+</strong> Happy Families</span>
              </div>
            </div>
          </div>

          {/* Main Headline & Subtitle */}
          <div className="relative z-10 my-auto py-6 max-w-xl">
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black text-slate-900 tracking-tight leading-[1.12]">
              Discover Spaces <br />
              That Feel Like{' '}
              <span className="text-indigo-600">
                Home
              </span>
            </h1>

            <p className="mt-3.5 text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-md">
              Find handpicked properties for rent or sale that match your lifestyle and budget.
            </p>
          </div>

          {/* Bottom Floating White Search Pill */}
          <div className="relative z-20 pt-4">
            <form
              onSubmit={handleFormSubmit}
              className="bg-white rounded-full p-2 sm:p-2.5 shadow-xl shadow-slate-900/10 border border-slate-100 max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-2 sm:gap-1"
            >
              {/* 1. Location */}
              <div className="w-full sm:flex-1 px-4 py-1.5 flex flex-col justify-center sm:border-r border-slate-100">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  Location
                </span>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-indigo-600 flex-shrink-0" />
                  <select
                    id="hero-location"
                    value={filters.location || 'New York'}
                    onChange={(e) => onFilterChange('location', e.target.value)}
                    className="w-full bg-transparent text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none cursor-pointer"
                  >
                    {locations.map((loc) => (
                      <option key={loc.value} value={loc.value}>
                        {loc.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* 2. Property Type */}
              <div className="w-full sm:flex-1 px-4 py-1.5 flex flex-col justify-center sm:border-r border-slate-100">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  Property Type
                </span>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <Home className="w-3.5 h-3.5 text-indigo-600 flex-shrink-0" />
                  <select
                    id="hero-property-type"
                    value={filters.propertyType}
                    onChange={(e) => onFilterChange('propertyType', e.target.value)}
                    className="w-full bg-transparent text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none cursor-pointer"
                  >
                    {propertyTypes.map((t) => (
                      <option key={t.value} value={t.value}>
                        {t.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* 3. Price Range */}
              <div className="w-full sm:flex-1 px-4 py-1.5 flex flex-col justify-center">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  Price Range
                </span>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <DollarSign className="w-3.5 h-3.5 text-indigo-600 flex-shrink-0" />
                  <select
                    id="hero-price-range"
                    value={filters.priceRange || '1000-5000'}
                    onChange={(e) => onFilterChange('priceRange', e.target.value)}
                    className="w-full bg-transparent text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none cursor-pointer"
                  >
                    {priceRanges.map((p) => (
                      <option key={p.value} value={p.value}>
                        {p.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Search Button */}
              <button
                type="submit"
                id="hero-search-button"
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-indigo-300 transition-all cursor-pointer active:scale-95 flex-shrink-0"
              >
                <Search className="w-4 h-4" />
                <span>Search</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
