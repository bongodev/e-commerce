import { useCallback, useEffect, useState } from 'react';

import { ProductServices } from '../services';

export const useProducts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [products, setProducts] = useState([]);

  const upsertProduct = async (productPayload) => {
    const isEditing = Boolean(productPayload.id);
    setIsSubmitting(true);
    try {
      if (isEditing) {
        const updatedProduct = await ProductServices.updateProduct({
          productId: productPayload.id,
          productPayload,
        });
        const productIndex = products.findIndex(
          (product) => product.id === updatedProduct.id
        );
        if (productIndex !== -1) {
          products[productIndex] = updatedProduct;
          setProducts([...products]);
        }
      } else {
        const newProduct = await ProductServices.addProduct(productPayload);
        setProducts([newProduct, ...products]);
      }
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

  return { isLoading, isSubmitting, upsertProduct, products };
};
