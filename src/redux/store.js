import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';  // Import the user slice
import useProductReducer from '../features/product/productsSlice';

const store = configureStore({
  reducer: {
    user: userReducer,  // Add user slice reducer
    products: useProductReducer
  },
});

export default store;
