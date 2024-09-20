import { useEffect, useState } from 'react';

import { ProductServices } from '../services';

export const useProducts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    try {
      setIsLoading(true);
      const products = await ProductServices.getProducts();
      setProducts(products);
    } catch (error) {
      alert('Failed to load products!');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return { isLoading, products };
};
