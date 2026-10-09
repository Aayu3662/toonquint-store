import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { home } from 'virtual:content';
import { products } from 'virtual:content';
import { ContentListContext } from '@airo/content';
import { ExternalLink } from 'lucide-react';
import { siteMeta } from '@/lib/site-meta';
import { generateWebSiteSchema, generateOrganizationSchema, generateProductListSchema } from '@/lib/schema-org';

// ─── Starburst SVG decoration ───────────────────────────────────────────────
function Starburst({ size = 60, color = '#FFE600', className = '', style = {} }: {
  size?: number; color?: string; className?: string; style?: React.CSSProperties;
}) {
  const pts = Array.from({ length: 16 }, (_, i) => {
    const angle = (i * Math.PI) / 8;
    const r = i % 2 === 0 ? size / 2 : size / 4;
    return `${Math.cos(angle) * r},${Math.sin(angle) * r}`;
  }).join(' ');
  return (
    <svg
      width={size}
      height={size}
      viewBox={`${-size / 2} ${-size / 2} ${size} ${size}`}
      className={className}
      style={style}
      aria-hidden="true"
    >
      <polygon points={pts} fill={color} />
    </svg>
  );
}

// ─── Halftone dot background ─────────────────────────────────────────────────
function HalftoneBg({ color = '#ffffff', opacity = 0.08 }: { color?: string; opacity?: number }) {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
      style={{ opacity }}
    >
      <defs>
        <pattern id="halftone" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="3" fill={color} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#halftone)" />
    </svg>
  );
}

