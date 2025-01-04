import { createAsyncThunk } from "@reduxjs/toolkit";
import { FormInput, UserData } from "../../utils/types/types.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth, googleProvider } from "../../configs/firebaseConfig.js";
import axios from "../../configs/axiosConfig.js";

export const createUser = createAsyncThunk(
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

export const logoutUser = createAsyncThunk("user/signoutUser", async () => {
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

export const getAllUserData = createAsyncThunk(
  "user/getAllUserData",
  async (userId) => {
    try {
      const res = await axios.get(`user/getAll/${userId}`);
      console.log(res.data);
    } catch (error) {
      return error;
    }
  }
);
