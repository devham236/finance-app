import React, { ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleAuthForm } from "../redux/slices/authFormSlice";

const UserIcon = ({ children }: { children: ReactNode }) => {
  const { userData } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  return userData?.photoUrl ? (
    <div
      className="text-text_color_light dark:text-text_color_dark bg-item_color_light dark:bg-item_color_dark flex items-center rounded-full relative w-[32px] h-[32px] cursor-pointer"
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
      className="text-text_color_light dark:text-text_color_dark bg-item_color_light dark:bg-item_color_dark flex items-center p-1 rounded-full w-[32px] h-[32px] cursor-pointer relative"
      onClick={() => dispatch(toggleAuthForm(true))}
    >
      {children}
      {userData?.id !== "" && (
        <div className="w-[10px] h-[10px] bg-green_color absolute top-0 right-[-2px] rounded-full"></div>
      )}
    </div>
  );
};

export default UserIcon;
