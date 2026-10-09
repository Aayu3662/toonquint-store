export interface SiteMeta {
  name: string;
  summary: string;
  url: string;
  logo: string;
  description: string;
}

export const siteMeta: SiteMeta = {
  name: "Toonquint",
  summary: "Toonquint is an online store for anime and cartoon merchandise — apparel, accessories, and collectibles for fans who live the culture.",
  url: (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_SITE_URL) 
    ? import.meta.env.VITE_SITE_URL.replace(/\/$/, '') 
    : "https://toonquint.store",
  logo: "/airo-assets/images/logo/horizontal",
  description: "Shop curated anime and cartoon merchandise at Toonquint — oversized hoodies, collectible figures, kawaii backpacks, graphic tees, ceramic cups, and pins for passionate fans."
};
