import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setCurrentPath } from "../slices/sidebarSlice";

const Sidebar = () => {
  const { currentPath } = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();

  return (
    <div className="h-full text-center border-r-2 border-slate-50 flex flex-col p-[1.5rem] text-text_color_light dark:text-text_color_dark">
      <Link
        to={"/overview"}
        onClick={() => dispatch(setCurrentPath("/overview"))}
        className={`hover:bg-sidebar_item_color_light duration-200 p-2 hover:rounded-md hover:shadow-md mb-6 cursor-pointer flex items-center
        ${
          currentPath === "/overview" || currentPath === null
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
        className={`hover:bg-sidebar_item_color_light duration-200 p-2 hover:rounded-md hover:shadow-md mb-6 cursor-pointer flex items-center
        ${
          currentPath === "/settings" &&
          "bg-sidebar_item_color_light shadow-md rounded-md"
        }`}
      >
        <span className="material-symbols-rounded mr-2">settings</span>
        <p>Settings</p>
      </Link>
    </div>
  );
};

export default Sidebar;
