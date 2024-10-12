export const calcExpensePercentage = (
  expense: number,
  totalExpenses: number
): number => {
  return (expense / totalExpenses) * 100;
};
