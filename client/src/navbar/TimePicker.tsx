import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generateMonths } from "../utils/helpers/methods";
import { setMonths, setSelectedMonth } from "../redux/slices/timePickerSlice";

const TimePicker = () => {
  const { userData } = useSelector((state: any) => state.user);
  const { months, selectedMonth } = useSelector(
    (state: any) => state.timePicker
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userData?.createdAt) return;
    const monthList = generateMonths(userData.createdAt);
    dispatch(setMonths(monthList));
  }, [userData?.createdAt]);

  return (
    <div className="mr-20">
      <select
        className="cursor-pointer bg-item_color_light dark:bg-item_color_dark p-1 rounded-md focus:outline-none"
        value={selectedMonth}
        onChange={(e) => dispatch(setSelectedMonth(e.target.value))}
      >
        {months?.map((month: string, index: number) => (
          <option key={index} value={month}>
            {month}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TimePicker;
