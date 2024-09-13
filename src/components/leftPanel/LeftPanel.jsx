import { Filter } from './Filter';
import { Heading } from './Heading';
import { Products } from '../product';

export function LeftPanel() {
  return (
    <div>
      <Heading />
      <Filter />
      <Products />
    </div>
  );
}
