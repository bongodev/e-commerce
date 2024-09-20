import { useState } from 'react';
import {
  Avatar,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from '../../common/components';

const menu = [
  {
    path: '/admin',
    name: 'Dashboard',
  },
  {
    path: '/admin/inventory',
    name: 'Inventory',
  },
  {
    path: '/admin/profile',
    name: 'Profile',
  },
];

export const ProfileMenu = () => {
  const [openAdminMenu, setOpenAdminMenu] = useState(false);

  const toggleAdminMenu = () => setOpenAdminMenu((prev) => !prev);

  return (
    <>
      <IconButton onClick={toggleAdminMenu}>
        <Avatar alt="Admin User" sx={{ width: 24, height: 24 }} />
      </IconButton>
      <Menu
        open={openAdminMenu}
        sx={{ mt: '32px', mr: '20px' }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        onClose={toggleAdminMenu}
      >
        {menu.map((menu) => (
          <MenuItem key={menu.name}>
            <Button href={menu.path}>{menu.name}</Button>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
