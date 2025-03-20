export const calcExpensePercentage = (
  expense: number,
  totalExpenses: number
) => {
  return ((expense / totalExpenses) * 100).toFixed(2);
};

export const getInitialState = (entryType: string) => {
  switch (entryType) {
    case "Income":
      return { income: 0, label: "", color: "#3e9c35" };
    case "Expense":
      return { expense: 0, label: "", color: "#3e9c35" };
    case "Goal":
      return { title: "", description: "", achieved: false };
    default:
      return {};
  }
};
