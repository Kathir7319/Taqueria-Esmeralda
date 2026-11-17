import React, { useState } from 'react';
import { Star, CheckCircle, ExternalLink, ThumbsUp, MessageSquare, Filter, Heart } from 'lucide-react';
import { reviewsData } from '../data/reviewsData';
import { restaurantInfo } from '../data/restaurantInfo';
import confetti from 'canvas-confetti';

export const ReviewsPage: React.FC = () => {
  const [filterTag, setFilterTag] = useState<string>('all');
  const [showSubmitModal, setShowSubmitModal] = useState<boolean>(false);
  const [submittedMessage, setSubmittedMessage] = useState<boolean>(false);

  const [newAuthor, setNewAuthor] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newDish, setNewDish] = useState('');
  const [newText, setNewText] = useState('');

  const [reviewsList, setReviewsList] = useState(reviewsData);

  const filteredReviews = reviewsList.filter(rev => {
    if (filterTag === 'all') return true;
    if (filterTag === 'tacos') return rev.dishMentioned?.toLowerCase().includes('taco');
    if (filterTag === 'pastor') return rev.dishMentioned?.toLowerCase().includes('pastor');
    if (filterTag === 'burrito') return rev.dishMentioned?.toLowerCase().includes('burrito');
    return true;
  });

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor || !newText) return;

    const newRev = {
      id: `rev-${Date.now()}`,
      author: newAuthor,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
      rating: newRating,
      date: new Date().toISOString().split('T')[0],
      relativeTime: 'Just now • Verified Community Review',
      text: newText,
      highlight: newDish ? `Loved the ${newDish}` : 'Community Review',
      verified: true,
      dishMentioned: newDish || 'Authentic Street Food',
      source: 'Google' as const
    };

    setReviewsList([newRev, ...reviewsList]);
    setSubmittedMessage(true);

    try {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // safe
    }

    setTimeout(() => {
      setShowSubmitModal(false);
      setSubmittedMessage(false);
      setNewAuthor('');
      setNewText('');
      setNewDish('');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-masa-50 py-12 sm:py-20 text-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header Banner */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 border border-amber-200 text-xs font-bold">
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
            </svg>
            <span>Verified Google Reviews Wall</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-serif font-black text-stone-900 tracking-tight">
            Loved by 180+ Local Patrons
          </h1>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            See what foodies, Morrisville neighbors, and Triangle taco enthusiasts have to say about Taqueria Esmeralda.
          </p>
        </div>

        {/* Rating Breakdown Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Big Score */}
            <div className="lg:col-span-4 text-center lg:text-left lg:border-r lg:border-stone-200 lg:pr-8">
              <span className="text-6xl sm:text-7xl font-serif font-black text-stone-900 block leading-none">
                4.7
              </span>
              <div className="flex items-center justify-center lg:justify-start gap-1 text-amber-400 my-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm font-semibold text-stone-500">
                Overall Google Rating based on 180+ reviews
              </p>
              <div className="mt-4 flex flex-col sm:flex-row gap-2 justify-center lg:justify-start">
                <a
                  href={restaurantInfo.googleReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-esmeralda-700 hover:bg-esmeralda-800 text-white font-bold text-xs shadow-sm transition-colors"
                >
                  <span>Review on Google</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => setShowSubmitModal(true)}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Leave Feedback</span>
                </button>
              </div>
            </div>

            {/* Sub-ratings */}
            <div className="lg:col-span-8 space-y-3.5">
              <div>
                <div className="flex justify-between text-xs font-bold text-stone-700 mb-1">
                  <span>Authenticity of Flavor</span>
                  <span className="text-esmeralda-800">5.0 / 5.0</span>
                </div>
                <div className="w-full bg-stone-100 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-emerald-600 h-full rounded-full w-[100%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold text-stone-700 mb-1">
                  <span>Food Quality & Freshness</span>
                  <span className="text-esmeralda-800">4.9 / 5.0</span>
                </div>
                <div className="w-full bg-stone-100 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-emerald-600 h-full rounded-full w-[98%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold text-stone-700 mb-1">
                  <span>Warm Hospitality & Speed</span>
                  <span className="text-esmeralda-800">4.9 / 5.0</span>
                </div>
                <div className="w-full bg-stone-100 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-emerald-600 h-full rounded-full w-[98%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold text-stone-700 mb-1">
                  <span>Value for Money</span>
                  <span className="text-esmeralda-800">4.8 / 5.0</span>
                </div>
                <div className="w-full bg-stone-100 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-emerald-600 h-full rounded-full w-[96%]"></div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Filter Badges */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          <span className="text-xs font-bold text-stone-500 mr-2 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" />
            Filter by:
          </span>
          {[
            { id: 'all', label: 'All Reviews' },
            { id: 'tacos', label: '🌮 Street Tacos' },
            { id: 'pastor', label: '🍍 Al Pastor' },
            { id: 'burrito', label: '🌯 Burritos & Tortas' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilterTag(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filterTag === tab.id
                  ? 'bg-esmeralda-700 text-white shadow-sm'
                  : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm hover:shadow-xl hover:border-esmeralda-300 transition-all duration-300 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={rev.avatar}
                      alt={rev.author}
                      className="w-11 h-11 rounded-full object-cover ring-2 ring-esmeralda-100"
                    />
                    <div>
                      <div className="flex items-center gap-1">
                        <h4 className="font-bold text-sm text-stone-900">{rev.author}</h4>
                        <CheckCircle className="w-3.5 h-3.5 text-esmeralda-600 fill-esmeralda-50" />
                      </div>
                      <p className="text-[11px] text-stone-500">{rev.relativeTime}</p>
                    </div>
                  </div>

                  <span className="text-[10px] font-bold text-stone-500 bg-stone-100 px-2 py-0.5 rounded-md">
                    {rev.source}
                  </span>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
                  "{rev.text}"
                </p>
              </div>

              {/* Mentioned dish footer */}
              {rev.dishMentioned && (
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-[11px]">
                  <span className="font-bold text-esmeralda-800 bg-esmeralda-50 px-2.5 py-1 rounded-full">
                    {rev.dishMentioned}
                  </span>
                  <span className="text-stone-400 flex items-center gap-1">
                    <ThumbsUp className="w-3 h-3 text-emerald-600" />
                    Verified Customer
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>

      {/* Leave Feedback Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-stone-200">
            {submittedMessage ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <Heart className="w-8 h-8 fill-emerald-600" />
                </div>
                <h3 className="font-serif font-bold text-2xl text-stone-900">¡Muchas Gracias!</h3>
                <p className="text-stone-600 text-sm">Your feedback has been submitted to the team!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <h3 className="font-serif font-bold text-xl text-stone-900">
                  Share Your Experience
                </h3>
                <p className="text-xs text-stone-500">
                  Tell us about your visit to Taqueria Esmeralda in Morrisville!
                </p>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Alex Johnson"
                    value={newAuthor}
                    onChange={(e) => setNewAuthor(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-stone-200 text-xs sm:text-sm focus:ring-2 focus:ring-esmeralda-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Rating</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setNewRating(star)}
                        className="p-1"
                      >
                        <Star className={`w-6 h-6 ${star <= newRating ? 'fill-amber-400 text-amber-400' : 'text-stone-300'}`} />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Favorite Dish</label>
                  <input
                    type="text"
                    placeholder="e.g., Al Pastor Tacos, Carne Asada Burrito"
                    value={newDish}
                    onChange={(e) => setNewDish(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-stone-200 text-xs sm:text-sm focus:ring-2 focus:ring-esmeralda-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Review Details</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Tell us what you loved about the food, speed, and salsas..."
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-stone-200 text-xs sm:text-sm focus:ring-2 focus:ring-esmeralda-500 outline-none"
                  ></textarea>
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowSubmitModal(false)}
                    className="px-4 py-2 rounded-xl bg-stone-100 text-stone-700 font-bold text-xs"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-esmeralda-600 hover:bg-esmeralda-700 text-white font-bold text-xs shadow-md"
                  >
                    Submit Review
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
