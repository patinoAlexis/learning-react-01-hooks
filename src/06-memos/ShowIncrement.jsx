import { memo } from "react";

export const ShowIncrement = memo(({ increment }) => {
  console.log("re render");
  return (
    <button className="btn btn-primary" onClick={() => increment()}>
      Incrementar
    </button>
  );
});
