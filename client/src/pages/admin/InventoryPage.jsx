import { useState } from 'react';

import { Box, Button, Modal, Stack } from '../../common/components';

import { ProductFrom, ProductTable } from '../../components';
import { ProductServices } from '../../api/services';

export const InventoryPage = () => {
  const [openProductFrom, setOpenProductForm] = useState(false);

  const toggleProductFrom = () => setOpenProductForm((prev) => !prev);

  const onSubmitProductFrom = (productPayload) => {
    ProductServices.addProduct(productPayload)
      .then((data) => {
        console.log(data);
      })
      .catch(() => alert('Failed to add product'))
      .finally(() => setOpenProductForm(false));
  };

  return (
    <Stack spacing={1}>
      <Box display="flex" justifyContent="flex-end">
        <Button onClick={toggleProductFrom}>Add Product</Button>
      </Box>
      <ProductTable />

      <Modal open={openProductFrom} onClose={toggleProductFrom}>
        <Box
          width={8 / 12}
          sx={{ bgcolor: 'background.paper', mx: 'auto', my: '10%' }}
        >
          <ProductFrom onSubmitProductFrom={onSubmitProductFrom} />
        </Box>
      </Modal>
    </Stack>
  );
};
