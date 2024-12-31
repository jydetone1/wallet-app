import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import TransactionDetails from './module/TransactionDetails';
import TransactionCard from './module/TransactionCard';
import './index.css';

const base = import.meta.env.BASE_URL;

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <TransactionCard />,
    },

    {
      path: '/transaction-details/:id',
      element: <TransactionDetails />,
    },

    {
      path: '*',
      element: <Navigate to={'/'} replace />,
    },
  ],
  {
    basename: base,
  }
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
