import { Outlet, useNavigate } from 'react-router-dom';

import {
  Box,
  Button,
  ButtonGroup,
  Stack,
  Typography,
} from '../../common/components';

export const AdminLayout = () => {
  const navigate = useNavigate();

  return (
    <Stack width={1} px={4} spacing={2}>
      <Typography variant="h1">Welcome Admin!</Typography>
      <Box>
        <ButtonGroup>
          <Button onClick={() => navigate('/admin')}>Dashboard</Button>
          <Button onClick={() => navigate('/admin/inventory')}>
            Inventory
          </Button>
          <Button onClick={() => navigate('/admin/profile')}>Profile</Button>
        </ButtonGroup>
      </Box>
      <Outlet />
    </Stack>
  );
};
