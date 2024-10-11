import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE } from '../../redux/status';

// Initial state for products
const initialState = {
  status: INITIAL_STATE
};

// Create the products slice
const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    // Action to add products to the state
    uiShowProductCategoryModel: (state, action) => {
      return {
        ...state,
        isProductCategoryModel: action.payload
      }
    },
  },
});

// Export the action
export const { uiShowProductCategoryModel } = uiSlice.actions;

// Export the reducer
export default uiSlice.reducer;
