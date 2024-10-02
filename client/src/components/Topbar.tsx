import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../slices/darkmodeSlice";
import AuthForm from "./AuthForm";
import { toggleForm } from "../slices/authFormSlice";
import { signoutUser } from "../slices/userSlice";

const Topbar = () => {
  const { isDarkMode } = useSelector((state: any) => state.darkmode);
  const { userData } = useSelector((state: any) => state.user);
  const { showForm } = useSelector((state: any) => state.authForm);
  const dispatch = useDispatch();

  return (
    <div className="w-full p-8 border-b-2 relative border-slate-50 dark:border-opacity-20 flex items-center justify-between text-text_color_light dark:text-text_color_dark">
      <div className="text-green_color">Ruune</div>
      <button onClick={() => dispatch(signoutUser())}>Log Out</button>
      <div className="flex items-center">
        <div className="mr-20 flex items-center p-1 rounded-full bg-sidebar_item_color_light dark:bg-sidebar_item_color_dark">
          <span className="material-symbols-rounded mr-2">search</span>
          <input
            type="text"
            placeholder="Search"
            className=" bg-transparent text-text_color_light placeholder:text-text_color_light dark:text-text_color_dark dark:placeholder:text-text_color_dark outline-none"
          />
        </div>
        <div
          className="mr-20 cursor-pointer bg-sidebar_item_color_light dark:bg-sidebar_item_color_dark flex items-center justify-between px-1 py-1 rounded-[20px] relative"
          onClick={() => dispatch(toggleDarkMode())}
        >
          <span className="material-symbols-rounded mr-1">light_mode</span>
          <span className="material-symbols-rounded">dark_mode</span>
          <span
            className={`bg-container_color_light absolute top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full ${
              isDarkMode ? "left-1" : "right-1"
            }`}
          ></span>
        </div>
        {userData?.photoUrl ? (
          <div
            className="text-text_color_light dark:text-text_color_dark bg-sidebar_item_color_light dark:bg-sidebar_item_color_dark flex items-center rounded-full relative w-[32px] h-[32px] cursor-pointer"
            onClick={() => dispatch(toggleForm(true))}
          >
            <img
              src={userData?.photoUrl}
              alt=""
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        ) : (
          <div
            className="text-text_color_light dark:text-text_color_dark bg-sidebar_item_color_light dark:bg-sidebar_item_color_dark flex items-center p-1 rounded-full relative w-[32px] h-[32px] cursor-pointer"
            onClick={() => dispatch(toggleForm(true))}
          >
            <span className={`material-symbols-rounded`}>account_circle</span>
          </div>
        )}
      </div>
      {showForm && (
        <div className=" absolute top-[78px] right-8">
          <AuthForm />
        </div>
      )}
    </div>
  );
};

export default Topbar;
