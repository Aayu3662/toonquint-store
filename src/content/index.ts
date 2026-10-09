import { schemas } from './schemas';

export const pages = {
  home: {
    hero: {
      eyebrow: "New drops every week",
      headline: "Your anime universe starts here",
      subheadline: "Apparel, accessories & collectibles for fans who live the culture.",
      ctaLabel: "Shop Now",
      ctaHref: "/shop"
    },
    ticker: {
      items: [
        "Apparel",
        "Accessories",
        "Collectibles",
        "Hoodies",
        "Figures",
        "Keychains",
        "Posters",
        "Tote Bags",
        "Enamel Pins",
        "Plushies",
        "Stickers",
        "Caps"
      ]
    },
    featuredProducts: {
      heading: "Fan Favourites",
      subheading: "The merch everyone's talking about",
      products: [
        {
          id: "fp1",
          name: "Anime Oversized Hoodie",
          price: "₹1,499",
          badge: "Bestseller",
          image: "/airo-assets/images/pages/home/hero-product"
        },
        {
          id: "fp2",
          name: "Collectible Figure Set",
          price: "₹2,199",
          badge: "New",
          image: "/airo-assets/images/pages/home/collectibles"
        },
        {
          id: "fp3",
          name: "Kawaii Backpack",
          price: "₹999",
          badge: "Hot",
          image: "/airo-assets/images/pages/home/accessories"
        }
      ]
    },
    categories: {
      heading: "Shop by Category",
      items: [
        {
          id: "cat1",
          name: "Apparel",
          description: "Hoodies, tees & more",
          href: "/shop?cat=apparel",
          image: "/airo-assets/images/pages/home/category-apparel"
        },
        {
          id: "cat2",
          name: "Accessories",
          description: "Bags, pins & keychains",
          href: "/shop?cat=accessories",
          image: "/airo-assets/images/pages/home/category-accessories"
        },
        {
          id: "cat3",
          name: "Collectibles",
          description: "Figures, plushies & more",
          href: "/shop?cat=collectibles",
          image: "/airo-assets/images/pages/home/category-collectibles"
        }
      ]
    },
    community: {
      eyebrow: "Join the fandom",
      headline: "Built by fans, for fans",
      body: "Toonquint is more than a store — it's a community of people who grew up on cartoons and never stopped loving them. Every product is picked with passion.",
      ctaLabel: "Explore the Shop",
      ctaHref: "/shop"
    }
  },
  shop: {
    hero: {
      eyebrow: "All Products",
      headline: "The Full Collection",
      subheading: "Apparel, accessories & collectibles — all in one place."
    }
  }
};

export const data = {
  products: [
    {
      id: "1",
      name: "Anime Oversized Hoodie",
      description: "Ultra-soft oversized hoodie with bold anime graphic print. Perfect for fans who want to wear their passion.",
      price: "₹1,499",
      badge: "Hot",
      category: "apparel",
      image: "/airo-assets/images/pages/home/hero-product",
      affiliateUrl: "https://www.amazon.in",
      marketplace: "Amazon"
    },
    {
      id: "2",
      name: "Collectible Figure Set",
      description: "Set of 3 hand-painted anime collectible figures. Display-ready with premium packaging.",
      price: "₹2,199",
      badge: "New",
      category: "collectibles",
      image: "/airo-assets/images/pages/home/collectibles",
      affiliateUrl: "https://www.amazon.in",
      marketplace: "Amazon"
    },
    {
      id: "3",
      name: "Kawaii Backpack",
      description: "Compact kawaii-style backpack with anime character embroidery. Water-resistant and super cute.",
      price: "₹999",
      badge: "Popular",
      category: "accessories",
      image: "/airo-assets/images/pages/home/accessories",
      affiliateUrl: "https://www.flipkart.com",
      marketplace: "Flipkart"
    },
    {
      id: "4",
      name: "Anime Graphic Tee",
      description: "100% cotton tee with a vibrant anime-inspired graphic. Unisex fit, available in multiple sizes.",
      price: "₹799",
      badge: "Bestseller",
      category: "apparel",
      image: "/airo-assets/images/pages/home/featured-tshirt",
      affiliateUrl: "https://www.amazon.in",
      marketplace: "Amazon"
    },
    {
      id: "5",
      name: "Enamel Pin Set",
      description: "Set of 5 hard enamel pins featuring iconic anime characters. Perfect for bags, jackets, and lanyards.",
      price: "₹499",
      badge: "Fan Fave",
      category: "accessories",
      image: "/airo-assets/images/pages/home/category-accessories",
      affiliateUrl: "https://www.flipkart.com",
      marketplace: "Flipkart"
    },
    {
      id: "6",
      name: "Anime Plushie",
      description: "Super-soft plushie of your favourite anime character. 25cm tall, machine washable.",
      price: "₹1,299",
      badge: "Cute",
      category: "collectibles",
      image: "/airo-assets/images/pages/home/category-collectibles",
      affiliateUrl: "https://www.amazon.in",
      marketplace: "Amazon"
    }
  ]
};

export const home = pages.home;
export const shop = pages.shop;
export const products = data.products;
