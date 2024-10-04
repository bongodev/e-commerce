import {
  Box,
  Button,
  AppBar as MUIAppBar,
  Toolbar,
  Typography,
} from '../../common/components';
import { CartMenu } from './CartMenu';
import { MobileMenus } from './MobileMenus';
import { ProfileMenu } from './ProfileMenu';

export const AppBar = () => {
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
            <Button href="/" color="inherit">
              Home
            </Button>
            <Button href="/contacts" color="inherit">
              Contacts
            </Button>
          </Box>
        </Box>

        <Box display="flex" gap={2}>
          <CartMenu />
          <ProfileMenu />
        </Box>
      </Toolbar>
    </MUIAppBar>
  );
};
