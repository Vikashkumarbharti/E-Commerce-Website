import React from 'react';
import { Home, Shield, Headphones, Sparkles } from 'lucide-react';

const FEATURES = [
  {
    id: 'f-1',
    title: 'Verified Properties',
    description: 'All properties are verified for your peace of mind.',
    icon: <Home className="w-5 h-5 text-indigo-600" />,
    bg: 'bg-indigo-50/90 text-indigo-600 border border-indigo-100/60'
  },
  {
    id: 'f-2',
    title: 'Safe & Secure',
    description: 'Your safety is our priority in every transaction.',
    icon: <Shield className="w-5 h-5 text-indigo-600" />,
    bg: 'bg-indigo-50/90 text-indigo-600 border border-indigo-100/60'
  },
  {
    id: 'f-3',
    title: '24/7 Support',
    description: 'Our team is here to help you anytime, anywhere.',
    icon: <Headphones className="w-5 h-5 text-indigo-600" />,
    bg: 'bg-indigo-50/90 text-indigo-600 border border-indigo-100/60'
  },
  {
    id: 'f-4',
    title: 'Best Price Guarantee',
    description: 'Get the best deals at the best prices.',
    icon: <Sparkles className="w-5 h-5 text-indigo-600" />,
    bg: 'bg-indigo-50/90 text-indigo-600 border border-indigo-100/60'
  }
];

export const TrustFeatures: React.FC = () => {
  return (
    <section id="features" className="py-3 pb-12 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {FEATURES.map((feature, idx) => (
            <div
              key={feature.id}
              id={`trust-feature-card-${idx + 1}`}
              className="bg-white rounded-2xl p-5 border border-slate-100/90 shadow-xs hover:shadow-md transition-all duration-300 flex items-center gap-3.5"
            >
              {/* Icon Container */}
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${feature.bg}`}>
                {feature.icon}
              </div>

              {/* Text content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-bold text-slate-900 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
