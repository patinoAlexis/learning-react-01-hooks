import { createRoot } from "react-dom/client";
import "./index.css";
import { StrictMode } from "react";
// import { MultipleCustomHook } from "./03-useFetch/MultipleCustomHook.jsx";
// import {FocusScreen} from "./04-useRef/FocusScreen.jsx";
import {LayoutPage} from "./05-useLayoutEffect/Layout.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/*// <HooksApp />*/}
    {/*// <CounterApp />*/}
    {/*<SimpleForm />,*/}
    {/*<FormWithCustomHook />*/}
    {/*<MultipleCustomHook />*/}
    {/*  <FocusScreen></FocusScreen>*/}
      <LayoutPage></LayoutPage>
  </StrictMode>,
);
