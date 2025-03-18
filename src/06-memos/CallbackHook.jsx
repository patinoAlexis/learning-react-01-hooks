import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement.jsx";

export const CallbackHook = () => {
  const [count, setCount] = useState(10);

  const increment = useCallback(() => {
    setCount((val) => val + 1);
  }, []);

  // const increment = () => {
  //   setCount(count + 1);
  // };

  return (
    <>
      <h1>useCallback hook: {count}</h1>

      <ShowIncrement increment={increment}></ShowIncrement>
    </>
  );
};
