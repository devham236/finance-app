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
  displayName: string | null;
  email: string | null;
  photoUrl: string | null;
  uid: string | null;
};
