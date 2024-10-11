// src/redux/features/userSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE } from '../../redux/status';

const initialState = {
 status: INITIAL_STATE
};

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    authenticationStatus: (state, action) => {
      state.status = action.payload;
    },
    authenticationUserAdd: (state, action) => {
     return {
      ...state,
      data: {
        ...state.data,
        ...action.payload
      }
     }
    },
  },
});

// Export the actions
export const { authenticationUserAdd, authenticationStatus} = authenticationSlice.actions;

// Export the reducer to be added to the store
export default authenticationSlice.reducer;
