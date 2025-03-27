import { createSlice } from "@reduxjs/toolkit";
import { UserInitState } from "../utils/types/types";
import {
  createUser,
  googleSignIn,
  logoutUser,
  loginUser,
} from "../thunks/userThunks";

const userSlice = createSlice({
  name: "user",
  initialState: <UserInitState>{
    userData: {},
    loading: false,
    error: "",
  },
  reducers: {
    setUser: (state, action) => {
      state.userData = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Email and Password sign up
    builder.addCase(createUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.loading = false;
      state.userData = action.payload;
      state.error = "";
    });
    builder.addCase(createUser.rejected, (state, action) => {
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
    builder.addCase(logoutUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(logoutUser.fulfilled, (state, action) => {
      state.loading = false;
      state.userData = action.payload;
      state.error = "";
    });
    builder.addCase(logoutUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
