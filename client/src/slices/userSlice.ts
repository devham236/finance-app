import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: null,
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: () => {},
});

export const {} = userSlice.actions;
export default userSlice.reducer;
