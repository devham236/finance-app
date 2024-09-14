import React from "react";

const App = () => {
  return (
    <div className="w-full h-full bg-container_color rounded-lg shadow-lg">
      <div className="w-full py-4 border-b-2 border-slate-50">Topbar</div>
      <div className="w-full h-[calc(100%-58px)] flex">
        <div className="h-full w-40 text-center border-r-2 border-slate-50">
          Sidebar
        </div>
        <div className="w-[calc(100%-160px)] h-full">Main Content</div>
      </div>
    </div>
  );
};

export default App;
