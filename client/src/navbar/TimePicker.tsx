import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const TimePicker = () => {
  const [months, setMonths] = useState<string[]>([]);
  const [selectedMonth, setSelectedMonth] = useState<string>("");
  const { userData } = useSelector((state: any) => state.user);

  useEffect(() => {
    const generateMonths = () => {
      const creationDate = new Date(322472070);
      const currentDate = new Date();
      const monthList: string[] = [];

      let year = creationDate.getFullYear();
      let month = creationDate.getMonth(); // 0 = January, 11 = December

      while (
        year < currentDate.getFullYear() ||
        (year === currentDate.getFullYear() && month <= currentDate.getMonth())
      ) {
        const monthName = new Intl.DateTimeFormat("en-US", {
          month: "short",
        }).format(new Date(year, month));
        monthList.push(`${monthName} - ${year}`);

        // Move to the next month
        month++;
        if (month > 11) {
          month = 0;
          year++;
        }
      }

      setMonths(monthList);
      setSelectedMonth(monthList[monthList.length - 1]); // Default to latest month
    };

    generateMonths();
  }, [userData.createdAt]);

  return (
    <div className="mr-20">
      <label htmlFor="monthPicker">Select a month:</label>
      <select
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
