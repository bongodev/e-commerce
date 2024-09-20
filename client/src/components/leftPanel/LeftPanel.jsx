import { Filter } from './Filter';
import { Products } from '../product';

export function LeftPanel() {
  return (
    <div>
      <Filter />
      <Products />
    </div>
  );
}
