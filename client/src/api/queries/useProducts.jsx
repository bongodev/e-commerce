import axios from 'axios';
import { useEffect, useState } from 'react';

import { ProductServices } from '../services';

export const useProducts = () => {
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

  return { products };
};
