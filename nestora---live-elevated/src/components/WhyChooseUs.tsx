import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { WHY_CHOOSE_POINTS } from '../data/mockData';

interface WhyChooseUsProps {
  onOpenLearnMore: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenLearnMore }) => {
  return (
    <section id="why-choose-us" className="py-10 lg:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Text & Checklist */}
          <div className="lg:col-span-6 space-y-5">
            
            {/* Eyebrow */}
            <span className="text-indigo-600 font-bold text-xs uppercase tracking-wider block">
              Why Choose Nestoria
            </span>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight leading-[1.18]">
              More Than Just <br />
              A Property
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg font-normal">
              We offer more than just spaces. We deliver experiences that fit your life and future.
            </p>

            {/* Checklist with Purple Circles */}
            <div className="space-y-3 pt-1">
              {WHY_CHOOSE_POINTS.map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-sm font-medium text-slate-700">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* Dark Navy Pill Action Button */}
            <div className="pt-3">
              <button
                id="why-choose-learn-more-btn"
                onClick={onOpenLearnMore}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-[#1e1e38] hover:bg-slate-900 shadow-sm transition-all duration-200 cursor-pointer active:scale-95"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

          {/* Right Column: Premium Living Room Architecture Image matching Reference */}
          <div className="lg:col-span-6">
            <div className="relative rounded-[2rem] overflow-hidden shadow-xl shadow-slate-900/5 border border-slate-100">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
                alt="Modern bright living room with large glass windows and minimalist couch"
                className="w-full h-[360px] sm:h-[420px] lg:h-[460px] object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
