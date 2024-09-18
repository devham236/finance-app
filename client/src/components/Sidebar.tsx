import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setCurrentPath } from "../slices/sidebarSlice";

const Sidebar = () => {
  const { currentPath } = useSelector((state: any) => state.sidebar);
  const dispatch = useDispatch();

  return (
    <div className="h-full text-center border-r-2 border-slate-50 dark:border-opacity-20 flex flex-col p-[1.5rem] text-text_color_light dark:text-text_color_dark relative">
      <Link
        to={"/overview"}
        onClick={() => dispatch(setCurrentPath("/overview"))}
        className={`hover:bg-sidebar_item_color_light dark:hover:bg-sidebar_item_color_dark duration-200 p-2 hover:rounded-md hover:shadow-md mb-6 cursor-pointer flex items-center
        ${
          currentPath === "/overview" || currentPath === "/"
            ? "bg-sidebar_item_color_light dark:bg-sidebar_item_color_dark shadow-md rounded-md"
            : ""
        }`}
      >
        <span className="material-symbols-rounded mr-2">grid_view</span>
        <p>Overview</p>
      </Link>
      <Link
        to={"/settings"}
        onClick={() => dispatch(setCurrentPath("/settings"))}
        className={`hover:bg-sidebar_item_color_light dark:hover:bg-sidebar_item_color_dark duration-200 p-2 hover:rounded-md hover:shadow-md mb-6 cursor-pointer flex items-center
        ${
          currentPath === "/settings" &&
          "bg-sidebar_item_color_light dark:bg-sidebar_item_color_dark shadow-md rounded-md"
        }`}
      >
        <span className="material-symbols-rounded mr-2">settings</span>
        <p>Settings</p>
      </Link>
      <button
        className={`bg-sidebar_item_color_light absolute bottom-0 left-[1.5rem] dark:bg-sidebar_item_color_dark duration-200 p-2 rounded-md hover:shadow-md mb-6 cursor-pointer flex items-center 
        `}
      >
        <span className="material-symbols-rounded mr-2 text-green_color">
          add_circle
        </span>
        <p>Add Entry</p>
      </button>
    </div>
  );
};

export default Sidebar;
