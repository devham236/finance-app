import storage from "redux-persist/lib/storage";

export const persistDarkmodeConfig = {
  key: "darkmode",
  storage,
};

export const persistUserConfig = {
  key: "user",
  storage,
};
