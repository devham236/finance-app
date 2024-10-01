import React from "react";
import { Route, Routes } from "react-router-dom";
import Overview from "../pages/Overview";
import Settings from "../pages/Settings";
import Account from "../pages/Account";
import SignupForm from "./SignupForm";

const MainContent = () => {
  return (
    <div className="w-full h-full flex items-center justify-center text-text_color_light p-[1.5rem]">
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/account" element={<Account />} />
        <Route path="/auth/*" element={<SignupForm />} />
      </Routes>
    </div>
  );
};

export default MainContent;
