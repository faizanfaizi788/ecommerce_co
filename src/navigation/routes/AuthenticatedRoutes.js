// src/navigation/routes/AuthenticatedRoutes.js

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeScreen from '../../screens/Home/HomeScreen';
import ProductScreen from '../../screens/Product/ProductScreen';

const AuthenticatedRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomeScreen />} />
      <Route path="/product" element={<ProductScreen />} />
      {/* You can add more authenticated routes here */}
    </Routes>
  );
};

export default AuthenticatedRoutes;
