import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import { setCurrentPath } from "../redux/slices/sidebarSlice";
import { useDispatch, useSelector } from "react-redux";

const SidebarItem = ({
  children,
  path,
}: {
  children: ReactNode;
  path: string;
}) => {
  const { currentPath } = useSelector((state: any) => state.sidebar);
  const dispatch = useDispatch();

  return (
    <Link
      to={path}
      onClick={() => dispatch(setCurrentPath(path))}
      className={`hover:bg-item_color_light dark:hover:bg-item_color_dark duration-200 p-2 hover:rounded-md hover:shadow-md mb-6 cursor-pointer flex items-center ${
        currentPath === path
          ? "bg-item_color_light dark:bg-item_color_dark shadow-md rounded-md"
          : ""
      } `}
    >
      {children}
    </Link>
  );
};

export default SidebarItem;
