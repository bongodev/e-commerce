import { useMutation, useQuery, useQueryClient } from 'react-query';

import { ProductServices } from '../services';

const PRODUCT_QUERY_KEY = 'products';

export const useProductQuery = () => {
  const productQuery = useQuery({
    queryKey: [PRODUCT_QUERY_KEY],
    queryFn: ProductServices.getProducts,
  });

  const queryClient = useQueryClient();

  const productMutation = useMutation(
    (payload) => {
      if (Boolean(payload.id)) {
        return ProductServices.updateProduct({
          productId: payload.id,
          productPayload: payload,
        });
      }
      return ProductServices.addProduct(payload);
    },
    {
      onError: (err, variables) => {
        if (Boolean(variables.id)) {
          alert('Product update failed!!');
        } else {
          alert('Failed to add product!');
        }
      },
      onSuccess: (data, variables) => {
        // if (Boolean(variables.id)) {
        //   alert('Product update completed!!');
        // } else {
        //   alert('New product added!');
        // }
        queryClient.invalidateQueries(PRODUCT_QUERY_KEY);
      },
    }
  );

  return {
    productQuery,
    productMutation,
  };
};

export const useProductDeleteQuery = () => {
  const queryClient = useQueryClient();

  const productDeleteQuery = useMutation(
    (productId) => ProductServices.deleteProduct(productId),
    {
      onError: () => {
        alert('Failed to Delete!!!');
      },
      onSuccess: (data, variables) => {
        // alert('Product deleted');
        queryClient.invalidateQueries(PRODUCT_QUERY_KEY);
      },
    }
  );

  return {
    productDeleteQuery,
  };
};