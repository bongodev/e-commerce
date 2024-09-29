import { http } from '../../common/http';

export const getProducts = async () => {
  const response = await http.get('/api/products');
  return response.data;
};

export const addProduct = async (productPayload) => {
  const response = await http.post('/api/products', productPayload);
  return response.data;
};

export const updateProduct = async ({ productId, productPayload }) => {
  const response = await http.put(`/api/products/${productId}`, productPayload);
  return response.data;
};
