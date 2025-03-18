import React, { ReactNode } from "react";
import { useSelector } from "react-redux";

const Sidebar = ({ children }: { children: ReactNode }) => {
  const { currentPath } = useSelector((state: any) => state.sidebar);

  console.log(currentPath);

  return (
    <section className="h-full text-center border-r-2 border-slate-50 dark:border-opacity-20 flex flex-col p-[1.5rem] text-text_color_light dark:text-text_color_dark relative">
      {children}
    </section>
  );
};

export default Sidebar;
