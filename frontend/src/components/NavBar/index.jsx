import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';

const NavBar = () => (
  <AppBar position="static">
    <Stack alignItems="center" justifyContent="center" direction="row" gap={2}>
      <Typography variant="h4" as="h1" align="center" sx={{ fontWeight: 500, py: 1 }}>
        Mementos
      </Typography>
      <ContactEmergencyIcon />
    </Stack>
  </AppBar>
);

export default NavBar;
