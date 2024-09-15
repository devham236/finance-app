import React from "react";
import { Route, Routes } from "react-router-dom";
import Overview from "../pages/Overview";
import Settings from "../pages/Settings";

const MainContent = () => {
  return (
    <div className="w-full h-full flex items-center justify-center text-text_color_light">
      <Routes>
        <Route path="/overview" element={<Overview />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
};

export default MainContent;
