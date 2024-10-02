export type FormInput = {
  email: string;
  password: string;
};

export type UserInitState = {
  userData: object | unknown;
  loading: boolean;
  error: string | undefined;
};

export type UserData = {
  displayName: string | null;
  email: string | null;
  photoUrl: string | null;
  id: string | null;
};
