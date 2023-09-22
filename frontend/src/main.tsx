import React from "react";
import ReactDOM from "react-dom/client";
import { AppLayout } from "./components/AppLayout.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppLayout />
  </React.StrictMode>
);
