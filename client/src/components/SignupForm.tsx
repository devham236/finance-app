import React from "react";

const SignupForm = () => {
  return (
    <div className="w-[500px] bg-sidebar_item_color_light dark:bg-body_color_dark rounded-md p-[1.5rem] text-text_color_light dark:text-text_color_dark">
      <h2 className="text-xl font-bold mb-2">Sign Up</h2>
      <p className="mb-4">
        Already have an Account?
        <span className="text-green_color ml-2">Login here.</span>
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
      <button className="mb-4 hover:shadow-md bg-green_color text-text_color_dark p-2 rounded-md duration-200">
        Sign Up
      </button>
      <div className="flex items-center">
        <p className="mr-2">Sign up with: </p>
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

export default SignupForm;
