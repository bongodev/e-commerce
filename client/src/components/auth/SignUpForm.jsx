import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  InputAdornment,
  IconButton,
} from '../../common/components';
import { Visibility, VisibilityOff } from '../../common/icons';

import { authServices } from '../../auth';

export function SignupForm({ onSignUpComplete }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.honeypot) {
      console.warn('Honeypot triggered. Potential bot submission.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const payload = {
      fname: formData.fname,
      lname: formData.lname,
      email: formData.email,
      password: formData.password,
      honeypot: '', // Honeypot field
    };

    authServices
      .signup(payload)
      .then(() => onSignUpComplete())
      .catch(() => alert('Failed to signup'));
  };

  return (
    <Box component="form" sx={{ mt: 2 }} onSubmit={handleSubmit}>
      <TextField
        fullWidth
        label="First Name"
        name="fname"
        type="text"
        margin="normal"
        required
        value={formData.fname}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Last Name"
        name="lname"
        type="text"
        margin="normal"
        required
        value={formData.lname}
        onChange={handleChange}
      />
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
      <TextField
        fullWidth
        label="Confirm Password"
        name="confirmPassword"
        type={showConfirmPassword ? 'text' : 'password'}
        margin="normal"
        required
        value={formData.confirmPassword}
        onChange={handleChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={toggleConfirmPasswordVisibility} edge="end">
                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      {/* Honeypot field - hidden from users */}
      <TextField
        fullWidth
        label="Leave this field empty"
        name="honeypot"
        type="text"
        margin="normal"
        value={formData.honeypot}
        onChange={handleChange}
        style={{ display: 'none' }}
      />
      <Button
        fullWidth
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
        type="submit"
      >
        Sign Up
      </Button>
    </Box>
  );
}
