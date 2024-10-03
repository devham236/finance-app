import { createSlice } from "@reduxjs/toolkit";
import { UserInitState } from "../utils/types/types";
import {
  signinUser,
  googleSignIn,
  signoutUser,
  loginUser,
} from "../utils/thunks/userThunks";

const userSlice = createSlice({
  name: "user",
  initialState: <UserInitState>{
    userData: {},
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    // Email and Password sign up
    builder.addCase(signinUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(signinUser.fulfilled, (state, action) => {
      state.loading = false;
      state.userData = action.payload;
      state.error = "";
    });
    builder.addCase(signinUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // Email and Password login
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      console.log(action.payload);

      state.userData = action.payload;
      state.error = "";
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // Google Popup sign in
    builder.addCase(googleSignIn.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(googleSignIn.fulfilled, (state, action) => {
      state.loading = false;
      state.userData = action.payload;
      state.error = "";
    });
    builder.addCase(googleSignIn.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // Sign out user
    builder.addCase(signoutUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(signoutUser.fulfilled, (state, action) => {
      state.loading = false;
      state.userData = action.payload;
      state.error = "";
    });
    builder.addCase(signoutUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;
