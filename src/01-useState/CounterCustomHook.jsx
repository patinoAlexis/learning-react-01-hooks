import { useCounter } from "../hooks/useCounter.jsx";

export const CounterCustomHook = () => {
  const { counter, decrement, increment, reset } = useCounter();
  return (
    <>
      <h1>CounterCustomHook {counter}</h1>

      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>
      <button className="btn btn-primary" onClick={() => reset(5)}>
        Reset
      </button>
      <button className="btn btn-primary" onClick={() => decrement()}>
        -1
      </button>
    </>
  );
};
