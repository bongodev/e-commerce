import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
} from '../../common/components';
import { Visibility, VisibilityOff } from '../../common/icons';
import { authServices } from '../../auth';

export function LoginForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      type: 'email',
      email: formData.email,
      password: formData.password,
    };

    authServices
      .login(payload)
      .then(() => navigate('/'))
      .catch(() => alert('Failed to login'));
  };

  return (
    <Box component="form" sx={{ mt: 2 }} onSubmit={handleSubmit}>
      <TextField
        fullWidth
        label="Email"
        name="email"
        type="email"
        margin="normal"
        required
        value={formData.email}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Password"
        name="password"
        type={showPassword ? 'text' : 'password'}
        margin="normal"
        required
        value={formData.password}
        onChange={handleChange}
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
      <Button
        fullWidth
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
        type="submit"
      >
        Login
      </Button>
    </Box>
  );
}
