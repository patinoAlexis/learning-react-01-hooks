import { createRoot } from "react-dom/client";
import "./index.css";
// import { MultipleCustomHook } from "./03-useFetch/MultipleCustomHook.jsx";
// import {FocusScreen} from "./04-useRef/FocusScreen.jsx";
import { Father } from "./07-tarea-memo/Father.jsx";
import { CallbackHook } from "./06-memos/CallbackHook.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  //   // <HooksApp />
  //   // <CounterApp />
  //   <SimpleForm />,
  //   <FormWithCustomHook />
  //   <MultipleCustomHook />
  //     <FocusScreen></FocusScreen>
  //     <LayoutPage></LayoutPage>
  // <Memorize></Memorize>,
  // <MemoHook></MemoHook>,
  // <CallbackHook></CallbackHook>,
  <Father></Father>,
  // </StrictMode>,
);
