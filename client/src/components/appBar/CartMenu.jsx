import { useContext, useState } from 'react';

import { CartContext } from '../../contexts';

import { Badge, Box, Drawer, IconButton } from '../../common/components';
import { ShoppingCartIcon } from '../../common/icons';

import { Cart } from '../cart';

export const CartMenu = () => {
  const { cart } = useContext(CartContext);

  const [openCart, setOpenCart] = useState(false);

  const toggleCart = () => {
    setOpenCart((prev) => !prev);
  };

  return (
    <>
      <Badge badgeContent={cart.length} color="error">
        <IconButton color="inherit" onClick={toggleCart}>
          <ShoppingCartIcon />
        </IconButton>
      </Badge>
      <Drawer open={openCart} anchor="right" onClose={toggleCart}>
        <Box>
          <Cart />
        </Box>
      </Drawer>
    </>
  );
};
