import React from "react";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import { useSelector } from "react-redux";

const App = () => {
  const { isDarkMode } = useSelector((state: any) => state.darkmode);

  return (
    <main className={`w-[100vw] h-[100vh] ${isDarkMode && "dark"}`}>
      <div className="w-full h-full bg-body_color_light dark:bg-body_color_dark flex items-center justify-center">
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
