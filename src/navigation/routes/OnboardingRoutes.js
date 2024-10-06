// src/navigation/routes/OnboardingRoutes.js

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import WelcomeScreen from '../../screens/Welcome/WelcomeScreen';
import SignInScreen from '../../screens/Authentication/SignInScreen';
import SignUpScreen from '../../screens/Authentication/SignUpScreen';

const OnboardingRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomeScreen />} />
      <Route path="/sign-in" element={<SignInScreen />} />
      <Route path="/sign-up" element={<SignUpScreen />} />
    </Routes>
  );
};

export default OnboardingRoutes;
