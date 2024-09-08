import { useState } from 'react';

import { LeftPanel } from './components/leftPanel/LeftPanel';
import { RightPanel } from './components/rightPanel/RightPanel';

import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  const addProductToCart = (product) => {
    const productIndexInCart = cart.findIndex(
      (cartItem) => cartItem.id === product.id
    );
    if (productIndexInCart !== -1) {
      cart[productIndexInCart].quantity++;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeProductFromCart = (productId) => {
    const productIndexInCart = cart.findIndex(
      (cartItem) => cartItem.id === productId
    );

    if (productIndexInCart === -1) {
      alert('Product is not present in the cart!!!');
      return;
    }

    cart[productIndexInCart].quantity--;
    if (cart[productIndexInCart].quantity === 0) {
      const updatedCart = cart.filter((cartItem) => cartItem.id !== productId);
      setCart(updatedCart);
      return;
    }
    setCart([...cart]);
  };

  return (
    <div className="App">
      <LeftPanel addProductToCart={addProductToCart} />
      <RightPanel cart={cart} removeProductFromCart={removeProductFromCart} />
    </div>
  );
}

export default App;
