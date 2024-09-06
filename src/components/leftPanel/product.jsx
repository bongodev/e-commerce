import { Product_card } from "./product_card";
import './product.css';

export function Product() {
    const products = [
        { id: 1, name: 'Laptop', price: 899.99 },
        { id: 2, name: 'Smartphone', price: 499.99 },
        { id: 3, name: 'Headphones', price: 199.99 },
        { id: 4, name: 'Keyboard', price: 99.99 },
        { id: 5, name: 'Monitor', price: 299.99 },
        { id: 6, name: 'Mouse', price: 49.99 },
        { id: 7, name: 'Tablet', price: 399.99 },
        { id: 8, name: 'Smartwatch', price: 149.99 },
        { id: 9, name: 'Camera', price: 799.99 },
        { id: 10, name: 'Speaker', price: 129.99 }
    ];
   
    return (
        <div class="product-container">
            {products.map((p) => (
                <Product_card a={p}/>
            ))}
        </div>

    );
}