import { useContext } from 'react';

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';

import { CartContext } from '../../contexts';

export function ProductCard({ product }) {
  const { addProductToCart } = useContext(CartContext);

  const handleAddProductToCart = () => {
    addProductToCart(product);
  };

  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        sx={{ height: 140, width: 300 }}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5dyT8FEm-Khi_NBX4-sYdtIUo8EOmxe62eQ&s"
        title={product.name}
      />
      <CardContent>
        <Box display="flex" justifyContent="space-between">
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="h5">${product.price}</Typography>
        </Box>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before the final copy is available. Wikipedia
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined">
          Share
        </Button>
        <Button
          size="small"
          variant="outlined"
          startIcon={<AddBoxIcon />}
          onClick={handleAddProductToCart}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}
