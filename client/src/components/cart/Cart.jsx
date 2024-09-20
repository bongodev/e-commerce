import React, { useContext } from 'react';

import { ImageIcon } from '../../common/icons';
import {
  Avatar,
  Box,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  Stack,
  Typography,
} from '../../common/components';

import { CartContext } from '../../contexts';

import { CartItem } from './CartItem';

export const Cart = () => {
  const { cart, removeProductFromCart } = useContext(CartContext);

  return (
    <Stack spacing={2} padding={2}>
      <Typography variant="h4">Cart</Typography>
      <Box>
        <Button variant="contained" disabled={!cart.length}>
          CheckOut
        </Button>
      </Box>
      <List sx={{ minWidth: 360 }}>
        {cart.map((cartItem) => (
          <ListItem key={cartItem.id}>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <CartItem
              cartItem={cartItem}
              removeProductFromCart={removeProductFromCart}
            />
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};
