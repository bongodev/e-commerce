import { useProducts } from '../../api/queries';

import { Loading } from '../../common/components';

import { ProductCard } from './ProductCard';

import './Products.css';

export function Products() {
  const { isLoading, products } = useProducts();

  return (
    <div className="product-container">
      {isLoading ? (
        <Loading />
      ) : (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </div>
  );
}
