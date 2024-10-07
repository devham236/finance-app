import React from "react";
import { toggleIncomeForm } from "../slices/incomeFormSlice";
import { useDispatch } from "react-redux";

const IncomeForm = () => {
  const dispatch = useDispatch();
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
      <div className="w-[500px] p-[1.5rem] bg-sidebar_item_color_light shadow-md">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Add Income</h2>
          <span
            className="material-symbols-rounded"
            onClick={() => dispatch(toggleIncomeForm())}
          >
            close
          </span>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default IncomeForm;
