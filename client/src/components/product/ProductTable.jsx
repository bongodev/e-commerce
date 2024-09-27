import { Box, Table } from '../../common/components';

export const ProductTable = () => {
  return (
    <Box>
      <Table
        columns={[
          {
            field: 'name',
            headerName: 'Product Name',
            flex: 1,
          },
          {
            field: 'price',
            headerName: 'Price',
            type: 'number',
            width: 150,
          },
          {
            field: 'quantity',
            headerName: 'Quantity',
            width: 150,
            type: 'number',
          },
        ]}
        rows={[]}
      />
    </Box>
  );
};
