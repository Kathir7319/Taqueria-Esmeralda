import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Award, ShieldCheck, Flame, Star, Utensils, CheckCircle2, ChevronRight, Phone } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantInfo';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-masa-50 py-12 sm:py-20 text-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-esmeralda-700 bg-esmeralda-100/80 px-3.5 py-1 rounded-full">
            Our Heritage & Story
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-black text-stone-900 tracking-tight leading-tight">
            Authentic Mexican Street Food, <br />
            <span className="text-esmeralda-700">Crafted with Heart</span> in Morrisville.
          </h1>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Welcome to Taqueria Esmeralda, your neighborhood destination for genuine Mexican flavors.
          </p>
        </div>

        {/* Narrative & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
              Taste the Passion in Every Single Bite
            </h2>
            
            <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
              At Taqueria Esmeralda, we pride ourselves on creating an authentic quick-bite dining experience using fresh, high-quality ingredients and traditional cooking methods. From our seasoned meats to our fresh garnishes, taste the passion in every single bite.
            </p>

            <p className="text-stone-600 leading-relaxed text-sm sm:text-base">
              Located at 413 State Rd 3015 in Morrisville, NC, our spot has become a treasured secret among local foodies, RTP professionals, and families craving the authentic flavors of Mexico's bustling street markets. There are no gimmicks here—just honest, deeply seasoned food made on a blazing hot plancha to order.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-esmeralda-600 flex-shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-stone-700">
                  <strong>Double Warm Corn Tortillas:</strong> Folded with care, providing the authentic texture and aroma of freshly roasted masa.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-esmeralda-600 flex-shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-stone-700">
                  <strong>24-Hour Slow Marinades:</strong> Traditional citrus, achiote, Mexican oregano, and toasted chilies for deep, soulful flavor.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-esmeralda-600 flex-shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-stone-700">
                  <strong>Fresh Daily Garnishes:</strong> Crisp cilantro, hand-diced sweet onions, lime wedges, and caramelized scallions with every taco.
                </p>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Link
                to="/menu"
                className="px-6 py-3 rounded-xl bg-esmeralda-700 hover:bg-esmeralda-800 text-white font-bold text-sm shadow-md transition-all"
              >
                Explore the Menu
              </Link>
              <a
                href={`tel:${restaurantInfo.phone}`}
                className="px-6 py-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-sm transition-all"
              >
                Call: {restaurantInfo.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-stone-200">
              <img
                src="https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=1000&q=80"
                alt="Platter of street tacos with cilantro and limes"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-bold text-amber-300 uppercase tracking-widest block mb-1">
                  Community Favorite
                </span>
                <p className="text-lg font-serif font-bold">
                  "At the corner of a modest stretch in Morrisville, Taqueria Esmeralda unfolds like a beloved secret shared among friends."
                </p>
                <p className="text-xs text-stone-300 mt-1">— Triangle Food Guide</p>
              </div>
            </div>

            {/* Floating Rating Pill */}
            <div className="absolute -top-5 -right-3 sm:-right-5 bg-white p-4 rounded-2xl shadow-xl border border-stone-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center font-black">
                <Star className="w-6 h-6 fill-amber-500 text-amber-500" />
              </div>
              <div>
                <span className="text-sm font-black text-stone-900 block leading-tight">4.7 / 5.0 Rating</span>
                <span className="text-xs text-stone-500">180+ Google Reviews</span>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Pillars of Excellence */}
        <div className="pt-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-serif font-bold text-stone-900">
              What Sets Our Kitchen Apart
            </h2>
            <p className="text-stone-600 text-sm mt-1">
              Every detail is rooted in authentic Mexican street cuisine tradition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-lg text-stone-900 mb-2">Plancha-Seared Meats</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                High-heat griddle searing locks in juices while crisping the edges of our Carne Asada, Pollo, and Carnitas to perfection.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <Utensils className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-lg text-stone-900 mb-2">Corn Masa Tradition</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Double-layered warm corn tortillas hold every taco together without breaking, delivering comforting rustic flavor.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-lg text-stone-900 mb-2">Family Hospitality</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Greeted with a smile, fast takeout packaging, and generous portions that leave you completely satisfied every single time.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-lg text-stone-900 mb-2">Fair, Honest Pricing</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Authentic food should be accessible to everyone. Enjoy street tacos from $3.25 and hearty burritos packed with fresh ingredients.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
