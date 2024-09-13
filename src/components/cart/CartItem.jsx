import React from 'react';

export const CartItem = ({ cartItem, removeProductFromCart }) => {
  const handleRemoveProductFromCart = () => {
    removeProductFromCart(cartItem.id);
  };

  return (
    <div className="cart-item">
      <p>{`${cartItem.name} x ${cartItem.quantity}`}</p>
      <button onClick={handleRemoveProductFromCart}>remove</button>
    </div>
  );
};
