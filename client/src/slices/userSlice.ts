import {
  AsyncThunkAction,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { FormInput, UserInitState, UserData } from "../utils/types/types";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
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
      return <UserData>{
        displayName: data.user.displayName,
        email: data.user.email,
        photoUrl: data.user.photoURL,
        id: data.user.uid,
      };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const googleSignIn = createAsyncThunk("user/googleSignIn", async () => {
  try {
    const data = await signInWithPopup(auth, googleProvider);
    return <UserData>{
      displayName: data.user.displayName,
      email: data.user.email,
      photoUrl: data.user.photoURL,
      id: data.user.uid,
    };
  } catch (error) {
    return error;
  }
});

export const signoutUser = createAsyncThunk("user/signoutUser", async () => {
  try {
    const data = await signOut(auth);
    console.log(data);
  } catch (error) {
    return error;
  }
});

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
