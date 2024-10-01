import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../slices/darkmodeSlice";
import { setCurrentPath } from "../slices/sidebarSlice";
import AuthForm from "./AuthForm";

const Topbar = () => {
  const { isDarkMode } = useSelector((state: any) => state.darkmode);
  const { loggedIn } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  return (
    <div className="w-full p-8 border-b-2 border-slate-50 dark:border-opacity-20 flex items-center justify-between text-text_color_light dark:text-text_color_dark">
      <div className="text-green_color">Ruune</div>
      <p>{loggedIn ? "Logged in" : "Not logged in"}</p>
      <div className="flex items-center">
        <div className="mr-20 flex items-center p-1 rounded-full bg-sidebar_item_color_light dark:bg-sidebar_item_color_dark">
          <span className="material-symbols-rounded mr-2">search</span>
          <input
            type="text"
            placeholder="Search"
            className=" bg-transparent text-text_color_light placeholder:text-text_color_light dark:text-text_color_dark dark:placeholder:text-text_color_dark outline-none"
          />
        </div>
        <div
          className="mr-20 cursor-pointer bg-sidebar_item_color_light dark:bg-sidebar_item_color_dark flex items-center justify-between px-1 py-1 rounded-[20px] relative"
          onClick={() => dispatch(toggleDarkMode())}
        >
          <span className="material-symbols-rounded mr-1">light_mode</span>
          <span className="material-symbols-rounded">dark_mode</span>
          <span
            className={`bg-container_color_light absolute top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full ${
              isDarkMode ? "left-1" : "right-1"
            }`}
          ></span>
        </div>
        <div
          className="text-text_color_light dark:text-text_color_dark bg-sidebar_item_color_light dark:bg-sidebar_item_color_dark flex items-center p-1 rounded-full relative"
          onClick={() => dispatch(setCurrentPath("/account"))}
        >
          <span className="material-symbols-rounded">account_circle</span>
          <div className=" absolute top-[43px] right-0">
            <AuthForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
