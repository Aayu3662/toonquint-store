import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router';
import { siteMeta } from '@/lib/site-meta';
import { generateBreadcrumbSchema } from '@/lib/schema-org';

export default function PrivacyPolicyPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Privacy Policy', url: '/privacy-policy' }
  ];

  return (
    <>
      <Helmet>
        <title>Privacy Policy — Toonquint</title>
        <meta
          name="description"
          content="Toonquint's Privacy Policy details how we handle information, cookie usage, affiliate links, and respect your privacy."
        />
        <link rel="canonical" href={`${siteMeta.url}/privacy-policy`} />
        <meta property="og:title" content="Privacy Policy — Toonquint" />
        <meta property="og:description" content="Toonquint's Privacy Policy details how we handle information, cookie usage, and affiliate links." />
        <meta property="og:url" content={`${siteMeta.url}/privacy-policy`} />
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
              <li className="text-[#FFE600] font-semibold" aria-current="page">Privacy Policy</li>
            </ol>
          </nav>

          <header className="mb-10">
            <h1 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Privacy Policy
            </h1>
            <p className="text-sm text-[#C0B8E8]">Effective Date: October 2026</p>
          </header>

          <div className="space-y-6 text-[#E2DCF8] leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white">1. Overview</h2>
              <p>
                Toonquint ("we", "us", or "our") respects your privacy. This policy outlines our practices concerning data collection, third-party affiliate tracking, and cookies when you visit our website at {siteMeta.url}.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white">2. Information We Collect</h2>
              <p>
                We do not require user accounts, passwords, or personal login information to browse our website. We do not collect or store credit card numbers, billing addresses, or payment information. All transactions occur on external partner platforms (e.g., Amazon, Flipkart).
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white">3. Cookies & Affiliate Tracking</h2>
              <p>
                When you click on an outbound affiliate link on Toonquint, the respective merchant website may set a tracking cookie on your browser. These cookies allow the merchant to recognize that you were referred by Toonquint and credit our affiliate account if a purchase is completed. You can disable or manage cookies through your browser settings at any time.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white">4. Third-Party Links</h2>
              <p>
                Our site contains links to external merchants and websites. We are not responsible for the privacy practices, content, or product availability of third-party platforms. We recommend reviewing the privacy policies of any site you visit.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white">5. Contact</h2>
              <p>
                For questions regarding this privacy policy, please reach out via our{' '}
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
