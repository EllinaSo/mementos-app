import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';

const Layout = () => (
  <>
    <NavBar />
    <Container maxWidth="lg">
      <Box py={4}>
        <Outlet />
      </Box>
    </Container>
  </>
);

export default Layout;
