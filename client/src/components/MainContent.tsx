import React from "react";
import { Route, Routes } from "react-router-dom";
import Overview from "../pages/Overview";
import Settings from "../pages/Settings";
import IncomeForm from "./IncomeForm";
import { useSelector } from "react-redux";

const MainContent = () => {
  const { isOpen } = useSelector((state: any) => state.incomeForm);

  return (
    <div className="w-full h-full flex items-center justify-center text-text_color_light p-[1.5rem]">
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      {isOpen && <IncomeForm />}
    </div>
  );
};

export default MainContent;
