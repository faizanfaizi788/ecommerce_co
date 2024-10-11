// src/navigation/routes/AuthenticatedRoutes.js

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeScreen from '../../screens/Home/HomeScreen';
import ProductScreen from '../../screens/Product/ProductScreen';
import CategoryScreen from '../../screens/Category/CategoryScreen';
import { CATEGORY, HOME, PRODUCT, SUB_CATEGORY_SCREEN } from './routerName';
import SubCategoryScreen from '../../screens/Category/SubCategoryScreen';

const AuthenticatedRoutes = () => {
  return (
    <Routes>
      <Route path={HOME} element={<HomeScreen />} />
      <Route path={PRODUCT} element={<ProductScreen />} />
      <Route path={CATEGORY} element={<CategoryScreen />} />
      <Route path={SUB_CATEGORY_SCREEN} element={<SubCategoryScreen />} />
      {/* You can add more authenticated routes here */}
    </Routes>
  );
};

export default AuthenticatedRoutes;
