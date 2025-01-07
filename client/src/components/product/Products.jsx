import { useProductQuery } from '../../api/queries';

import { Box, Loading } from '../../common/components';

import { ProductCard } from './ProductCard';

export function Products() {
  const { productQuery } = useProductQuery();

  console.log(productQuery.data);

  return (
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
      {productQuery.isLoading ? (
        <Loading />
      ) : (
        (productQuery.data || []).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </Box>
  );
}

