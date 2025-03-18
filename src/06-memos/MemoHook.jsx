import { useCounter } from "../hooks/useCounter.jsx";
import { useMemo, useState } from "react";

const heavyStuff = (iterationNumber = 0) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log("heavy");
  }
  return `Iteration: ${iterationNumber} done`;
};

export const MemoHook = () => {
  const { counter, increment } = useCounter(0);
  const [show, setShow] = useState(true);
  const memorizedValue = useMemo(() => heavyStuff(5000), [counter]);
  return (
    <>
      <h1 className="tw-text-2xl">
        Counter: <small>{counter}</small>
      </h1>
      <h4>{memorizedValue}</h4>
      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>
      <button
        className="btn btn-primary"
        onClick={() => setShow(!show)}
        style={{ marginTop: "10px" }}
        type="button"
      >
        {show ? "Hide" : "Show"}
      </button>
    </>
  );
};
