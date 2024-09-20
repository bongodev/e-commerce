import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Contact, HomePage } from './pages';

import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/contacts',
    element: <Contact />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
