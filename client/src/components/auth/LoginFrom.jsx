import { useState } from 'react';
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
} from '../../common/components';
import { Visibility, VisibilityOff } from '../../common/icons';

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box component="form" sx={{ mt: 2 }}>
      <TextField
        fullWidth
        label="Email"
        type="email"
        margin="normal"
        required
      />
      <TextField
        fullWidth
        label="Password"
        type={showPassword ? 'text' : 'password'}
        margin="normal"
        required
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={togglePasswordVisibility} edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Button fullWidth variant="contained" color="primary" sx={{ mt: 2 }}>
        Login
      </Button>
    </Box>
  );
};
