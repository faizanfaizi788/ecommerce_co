import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';  // Import the user slice
import useProductReducer from '../features/product/productsSlice';
import authenticationReducer from '../features/authentication/authenticationSlice';
import categoriesReducer from '../features/categories/categoriesSlice';
import uiReducer from '../features/ui/uiSlice';
const store = configureStore({
  reducer: {
    user: userReducer,  // Add user slice reducer
    authentication: authenticationReducer,
    products: useProductReducer,
    categories: categoriesReducer,
    ui: uiReducer
  },
});

export default store;
