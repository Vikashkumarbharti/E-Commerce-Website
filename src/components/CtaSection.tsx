import React from 'react';
import { ArrowRight, Home } from 'lucide-react';

interface CtaSectionProps {
  onGetStarted: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onGetStarted }) => {
  return (
    <section className="py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[2rem] overflow-hidden shadow-xl shadow-slate-900/10 bg-[#1e1e38] p-8 sm:p-10 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Content */}
          <div className="flex items-center gap-5 text-left">
            <div className="w-12 h-12 rounded-2xl bg-indigo-600/30 border border-indigo-400/30 text-white flex items-center justify-center flex-shrink-0">
              <Home className="w-6 h-6 text-indigo-300" />
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Ready to Find Your Dream Home?
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 font-normal mt-1 max-w-lg">
                Join thousands of happy families who found their perfect space with Nestoria.
              </p>
            </div>
          </div>

          {/* Right Button */}
          <div className="flex-shrink-0 w-full md:w-auto flex justify-start md:justify-end">
            <button
              id="cta-get-started-btn"
              onClick={onGetStarted}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 shadow-md transition-all duration-200 cursor-pointer active:scale-95"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
