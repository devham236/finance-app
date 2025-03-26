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

export const generateMonths = (timestamp: string): string[] => {
  const creationDate = new Date(Number(timestamp));
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

  return monthList;
};

export const genCurrentMonth = (): string => {
  const fullYear = new Date().getFullYear();
  const month = new Date().getMonth();

  const monthName = Intl.DateTimeFormat("en-US", {
    month: "short",
  }).format(new Date(fullYear, month));

  return `${monthName} - ${fullYear}`;
};
