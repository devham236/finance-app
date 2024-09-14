import React from "react";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

const App = () => {
  return (
    <div className="w-full h-full bg-container_color rounded-lg shadow-lg">
      <Topbar />
      <div className="w-full h-[calc(100%-58px)] flex">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
};

export default App;
