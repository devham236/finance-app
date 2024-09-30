import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FormInput, UserInitState } from "../utils/types/types";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, googleProvider } from "../configs/firebaseConfig";

export const signinUser = createAsyncThunk(
  "user/signinUser",
  async (inputObject: FormInput, { rejectWithValue }) => {
    try {
      const data = await createUserWithEmailAndPassword(
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
  initialState: <UserInitState>{
    userData: {},
    loading: false,
    error: "",
    loggedIn: false,
  },
  reducers: {
    signoutUser: (state) => {
      console.log("user signed out");
    },
  },
  extraReducers: (builder) => {
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
  },
});

export const { signoutUser } = userSlice.actions;
export default userSlice.reducer;
