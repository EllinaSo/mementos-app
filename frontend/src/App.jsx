import React from 'react';
import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';

import Layout from './components/Layout';
import Home from './components/Home';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
], { basename: '/mementos-app' });

const App = () => <RouterProvider router={router} />;

export default App;
