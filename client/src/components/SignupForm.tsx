import React from "react";

const SignupForm = () => {
  return (
    <div className="w-[500px] bg-sidebar_item_color_light dark:bg-sidebar_item_color_dark rounded-md p-[1.5rem]">
      <h2 className="text-xl font-bold">Sign Up</h2>
      <p>
        Already have an Account? <span>Login here.</span>
      </p>
      <div className="flex flex-col">
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
      </div>
      <button>Sign Up</button>
      <div className="flex items-center">
        <p>Sign up with: </p>
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
