export type FormInput = {
  email: string;
  password: string;
};

export type UserInitState = {
  userData: UserData | unknown;
  loading: boolean;
  error: string | undefined;
};

export type UserData = {
  displayName: string | null;
  email: string | null;
  photoUrl: string | null;
  id: string | null;
  createdAt: string | null;
};

export type NewIncome = {
  income: number;
  label: string;
  color: string;
  [key: string]: unknown;
};

export type NewExpense = {
  id: string;
  expense: number;
  label: string;
  color: string;
  [key: string]: unknown;
};

export type GoalType = {
  title: string;
  description: string;
  achieved: boolean;
  id: string;
  [key: string]: unknown;
};

// Component Prop Types
export type ExpenseBarPropsType = {
  expense: NewExpense;
};

export type GoalPropsType = {
  goal: GoalType;
};
