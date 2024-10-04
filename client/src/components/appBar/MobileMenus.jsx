import { useState } from 'react';

import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from '../../common/components';
import { MenuIcon } from '../../common/icons';

export const MobileMenus = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuItemClick = (event) => {
    setAnchorEl(event.target);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box position="relative">
      <IconButton
        onClick={handleMenuItemClick}
        sx={{ color: 'inherit', display: { lg: 'none', md: 'none' } }}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        open={Boolean(anchorEl)}
        sx={{ mt: '32px', mr: '20px', display: { lg: 'none', md: 'none' } }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handleClose}
      >
        <MenuItem>
          <Button href="/">Home</Button>
        </MenuItem>
        <MenuItem>
          <Button href="/contacts">Contacts</Button>
        </MenuItem>
      </Menu>
    </Box>
  );
};
