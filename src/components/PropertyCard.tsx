import React from 'react';
import { Heart, MapPin, Bed, Bath, Maximize2, Sparkles } from 'lucide-react';
import { Property } from '../types';

interface PropertyCardProps {
  property: Property;
  isFavorite: boolean;
  onToggleFavorite: (property: Property) => void;
  onSelectProperty: (property: Property) => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  isFavorite,
  onToggleFavorite,
  onSelectProperty
}) => {
  const getBadgeStyle = (badge: string) => {
    switch (badge) {
      case 'Featured':
        return 'bg-[#EEECFC] text-[#5844DF]';
      case 'New':
        return 'bg-[#E6F8F0] text-[#159A60]';
      case 'Hot Deal':
        return 'bg-[#FEECEB] text-[#E03B31]';
      case 'Exclusive':
        return 'bg-[#FAF0FF] text-[#8C23C9]';
      default:
        return 'bg-[#EEECFC] text-[#5844DF]';
    }
  };

  return (
    <div
      id={`property-card-${property.id}`}
      className="bg-white rounded-[1.75rem] border border-slate-100 p-3.5 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
    >
      {/* Top Image Container */}
      <div className="relative h-48 sm:h-52 rounded-2xl overflow-hidden mb-3.5 bg-slate-100 flex-shrink-0">
        <img
          src={property.mainImage}
          alt={property.name}
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 cursor-pointer"
          onClick={() => onSelectProperty(property)}
          loading="lazy"
        />

        {/* Top Left Badge matching Reference Colors */}
        <div className="absolute top-3 left-3 z-10 pointer-events-none">
          <span
            className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold ${getBadgeStyle(
              property.badge
            )} shadow-xs`}
          >
            {property.badge === 'Featured' && <Sparkles className="w-3 h-3 text-[#5844DF]" />}
            {property.badge}
          </span>
        </div>

        {/* Top Right Favorite Heart Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(property);
          }}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          className="absolute top-3 right-3 z-10 w-8 h-8 bg-white/95 backdrop-blur rounded-full flex items-center justify-center text-slate-400 hover:text-rose-500 shadow-sm transition-all duration-200 active:scale-90 hover:scale-110 cursor-pointer"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              isFavorite ? 'fill-rose-500 text-rose-500' : 'text-slate-400 hover:text-rose-500'
            }`}
          />
        </button>
      </div>

      {/* Card Content Details */}
      <div className="px-1 flex-1 flex flex-col justify-between">
        <div>
          {/* Title */}
          <h3
            onClick={() => onSelectProperty(property)}
            className="font-bold text-base text-slate-900 group-hover:text-indigo-600 transition-colors cursor-pointer line-clamp-1"
          >
            {property.name}
          </h3>

          {/* Location */}
          <p className="text-slate-500 text-xs flex items-center gap-1 mt-1 mb-3">
            <MapPin className="w-3.5 h-3.5 text-indigo-600 flex-shrink-0" />
            <span className="line-clamp-1">
              {property.location.city}, {property.location.state}
            </span>
          </p>

          {/* Specs Row: Beds, Baths, Sqft */}
          <div className="flex items-center gap-3.5 text-xs text-slate-500 font-medium pb-3 border-b border-slate-100">
            <span className="flex items-center gap-1">
              <Bed className="w-3.5 h-3.5 text-slate-400" />
              {property.specs.beds} Beds
            </span>
            <span className="flex items-center gap-1">
              <Bath className="w-3.5 h-3.5 text-slate-400" />
              {property.specs.baths} Baths
            </span>
            <span className="flex items-center gap-1">
              <Maximize2 className="w-3.5 h-3.5 text-slate-400" />
              {property.specs.sqft.toLocaleString()} sqft
            </span>
          </div>
        </div>

        {/* Bottom Row: Price on left, View Details pill on right */}
        <div className="flex items-center justify-between pt-3 mt-auto">
          <div>
            <span className="text-slate-900 font-extrabold text-base sm:text-lg">
              ${property.price.toLocaleString()}
            </span>
            <span className="text-slate-400 font-normal text-xs ml-1">
              / month
            </span>
          </div>

          <button
            onClick={() => onSelectProperty(property)}
            className="bg-[#1e1e38] hover:bg-slate-900 text-white text-[11px] font-semibold px-4 py-2 rounded-full shadow-xs transition-all cursor-pointer active:scale-95"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};
