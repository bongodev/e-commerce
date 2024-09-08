import { Filter } from './Filter';
import { Heading } from './Heading';
import { Product } from './Product';

export function LeftPanel({ addProductToCart }) {
  return (
    <div>
      <Heading />
      <Filter />
      <Product addProductToCart={addProductToCart} />
    </div>
  );
}
