import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../slices/darkmodeSlice";

const Topbar = () => {
  const { isDarkmode } = useSelector((state: any) => state.darkmode);
  const dispatch = useDispatch();

  return (
    <div className="w-full p-8 border-b-2 border-slate-50 flex items-center justify-between text-text_color_light dark:text-text_color_dark">
      <div className="">Ruune</div>
      <div className="flex items-center">
        <span className="mr-20 cursor-pointer">Search</span>
        <div
          className="mr-20 cursor-pointer bg-sidebar_item_color_light dark:bg-sidebar_item_color_dark flex items-center justify-between px-1 py-1 rounded-[20px] relative"
          onClick={() => dispatch(toggleDarkMode())}
        >
          <span className="material-symbols-rounded mr-1">light_mode</span>
          <span className="material-symbols-rounded">dark_mode</span>
          <span
            className={`bg-container_color_light absolute top-1 w-6 h-6 rounded-full  ${
              isDarkmode ? "left-1" : "right-1"
            }`}
          ></span>
        </div>
        <span className="cursor-pointer">Account</span>
      </div>
    </div>
  );
};

export default Topbar;
