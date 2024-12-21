import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Avatar,
  Box,
  Button,
  ConfirmationModal,
  Divider,
  IconButton,
  Menu,
  MenuItem,
} from '../../common/components';
import { authServices } from '../../auth';

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
  const navigate = useNavigate();
  const [openAdminMenu, setOpenAdminMenu] = useState(false);
  const [confirmLogout, setConfirmLogout] = useState(false);

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
        <Divider />
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button color="error" onClick={() => setConfirmLogout(true)}>
            Logout
          </Button>
        </Box>
      </Menu>
      <ConfirmationModal
        title={'Are you sure?'}
        open={confirmLogout}
        onClose={() => setConfirmLogout(false)}
        onConfirm={() => {
          authServices.logout();
          navigate('/login');
        }}
      />
    </>
  );
};
