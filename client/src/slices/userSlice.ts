import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FormInput, UserInitState } from "../utils/types/types";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, googleProvider } from "../configs/firebaseConfig";

export const signinUser = createAsyncThunk(
  "user/signinUser",
  async (inputObject: FormInput, { rejectWithValue }) => {
    try {
      const data = await signInWithEmailAndPassword(
        auth,
        inputObject.email,
        inputObject.password
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: {},
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signinUser.pending, (state) => {
      state.loading = true;
      console.log("its pending");
    });
    builder.addCase(signinUser.fulfilled, (state, action) => {
      state.loading = false;
      state.userData = action.payload;
      state.error = "";
      console.log("its fulfilled");
    });
    builder.addCase(signinUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Sign-in failed"; // Log the actual error
      console.log("Sign-in rejected", action.payload);
    });
  },
});

export default userSlice.reducer;
