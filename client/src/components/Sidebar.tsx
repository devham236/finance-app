import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-full text-center border-r-2 border-slate-50 flex flex-col p-[1.5rem] text-text_color_light">
      <Link
        to={"/overview"}
        className="hover:bg-[#f9fafb] duration-200 p-2 hover:rounded-md hover:shadow-md mb-6 cursor-pointer flex items-center"
      >
        <span className="material-symbols-rounded mr-2">grid_view</span>
        <p>Overview</p>
      </Link>
      <Link
        to={"/settings"}
        className="hover:bg-[#f9fafb] duration-200 p-2 hover:rounded-md hover:shadow-md mb-6 cursor-pointer flex items-center"
      >
        <span className="material-symbols-rounded mr-2">settings</span>
        <p>Settings</p>
      </Link>
    </div>
  );
};

export default Sidebar;
