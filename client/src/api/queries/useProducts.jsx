import { useEffect, useState } from 'react';

import { ProductServices } from '../services';

export const useProducts = () => {
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    try {
      const products = await ProductServices.getProducts();
      setProducts(products);
    } catch (error) {
      alert('Failed to load products!');
      console.error(error);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return { products };
};
