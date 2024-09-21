import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../slices/darkmodeSlice";
import { Link } from "react-router-dom";
import { setCurrentPath } from "../slices/sidebarSlice";

const Topbar = () => {
  const { isDarkMode } = useSelector((state: any) => state.darkmode);
  const dispatch = useDispatch();

  return (
    <div className="w-full p-8 border-b-2 border-slate-50 dark:border-opacity-20 flex items-center justify-between text-text_color_light dark:text-text_color_dark">
      <div className="text-green_color">Ruune</div>
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
        <Link
          to={"/account"}
          className="text-text_color_light dark:text-text_color_dark bg-sidebar_item_color_light dark:bg-sidebar_item_color_dark flex items-center p-1 rounded-full mr-20"
          onClick={() => dispatch(setCurrentPath("/account"))}
        >
          <span className="material-symbols-rounded">account_circle</span>
        </Link>
        <Link
          to={"/auth"}
          className="bg-sidebar_item_color_light dark:bg-sidebar_item_color_dark py-1 px-3 rounded-full text-text_color_light dark:text-text_color_dark"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
