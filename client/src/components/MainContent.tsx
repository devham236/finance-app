import React from "react";
import { Route, Routes } from "react-router-dom";
import Overview from "../pages/Overview";
import Settings from "../pages/Settings";
import { useSelector } from "react-redux";
import EntryForm from "./EntryForm";

const MainContent = () => {
  const { isOpen, chart } = useSelector((state: any) => state.entryForm);

  return (
    <div className="w-full h-full flex items-center justify-center text-text_color_light p-[1.5rem]">
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      {isOpen && <EntryForm chart={chart} />}
    </div>
  );
};

export default MainContent;
