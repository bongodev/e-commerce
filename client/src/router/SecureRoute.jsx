import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CircularProgress } from '../common/components';

import { authServices } from '../auth';

export default function SecureRoute({ children }) {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (!authServices.isUserLoggedIn()) {
      return navigate('/login');
    }
    setIsAuthenticated(true);
  }, [navigate]);

  if (!isAuthenticated) {
    return <CircularProgress />;
  }

  return children;
}
