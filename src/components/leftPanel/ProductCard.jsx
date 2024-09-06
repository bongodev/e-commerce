export function ProductCard({ product }) {
  return (
    <div className="products">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5dyT8FEm-Khi_NBX4-sYdtIUo8EOmxe62eQ&s"
        alt="product-img"
        width="300px"
      />
      <h5>{product.name}</h5>
      <h5>${product.price}</h5>
      <button className="b1">Add to Cart</button>
    </div>
  );
}
