import { ProductServices } from '../services';

export const useProducts = () => {
  const products = ProductServices.getProducts();

  return { products };
};
