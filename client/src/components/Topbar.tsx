import React from "react";
import { useDispatch } from "react-redux";
import { toggleDarkMode } from "../slices/darkmodeSlice";

const Topbar = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-full p-8 border-b-2 border-slate-50 flex items-center justify-between text-text_color_light dark:text-text_color_dark">
      <div className="">Ruune</div>
      <div>
        <span className="mr-20 cursor-pointer">Search</span>
        <span
          className="mr-20 cursor-pointer"
          onClick={() => dispatch(toggleDarkMode())}
        >
          DarkMode
        </span>
        <span className="cursor-pointer">Account</span>
      </div>
    </div>
  );
};

export default Topbar;
