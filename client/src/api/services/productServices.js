import { http } from '../../common/http';

export const getProducts = async () => {
  try {
    const response = await http.get('/api/products');
    console.log("Products:", response.data);
    return response.data;
  }catch (error) {
    console.log(error);
  }
};

export const addProduct = async (productPayload) => {
  const response = await http.post('/api/products', productPayload);
  return response.data;
};

export const updateProduct = async ({ productId, productPayload }) => {
  const response = await http.put(`/api/products/${productId}`, productPayload);
  return response.data;
};

export const deleteProduct = async (productId) => {
  const response = await http.delete(`/api/products/${productId}`);
  return response.data;
};
