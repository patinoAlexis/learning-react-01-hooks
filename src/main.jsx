import { createRoot } from "react-dom/client";
import "./index.css";
import { StrictMode } from "react";
// import { CounterApp } from "./01-useState/CounterApp.jsx";
import { SimpleForm } from "./02-useEffect/SimpleForm.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/*<HooksApp />*/}
    {/*<CounterApp />*/}
    <SimpleForm />
  </StrictMode>,
);
