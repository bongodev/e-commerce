import React, { useState } from 'react';
import { Container, Tabs, Tab, Box, Typography } from '../../common/components';
import { LoginForm, SignupForm } from '../../components';

export function LoginPage() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Simple E-Commerce
      </Typography>
      <Tabs value={activeTab} onChange={handleTabChange} centered>
        <Tab label="Login" />
        <Tab label="Sign Up" />
      </Tabs>
      <Box sx={{ mt: 2 }}>
        {activeTab === 0 ? (
          <LoginForm />
        ) : (
          <SignupForm onSignUpComplete={() => setActiveTab(0)} />
        )}
      </Box>
    </Container>
  );
}
