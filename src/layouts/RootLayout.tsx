import { Helmet } from '@dr.pogodin/react-helmet';
import { type ReactElement } from 'react';
import { ScrollRestoration } from 'react-router';

import HomepageSameAsJsonLd from '@/components/HomepageSameAsJsonLd';
import AffiliateNotice from '@/components/AffiliateNotice';
import Footer from '@/layouts/parts/Footer';
import Header from '@/layouts/parts/Header';
import Website from '@/layouts/Website';
import { siteMeta } from '@/lib/site-meta';

interface RootLayoutProps {
  children: ReactElement;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <Website>
      <Helmet>
        <title>Toonquint — Anime & Cartoon Merch Store</title>
        <meta name="description" content={siteMeta.description} />
        <meta name="robots" content="index, follow" />
        <meta property="og:site_name" content={siteMeta.name} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@toonquint" />
      </Helmet>
      <AffiliateNotice />
      <HomepageSameAsJsonLd />
      <ScrollRestoration />
      <Header />
      {children}
      <Footer />
    </Website>
  );
}
