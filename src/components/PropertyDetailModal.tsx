import React, { useState } from 'react';
import {
  X,
  Heart,
  MapPin,
  Bed,
  Bath,
  Square,
  Calendar,
  Phone,
  Mail,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  Share2,
  Clock,
  Video,
  UserCheck
} from 'lucide-react';
import { Property, InquiryFormData, TourBookingData } from '../types';

interface PropertyDetailModalProps {
  property: Property | null;
  isOpen: boolean;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (property: Property) => void;
  onSubmitInquiry: (data: InquiryFormData) => void;
  onBookTour: (data: TourBookingData) => void;
}

export const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({
  property,
  isOpen,
  onClose,
  isFavorite,
  onToggleFavorite,
  onSubmitInquiry,
  onBookTour
}) => {
  if (!isOpen || !property) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'inquiry' | 'tour'>('inquiry');

  // Inquiry Form state
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState(
    `Hi Elena, I am interested in ${property.name} (${property.location.city}) listed at $${property.price.toLocaleString()}${property.pricePeriod || '/ month'}. Please contact me with more information.`
  );
  const [moveInDate, setMoveInDate] = useState('2026-09-01');

  // Tour Booking state
  const [tourDate, setTourDate] = useState('2026-08-25');
  const [tourTime, setTourTime] = useState('10:00 AM');
  const [tourType, setTourType] = useState<'in-person' | 'video'>('in-person');
  const [tourName, setTourName] = useState('');
  const [tourEmail, setTourEmail] = useState('');
  const [tourPhone, setTourPhone] = useState('');

  const [formSubmitted, setFormSubmitted] = useState(false);

  const images = property.gallery && property.gallery.length > 0 ? property.gallery : [property.mainImage];

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName.trim() || !inquiryEmail.trim()) return;

    onSubmitInquiry({
      propertyId: property.id,
      propertyName: property.name,
      fullName: inquiryName,
      email: inquiryEmail,
      phone: inquiryPhone,
      message: inquiryMessage,
      moveInDate
    });

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      onClose();
    }, 2000);
  };

  const handleTourSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tourName.trim() || !tourEmail.trim()) return;

    onBookTour({
      propertyId: property.id,
      propertyName: property.name,
      date: tourDate,
      timeSlot: tourTime,
      tourType,
      fullName: tourName,
      email: tourEmail,
      phone: tourPhone
    });

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 lg:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-white rounded-3xl lg:rounded-[32px] max-w-5xl w-full overflow-hidden shadow-2xl border border-slate-100 max-h-[92vh] flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Floating Control Bar */}
        <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
          <button
            onClick={() => onToggleFavorite(property)}
            className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md shadow-md flex items-center justify-center text-slate-700 hover:text-rose-600 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            <Heart className={`w-5 h-5 ${isFavorite ? 'fill-rose-500 text-rose-500' : ''}`} />
          </button>
          
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md shadow-md flex items-center justify-center text-slate-700 hover:text-slate-900 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto flex-1 p-5 sm:p-8 space-y-8">
          
          {/* Header Info */}
          <div className="pr-20">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-600 text-white">
                {property.badge}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
                {property.type}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                Verified Listing
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              {property.name}
            </h2>

            <div className="flex items-center gap-2 text-slate-600 text-sm mt-2">
              <MapPin className="w-4 h-4 text-indigo-600 flex-shrink-0" />
              <span>{property.location.address}, {property.location.city}, {property.location.state}, {property.location.country}</span>
            </div>
          </div>

          {/* Photo Gallery with Hero Main View and Thumbnails */}
          <div className="space-y-3">
            <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden bg-slate-100">
              <img
                src={images[activeImageIndex] || property.mainImage}
                alt={property.name}
                className="w-full h-full object-cover object-center transition-all duration-300"
              />
              <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-lg">
                Photo {activeImageIndex + 1} of {images.length}
              </div>
            </div>

            {/* Thumbnail Row */}
            <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-1">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-20 sm:w-24 h-14 sm:h-16 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all cursor-pointer ${
                    activeImageIndex === idx
                      ? 'border-indigo-600 ring-2 ring-indigo-600/30 scale-102'
                      : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Key Specs Highlights & Price Banner */}
          <div className="bg-slate-50/80 rounded-2xl p-5 border border-slate-200/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Monthly Rate</span>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-slate-900">
                  ${property.price.toLocaleString()}
                </span>
                <span className="text-sm font-semibold text-slate-500">
                  {property.pricePeriod || '/ month'}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-slate-700 text-sm font-semibold">
              <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-slate-100 shadow-xs">
                <Bed className="w-4 h-4 text-indigo-600" />
                <span>{property.specs.beds} Beds</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-slate-100 shadow-xs">
                <Bath className="w-4 h-4 text-purple-600" />
                <span>{property.specs.baths} Baths</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-slate-100 shadow-xs">
                <Square className="w-4 h-4 text-violet-600" />
                <span>{property.specs.sqft.toLocaleString()} sqft</span>
              </div>
              {property.specs.garages && (
                <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-slate-100 shadow-xs">
                  <span>🚗 {property.specs.garages} Garages</span>
                </div>
              )}
            </div>
          </div>

          {/* Grid Layout: Left Details, Right Interactive Action Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column: Description, Features & Amenities */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Description */}
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">About This Property</h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {property.description}
                </p>
              </div>

              {/* Property Features */}
              {property.features && property.features.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">Key Highlights</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {property.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Amenities */}
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Amenities & Facilities</h3>
                <div className="flex flex-wrap gap-2">
                  {property.amenities.map((amenity, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 text-xs sm:text-sm font-medium flex items-center gap-1.5"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verified Agent / Host Card */}
              <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img
                    src={property.agent.avatar}
                    alt={property.agent.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-indigo-200"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-sm font-bold text-slate-900">{property.agent.name}</h4>
                      <UserCheck className="w-3.5 h-3.5 text-indigo-600" />
                    </div>
                    <p className="text-xs text-slate-500">{property.agent.title}</p>
                    <div className="text-[11px] text-amber-600 font-semibold mt-0.5">
                      ★ {property.agent.rating} ({property.agent.reviewsCount} reviews)
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={`tel:${property.agent.phone}`}
                    className="p-2.5 rounded-xl bg-white text-indigo-600 border border-indigo-100 hover:bg-indigo-600 hover:text-white transition-colors shadow-xs"
                    title="Call Agent"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${property.agent.email}`}
                    className="p-2.5 rounded-xl bg-white text-indigo-600 border border-indigo-100 hover:bg-indigo-600 hover:text-white transition-colors shadow-xs"
                    title="Email Agent"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column: Interactive Form Tabs (Inquiry & Schedule Tour) */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-lg shadow-slate-900/5">
              
              {/* Tab Selector */}
              <div className="flex rounded-xl bg-slate-100 p-1 mb-5">
                <button
                  type="button"
                  onClick={() => setActiveTab('inquiry')}
                  className={`flex-1 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    activeTab === 'inquiry'
                      ? 'bg-white text-indigo-600 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Send Inquiry
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('tour')}
                  className={`flex-1 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    activeTab === 'tour'
                      ? 'bg-white text-indigo-600 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Schedule Visit
                </button>
              </div>

              {formSubmitted ? (
                <div className="py-10 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">Request Sent Successfully!</h4>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Agent {property.agent.name} will contact you shortly with confirmation.
                  </p>
                </div>
              ) : activeTab === 'inquiry' ? (
                <form onSubmit={handleInquirySubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={inquiryName}
                      onChange={(e) => setInquiryName(e.target.value)}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={inquiryEmail}
                        onChange={(e) => setInquiryEmail(e.target.value)}
                        placeholder="alex@example.com"
                        className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={inquiryPhone}
                        onChange={(e) => setInquiryPhone(e.target.value)}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">
                      Target Move-in Date
                    </label>
                    <input
                      type="date"
                      value={moveInDate}
                      onChange={(e) => setMoveInDate(e.target.value)}
                      className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      rows={3}
                      value={inquiryMessage}
                      onChange={(e) => setInquiryMessage(e.target.value)}
                      className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold shadow-md shadow-indigo-200 transition-all cursor-pointer active:scale-98"
                  >
                    Send Direct Inquiry
                  </button>
                </form>
              ) : (
                <form onSubmit={handleTourSubmit} className="space-y-3.5">
                  {/* Tour Type Radio */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setTourType('in-person')}
                      className={`p-2.5 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                        tourType === 'in-person'
                          ? 'border-indigo-600 bg-indigo-50 text-indigo-700'
                          : 'border-slate-200 text-slate-600'
                      }`}
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      <span>In-Person Tour</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setTourType('video')}
                      className={`p-2.5 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                        tourType === 'video'
                          ? 'border-indigo-600 bg-indigo-50 text-indigo-700'
                          : 'border-slate-200 text-slate-600'
                      }`}
                    >
                      <Video className="w-3.5 h-3.5" />
                      <span>Live Video Tour</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">
                        Date
                      </label>
                      <input
                        type="date"
                        required
                        value={tourDate}
                        onChange={(e) => setTourDate(e.target.value)}
                        className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">
                        Time Slot
                      </label>
                      <select
                        value={tourTime}
                        onChange={(e) => setTourTime(e.target.value)}
                        className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
                      >
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="11:30 AM">11:30 AM</option>
                        <option value="02:00 PM">02:00 PM</option>
                        <option value="04:30 PM">04:30 PM</option>
                        <option value="06:00 PM">06:00 PM</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={tourName}
                      onChange={(e) => setTourName(e.target.value)}
                      placeholder="e.g. Sarah Connor"
                      className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={tourEmail}
                        onChange={(e) => setTourEmail(e.target.value)}
                        placeholder="sarah@example.com"
                        className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={tourPhone}
                        onChange={(e) => setTourPhone(e.target.value)}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold shadow-md shadow-indigo-200 transition-all cursor-pointer active:scale-98"
                  >
                    Confirm Tour Booking
                  </button>
                </form>
              )}

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
