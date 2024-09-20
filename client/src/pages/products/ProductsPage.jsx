import { Box, Stack } from '../../common/components';

import { Filter, Products } from '../../components';

export const ProductsPage = () => {
  return (
    <Box
      display="flex"
      gap={4}
      justifyContent="space-between"
      paddingLeft={12}
      paddingRight={12}
    >
      <Stack spacing={4}>
        <Filter />
        <Products />
      </Stack>
    </Box>
  );
};
