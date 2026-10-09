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
        "Caps",
        "Ceramic Mugs"
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
    },
    {
      id: "7",
      name: "Anime Chibi Ceramic Cup",
      description: "Premium 350ml ceramic coffee mug with durable anime graphic print. Microwave & dishwasher safe.",
      price: "₹449",
      badge: "Trending",
      category: "accessories",
      image: "/airo-assets/images/products/anime-mug.jpg",
      affiliateUrl: "https://www.amazon.in",
      marketplace: "Amazon"
    },
    {
      id: "8",
      name: "Manga XXL Desk Gaming Mat",
      description: "900x400mm waterproof speed-weave desk mousepad with precision stitched edges and anti-slip rubber base.",
      price: "₹699",
      badge: "Top Rated",
      category: "accessories",
      image: "/airo-assets/images/products/desk-mat.jpg",
      affiliateUrl: "https://www.amazon.in",
      marketplace: "Amazon"
    },
    {
      id: "9",
      name: "Anime Character LED Acrylic Lamp",
      description: "16 RGB color night lamp with wireless touch remote, optical acrylic engraving, and dual USB/battery power.",
      price: "₹899",
      badge: "Cool Tech",
      category: "collectibles",
      image: "/airo-assets/images/products/led-lamp.jpg",
      affiliateUrl: "https://www.amazon.in",
      marketplace: "Amazon"
    },
    {
      id: "10",
      name: "Embroidered Cloud Knit Beanie",
      description: "Unisex ribbed winter skull cap with premium high-density cloud embroidery. Soft acrylic knit for all-day comfort.",
      price: "₹499",
      badge: "Streetwear",
      category: "apparel",
      image: "/airo-assets/images/products/beanie.jpg",
      affiliateUrl: "https://www.flipkart.com",
      marketplace: "Flipkart"
    },
    {
      id: "11",
      name: "Aesthetic Anime Wall Art Cards (50 Pcs)",
      description: "50-piece curated postcard collage kit on 300 GSM matte cardstock for bedroom and dorm room wall displays.",
      price: "₹399",
      badge: "Room Decor",
      category: "collectibles",
      image: "/airo-assets/images/products/wall-collage.jpg",
      affiliateUrl: "https://www.amazon.in",
      marketplace: "Amazon"
    },
    {
      id: "12",
      name: "The Anime Collector's Field Guide (PDF Ebook)",
      description: "68-page comprehensive handbook on figure scale evaluations, bootleg detection, and acrylic cabinet display care.",
      price: "₹199",
      badge: "Digital Book",
      category: "ebooks",
      image: "/airo-assets/images/products/ebook-collector.jpg",
      affiliateUrl: "/ebooks",
      marketplace: "Toonquint Digital"
    },
    {
      id: "13",
      name: "Mastering Manga Character Archetypes (PDF Ebook)",
      description: "84-page deep dive into Shonen protagonist formulas, deuteragonist foil dynamics, and visual silhouette design.",
      price: "₹249",
      badge: "Digital Book",
      category: "ebooks",
      image: "/airo-assets/images/products/ebook-archetypes.jpg",
      affiliateUrl: "/ebooks",
      marketplace: "Toonquint Digital"
    },
    {
      id: "14",
      name: "Anime Streetwear Styling Guide (PDF Ebook)",
      description: "52-page guide on GSM garment fabric weights, oversized drop proportions, and graphic print wash preservation.",
      price: "₹149",
      badge: "Digital Book",
      category: "ebooks",
      image: "/airo-assets/images/products/ebook-streetwear.jpg",
      affiliateUrl: "/ebooks",
      marketplace: "Toonquint Digital"
    }
  ]
};

export const home = pages.home;
export const shop = pages.shop;
export const products = data.products;
