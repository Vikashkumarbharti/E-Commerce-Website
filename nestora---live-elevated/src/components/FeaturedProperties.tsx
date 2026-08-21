import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Property } from '../types';
import { PropertyCard } from './PropertyCard';

interface FeaturedPropertiesProps {
  properties: Property[];
  favorites: string[];
  onToggleFavorite: (property: Property) => void;
  onSelectProperty: (property: Property) => void;
  onViewAll: () => void;
}

export const FeaturedProperties: React.FC<FeaturedPropertiesProps> = ({
  properties,
  favorites,
  onToggleFavorite,
  onSelectProperty,
  onViewAll
}) => {
  // Grab the first 3 core featured properties matching the reference
  const featuredList = properties.slice(0, 3);

  return (
    <section id="featured-section" className="py-8 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Title & View All */}
        <div className="flex items-center justify-between gap-4 mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Featured Properties
          </h2>

          <button
            id="view-all-featured-btn"
            onClick={onViewAll}
            className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-indigo-600 flex items-center gap-1.5 group cursor-pointer transition-colors"
          >
            <span>View All Properties</span>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-all" />
          </button>
        </div>

        {/* 3 Featured Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {featuredList.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              isFavorite={favorites.includes(property.id)}
              onToggleFavorite={onToggleFavorite}
              onSelectProperty={onSelectProperty}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
