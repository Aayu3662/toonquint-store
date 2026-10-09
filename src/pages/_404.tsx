import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router';

/**
 * 404 Not Found page component with noindex robots tag
 */
export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Page Not Found (404) — Toonquint</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="min-h-screen flex items-center justify-center py-20 px-4" style={{ background: '#1A1040' }}>
        <div className="container mx-auto max-w-xl text-center">
          <div className="space-y-6 bg-[#241552] p-10 rounded-3xl border-4 border-[#FFE600]">
            <h1 className="text-7xl font-bold text-[#FFE600]" style={{ fontFamily: 'var(--font-heading)' }}>404</h1>
            <h2 className="text-2xl font-bold text-white">Page Not Found</h2>
            <p className="text-[#C0B8E8] text-sm leading-relaxed">
              Sorry, the page or item you're looking for does not exist or has been relocated.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link
                to="/"
                className="px-6 py-3 rounded-full font-bold text-sm border-2 border-foreground transition-all hover:scale-105"
                style={{ background: '#FFE600', color: '#1A1040' }}
              >
                🏠 Return Home
              </Link>
              <Link
                to="/shop"
                className="px-6 py-3 rounded-full font-bold text-sm border-2 border-white text-white hover:bg-white/10 transition-all"
              >
                Browse Shop
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
