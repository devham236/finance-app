import React from "react";
import Goal from "./Goal";

const Goals = () => {
  return (
    <div className="grid-item flex flex-col">
      <div className="flex items-center justify-between">
        <h3 className="font-[600] self-start">Goals</h3>
        <button>
          <span className="material-symbols-rounded text-green_color">
            add_circle
          </span>
        </button>
      </div>
      <div className="w-full mt-2 flex flex-col">
        <Goal />
      </div>
    </div>
  );
};

export default Goals;
