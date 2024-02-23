import React from 'react';
import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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

const App = () => <ThemeProvider theme={theme}><RouterProvider router={router} /></ThemeProvider>;

export default App;
