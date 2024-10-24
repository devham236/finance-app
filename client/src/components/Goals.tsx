import React from "react";

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
        <div className="w-full flex flex-col">
          <div className="flex items-center">
            <input
              type="checkbox"
              name="goal"
              id=""
              className="appearance-none mr-3 w-4 h-4 rounded-full border-2 border-green_color checked:bg-green_color goal-checkbox relative"
            />
            <p className="text-[1rem] font-[600]">Goal Title</p>
          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default Goals;
