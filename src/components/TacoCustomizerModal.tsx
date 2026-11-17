import React, { useState } from 'react';
import { X, Flame, Plus, Minus, Check, ShoppingBag } from 'lucide-react';
import { MenuItem } from '../types';
import { useCart } from '../context/CartContext';
import confetti from 'canvas-confetti';

interface TacoCustomizerModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export const TacoCustomizerModal: React.FC<TacoCustomizerModalProps> = ({ item, onClose }) => {
  const { addToCart } = useCart();
  
  if (!item) return null;

  const defaultMeat = item.options?.meats?.[0] || 'Carne Asada (Grilled Steak)';
  const defaultSalsa = item.options?.salsas?.[0] || 'Salsa Verde (Mild Tomatillo & Cilantro)';
  const defaultTortilla = item.options?.tortillas?.[0] || 'Warm Double Corn Tortillas (Traditional Gluten-Free)';

  const [selectedMeat, setSelectedMeat] = useState<string>(defaultMeat);
  const [selectedSalsa, setSelectedSalsa] = useState<string>(defaultSalsa);
  const [selectedTortilla, setSelectedTortilla] = useState<string>(defaultTortilla);
  const [specialInstructions, setSpecialInstructions] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);

  const handleAdd = () => {
    addToCart(
      item,
      quantity,
      item.options?.meats ? selectedMeat : undefined,
      item.options?.salsas ? selectedSalsa : undefined,
      item.options?.tortillas ? selectedTortilla : undefined,
      specialInstructions || undefined
    );

    // Festive confetti animation!
    try {
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#10b981', '#f59e0b', '#e11d48']
      });
    } catch {
      // safe fallback
    }

    onClose();
  };

  const totalPrice = (item.price * quantity).toFixed(2);

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-stone-200 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Image Header */}
        <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-stone-900">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 text-white hover:bg-black/80 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-5 right-5 text-white">
            <span className="text-xs font-bold text-amber-300 uppercase tracking-widest block mb-1">
              {item.spanishName}
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold leading-tight">
              {item.name}
            </h3>
            <p className="text-sm font-semibold text-emerald-300 mt-1">
              ${item.price.toFixed(2)} each
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            {item.description}
          </p>

          {/* Meat Options */}
          {item.options?.meats && (
            <div className="space-y-2">
              <label className="flex items-center justify-between text-xs font-bold text-stone-900 uppercase tracking-wider">
                <span>Select Protein / Meat</span>
                <span className="text-esmeralda-600 font-semibold normal-case text-xs">Required</span>
              </label>
              <div className="grid grid-cols-1 gap-2">
                {item.options.meats.map((meat) => (
                  <button
                    key={meat}
                    type="button"
                    onClick={() => setSelectedMeat(meat)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm text-left transition-all border ${
                      selectedMeat === meat
                        ? 'border-esmeralda-600 bg-esmeralda-50 text-esmeralda-950 font-semibold ring-1 ring-esmeralda-600'
                        : 'border-stone-200 hover:border-stone-300 text-stone-700 bg-white'
                    }`}
                  >
                    <span>{meat}</span>
                    {selectedMeat === meat && <Check className="w-4 h-4 text-esmeralda-600 flex-shrink-0" />}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Tortilla Options */}
          {item.options?.tortillas && (
            <div className="space-y-2">
              <label className="block text-xs font-bold text-stone-900 uppercase tracking-wider">
                Tortilla Choice
              </label>
              <div className="grid grid-cols-1 gap-2">
                {item.options.tortillas.map((tortilla) => (
                  <button
                    key={tortilla}
                    type="button"
                    onClick={() => setSelectedTortilla(tortilla)}
                    className={`flex items-center justify-between px-3.5 py-2 rounded-xl text-xs sm:text-sm text-left transition-all border ${
                      selectedTortilla === tortilla
                        ? 'border-esmeralda-600 bg-esmeralda-50 text-esmeralda-950 font-semibold ring-1 ring-esmeralda-600'
                        : 'border-stone-200 hover:border-stone-300 text-stone-700 bg-white'
                    }`}
                  >
                    <span>{tortilla}</span>
                    {selectedTortilla === tortilla && <Check className="w-4 h-4 text-esmeralda-600 flex-shrink-0" />}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Salsa Options */}
          {item.options?.salsas && (
            <div className="space-y-2">
              <label className="flex items-center gap-1.5 text-xs font-bold text-stone-900 uppercase tracking-wider">
                <Flame className="w-3.5 h-3.5 text-terracotta-500" />
                <span>Choose House Salsa</span>
              </label>
              <div className="grid grid-cols-1 gap-2">
                {item.options.salsas.map((salsa) => (
                  <button
                    key={salsa}
                    type="button"
                    onClick={() => setSelectedSalsa(salsa)}
                    className={`flex items-center justify-between px-3.5 py-2 rounded-xl text-xs sm:text-sm text-left transition-all border ${
                      selectedSalsa === salsa
                        ? 'border-esmeralda-600 bg-esmeralda-50 text-esmeralda-950 font-semibold ring-1 ring-esmeralda-600'
                        : 'border-stone-200 hover:border-stone-300 text-stone-700 bg-white'
                    }`}
                  >
                    <span>{salsa}</span>
                    {selectedSalsa === salsa && <Check className="w-4 h-4 text-esmeralda-600 flex-shrink-0" />}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Special Instructions */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-stone-900 uppercase tracking-wider">
              Special Instructions (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g., extra lime, no onions, salsa on the side..."
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl border border-stone-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-esmeralda-500"
            />
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-stone-50 border-t border-stone-100 flex items-center justify-between gap-4">
          {/* Quantity Stepper */}
          <div className="flex items-center border border-stone-200 rounded-xl bg-white shadow-sm">
            <button
              type="button"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-2.5 text-stone-600 hover:text-stone-900 transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="px-3 text-sm font-bold text-stone-900 min-w-[2rem] text-center">
              {quantity}
            </span>
            <button
              type="button"
              onClick={() => setQuantity(quantity + 1)}
              className="p-2.5 text-stone-600 hover:text-stone-900 transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          {/* Add to Cart button */}
          <button
            type="button"
            onClick={handleAdd}
            className="flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-2xl bg-esmeralda-600 hover:bg-esmeralda-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-esmeralda-600/30 transition-all hover:scale-[1.01] active:scale-[0.99]"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Add to Order • ${totalPrice}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
