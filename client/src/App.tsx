import React from "react";
import Topbar from "./sections/Topbar";
import Sidebar from "./sections/Sidebar";
import MainContent from "./components/MainContent";
import { useSelector } from "react-redux";

const App = () => {
  const { isDarkMode } = useSelector((state: any) => state.darkmode);

  return (
    <main
      className={`w-full h-full dark:bg-body_color_dark ${
        isDarkMode && "dark"
      }`}
    >
      <div className="w-full h-full flex items-center justify-center bg-body_color_light dark:bg-body_color_dark">
        <div className="w-full h-full max-w-[1500px] max-h-[900px] bg-container_color_light dark:bg-container_color_dark rounded-xl shadow-lg">
          <Topbar />
          <div className="w-full h-[calc(100%-98px)] flex">
            <Sidebar />
            <MainContent />
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
