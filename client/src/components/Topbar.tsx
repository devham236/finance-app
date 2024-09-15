import React from "react";

const Topbar = () => {
  return (
    <div className="w-full p-8 border-b-2 border-slate-50 flex items-center justify-between text-text_color_light">
      <div>Logo</div>
      <div>
        <span className="mr-20">Search</span>
        <span className="mr-20">DarkMode</span>
        <span className="">Account</span>
      </div>
    </div>
  );
};

export default Topbar;
