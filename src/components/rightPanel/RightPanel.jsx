import { Cart } from './Cart';

export function RightPanel({ cart }) {
  return (
    <div>
      <h2>Cart</h2>
      <button className="b1">CheckOut</button>
      <div>
        <Cart cart={cart} />
      </div>
    </div>
  );
}
