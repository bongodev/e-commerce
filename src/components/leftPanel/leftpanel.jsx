import { Filter } from "./filter";
import { Heading } from "./heading";
import { Product } from "./product";

 export function Leftpanel() {
    return (
      <div>
       <Heading/>
       <Filter/>
      <Product/>
      </div>
    );
 }