import React, { ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../redux/slices/darkmodeSlice";

const ThemeToggle = ({ children }: { children: ReactNode }) => {
  const { isDarkMode } = useSelector((state: any) => state.darkmode);
  const dispatch = useDispatch();

  return (
    <div
      className="mr-20 cursor-pointer bg-item_color_light dark:bg-item_color_dark flex items-center justify-between px-1 py-1 rounded-[20px] relative"
      onClick={() => dispatch(toggleDarkMode())}
    >
      {children}
      <span
        className={`bg-container_color_light absolute top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full ${
          isDarkMode ? "left-1" : "right-1"
        }`}
      ></span>
    </div>
  );
};

export default ThemeToggle;
