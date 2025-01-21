export const calcExpensePercentage = (
  expense: number,
  totalExpenses: number
) => {
  return ((expense / totalExpenses) * 100).toFixed(2);
};

export const getFullYearFromTimeStamp = (timestamp: string): number => {
  return new Date(parseInt(timestamp, 10)).getFullYear();
};

export const getMonthFromTimeStamp = (timestamp: string): string => {
  return new Date(parseInt(timestamp, 10)).toLocaleString("en-US", {
    month: "long",
  });
};

export const getYearsFromTimeAccCreated = (timestamp: string): number[] => {
  const startYear = getFullYearFromTimeStamp(timestamp);
  const currentYear = new Date().getFullYear();
  let years = [];
  for (let i = startYear; i <= currentYear; i++) {
    years.push(i);
  }
  return years;
};
