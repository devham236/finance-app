import React from "react";
import Goal from "./Goal";
import { useDispatch } from "react-redux";
import { toggleEntryForm } from "../slices/entryFormSlice";

const Goals = () => {
  const dispatch = useDispatch();
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
        <Goal />
      </div>
    </div>
  );
};

export default Goals;
