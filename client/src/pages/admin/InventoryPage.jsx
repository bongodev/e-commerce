import { useState } from 'react';

import { Box, Button, Modal, Stack } from '../../common/components';

import { useProducts } from '../../api/queries';

import { ProductFrom, ProductTable } from '../../components';

const productPlaceholder = {
  id: '',
  name: '',
  price: 0,
  quantity: 0,
  categories: [],
};

export const InventoryPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(productPlaceholder);
  const { isLoading, isSubmitting, upsertProduct, products } = useProducts();

  const [openProductFrom, setOpenProductForm] = useState(false);

  const toggleProductFrom = () => setOpenProductForm((prev) => !prev);

  const closeProductForm = () => {
    setOpenProductForm(false);
    setSelectedProduct(productPlaceholder);
  };

  const onSubmitProductFrom = (productPayload) => {
    upsertProduct(productPayload).finally(() => closeProductForm());
  };

  const shouldOpenEditForm = Boolean(selectedProduct.id);

  return (
    <Stack spacing={1}>
      <Box display="flex" justifyContent="flex-end">
        <Button onClick={toggleProductFrom}>Add Product</Button>
      </Box>
      <ProductTable
        isLoading={isLoading}
        products={products}
        onSelectProduct={setSelectedProduct}
      />

      <Modal
        open={openProductFrom || shouldOpenEditForm}
        onClose={closeProductForm}
      >
        <Box
          width={8 / 12}
          sx={{ bgcolor: 'background.paper', mx: 'auto', my: '10%' }}
        >
          <ProductFrom
            productPlaceholder={selectedProduct}
            isSubmitting={isSubmitting}
            onSubmitProductFrom={onSubmitProductFrom}
          />
        </Box>
      </Modal>
    </Stack>
  );
};
