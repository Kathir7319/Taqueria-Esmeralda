import React, { useState, useMemo } from 'react';
import { Search, Flame, Sparkles, Filter, Check, ShoppingBag, Phone, UtensilsCrossed } from 'lucide-react';
import { menuItems, menuCategories } from '../data/menuData';
import { restaurantInfo } from '../data/restaurantInfo';
import { TacoCustomizerModal } from '../components/TacoCustomizerModal';
import { MenuItem, ProductCategory } from '../types';
import { useCart } from '../context/CartContext';

export const MenuPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [glutenFreeOnly, setGlutenFreeOnly] = useState<boolean>(false);
  const [popularOnly, setPopularOnly] = useState<boolean>(false);
  const [selectedItemForModal, setSelectedItemForModal] = useState<MenuItem | null>(null);
  
  const { totalItems, totalPrice, setIsCartOpen } = useCart();

  const filteredItems = useMemo(() => {
    return menuItems.filter(item => {
      // Category filter
      if (activeCategory !== 'all') {
        if (activeCategory === 'specialties') {
          if (!['burritos', 'quesadillas', 'tortas'].includes(item.category)) {
            return false;
          }
        } else if (item.category !== activeCategory) {
          return false;
        }
      }

      // Gluten-Free filter
      if (glutenFreeOnly && !item.glutenFree) {
        return false;
      }

      // Popular filter
      if (popularOnly && !item.popular) {
        return false;
      }

      // Search Query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchName = item.name.toLowerCase().includes(query);
        const matchSpanish = item.spanishName.toLowerCase().includes(query);
        const matchDesc = item.description.toLowerCase().includes(query);
        const matchIng = item.ingredients?.some(ing => ing.toLowerCase().includes(query));
        if (!matchName && !matchSpanish && !matchDesc && !matchIng) {
          return false;
        }
      }

      return true;
    });
  }, [activeCategory, searchQuery, glutenFreeOnly, popularOnly]);

  return (
    <div className="min-h-screen bg-masa-50 py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-esmeralda-700 bg-esmeralda-100/70 px-3.5 py-1 rounded-full">
            Made Fresh to Order
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-black text-stone-900 mt-3">
            Our Authentic Mexican Menu
          </h1>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            Served on warm corn tortillas with chopped cilantro, onions, lime wedges, and grilled onions. Choose your favorite proteins and house-made salsas.
          </p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <a
              href={`tel:${restaurantInfo.phone}`}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-esmeralda-800 bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-200 hover:bg-emerald-100 transition-colors"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>Call Ahead for Takeout: {restaurantInfo.phoneDisplay}</span>
            </a>
          </div>
        </div>

        {/* Search & Dietary Filters Bar */}
        <div className="bg-white rounded-3xl p-4 sm:p-6 border border-stone-200 shadow-md mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search tacos, burritos, meats..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-esmeralda-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-600"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Quick Filters */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              <button
                type="button"
                onClick={() => setGlutenFreeOnly(!glutenFreeOnly)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  glutenFreeOnly
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                <span>🌽 Double Corn / Gluten-Free</span>
                {glutenFreeOnly && <Check className="w-3.5 h-3.5" />}
              </button>

              <button
                type="button"
                onClick={() => setPopularOnly(!popularOnly)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  popularOnly
                    ? 'bg-amber-500 text-stone-950 shadow-sm'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                <span>⭐ Most Popular</span>
                {popularOnly && <Check className="w-3.5 h-3.5" />}
              </button>
            </div>

          </div>

          {/* Category Tabs */}
          <div className="mt-5 pt-4 border-t border-stone-100 flex gap-2 overflow-x-auto pb-2 scrollbar-none">
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-esmeralda-700 text-white shadow-md shadow-esmeralda-700/20'
                    : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border border-stone-200/80'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex justify-between items-center mb-6 px-1">
          <span className="text-xs font-medium text-stone-500">
            Showing <strong className="text-stone-800">{filteredItems.length}</strong> items
          </span>
          <span className="text-xs text-stone-500">
            * Prices subject to tax and customization
          </span>
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-stone-200 max-w-lg mx-auto">
            <UtensilsCrossed className="w-12 h-12 text-stone-300 mx-auto mb-3" />
            <h3 className="font-serif font-bold text-lg text-stone-800">No dishes match your search</h3>
            <p className="text-xs text-stone-500 mt-1">Try clearing filters or searching for something else like "taco", "pastor", or "burrito".</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
                setGlutenFreeOnly(false);
                setPopularOnly(false);
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-esmeralda-600 text-white text-xs font-bold"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-md hover:shadow-xl hover:border-esmeralda-300 transition-all duration-300 flex flex-col group"
              >
                {/* Item Image */}
                <div className="relative h-48 w-full overflow-hidden bg-stone-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Price Tag */}
                  <div className="absolute top-3 right-3 bg-stone-950/85 backdrop-blur-xs text-white font-black text-xs px-2.5 py-1 rounded-lg shadow">
                    ${item.price.toFixed(2)}
                  </div>

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1">
                    {item.popular && (
                      <span className="bg-amber-500 text-stone-950 text-[10px] font-black uppercase px-2 py-0.5 rounded-md shadow">
                        Popular
                      </span>
                    )}
                    {item.glutenFree && (
                      <span className="bg-emerald-700 text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow">
                        Gluten-Free
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] font-bold text-esmeralda-700 uppercase tracking-wider">
                        {item.spanishName}
                      </span>
                      {item.spicyLevel && item.spicyLevel > 0 && (
                        <div className="flex items-center text-terracotta-500 text-[11px]" title="Spiciness">
                          {[...Array(item.spicyLevel)].map((_, i) => (
                            <Flame key={i} className="w-3.5 h-3.5 fill-terracotta-500" />
                          ))}
                        </div>
                      )}
                    </div>

                    <h3 className="font-serif font-bold text-base sm:text-lg text-stone-900 leading-snug">
                      {item.name}
                    </h3>

                    <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                      {item.description}
                    </p>

                    {item.ingredients && (
                      <div className="mt-3 flex flex-wrap gap-1">
                        {item.ingredients.map((ing, i) => (
                          <span
                            key={i}
                            className="text-[10px] bg-stone-100 text-stone-600 px-2 py-0.5 rounded-md"
                          >
                            {ing}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Action */}
                  <div className="mt-auto pt-4 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-sm font-bold text-stone-900">${item.price.toFixed(2)}</span>
                    <button
                      type="button"
                      onClick={() => setSelectedItemForModal(item)}
                      className="px-4 py-2 rounded-xl bg-esmeralda-600 hover:bg-esmeralda-700 text-white text-xs font-bold shadow-md shadow-esmeralda-600/20 transition-all active:scale-95 whitespace-nowrap"
                    >
                      {item.options ? 'Customize & Order' : '+ Add to Order'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Floating Order Cart summary on mobile */}
        {totalItems > 0 && (
          <div className="fixed bottom-4 inset-x-4 max-w-md mx-auto z-30 lg:hidden">
            <button
              onClick={() => setIsCartOpen(true)}
              className="w-full flex items-center justify-between px-5 py-3.5 rounded-2xl bg-esmeralda-700 text-white shadow-2xl font-bold text-sm"
            >
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5" />
                <span>View Order ({totalItems})</span>
              </div>
              <span className="bg-white/20 px-3 py-1 rounded-xl">${totalPrice.toFixed(2)}</span>
            </button>
          </div>
        )}

      </div>

      <TacoCustomizerModal
        item={selectedItemForModal}
        onClose={() => setSelectedItemForModal(null)}
      />
    </div>
  );
};
