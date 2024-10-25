import { useState } from "react";
import "./index.css";
import { CounterItem } from "./CounterItem.jsx";
export const CounterApp = () => {
  const [counter, setCounter] = useState(0);

  const [objectCounter, setObjectCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  const counterChange = (counterType, quantity) => {
    const object = { ...objectCounter };
    object[counterType] = object[counterType] + quantity;
    setObjectCounter(object);
  };

  return (
    <>
      <div className="container-example">
        <h1>First example</h1>
        <h2>Example: {counter}</h2>
        <button
          className="btn btn-primary"
          onClick={() => setCounter(counter + 1)}
        >
          +1
        </button>
        <button
          className="btn btn-primary"
          onClick={() => setCounter(counter - 1)}
        >
          -1
        </button>
      </div>
      <div className="container-example">
        <h1>Second example</h1>
        <CounterItem
          counter={objectCounter.counter1}
          changeCounter={(quantity) => counterChange("counter1", quantity)}
        ></CounterItem>
        <CounterItem
          counter={objectCounter.counter2}
          changeCounter={(quantity) => counterChange("counter2", quantity)}
        ></CounterItem>
        <CounterItem
          counter={objectCounter.counter3}
          changeCounter={(quantity) => counterChange("counter3", quantity)}
        ></CounterItem>
      </div>
    </>
  );
};
