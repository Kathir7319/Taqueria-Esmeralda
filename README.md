# 🌮 Taqueria Esmeralda - Authentic Mexican Street Food Website

> A modern, mobile-responsive, multi-page website for **Taqueria Esmeralda** in Morrisville, NC. Built with React 18, TypeScript, Tailwind CSS, Lucide Icons, and React Router.

[![Vercel Deployment](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/)
[![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

---

## 🌟 Highlights & Features

- **Emerald & Aztec Artisanal Brand Identity**:
  - Handcrafted SVG Logo (`/public/logo.svg` & `<Logo />` component) combining the emerald jewel facet of *Esmeralda* with double-corn folded tacos, charred al pastor, sweet pineapple, fresh cilantro, and warm sunburst motifs.
- **Continuous Running Google Reviews Ticker**:
  - Features real, verified customer reviews and quotes from [Taqueria Esmeralda's Google Profile](https://share.google/j7a6EbVm6p5KF0HDl) (holding a **4.7 ★ rating** from 180+ community reviews).
  - Infinite smooth marquee animation with hover-to-pause and direct link to Google Maps.
- **Multi-Page Experience**:
  - `Home` (`/`): High-converting Hero banner, quick highlights, about brief, plancha-seared street tacos preview, and call-to-order banner.
  - `Menu` (`/menu`): Full interactive menu with categories (Street Tacos, Burritos, Quesadillas, Tortas, Antojitos/Sides, Bebidas, Postres), search filter, gluten-free tag, and customizable protein & salsa options.
  - `About Us` (`/about`): The culinary heritage, Michoacán traditions, 24-hour slow marinades, and 4 pillars of kitchen excellence.
  - `Google Reviews` (`/reviews`): Comprehensive community review wall with rating breakdowns, category filtering, and review submission dialog.
  - `Catering & Events` (`/catering`): Dedicated corporate & private event catering with instant pricing calculator, package selector, and booking form.
  - `Contact & Location` (`/contact`): Interactive Google Maps embed for 413 State Rd 3015, Morrisville, NC, real-time operating hours badge, and FAQ accordion.
- **Interactive Takeout Ordering System**:
  - Full customization modal for selecting meats (Carne Asada, Pollo, Al Pastor, Carnitas, Barbacoa, Chorizo, Veggie), corn/flour tortillas, and salsas (Verde, Roja, Habanero).
  - Slide-out order bag drawer with live subtotal, tax calculation, and 1-click **"Call to Order: (919) 377-2455"** or **"Copy Itemized Order"**.
- **100% Mobile Responsive & Accessible**:
  - Mobile slide-down navigation drawer, sticky order bar, touch-friendly buttons, and high-contrast typography.

---

## 🌮 Restaurant Details

- **Name**: Taqueria Esmeralda
- **Address**: 413 State Rd 3015, Morrisville, NC 27560, United States
- **Phone**: +1 919-377-2455
- **Google Rating**: 4.7 ★ (180+ reviews)
- **Google Reviews Link**: [share.google/j7a6EbVm6p5KF0HDl](https://share.google/j7a6EbVm6p5KF0HDl)

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (v18+)
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/taqueria-esmeralda.git
cd taqueria-esmeralda

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` in your browser.

---

## 🛠️ Build & Verification

```bash
# Run TypeScript checks and production build
npm run build

# Preview production build locally
npm run preview
```

---

## 🚢 GitHub Push & Vercel Deployment Guide

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "feat: Initial commit for Taqueria Esmeralda website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/taqueria-esmeralda.git
git push -u origin main
```

### 2. Deploy to Vercel

#### Option A: Via Vercel CLI
```bash
npx vercel
# Follow prompt, defaults work automatically
```

#### Option B: Via Vercel Dashboard (Recommended)
1. Go to [vercel.com](https://vercel.com) and log in.
2. Click **"Add New Project"** > **"Import Git Repository"**.
3. Select your `taqueria-esmeralda` repository.
4. Framework Preset: **Vite** (auto-detected).
5. Click **"Deploy"**.
6. The `vercel.json` already included in this repository handles SPA route rewrites seamlessly!

---

© 2026 Taqueria Esmeralda. All Rights Reserved. Handcrafted Authentic Mexican Street Food.
