import { createContext } from 'react';

import { useCart } from '../hooks';

export const CartContext = createContext({ cart: [] });

export const CartProvider = ({ children }) => {
  const { cart, addProductToCart, removeProductFromCart } = useCart();

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductToCart,
        removeProductFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
