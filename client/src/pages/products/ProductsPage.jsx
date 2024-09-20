import { CartProvider } from '../../contexts';
import { LeftPanel, RightPanel } from '../../components';

import './ProductPage.css';

export const ProductsPage = () => {
  return (
    <CartProvider>
      <div className="productPage">
        <LeftPanel />
        <RightPanel />
      </div>
    </CartProvider>
  );
};
