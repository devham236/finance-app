import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";

import App from "./App.tsx";
import "./styles/index.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import sidebarReducer from "./slices/sidebarSlice.ts";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import darkmodeReducer from "./slices/darkmodeSlice.ts";

const persistDarkmodeConfig = {
  key: "darkmode",
  storage,
};

const persistSidebarConfig = {
  key: "sidebar",
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

const store = configureStore({
  reducer: {
    sidebar: persistedSidebarReducer,
    darkmode: persistedDarkmodeReducer,
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
