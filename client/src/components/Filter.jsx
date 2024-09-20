import { Box, Button } from '../common/components';

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
    <Box display="flex" gap={1} flexWrap="wrap">
      {categories.map((category, index) => (
        <Button key={index}>{category}</Button>
      ))}
    </Box>
  );
}
