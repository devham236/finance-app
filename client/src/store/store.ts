import { configureStore } from "@reduxjs/toolkit";
import { PERSIST, persistStore } from "redux-persist";
import {
  persistedBarChartReducer,
  persistedDarkmodeReducer,
  persistedDoughnutReducer,
  persistedSidebarReducer,
  persistedUserReducer,
} from "./persistReducers";
import authFormReducer from "../slices/authFormSlice";
import totalIncomeReducer from "../slices/totalIncomeSlice";
import entryFormReducer from "../slices/entryFormSlice";
import totalExpensesReducer from "../slices/totalExpensesSlice";
import lineChartReducer from "../slices/lineChartSlice";
import goalsSliceReducer from "../slices/goalsSlice";

export const store = configureStore({
  reducer: {
    sidebar: persistedSidebarReducer,
    darkmode: persistedDarkmodeReducer,
    user: persistedUserReducer,
    authForm: authFormReducer,
    doughnutChart: persistedDoughnutReducer,
    totalIncome: totalIncomeReducer,
    entryForm: entryFormReducer,
    totalExpenses: totalExpensesReducer,
    barChart: persistedBarChartReducer,
    lineChart: lineChartReducer,
    goal: goalsSliceReducer,
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
