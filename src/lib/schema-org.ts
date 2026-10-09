import { siteMeta } from './site-meta';

/**
 * Structured Data Helper following Schema.org and Google Search guidelines.
 * Accurately represents anime affiliate store data without fabricated reviews or ratings.
 */

export interface ProductItem {
  id: string;
  name: string;
  description: string;
  price: string;
  badge?: string;
  category: string;
  image: string;
  affiliateUrl: string;
  marketplace: string;
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteMeta.url}/#organization`,
    "name": siteMeta.name,
    "url": `${siteMeta.url}/`,
    "logo": `${siteMeta.url}${siteMeta.logo}`,
    "description": siteMeta.description,
    "sameAs": []
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteMeta.url}/#website`,
    "url": `${siteMeta.url}/`,
    "name": siteMeta.name,
    "description": siteMeta.description,
    "publisher": {
      "@id": `${siteMeta.url}/#organization`
    }
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url.startsWith("http") ? item.url : `${siteMeta.url}${item.url}`
    }))
  };
}

export function generateProductListSchema(products: ProductItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Curated Anime Merchandise",
    "description": "Featured anime clothing, figures, collectibles, and accessories.",
    "numberOfItems": products.length,
    "itemListElement": products.map((product, index) => {
      // Parse numerical price from string like "₹1,499" -> 1499
      const numericPrice = parseFloat(product.price.replace(/[^\d.]/g, '')) || 0;
      
      return {
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Product",
          "name": product.name,
          "description": product.description,
          "image": product.image.startsWith("http") ? product.image : `${siteMeta.url}${product.image}`,
          "category": product.category,
          "offers": {
            "@type": "Offer",
            "priceCurrency": "INR",
            "price": numericPrice,
            "availability": "https://schema.org/InStock",
            "url": product.affiliateUrl,
            "seller": {
              "@type": "Organization",
              "name": product.marketplace
            }
          }
        }
      };
    })
  };
}

export function generateArticleSchema(params: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": params.title,
    "description": params.description,
    "url": params.url.startsWith("http") ? params.url : `${siteMeta.url}${params.url}`,
    "datePublished": params.datePublished,
    "dateModified": params.dateModified,
    "author": {
      "@type": "Organization",
      "name": siteMeta.name,
      "url": `${siteMeta.url}/`
    },
    "publisher": {
      "@id": `${siteMeta.url}/#organization`
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": params.url.startsWith("http") ? params.url : `${siteMeta.url}${params.url}`
    }
  };
}
