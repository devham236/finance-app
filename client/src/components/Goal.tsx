import React from "react";

const Goal = () => {
  return (
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
  );
};

export default Goal;
