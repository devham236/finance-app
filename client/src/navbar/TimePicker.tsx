import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { generateMonths } from "../utils/helpers/methods";

const TimePicker = () => {
  const [months, setMonths] = useState<string[]>([]);
  const [selectedMonth, setSelectedMonth] = useState<string>("");
  const { userData } = useSelector((state: any) => state.user);

  useEffect(() => {
    const monthList = generateMonths(userData.createdAt);
    setMonths(monthList);
    setSelectedMonth(monthList[monthList.length - 1]);
  }, [userData.createdAt]);

  return (
    <div className="mr-20">
      <select
        className="bg-item_color_light dark:bg-item_color_dark p-1 rounded-md"
        id="monthPicker"
        value={selectedMonth}
        onChange={(e) => setSelectedMonth(e.target.value)}
      >
        {months.map((month, index) => (
          <option key={index} value={month}>
            {month}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TimePicker;
