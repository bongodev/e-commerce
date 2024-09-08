import React from 'react';

export const Cart = ({ cart }) => {
  return (
    <ul>
      {cart.map((cartItem) => (
        <li key={cartItem.id}>{`${cartItem.name} x ${cartItem.quantity}`}</li>
      ))}
    </ul>
  );
};
