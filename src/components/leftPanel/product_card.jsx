export function Product_card({a}) {
    return (
    <div class="products">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5dyT8FEm-Khi_NBX4-sYdtIUo8EOmxe62eQ&s" alt="product-img" width="300px"  />
         <h5>{a.name}</h5>
         <h5>${a.price}</h5>
        <button class="b1">Add to Cart</button>
    </div>
    );
}