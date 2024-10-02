import React, { useState } from "react";
import { googleSignIn, signinUser } from "../utils/thunks/userThunks";
import { useDispatch } from "react-redux";
import { FormInput } from "../utils/types/types";
import { toggleForm } from "../slices/authFormSlice";

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
    <div className="w-[500px] bg-sidebar_item_color_light dark:bg-body_color_dark rounded-md p-[1.5rem] text-text_color_light dark:text-text_color_dark">
      <span
        onClick={() => dispatch(toggleForm(false))}
        className="material-symbols-rounded absolute top-[10px] right-[10px]"
      >
        close
      </span>
      <h2 className="text-xl font-bold mb-2">Sign Up</h2>
      <p className="mb-4">
        Already have an Account?
        <span className="text-green_color ml-2 hover:underline">
          Login here.
        </span>
      </p>
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
      <button
        onClick={() => {
          dispatch(signinUser(formInput));
        }}
        className="mb-4 hover:shadow-md bg-green_color text-text_color_dark py-2 px-6 rounded-md duration-200"
      >
        Sign Up
      </button>
      <div className="flex items-center">
        <p className="mr-2">Sign up with: </p>
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
