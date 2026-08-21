import React, { useState } from 'react';
import { Mail, ArrowRight, Instagram, Linkedin, Twitter, Facebook, Youtube, CheckCircle2 } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenBlog?: () => void;
  onOpenServices?: () => void;
  onOpenAbout?: () => void;
  onOpenContact?: () => void;
  onOpenAdmin?: () => void;
  onSubscribeNewsletter: (email: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenBlog,
  onOpenServices,
  onOpenAbout,
  onOpenContact,
  onOpenAdmin,
  onSubscribeNewsletter
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    onSubscribeNewsletter(email);
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo variant="light" size="lg" />
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Discover verified luxury estates, beachfront villas, and urban penthouses designed for modern, elevated living across the world's most desirable destinations.
            </p>

            {/* Newsletter form */}
            <div className="pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Subscribe to Exclusive Listings
              </span>
              {subscribed ? (
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold py-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Thank you for subscribing!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-colors cursor-pointer"
                  >
                    Join
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Company</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button
                  onClick={onOpenAbout}
                  className="hover:text-indigo-400 transition-colors cursor-pointer text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAbout}
                  className="hover:text-indigo-400 transition-colors cursor-pointer text-left"
                >
                  Careers
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenBlog}
                  className="hover:text-indigo-400 transition-colors cursor-pointer text-left"
                >
                  Blog & Market News
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  className="hover:text-indigo-400 transition-colors cursor-pointer text-left"
                >
                  Contact Concierge
                </button>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Services</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button
                  onClick={onOpenServices}
                  className="hover:text-indigo-400 transition-colors cursor-pointer text-left"
                >
                  Buy Luxury Property
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('listings')}
                  className="hover:text-indigo-400 transition-colors cursor-pointer text-left"
                >
                  Rent Premium Property
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenServices}
                  className="hover:text-indigo-400 transition-colors cursor-pointer text-left"
                >
                  Sell & Private Placement
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenServices}
                  className="hover:text-indigo-400 transition-colors cursor-pointer text-left"
                >
                  Property Management
                </button>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Support & Legal</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button
                  onClick={onOpenContact}
                  className="hover:text-indigo-400 transition-colors cursor-pointer text-left"
                >
                  Help Center & FAQs
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  className="hover:text-indigo-400 transition-colors cursor-pointer text-left"
                >
                  Verified Landlord Guarantee
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  className="hover:text-indigo-400 transition-colors cursor-pointer text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  className="hover:text-indigo-400 transition-colors cursor-pointer text-left"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAdmin}
                  className="hover:text-indigo-400 text-indigo-400/90 font-medium transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <span>🔐 Admin Portal</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Social & Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © 2026 Nestoria. All rights reserved. Live Elevated.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3 text-slate-400">
            <a
              href="#social-twitter"
              onClick={(e) => e.preventDefault()}
              className="p-2 rounded-xl bg-slate-800 hover:text-white hover:bg-indigo-600 transition-colors"
              aria-label="Twitter / X"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="#social-instagram"
              onClick={(e) => e.preventDefault()}
              className="p-2 rounded-xl bg-slate-800 hover:text-white hover:bg-indigo-600 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="#social-linkedin"
              onClick={(e) => e.preventDefault()}
              className="p-2 rounded-xl bg-slate-800 hover:text-white hover:bg-indigo-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="#social-facebook"
              onClick={(e) => e.preventDefault()}
              className="p-2 rounded-xl bg-slate-800 hover:text-white hover:bg-indigo-600 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="#social-youtube"
              onClick={(e) => e.preventDefault()}
              className="p-2 rounded-xl bg-slate-800 hover:text-white hover:bg-indigo-600 transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
