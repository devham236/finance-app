import React from "react";
import Goal from "./Goal";
import { useDispatch, useSelector } from "react-redux";
import { toggleEntryForm } from "../slices/entryFormSlice";
import { GoalType } from "../utils/types/types";

const Goals = () => {
  const dispatch = useDispatch();
  const { goalsData } = useSelector((state: any) => state.goals);

  return (
    <div className="grid-item flex flex-col">
      <div className="flex items-center justify-between">
        <h3 className="font-[600] self-start">Goals</h3>
        <button onClick={() => dispatch(toggleEntryForm("Goal"))}>
          <span className="material-symbols-rounded text-green_color">
            add_circle
          </span>
        </button>
      </div>
      <div className="w-full mt-2 flex flex-col">
        {goalsData.map((goal: GoalType, index) => (
          <Goal goal={goal} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Goals;
