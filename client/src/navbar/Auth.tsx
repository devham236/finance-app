import React from "react";
import { toggleAuthForm } from "../redux/slices/authFormSlice";
import { useDispatch, useSelector } from "react-redux";
import AuthenticatedUser from "../components/AuthenticatedUser";
import AuthForm from "../components/AuthForm";

const Auth = () => {
  const { showForm } = useSelector((state: any) => state.authForm);
  const { userData } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  return (
    showForm && (
      <div className=" absolute top-[78px] right-8 shadow-xl z-50">
        <span
          onClick={() => dispatch(toggleAuthForm(false))}
          className="material-symbols-rounded absolute top-[10px] right-[10px] font-bold cursor-pointer"
        >
          close
        </span>
        {userData?.id !== "" ? <AuthenticatedUser /> : <AuthForm />}
      </div>
    )
  );
};

export default Auth;
