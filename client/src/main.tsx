import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";

import App from "./App.tsx";
import "./styles/index.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import sidebarReducer from "./slices/sidebarSlice.tsx";
import darkmodeReducer from "./slices/darkmodeSlice.tsx";

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    darkmode: darkmodeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </Provider>
);
