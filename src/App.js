import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './navigation/AppRoutes';
import useBootstrap from './hooks/useBootstrap';

function App() {
  const {isAuthenticated} = useBootstrap();
  console.log("isAuthenticated",isAuthenticated)
  return (
    <Router>
      <AppRoutes isAuthenticated={isAuthenticated}/>
    </Router>
  );
}

export default App;
