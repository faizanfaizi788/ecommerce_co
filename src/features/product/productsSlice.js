import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE } from '../../redux/status';

// Initial state for products
const initialState = {
  status: INITIAL_STATE
};

// Create the products slice
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // Action to add products to the state
    productsAddCollection: (state, action) => {
      return {
        ...state,
        productsCollection: action.payload
      }
    },
    productsAddCategory: (state, action) => {
      return {
        ...state,
        productCategory: action.payload
      }
    },
    productsAddSubCategory: (state, action) => {
      return {
        ...state,
        productSubCategory: action.payload
      }
    },
  },
});

// Selector to get product by id
export const selectProductById = (state, productId) =>
  state.products.productsCollection.find((product) => product._id === productId);


// Export the action
export const { productsAddCollection, productsAddCategory, productsAddSubCategory } = productsSlice.actions;

// Export the reducer
export default productsSlice.reducer;
