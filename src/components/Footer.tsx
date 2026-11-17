import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Star, ExternalLink, Heart } from 'lucide-react';
import { Logo } from './Logo';
import { restaurantInfo } from '../data/restaurantInfo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-esmeralda-950 text-stone-300 pt-16 pb-8 border-t border-esmeralda-900/60 relative overflow-hidden">
      {/* Subtle Mexican geometric pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-esmeralda-900/60">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="bg-esmeralda-900/60 p-3.5 rounded-2xl border border-esmeralda-800/80 inline-block shadow-inner">
              <Logo size="md" theme="dark" />
            </div>
            <p className="text-sm text-stone-300 leading-relaxed">
              Morrisville's destination for authentic Mexican street food. Traditional family recipes, double corn tortillas, fresh marinades, and genuine hospitality.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="text-xs font-bold text-white">4.7 / 5.0 Google Rating</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif font-bold text-white text-lg tracking-wide border-b border-esmeralda-800 pb-2">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-amber-300 transition-colors flex items-center gap-2">
                  <span>Home & Specials</span>
                </Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-amber-300 transition-colors flex items-center gap-2">
                  <span>Street Tacos & Specialties</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-300 transition-colors flex items-center gap-2">
                  <span>Our Story & Traditions</span>
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-amber-300 transition-colors flex items-center gap-2">
                  <span>Google Reviews (4.7 ★)</span>
                </Link>
              </li>
              <li>
                <Link to="/catering" className="hover:text-amber-300 transition-colors flex items-center gap-2">
                  <span>Taco Catering & Events</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-300 transition-colors flex items-center gap-2">
                  <span>Location & Hours</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="font-serif font-bold text-white text-lg tracking-wide border-b border-esmeralda-800 pb-2 flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>Hours of Operation</span>
            </h3>
            <ul className="space-y-2 text-xs text-stone-300">
              <li className="flex justify-between py-1 border-b border-esmeralda-900/40">
                <span className="font-medium">Monday – Thursday</span>
                <span className="text-amber-200">11:00 AM – 8:30 PM</span>
              </li>
              <li className="flex justify-between py-1 border-b border-esmeralda-900/40">
                <span className="font-medium">Friday – Saturday</span>
                <span className="text-amber-200">11:00 AM – 9:00 PM</span>
              </li>
              <li className="flex justify-between py-1">
                <span className="font-medium">Sunday</span>
                <span className="text-amber-200">11:30 AM – 8:00 PM</span>
              </li>
            </ul>
            <div className="pt-2 text-xs text-esmeralda-300 bg-esmeralda-900/40 p-2.5 rounded-xl border border-esmeralda-800/40">
              ⚡ Call ahead for fast takeout pickup!
            </div>
          </div>

          {/* Contact & Find Us */}
          <div className="space-y-4">
            <h3 className="font-serif font-bold text-white text-lg tracking-wide border-b border-esmeralda-800 pb-2 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>Find Us</span>
            </h3>
            <div className="space-y-3 text-sm">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-esmeralda-400 mt-1 flex-shrink-0" />
                <span>{restaurantInfo.address}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-esmeralda-400 flex-shrink-0" />
                <a 
                  href={`tel:${restaurantInfo.phone}`}
                  className="font-bold text-amber-300 hover:underline"
                >
                  {restaurantInfo.phoneDisplay}
                </a>
              </p>
              <div className="pt-2">
                <a
                  href={restaurantInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-esmeralda-800 hover:bg-esmeralda-700 text-white text-xs font-bold transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-3">
          <p>© 2026 Taqueria Esmeralda. All Rights Reserved. Handcrafted Authentic Mexican Street Food.</p>
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-terracotta-500 fill-terracotta-500 inline" />
            <span>for taco lovers in Morrisville & Triangle, NC</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
