import React, { useState, useEffect } from 'react';
import { X, Plus, Trash2, Image as ImageIcon, Building, MapPin, DollarSign, Bed, Bath, Square, Check, Sparkles } from 'lucide-react';
import { Property, PropertyType, ListingStatus, BadgeType } from '../types';

interface PropertyFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (property: Property) => void;
  initialProperty?: Property | null;
}

const PROPERTY_TYPES: PropertyType[] = [
  'Apartment',
  'Villa',
  'House',
  'Condo',
  'Studio',
  'Office',
  'Penthouse',
  'Townhouse'
];

const BADGES: BadgeType[] = ['Featured', 'New', 'Hot Deal', 'Verified', 'Exclusive'];

const SAMPLE_IMAGES = [
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
];

export const PropertyFormModal: React.FC<PropertyFormModalProps> = ({
  isOpen,
  onClose,
  onSave,
  initialProperty
}) => {
  const isEditing = Boolean(initialProperty);

  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [badge, setBadge] = useState<BadgeType>('Featured');
  const [price, setPrice] = useState<number>(3500);
  const [pricePeriod, setPricePeriod] = useState('/ month');
  const [status, setStatus] = useState<ListingStatus>('Rent');
  const [type, setType] = useState<PropertyType>('Apartment');
  
  // Location
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('Miami');
  const [state, setState] = useState('FL');
  const [country, setCountry] = useState('United States');

  // Specs
  const [beds, setBeds] = useState(3);
  const [baths, setBaths] = useState(2);
  const [sqft, setSqft] = useState(1850);
  const [garages, setGarages] = useState(2);

  // Media
  const [mainImage, setMainImage] = useState(SAMPLE_IMAGES[0]);
  const [galleryInput, setGalleryInput] = useState('');
  const [gallery, setGallery] = useState<string[]>([]);

  // Details
  const [description, setDescription] = useState('');
  const [amenityInput, setAmenityInput] = useState('');
  const [amenities, setAmenities] = useState<string[]>([]);
  const [featured, setFeatured] = useState(false);

  // Agent
  const [agentName, setAgentName] = useState('Elena Vance');
  const [agentTitle] = useState('Senior Luxury Partner');
  const [agentAvatar] = useState('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80');
  const [agentPhone] = useState('+1 (555) 234-8900');
  const [agentEmail] = useState('elena@nestora.com');

  useEffect(() => {
    if (initialProperty) {
      setName(initialProperty.name);
      setTagline(initialProperty.tagline || '');
      setBadge(initialProperty.badge);
      setPrice(initialProperty.price);
      setPricePeriod(initialProperty.pricePeriod || (initialProperty.status === 'Rent' ? '/ month' : ' total'));
      setStatus(initialProperty.status);
      setType(initialProperty.type);
      setAddress(initialProperty.location.address);
      setCity(initialProperty.location.city);
      setState(initialProperty.location.state);
      setCountry(initialProperty.location.country);
      setBeds(initialProperty.specs.beds);
      setBaths(initialProperty.specs.baths);
      setSqft(initialProperty.specs.sqft);
      setGarages(initialProperty.specs.garages || 1);
      setMainImage(initialProperty.mainImage);
      setGallery(initialProperty.gallery || [initialProperty.mainImage]);
      setDescription(initialProperty.description);
      setAmenities(initialProperty.amenities || []);
      setFeatured(Boolean(initialProperty.featured));
      setAgentName(initialProperty.agent.name);
    } else {
      // Reset form defaults for new property
      setName('');
      setTagline('');
      setBadge('New');
      setPrice(4200);
      setPricePeriod('/ month');
      setStatus('Rent');
      setType('Apartment');
      setAddress('742 Evergreen Terrace');
      setCity('Miami');
      setState('FL');
      setCountry('United States');
      setBeds(3);
      setBaths(2);
      setSqft(1650);
      setGarages(2);
      setMainImage(SAMPLE_IMAGES[Math.floor(Math.random() * SAMPLE_IMAGES.length)]);
      setGallery([SAMPLE_IMAGES[0], SAMPLE_IMAGES[1]]);
      setDescription('Sophisticated architectural residence featuring panoramic views, floor-to-ceiling double-glazed windows, state-of-the-art chef kitchen, and private secure balcony.');
      setAmenities(['Private Balcony', 'Floor-to-Ceiling Windows', 'Smart Home Tech', 'Concierge Service', 'Underground Parking']);
      setFeatured(false);
      setAgentName('Elena Vance');
    }
  }, [initialProperty, isOpen]);

  if (!isOpen) return null;

  const handleAddAmenity = () => {
    if (amenityInput.trim() && !amenities.includes(amenityInput.trim())) {
      setAmenities([...amenities, amenityInput.trim()]);
      setAmenityInput('');
    }
  };

  const handleRemoveAmenity = (item: string) => {
    setAmenities(amenities.filter((a) => a !== item));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !address.trim() || !mainImage.trim()) return;

    const propertyData: Property = {
      id: initialProperty ? initialProperty.id : `prop-${Date.now()}`,
      name,
      tagline: tagline || `${type} in ${city}`,
      badge,
      price: Number(price),
      pricePeriod: status === 'Rent' ? (pricePeriod || '/ month') : ' total',
      status,
      type,
      location: {
        address,
        city,
        state,
        country
      },
      specs: {
        beds: Number(beds),
        baths: Number(baths),
        sqft: Number(sqft),
        garages: Number(garages)
      },
      mainImage,
      gallery: gallery.length > 0 ? gallery : [mainImage],
      description,
      amenities: amenities.length > 0 ? amenities : ['Central Climate Control', 'Smart Access', 'Private Parking'],
      features: [
        `${beds} Designer Bedrooms`,
        `${baths} Full Marble Bathrooms`,
        `${sqft.toLocaleString()} sqft living area`,
        `${type} luxury classification`
      ],
      featured,
      agent: {
        name: agentName,
        title: 'Senior Luxury Partner',
        avatar: agentAvatar,
        phone: agentPhone,
        email: agentEmail,
        rating: 4.9,
        reviewsCount: 38
      }
    };

    onSave(propertyData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div
        className="relative bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-100 max-h-[92vh] flex flex-col my-auto animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-md shadow-indigo-200">
              <Building className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-indigo-950">
                {isEditing ? 'Edit Property Listing' : 'Create New Property Listing'}
              </h3>
              <p className="text-xs text-slate-500">
                {isEditing ? `Updating ${initialProperty?.name}` : 'Fill in the specifications to publish a new real-estate listing'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <form onSubmit={handleSubmit} className="overflow-y-auto flex-1 p-6 space-y-6">
          
          {/* Basic Info */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-600">Basic Information</h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Property Title *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. The Lumina Sky Penthouse"
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Subtitle / Tagline
                </label>
                <input
                  type="text"
                  value={tagline}
                  onChange={(e) => setTagline(e.target.value)}
                  placeholder="e.g. Modern living with skyline view"
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Listing Status
                </label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value as ListingStatus)}
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl font-medium focus:ring-2 focus:ring-indigo-600 cursor-pointer"
                >
                  <option value="Rent">For Rent</option>
                  <option value="Sale">For Sale</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Property Type
                </label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value as PropertyType)}
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl font-medium focus:ring-2 focus:ring-indigo-600 cursor-pointer"
                >
                  {PROPERTY_TYPES.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Badge
                </label>
                <select
                  value={badge}
                  onChange={(e) => setBadge(e.target.value as BadgeType)}
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl font-medium focus:ring-2 focus:ring-indigo-600 cursor-pointer"
                >
                  {BADGES.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Price ($) *
                </label>
                <input
                  type="number"
                  required
                  min={100}
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl font-bold text-indigo-950 focus:ring-2 focus:ring-indigo-600"
                />
              </div>
            </div>
          </div>

          {/* Location Information */}
          <div className="space-y-4 pt-2 border-t border-slate-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-600">Location Details</h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Street Address *
                </label>
                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="e.g. 1100 Biscayne Blvd, Suite 420"
                  className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  City *
                </label>
                <input
                  type="text"
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="e.g. Miami"
                  className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  State / Province
                </label>
                <input
                  type="text"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  placeholder="FL"
                  className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-600"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Country
                </label>
                <input
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  placeholder="United States"
                  className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-600"
                />
              </div>
            </div>
          </div>

          {/* Specs & Attributes */}
          <div className="space-y-4 pt-2 border-t border-slate-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-600">Property Dimensions & Specs</h4>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Bedrooms
                </label>
                <input
                  type="number"
                  min={0}
                  max={20}
                  value={beds}
                  onChange={(e) => setBeds(Number(e.target.value))}
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl font-bold focus:ring-2 focus:ring-indigo-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Bathrooms
                </label>
                <input
                  type="number"
                  min={1}
                  max={20}
                  value={baths}
                  onChange={(e) => setBaths(Number(e.target.value))}
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl font-bold focus:ring-2 focus:ring-indigo-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Square Footage (sqft)
                </label>
                <input
                  type="number"
                  min={100}
                  value={sqft}
                  onChange={(e) => setSqft(Number(e.target.value))}
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl font-bold focus:ring-2 focus:ring-indigo-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Garages / Parking
                </label>
                <input
                  type="number"
                  min={0}
                  value={garages}
                  onChange={(e) => setGarages(Number(e.target.value))}
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl font-bold focus:ring-2 focus:ring-indigo-600"
                />
              </div>
            </div>
          </div>

          {/* Media & Images */}
          <div className="space-y-4 pt-2 border-t border-slate-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-600">Main Cover Image URL *</h4>
            
            <div className="space-y-2">
              <input
                type="url"
                required
                value={mainImage}
                onChange={(e) => setMainImage(e.target.value)}
                placeholder="https://images.unsplash.com/..."
                className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-600 font-mono text-xs"
              />

              <div className="flex gap-2 items-center flex-wrap">
                <span className="text-[11px] text-slate-400 font-semibold">Quick image presets:</span>
                {SAMPLE_IMAGES.map((imgUrl, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setMainImage(imgUrl)}
                    className="w-10 h-8 rounded-lg overflow-hidden border border-slate-200 hover:border-indigo-600 transition-all cursor-pointer flex-shrink-0"
                  >
                    <img src={imgUrl} alt={`Preset ${i}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

              {mainImage && (
                <div className="relative aspect-[21/9] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 max-h-36">
                  <img src={mainImage} alt="Cover preview" className="w-full h-full object-cover" />
                  <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-xs text-white text-[10px] font-semibold px-2 py-0.5 rounded">
                    Image Live Preview
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Description & Amenities */}
          <div className="space-y-4 pt-2 border-t border-slate-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-600">Description & Amenities</h4>
            
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Property Description
              </label>
              <textarea
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe the architectural luxury, environment, view, and unique features..."
                className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-600"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Key Amenities Tags
              </label>
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={amenityInput}
                  onChange={(e) => setAmenityInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleAddAmenity();
                    }
                  }}
                  placeholder="e.g. Heated Infinity Pool, Wine Cellar"
                  className="flex-1 px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-600"
                />
                <button
                  type="button"
                  onClick={handleAddAmenity}
                  className="px-4 py-2 bg-slate-900 hover:bg-indigo-600 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
                >
                  Add
                </button>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {amenities.map((item, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 text-xs font-semibold"
                  >
                    <span>{item}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveAmenity(item)}
                      className="text-indigo-400 hover:text-rose-600 cursor-pointer"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-800">
                <input
                  type="checkbox"
                  checked={featured}
                  onChange={(e) => setFeatured(e.target.checked)}
                  className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                />
                <span>Highlight in "Featured Properties" Showcase on Home Page</span>
              </label>
            </div>
          </div>

          {/* Footer Submit */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-full border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-md shadow-indigo-200 transition-all cursor-pointer active:scale-98"
            >
              {isEditing ? 'Save Changes' : 'Publish Property Listing'}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};
