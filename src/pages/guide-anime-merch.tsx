import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router';
import { siteMeta } from '@/lib/site-meta';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema-org';
import { ShieldCheck, Sparkles, Tag, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';
import AdSenseUnit from '@/components/AdSenseUnit';

export default function GuideAnimeMerchPage() {
  const pageUrl = `${siteMeta.url}/guides/anime-merchandise-guide`;
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Guides', url: '/guides/anime-merchandise-guide' }
  ];

  const articleSchema = generateArticleSchema({
    title: "The Ultimate Anime Merchandise & Collectibles Buyer's Guide",
    description: "A comprehensive guide to buying authentic anime figures, oversized hoodies, accessories, and collectibles. Learn how to verify licensing, figure scales, and apparel care.",
    url: pageUrl,
    datePublished: "2026-10-01",
    dateModified: "2026-10-09"
  });

  return (
    <>
      <Helmet>
        <title>The Ultimate Anime Merchandise & Collectibles Buyer's Guide — Toonquint</title>
        <meta
          name="description"
          content="A comprehensive guide to buying authentic anime figures, oversized hoodies, accessories, and collectibles. Learn how to verify licensing, figure scales, and apparel care."
        />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content="The Ultimate Anime Merchandise & Collectibles Buyer's Guide — Toonquint" />
        <meta
          property="og:description"
          content="Expert tips on anime figure scales, streetwear sizing, authentic licensing verification, and collectible care."
        />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="article" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(generateBreadcrumbSchema(breadcrumbs))}
        </script>
      </Helmet>

      <main className="min-h-screen py-16 px-4" style={{ background: '#1A1040', color: '#FFFFFF' }}>
        <article className="container mx-auto max-w-4xl">
          {/* Breadcrumb navigation */}
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-[#C0B8E8]">
            <ol className="flex items-center gap-2">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>/</li>
              <li>
                <Link to="/shop" className="hover:text-white transition-colors">Shop</Link>
              </li>
              <li>/</li>
              <li className="text-[#FFE600] font-semibold" aria-current="page">Anime Merchandise Guide</li>
            </ol>
          </nav>

          <header className="mb-12 border-b-2 border-[#3D297A] pb-8">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-[#FFE600] text-[#FFE600]">
              Editorial Guide & Fandom Advice
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              The Ultimate Anime Merchandise & Collectibles Buyer's Guide
            </h1>
            <p className="text-lg text-[#C0B8E8] leading-relaxed mb-4" style={{ fontFamily: 'var(--font-sans)' }}>
              Whether you are shopping for your first scale figure, seeking high-quality anime oversized hoodies, or hunting for unique accessories, here is what every collector needs to know before buying.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#A89FD6]">
              <span>Published by <strong>Toonquint Editorial</strong></span>
              <span>•</span>
              <span>Updated: October 2026</span>
              <span>•</span>
              <span>8 min read</span>
            </div>
          </header>

          <div className="space-y-12 text-[#E2DCF8] leading-relaxed text-base md:text-lg" style={{ fontFamily: 'var(--font-sans)' }}>
            {/* Section 1 */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-[#FFE600]" style={{ fontFamily: 'var(--font-heading)' }}>
                1. Understanding Anime Figure Types: Scales vs. Prize Figures
              </h2>
              <p>
                Entering the world of anime figures can be confusing with terms like <em>1/7 Scale</em>, <em>Prize Figure</em>, and <em>Pop Up Parade</em>. Here is how they differ in quality, size, and cost:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <div className="bg-[#241552] p-6 rounded-2xl border-2 border-[#3D297A]">
                  <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                    <Sparkles className="text-[#FFE600]" size={20} />
                    Prize Figures
                  </h3>
                  <p className="text-sm text-[#C0B8E8] mb-3">
                    Originally designed for Japanese arcade claw machines (UFO catchers) by manufacturers like Banpresto, SEGA, and Taito.
                  </p>
                  <ul className="text-sm space-y-2 list-disc list-inside text-[#E2DCF8]">
                    <li><strong>Typical Price:</strong> ₹1,500 – ₹3,500</li>
                    <li><strong>Height:</strong> 15cm – 22cm</li>
                    <li><strong>Verdict:</strong> Great entry point for desk displays and budget-conscious fans.</li>
                  </ul>
                </div>

                <div className="bg-[#241552] p-6 rounded-2xl border-2 border-[#FFE600]/40">
                  <h3 className="text-xl font-bold text-[#FFE600] mb-2 flex items-center gap-2">
                    <ShieldCheck className="text-[#FFE600]" size={20} />
                    Scale Figures (1/7 & 1/8)
                  </h3>
                  <p className="text-sm text-[#C0B8E8] mb-3">
                    Precision sculptures proportionally scaled to the character’s canonical dimensions by makers like Good Smile Company, Alter, and Kotobukiya.
                  </p>
                  <ul className="text-sm space-y-2 list-disc list-inside text-[#E2DCF8]">
                    <li><strong>Typical Price:</strong> ₹8,000 – ₹25,000+</li>
                    <li><strong>Features:</strong> Hand-painted gradients, dynamic bases, premium PVC/ABS.</li>
                    <li><strong>Verdict:</strong> Centerpiece collector investments requiring enclosed shelf space.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-[#FFE600]" style={{ fontFamily: 'var(--font-heading)' }}>
                2. How to Spot Bootlegs and Counterfeit Merch
              </h2>
              <p>
                Counterfeits are rampant on general marketplaces. Use these reliable checks to identify legitimate products:
              </p>
              <div className="space-y-3 bg-[#241552] p-6 rounded-2xl border-2 border-[#3D297A]">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-400 shrink-0 mt-1" size={20} />
                  <div>
                    <strong>Official Holographic Seals:</strong> Genuine Japanese and global releases feature authentic licensing stickers (e.g., Toei Animation sticker, Kadokawa hologram, or publisher watermark) on the box.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-400 shrink-0 mt-1" size={20} />
                  <div>
                    <strong>Sculpt Detail & Paint Lines:</strong> Bootlegs frequently exhibit shiny, oily plastic finishes, visible seam lines along the hair, and crooked facial feature prints.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="text-amber-400 shrink-0 mt-1" size={20} />
                  <div>
                    <strong>Beware of "China Version" Listings:</strong> E-commerce product descriptions labeled as "Chinese Version" or priced at 80% below MSRP are almost universally unauthorized reproductions.
                  </div>
                </div>
              </div>
            </section>

            {/* Mid-guide Ad */}
            <AdSenseUnit className="my-10" />

            {/* Section 3 */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-[#FFE600]" style={{ fontFamily: 'var(--font-heading)' }}>
                3. Choosing Anime Apparel: Fabric, Sizing, and Longevity
              </h2>
              <p>
                Oversized streetwear has become the go-to fashion for anime enthusiasts. When picking an anime hoodie or graphic t-shirt, prioritize these specifications:
              </p>
              <ul className="space-y-3 list-disc list-inside">
                <li>
                  <strong>GSM (Grams per Square Meter):</strong> For lightweight summer tees, look for 180–200 GSM 100% combed cotton. For winter hoodies, choose 320–380 GSM fleece for durable drape and shape retention.
                </li>
                <li>
                  <strong>Print Method:</strong> High-density screen prints and Direct-to-Film (DTF) transfer prints withstand multiple washes far better than cheap iron-on vinyl transfers.
                </li>
                <li>
                  <strong>Washing Advice:</strong> Always wash graphic garments <em>inside-out</em> in cold water with mild detergent, and air dry in shade. Avoid machine tumble drying to prevent graphic peeling and collar shrinkage.
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-[#FFE600]" style={{ fontFamily: 'var(--font-heading)' }}>
                4. Everyday Accessories & Desk Decor
              </h2>
              <p>
                If you prefer subtle, everyday touches of fandom, lifestyle accessories offer exceptional value:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#241552] p-5 rounded-xl border border-[#3D297A]">
                  <h4 className="font-bold text-[#FFE600] mb-2">Ceramic Cups & Mugs</h4>
                  <p className="text-sm text-[#C0B8E8]">
                    High-fired ceramic cups with sublimated artwork let you enjoy coffee or tea while keeping fandom close at your workspace.
                  </p>
                </div>
                <div className="bg-[#241552] p-5 rounded-xl border border-[#3D297A]">
                  <h4 className="font-bold text-[#FFE600] mb-2">Hard Enamel Pins</h4>
                  <p className="text-sm text-[#C0B8E8]">
                    Durable zinc alloy pins with smooth enamel fill resist scratches on backpacks, lanyards, and denim jackets.
                  </p>
                </div>
                <div className="bg-[#241552] p-5 rounded-xl border border-[#3D297A]">
                  <h4 className="font-bold text-[#FFE600] mb-2">Kawaii Daypacks</h4>
                  <p className="text-sm text-[#C0B8E8]">
                    Water-resistant canvas backpacks featuring discreet character embroidery combine practical storage with playful style.
                  </p>
                </div>
              </div>
            </section>

            {/* Pre-CTA Ad */}
            <AdSenseUnit className="my-10" />

            {/* CTA Box */}
            <section className="bg-gradient-to-r from-[#2D1F6E] to-[#432A99] p-8 rounded-2xl border-4 border-[#FFE600] text-center my-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                Ready to Explore the Collection?
              </h3>
              <p className="text-[#C0B8E8] max-w-xl mx-auto mb-6 text-sm md:text-base">
                Discover our curated selections of hoodies, collectible figure sets, enamel pins, and ceramic mugs from verified marketplaces.
              </p>
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold text-base transition-all hover:scale-105"
                style={{ background: '#FFE600', color: '#1A1040', fontFamily: 'var(--font-sans)' }}
              >
                Browse Curated Products <ArrowRight size={18} />
              </Link>
            </section>
          </div>
        </article>
      </main>
    </>
  );
}
