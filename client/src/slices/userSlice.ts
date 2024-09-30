import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FormInput } from "../utils/types/types";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, googleProvider } from "../configs/firebaseConfig";

export const signinUser = createAsyncThunk(
  "user/signinUser",
  async (inputObject: FormInput) => {
    const data = await signInWithEmailAndPassword(
      auth,
      inputObject.email,
      inputObject.password
    );
    return data;
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
    builder.addCase(signinUser.rejected, (state) => {
      state.loading = false;
      state.error = "error";
      console.log("its rejected");
    });
  },
});

export default userSlice.reducer;
