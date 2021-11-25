import { Box, Toolbar } from '@mui/material';
import Logo from './logo';
import LngMenu from './lng-menu';

function NavBar() {
  return (
    <Toolbar component="nav" sx={{ pt: 4 }} disableGutters>
      <Logo />
      <Box sx={{ flexGrow: 1 }} />
      <LngMenu />
    </Toolbar>
  );
}

export default NavBar;
