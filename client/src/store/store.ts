import { configureStore } from "@reduxjs/toolkit";
import { PERSIST, persistStore } from "redux-persist";
import {
  persistedDarkmodeReducer,
  persistedDoughnutReducer,
  persistedSidebarReducer,
  persistedUserReducer,
} from "./persistReducers";
import authFormReducer from "../slices/authFormSlice";
import totalIncomeReducer from "../slices/totalIncomeSlice";
import incomeFormReducer from "../slices/incomeFormSlice";
import totalExpensesReducer from "../slices/totalExpensesSlice";
import barChartReducer from "../slices/barChartSlice";

export const store = configureStore({
  reducer: {
    sidebar: persistedSidebarReducer,
    darkmode: persistedDarkmodeReducer,
    user: persistedUserReducer,
    authForm: authFormReducer,
    doughnutChart: persistedDoughnutReducer,
    totalIncome: totalIncomeReducer,
    incomeForm: incomeFormReducer,
    totalExpenses: totalExpensesReducer,
    barChart: barChartReducer,
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
