import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import {
  AdminLayout,
  ContactPage,
  InventoryPage,
  Layout,
  LoginPage,
  ProductsPage,
} from '../pages';
import SecureRoute from './SecureRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <ProductsPage />,
      },
      {
        path: 'contacts',
        element: <ContactPage />,
      },
      {
        path: 'admin',
        element: (
          <SecureRoute>
            <AdminLayout />
          </SecureRoute>
        ),
        children: [
          {
            index: true,
            element: <div>Admin Dashboard</div>,
          },
          {
            path: 'inventory',
            element: <InventoryPage />,
          },
          {
            path: 'profile',
            element: <div>Admin Profile</div>,
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
]);

export const AppRouter = ({ children }) => {
  return <RouterProvider router={router}>{children}</RouterProvider>;
};
