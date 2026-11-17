import React, { useState } from 'react';
import { Clock, ChevronDown, CheckCircle2 } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantInfo';

export const HoursBadge: React.FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <div className="relative inline-block text-left flex-shrink-0">
      <button
        type="button"
        onClick={() => setIsOpenMenu(!isOpenMenu)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/90 text-emerald-800 text-xs font-semibold hover:bg-emerald-100 transition-colors shadow-xs whitespace-nowrap"
        aria-expanded={isOpenMenu}
      >
        <span className="relative flex h-2 w-2 flex-shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="whitespace-nowrap font-medium text-emerald-900">Open Now • Till 9 PM</span>
        <ChevronDown className="w-3 h-3 text-emerald-600 flex-shrink-0" />
      </button>

      {isOpenMenu && (
        <div 
          className="absolute right-0 mt-2 w-72 rounded-2xl bg-white p-4 shadow-xl ring-1 ring-black/5 z-50 animate-in fade-in zoom-in-95"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between pb-3 border-b border-stone-100 mb-3">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-esmeralda-600" />
              <h4 className="font-bold text-sm text-stone-900">Operating Hours</h4>
            </div>
            <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
              Open Today
            </span>
          </div>

          <div className="space-y-1.5 text-xs">
            {restaurantInfo.hours.map((item) => (
              <div key={item.day} className="flex justify-between items-center text-stone-600 py-0.5">
                <span className="font-medium text-stone-700">{item.day}</span>
                <span className="font-semibold text-stone-900">{item.open} - {item.close}</span>
              </div>
            ))}
          </div>

          <div className="mt-3 pt-3 border-t border-stone-100 text-[11px] text-stone-500 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-esmeralda-600 flex-shrink-0" />
            <span>Fast takeout ready in ~15 minutes</span>
          </div>
        </div>
      )}
    </div>
  );
};
