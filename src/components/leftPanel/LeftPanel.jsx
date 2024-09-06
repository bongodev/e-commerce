import { Filter } from './Filter';
import { Heading } from './Heading';
import { Product } from './Product';

export function LeftPanel() {
  return (
    <div>
      <Heading />
      <Filter />
      <Product />
    </div>
  );
}
