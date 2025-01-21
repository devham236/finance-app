export const calcExpensePercentage = (
  expense: number,
  totalExpenses: number
) => {
  return ((expense / totalExpenses) * 100).toFixed(2);
};

export const getFullYearFromTimeStamp = (timestamp: string): number => {
  return new Date(parseInt(timestamp, 10)).getFullYear();
};

export const getMonthFromTimeStamp = (timestamp: string): number => {
  return new Date(parseInt(timestamp, 10)).getMonth();
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

export const getMonthsFromTimeAccCreated = (timestamp: string): number[] => {
  const startMonth = getMonthFromTimeStamp(timestamp);
  const currentMonth = new Date().getMonth();
  let months = [];
  for (let i = 0; i <= 9; i++) {
    months.push(i);
  }
  return months;

  // months are numbers from 0 to 11 => 0 is January, 1 is February, 2 is March, etc.
  // startMonth is the month the account was created by the user
  // currentMonth is the current month
  // we want to return an array of months from startMonth to currentMonth

  // if the account was created in January and it's currently January, we should return [0]
  // if the account was created in January and it's currently February, we should return [0, 1]
  // if the account was created in December and it's currently January, we should return [11, 0]

  // if after the number 11, so December, we have a 0, so January, it means the timespan goes from one year to the next
  // that means the year count should go up by one
};
