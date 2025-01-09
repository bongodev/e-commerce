import { useContext } from 'react';

import { AddBoxIcon } from '../../common/icons';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Tooltip,
  Typography,
} from '../../common/components';

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
      <CardContent sx={{ height: 200 }}>
        <Box display="flex" justifyContent="space-between" gap={4}>
          <Tooltip title={product.name}>
            <Typography gutterBottom variant="h5" component="div" noWrap>
              {product.name}
            </Typography>
          </Tooltip>

          <Typography variant="h5">${product.price}</Typography>
        </Box>
        <Tooltip title={product.description}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {product.description}
          </Typography>
        </Tooltip>
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
