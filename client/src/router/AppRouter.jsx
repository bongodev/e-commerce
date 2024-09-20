import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import {
  AdminLayout,
  ContactPage,
  Layout,
  LoginPage,
  ProductsPage,
} from '../pages';

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
        element: <AdminLayout />,
        children: [
          {
            index: true,
            element: <div>Admin Dashboard</div>,
          },
          {
            path: 'inventory',
            element: <div>Product inventory</div>,
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
