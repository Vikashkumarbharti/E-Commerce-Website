import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'dark' | 'light';
  showTagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'dark',
  showTagline = true
}) => {
  const iconSizes = {
    sm: 'w-8 h-8 rounded-lg',
    md: 'w-9 h-9 rounded-xl',
    lg: 'w-11 h-11 rounded-2xl'
  };

  const titleSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  const taglineSizes = {
    sm: 'text-[8px]',
    md: 'text-[9px]',
    lg: 'text-[10px]'
  };

  const isLight = variant === 'light';

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* House outline inside rounded container matching reference */}
      <div className={`relative flex items-center justify-center border-2 ${
        isLight
          ? 'border-indigo-400/80 bg-indigo-900/50 text-white'
          : 'border-indigo-600/90 bg-indigo-50/80 text-indigo-600'
      } flex-shrink-0 ${iconSizes[size]}`}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5/9 h-5/9"
        >
          <path d="M3 9.5l9-7 9 7v10.5a1.5 1.5 0 0 1-1.5 1.5H4.5A1.5 1.5 0 0 1 3 20V9.5z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      </div>

      <div className="flex flex-col leading-tight">
        <span className={`font-extrabold tracking-tight ${titleSizes[size]} ${isLight ? 'text-white' : 'text-slate-900'}`}>
          Nestoria
        </span>
        {showTagline && (
          <span className={`font-semibold tracking-[0.15em] text-slate-400 ${taglineSizes[size]}`}>
            Live Elevated
          </span>
        )}
      </div>
    </div>
  );
};
