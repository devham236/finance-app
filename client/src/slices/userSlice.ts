import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../axiosConfig";
import { FormInput } from "../utils/types/types";

export const signinUser = createAsyncThunk(
  "user/signinUser",
  async (inputObject: FormInput) => {
    const res = await axios.post("/test", inputObject);
    return res.data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: {},
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
