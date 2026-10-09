# Toonquint — Anime & Cartoon Merch Store

A modern e-commerce storefront for anime and cartoon merchandise built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
The application will be accessible at `http://localhost:3000`.

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Structure

* **`src/`**
  * `pages/`
    * `index.tsx` — Homepage featuring Hero, Product Ticker, Fan Favourites, and Category Grid.
    * `shop.tsx` — Full catalog with category filtering (All, Apparel, Accessories, Collectibles) and affiliate direct checkout links.
    * `_404.tsx` — User-friendly 404 Not Found page.
  * `layouts/`
    * `RootLayout.tsx` — Global shell managing metadata, headers, footers, and scroll restoration.
    * `parts/Header.tsx` — Sticky header with responsive navigation and logo.
    * `parts/Footer.tsx` — Footer with newsletter/social links and copyright.
  * `content/`
    * `index.ts` — Centralized content store (hero copy, product list, categories, community text).
    * `schemas.ts` — Zod schema validation.
  * `styles/`
    * `globals.css` — Custom design system tokens, Fredoka One & Nunito web fonts, and animation variables.
* **`public/`**
  * Assets, icons, and product images.
