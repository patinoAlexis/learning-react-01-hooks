import { useState } from "react";

export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = (val = 1) => {
    setCounter(counter + val);
  };
  const decrement = (val = 1) => {
    setCounter(counter - val);
  };
  const reset = (val = undefined) => {
    val ? setCounter(val) : setCounter(initialValue);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
