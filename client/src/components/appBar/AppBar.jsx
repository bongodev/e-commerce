import {
  Box,
  Button,
  AppBar as MUIAppBar,
  Toolbar,
  Typography,
} from '../../common/components';
import { CartMenu } from './CartMenu';
import { ProfileMenu } from './ProfileMenu';

export const AppBar = () => {
  return (
    <MUIAppBar position="sticky">
      <Toolbar>
        <Box display="flex" gap={10} flexGrow={1}>
          <Typography variant="h6" component="div">
            Simple E-commerce Website
          </Typography>

          <Box display="flex" gap={2}>
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
