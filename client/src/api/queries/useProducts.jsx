import { useCallback, useEffect, useState } from 'react';

import { ProductServices } from '../services';

export const useProducts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [products, setProducts] = useState([]);

  const addProduct = async (productPayload) => {
    setIsSubmitting(true);
    try {
      const product = await ProductServices.addProduct(productPayload);
      setProducts([product, ...products]);
    } catch (err) {
      console.error(err);
      alert('Failed to add product');
    } finally {
      setIsSubmitting(false);
    }
  };

  const loadProducts = useCallback(async () => {
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
  }, []);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  return { isLoading, isSubmitting, addProduct, products };
};
