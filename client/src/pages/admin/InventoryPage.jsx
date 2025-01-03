import { useState } from 'react';

import {
  Box,
  Button,
  ConfirmationModal,
  Modal,
  Stack,
} from '../../common/components';

import { useProductDeleteQuery, useProductQuery } from '../../api/queries';

import { ProductFrom, ProductTable } from '../../components';

const productPlaceholder = {
  id: '',
  name: '',
  price: 0,
  quantity: 0,
  categories: [],
};

export const InventoryPage = () => {
  const { productQuery, productMutation } = useProductQuery();
  const { productDeleteQuery } = useProductDeleteQuery();

  const [selectedProduct, setSelectedProduct] = useState(productPlaceholder);
  const [productIdToDelete, setProductIdToDelete] = useState(null);

  const [openProductFrom, setOpenProductForm] = useState(false);

  const toggleProductFrom = () => setOpenProductForm((prev) => !prev);

  const closeProductForm = () => {
    setOpenProductForm(false);
    setSelectedProduct(productPlaceholder);
  };

  const onSubmitProductFrom = (productPayload) => {
    productMutation
      .mutateAsync(productPayload)
      .finally(() => closeProductForm());
  };

  const handleProductDelete = (productId) => {
    productDeleteQuery
      .mutateAsync(productId)
      .finally(() => setProductIdToDelete(null));
  };

  const shouldOpenEditForm = Boolean(selectedProduct.id);

  return (
    <Stack spacing={1}>
      <Box display="flex" justifyContent="flex-end">
        <Button onClick={toggleProductFrom}>Add Product</Button>
      </Box>
      <ProductTable
        isLoading={productQuery.isLoading}
        products={productQuery.data || []}
        onSelectProduct={setSelectedProduct}
        onDeleteProduct={setProductIdToDelete}
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
            isSubmitting={productMutation.isLoading}
            onSubmitProductFrom={onSubmitProductFrom}
          />
        </Box>
      </Modal>

      <ConfirmationModal
        open={Boolean(productIdToDelete)}
        disabled={productDeleteQuery.isLoading}
        onClose={() => setProductIdToDelete(null)}
        onConfirm={() => handleProductDelete(productIdToDelete)}
        title="Are you sure!"
        content="This product will be deleted forever."
      />
    </Stack>
  );
};
