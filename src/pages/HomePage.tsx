import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, UtensilsCrossed, Star, Flame, Clock, Award, ChevronRight, Sparkles, MapPin, CheckCircle, ShieldCheck } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantInfo';
import { menuItems } from '../data/menuData';
import { RunningReviews } from '../components/RunningReviews';
import { TacoCustomizerModal } from '../components/TacoCustomizerModal';
import { MenuItem } from '../types';

export const HomePage: React.FC = () => {
  const [selectedItemForModal, setSelectedItemForModal] = useState<MenuItem | null>(null);

  // Featured items for homepage
  const featuredTacos = menuItems.filter(item => item.category === 'tacos').slice(0, 4);
  const featuredSpecialties = menuItems.filter(item => ['burritos', 'quesadillas', 'tortas'].includes(item.category)).slice(0, 3);

  return (
    <div className="min-h-screen bg-masa-50 text-stone-800">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-stone-900 via-esmeralda-950 to-esmeralda-900 text-white pt-12 pb-20 lg:pt-16 lg:pb-28">
        {/* Background photo with overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=1920&q=80"
            alt="Authentic Mexican street tacos"
            className="w-full h-full object-cover object-center opacity-25 filter brightness-75 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-esmeralda-950/95 via-stone-950/85 to-transparent"></div>
          <div className="absolute inset-0 bg-radial-vignette opacity-60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-amber-300">
                <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>TAQUERIA ESMERALDA • MORRISVILLE, NC</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight leading-[1.1] text-white">
                Authentic Mexican <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-maize-400 to-emerald-400">
                  Street Food
                </span> in Morrisville
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg lg:text-xl text-stone-200 font-sans leading-relaxed max-w-2xl">
                Fresh ingredients, traditional family recipes, and the best tacos in town. Made to order, just the way you like it.
              </p>

              {/* Key Trust Metrics */}
              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs sm:text-sm text-stone-300">
                <div className="flex items-center gap-2">
                  <div className="flex items-center text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="font-bold text-white">4.7 Google Rating</span>
                  <span className="text-stone-400">(180+ Reviews)</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-300">
                  <CheckCircle className="w-4 h-4" />
                  <span>Double Corn Tortillas</span>
                </div>
                <div className="flex items-center gap-1.5 text-amber-300">
                  <Flame className="w-4 h-4" />
                  <span>Plancha Seared</span>
                </div>
              </div>

              {/* Call-to-Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="/menu"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-extrabold text-base shadow-xl shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <UtensilsCrossed className="w-5 h-5" />
                  <span>View Our Menu</span>
                </Link>

                <a
                  href={`tel:${restaurantInfo.phone}`}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-base backdrop-blur-md border border-white/25 shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <Phone className="w-5 h-5 text-emerald-400" />
                  <span>Call to Order: 919-377-2455</span>
                </a>
              </div>

              {/* Location pin note */}
              <p className="text-xs text-stone-400 flex items-center gap-2 pt-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <span>Located at 413 State Rd 3015, Morrisville, NC • Quick Takeout Pickup</span>
              </p>
            </div>

            {/* Right Card / Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Glow backdrop */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500 to-emerald-500 rounded-3xl blur-lg opacity-40 animate-pulse"></div>

                {/* Hero Showcase Card */}
                <div className="relative rounded-3xl overflow-hidden bg-stone-900 border border-white/15 shadow-2xl">
                  <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80"
                      alt="Tacos al Pastor with fresh pineapple and cilantro"
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent"></div>
                    
                    <span className="absolute top-4 right-4 bg-terracotta-600 text-white text-xs font-black uppercase px-3 py-1 rounded-full shadow-lg">
                      🔥 Most Popular
                    </span>
                  </div>

                  <div className="p-6 text-white space-y-3">
                    <div className="flex justify-between items-baseline">
                      <div>
                        <span className="text-xs font-bold text-amber-300 uppercase tracking-widest">
                          Signature Street Taco
                        </span>
                        <h3 className="text-2xl font-serif font-bold text-white">
                          Al Pastor con Piña
                        </h3>
                      </div>
                      <span className="text-xl font-black text-emerald-400">$3.50</span>
                    </div>

                    <p className="text-xs sm:text-sm text-stone-300">
                      24-hour marinated pork shoulder with Mexican chilies, crowned with charred sweet pineapple, chopped cilantro, sweet onions, and lime.
                    </p>

                    <div className="pt-2 flex items-center justify-between">
                      <button
                        onClick={() => setSelectedItemForModal(featuredTacos[1] || featuredTacos[0])}
                        className="w-full py-2.5 px-4 rounded-xl bg-esmeralda-600 hover:bg-esmeralda-500 text-white font-bold text-xs uppercase tracking-wider transition-all text-center"
                      >
                        Customize & Add to Order
                      </button>
                    </div>
                  </div>
                </div>

                {/* Floating Patron Review Badge */}
                <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white rounded-2xl p-3.5 shadow-2xl border border-stone-100 max-w-[260px] hidden sm:block text-stone-900">
                  <div className="flex items-center gap-1.5 mb-1">
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                      ))}
                    </div>
                    <span className="text-[11px] font-bold text-stone-800">5.0 Star</span>
                  </div>
                  <p className="text-[11px] italic text-stone-600 leading-snug line-clamp-2">
                    "Currently having a spiritual experience with these tacos!"
                  </p>
                  <p className="text-[10px] font-bold text-esmeralda-700 mt-1">
                    — Brandon H. • Google Review
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* RUNNING GOOGLE REVIEWS TICKER */}
      <RunningReviews />

      {/* QUICK HIGHLIGHTS SECTION (From Document Blueprint) */}
      <section className="py-16 bg-white border-b border-stone-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-esmeralda-700 bg-esmeralda-50 px-3.5 py-1 rounded-full border border-esmeralda-200">
              The Taqueria Esmeralda Experience
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-stone-900 mt-3">
              Why Morrisville Loves Us
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2">
              Simple, authentic, and fast. Built on genuine Mexican cooking traditions and honest value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Highlight 1 */}
            <div className="relative rounded-3xl p-8 bg-gradient-to-b from-stone-50 to-white border border-stone-200/80 hover:border-esmeralda-500 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Flame className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="font-serif font-bold text-xl text-stone-900 mb-2">
                Traditional Street Tacos
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Served fresh on warm double corn tortillas with chopped cilantro, fresh diced onions, crisp lime wedges, and caramelized grilled onions.
              </p>
              <div className="mt-4 pt-4 border-t border-stone-100 flex items-center gap-1.5 text-xs font-bold text-esmeralda-700">
                <span>Handmade masa flavor</span>
                <span>• Gluten-free friendly</span>
              </div>
            </div>

            {/* Highlight 2 */}
            <div className="relative rounded-3xl p-8 bg-gradient-to-b from-stone-50 to-white border border-stone-200/80 hover:border-esmeralda-500 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="font-serif font-bold text-xl text-stone-900 mb-2">
                Highly Rated Local Favorite
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Proudly holding a 4.7-star rating from our wonderful community on Google, celebrated for uncompromised authenticity, rich portions, and welcoming warmth.
              </p>
              <div className="mt-4 pt-4 border-t border-stone-100 flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                <span>180+ verified Google reviews</span>
              </div>
            </div>

            {/* Highlight 3 */}
            <div className="relative rounded-3xl p-8 bg-gradient-to-b from-stone-50 to-white border border-stone-200/80 hover:border-esmeralda-500 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Clock className="w-7 h-7 text-rose-600" />
              </div>
              <h3 className="font-serif font-bold text-xl text-stone-900 mb-2">
                Fast & Friendly Service
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Perfect for a quick lunch break on the go or a comforting family dinner. Call ahead at 919-377-2455 and your meal is hot and waiting for you.
              </p>
              <div className="mt-4 pt-4 border-t border-stone-100 flex items-center gap-1.5 text-xs font-bold text-rose-700">
                <span>Average pickup ready in 15 mins</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ABOUT BRIEF SECTION (From Blueprint) */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-masa-100 via-masa-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Photo Grid */}
            <div className="lg:col-span-6 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-3xl overflow-hidden shadow-lg h-52 sm:h-64">
                    <img
                      src="https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=600&q=80"
                      alt="Mexican Street Tacos on plate"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="rounded-3xl overflow-hidden shadow-lg h-40 sm:h-48 bg-esmeralda-900 p-6 flex flex-col justify-center text-white">
                    <span className="text-3xl sm:text-4xl font-serif font-black text-amber-300">100%</span>
                    <span className="text-xs sm:text-sm font-semibold text-emerald-100 mt-1">
                      Traditional Double Corn Tortillas & Fresh Salsas
                    </span>
                  </div>
                </div>

                <div className="space-y-4 pt-8">
                  <div className="rounded-3xl overflow-hidden shadow-lg h-40 sm:h-48 bg-amber-500 p-6 flex flex-col justify-center text-stone-950">
                    <span className="text-3xl sm:text-4xl font-serif font-black">4.7 ★</span>
                    <span className="text-xs sm:text-sm font-bold mt-1">
                      Morrisville's Trusted Street Taco Destination
                    </span>
                  </div>
                  <div className="rounded-3xl overflow-hidden shadow-lg h-52 sm:h-64">
                    <img
                      src="https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80"
                      alt="Super Burrito packed with meat and rice"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Story Text */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-esmeralda-700 bg-esmeralda-100/70 px-3.5 py-1 rounded-full">
                About Brief
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-stone-900 tracking-tight leading-tight">
                Authentic Quick-Bite Dining <br />
                <span className="text-esmeralda-700">Taste the Passion</span> in Every Bite.
              </h2>

              <p className="text-stone-700 text-base sm:text-lg leading-relaxed">
                Welcome to <strong>Taqueria Esmeralda</strong>, your neighborhood destination for genuine Mexican flavors. We pride ourselves on creating an authentic quick-bite dining experience using fresh, high-quality ingredients and traditional cooking methods.
              </p>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                From our seasoned meats to our fresh garnishes, taste the passion in every single bite. Whether you're craving charbroiled Carne Asada, slow-simmered Carnitas, juicy Al Pastor with sweet pineapple, or a hearty Super Burrito, our family recipes bring the authentic culinary spirit of Mexico straight to Morrisville.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-esmeralda-800 hover:bg-esmeralda-900 text-white font-bold text-sm shadow-md transition-all"
                >
                  <span>Read Our Full Story</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/menu"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-sm transition-all"
                >
                  <span>Explore Menu</span>
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* STREET TACOS SHOWCASE */}
      <section className="py-16 sm:py-20 bg-white border-y border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                Handcrafted On The Plancha
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-black text-stone-900 mt-2">
                Traditional Street Tacos
              </h2>
              <p className="text-sm text-stone-600 mt-1 max-w-xl">
                Served on warm corn tortillas with chopped cilantro, onions, lime wedges, and grilled onions.
              </p>
            </div>

            <Link
              to="/menu"
              className="inline-flex items-center gap-2 font-bold text-sm text-esmeralda-700 hover:text-esmeralda-900 group"
            >
              <span>View All Menu Items</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTacos.map((taco) => (
              <div
                key={taco.id}
                className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-md hover:shadow-xl hover:border-esmeralda-400 transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-48 w-full overflow-hidden bg-stone-100">
                  <img
                    src={taco.image}
                    alt={taco.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 bg-stone-950/80 backdrop-blur-xs text-white text-xs font-black px-2.5 py-1 rounded-lg">
                    ${taco.price.toFixed(2)}
                  </div>
                  {taco.popular && (
                    <div className="absolute top-3 left-3 bg-amber-500 text-stone-950 text-[10px] font-black uppercase px-2 py-0.5 rounded-md shadow">
                      Popular
                    </div>
                  )}
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-bold text-esmeralda-700 uppercase tracking-wider block mb-0.5">
                      {taco.spanishName}
                    </span>
                    <h3 className="font-serif font-bold text-base text-stone-900 mb-2">
                      {taco.name}
                    </h3>
                    <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                      {taco.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-[11px] text-stone-500 font-medium">Double corn tortilla</span>
                    <button
                      onClick={() => setSelectedItemForModal(taco)}
                      className="px-3 py-1.5 rounded-xl bg-esmeralda-600 hover:bg-esmeralda-700 text-white font-bold text-xs shadow-sm transition-all"
                    >
                      + Order
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* HOUSE SPECIALTIES SHOWCASE */}
      <section className="py-16 sm:py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-terracotta-700 bg-rose-50 px-3.5 py-1 rounded-full border border-rose-200">
              Hearty & Packed With Flavor
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-stone-900 mt-2">
              House Specialties
            </h2>
            <p className="text-stone-600 text-sm mt-2">
              From monster toasted burritos and cheesy quesadillas to authentic tortas on crusty rolls.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredSpecialties.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-52 w-full overflow-hidden bg-stone-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 bg-stone-950/80 backdrop-blur-xs text-white text-xs font-black px-2.5 py-1 rounded-lg">
                    ${item.price.toFixed(2)}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-terracotta-600 uppercase tracking-wider block mb-1">
                      {item.spanishName}
                    </span>
                    <h3 className="font-serif font-bold text-lg text-stone-900 mb-2">
                      {item.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-stone-700">Choice of meat & salsa</span>
                    <button
                      onClick={() => setSelectedItemForModal(item)}
                      className="px-4 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs transition-colors"
                    >
                      Customize & Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CALL TO ORDER ACTION BANNER */}
      <section className="py-14 bg-gradient-to-r from-esmeralda-900 via-esmeralda-800 to-esmeralda-950 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-5">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-400/20 text-amber-300 border border-amber-300/30">
            <Sparkles className="w-3.5 h-3.5" />
            Fast Takeout • Freshly Made
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black tracking-tight">
            Ready for the Best Tacos in Morrisville?
          </h2>

          <p className="text-stone-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Call ahead to skip the wait. We'll have your street tacos, burritos, or tortas hot, wrapped, and ready to go!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
            <a
              href={`tel:${restaurantInfo.phone}`}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-black text-base shadow-xl transition-all hover:scale-105 active:scale-95"
            >
              <Phone className="w-5 h-5 fill-stone-950" />
              <span>Call to Order: {restaurantInfo.phoneDisplay}</span>
            </a>

            <Link
              to="/menu"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-base border border-white/20 transition-all"
            >
              <span>Browse Full Menu</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Modal for customizing items */}
      <TacoCustomizerModal
        item={selectedItemForModal}
        onClose={() => setSelectedItemForModal(null)}
      />

    </div>
  );
};
