import { useEffect, useState } from 'react';

import { useProducts } from '../../api/queries';

import { ProductCard } from './ProductCard';

import './Products.css';

export function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8000/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // const { products } = useProducts();

  return (
    <div className="product-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
