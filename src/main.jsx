import { createRoot } from "react-dom/client";
import "./index.css";
import { StrictMode } from "react";
import { MultipleCustomHook } from "./03-useFetch/MultipleCustomHook.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/*// <HooksApp />*/}
    {/*// <CounterApp />*/}
    {/*<SimpleForm />,*/}
    {/*<FormWithCustomHook />*/}
    <MultipleCustomHook />
  </StrictMode>,
);
