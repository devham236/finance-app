export const calcExpensePercentage = (
  expense: number,
  totalExpenses: number
): number => {
  return Number(((expense / totalExpenses) * 100).toFixed(2));
};
