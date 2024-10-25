import { createRoot } from "react-dom/client";
import "./index.css";
import { StrictMode } from "react";
import { CounterApp } from "./01-useState/CounterApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/*<HooksApp />*/}
    <CounterApp />
  </StrictMode>,
);
