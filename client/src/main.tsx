import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";

import App from "./App.tsx";
import "./styles/index.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import sidebarReducer from "./slices/sidebarSlice.tsx";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import darkmodeReducer from "./slices/darkmodeSlice.tsx";

const persistConfig = {
  key: "root",
  storage,
};

const persistedDarkmodeReducer = persistReducer(persistConfig, darkmodeReducer);

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
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