export default function HomePage() {
  const siteUrl = siteMeta.url;
  const webSiteSchema = generateWebSiteSchema();
  const orgSchema = generateOrganizationSchema();
  const productListSchema = generateProductListSchema(products);

  return (
    <>
      <Helmet>
        <title>Toonquint — Anime & Cartoon Merch Store | Apparel, Figures & Collectibles</title>
        <meta name="description" content="Shop curated anime and cartoon merchandise at Toonquint — oversized hoodies, collectible figures, kawaii backpacks, graphic tees, ceramic cups, and pins." />
        <link rel="canonical" href={siteUrl} />
        <meta property="og:title" content="Toonquint — Anime & Cartoon Merch Store" />
        <meta property="og:description" content="Discover curated anime streetwear, authentic collectibles, and lifestyle accessories for fans who live the culture." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content={`${siteUrl}/airo-assets/images/logo/horizontal`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Toonquint — Anime & Cartoon Merch Store" />
        <meta name="twitter:description" content="Curated anime merchandise: oversized hoodies, scale figures, backpacks, and enamel pins." />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {JSON.stringify(webSiteSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(orgSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(productListSchema)}
        </script>
      </Helmet>

      <main>
        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden"
          style={{ background: '#1A1040', minHeight: '520px' }}
        >
          <HalftoneBg color="#ffffff" opacity={0.06} />

          <motion.div
            className="absolute top-8 right-12 pointer-events-none"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
          >
            <Starburst size={80} color="#FFE600" />
          </motion.div>
          <motion.div
            className="absolute bottom-12 left-8 pointer-events-none"
            animate={{ rotate: -360 }}
            transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
          >
            <Starburst size={50} color="#FF3D57" />
          </motion.div>

          <div className="container mx-auto px-4 py-16 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Left: copy */}
              <div className="flex flex-col gap-6">
                <motion.span
                  initial={{ opacity: 0, y: -16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="inline-block self-start px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border-2"
                  style={{ background: '#FF3D57', color: '#FFFFFF', borderColor: '#FF3D57', fontFamily: 'var(--font-sans)' }}
                >
                  {home.hero.eyebrow}
                </motion.span>

                <motion.h1
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
                  className="text-5xl md:text-6xl lg:text-7xl leading-none"
                  style={{ fontFamily: 'var(--font-heading)', color: '#FFE600' }}
                >
                  {home.hero.headline}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.2, ease: 'easeOut' }}
                  className="text-lg max-w-md"
                  style={{ color: '#C0B8E8', fontFamily: 'var(--font-sans)' }}
                >
                  {home.hero.subheadline}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.3, ease: 'easeOut' }}
                  className="flex items-center gap-4"
                >
                  <div className="relative">
                    <motion.div
                      className="absolute -top-4 -right-4 pointer-events-none"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, ease: 'linear', repeat: Infinity }}
                    >
                      <Starburst size={36} color="#FFE600" />
                    </motion.div>
                    <Link
                      to="/shop"
                      className="relative z-10 inline-block px-8 py-4 rounded-full font-bold text-lg border-4 border-white transition-all duration-150 hover:scale-105"
                      style={{ background: '#FF3D57', color: '#FFFFFF', fontFamily: 'var(--font-sans)' }}
                    >
                      {home.hero.ctaLabel}
                    </Link>
                  </div>
                </motion.div>
              </div>

              {/* Right: bento product showcase */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
                className="grid grid-cols-2 gap-3"
              >
                <div className="col-span-2 rounded-2xl overflow-hidden border-4 border-white/20 aspect-video">
                  <img
                    src="/airo-assets/images/pages/home/hero-product"
                    alt="Featured anime merchandise"
                    className="w-full h-full object-cover"
                    loading="eager"
                    fetchPriority="high"
                    width={600}
                    height={338}
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border-4 border-white/20 aspect-square">
                  <img
                    src="/airo-assets/images/pages/home/collectibles"
                    alt="Anime collectibles"
                    className="w-full h-full object-cover"
                    loading="eager"
                    width={280}
                    height={280}
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border-4 border-white/20 aspect-square">
                  <img
                    src="/airo-assets/images/pages/home/accessories"
                    alt="Anime accessories"
                    className="w-full h-full object-cover"
                    loading="eager"
                    width={280}
                    height={280}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── TICKER ───────────────────────────────────────────────────── */}
        <div
          className="overflow-hidden py-3 border-y-4 border-foreground"
          style={{ background: '#FFE600' }}
          aria-label="Product categories"
        >
          <motion.div
            className="flex gap-8 whitespace-nowrap"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 18, ease: 'linear', repeat: Infinity }}
          >
            {[...home.ticker.items, ...home.ticker.items].map((item, i) => (
              <span
                key={i}
                className="text-sm font-bold uppercase tracking-widest flex items-center gap-3"
                style={{ fontFamily: 'var(--font-sans)', color: '#1A1040' }}
              >
                {item}
                <span style={{ color: '#FF3D57' }}>★</span>
              </span>
            ))}
          </motion.div>
        </div>

        {/* ── FEATURED PRODUCTS ────────────────────────────────────────── */}
        <section className="py-20 relative overflow-hidden" style={{ background: '#FFFFFF' }}>
          <HalftoneBg color="#1A1040" opacity={0.03} />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="text-4xl md:text-5xl mb-3"
                style={{ fontFamily: 'var(--font-heading)', color: '#1A1040' }}
              >
                {home.featuredProducts.heading}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.1, ease: 'easeOut' }}
                className="text-base"
                style={{ color: 'hsl(var(--muted-foreground))', fontFamily: 'var(--font-sans)' }}
              >
                {home.featuredProducts.subheading}
              </motion.p>
            </div>

            <ContentListContext field="products">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {products.slice(0, 3).map((product, i) => {
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
                      transition={{ duration: 0.35, delay: i * 0.1, ease: 'easeOut' as const }}
                      whileHover={{ scale: 1.03, transition: { type: 'spring', stiffness: 400, damping: 20 } }}
                      className="group relative rounded-2xl overflow-hidden border-4 border-foreground flex flex-col"
                      style={{ borderTopColor: borderColor, borderTopWidth: 6, background: '#FFFFFF' }}
                    >
                      <span
                        className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border-2 border-foreground"
                        style={{ background: badgeStyle.bg, color: badgeStyle.text, fontFamily: 'var(--font-sans)' }}
                      >
                        {product.badge}
                      </span>
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
                      <div className="p-4 flex flex-col gap-2 flex-1">
                        <h3
                          className="font-bold text-base leading-tight"
                          style={{ fontFamily: 'var(--font-sans)', color: '#1A1040' }}
                        >
                          {product.name}
                        </h3>
                        <p
                          className="text-xs leading-relaxed line-clamp-2 flex-1"
                          style={{ color: '#6B7280', fontFamily: 'var(--font-sans)' }}
                        >
                          {product.description}
                        </p>
                        <div className="flex items-center justify-between mt-1">
                          <span className="font-bold text-xl" style={{ fontFamily: 'var(--font-heading)', color: '#FF3D57' }}>
                            {product.price}
                          </span>
                          <span className="text-xs font-semibold px-2 py-0.5 rounded-full border border-gray-200" style={{ color: '#6B7280', fontFamily: 'var(--font-sans)' }}>
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

            <div className="text-center mt-10">
              <Link
                to="/shop"
                className="inline-block px-8 py-4 rounded-full font-bold text-base border-4 border-foreground transition-all duration-150 hover:scale-105"
                style={{ background: '#1A1040', color: '#FFE600', fontFamily: 'var(--font-sans)' }}
              >
                View All Products
              </Link>
            </div>
          </div>
        </section>

        {/* ── CATEGORIES ───────────────────────────────────────────────── */}
        <section className="py-20 relative overflow-hidden" style={{ background: '#F0F0FF' }}>
          <div className="container mx-auto px-4 relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="text-4xl md:text-5xl text-center mb-12"
              style={{ fontFamily: 'var(--font-heading)', color: '#1A1040' }}
            >
              {home.categories.heading}
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {home.categories.items.map((cat, i) => (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.1, ease: 'easeOut' }}
                  whileHover={{ scale: 1.03, transition: { type: 'spring', stiffness: 400, damping: 20 } }}
                  className={i === 1 ? 'md:mt-8' : ''}
                >
                  <Link
                    to={['/shop?cat=apparel', '/shop?cat=accessories', '/shop?cat=collectibles'][i] ?? '/shop'}
                    className="group block relative rounded-2xl overflow-hidden border-4 border-foreground"
                    style={{ aspectRatio: '3/4' }}
                  >
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      width={400}
                      height={533}
                    />
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{ background: 'linear-gradient(to top, rgba(26,16,64,0.85) 0%, rgba(26,16,64,0.1) 60%)' }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 pointer-events-none">
                      <h3
                        className="text-3xl font-bold mb-1"
                        style={{ fontFamily: 'var(--font-heading)', color: '#FFE600' }}
                      >
                        {cat.name}
                      </h3>
                      <p className="text-sm" style={{ color: '#C0B8E8', fontFamily: 'var(--font-sans)' }}>
                        {cat.description}
                      </p>
                    </div>
                    <div className="absolute top-4 right-4 pointer-events-none opacity-80">
                      <Starburst size={32} color="#FFE600" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BUYER'S GUIDE FEATURE ────────────────────────────────────── */}
        <section className="py-16 bg-[#160D35] border-t-4 border-b-4 border-foreground text-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-[#241552] p-8 md:p-10 rounded-3xl border-4 border-[#FFE600] flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-3 text-center md:text-left">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-[#FFE600] text-[#FFE600]">
                  Collector Resources
                </span>
                <h3 className="text-2xl md:text-3xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
                  The Anime Merch & Collectibles Buyer's Guide
                </h3>
                <p className="text-sm text-[#C0B8E8] max-w-xl">
                  Wondering how to spot bootlegs, choose scale figure sizes, or care for oversized anime streetwear hoodies? Read our comprehensive collector advice.
                </p>
              </div>
              <Link
                to="/guides/anime-merchandise-guide"
                className="shrink-0 px-8 py-3.5 rounded-full font-bold text-sm border-2 border-foreground transition-all duration-150 hover:scale-105"
                style={{ background: '#FFE600', color: '#1A1040', fontFamily: 'var(--font-sans)' }}
              >
                Read Guide
              </Link>
            </div>
          </div>
        </section>

        {/* ── COMMUNITY STRIP ──────────────────────────────────────────── */}
        <section className="relative overflow-hidden py-20" style={{ background: '#FF3D57' }}>
          <HalftoneBg color="#ffffff" opacity={0.08} />

          <motion.div
            className="absolute top-6 left-6 pointer-events-none"
            animate={{ rotate: 360 }}
            transition={{ duration: 22, ease: 'linear', repeat: Infinity }}
          >
            <Starburst size={64} color="#FFE600" />
          </motion.div>
          <motion.div
            className="absolute bottom-6 right-6 pointer-events-none"
            animate={{ rotate: -360 }}
            transition={{ duration: 18, ease: 'linear', repeat: Infinity }}
          >
            <Starburst size={48} color="#1A1040" />
          </motion.div>

          <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: -12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border-2 border-white"
              style={{ color: '#FFFFFF', fontFamily: 'var(--font-sans)' }}
            >
              {home.community.eyebrow}
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05, ease: 'easeOut' }}
              className="text-4xl md:text-6xl mb-6"
              style={{ fontFamily: 'var(--font-heading)', color: '#FFFFFF' }}
            >
              {home.community.headline}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.1, ease: 'easeOut' }}
              className="text-lg mb-10 leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'var(--font-sans)' }}
            >
              {home.community.body}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.15, ease: 'easeOut' }}
            >
              <Link
                to="/shop"
                className="inline-block px-10 py-4 rounded-full font-bold text-lg border-4 border-white transition-all duration-150 hover:scale-105"
                style={{ background: '#FFE600', color: '#1A1040', fontFamily: 'var(--font-sans)' }}
              >
                {home.community.ctaLabel}
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
