import React from 'react';
import { Star, CheckCircle, ExternalLink, MessageSquareHeart } from 'lucide-react';
import { reviewsData } from '../data/reviewsData';
import { restaurantInfo } from '../data/restaurantInfo';

export const RunningReviews: React.FC = () => {
  // Duplicate array so ticker runs seamlessly in an infinite loop
  const duplicatedReviews = [...reviewsData, ...reviewsData];

  return (
    <section className="py-12 bg-gradient-to-b from-masa-100 to-masa-50 overflow-hidden relative border-y border-stone-200/60">
      {/* Background Mexican Talavera / Aztec subtle motif pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#064e3b_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100/80 text-amber-900 border border-amber-200">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                4.7 / 5.0 Star Rated on Google
              </span>
              <span className="text-xs font-medium text-stone-500">
                • 180+ Community Reviews
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
              Loved by Our Morrisville Community
            </h2>
            <p className="text-sm text-stone-600 mt-1 max-w-xl">
              Real unfiltered reviews from taco lovers across Morrisville, Cary, RTP, and the Triangle.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={restaurantInfo.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-white text-stone-800 hover:text-esmeralda-700 hover:bg-stone-50 border border-stone-300 shadow-sm transition-all group"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              <span>View Google Reviews</span>
              <ExternalLink className="w-3.5 h-3.5 text-stone-400 group-hover:text-esmeralda-600 transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Infinite Running Marquee Track */}
      <div className="relative w-full overflow-hidden py-4 group">
        {/* Soft edge gradient fade */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-masa-100 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-masa-100 to-transparent z-10 pointer-events-none"></div>

        <div className="flex gap-6 w-max animate-marquee group-hover:[animation-play-state:paused]">
          {duplicatedReviews.map((rev, index) => (
            <div
              key={`${rev.id}-${index}`}
              className="w-[320px] sm:w-[380px] bg-white/95 backdrop-blur-sm rounded-2xl p-5 border border-stone-200/80 shadow-md hover:shadow-xl hover:border-esmeralda-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header: User avatar, name, rating & Google badge */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={rev.avatar}
                      alt={rev.author}
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-esmeralda-100"
                      loading="lazy"
                    />
                    <div>
                      <div className="flex items-center gap-1">
                        <h4 className="font-bold text-sm text-stone-900 leading-tight">
                          {rev.author}
                        </h4>
                        <CheckCircle className="w-3.5 h-3.5 text-esmeralda-600 fill-esmeralda-100" />
                      </div>
                      <p className="text-[11px] text-stone-500">{rev.relativeTime}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-stone-50 border border-stone-200">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                    </svg>
                    <span className="text-[10px] font-bold text-stone-600">5.0</span>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-2.5">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-stone-700 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                  "{rev.text}"
                </p>
              </div>

              {/* Tag / Mentioned dish */}
              {rev.dishMentioned && (
                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-[11px]">
                  <span className="font-semibold text-esmeralda-800 bg-esmeralda-50 px-2 py-0.5 rounded-full">
                    🌮 {rev.dishMentioned}
                  </span>
                  <span className="text-stone-400 flex items-center gap-1">
                    <MessageSquareHeart className="w-3 h-3 text-terracotta-500" />
                    Verified Dine
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
