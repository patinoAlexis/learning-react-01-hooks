import { createRoot } from "react-dom/client";
import "./index.css";
// import { MultipleCustomHook } from "./03-useFetch/MultipleCustomHook.jsx";
// import {FocusScreen} from "./04-useRef/FocusScreen.jsx";
import { TodoApp } from "./08-useReducer/TodoApp.jsx";
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
  // <Father></Father>,
  // </StrictMode>,
  <TodoApp></TodoApp>,
);
