export const calcExpensePercentage = (
  expense: number,
  totalExpenses: number
): string => {
  return ((expense / totalExpenses) * 100).toFixed(2);
};
