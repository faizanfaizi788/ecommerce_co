// src/navigation/AppRoutes.js

import React from 'react';
import OnboardingRoutes from './router/OnboardingRoutes';
import AuthenticatedRoutes from './router/AuthenticatedRoutes';
import { useSelector } from 'react-redux';

const AppRoutes = ({ isAuthenticated }) => {
  const authentication = useSelector((state) => state.authentication);
  console.log("AppRoutes : authentication",authentication)
  return (
    <React.Fragment>
      {/* Redirect to onboarding if not authenticated */}
      {isAuthenticated ? (
        <AuthenticatedRoutes />
      ) : (
        <OnboardingRoutes />
      )}
    </React.Fragment>
  );
};

export default AppRoutes;
