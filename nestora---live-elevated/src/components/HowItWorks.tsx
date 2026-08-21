import React from 'react';
import { Search, Home, Key } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    icon: <Search className="w-5 h-5 text-indigo-600" />,
    iconBg: 'bg-indigo-50 border border-indigo-100/70',
    title: 'Search & Explore',
    description: 'Browse thousands of verified listings in your desired location.'
  },
  {
    step: '02',
    icon: <Home className="w-5 h-5 text-indigo-600" />,
    iconBg: 'bg-indigo-50 border border-indigo-100/70',
    title: 'Choose Your Property',
    description: 'Compare options and find the perfect space for your lifestyle.'
  },
  {
    step: '03',
    icon: <Key className="w-5 h-5 text-indigo-600" />,
    iconBg: 'bg-indigo-50 border border-indigo-100/70',
    title: 'Move In & Enjoy',
    description: 'Complete the process and start your new journey with confidence.'
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-indigo-600 font-bold text-xs uppercase tracking-wider block mb-1.5">
            How It Works
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Find Your Dream Home in 3 Easy Steps
          </h2>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
          {STEPS.map((step) => (
            <div
              key={step.step}
              className="bg-white rounded-[1.75rem] p-7 border border-slate-100/90 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col items-start relative"
            >
              {/* Step number badge */}
              <span className="text-xs font-bold text-slate-400 mb-4 block">
                {step.step}
              </span>

              {/* Circular Icon Container */}
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${step.iconBg}`}>
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-slate-900 mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
