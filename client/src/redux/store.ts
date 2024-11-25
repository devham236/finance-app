import { configureStore } from "@reduxjs/toolkit";
import { PERSIST, persistStore } from "redux-persist";
import {
  persistedDarkmodeReducer,
  persistedDoughnutReducer,
  persistedSidebarReducer,
  persistedUserReducer,
  persistedGoalsReducer,
} from "./persistReducers";
import authFormReducer from "./slices/authFormSlice";
import totalIncomeReducer from "./slices/totalIncomeSlice";
import entryFormReducer from "./slices/entryFormSlice";
import lineChartReducer from "./slices/lineChartSlice";
import barChartReducer from "./slices/barChartSlice";

export const store = configureStore({
  reducer: {
    sidebar: persistedSidebarReducer,
    darkmode: persistedDarkmodeReducer,
    user: persistedUserReducer,
    authForm: authFormReducer,
    doughnutChart: persistedDoughnutReducer,
    totalIncome: totalIncomeReducer,
    entryForm: entryFormReducer,
    barChart: barChartReducer,
    lineChart: lineChartReducer,
    goals: persistedGoalsReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    });
  },
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
