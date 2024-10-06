import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";

import App from "./App.tsx";
import "./styles/index.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import sidebarReducer from "./slices/sidebarSlice.ts";
import darkmodeReducer from "./slices/darkmodeSlice.ts";
import userReducer from "./slices/userSlice.ts";
import authFormReducer from "./slices/authFormSlice.ts";
import doughnutChartReducer from "./slices/doughnutChartSlice.ts";

import storage from "redux-persist/lib/storage";
import { PERSIST, persistReducer, persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const persistDarkmodeConfig = {
  key: "darkmode",
  storage,
};

const persistSidebarConfig = {
  key: "sidebar",
  storage,
};

const persistUserConfig = {
  key: "user",
  storage,
};

const persistDoughnutConfig = {
  key: "doughnutChart",
  storage,
};

const persistedDarkmodeReducer = persistReducer(
  persistDarkmodeConfig,
  darkmodeReducer
);

const persistedSidebarReducer = persistReducer(
  persistSidebarConfig,
  sidebarReducer
);

const persistedUserReducer = persistReducer(persistUserConfig, userReducer);

const persistedDoughnutReducer = persistReducer(
  persistDoughnutConfig,
  doughnutChartReducer
);

const store = configureStore({
  reducer: {
    sidebar: persistedSidebarReducer,
    darkmode: persistedDarkmodeReducer,
    user: persistedUserReducer,
    authForm: authFormReducer,
    doughnutChart: persistedDoughnutReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    });
  },
});

const persistor = persistStore(store);

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <StrictMode>
          <App />
        </StrictMode>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
