import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-full text-center border-r-2 border-slate-50 flex flex-col p-8 text-text_color_light">
      <Link
        to={"/overview"}
        className="hover:bg-[#f9fafb] duration-200 p-2 hover:rounded-md hover:shadow-md mb-6 cursor-pointer"
      >
        <span>Overview</span>
      </Link>
      <Link
        to={"/settings"}
        className="hover:bg-[#f9fafb] duration-200 p-2 hover:rounded-md hover:shadow-md mb-6 cursor-pointer"
      >
        <span>Settings</span>
      </Link>
    </div>
  );
};

export default Sidebar;
