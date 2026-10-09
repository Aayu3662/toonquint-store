import type { RouteObject } from 'react-router';
import HomePage from './pages/index';
import ShopPage from './pages/shop';
import EbooksPage from './pages/ebooks';
import ArticlesPage from './pages/articles';
import ArticleDetailPage from './pages/article-detail';
import GuideAnimeMerchPage from './pages/guide-anime-merch';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';
import AffiliateDisclosurePage from './pages/affiliate-disclosure';
import PrivacyPolicyPage from './pages/privacy-policy';
import TermsPage from './pages/terms';
import ProdNotFoundPage from './pages/_404';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/shop',
    element: <ShopPage />,
  },
  {
    path: '/ebooks',
    element: <EbooksPage />,
  },
  {
    path: '/articles',
    element: <ArticlesPage />,
  },
  {
    path: '/articles/:slug',
    element: <ArticleDetailPage />,
  },
  {
    path: '/guides/anime-merchandise-guide',
    element: <GuideAnimeMerchPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/affiliate-disclosure',
    element: <AffiliateDisclosurePage />,
  },
  {
    path: '/privacy-policy',
    element: <PrivacyPolicyPage />,
  },
  {
    path: '/terms',
    element: <TermsPage />,
  },
  {
    path: '*',
    element: <ProdNotFoundPage />,
  },
];
