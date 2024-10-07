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

export const store = configureStore({
  reducer: {
    sidebar: persistedSidebarReducer,
    darkmode: persistedDarkmodeReducer,
    user: persistedUserReducer,
    authForm: authFormReducer,
    doughnutChart: persistedDoughnutReducer,
    totalIncome: totalIncomeReducer,
    incomeForm: incomeFormReducer,
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
