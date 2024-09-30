export type FormInput = {
  email: string;
  password: string;
};

export type UserInitState = {
  userData: object;
  loading: boolean;
  error: string | undefined;
};
