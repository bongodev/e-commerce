import { Outlet } from 'react-router-dom';

import { CartProvider, QueryProvider, ThemeProvider } from '../contexts';

import { Box, Stack } from '../common/components';

import { AppBar } from '../components';

export const Layout = () => {
  return (
    <QueryProvider>
      <ThemeProvider>
        <CartProvider>
          <Stack spacing={4}>
            <AppBar />
            <Box display="flex" justifyContent="center" width={1}>
              <Outlet />
            </Box>
          </Stack>
        </CartProvider>
      </ThemeProvider>
    </QueryProvider>
  );
};
