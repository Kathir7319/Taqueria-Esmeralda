import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { RunningReviews } from './components/RunningReviews';
import { OrderDrawer } from './components/OrderDrawer';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { AboutPage } from './pages/AboutPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { ContactPage } from './pages/ContactPage';
import { CateringPage } from './pages/CateringPage';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="flex flex-col min-h-screen bg-masa-50 text-stone-900 font-sans selection:bg-esmeralda-600 selection:text-white">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/reviews" element={<ReviewsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/catering" element={<CateringPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          {/* Running Google Reviews Marquee directly above footer */}
          <RunningReviews />
          <Footer />
          <OrderDrawer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
