import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router';
import { siteMeta } from '@/lib/site-meta';
import { generateBreadcrumbSchema } from '@/lib/schema-org';
import { Heart, Compass, CheckCircle2, ShoppingBag } from 'lucide-react';

export default function AboutPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' }
  ];

  return (
    <>
      <Helmet>
        <title>About Toonquint — Anime & Cartoon Merch Curators</title>
        <meta
          name="description"
          content="Toonquint is an independent fandom platform dedicated to discovering, reviewing, and curating quality anime merchandise, apparel, and collectibles."
        />
        <link rel="canonical" href={`${siteMeta.url}/about`} />
        <meta property="og:title" content="About Toonquint — Anime & Cartoon Merch Curators" />
        <meta
          property="og:description"
          content="Toonquint is an independent fandom platform dedicated to discovering, reviewing, and curating quality anime merchandise."
        />
        <meta property="og:url" content={`${siteMeta.url}/about`} />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {JSON.stringify(generateBreadcrumbSchema(breadcrumbs))}
        </script>
      </Helmet>

      <main className="min-h-screen py-16 px-4" style={{ background: '#1A1040', color: '#FFFFFF' }}>
        <div className="container mx-auto max-w-3xl">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-[#C0B8E8]">
            <ol className="flex items-center gap-2">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>/</li>
              <li className="text-[#FFE600] font-semibold" aria-current="page">About Us</li>
            </ol>
          </nav>

          <header className="mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-[#FFE600] text-[#FFE600]">
              Our Story & Mission
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Built by Fans, for Fans
            </h1>
            <p className="text-lg text-[#C0B8E8]">
              Toonquint started with a simple belief: finding stylish, authentic, and fun anime merchandise shouldn't require scrolling through thousands of unverified listings.
            </p>
          </header>

          <div className="space-y-8 text-[#E2DCF8] leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
            <section className="bg-[#241552] p-6 rounded-2xl border-2 border-[#3D297A] space-y-4">
              <h2 className="text-xl font-bold text-[#FFE600] flex items-center gap-2">
                <Compass className="text-[#FFE600]" size={22} />
                What We Do
              </h2>
              <p>
                We spend hours browsing verified e-commerce platforms like Amazon India and Flipkart to filter out the low-grade bootlegs and surface standout apparel, detailed collectible figures, enamel pins, and lifestyle items. Every product featured on our site meets criteria for design appeal, verified buyer feedback, and sensible pricing.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Our Curation Standards</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#FFE600] shrink-0 mt-1" size={20} />
                  <span><strong>Verified Retailers:</strong> We only direct buyers to reputable marketplaces with established buyer protection, secure payment gateways, and clear return policies.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#FFE600] shrink-0 mt-1" size={20} />
                  <span><strong>Design & Quality First:</strong> From heavy-weight fleece hoodies to hard enamel pins, we prioritize items crafted with attention to durability and aesthetic fidelity.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#FFE600] shrink-0 mt-1" size={20} />
                  <span><strong>Zero Sponsored Bias:</strong> Our product recommendations are selected on genuine merit. We disclose all affiliate partnerships clearly and openly.</span>
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Affiliate Transparency</h2>
              <p>
                Toonquint operates as an affiliate curation service. We do not manufacture or store inventory in our own warehouse. When you purchase an item via our referral links, the merchant pays us a standard referral fee, which supports our ongoing research and platform maintenance at no extra cost to you.
              </p>
              <p>
                Learn more about our standards on our dedicated{' '}
                <Link to="/affiliate-disclosure" className="text-[#FFE600] underline hover:text-white transition-colors">
                  Affiliate Disclosure Page
                </Link>.
              </p>
            </section>

            <div className="pt-6 text-center">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-base transition-all hover:scale-105"
                style={{ background: '#FFE600', color: '#1A1040' }}
              >
                <ShoppingBag size={18} /> Explore Our Curated Catalog
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
