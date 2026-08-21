import React, { useState } from 'react';
import { X, Sparkles, Building2, Key, ShieldCheck, Glasses, ArrowRight, CheckCircle2, Award, Calendar, BookOpen } from 'lucide-react';
import { BLOG_POSTS, COMPANY_SERVICES } from '../data/mockData';
import { BrandLogo } from './BrandLogo';

// ==================== BLOG MODAL ====================
interface BlogModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const [selectedArticle, setSelectedArticle] = useState<typeof BLOG_POSTS[0] | null>(null);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div
        className="relative bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-slate-100 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">Nestora Journal & Market Insights</h3>
              <p className="text-xs text-slate-500">Industry analysis, luxury living guides, and architecture trends</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {selectedArticle ? (
            <div className="space-y-4 animate-in fade-in">
              <button
                onClick={() => setSelectedArticle(null)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-700 mb-2"
              >
                ← Back to all articles
              </button>

              <div className="relative aspect-[21/9] rounded-2xl overflow-hidden">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-500">
                <span className="px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 font-semibold">
                  {selectedArticle.category}
                </span>
                <span>{selectedArticle.date}</span>
                <span>•</span>
                <span>{selectedArticle.readTime}</span>
              </div>

              <h2 className="text-2xl font-extrabold text-slate-900">{selectedArticle.title}</h2>
              <p className="text-base text-slate-700 leading-relaxed font-medium">
                {selectedArticle.excerpt}
              </p>
              <div className="text-sm text-slate-600 leading-relaxed space-y-4 pt-2 border-t border-slate-100">
                <p>
                  High-net-worth real estate buyers and tenants are increasingly prioritizing wellness-driven architecture, sustainable energy micro-grids, and dedicated remote working sanctuaries. Homes offering direct outdoor connectivity—such as private cantilevered decks and zero-edge salt pools—continue to see the highest appreciation across coastal and mountain submarkets.
                </p>
                <p>
                  At Nestora, our certified advisors rigorously benchmark local zoning developments, HOA covenants, and historical valuation trajectories to ensure your residential lease or purchase represents peak aesthetic and financial tranquility.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {BLOG_POSTS.map((post) => (
                <div
                  key={post.id}
                  onClick={() => setSelectedArticle(post)}
                  className="group bg-slate-50/70 hover:bg-white rounded-2xl overflow-hidden border border-slate-200/80 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/10 transition-all cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between text-[11px] text-slate-500 mb-2">
                        <span className="font-bold text-indigo-600">{post.category}</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-2 leading-snug">
                        {post.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 pt-0">
                    <span className="text-xs font-bold text-indigo-600 group-hover:translate-x-1 inline-flex items-center gap-1 transition-transform">
                      Read Article →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ==================== SERVICES MODAL ====================
interface ServicesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectService: (serviceName: string) => void;
}

export const ServicesModal: React.FC<ServicesModalProps> = ({ isOpen, onClose, onSelectService }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div
        className="relative bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-100 p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tailored Solutions</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Our Luxury Real Estate Services
          </h3>
          <p className="text-sm text-slate-500 mt-1">
            End-to-end bespoke guidance for tenants, buyers, property owners, and investors.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {COMPANY_SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80 hover:bg-indigo-50/50 hover:border-indigo-200 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white text-indigo-600 border border-slate-200/60 shadow-xs flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  {srv.id === 'srv-1' && <Key className="w-5 h-5" />}
                  {srv.id === 'srv-2' && <Building2 className="w-5 h-5" />}
                  {srv.id === 'srv-3' && <ShieldCheck className="w-5 h-5" />}
                  {srv.id === 'srv-4' && <Glasses className="w-5 h-5" />}
                </div>
                <h4 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {srv.title}
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {srv.description}
                </p>
              </div>

              <button
                onClick={() => {
                  onSelectService(srv.title);
                  onClose();
                }}
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-700 cursor-pointer"
              >
                <span>Request Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ==================== LEARN MORE / ABOUT MODAL ====================
interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div
        className="relative bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-100 p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <BrandLogo size="lg" />

        <div>
          <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Elevating Modern Living Standards
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed mt-2">
            Founded with a vision to streamline luxury real estate, Nestora connects discerning residents with verified, world-class architecture. Every home on our platform undergoes a comprehensive 40-point quality verification, ensuring flawless condition, vetted ownership, and transparent lease terms.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-2">
          <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100">
            <h4 className="text-2xl font-extrabold text-indigo-600">100%</h4>
            <p className="text-xs font-semibold text-slate-700 mt-1">Verified Properties</p>
            <p className="text-[11px] text-slate-500">Every title & lease inspected</p>
          </div>
          <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-100">
            <h4 className="text-2xl font-extrabold text-purple-600">25,000+</h4>
            <p className="text-xs font-semibold text-slate-700 mt-1">Happy Families</p>
            <p className="text-[11px] text-slate-500">Across 12 major prime metros</p>
          </div>
        </div>

        <div className="pt-2 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold shadow-md shadow-indigo-200 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
