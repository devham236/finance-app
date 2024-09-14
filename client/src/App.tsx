import React from "react";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

const App = () => {
  return (
    <div className="w-full h-full bg-body_color_light flex items-center justify-center">
      <div className="w-full h-full max-w-[1500px] max-h-[900px] bg-container_color_light rounded-lg shadow-lg">
        <Topbar />
        <div className="w-full h-[calc(100%-58px)] flex">
          <Sidebar />
          <MainContent />
        </div>
      </div>
    </div>
  );
};

export default App;
