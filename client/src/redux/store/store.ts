import { configureStore } from "@reduxjs/toolkit";
import { PERSIST, persistStore } from "redux-persist";
import {
  persistedDarkmodeReducer,
  persistedUserReducer,
} from "./persistReducers";
import authFormReducer from "../slices/authFormSlice";
import newEntryReducer from "../slices/newEntrySlice";
import compareSlice from "../slices/compareSlice";
import expensesReducer from "../slices/expensesSlice";
import incomeReducer from "../slices/incomeSlice";
import goalsReducer from "../slices/goalsSlice";
import editGoalReducer from "../slices/editGoalSlice";
import sidebarReducer from "../slices/sidebarSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    darkmode: persistedDarkmodeReducer,
    user: persistedUserReducer,
    authForm: authFormReducer,
    income: incomeReducer,
    newEntry: newEntryReducer,
    expenses: expensesReducer,
    compare: compareSlice,
    goals: goalsReducer,
    editGoal: editGoalReducer,
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
