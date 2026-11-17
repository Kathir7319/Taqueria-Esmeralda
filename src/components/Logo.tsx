import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'horizontal' | 'badge' | 'icon';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  theme?: 'light' | 'dark';
  className?: string;
  isLink?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'horizontal',
  size = 'md',
  theme = 'light',
  className = '',
  isLink = true
}) => {
  const sizeMap = {
    sm: { icon: 'w-8 h-8', textTitle: 'text-base', textSub: 'text-[9px]' },
    md: { icon: 'w-10 h-10', textTitle: 'text-xl', textSub: 'text-[10px]' },
    lg: { icon: 'w-14 h-14', textTitle: 'text-2xl', textSub: 'text-xs' },
    xl: { icon: 'w-24 h-24', textTitle: 'text-3xl', textSub: 'text-sm' },
  };

  const currentSize = sizeMap[size];

  const isDark = theme === 'dark';

  const EmblemSVG = (
    <div className={`relative flex-shrink-0 ${currentSize.icon} drop-shadow-md`}>
      <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="emeraldBase" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="60%" stopColor="#059669" />
            <stop offset="100%" stopColor="#047857" />
          </linearGradient>
          <linearGradient id="maizeShell" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fde047" />
            <stop offset="50%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
          <linearGradient id="salsaDrizzle" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f43f5e" />
            <stop offset="100%" stopColor="#be123c" />
          </linearGradient>
        </defs>

        {/* Outer Emerald Octagon / Facet Shield */}
        <polygon 
          points="50,4 88,20 96,62 68,96 32,96 4,62 12,20" 
          fill="url(#emeraldBase)" 
          stroke="#f59e0b" 
          strokeWidth="2.5" 
        />
        
        {/* Inner geometric accent ring */}
        <polygon 
          points="50,10 82,24 88,58 64,88 36,88 12,58 18,24" 
          fill="#064e3b" 
          opacity="0.8" 
        />

        {/* Taco Fold (Double Corn Tortilla) */}
        <path 
          d="M24,54 C26,34 74,34 76,54 C74,72 26,72 24,54 Z" 
          fill="url(#maizeShell)" 
          stroke="#b45309" 
          strokeWidth="1.5" 
        />

        {/* Meat filling */}
        <path 
          d="M32,48 C38,40 62,40 68,48 C62,54 38,54 32,48 Z" 
          fill="#881337" 
        />

        {/* Charred Pineapple / Cilantro Flecks */}
        <circle cx="42" cy="46" r="2.5" fill="#fde047" />
        <circle cx="58" cy="47" r="2" fill="#fde047" />
        <circle cx="48" cy="44" r="2" fill="#34d399" />
        <circle cx="53" cy="48" r="1.5" fill="#ffffff" />
        <circle cx="38" cy="49" r="1.5" fill="#ffffff" />

        {/* Salsa Drizzle wave */}
        <path 
          d="M30,52 Q42,46 50,52 Q58,56 70,50" 
          fill="none" 
          stroke="url(#salsaDrizzle)" 
          strokeWidth="2" 
          strokeLinecap="round" 
        />

        {/* Little Diamond Crown on Top */}
        <polygon points="50,14 56,22 50,28 44,22" fill="#fef08a" />
      </svg>
    </div>
  );

  const TextLockup = (
    <div className="flex flex-col whitespace-nowrap flex-shrink-0">
      <div className="flex items-center gap-1.5 leading-none">
        <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.25em] text-maize-500 uppercase whitespace-nowrap">
          Taqueria
        </span>
        <span className="h-1 w-1 rounded-full bg-terracotta-500"></span>
        <span className={`font-sans text-[9px] font-semibold uppercase tracking-widest hidden sm:inline whitespace-nowrap ${isDark ? 'text-stone-300' : 'text-stone-400'}`}>
          Morrisville
        </span>
      </div>
      <span className={`font-serif font-black tracking-tight transition-colors whitespace-nowrap ${currentSize.textTitle} ${isDark ? 'text-white group-hover:text-amber-300' : 'text-esmeralda-950 group-hover:text-esmeralda-700'}`}>
        Esmeralda
      </span>
      <span className={`font-sans font-medium tracking-wider whitespace-nowrap ${currentSize.textSub} ${isDark ? 'text-emerald-200' : 'text-stone-500'}`}>
        Authentic Mexican Street Food
      </span>
    </div>
  );

  const content = (
    <div className={`group flex items-center gap-3 transition-transform duration-200 hover:scale-[1.02] ${className}`}>
      {EmblemSVG}
      {variant !== 'icon' && TextLockup}
    </div>
  );

  if (isLink) {
    return (
      <Link to="/" aria-label="Taqueria Esmeralda - Home">
        {content}
      </Link>
    );
  }

  return content;
};
