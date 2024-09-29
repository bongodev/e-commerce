import { useState } from 'react';

import { Box, Button, Modal, Stack } from '../../common/components';

import { useProducts } from '../../api/queries';

import { ProductFrom, ProductTable } from '../../components';

export const InventoryPage = () => {
  const { isLoading, isSubmitting, addProduct, products } = useProducts();

  const [openProductFrom, setOpenProductForm] = useState(false);

  const toggleProductFrom = () => setOpenProductForm((prev) => !prev);

  const onSubmitProductFrom = (productPayload) => {
    addProduct(productPayload).finally(() => setOpenProductForm(false));
  };

  return (
    <Stack spacing={1}>
      <Box display="flex" justifyContent="flex-end">
        <Button onClick={toggleProductFrom}>Add Product</Button>
      </Box>
      <ProductTable isLoading={isLoading} products={products} />

      <Modal open={openProductFrom} onClose={toggleProductFrom}>
        <Box
          width={8 / 12}
          sx={{ bgcolor: 'background.paper', mx: 'auto', my: '10%' }}
        >
          <ProductFrom
            isSubmitting={isSubmitting}
            onSubmitProductFrom={onSubmitProductFrom}
          />
        </Box>
      </Modal>
    </Stack>
  );
};
