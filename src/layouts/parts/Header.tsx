import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '/shop', label: 'Shop' },
    { href: '/guides/anime-merchandise-guide', label: 'Buyer’s Guide' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b-4 border-foreground" style={{ background: '#1A1040' }}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img
              src="/airo-assets/images/logo/horizontal"
              alt="Toonquint Anime Merch Store"
              className="block h-auto w-auto object-contain"
              style={{ maxHeight: '40px' }}
              width={160}
              height={40}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-150 hover:scale-105"
                  style={{
                    color: isActive ? '#1A1040' : '#FFFFFF',
                    background: isActive ? '#FFE600' : 'transparent',
                    fontFamily: 'var(--font-sans)',
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile toggle */}
          <div className="flex items-center gap-3">
            <button
              className="md:hidden p-2 rounded-lg"
              style={{ color: '#FFE600' }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-white/20 flex flex-col gap-2" aria-label="Mobile navigation">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className="px-4 py-3 rounded-xl font-semibold text-sm"
                  style={{
                    color: isActive ? '#1A1040' : '#FFFFFF',
                    background: isActive ? '#FFE600' : 'transparent',
                    fontFamily: 'var(--font-sans)',
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
}
