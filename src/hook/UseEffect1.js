import { React, useEffect, useState } from "react";

function EffectHook() {
  let [count, setcount] = useState(0);

  useEffect(() => {
    document.title = `you clicked ${count} times`;
  }, [count]);
  return (
    <>
      <div>
        <button onClick={() => setcount((num) => num + 1)}>
          click {count} times{" "}
        </button>
      </div>
    </>
  );
}

export default EffectHook;
