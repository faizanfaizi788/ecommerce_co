import React, { useEffect } from 'react';
import AppRoutes from './navigation/AppRoutes';
import useBootstrap from './hooks/useBootstrap';
import { useNavigate } from 'react-router-dom';

function App() {
  const { isAuthenticated } = useBootstrap();
  const navigate = useNavigate();
 
  console.log("isAuthenticated", isAuthenticated)
  return (
    <AppRoutes isAuthenticated={isAuthenticated} />
  );
}

export default App;
