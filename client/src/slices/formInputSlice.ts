import { createSlice } from "@reduxjs/toolkit";

const forminputSlice = createSlice({
  name: "formInput",
  initialState: { email: "", password: "" },
  reducers: {
    setInput: (state, action) => {
      console.log(action.payload);
    },
  },
});

export const { setInput } = forminputSlice.actions;
export default forminputSlice.reducer;
