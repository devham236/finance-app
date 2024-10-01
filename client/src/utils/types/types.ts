export type FormInput = {
  email: string;
  password: string;
};

export type UserInitState = {
  userData: object | unknown;
  loading: boolean;
  error: string | undefined;
  loggedIn: boolean;
};
