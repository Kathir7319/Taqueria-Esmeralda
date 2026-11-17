import React, { useState } from 'react';
import { X, Trash2, Phone, ShoppingBag, Plus, Minus, Check, Clock, MapPin, Copy } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { restaurantInfo } from '../data/restaurantInfo';

export const OrderDrawer: React.FC = () => {
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, clearCart, totalPrice, totalItems } = useCart();
  const [copied, setCopied] = useState(false);

  if (!isCartOpen) return null;

  const tax = totalPrice * 0.0725; // NC sales tax approx 7.25%
  const grandTotal = totalPrice + tax;

  const orderSummaryText = cart.map(item => {
    let details = `${item.quantity}x ${item.menuItem.name} ($${item.totalPrice.toFixed(2)})`;
    if (item.selectedMeat) details += `\n   - Meat: ${item.selectedMeat}`;
    if (item.selectedTortilla) details += `\n   - Tortilla: ${item.selectedTortilla}`;
    if (item.selectedSalsa) details += `\n   - Salsa: ${item.selectedSalsa}`;
    if (item.specialInstructions) details += `\n   - Note: ${item.specialInstructions}`;
    return details;
  }).join('\n\n') + `\n\nEstimated Subtotal: $${totalPrice.toFixed(2)}\nEst. Total with Tax: $${grandTotal.toFixed(2)}\nPickup at Taqueria Esmeralda (413 State Rd 3015, Morrisville)`;

  const handleCopyOrder = () => {
    navigator.clipboard.writeText(orderSummaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm transition-opacity">
      <div 
        className="fixed inset-y-0 right-0 max-w-full flex pl-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-stone-50">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-esmeralda-600 text-white flex items-center justify-center font-bold">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-stone-900 leading-tight">Your Order</h3>
                <p className="text-xs text-stone-500">{totalItems} {totalItems === 1 ? 'item' : 'items'} ready for takeout</p>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="w-8 h-8 rounded-full bg-stone-200/60 text-stone-600 hover:bg-stone-300 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Pickup Notice */}
          <div className="bg-emerald-50 px-4 py-2.5 border-b border-emerald-100 flex items-center justify-between text-xs text-emerald-900 font-medium">
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
              <span>Est. Pickup: <strong>15 - 20 mins</strong></span>
            </div>
            <div className="flex items-center gap-1 text-[11px] text-emerald-700">
              <MapPin className="w-3 h-3" />
              <span>Morrisville, NC</span>
            </div>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center text-stone-400 py-12">
                <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center mb-3">
                  <ShoppingBag className="w-8 h-8 text-stone-300" />
                </div>
                <h4 className="font-serif font-bold text-stone-700 text-lg">Your bag is hungry!</h4>
                <p className="text-xs text-stone-500 max-w-xs mt-1">
                  Explore our authentic street tacos, burritos, and house specialties to start your order.
                </p>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.cartId}
                  className="p-3.5 rounded-2xl border border-stone-200 bg-stone-50/50 hover:bg-white transition-colors"
                >
                  <div className="flex justify-between items-start gap-2">
                    <div className="flex-1">
                      <h4 className="font-bold text-sm text-stone-900">{item.menuItem.name}</h4>
                      <p className="text-xs text-esmeralda-700 font-medium">{item.menuItem.spanishName}</p>
                      
                      {item.selectedMeat && (
                        <p className="text-[11px] text-stone-600 mt-1">
                          • <strong className="text-stone-700">Meat:</strong> {item.selectedMeat}
                        </p>
                      )}
                      {item.selectedTortilla && (
                        <p className="text-[11px] text-stone-600">
                          • <strong className="text-stone-700">Tortilla:</strong> {item.selectedTortilla}
                        </p>
                      )}
                      {item.selectedSalsa && (
                        <p className="text-[11px] text-stone-600">
                          • <strong className="text-stone-700">Salsa:</strong> {item.selectedSalsa}
                        </p>
                      )}
                      {item.specialInstructions && (
                        <p className="text-[11px] italic text-amber-700 mt-0.5">
                          "{item.specialInstructions}"
                        </p>
                      )}
                    </div>

                    <div className="text-right">
                      <span className="font-bold text-sm text-stone-900">${item.totalPrice.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="mt-3 pt-2 border-t border-stone-200/60 flex items-center justify-between">
                    <div className="flex items-center gap-1 bg-white border border-stone-200 rounded-lg p-0.5">
                      <button
                        onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                        className="p-1 hover:text-esmeralda-700 text-stone-500 transition-colors"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-xs font-bold px-2 text-stone-800">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                        className="p-1 hover:text-esmeralda-700 text-stone-500 transition-colors"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.cartId)}
                      className="text-stone-400 hover:text-red-500 transition-colors p-1"
                      title="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Call-to-Action */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-stone-200 bg-stone-50 space-y-3.5">
              <div className="space-y-1.5 text-xs text-stone-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-stone-900">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Tax (7.25%)</span>
                  <span className="font-semibold text-stone-900">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-stone-900 pt-2 border-t border-stone-200">
                  <span>Total Due at Pickup</span>
                  <span className="text-esmeralda-800">${grandTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2">
                <a
                  href={`tel:${restaurantInfo.phone}`}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-esmeralda-700 hover:bg-esmeralda-800 text-white font-bold text-sm shadow-md transition-all active:scale-[0.99]"
                >
                  <Phone className="w-4 h-4 fill-white" />
                  <span>Call to Place Order: {restaurantInfo.phoneDisplay}</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyOrder}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white hover:bg-stone-100 text-stone-800 font-semibold text-xs border border-stone-300 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">Order Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-stone-500" />
                      <span>Copy Itemized Order for Phone/SMS</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex justify-between items-center pt-1 text-[11px] text-stone-400">
                <span>Pay cash or card when picking up</span>
                <button
                  onClick={clearCart}
                  className="text-stone-500 hover:text-red-500 underline"
                >
                  Clear bag
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
