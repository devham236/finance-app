import { persistReducer } from "redux-persist";
import darkmodeReducer from "../slices/darkmodeSlice";
import userReducer from "../slices/userSlice";
import { persistDarkmodeConfig, persistUserConfig } from "./persistConfigs";

export const persistedDarkmodeReducer = persistReducer(
  persistDarkmodeConfig,
  darkmodeReducer
);

export const persistedUserReducer = persistReducer(
  persistUserConfig,
  userReducer
);
