import { useProducts } from '../../hooks';

import { ProductCard } from './ProductCard';

import './Products.css';

export function Products() {
  const { products } = useProducts();

  return (
    <div className="product-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
