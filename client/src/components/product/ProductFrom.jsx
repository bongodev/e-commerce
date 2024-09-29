import { useState } from 'react';
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
} from '../../common/components';

const productPlaceholder = {
  id: '',
  name: '',
  price: 0,
  quantity: 0,
  categories: [],
};

export const ProductFrom = ({ onSubmitProductFrom }) => {
  const [error, setErrors] = useState({});
  const [product, setProduct] = useState(productPlaceholder);

  const handleOnChange = (event) => {
    const fieldName = event.target.name;
    setProduct({ ...product, [fieldName]: event.target.value });
  };

  const handleOnSubmitProductForm = (event) => {
    event.preventDefault();
    if (product.name.length > 20) {
      setErrors({ name: 'Max limit 20 characters' });
      return;
    }
    if (product.price < 0) {
      setErrors({ price: 'Price can not be negative' });
      return;
    }
    if (product.quantity < 0) {
      setErrors({ quantity: 'Quantity can not be negative' });
      return;
    }
    onSubmitProductFrom(product);
  };

  return (
    <form onSubmit={handleOnSubmitProductForm}>
      <Stack spacing={2} px={8} py={6}>
        <Typography variant="h3">Product From</Typography>
        <TextField
          required
          label="Name"
          type="text"
          name="name"
          error={Boolean(error.name)}
          onChange={handleOnChange}
        />
        <TextField
          required
          label="Price"
          type="number"
          name="price"
          error={Boolean(error.price)}
          onChange={handleOnChange}
        />
        <TextField
          required
          label="Quantity"
          type="number"
          name="quantity"
          error={Boolean(error.quantity)}
          onChange={handleOnChange}
        />
        <Box display="flex" justifyContent="flex-end" gap={4}>
          <Button color="error" variant="outlined" type="reset">
            Cancel
          </Button>
          <Button variant="outlined" type="submit">
            Add
          </Button>
        </Box>
      </Stack>
    </form>
  );
};
