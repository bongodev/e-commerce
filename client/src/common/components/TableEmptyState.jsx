import { Box, Button, Typography } from '@mui/material';

import { SearchOffIcon } from '../icons';

export const TableEmptyState = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        textAlign: 'center',
        padding: '16px',
      }}
    >
      <SearchOffIcon sx={{ fontSize: 80, color: 'gray', mb: 2 }} />
      <Typography variant="h6" color="textSecondary">
        No Data Available
      </Typography>
      <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
        Please try again later or adjust your filters.
      </Typography>
      <Button variant="contained" color="primary">
        Refresh
      </Button>
    </Box>
  );
};
