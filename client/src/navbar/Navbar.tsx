import React, { ReactNode } from "react";
import ThemeToggle from "./ThemeToggle";
import UserIcon from "./UserIcon";
import Auth from "./Auth";

const Navbar = () => {
  return (
    <nav className="w-full p-8 border-b-2 relative border-slate-50 dark:border-opacity-20 flex items-center justify-between text-text_color_light dark:text-text_color_dark">
      <h1 className="text-green_color font-bold">Ruune</h1>
      <div className="flex items-center">
        <ThemeToggle />
        <UserIcon />
      </div>
      <Auth />
    </nav>
  );
};

export default Navbar;
