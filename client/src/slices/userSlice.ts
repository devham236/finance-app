import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FormInput } from "../utils/types/types";

export const signinUser = createAsyncThunk(
  "user/signinUser",
  async (inputObject: FormInput) => {
    //führ die sign in methoden von firebase hier direkt aus
    //du kannst ein zweites argument übergeben um die google sign in methode zu verwenden
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
    });
    builder.addCase(signinUser.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(signinUser.rejected, (state) => {
      state.loading = false;
      state.error = "error";
    });
  },
});

export default userSlice.reducer;
