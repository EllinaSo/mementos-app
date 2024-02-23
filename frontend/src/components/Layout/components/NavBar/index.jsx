import AppBar from '@mui/material/AppBar';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';

const NavBar = () => {
  const user = null;
  return (
    <AppBar position="static" component="nav">
      <Container maxWidth="lg">
        <Stack alignItems="center" justifyContent="space-between" direction="row" gap={2} py={1}>
          <Link component={RouterLink} to="/" color="inherit" underline="none">
            <Stack alignItems="center" direction="row" gap={2}>
              <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                Mementos
              </Typography>
              <ContactEmergencyIcon />
            </Stack>
          </Link>
          <Toolbar disableGutters>
            {user ? <span>user</span> : <Button component={RouterLink} to="/auth" variant="contained" color="success">Sign in</Button>}
          </Toolbar>
        </Stack>
      </Container>
    </AppBar>
  );
};

export default NavBar;
