// src/redux/features/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      return initialState;  // Reset to initial state
    },
    addUser: (state, action) => {
      return { ...state, ...action.payload };  // Merge payload into state
    },
  },
});

// Export the actions
export const { logout, addUser } = userSlice.actions;

// Export the reducer to be added to the store
export default userSlice.reducer;
