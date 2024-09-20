import { CartProvider } from '../contexts';

import { LeftPanel, RightPanel } from '../components';

export const HomePage = () => {
  return (
    <CartProvider>
      <div className="App">
        <LeftPanel />
        <RightPanel />
      </div>
    </CartProvider>
  );
};
