import axios from 'axios';

import { useEffect, useState } from 'react';

import { useProducts } from '../../api/queries';

import { ProductCard } from './ProductCard';

import './Products.css';

export function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/products')
      .then((res) => setProducts(res.data))
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
