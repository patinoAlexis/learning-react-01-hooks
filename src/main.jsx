import { createRoot } from "react-dom/client";
import "./index.css";
import { StrictMode } from "react";
import { SimpleForm } from "./02-useEffect/SimpleForm.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/*// <HooksApp />*/}
    {/*// <CounterApp />*/}
    <SimpleForm />,
  </StrictMode>,
);
