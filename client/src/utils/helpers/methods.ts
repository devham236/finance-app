export const calcExpensePercentage = (
  expense: number,
  totalExpenses: number
) => {
  return ((expense / totalExpenses) * 100).toFixed(2);
};

export const getFullYearFromTimeStamp = (timestamp: string): number => {
  return new Date(parseInt(timestamp, 10)).getFullYear();
};
