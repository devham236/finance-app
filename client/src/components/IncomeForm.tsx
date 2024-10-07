import React, { useState } from "react";
import { toggleIncomeForm } from "../slices/incomeFormSlice";
import { useDispatch } from "react-redux";

const IncomeForm = () => {
  const [newIncomeInput, setNewIncomeInput] = useState({
    income: 0,
    color: "",
  });
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setNewIncomeInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  console.log(newIncomeInput);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
      <div className="w-[500px] p-[1.5rem] bg-sidebar_item_color_light shadow-md rounded-md">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Add Income</h2>
          <span
            className="material-symbols-rounded font-bold"
            onClick={() => dispatch(toggleIncomeForm())}
          >
            close
          </span>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col">
            <label htmlFor="income" className="mb-2 font-semibold">
              Income:
            </label>
            <input
              onChange={(e) => handleChange(e)}
              type="number"
              name="income"
              placeholder="Number"
              className="mb-4 dark:border-container_color_dark bg-transparent border-container_color_light border-2 rounded-md p-2 placeholder:text-container_color_light dark:placeholder:text-container_color_dark outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="color" className="font-semibold">
              Color:
            </label>
            <input
              onChange={(e) => handleChange(e)}
              type="color"
              name="color"
              defaultValue={"#3e9c35"}
              className="w-10 h-10 rounded-xl appearance-none outline-none border-none"
            />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default IncomeForm;
