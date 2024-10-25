import React from "react";
import { useDispatch } from "react-redux";
import { toggleGoalStatus } from "../slices/goalsSlice";

const Goal = ({ goal }) => {
  const dispatch = useDispatch();

  return (
    <div className="w-full flex flex-col p-2 mb-2 last:mb-0 rounded-md hover:shadow-md duration-200 cursor-pointer">
      <div className="flex items-center">
        <input
          onChange={() => dispatch(toggleGoalStatus(goal.id))}
          type="checkbox"
          name="goal"
          id=""
          className="appearance-none mr-3 w-4 h-4 rounded-full border-2 border-green_color checked:bg-green_color goal-checkbox relative cursor-pointer"
        />
        <p className="text-[1rem] font-[600]">{goal.title}</p>
      </div>
      <p>{goal.description}</p>
    </div>
  );
};

export default Goal;
