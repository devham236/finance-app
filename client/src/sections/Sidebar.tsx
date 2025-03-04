import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setCurrentPath } from "../redux/slices/sidebarSlice";

const Sidebar = () => {
  const { currentPath } = useSelector((state: any) => state.sidebar);
  const dispatch = useDispatch();

  return (
    <section className="h-full text-center border-r-2 border-slate-50 dark:border-opacity-20 flex flex-col p-[1.5rem] text-text_color_light dark:text-text_color_dark relative">
      <Link
        to={"/overview"}
        onClick={() => dispatch(setCurrentPath("/overview"))}
        className={`hover:bg-item_color_light dark:hover:bg-item_color_dark duration-200 p-2 hover:rounded-md hover:shadow-md mb-6 cursor-pointer flex items-center
        ${
          currentPath === "/overview" || currentPath === "/"
            ? "bg-item_color_light dark:bg-item_color_dark shadow-md rounded-md"
            : ""
        }`}
      >
        <span className="material-symbols-rounded mr-2">grid_view</span>
        <p>Overview</p>
      </Link>
      <Link
        to={"/settings"}
        onClick={() => dispatch(setCurrentPath("/settings"))}
        className={`hover:bg-item_color_light dark:hover:bg-item_color_dark duration-200 p-2 hover:rounded-md hover:shadow-md mb-6 cursor-pointer flex items-center
        ${
          currentPath === "/settings" &&
          "bg-item_color_light dark:bg-item_color_dark shadow-md rounded-md"
        }`}
      >
        <span className="material-symbols-rounded mr-2">settings</span>
        <p>Settings</p>
      </Link>
    </section>
  );
};

export default Sidebar;
