import React from 'react';
import { Star } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Homeowner, Miami',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    content: 'Nestoria made finding our dream home so easy. The process was smooth and fully professional.',
    rating: 5
  },
  {
    id: 2,
    name: 'David Miller',
    role: 'Renter, Chicago',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    content: 'Amazing service and verified listings. I got the perfect apartment in just a few days!',
    rating: 5
  },
  {
    id: 3,
    name: 'Emily Carter',
    role: 'Investor, Austin',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    content: 'A trusted platform with real value. Highly recommended for anyone looking for a new home.',
    rating: 5
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            What Our Clients Say
          </h2>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
          {REVIEWS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[1.75rem] p-7 border border-slate-100/90 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Author Avatar & Info Header */}
                <div className="flex items-center gap-3.5 mb-4">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover border border-slate-100"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{item.name}</h4>
                    <p className="text-xs text-slate-400">{item.role}</p>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-3 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  "{item.content}"
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
