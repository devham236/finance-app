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

export type UserData = {
  displayName: string;
  email: string;
  photoUrl: string;
  uid: string;
};
