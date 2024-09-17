import { useEffect, useState } from 'react';

import { ProductServices } from '../services';

export const useProducts = () => {
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    const products = await ProductServices.getProducts();
    setProducts(products);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return { products };
};
