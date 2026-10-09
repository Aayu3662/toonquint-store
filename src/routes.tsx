import type { RouteObject } from 'react-router';
import HomePage from './pages/index';
import ShopPage from './pages/shop';
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
    path: '*',
    element: <ProdNotFoundPage />,
  },
];
