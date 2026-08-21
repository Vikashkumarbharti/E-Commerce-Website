import React, { useState, useEffect } from 'react';
import { Heart, Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  favoritesCount: number;
  onOpenFavorites: () => void;
  onOpenGetStarted: () => void;
  onOpenBlog?: () => void;
  onOpenServices?: () => void;
  onOpenAbout?: () => void;
  onOpenAdmin: () => void;
  isAdminLoggedIn: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigate,
  favoritesCount,
  onOpenFavorites,
  onOpenGetStarted,
  onOpenBlog,
  onOpenServices,
  onOpenAbout,
  onOpenAdmin,
  isAdminLoggedIn
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', action: () => onNavigate('home') },
    { id: 'listings', label: 'Listings', action: () => onNavigate('listings') },
    { id: 'services', label: 'Services', action: () => onOpenServices ? onOpenServices() : onNavigate('services') },
    { id: 'favorites', label: 'Favorites', action: onOpenFavorites, badge: favoritesCount },
    { id: 'blog', label: 'Blog', action: () => onOpenBlog ? onOpenBlog() : onNavigate('blog') },
    { id: 'about', label: 'About Us', action: () => onOpenAbout ? onOpenAbout() : onNavigate('why-choose-us') },
    { id: 'admin', label: isAdminLoggedIn ? 'Admin Panel' : 'Admin Login', action: onOpenAdmin },
  ];

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-100 py-3'
          : 'bg-[#F8FAFF] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center focus:outline-none rounded-lg cursor-pointer"
            aria-label="Nestoria Home"
          >
            <BrandLogo size="md" />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={item.action}
                  className={`relative text-[13px] font-medium transition-colors cursor-pointer py-1 ${
                    isActive
                      ? 'text-indigo-600 font-semibold'
                      : 'text-slate-600 hover:text-indigo-600'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    {item.label}
                    {typeof item.badge === 'number' && item.badge > 0 && (
                      <span className="inline-flex items-center justify-center px-1.5 py-0.2 text-[9px] font-bold bg-indigo-600 text-white rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {/* Heart Favorites button */}
            <button
              id="header-fav-btn"
              onClick={onOpenFavorites}
              aria-label="View Saved Favorites"
              className="relative p-2 text-slate-700 hover:text-rose-500 transition-colors group cursor-pointer"
            >
              <Heart
                className={`w-5 h-5 transition-transform group-hover:scale-110 ${
                  favoritesCount > 0 ? 'fill-rose-500 text-rose-500' : 'text-slate-700'
                }`}
              />
              {favoritesCount > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-rose-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center shadow-xs">
                  {favoritesCount}
                </span>
              )}
            </button>

            {/* Get Started Dark Navy Pill Button */}
            <button
              id="header-get-started-btn"
              onClick={onOpenGetStarted}
              className="bg-[#1e1e38] hover:bg-slate-900 text-white px-5 py-2 rounded-full text-xs font-semibold shadow-sm transition-all cursor-pointer active:scale-95"
            >
              <span>Get Started</span>
            </button>
          </div>

          {/* Mobile Menu & Heart Controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenFavorites}
              aria-label="View Favorites"
              className="relative p-2 rounded-xl text-slate-700 hover:bg-slate-100"
            >
              <Heart
                className={`w-5 h-5 ${favoritesCount > 0 ? 'fill-rose-500 text-rose-500' : ''}`}
              />
              {favoritesCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-rose-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {favoritesCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  item.action();
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium text-left ${
                  activeSection === item.id
                    ? 'bg-indigo-50 text-indigo-700 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{item.label}</span>
                {typeof item.badge === 'number' && item.badge > 0 && (
                  <span className="px-2 py-0.5 text-xs font-bold bg-indigo-600 text-white rounded-full">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}

            <div className="pt-3">
              <button
                onClick={() => {
                  onOpenGetStarted();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-center shadow-md shadow-indigo-200"
              >
                <span>Get Started</span>
                <Sparkles className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
