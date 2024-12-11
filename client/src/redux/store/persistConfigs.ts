import storage from "redux-persist/lib/storage";

export const persistDarkmodeConfig = {
  key: "darkmode",
  storage,
};

export const persistSidebarConfig = {
  key: "sidebar",
  storage,
};

export const persistUserConfig = {
  key: "user",
  storage,
};
