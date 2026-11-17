import React, { useState } from 'react';
import { Users, Phone, Calendar, CheckCircle, Sparkles, UtensilsCrossed, Send } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantInfo';
import confetti from 'canvas-confetti';

export const CateringPage: React.FC = () => {
  const [guestCount, setGuestCount] = useState<number>(25);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [packageChoice, setPackageChoice] = useState('taco-bar');
  const [notes, setNotes] = useState('');

  // Estimate calculation
  const pricePerPerson = packageChoice === 'taco-bar' ? 13.50 : packageChoice === 'burrito-box' ? 12.00 : 16.50;
  const estimatedCost = (guestCount * pricePerPerson).toFixed(2);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch {
      // safe
    }
  };

  return (
    <div className="min-h-screen bg-masa-50 py-12 sm:py-20 text-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-100 px-3.5 py-1 rounded-full border border-amber-200">
            Corporate Events • Parties • Lunches
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-black text-stone-900 tracking-tight">
            Taqueria Esmeralda Catering
          </h1>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Bring the authentic Mexican street food experience to your office, family party, or celebration in Morrisville, Cary, and the Research Triangle!
          </p>
          <div className="pt-2">
            <a
              href={`tel:${restaurantInfo.phone}`}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-esmeralda-900 bg-emerald-100/70 hover:bg-emerald-200 px-4 py-2 rounded-xl transition-colors"
            >
              <Phone className="w-4 h-4 text-esmeralda-700" />
              <span>Call Catering Hotline: {restaurantInfo.phoneDisplay}</span>
            </a>
          </div>
        </div>

        {/* 3 Catering Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Package 1 */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-esmeralda-500 shadow-xl flex flex-col justify-between relative">
            <div className="absolute -top-3.5 right-6 bg-esmeralda-600 text-white text-[11px] font-black uppercase px-3 py-1 rounded-full">
              Most Popular
            </div>

            <div className="space-y-4">
              <span className="text-xs font-bold text-esmeralda-700 uppercase tracking-wider block">
                Full Street Experience
              </span>
              <h3 className="font-serif font-bold text-2xl text-stone-900">
                Authentic Street Taco Bar
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Our crowd-pleaser buffet bar! Guests build their own street tacos just like in Mexico.
              </p>

              <div className="text-2xl font-black text-stone-900 pt-2">
                $13.50 <span className="text-xs font-normal text-stone-500">/ person (min. 15 guests)</span>
              </div>

              <ul className="space-y-2 text-xs text-stone-600 pt-3 border-t border-stone-100">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-esmeralda-600 flex-shrink-0" />
                  <span>Choice of 3 Meats (Carne Asada, Pastor, Pollo, Carnitas)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-esmeralda-600 flex-shrink-0" />
                  <span>Warm Double Corn Tortillas & Grilled Cebollitas</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-esmeralda-600 flex-shrink-0" />
                  <span>Mexican Red Rice & Slow-Cooked Refried Beans</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-esmeralda-600 flex-shrink-0" />
                  <span>House Chips, Guacamole & Salsa Flight</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-esmeralda-600 flex-shrink-0" />
                  <span>Cilantro, Diced Onions, Limes, Pickled Jalapeños</span>
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <button
                type="button"
                onClick={() => {
                  setPackageChoice('taco-bar');
                  document.getElementById('catering-calculator')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-2.5 rounded-xl bg-esmeralda-600 hover:bg-esmeralda-700 text-white font-bold text-xs shadow-md transition-colors"
              >
                Select This Package
              </button>
            </div>
          </div>

          {/* Package 2 */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-md flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block">
                Office & Meeting Ready
              </span>
              <h3 className="font-serif font-bold text-2xl text-stone-900">
                Burrito Box Lunches
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Individually wrapped Super Burritos labeled by protein. Fast, clean, and delicious for lunch meetings.
              </p>

              <div className="text-2xl font-black text-stone-900 pt-2">
                $12.00 <span className="text-xs font-normal text-stone-500">/ person (min. 10 guests)</span>
              </div>

              <ul className="space-y-2 text-xs text-stone-600 pt-3 border-t border-stone-100">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>Individually wrapped Super Burrito per person</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>Individual bag of crispy tortilla chips</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>Side of House Guacamole & Salsa Verde</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>Complete with napkin and utensils</span>
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <button
                type="button"
                onClick={() => {
                  setPackageChoice('burrito-box');
                  document.getElementById('catering-calculator')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs transition-colors"
              >
                Select This Package
              </button>
            </div>
          </div>

          {/* Package 3 */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-md flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-bold text-rose-600 uppercase tracking-wider block">
                Ultimate Fiesta
              </span>
              <h3 className="font-serif font-bold text-2xl text-stone-900">
                The Royal Fiesta Spread
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Everything from the Taco Bar PLUS Cheesy Quesadillas, Street Corn (Elotes), and Crispy Churros!
              </p>

              <div className="text-2xl font-black text-stone-900 pt-2">
                $16.50 <span className="text-xs font-normal text-stone-500">/ person (min. 20 guests)</span>
              </div>

              <ul className="space-y-2 text-xs text-stone-600 pt-3 border-t border-stone-100">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                  <span>All Street Taco Bar items & 4 meat selections</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                  <span>Elote Street Corn Cups with Cotija cheese</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                  <span>Quesadilla wedges & sour cream</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                  <span>Crispy Cinnamon Churros with warm cajeta dip</span>
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <button
                type="button"
                onClick={() => {
                  setPackageChoice('royal-fiesta');
                  document.getElementById('catering-calculator')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs transition-colors"
              >
                Select This Package
              </button>
            </div>
          </div>

        </div>

        {/* Interactive Estimator & Inquiry Form */}
        <div id="catering-calculator" className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-xl scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left: Instant Pricing Estimator */}
            <div className="lg:col-span-5 bg-stone-50 rounded-2xl p-6 border border-stone-200 space-y-6">
              <div>
                <span className="text-xs font-bold text-esmeralda-700 uppercase tracking-widest block mb-1">
                  Instant Calculator
                </span>
                <h3 className="font-serif font-bold text-2xl text-stone-900">
                  Catering Price Estimate
                </h3>
              </div>

              {/* Guest Count Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-bold text-stone-800">
                  <span>Number of Guests:</span>
                  <span className="text-esmeralda-700 font-black text-lg bg-white px-3 py-1 rounded-xl border border-stone-200">
                    {guestCount} people
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="200"
                  step="5"
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="w-full accent-esmeralda-600 h-2 bg-stone-200 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-stone-500">
                  <span>10 min</span>
                  <span>100</span>
                  <span>200+</span>
                </div>
              </div>

              {/* Selected Package Selector */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-stone-700">Choose Package</label>
                <select
                  value={packageChoice}
                  onChange={(e) => setPackageChoice(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-stone-200 bg-white text-xs sm:text-sm font-semibold text-stone-800 outline-none focus:ring-2 focus:ring-esmeralda-500"
                >
                  <option value="taco-bar">Authentic Street Taco Bar ($13.50/person)</option>
                  <option value="burrito-box">Burrito Box Lunches ($12.00/person)</option>
                  <option value="royal-fiesta">The Royal Fiesta Spread ($16.50/person)</option>
                </select>
              </div>

              {/* Calculation Summary */}
              <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-2">
                <div className="flex justify-between text-xs text-stone-600">
                  <span>Rate per person</span>
                  <span className="font-semibold text-stone-900">${pricePerPerson.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xs text-stone-600">
                  <span>Guests</span>
                  <span className="font-semibold text-stone-900">{guestCount}</span>
                </div>
                <div className="flex justify-between text-sm font-black text-stone-900 pt-2 border-t border-stone-100">
                  <span>Estimated Total</span>
                  <span className="text-esmeralda-800 text-lg">${estimatedCost}</span>
                </div>
                <p className="text-[10px] text-stone-400">
                  * Plus applicable NC sales tax. Chafing fuel & wire racks available upon request.
                </p>
              </div>
            </div>

            {/* Right: Booking Inquiry Form */}
            <div className="lg:col-span-7">
              <h3 className="font-serif font-bold text-2xl text-stone-900 mb-2">
                Reserve Your Catering Date
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mb-6">
                Fill out the form below or call us at (919) 377-2455. We typically confirm catering inquiries within a few hours.
              </p>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-3">
                  <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="font-serif font-bold text-2xl text-emerald-950">Inquiry Received!</h4>
                  <p className="text-sm text-emerald-800 max-w-md mx-auto">
                    Thank you, {name}! We have received your catering request for {guestCount} guests. We will reach out to confirm menu preferences and timing.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-4 py-2 bg-emerald-700 text-white font-bold text-xs rounded-xl"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">Contact Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sarah Jenkins"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs sm:text-sm focus:ring-2 focus:ring-esmeralda-500 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. (919) 555-0123"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs sm:text-sm focus:ring-2 focus:ring-esmeralda-500 outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. sarah@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs sm:text-sm focus:ring-2 focus:ring-esmeralda-500 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">Event Date *</label>
                      <input
                        type="date"
                        required
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs sm:text-sm focus:ring-2 focus:ring-esmeralda-500 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">Dietary Preferences or Special Requests</label>
                    <textarea
                      rows={3}
                      placeholder="e.g. need vegetarian taco option, delivery location in RTP, Horchata dispenser..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs sm:text-sm focus:ring-2 focus:ring-esmeralda-500 outline-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-esmeralda-700 hover:bg-esmeralda-800 text-white font-bold text-sm shadow-md transition-all active:scale-[0.99]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Catering Request</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
