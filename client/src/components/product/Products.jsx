import { useEffect, useState } from 'react';

import { useProducts } from '../../api/queries';

import { ProductCard } from './ProductCard';

import './Products.css';

export function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => {
        alert('Failed to load products!');
        console.error(err);
      });
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
