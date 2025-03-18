import { useCounter } from "../hooks/useCounter.jsx";
import { SmallTitle } from "./SmallTitle.jsx";
import { useState } from "react";

export const Memorize = () => {
  const { counter, increment } = useCounter(0);
  const [show, setShow] = useState(true);
  return (
    <>
      <h1 className="tw-text-2xl">
        Counter: <SmallTitle value={counter}></SmallTitle>
      </h1>
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
