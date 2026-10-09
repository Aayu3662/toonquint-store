import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router';
import { siteMeta } from '@/lib/site-meta';
import { generateBreadcrumbSchema } from '@/lib/schema-org';

export default function AffiliateDisclosurePage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Affiliate Disclosure', url: '/affiliate-disclosure' }
  ];

  return (
    <>
      <Helmet>
        <title>Affiliate Disclosure — Toonquint</title>
        <meta
          name="description"
          content="Learn about Toonquint's affiliate relationships, commission disclosures, and transparent product curation standards for anime merchandise."
        />
        <link rel="canonical" href={`${siteMeta.url}/affiliate-disclosure`} />
        <meta property="og:title" content="Affiliate Disclosure — Toonquint" />
        <meta
          property="og:description"
          content="Learn about Toonquint's affiliate relationships, commission disclosures, and transparent product curation standards."
        />
        <meta property="og:url" content={`${siteMeta.url}/affiliate-disclosure`} />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {JSON.stringify(generateBreadcrumbSchema(breadcrumbs))}
        </script>
      </Helmet>

      <main className="min-h-screen py-16 px-4" style={{ background: '#1A1040', color: '#FFFFFF' }}>
        <div className="container mx-auto max-w-3xl">
          {/* Breadcrumb navigation */}
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-[#C0B8E8]">
            <ol className="flex items-center gap-2">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>/</li>
              <li className="text-[#FFE600] font-semibold" aria-current="page">Affiliate Disclosure</li>
            </ol>
          </nav>

          <header className="mb-10">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-[#FFE600] text-[#FFE600]">
              Transparency & FTC Compliance
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Affiliate Disclosure
            </h1>
            <p className="text-sm text-[#C0B8E8]">Last updated: October 2026</p>
          </header>

          <div className="space-y-8 text-[#E2DCF8] leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
            <section className="bg-[#241552] p-6 rounded-2xl border-2 border-[#3D297A]">
              <h2 className="text-xl font-bold text-[#FFE600] mb-3">Summary of Affiliate Relationship</h2>
              <p>
                Toonquint is an independent editorial and curation website dedicated to anime and cartoon merchandise. We participate in affiliate marketing programs, including the <strong>Amazon Associates Program</strong> and the <strong>Flipkart Affiliate Program</strong>. This means when you click on links to products on our website and make a purchase, we may receive a small referral commission at <strong>absolutely no additional cost to you</strong>.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">How Our Product Curation Works</h2>
              <p>
                We do not manufacture, stock, package, or directly ship any physical items. Every product featured on Toonquint is hand-curated from reputable third-party sellers on verified e-commerce platforms. When you choose to buy an item, the transaction, payment processing, shipping, and customer support are handled directly by the destination marketplace (e.g., Amazon India or Flipkart).
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Pricing & Stock Accuracy</h2>
              <p>
                Product pricing and availability are determined by the respective merchants and are subject to change without notice. While we strive to display current prices and accurate details, the final price and inventory status at checkout on the merchant website always take precedence.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Why We Use Affiliate Links</h2>
              <p>
                Maintaining Toonquint—including web hosting, continuous product research, content creation, and keeping buying guides updated—requires ongoing resources. The small referral fees we earn allow us to keep this platform free, fast, and accessible to the anime community worldwide without charging subscriptions or cluttering pages with invasive banner ads.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Questions & Feedback</h2>
              <p>
                If you have questions regarding our affiliate disclosures, product selections, or have noticed an outdated link, please reach out via our{' '}
                <Link to="/contact" className="text-[#FFE600] underline hover:text-white transition-colors">
                  Contact Page
                </Link>.
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
