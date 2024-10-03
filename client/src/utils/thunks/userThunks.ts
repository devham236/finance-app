import { createAsyncThunk } from "@reduxjs/toolkit";
import { FormInput, UserData } from "../types/types";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth, googleProvider } from "../../configs/firebaseConfig.js";

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

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (inputObject: FormInput) => {
    try {
      const data = await signInWithEmailAndPassword(
        auth,
        inputObject.email,
        inputObject.password
      );
      console.log(data);

      return <UserData>{
        displayName: data.user.displayName,
        email: data.user.email,
        photoUrl: data.user.photoURL,
        id: data.user.uid,
      };
    } catch (error) {
      return error;
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
    await signOut(auth);
    localStorage.removeItem("persist:user");
    return <UserData>{
      displayName: "",
      email: "",
      photoUrl: "",
      id: "",
    };
  } catch (error) {
    return error;
  }
});
