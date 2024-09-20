import { useProducts } from '../../api/queries';

import { Box, Loading } from '../../common/components';

import { ProductCard } from './ProductCard';

export function Products() {
  const { isLoading, products } = useProducts();

  return (
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
      {isLoading ? (
        <Loading />
      ) : (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </Box>
  );
}
