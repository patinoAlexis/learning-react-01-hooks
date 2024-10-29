import { createRoot } from "react-dom/client";
import "./index.css";
import { StrictMode } from "react";
import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/*// <HooksApp />*/}
    {/*// <CounterApp />*/}
    {/*<SimpleForm />,*/}
    <FormWithCustomHook />
  </StrictMode>,
);
