import { Cart } from './Cart';

export function RightPanel({ cart, removeProductFromCart }) {
  return (
    <div>
      <h2>Cart</h2>
      <button className="b1">CheckOut</button>
      <div>
        <Cart cart={cart} removeProductFromCart={removeProductFromCart} />
      </div>
    </div>
  );
}
