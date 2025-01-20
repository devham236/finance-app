import React, { useState } from "react";
import {
  googleSignIn,
  createUser,
  loginUser,
} from "../redux/thunks/userThunks";
import { useDispatch } from "react-redux";
import { FormInput } from "../utils/types/types";

const AuthForm = () => {
  const [formInput, setFormInput] = useState<FormInput>({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="w-[500px] bg-item_color_light dark:bg-body_color_dark rounded-md p-[1.5rem] text-text_color_light dark:text-text_color_dark">
      <h2 className="text-xl font-bold mb-4">Authenticate</h2>
      <div className="flex flex-col mb-2">
        <input
          type="text"
          placeholder="Email"
          name="email"
          className="mb-2 dark:border-container_color_dark bg-transparent border-container_color_light border-2 rounded-md p-2 placeholder:text-container_color_light dark:placeholder:text-container_color_dark outline-none"
          onChange={(e) => handleInputChange(e)}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="dark:border-container_color_dark bg-transparent border-container_color_light border-2 rounded-md p-2 placeholder:text-container_color_light dark:placeholder:text-container_color_dark outline-none"
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <div className="flex items-center mb-4">
        <button
          onClick={() => {
            dispatch(createUser(formInput));
          }}
          className="hover:shadow-md bg-green_color text-text_color_dark py-2 px-6 rounded-md duration-200"
        >
          Sign Up
        </button>
        <p className="mx-4">or</p>
        <button
          onClick={() => {
            dispatch(loginUser(formInput));
          }}
          className="hover:shadow-md bg-green_color text-text_color_dark py-2 px-6 rounded-md duration-200"
        >
          Login
        </button>
      </div>
      <div className="flex items-center">
        <p className="mr-2">Sign in with: </p>
        <div
          className="w-[30px] h-[30px]"
          onClick={() => dispatch(googleSignIn())}
        >
          <img
            src="/assets/Google__G__logo.svg.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
