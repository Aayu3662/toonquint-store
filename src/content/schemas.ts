import { z } from 'zod';
export const schemas = {
  pages: {
    home: z.object({
      "hero": z.object({
        "eyebrow": z.string(),
        "headline": z.string(),
        "subheadline": z.string(),
        "ctaLabel": z.string(),
        "ctaHref": z.string()
      }),
      "ticker": z.object({
        "items": z.array(z.string())
      }),
      "featuredProducts": z.object({
        "heading": z.string(),
        "subheading": z.string(),
        "products": z.array(z.object({
          "id": z.string(),
          "name": z.string(),
          "price": z.string(),
          "badge": z.string(),
          "image": z.string()
        }))
      }),
      "categories": z.object({
        "heading": z.string(),
        "items": z.array(z.object({
          "id": z.string(),
          "name": z.string(),
          "description": z.string(),
          "href": z.string(),
          "image": z.string()
        }))
      }),
      "community": z.object({
        "eyebrow": z.string(),
        "headline": z.string(),
        "body": z.string(),
        "ctaLabel": z.string(),
        "ctaHref": z.string()
      })
    }),
    shop: z.object({
      "hero": z.object({
        "eyebrow": z.string(),
        "headline": z.string(),
        "subheading": z.string()
      })
    })
  },
  data: {
    products: z.array(z.object({
      "id": z.string(),
      "name": z.string(),
      "description": z.string(),
      "price": z.string(),
      "badge": z.string(),
      "category": z.string(),
      "image": z.string(),
      "affiliateUrl": z.string(),
      "marketplace": z.string()
    }))
  }
};
export type Schemas = typeof schemas;