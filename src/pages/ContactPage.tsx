import React, { useState } from 'react';
import { Phone, MapPin, Clock, Mail, Send, CheckCircle, ExternalLink, HelpCircle, ChevronDown } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantInfo';

export const ContactPage: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setName('');
      setPhone('');
      setMessage('');
    }, 1000);
  };

  const faqs = [
    {
      q: "Can I call ahead to place a takeout order?",
      a: "Yes! We strongly encourage calling ahead at (919) 377-2455. Most street taco, burrito, and torta orders are prepared fresh and ready for pickup within 15 to 20 minutes."
    },
    {
      q: "Are your corn tortillas gluten-free?",
      a: "Yes! Our traditional street tacos are served on warm double corn tortillas which are naturally gluten-free. Please let us know if you have severe allergies so our kitchen takes extra care."
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept major credit/debit cards (Visa, Mastercard, Amex), Apple Pay, and cash."
    },
    {
      q: "Do you offer catering for corporate lunches or parties in Morrisville & RTP?",
      a: "Absolutely! We cater street taco bars, burritos, chips & guacamole trays, and fresh agua fresca dispensers for corporate offices in Research Triangle Park, family birthdays, and local events. See our Catering page or call us directly."
    }
  ];

  return (
    <div className="min-h-screen bg-masa-50 py-12 sm:py-20 text-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-esmeralda-700 bg-esmeralda-100/80 px-3.5 py-1 rounded-full">
            Find Us & Get in Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-black text-stone-900 tracking-tight">
            Contact & Location
          </h1>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Conveniently located in Morrisville, NC. Stop by for hot tacos or call ahead for quick pickup!
          </p>
        </div>

        {/* 3 Core Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Location */}
          <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-md flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-xl text-stone-900">Our Address</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                {restaurantInfo.address}
              </p>
            </div>
            <div className="mt-auto pt-6">
              <a
                href={restaurantInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-esmeralda-700 hover:text-esmeralda-900 group"
              >
                <span>Get Directions in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Card 2: Phone */}
          <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-md flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-xl text-stone-900">Call to Order</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Call ahead for quick takeout orders and large party orders.
              </p>
              <p className="text-2xl font-serif font-bold text-stone-900">
                {restaurantInfo.phoneDisplay}
              </p>
            </div>
            <div className="mt-auto pt-6">
              <a
                href={`tel:${restaurantInfo.phone}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-esmeralda-700 hover:bg-esmeralda-800 text-white font-bold text-xs shadow-sm transition-all whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5 fill-white" />
                <span>Call Now: 919-377-2455</span>
              </a>
            </div>
          </div>

          {/* Card 3: Hours */}
          <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-md flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-700 flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-xl text-stone-900">Hours of Operation</h3>
              <div className="space-y-1 text-xs text-stone-600">
                <div className="flex justify-between py-0.5 border-b border-stone-100">
                  <span className="font-semibold text-stone-700">Mon - Thu:</span>
                  <span>11:00 AM - 8:30 PM</span>
                </div>
                <div className="flex justify-between py-0.5 border-b border-stone-100">
                  <span className="font-semibold text-stone-700">Fri - Sat:</span>
                  <span>11:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="font-semibold text-stone-700">Sunday:</span>
                  <span>11:30 AM - 8:00 PM</span>
                </div>
              </div>
            </div>
            <div className="mt-auto pt-6 text-xs font-semibold text-emerald-700 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Open Today for Lunch & Dinner</span>
            </div>
          </div>

        </div>

        {/* Map & Form Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Interactive Google Map Embed */}
          <div className="lg:col-span-7 bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-md p-2">
            <div className="p-4 bg-stone-50 rounded-2xl mb-2 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-sm text-stone-900">Taqueria Esmeralda on Map</h4>
                <p className="text-xs text-stone-500">413 State Rd 3015, Morrisville, NC 27560</p>
              </div>
              <a
                href={restaurantInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-esmeralda-700 hover:underline flex items-center gap-1"
              >
                <span>Full Map</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="h-96 w-full rounded-2xl overflow-hidden relative bg-stone-100">
              <iframe
                title="Taqueria Esmeralda Location Map"
                src="https://maps.google.com/maps?q=413+State+Rd+3015,+Morrisville,+NC+27560&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Quick Message / Feedback Form */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-md">
            <h3 className="font-serif font-bold text-2xl text-stone-900 mb-2">
              Send Us a Message
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mb-6 leading-relaxed">
              Have questions about allergens, catering inquiries, or general feedback? We'd love to hear from you.
            </p>

            {formSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3">
                <CheckCircle className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-serif font-bold text-lg text-emerald-950">Message Sent!</h4>
                <p className="text-xs text-emerald-800">
                  Thank you for reaching out to Taqueria Esmeralda. We will respond promptly!
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-2 text-xs font-bold text-emerald-700 underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Maria Gonzalez"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs sm:text-sm focus:ring-2 focus:ring-esmeralda-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. (919) 555-0199"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs sm:text-sm focus:ring-2 focus:ring-esmeralda-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Message / Question</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="How can we help you today?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs sm:text-sm focus:ring-2 focus:ring-esmeralda-500 outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-esmeralda-700 hover:bg-esmeralda-800 text-white font-bold text-sm shadow-md transition-all active:scale-[0.99]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* FAQ Accordion Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-md">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-50 px-3.5 py-1 rounded-full border border-amber-200">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-black text-stone-900 mt-2">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-stone-200 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left bg-stone-50/50 hover:bg-stone-50"
                >
                  <span className="font-bold text-sm sm:text-base text-stone-900">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-stone-500 transition-transform ${
                      activeFaq === idx ? 'rotate-180 text-esmeralda-600' : ''
                    }`}
                  />
                </button>
                {activeFaq === idx && (
                  <div className="p-4 sm:p-5 bg-white border-t border-stone-100 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
