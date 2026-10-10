import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { useState } from 'react';
import { shop } from 'virtual:content';
import { products } from 'virtual:content';
import { ContentListContext } from '@airo/content';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router';
import { siteMeta } from '@/lib/site-meta';
import { generateProductListSchema, generateBreadcrumbSchema } from '@/lib/schema-org';
import AdSenseUnit from '@/components/AdSenseUnit';

function Starburst({ size = 40, color = '#FFE600' }: { size?: number; color?: string }) {
  const pts = Array.from({ length: 16 }, (_, i) => {
    const angle = (i * Math.PI) / 8;
    const r = i % 2 === 0 ? size / 2 : size / 4;
    return `${Math.cos(angle) * r},${Math.sin(angle) * r}`;
  }).join(' ');
  return (
    <svg width={size} height={size} viewBox={`${-size / 2} ${-size / 2} ${size} ${size}`} aria-hidden="true">
      <polygon points={pts} fill={color} />
    </svg>
  );
}

const CATEGORIES = [
  { value: 'all', label: 'All' },
  { value: 'apparel', label: 'Apparel' },
  { value: 'accessories', label: 'Accessories' },
  { value: 'collectibles', label: 'Collectibles' },
  { value: 'ebooks', label: 'Ebooks & Guides' },
];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const shopUrl = `${siteMeta.url}/shop`;
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Shop', url: '/shop' },
  ];
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);
  const productListSchema = generateProductListSchema(products);

  return (
    <>
      <Helmet>
        <title>Curated Anime Merchandise Catalog — Toonquint</title>
        <meta name="description" content="Browse curated anime and cartoon merchandise at Toonquint — oversized hoodies, collectible figures, kawaii daypacks, and hard enamel pins." />
        <link rel="canonical" href={shopUrl} />
        <meta property="og:title" content="Curated Anime Merchandise Catalog — Toonquint" />
        <meta property="og:description" content="Browse curated anime and cartoon merchandise at Toonquint — hoodies, accessories, collectibles, figures, and pins." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={shopUrl} />
        <meta property="og:image" content={`${siteMeta.url}/airo-assets/images/logo/horizontal`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Curated Anime Merchandise Catalog — Toonquint" />
        <meta name="twitter:description" content="Browse curated anime merchandise: oversized hoodies, collectible figure sets, daypacks, and enamel pins." />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(productListSchema)}
        </script>
      </Helmet>

      <main>
        {/* ── PAGE HEADER ── */}
        <section className="relative overflow-hidden py-14" style={{ background: '#1A1040' }}>
          <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true" style={{ opacity: 0.06 }}>
            <defs>
              <pattern id="halftone-shop" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="3" fill="#ffffff" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#halftone-shop)" />
          </svg>
          <motion.div className="absolute top-4 right-16 pointer-events-none" animate={{ rotate: 360 }} transition={{ duration: 22, ease: 'linear', repeat: Infinity }}>
            <Starburst size={56} color="#FFE600" />
          </motion.div>
          <motion.div className="absolute bottom-4 left-10 pointer-events-none" animate={{ rotate: -360 }} transition={{ duration: 30, ease: 'linear', repeat: Infinity }}>
            <Starburst size={36} color="#FF3D57" />
          </motion.div>

          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.span
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' as const }}
              className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border-2 border-white/30"
              style={{ color: '#FFE600', fontFamily: 'var(--font-sans)' }}
            >
              {shop.hero.eyebrow}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.05, ease: 'easeOut' as const }}
              className="text-5xl md:text-6xl"
              style={{ fontFamily: 'var(--font-heading)', color: '#FFE600' }}
            >
              {shop.hero.headline}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.12, ease: 'easeOut' as const }}
              className="mt-3 text-base max-w-md mx-auto"
              style={{ color: '#C0B8E8', fontFamily: 'var(--font-sans)' }}
            >
              {shop.hero.subheading}
            </motion.p>
          </div>
        </section>

        {/* ── YELLOW DIVIDER ── */}
        <div className="h-2 border-y-4 border-foreground" style={{ background: '#FFE600' }} />

        {/* ── FILTER TABS + GRID ── */}
        <section className="py-12" style={{ background: '#FFFFFF' }}>
          <div className="container mx-auto px-4">
            {/* Category filter */}
            <div className="flex flex-wrap gap-2 justify-center mb-10" role="group" aria-label="Filter by category">
              {CATEGORIES.map((cat) => (
                <motion.button
                  key={cat.value}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setActiveCategory(cat.value)}
                  className="px-5 py-2 rounded-full font-bold text-sm border-2 border-foreground transition-colors"
                  style={{
                    background: activeCategory === cat.value ? '#1A1040' : '#FFFFFF',
                    color: activeCategory === cat.value ? '#FFE600' : '#1A1040',
                    fontFamily: 'var(--font-sans)',
                  }}
                >
                  {cat.label}
                </motion.button>
              ))}
            </div>

            {/* Product grid — all products rendered; CSS visibility drives category filter */}
            <ContentListContext field="products">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product, i) => {
                  const borderColors = ['#FF3D57', '#FFE600', '#1A1040'];
                  const borderColor = borderColors[i % borderColors.length];
                  const badgeColors: Record<string, { bg: string; text: string }> = {
                    Hot:        { bg: '#FF3D57', text: '#FFFFFF' },
                    New:        { bg: '#1A1040', text: '#FFE600' },
                    Popular:    { bg: '#FFE600', text: '#1A1040' },
                    Bestseller: { bg: '#FF3D57', text: '#FFFFFF' },
                    'Fan Fave': { bg: '#FFE600', text: '#1A1040' },
                    Cute:       { bg: '#1A1040', text: '#FFE600' },
                  };
                  const badgeStyle = badgeColors[product.badge] ?? { bg: '#1A1040', text: '#FFE600' };
                  return (
                    <motion.article
                      key={product.id}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: (i % 3) * 0.08, ease: 'easeOut' as const }}
                      whileHover={{ scale: 1.03, transition: { type: 'spring', stiffness: 400, damping: 20 } }}
                      className={[
                        'group relative rounded-2xl overflow-hidden border-4 border-foreground flex flex-col',
                        activeCategory === 'all' || activeCategory === product.category ? '' : 'hidden',
                      ].join(' ')}
                      style={{ borderTopColor: borderColor, borderTopWidth: 6, background: '#FFFFFF' }}
                    >
                      {/* Badge */}
                      <span
                        className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border-2 border-foreground"
                        style={{ background: badgeStyle.bg, color: badgeStyle.text, fontFamily: 'var(--font-sans)' }}
                      >
                        {product.badge}
                      </span>

                      {/* Image */}
                      <div className="aspect-square overflow-hidden bg-gray-50">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                          width={400}
                          height={400}
                        />
                      </div>

                      {/* Info */}
                      <div className="p-4 flex flex-col gap-2 flex-1">
                        <h2
                          className="font-bold text-base leading-tight"
                          style={{ fontFamily: 'var(--font-sans)', color: '#1A1040' }}
                        >
                          {product.name}
                        </h2>
                        <p
                          className="text-xs leading-relaxed line-clamp-2 flex-1"
                          style={{ color: '#6B7280', fontFamily: 'var(--font-sans)' }}
                        >
                          {product.description}
                        </p>
                        <div className="flex items-center justify-between mt-1">
                          <span
                            className="font-bold text-xl"
                            style={{ fontFamily: 'var(--font-heading)', color: '#FF3D57' }}
                          >
                            {product.price}
                          </span>
                          <span
                            className="text-xs font-semibold px-2 py-0.5 rounded-full border border-gray-200"
                            style={{ color: '#6B7280', fontFamily: 'var(--font-sans)' }}
                          >
                            {product.marketplace}
                          </span>
                        </div>
                        <motion.a
                          href={product.affiliateUrl}
                          target="_blank"
                          rel="noopener noreferrer sponsored"
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.97 }}
                          className="mt-1 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl font-bold text-sm border-2 border-foreground"
                          style={{ background: '#1A1040', color: '#FFE600', fontFamily: 'var(--font-sans)' }}
                        >
                          View on {product.marketplace}
                          <ExternalLink size={14} />
                        </motion.a>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </ContentListContext>

            {/* Ad Placement */}
            <AdSenseUnit className="my-10" />

            {/* Affiliate disclosure */}
            <p className="mt-12 text-center text-xs" style={{ color: '#9CA3AF', fontFamily: 'var(--font-sans)' }}>
              * Links on this page are affiliate links. When you make a purchase through them, Toonquint may earn a referral fee at no extra cost to you.{' '}
              <Link to="/affiliate-disclosure" className="underline hover:text-white transition-colors">
                Learn more in our Affiliate Disclosure
              </Link>.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
