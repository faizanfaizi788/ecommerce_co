// src/navigation/routes/OnboardingRoutes.js

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import WelcomeScreen from '../../screens/Welcome/WelcomeScreen';
import SignInScreen from '../../screens/Authentication/SignInScreen';
import SignUpScreen from '../../screens/Authentication/SignUpScreen';
import { SIGN_IN, SIGN_UP } from './routerName';

const OnboardingRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomeScreen />} />
      <Route path={SIGN_IN} element={<SignInScreen />} />
      <Route path={SIGN_UP} element={<SignUpScreen />} />
    </Routes>
  );
};

export default OnboardingRoutes;
