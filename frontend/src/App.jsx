import React from 'react';
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Layout from './components/Layout';
import Home from './pages/Home';
import Auth from './pages/Auth';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'auth',
        Component: Auth,
        loader: () => (JSON.parse(localStorage.getItem('profile')) ? redirect('/') : null),
      },
    ],
  },
], { basename: '/mementos-app' });

const theme = createTheme({
  components: {
    MuiTextField: {
      defaultProps: {
        size: 'small',
        fullWidth: true,
      },
    },
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
);

export default App;
