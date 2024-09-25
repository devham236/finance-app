import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className="w-[500px] bg-sidebar_item_color_light dark:bg-body_color_dark rounded-md p-[1.5rem] text-text_color_light dark:text-text_color_dark">
      <h2 className="text-xl font-bold mb-2">Login</h2>
      <p className="mb-4">
        New here?
        <Link
          to={"/auth/signup"}
          className="text-green_color ml-2 hover:underline"
        >
          Sign up here.
        </Link>
      </p>
      <div className="flex flex-col mb-2">
        <input
          type="text"
          placeholder="Email"
          className="mb-2 dark:border-container_color_dark bg-transparent border-container_color_light border-2 rounded-md p-2 placeholder:text-container_color_light dark:placeholder:text-container_color_dark outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="dark:border-container_color_dark bg-transparent border-container_color_light border-2 rounded-md p-2 placeholder:text-container_color_light dark:placeholder:text-container_color_dark outline-none"
        />
      </div>
      <button className="mb-4 hover:shadow-md bg-green_color text-text_color_dark py-2 px-6 rounded-md duration-200">
        Login
      </button>
      <div className="flex items-center">
        <p className="mr-2">Log in with: </p>
        <div className="w-[30px] h-[30px]">
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

export default LoginForm;
