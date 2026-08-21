import React, { useState } from 'react';
import { X, CheckCircle2, Sparkles, Building, Key, Home, ArrowRight, ShieldCheck } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (message: string) => void;
}

export const GetStartedModal: React.FC<GetStartedModalProps> = ({
  isOpen,
  onClose,
  onSuccess
}) => {
  if (!isOpen) return null;

  const [intent, setIntent] = useState<'rent' | 'buy' | 'list'>('rent');
  const [budget, setBudget] = useState('$3,000 - $6,000 / mo');
  const [city, setCity] = useState('Miami, FL');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim()) return;

    setIsSubmitted(true);
    onSuccess(`Welcome to Nestora! Our luxury advisor has received your preferences and will reach out shortly.`);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div
        className="relative bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-100 p-6 sm:p-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <BrandLogo size="md" />
          <h3 className="text-2xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Begin Your Elevated Journey
          </h3>
          <p className="text-sm text-slate-500 mt-1">
            Personalized guidance from licensed luxury property specialists.
          </p>
        </div>

        {isSubmitted ? (
          <div className="py-12 text-center space-y-3">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-slate-900">Application Received!</h4>
            <p className="text-sm text-slate-500 max-w-xs mx-auto">
              We have matched you with an executive advisor in {city}. Check your inbox for curated options.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Intent selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                What are you looking for?
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setIntent('rent')}
                  className={`p-3 rounded-2xl border text-xs font-bold flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                    intent === 'rent'
                      ? 'border-indigo-600 bg-indigo-50/80 text-indigo-700 shadow-xs'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <Key className="w-4 h-4" />
                  <span>Rent Property</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIntent('buy')}
                  className={`p-3 rounded-2xl border text-xs font-bold flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                    intent === 'buy'
                      ? 'border-indigo-600 bg-indigo-50/80 text-indigo-700 shadow-xs'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <Home className="w-4 h-4" />
                  <span>Buy Property</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIntent('list')}
                  className={`p-3 rounded-2xl border text-xs font-bold flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                    intent === 'list'
                      ? 'border-indigo-600 bg-indigo-50/80 text-indigo-700 shadow-xs'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <Building className="w-4 h-4" />
                  <span>List / Sell</span>
                </button>
              </div>
            </div>

            {/* Preferred City and Budget */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Target Location
                </label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
                >
                  <option value="Miami, FL">Miami, FL</option>
                  <option value="Chicago, IL">Chicago, IL</option>
                  <option value="Austin, TX">Austin, TX</option>
                  <option value="New York, NY">New York, NY</option>
                  <option value="Los Angeles, CA">Los Angeles, CA</option>
                  <option value="San Francisco, CA">San Francisco, CA</option>
                  <option value="Aspen, CO">Aspen, CO</option>
                  <option value="San Diego, CA">San Diego, CA</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Target Budget
                </label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
                >
                  <option value="$2,000 - $4,000 / mo">$2,000 - $4,000 / mo</option>
                  <option value="$4,000 - $7,000 / mo">$4,000 - $7,000 / mo</option>
                  <option value="$7,000 - $15,000 / mo">$7,000 - $15,000 / mo</option>
                  <option value="$1M - $3M (Purchase)">$1M - $3M (Purchase)</option>
                  <option value="$3M+ (Luxury Estate)">$3M+ (Luxury Estate)</option>
                </select>
              </div>
            </div>

            {/* Contact Details */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Your Full Name
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. Jordan Hayes"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jordan@example.com"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1 text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-indigo-600 flex-shrink-0" />
              <span>Your personal contact info is private and strictly protected.</span>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-200 transition-all cursor-pointer active:scale-98"
            >
              Submit Preferences & Get Matched
            </button>

          </form>
        )}

      </div>
    </div>
  );
};
