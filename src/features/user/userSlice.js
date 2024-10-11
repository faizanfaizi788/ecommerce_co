// src/redux/features/userSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE, USER_LOADED } from '../../redux/status';

const initialState = {
 status: INITIAL_STATE
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      return initialState;  // Reset to initial state
    },
    userStatus:(state, action) => {
      state.status = action.payload;
    },
    userAdd: (state, action) => {
      state.status = USER_LOADED;
      state.data = action.payload;
    },
  },
});

// Export the actions
export const { logout, userAdd, userStatus} = userSlice.actions;

// Export the reducer to be added to the store
export default userSlice.reducer;
