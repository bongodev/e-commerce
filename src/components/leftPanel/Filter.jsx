export function Filter() {
  const categories = [
    'Laptops',
    'Gaming',
    'Accessories',
    'Peripherals',
    'Storage',
    'Components',
    'Monitors',
    'Printers',
    'Product Section',
  ];

  return (
    <div>
      {categories.map((category, index) => (
        <button className="b2" key={index}>
          {category}
        </button>
      ))}
    </div>
  );
}
