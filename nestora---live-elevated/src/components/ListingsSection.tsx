import React, { useMemo } from 'react';
import { Search, SlidersHorizontal, MapPin, DollarSign, Bed, RotateCcw, Building } from 'lucide-react';
import { Property, SearchFilterState } from '../types';
import { PropertyCard } from './PropertyCard';

interface ListingsSectionProps {
  properties: Property[];
  filters: SearchFilterState;
  onFilterChange: (key: keyof SearchFilterState, value: any) => void;
  onResetFilters: () => void;
  favorites: string[];
  onToggleFavorite: (property: Property) => void;
  onSelectProperty: (property: Property) => void;
}

export const ListingsSection: React.FC<ListingsSectionProps> = ({
  properties,
  filters,
  onFilterChange,
  onResetFilters,
  favorites,
  onToggleFavorite,
  onSelectProperty
}) => {
  const propertyTypeTabs = ['All', 'Villa', 'Apartment', 'House', 'Penthouse', 'Condo', 'Studio'];

  const filteredProperties = useMemo(() => {
    return properties.filter((prop) => {
      // Search query (name, city, address, description)
      if (filters.searchQuery.trim()) {
        const query = filters.searchQuery.toLowerCase();
        const matchesQuery =
          prop.name.toLowerCase().includes(query) ||
          prop.location.city.toLowerCase().includes(query) ||
          prop.location.state.toLowerCase().includes(query) ||
          prop.location.address.toLowerCase().includes(query) ||
          prop.type.toLowerCase().includes(query) ||
          prop.description.toLowerCase().includes(query);
        if (!matchesQuery) return false;
      }

      // Location filter
      if (filters.location && filters.location !== 'All Locations') {
        const locLower = filters.location.toLowerCase();
        const matchesLoc =
          prop.location.city.toLowerCase().includes(locLower) ||
          prop.location.state.toLowerCase().includes(locLower);
        if (!matchesLoc) return false;
      }

      // Property Type filter
      if (filters.propertyType && filters.propertyType !== 'All' && filters.propertyType !== 'Any Type') {
        if (prop.type.toLowerCase() !== filters.propertyType.toLowerCase()) {
          return false;
        }
      }

      // Bedroom filter
      if (filters.beds && filters.beds !== 'any') {
        const minBeds = parseInt(filters.beds, 10);
        if (!isNaN(minBeds) && prop.specs.beds < minBeds) {
          return false;
        }
      }

      // Price range filter
      if (filters.priceRange && filters.priceRange !== 'All Prices') {
        if (filters.priceRange === '1000-5000') {
          if (prop.price < 1000 || prop.price > 5000) return false;
        } else if (filters.priceRange === '0-2000') {
          if (prop.price > 2000) return false;
        } else if (filters.priceRange === '2000-4000') {
          if (prop.price < 2000 || prop.price > 4000) return false;
        } else if (filters.priceRange === '4000-7000') {
          if (prop.price < 4000 || prop.price > 7000) return false;
        } else if (filters.priceRange === '7000-15000') {
          if (prop.price < 7000) return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'price-asc') return a.price - b.price;
      if (filters.sortBy === 'price-desc') return b.price - a.price;
      if (filters.sortBy === 'sqft-desc') return b.specs.sqft - a.specs.sqft;
      if (filters.sortBy === 'newest') return (b.specs.yearBuilt || 2024) - (a.specs.yearBuilt || 2024);
      return 0; // featured default
    });
  }, [properties, filters]);

  const hasActiveFilters =
    Boolean(filters.searchQuery) ||
    Boolean(filters.location) ||
    (Boolean(filters.propertyType) && filters.propertyType !== 'All' && filters.propertyType !== 'Any Type') ||
    (Boolean(filters.priceRange) && filters.priceRange !== 'All Prices') ||
    (Boolean(filters.beds) && filters.beds !== 'any');

  return (
    <section id="listings" className="py-14 lg:py-24 bg-[#F8FAFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-indigo-600 font-bold text-xs uppercase tracking-[0.2em] mb-2 block">
              Explore Our Collection
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-indigo-950 tracking-tight">
              All Available Listings
            </h2>
            <p className="text-sm sm:text-base text-slate-500 mt-1">
              Showing <span className="font-bold text-indigo-950">{filteredProperties.length}</span> verified luxury estates
            </p>
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-3">
            <span className="text-xs sm:text-sm font-semibold text-slate-400">Sort by:</span>
            <select
              value={filters.sortBy}
              onChange={(e) => onFilterChange('sortBy', e.target.value)}
              className="bg-white border border-slate-200 text-slate-800 text-xs sm:text-sm font-semibold rounded-xl px-3.5 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-xs cursor-pointer"
            >
              <option value="featured">Featured First</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="sqft-desc">Largest Area (sqft)</option>
              <option value="newest">Newest Built</option>
            </select>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white rounded-[2rem] p-4 sm:p-5 border border-slate-100 shadow-sm mb-8 space-y-4">
          
          {/* Top row: Keyword Search + Quick Bed Selection */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={filters.searchQuery}
                onChange={(e) => onFilterChange('searchQuery', e.target.value)}
                placeholder="Search by villa name, city, Miami, Austin, pool, view..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500 transition-all"
              />
              {filters.searchQuery && (
                <button
                  onClick={() => onFilterChange('searchQuery', '')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-semibold cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>

            {/* City / Location Select */}
            <div className="md:col-span-3 relative">
              <div className="relative">
                <MapPin className="w-4 h-4 text-indigo-600 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <select
                  value={filters.location}
                  onChange={(e) => onFilterChange('location', e.target.value)}
                  className="w-full pl-9 pr-8 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-sm font-semibold text-slate-800 focus:outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500 appearance-none cursor-pointer"
                >
                  <option value="">All Locations</option>
                  <option value="Miami">Miami, FL</option>
                  <option value="Chicago">Chicago, IL</option>
                  <option value="Austin">Austin, TX</option>
                  <option value="New York">New York, NY</option>
                  <option value="Los Angeles">Los Angeles, CA</option>
                  <option value="San Francisco">San Francisco, CA</option>
                  <option value="Aspen">Aspen, CO</option>
                  <option value="Honolulu">Honolulu, HI</option>
                  <option value="Boston">Boston, MA</option>
                  <option value="San Diego">San Diego, CA</option>
                </select>
              </div>
            </div>

            {/* Bedrooms Select */}
            <div className="md:col-span-3 relative">
              <div className="relative">
                <Bed className="w-4 h-4 text-indigo-600 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <select
                  value={filters.beds}
                  onChange={(e) => onFilterChange('beds', e.target.value)}
                  className="w-full pl-9 pr-8 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-sm font-semibold text-slate-800 focus:outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500 appearance-none cursor-pointer"
                >
                  <option value="any">Any Bedrooms</option>
                  <option value="2">2+ Bedrooms</option>
                  <option value="3">3+ Bedrooms</option>
                  <option value="4">4+ Bedrooms</option>
                  <option value="5">5+ Bedrooms</option>
                </select>
              </div>
            </div>

          </div>

          {/* Bottom row: Category Pills & Reset */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-50">
            {/* Category tabs */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              {propertyTypeTabs.map((type) => {
                const isSelected =
                  (type === 'All' && (!filters.propertyType || filters.propertyType === 'All' || filters.propertyType === 'Any Type')) ||
                  filters.propertyType === type;
                return (
                  <button
                    key={type}
                    onClick={() => onFilterChange('propertyType', type === 'All' ? '' : type)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                        : 'bg-slate-50 text-slate-500 hover:bg-indigo-50 hover:text-indigo-600'
                    }`}
                  >
                    {type}
                  </button>
                );
              })}
            </div>

            {/* Reset Filters button */}
            {hasActiveFilters && (
              <button
                onClick={onResetFilters}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-600 hover:text-rose-700 px-3 py-1.5 rounded-xl hover:bg-rose-50 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>

        </div>

        {/* Listings Grid or Empty State */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                isFavorite={favorites.includes(property.id)}
                onToggleFavorite={onToggleFavorite}
                onSelectProperty={onSelectProperty}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-[2rem] p-12 text-center border border-slate-100 shadow-sm max-w-lg mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-indigo-950">No properties found</h3>
            <p className="text-sm text-slate-500 mt-2 leading-relaxed">
              We couldn't find any listings matching your specific filter criteria. Try expanding your search or clearing active filters.
            </p>
            <button
              onClick={onResetFilters}
              className="mt-6 px-6 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold shadow-md shadow-indigo-200 transition-all cursor-pointer"
            >
              Show All Properties
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
