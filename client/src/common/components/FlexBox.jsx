import { Box } from '@mui/material';

export const FlexBox = ({ children, props }) => {
  return (
    <Box display="flex" {...props}>
      {children}
    </Box>
  );
};
