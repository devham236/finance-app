import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../redux/slices/darkmodeSlice";
import { toggleAuthForm } from "../redux/slices/authFormSlice";
import AuthForm from "../components/AuthForm";
import AuthenticatedUser from "../components/AuthenticatedUser";

const Topbar = () => {
  const { isDarkMode } = useSelector((state: any) => state.darkmode);
  const { userData } = useSelector((state: any) => state.user);
  const { showForm } = useSelector((state: any) => state.authForm);
  const dispatch = useDispatch();

  return (
    <div className="w-full p-8 border-b-2 relative border-slate-50 dark:border-opacity-20 flex items-center justify-between text-text_color_light dark:text-text_color_dark">
      <div className="text-green_color font-bold">Ruune</div>
      <div className="flex items-center">
        {/*Month and Year Picker*/}
        <div className="flex items-center mr-20">
          <select name="" id="month-picker" className="mr-5">
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
          <select name="" id="year-picker">
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
          </select>
        </div>
        {/*Darkmode Toggle*/}
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
        {/*User Icon and Auth Form*/}
        {userData?.photoUrl ? (
          <div
            className="text-text_color_light dark:text-text_color_dark bg-sidebar_item_color_light dark:bg-sidebar_item_color_dark flex items-center rounded-full relative w-[32px] h-[32px] cursor-pointer"
            onClick={() => dispatch(toggleAuthForm(true))}
          >
            <img
              src={userData.photoUrl}
              alt=""
              className="w-full h-full object-cover rounded-full"
              loading="lazy"
            />
          </div>
        ) : (
          <div
            className="text-text_color_light dark:text-text_color_dark bg-sidebar_item_color_light dark:bg-sidebar_item_color_dark flex items-center p-1 rounded-full w-[32px] h-[32px] cursor-pointer relative"
            onClick={() => dispatch(toggleAuthForm(true))}
          >
            <span className={`material-symbols-rounded`}>account_circle</span>
            {userData?.id !== "" && (
              <div className="w-[10px] h-[10px] bg-green_color absolute top-0 right-[-2px] rounded-full"></div>
            )}
          </div>
        )}
      </div>
      {showForm && (
        <div className=" absolute top-[78px] right-8 shadow-xl z-50">
          <span
            onClick={() => dispatch(toggleAuthForm(false))}
            className="material-symbols-rounded absolute top-[10px] right-[10px] font-bold cursor-pointer"
          >
            close
          </span>
          {userData?.id !== "" ? <AuthenticatedUser /> : <AuthForm />}
        </div>
      )}
    </div>
  );
};

export default Topbar;
