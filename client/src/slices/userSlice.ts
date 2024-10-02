import { createSlice } from "@reduxjs/toolkit";
import { UserInitState } from "../utils/types/types";
import {
  signinUser,
  googleSignIn,
  signoutUser,
} from "../utils/thunks/userThunks";

const userSlice = createSlice({
  name: "user",
  initialState: <UserInitState>{
    userData: {},
    loading: false,
    error: "",
    loggedIn: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Email and Password sign in
    builder.addCase(signinUser.pending, (state) => {
      state.loading = true;
      state.loggedIn = false;
    });
    builder.addCase(signinUser.fulfilled, (state, action) => {
      state.loading = false;
      state.userData = action.payload;
      state.loggedIn = true;
      state.error = "";
    });
    builder.addCase(signinUser.rejected, (state, action) => {
      state.loading = false;
      state.loggedIn = false;
      state.error = action.error.message;
    });

    // Google Popup sign in
    builder.addCase(googleSignIn.pending, (state) => {
      state.loading = true;
      state.loggedIn = false;
    });
    builder.addCase(googleSignIn.fulfilled, (state, action) => {
      state.loading = false;
      state.userData = action.payload;
      state.loggedIn = true;
      state.error = "";
    });
    builder.addCase(googleSignIn.rejected, (state, action) => {
      state.loading = false;
      state.loggedIn = false;
      state.error = action.error.message;
    });

    // Sign out user
    builder.addCase(signoutUser.pending, (state) => {
      state.loading = true;
      state.loggedIn = false;
    });
    builder.addCase(signoutUser.fulfilled, (state, action) => {
      state.loading = false;
      state.userData = action.payload;
      state.loggedIn = true;
      state.error = "";
    });
    builder.addCase(signoutUser.rejected, (state, action) => {
      state.loading = false;
      state.loggedIn = false;
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;
