import React from 'react';

import { CartItem } from './CartItem';

import './Cart.css';

export const Cart = ({ cart, removeProductFromCart }) => {
  return (
    <ul>
      {cart.map((cartItem) => (
        <li key={cartItem.id}>
          <CartItem
            cartItem={cartItem}
            removeProductFromCart={removeProductFromCart}
          />
        </li>
      ))}
    </ul>
  );
};
