export const calcExpensePercentage = (
  expense: number,
  totalExpenses: number
) => {
  return ((expense / totalExpenses) * 100).toFixed(2);
};
