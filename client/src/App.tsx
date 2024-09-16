import React from "react";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import { useSelector } from "react-redux";

const App = () => {
  const { isDarkMode } = useSelector((state) => state.darkmode);

  return (
    <div
      className={`w-full h-full bg-body_color_light flex items-center justify-center ${
        isDarkMode && "dark"
      }`}
    >
      <div className="w-full h-full max-w-[1500px] max-h-[900px] bg-container_color_light dark:bg-container_color_dark rounded-xl shadow-lg">
        <Topbar />
        <div className="w-full h-[calc(100%-90px)] flex">
          <Sidebar />
          <MainContent />
        </div>
      </div>
    </div>
  );
};

export default App;
