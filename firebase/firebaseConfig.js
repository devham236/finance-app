// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFgWWBuv1XoGbd5w_-QV2lxsMsVqm01-o",
  authDomain: "finance-app-2474b.firebaseapp.com",
  projectId: "finance-app-2474b",
  storageBucket: "finance-app-2474b.appspot.com",
  messagingSenderId: "828268664964",
  appId: "1:828268664964:web:4f06fce7aec8cbb6a04ad1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
