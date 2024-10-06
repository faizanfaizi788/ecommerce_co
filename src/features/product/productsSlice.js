import { createSlice } from '@reduxjs/toolkit';

// Initial state for products
const initialState = {
  products: [], // Will hold the list of products
};

// Create the products slice
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // Action to add products to the state
    addProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

// Selector to get product by id
export const selectProductById = (state, productId) =>
  state.products.products.find((product) => product._id === productId);

// Export the action
export const { addProducts } = productsSlice.actions;

// Export the reducer
export default productsSlice.reducer;
