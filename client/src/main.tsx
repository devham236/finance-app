import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";

import App from "./App.tsx";
import "./styles/index.css";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {},
});

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
