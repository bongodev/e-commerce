import { authServices } from '../../auth';
import {
  Box,
  Button,
  AppBar as MUIAppBar,
  Toolbar,
} from '../../common/components';
import { Link } from 'react-router-dom';
import { CartMenu } from './CartMenu';
import { MobileMenus } from './MobileMenus';
import { ProfileMenu } from './ProfileMenu';

export const AppBar = () => {
  const isUserLoggedIn = authServices.isUserLoggedIn();

  return (
    <MUIAppBar position="sticky">
      <Toolbar>
        <Box display="flex" gap={10} flexGrow={1}>
          <Box
            display={{ sm: 'none', xs: 'none', md: 'flex' }}
            justifyContent="center"
          >
            <img
              src={process.env.PUBLIC_URL + '/logo-bongoDev.svg'}
              alt="BongoDev Simple E-Commerce App"
              height="32px"
            />
          </Box>
          <MobileMenus />

          <Box
            display={{ sm: 'none', xs: 'none', md: 'flex', lg: 'flex' }}
            gap={2}
          >
            <Button component={Link} to="/" color="inherit">
              Home
            </Button>
            <Button component={Link} to="/contacts" color="inherit">
              Contacts
            </Button>
          </Box>
        </Box>

        <Box display="flex" gap={2}>
          <CartMenu />
          {isUserLoggedIn ? (
            <ProfileMenu />
          ) : (
            <Button href="/login" color="inherit" variant="outlined">
              Login
            </Button>
          )}
        </Box>
      </Toolbar>
    </MUIAppBar>
  );
};
