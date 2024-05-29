import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
  name: "profileSlice",
  initialState: {
isAuthenticated: false,

  },

  reducers: {
    
logInState: (state, action) => {
state.isAuthenticated = true;

},
logOutState: (state) => {

state.isAuthenticated = false;

},


  }
});

export const {logInState, logOutState} = profileSlice.actions;
export const isAuthenticated = (state) => state.profileSlice.isAuthenticated;
export default profileSlice.reducer;
