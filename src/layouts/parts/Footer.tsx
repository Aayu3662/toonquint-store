import { Link } from 'react-router';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: '/shop', label: 'Shop All Merch' },
    { href: '/ebooks', label: 'Digital Ebooks' },
    { href: '/articles', label: 'Character Face-Offs' },
    { href: '/guides/anime-merchandise-guide', label: 'Collector’s Guide' },
    { href: '/about', label: 'About Toonquint' },
    { href: '/contact', label: 'Contact Us' },
  ];

  const trustLinks = [
    { href: '/affiliate-disclosure', label: 'Affiliate Disclosure' },
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
  ];

  const categories = [
    { href: '/shop?cat=apparel', label: 'Apparel (Hoodies & Tees)' },
    { href: '/shop?cat=accessories', label: 'Accessories (Pins, Mats, Cups)' },
    { href: '/shop?cat=collectibles', label: 'Collectibles & Lamps' },
    { href: '/shop?cat=ebooks', label: 'Ebooks & Digital Guides' },
  ];

  return (
    <footer style={{ background: '#1A1040' }}>
      {/* Top band */}
      <div className="border-b-4" style={{ borderColor: '#FFE600' }}>
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="flex flex-col gap-4">
              <img
                src="/airo-assets/images/logo/horizontal"
                alt="Toonquint Anime Merch"
                className="block h-auto w-auto object-contain"
                style={{ maxHeight: '44px' }}
                width={176}
                height={44}
              />
              <p className="text-sm leading-relaxed" style={{ color: '#C0B8E8', fontFamily: 'var(--font-sans)' }}>
                Your universe of anime & cartoon merch. Curated streetwear, authentic collectibles, and lifestyle accessories for fans who live the culture.
              </p>
              {/* Social icons */}
              <div className="flex gap-3 mt-2">
                {[
                  { label: 'Instagram', href: 'https://instagram.com/toonquint', icon: (
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  )},
                  { label: 'X', href: 'https://x.com/toonquint', icon: (
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  )},
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-150 hover:scale-110"
                    style={{ background: '#2D1F6E', color: '#FFE600' }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold mb-4 text-sm uppercase tracking-widest" style={{ color: '#FFE600', fontFamily: 'var(--font-sans)' }}>Explore</h3>
              <ul className="flex flex-col gap-2">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      to={l.href}
                      className="text-sm transition-colors hover:text-yellow-300"
                      style={{ color: '#C0B8E8', fontFamily: 'var(--font-sans)' }}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h3 className="font-bold mb-4 text-sm uppercase tracking-widest" style={{ color: '#FFE600', fontFamily: 'var(--font-sans)' }}>Categories</h3>
              <ul className="flex flex-col gap-2">
                {categories.map((c) => (
                  <li key={c.href}>
                    <Link
                      to={c.href}
                      className="text-sm transition-colors hover:text-yellow-300"
                      style={{ color: '#C0B8E8', fontFamily: 'var(--font-sans)' }}
                    >
                      {c.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal & Compliance */}
            <div>
              <h3 className="font-bold mb-4 text-sm uppercase tracking-widest" style={{ color: '#FFE600', fontFamily: 'var(--font-sans)' }}>Transparency</h3>
              <ul className="flex flex-col gap-2">
                {trustLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      to={l.href}
                      className="text-sm transition-colors hover:text-yellow-300"
                      style={{ color: '#C0B8E8', fontFamily: 'var(--font-sans)' }}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Full Affiliate Transparency Footer Note */}
          <div className="mt-8 pt-6 border-t border-white/10 text-xs text-[#9B8FC2] leading-relaxed max-w-4xl">
            <p>
              <strong>Affiliate Disclosure:</strong> Toonquint is a participant in the Amazon Associates Program and Flipkart Affiliate Program, designed to provide a means for sites to earn advertising fees by linking to Amazon.in and Flipkart.com. As an affiliate curator, we do not directly manufacture, inventory, sell, or ship products. Pricing and availability are set by the respective retailers and are accurate as of our latest catalog check.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="text-xs" style={{ color: '#7A6FA8', fontFamily: 'var(--font-sans)' }}>
          © {currentYear} Toonquint. All rights reserved.
        </p>
        <p className="text-xs" style={{ color: '#7A6FA8', fontFamily: 'var(--font-sans)' }}>
          Curated with ❤️ for anime & cartoon fans everywhere
        </p>
      </div>
    </footer>
  );
}
