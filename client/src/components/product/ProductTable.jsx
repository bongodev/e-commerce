import {
  Box,
  IconButton,
  Table,
  TableEmptyState,
} from '../../common/components';
import { DeleteIcon, EditIcon, SettingsIcon } from '../../common/icons';

const ProductRowActions = ({ product, onSelectProduct }) => {
  return (
    <Box>
      <IconButton size="small" onClick={() => onSelectProduct(product)}>
        <EditIcon />
      </IconButton>
      <IconButton size="small" color="error">
        <DeleteIcon />
      </IconButton>
    </Box>
  );
};

export const ProductTable = ({ isLoading, products, onSelectProduct }) => {
  const getFormattedRows = () =>
    products.map((product) => ({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: product.quantity,
      data: product,
    }));

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
            headerAlign: 'center',
            type: 'number',
            width: 150,
            valueFormatter: (value) => `$${value}`,
          },
          {
            field: 'quantity',
            headerName: 'Quantity',
            headerAlign: 'center',
            width: 150,
            type: 'number',
          },
          {
            align: 'center',
            field: 'actions',
            headerAlign: 'center',
            minWidth: 200,
            renderCell: ({ row }) => (
              <ProductRowActions
                product={row.data}
                onSelectProduct={onSelectProduct}
              />
            ),
            renderHeader: () => <SettingsIcon />,
            sortable: false,
          },
        ]}
        rows={getFormattedRows()}
        loading={isLoading}
        paginationMode="client"
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        pageSizeOptions={[10, 20]}
        slots={{
          noRowsOverlay: TableEmptyState,
        }}
        sx={{
          minHeight: 400,
          '& .MuiDataGrid-columnHeaderTitle': {
            fontWeight: 700,
          },
        }}
      />
    </Box>
  );
};
