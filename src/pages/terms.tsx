import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router';
import { siteMeta } from '@/lib/site-meta';
import { generateBreadcrumbSchema } from '@/lib/schema-org';

export default function TermsPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Terms of Service', url: '/terms' }
  ];

  return (
    <>
      <Helmet>
        <title>Terms of Service — Toonquint</title>
        <meta
          name="description"
          content="Terms of service and terms of use for Toonquint, outlining site rules, intellectual property, and affiliate product disclaimers."
        />
        <link rel="canonical" href={`${siteMeta.url}/terms`} />
        <meta property="og:title" content="Terms of Service — Toonquint" />
        <meta property="og:description" content="Terms of service and terms of use for Toonquint." />
        <meta property="og:url" content={`${siteMeta.url}/terms`} />
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
              <li className="text-[#FFE600] font-semibold" aria-current="page">Terms of Service</li>
            </ol>
          </nav>

          <header className="mb-10">
            <h1 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Terms of Service
            </h1>
            <p className="text-sm text-[#C0B8E8]">Effective Date: October 2026</p>
          </header>

          <div className="space-y-6 text-[#E2DCF8] leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white">1. Acceptance of Terms</h2>
              <p>
                By accessing and using Toonquint ({siteMeta.url}), you agree to comply with and be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use the website.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white">2. Content & Information Accuracy</h2>
              <p>
                All product listings, editorial commentary, and buyer guides provided on Toonquint are for informational and curation purposes only. Product prices, availability, shipping times, and specifications are determined by third-party retailers and may change at any time. We make no warranty that all information is complete, reliable, or up-to-date at all times.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white">3. Third-Party Transactions & Disclaimers</h2>
              <p>
                Toonquint is not an online store, seller, or payment processor. Any transaction you initiate is solely between you and the respective third-party merchant (such as Amazon India or Flipkart). We bear no responsibility for order fulfillment, defect disputes, returns, or refunds.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white">4. Intellectual Property</h2>
              <p>
                All editorial text, custom site designs, logos, and layouts belong to Toonquint. Character names, anime titles, and brand trademarks remain the intellectual property of their respective creators, publishers, and licensors.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white">5. Governing Law</h2>
              <p>
                These terms are governed by and construed in accordance with applicable laws. For questions or concerns, please visit our{' '}
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
