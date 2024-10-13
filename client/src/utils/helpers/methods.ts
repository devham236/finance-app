export const calcExpensePercentage = (expense, totalExpenses) => {
  return ((expense / totalExpenses) * 100).toFixed(2);
};
