import { persistReducer } from "redux-persist";
import darkmodeReducer from "../slices/darkmodeSlice";
import sidebarReducer from "../slices/sidebarSlice";
import userReducer from "../slices/userSlice";
import doughnutChartReducer from "../slices/doughnutChartSlice";
import barChartReducer from "../slices/barChartSlice";
import {
  persistDarkmodeConfig,
  persistDoughnutConfig,
  persistBarConfig,
  persistSidebarConfig,
  persistUserConfig,
} from "./persistConfigs";

export const persistedDarkmodeReducer = persistReducer(
  persistDarkmodeConfig,
  darkmodeReducer
);

export const persistedSidebarReducer = persistReducer(
  persistSidebarConfig,
  sidebarReducer
);

export const persistedUserReducer = persistReducer(
  persistUserConfig,
  userReducer
);

export const persistedDoughnutReducer = persistReducer(
  persistDoughnutConfig,
  doughnutChartReducer
);

export const persistedBarChartReducer = persistReducer(
  persistBarConfig,
  barChartReducer
);
