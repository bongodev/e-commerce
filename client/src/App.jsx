import { CartProvider } from './contexts';

import { LeftPanel, RightPanel } from './components';

import './App.css';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <LeftPanel />
        <RightPanel />
      </div>
    </CartProvider>
  );
}

export default App;
