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

  return (
    <div className="App">
      <LeftPanel addProductToCart={addProductToCart} />
      <RightPanel cart={cart} />
    </div>
  );
}

export default App;
