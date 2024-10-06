// src/navigation/AppRoutes.js

import React from 'react';
import OnboardingRoutes from './routes/OnboardingRoutes';
import AuthenticatedRoutes from './routes/AuthenticatedRoutes';

const AppRoutes = ({ isAuthenticated }) => {
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
