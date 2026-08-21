import React from 'react';
import { X, Heart, Trash2, ArrowRight, Bed, Bath, Square, MapPin } from 'lucide-react';
import { Property } from '../types';

interface FavoritesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  favorites: Property[];
  onRemoveFavorite: (propertyId: string) => void;
  onSelectProperty: (property: Property) => void;
  onClearAll: () => void;
}

export const FavoritesDrawer: React.FC<FavoritesDrawerProps> = ({
  isOpen,
  onClose,
  favorites,
  onRemoveFavorite,
  onSelectProperty,
  onClearAll
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col border-l border-slate-100 animate-in slide-in-from-right duration-300">
          
          {/* Header */}
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center">
                <Heart className="w-5 h-5 fill-rose-500 text-rose-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-indigo-950">Saved Properties</h3>
                <p className="text-xs text-slate-400">{favorites.length} items in your wishlist</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close favorites"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {favorites.length > 0 ? (
              favorites.map((prop) => (
                <div
                  key={prop.id}
                  className="group bg-slate-50 hover:bg-white rounded-2xl p-3 border border-slate-100 hover:border-indigo-100 hover:shadow-lg hover:shadow-indigo-500/5 transition-all flex gap-3.5 relative"
                >
                  {/* Thumbnail */}
                  <div
                    onClick={() => {
                      onSelectProperty(prop);
                      onClose();
                    }}
                    className="w-24 h-20 rounded-xl overflow-hidden bg-slate-200 flex-shrink-0 cursor-pointer"
                  >
                    <img
                      src={prop.mainImage}
                      alt={prop.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <h4
                        onClick={() => {
                          onSelectProperty(prop);
                          onClose();
                        }}
                        className="text-sm font-bold text-indigo-950 line-clamp-1 hover:text-indigo-600 cursor-pointer"
                      >
                        {prop.name}
                      </h4>
                      <div className="flex items-center gap-1 text-[11px] text-slate-400 mt-0.5">
                        <MapPin className="w-3 h-3 text-indigo-600" />
                        <span className="line-clamp-1">{prop.location.city}, {prop.location.state}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <span className="text-sm font-bold text-indigo-600">
                        ${prop.price.toLocaleString()}{prop.pricePeriod || '/mo'}
                      </span>

                      <button
                        onClick={() => onRemoveFavorite(prop.id)}
                        className="text-slate-400 hover:text-rose-500 p-1 transition-colors cursor-pointer"
                        title="Remove from favorites"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 text-slate-400 flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-indigo-950">Your wishlist is empty</h4>
                  <p className="text-xs text-slate-400 mt-1 max-w-xs mx-auto">
                    Click the heart icon on any property card to save your favorite estates here for easy comparison.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          {favorites.length > 0 && (
            <div className="p-6 border-t border-slate-100 bg-slate-50/50 space-y-2">
              <button
                onClick={onClearAll}
                className="w-full py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:text-rose-600 hover:bg-rose-50 transition-colors"
              >
                Clear All Favorites
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
