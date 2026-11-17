import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Phone, ShoppingBag, Menu, X, Star, MapPin } from 'lucide-react';
import { Logo } from './Logo';
import { HoursBadge } from './HoursBadge';
import { useCart } from '../context/CartContext';
import { restaurantInfo } from '../data/restaurantInfo';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/menu', label: 'Menu' },
    { to: '/about', label: 'About' },
    { to: '/reviews', label: 'Reviews' },
    { to: '/catering', label: 'Catering' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Top Banner Bar with Announcement & Quick Call */}
      <div className="bg-esmeralda-950 text-white text-[11px] sm:text-xs py-1.5 px-4 border-b border-esmeralda-900/60 transition-colors">
        <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap gap-2">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="flex items-center gap-1 text-amber-300 font-bold whitespace-nowrap">
              <Star className="w-3.5 h-3.5 fill-amber-300 flex-shrink-0" />
              4.7 ★ Rated Local Favorite
            </span>
            <span className="hidden md:inline text-esmeralda-400">|</span>
            <span className="hidden md:inline text-esmeralda-200 truncate">
              Fresh Ingredients & Authentic Family Recipes
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 text-esmeralda-200">
            <span className="hidden sm:flex items-center gap-1 text-stone-300 whitespace-nowrap">
              <MapPin className="w-3 h-3 text-amber-400 flex-shrink-0" />
              413 State Rd 3015, Morrisville
            </span>
            <a
              href={`tel:${restaurantInfo.phone}`}
              className="flex items-center gap-1.5 text-amber-300 hover:text-white font-bold transition-colors ml-auto sm:ml-0 whitespace-nowrap"
            >
              <Phone className="w-3 h-3 fill-amber-300 flex-shrink-0" />
              <span>Call: {restaurantInfo.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-stone-200/80 py-2 sm:py-2.5'
            : 'bg-white/95 backdrop-blur-sm border-b border-stone-200/60 py-3 sm:py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 md:gap-4">
            {/* Logo */}
            <Logo size={isScrolled ? 'sm' : 'md'} className="flex-shrink-0" />

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 flex-shrink-0">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `px-3 py-1.5 rounded-xl text-sm font-semibold transition-all whitespace-nowrap ${
                      isActive
                        ? 'text-esmeralda-800 bg-esmeralda-50/90 font-bold shadow-xs'
                        : 'text-stone-600 hover:text-stone-900 hover:bg-stone-50'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Right Action Icons & Buttons */}
            <div className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0">
              {/* Hours Pill - visible on wide desktop */}
              <div className="hidden xl:block flex-shrink-0">
                <HoursBadge />
              </div>

              {/* Call Ahead Button */}
              <a
                href={`tel:${restaurantInfo.phone}`}
                className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold text-stone-700 hover:text-esmeralda-800 bg-stone-100/90 hover:bg-esmeralda-50 border border-stone-200/80 transition-colors whitespace-nowrap flex-shrink-0"
                title="Call ahead for quick takeout orders!"
              >
                <Phone className="w-3.5 h-3.5 text-esmeralda-600 flex-shrink-0" />
                <span>Call Ahead</span>
              </a>

              {/* Order Cart Drawer Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative flex items-center gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-esmeralda-600 hover:bg-esmeralda-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-esmeralda-600/25 transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap flex-shrink-0"
                aria-label="View order bag"
              >
                <ShoppingBag className="w-4 h-4 flex-shrink-0" />
                <span className="hidden sm:inline">My Order</span>
                {totalItems > 0 && (
                  <span className="w-5 h-5 rounded-full bg-amber-400 text-esmeralda-950 text-xs font-black flex items-center justify-center animate-bounce">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile Menu Trigger */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-stone-700 hover:bg-stone-100 border border-stone-200 flex-shrink-0"
                aria-label="Toggle Navigation Menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-full bg-white border-b border-stone-200 shadow-2xl p-5 space-y-4 animate-in slide-in-from-top-2 duration-200">
            <div className="flex justify-between items-center pb-2 border-b border-stone-100">
              <HoursBadge />
              <span className="text-xs text-stone-500 font-medium">Morrisville, NC</span>
            </div>

            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-base font-semibold transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-esmeralda-50 text-esmeralda-900 font-bold'
                        : 'text-stone-700 hover:bg-stone-50'
                    }`
                  }
                >
                  <span>{link.label}</span>
                  <span className="text-stone-300 text-sm">→</span>
                </NavLink>
              ))}
            </nav>

            <div className="pt-3 border-t border-stone-100 space-y-2">
              <a
                href={`tel:${restaurantInfo.phone}`}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-esmeralda-700 text-white font-bold text-sm shadow-md"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>Call to Order: {restaurantInfo.phoneDisplay}</span>
              </a>

              <Link
                to="/menu"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-maize-500 hover:bg-maize-600 text-stone-900 font-bold text-sm"
              >
                <span>View Full Menu</span>
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
